import { Client } from "@hubspot/api-client";
import * as Sentry from "@sentry/nextjs";

const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_PRIVATE_APP_TOKEN,
});

type ContactLifecycleStage = "subscriber" | "lead" | "customer" | "evangelist" | "other";

interface UpsertContactParams {
  email: string;
  source?: string;
  lifecycleStage?: ContactLifecycleStage;
  status?: "active" | "bounced" | "complained" | "unsubscribed";
}

export async function upsertHubSpotContact({
  email,
  source = "production-checklist",
  lifecycleStage = "subscriber",
  status = "active",
}: UpsertContactParams): Promise<string | null> {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) return null;

  try {
    // Search for existing contact by email
    const search = await hubspotClient.crm.contacts.searchApi.doSearch({
      query: email,
      limit: 1,
      properties: ["email", "lead_source", "lifecycle_stage"],
    });

    if (search.results.length > 0) {
      // Update existing contact
      const contactId = search.results[0].id;
      await hubspotClient.crm.contacts.basicApi.update(contactId, {
        properties: {
          lead_source: source,
          ...(status === "bounced" && { lifecycle_stage: "other" }),
          ...(status === "complained" && { lifecycle_stage: "other" }),
        },
      });
      return contactId;
    }

    // Create new contact
    const response = await hubspotClient.crm.contacts.basicApi.create({
      properties: {
        email,
        lead_source: source,
        lifecycle_stage: lifecycleStage,
      },
    });
    return response.id;
  } catch (err) {
    Sentry.captureException(err, {
      tags: { area: "crm", source: "hubspot", action: "upsert-contact" },
      extra: { email, source, status },
    });
    return null;
  }
}
