import { NextResponse } from "next/server";
import { createHmac } from "crypto";
import * as Sentry from "@sentry/nextjs";

/* ── Contact store (file-based, append-only) ──────────────────── *
 * For a real production app, swap this with a database.           *
 * This file-based store is fine for early-stage lead tracking.     */

interface Contact {
  email: string;
  source: string;
  status: "active" | "bounced" | "complained" | "unsubscribed";
  createdAt: string;
  updatedAt: string;
}

const CONTACTS_FILE = "contacts.json";

async function getContacts(): Promise<Contact[]> {
  const { readFile } = await import("fs/promises");
  const { join } = await import("path");
  try {
    const data = await readFile(join(process.cwd(), CONTACTS_FILE), "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveContacts(contacts: Contact[]): Promise<void> {
  const { writeFile } = await import("fs/promises");
  const { join } = await import("path");
  await writeFile(
    join(process.cwd(), CONTACTS_FILE),
    JSON.stringify(contacts, null, 2)
  );
}

async function upsertContact(
  email: string,
  source: string,
  status: Contact["status"]
): Promise<void> {
  try {
    const contacts = await getContacts();
    const now = new Date().toISOString();
    const existing = contacts.find((c) => c.email === email);

    if (existing) {
      existing.status = status;
      existing.updatedAt = now;
    } else {
      contacts.push({ email, source, status, createdAt: now, updatedAt: now });
    }

    await saveContacts(contacts);
  } catch (err) {
    // File-based store fails on read-only filesystems (e.g. Vercel).
    // Log to Sentry but don't crash the webhook handler.
    Sentry.captureException(err, {
      tags: { area: "email", source: "webhook", action: "contact-store-write" },
      extra: { email, status },
    });
  }
}

/* ── Webhook signature verification ──────────────────────────── */

function verifySignature(
  payload: string,
  signature: string,
  timestamp: string
): boolean {
  const secret = process.env.RESEND_WEBHOOK_SECRET;
  if (!secret) return false;

  // Replay attack protection: reject timestamps older than 5 minutes
  const age = Date.now() - Number(timestamp);
  if (isNaN(age) || age > 5 * 60 * 1000) return false;

  const expected = createHmac("sha256", secret)
    .update(`${timestamp}.${payload}`)
    .digest("hex");

  return signature === expected;
}

/* ── Route handler ──────────────────────────────────────────── */

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("svix-signature") ?? "";
  const timestamp = request.headers.get("svix-timestamp") ?? "";

  if (!verifySignature(body, signature, timestamp)) {
    Sentry.captureMessage("[resend-webhook] Invalid signature", {
      level: "warning",
      tags: { area: "email", source: "webhook" },
    });
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let event: {
    type: string;
    data: {
      email?: string;
      to?: string[];
      created_at?: string;
    };
  };

  try {
    event = JSON.parse(body);
  } catch (err) {
    Sentry.captureException(err, {
      tags: { area: "email", source: "webhook", action: "parse" },
    });
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email =
    event.data.email ?? event.data.to?.[0] ?? "";
  const type = event.type;

  console.log(`[resend-webhook] ${type}: ${email}`);

  try {
    switch (type) {
      case "email.sent":
        await upsertContact(email, "production-checklist", "active");
        break;

      case "email.delivered":
        await upsertContact(email, "production-checklist", "active");
        break;

      case "email.bounced":
        await upsertContact(email, "production-checklist", "bounced");
        Sentry.captureMessage(`[resend-webhook] Email bounced: ${email}`, {
          level: "warning",
          tags: { area: "email", source: "webhook", event: "bounced" },
          extra: { email },
        });
        break;

      case "email.complained":
        await upsertContact(email, "production-checklist", "complained");
        Sentry.captureMessage(`[resend-webhook] Spam complaint: ${email}`, {
          level: "warning",
          tags: { area: "email", source: "webhook", event: "complained" },
          extra: { email },
        });
        break;

      case "email.opened":
        console.log(`[resend-webhook] Opened: ${email}`);
        break;

      case "email.clicked":
        console.log(`[resend-webhook] Clicked: ${email}`);
        break;

      default:
        console.log(`[resend-webhook] Unhandled event type: ${type}`);
    }
  } catch (err) {
    // Safety net for unexpected errors beyond contact-store writes
    Sentry.captureException(err, {
      tags: { area: "email", source: "webhook" },
      extra: { email, eventType: type },
    });
  }

  return NextResponse.json({ received: true });
}
