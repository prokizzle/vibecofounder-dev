"use server";

import { Resend } from "resend";
import { writeFile, readFile } from "fs/promises";
import { join } from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACTS_FILE = "contacts.json";

interface Contact {
  email: string;
  source: string;
  status: "active" | "bounced" | "complained" | "unsubscribed";
  createdAt: string;
  updatedAt: string;
}

async function getContacts(): Promise<Contact[]> {
  try {
    const data = await readFile(join(process.cwd(), CONTACTS_FILE), "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function addContact(email: string, source: string): Promise<void> {
  const contacts = await getContacts();
  const now = new Date().toISOString();
  if (!contacts.find((c) => c.email === email)) {
    contacts.push({ email, source, status: "active", createdAt: now, updatedAt: now });
    await writeFile(join(process.cwd(), CONTACTS_FILE), JSON.stringify(contacts, null, 2));
  }
}

const CHECKLIST_HTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 24px; line-height: 1.6; }
    h1 { font-size: 24px; margin-bottom: 8px; }
    h2 { font-size: 18px; margin-top: 28px; margin-bottom: 8px; color: #d97706; }
    ul { padding-left: 20px; margin: 8px 0; }
    li { margin-bottom: 6px; }
    .header { border-bottom: 2px solid #d97706; padding-bottom: 16px; margin-bottom: 24px; }
    .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #e5e5e5; font-size: 13px; color: #666; }
    a { color: #d97706; }
    .cta { display: inline-block; background: #d97706; color: white; padding: 10px 24px; border-radius: 999px; text-decoration: none; font-weight: 600; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Production Readiness Checklist</h1>
    <p style="margin:0; color:#666;">30 items across 6 categories. Check each one honestly.</p>
  </div>

  <h2>Authentication</h2>
  <ul>
    <li>Refresh token rotation is implemented</li>
    <li>MFA enrollment flow works on mobile</li>
    <li>Social login redirect handles edge cases (cancelled auth, app not installed)</li>
    <li>Session management survives token expiry without logout</li>
    <li>Auth state persists across app background/foreground cycles</li>
  </ul>

  <h2>Payments</h2>
  <ul>
    <li>Webhooks are idempotent (duplicate events don't double-charge)</li>
    <li>Failed payment recovery (dunning) is implemented</li>
    <li>Subscription lifecycle (upgrade/downgrade/cancel) works end-to-end</li>
    <li>Refund path exists and updates internal state</li>
    <li>Test mode and live mode are clearly separated</li>
  </ul>

  <h2>Database</h2>
  <ul>
    <li>Indexes exist for your actual query patterns</li>
    <li>Migration strategy is in place (not manual ALTER TABLE)</li>
    <li>Connection pooling is configured for production load</li>
    <li>Row-level security policies are set (if using Supabase/Firebase)</li>
    <li>Backup and recovery plan exists</li>
  </ul>

  <h2>Infrastructure</h2>
  <ul>
    <li>CI/CD pipeline runs tests before deploy</li>
    <li>Staging environment mirrors production</li>
    <li>Error tracking is live (Sentry, Bugsnag, etc.)</li>
    <li>Alerting is configured for uptime and error spikes</li>
    <li>Preview deployments exist for every PR</li>
  </ul>

  <h2>Mobile Deployment (if applicable)</h2>
  <ul>
    <li>Provisioning profiles are set up for TestFlight</li>
    <li>App Store compliance guidelines are followed</li>
    <li>Push notification configuration is production-grade</li>
    <li>App Store review submission is ready (screenshots, metadata, privacy policy)</li>
    <li>Review appeal process is documented</li>
  </ul>

  <h2>Security</h2>
  <ul>
    <li>Input validation exists on all user-facing endpoints</li>
    <li>Rate limiting is configured for auth and payment endpoints</li>
    <li>Environment variables are not leaked in client bundle</li>
    <li>CORS policy is restrictive, not wildcard</li>
    <li>Dependency audit for known vulnerabilities is clean</li>
  </ul>

  <p style="margin-top:28px;">Every unchecked item is a gap AI can't fill. I handle these for founders every week.</p>
  <a href="https://cal.com/nicholasprokesch/30min" class="cta">Book a free intro call</a>

  <div class="footer">
    <p>VibeCofounder — On-demand technical cofounder for AI-built products.</p>
    <p><a href="https://vibecofounder.com">vibecofounder.com</a></p>
    <p style="margin-top:8px;">You received this because you downloaded the Production Readiness Checklist. No spam, ever. Unsubscribe by replying to this email.</p>
  </div>
</body>
</html>
`;

export async function captureEmail(
  email: string
): Promise<{ success: boolean; error?: string }> {
  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[lead-capture] RESEND_API_KEY not set");
    return { success: false, error: "Email service not configured. Please try again later." };
  }

  try {
    await resend.emails.send({
      from: "VibeCofounder <hello@vibecofounder.com>",
      to: email,
      subject: "Your Production Readiness Checklist",
      html: CHECKLIST_HTML,
    });
    await addContact(email, "production-checklist");
    return { success: true };
  } catch (err) {
    console.error("[lead-capture] Resend error:", err);
    return { success: false, error: "Failed to send email. Please try again." };
  }
}
