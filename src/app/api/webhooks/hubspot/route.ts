import { NextResponse } from "next/server";
import { createHmac } from "crypto";
import * as Sentry from "@sentry/nextjs";

/* ── HubSpot webhook signature verification (v3) ───────────── *
 * HubSpot signs webhooks with X-HubSpot-Signature-V3 using       *
 * HMAC-SHA256 over timestamp + method + URL + body.              *
 * Ref: https://developers.hubspot.com/docs/apps/legacy-apps/     *
 *      authentication/validating-requests                         */

function verifyHubSpotSignature(
  body: string,
  signature: string,
  timestamp: string,
  method: string,
  url: string
): boolean {
  const secret = process.env.HUBSPOT_CLIENT_SECRET;
  if (!secret) return false;

  // Replay protection: reject timestamps older than 5 minutes
  const age = Date.now() - Number(timestamp);
  if (isNaN(age) || age > 5 * 60 * 1000) return false;

  const source = `${method}${url}${timestamp}${body}`;
  const expected = createHmac("sha256", secret)
    .update(source)
    .digest("hex");

  return signature === expected;
}

/* ── Route handler ──────────────────────────────────────────── */

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("x-hubspot-signature-v3") ?? "";
  const timestamp = request.headers.get("x-hubspot-request-timestamp") ?? "";
  const method = request.method;
  const url = request.url;

  if (!verifyHubSpotSignature(body, signature, timestamp, method, url)) {
    Sentry.captureMessage("[hubspot-webhook] Invalid signature", {
      level: "warning",
      tags: { area: "crm", source: "hubspot-webhook" },
    });
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let events: Array<{
    subscriptionType: string;
    objectId: string;
    propertyName?: string;
    propertyValue?: string;
    changedPropertyName?: string;
    [key: string]: unknown;
  }>;

  try {
    events = JSON.parse(body);
  } catch (err) {
    Sentry.captureException(err, {
      tags: { area: "crm", source: "hubspot-webhook", action: "parse" },
    });
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // HubSpot sends an array of events; respond fast, process each
  for (const event of events) {
    const { subscriptionType, objectId } = event;
    console.log(`[hubspot-webhook] ${subscriptionType}: ${objectId}`);

    try {
      switch (subscriptionType) {
        case "contact.creation":
          Sentry.addBreadcrumb({
            category: "hubspot",
            message: `Contact created: ${objectId}`,
            level: "info",
          });
          break;

        case "contact.propertyChange":
          Sentry.addBreadcrumb({
            category: "hubspot",
            message: `Contact ${objectId} property changed: ${event.changedPropertyName ?? event.propertyName}`,
            level: "info",
          });
          break;

        case "contact.deletion":
          Sentry.addBreadcrumb({
            category: "hubspot",
            message: `Contact deleted: ${objectId}`,
            level: "info",
          });
          break;

        default:
          console.log(`[hubspot-webhook] Unhandled event: ${subscriptionType}`);
      }
    } catch (err) {
      Sentry.captureException(err, {
        tags: { area: "crm", source: "hubspot-webhook", event: subscriptionType },
        extra: { objectId },
      });
    }
  }

  return NextResponse.json({ received: true });
}
