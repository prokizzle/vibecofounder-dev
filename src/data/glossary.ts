export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  whyItMatters: string;
  aiGotcha: string;
  relatedTerms: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "vibe-coding",
    term: "Vibe Coding",
    definition:
      "Building software primarily through AI-assisted development tools (Cursor, Copilot, Claude, Bolt, v0, Lovable) with prompt-driven iteration rather than traditional hand-written engineering. The name comes from the feeling of flowing with the AI's suggestions rather than fighting against them.",
    whyItMatters:
      "Vibe coding has democratized software creation. Solo founders can now build working prototypes in days instead of months. But the 80% wall — where AI hits its production limits — is where vibe coding stops and engineering begins.",
    aiGotcha:
      "AI tools generate code that works in controlled environments. Vibe coders discover that \"it worked in the preview\" is the beginning of the hardest phase, not the end of the project.",
    relatedTerms: ["80-percent-wall", "production-readiness"],
  },
  {
    slug: "80-percent-wall",
    term: "The 80% Wall",
    definition:
      "The point where AI-generated code stops being useful and production engineering becomes essential. Vibe coders can build roughly 80% of a product with AI tools. The remaining 20% — auth edge cases, payment reliability, database scaling, App Store compliance, infrastructure — requires human engineering judgment that AI can't provide.",
    whyItMatters:
      "Most founders don't realize the 80% wall exists until they hit it. They've been shipping fast with AI for weeks, then suddenly every prompt makes things worse instead of better. The problems aren't syntax — they're architectural. AI doesn't know what it doesn't know about your production environment.",
    aiGotcha:
      "AI can't tell you when you've hit the 80% wall. It will keep generating code that looks correct but misses the production concerns that only surface under real load, real auth flows, and real payment processing.",
    relatedTerms: ["vibe-coding", "production-readiness", "refresh-token-rotation"],
  },
  {
    slug: "production-readiness",
    term: "Production Readiness",
    definition:
      "The state where a software application can safely handle real users, real data, and real traffic without breaking, leaking information, or losing money. It includes authentication that handles edge cases, payments that settle correctly, databases that scale under load, monitoring that catches errors, and deployment pipelines that don't take down the site.",
    whyItMatters:
      "The gap between a working prototype and a production-ready application is where most vibe-coded projects die. The prototype works. The demo works. Then real users hit it, and things that never failed locally start breaking in ways AI can't debug.",
    aiGotcha:
      "AI tools have no concept of production readiness. They generate code that passes tests and works in development. They don't test for concurrent users, network failures, expired sessions, or payment processing edge cases.",
    relatedTerms: ["80-percent-wall", "idempotent-webhooks", "staging-environment"],
  },
  {
    slug: "refresh-token-rotation",
    term: "Refresh Token Rotation",
    definition:
      "A security pattern where each time a refresh token is used to get a new access token, the old refresh token is invalidated and a new one is issued. This prevents stolen refresh tokens from being reused indefinitely. If someone intercepts a refresh token, they can only use it once before it's rotated.",
    whyItMatters:
      "Without refresh token rotation, a stolen refresh token gives an attacker permanent access to a user's account. AI tools generate auth flows that use refresh tokens but almost never implement rotation. Your auth works — until someone's token is compromised and they can't be logged out.",
    aiGotcha:
      "AI-generated auth code typically implements basic JWT refresh without rotation. It looks complete. It passes all your local tests. It's a security vulnerability waiting to be exploited in production.",
    relatedTerms: ["production-readiness", "oauth-edge-cases"],
  },
  {
    slug: "idempotent-webhooks",
    term: "Idempotent Webhooks",
    definition:
      "Webhook handlers that produce the same result whether they receive an event once or multiple times. If Stripe sends the same payment webhook twice (which happens), an idempotent handler processes it once and ignores the duplicate. Non-idempotent handlers create duplicate charges, duplicate subscriptions, or duplicate records.",
    whyItMatters:
      "Payment providers guarantee at-least-once delivery, not exactly-once. Webhooks will be sent multiple times during network issues, retries, or provider-side incidents. Without idempotency, you'll overcharge customers, create duplicate records, and spend hours reconciling your database with your payment provider.",
    aiGotcha:
      "AI generates Stripe webhook handlers that process events and return 200. They don't implement idempotency keys, duplicate detection, or dead-letter queues. The webhook works. Until Stripe retries a payment event and you double-charge someone.",
    relatedTerms: ["production-readiness", "stripe-integration"],
  },
  {
    slug: "staging-environment",
    term: "Staging Environment",
    definition:
      "A pre-production environment that mirrors your production setup (same infrastructure, same configuration, same data structure) where you can test changes before they reach real users. It catches the problems that only appear in production-like conditions: environment variable differences, database connection limits, and API rate limiting.",
    whyItMatters:
      "Without staging, every deploy is a gamble. You're testing in production, which means your users are your QA team. Staging catches broken migrations, misconfigured environment variables, and API changes before they affect real people.",
    aiGotcha:
      "AI tools don't set up staging environments. They generate code that works locally and assume it'll work the same way when deployed. The local-vs-production gap (environment variables, connection strings, API keys, rate limits) is where things silently break.",
    relatedTerms: ["production-readiness", "ci-cd-pipeline"],
  },
  {
    slug: "ci-cd-pipeline",
    term: "CI/CD Pipeline",
    definition:
      "Continuous Integration and Continuous Deployment — automated systems that run tests, checks, and deployments every time code is pushed. CI runs your test suite on every PR. CD deploys passing code to staging and production automatically. Together, they catch bugs before they reach users and make deployment a button push instead of a manual process.",
    whyItMatters:
      "Without CI/CD, deployment is a manual, error-prone process. You SSH into a server, pull the latest code, restart the process, and hope nothing breaks. With CI/CD, every change is tested automatically, preview deployments are created for every PR, and shipping to production is a merge, not a migration.",
    aiGotcha:
      "AI tools generate application code, not deployment pipelines. They don't configure GitHub Actions, Vercel preview deploys, or Fly.io release commands. The code ships — the infrastructure to ship it safely doesn't.",
    relatedTerms: ["staging-environment", "production-readiness"],
  },
  {
    slug: "app-store-review",
    term: "App Store Review",
    definition:
      "Apple's process for evaluating apps before they appear on the App Store. Human reviewers check for compliance with the App Store Review Guidelines, including data privacy, payment rules (no external payment links for digital goods), content policies, and technical stability (no crashes on launch). Rejections are common, especially for first-time submitters.",
    whyItMatters:
      "App Store rejection is the most common reason vibe-coded iOS apps never ship. AI tools generate SwiftUI interfaces but don't understand Guideline 2.1 (app completeness), 3.1.1 (in-app purchase requirements), or 4.0 (design minimums). A technically working app gets rejected because it doesn't meet Apple's standards.",
    aiGotcha:
      "AI has no awareness of App Store Review Guidelines. It'll generate a payment flow that violates Apple's IAP requirements, a data collection pattern that violates privacy guidelines, or a provisioning setup that won't validate. The app works. Apple rejects it. And you don't know why.",
    relatedTerms: ["production-readiness", "provisioning-profiles"],
  },
  {
    slug: "provisioning-profiles",
    term: "Provisioning Profiles",
    definition:
      "Digital certificates that authorize an iOS app to run on specific devices and be distributed through specific channels (App Store, TestFlight, Ad Hoc). They link your Apple Developer account, your app ID, and your distribution method. Without the correct provisioning profile, your app literally cannot be installed on any device.",
    whyItMatters:
      "Provisioning profiles are the most confusing part of iOS deployment. They expire, they're specific to distribution methods, and they need to match your certificate and app ID exactly. Getting them wrong means your build fails, your TestFlight distribution fails, or your App Store upload is rejected.",
    aiGotcha:
      "AI tools don't manage provisioning profiles. They can generate the Swift code for your app, but the Xcode project configuration, signing certificates, and provisioning profiles require human judgment about your specific Apple Developer account setup.",
    relatedTerms: ["app-store-review", "production-readiness"],
  },
  {
    slug: "stripe-integration",
    term: "Stripe Integration",
    definition:
      "Connecting your application to Stripe's payment processing API to accept payments, manage subscriptions, handle refunds, and track revenue. A complete integration includes checkout flows, webhook handlers for async events (payment success, subscription changes, failed charges), and proper error handling for payment failures.",
    whyItMatters:
      "Payment integration is where prototype and production diverge hardest. A prototype shows a Stripe checkout form. A production integration handles webhook retries, idempotent event processing, subscription lifecycle changes, failed payment recovery (dunning), and proper financial reporting. The first makes you money. The second keeps you from losing it.",
    aiGotcha:
      "AI generates Stripe checkout in minutes. It generates webhook handlers that return 200. It does not implement idempotency, retry logic, failed payment recovery, or subscription change handling. The payment flow works in test mode and breaks in production.",
    relatedTerms: ["idempotent-webhooks", "production-readiness"],
  },
  {
    slug: "oauth-edge-cases",
    term: "OAuth Edge Cases",
    definition:
      "The production scenarios that OAuth tutorials don't cover: social login redirect failures when the callback URL is wrong, token revocation when a user disconnects their account, PKCE flow for mobile apps that don't have a client secret, and session invalidation when a user changes their password on the provider side.",
    whyItMatters:
      "OAuth works perfectly in tutorials. In production, users click the wrong Google account, your callback URL changes during deployment, mobile apps need PKCE instead of client secrets, and providers silently revoke tokens. These aren't bugs — they're the OAuth specification working as designed. But AI-generated auth doesn't handle them.",
    aiGotcha:
      "AI implements the happy path for OAuth. User clicks login, gets redirected, comes back authenticated. It doesn't handle the user who has three Google accounts and picks the wrong one, or the mobile app that can't store a client secret, or the provider that silently revokes tokens.",
    relatedTerms: ["refresh-token-rotation", "production-readiness"],
  },
  {
    slug: "database-indexing",
    term: "Database Indexing",
    definition:
      "Creating data structures (indexes) that allow the database to find rows quickly without scanning the entire table. Without indexes, every query reads every row (full table scan). With proper indexes, the database jumps directly to the relevant data. The difference between a query that takes 5ms and one that takes 5 seconds.",
    whyItMatters:
      "AI-generated database schemas create tables with columns but no indexes. With 100 rows, this doesn't matter. With 10,000 rows, queries slow down. With 100,000 rows, your app becomes unusable. Adding indexes after launch requires careful migration — you can't just slap an index on a production table without potentially locking it for hours.",
    aiGotcha:
      "AI creates database schemas that are normalized and correct at the logical level. It doesn't analyze your actual query patterns and create the indexes that make those queries fast. The schema works. The app is slow. And getting slower every day as data accumulates.",
    relatedTerms: ["production-readiness", "database-migration"],
  },
  {
    slug: "database-migration",
    term: "Database Migration",
    definition:
      "The process of changing a database schema (adding columns, creating indexes, renaming tables) in a controlled, reversible way without losing data or taking the application offline. Migrations run as code — each change is a file that can be applied forward (up) or rolled back (down).",
    whyItMatters:
      "Without migrations, you're manually running SQL commands against a production database. One typo and you've dropped a column with 50,000 user records. Migrations give you a safe, trackable, reversible way to evolve your database schema alongside your application code.",
    aiGotcha:
      "AI generates database schemas but not migration strategies. When you need to add a column or change a constraint in production, AI suggests ALTER TABLE statements that lock your database. It doesn't create zero-downtime migration paths or rollback scripts.",
    relatedTerms: ["database-indexing", "staging-environment"],
  },
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export const allGlossarySlugs = glossaryTerms.map((t) => t.slug);
