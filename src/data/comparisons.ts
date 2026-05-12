export interface ComparisonData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  otherName: string;
  otherSlug: string;
  otherTagline: string;
  painPoints: { title: string; body: string }[];
  comparisons: { dimension: string; other: string; vibe: string }[];
  whenOther: string[];
  whenVibe: string[];
}

export const toolComparisons: ComparisonData[] = [
  {
    slug: "cursor-vs-copilot",
    title: "Cursor vs Copilot for Production Apps",
    subtitle: "Both write code. Neither ships it.",
    description:
      "Cursor and Copilot are the two dominant AI code assistants. Both can generate auth, payments, and database code. Neither handles the production edge cases that break real apps. Here's how they compare, and why you still need a technical cofounder to ship either one.",
    metaTitle: "Cursor vs Copilot for Production Apps | VibeCofounder",
    metaDescription:
      "Cursor vs Copilot: which AI code assistant gets you closer to production? Both generate code. Neither handles production auth, payments, or App Store submission. Compare and find your path to shipping.",
    otherName: "Copilot",
    otherSlug: "copilot",
    otherTagline: "AI pair programmer integrated into your IDE",
    painPoints: [
      {
        title: "Both generate auth that breaks in production",
        body: "Cursor's Composer and Copilot's suggestions both produce working auth scaffolds. But neither handles refresh token rotation, social login redirect edge cases, or MFA enrollment flows. Your auth works locally, then fails the first time a user's session expires on a mobile device.",
      },
      {
        title: "Neither writes production-grade payment handlers",
        body: "They'll scaffold Stripe checkout in seconds. They won't handle webhook idempotency, failed payment retries, or invoice generation for subscriptions. The code looks complete — until a webhook fires twice and you double-charge a customer.",
      },
      {
        title: "Database schemas are tutorial-quality from both",
        body: "Cursor has more context awareness, Copilot has faster inline completion. But neither designs schemas with indexing strategies, connection pooling, or migration paths. Five users work fine. Five hundred and you're watching query times creep into seconds.",
      },
    ],
    comparisons: [
      { dimension: "Code generation quality", other: "Strong inline completion, workspace-aware", vibe: "N/A — a senior engineer writes and reviews every PR" },
      { dimension: "Production auth", other: "Generates Clerk/Firebase boilerplate, misses edge cases", vibe: "Designs and implements complete auth with refresh rotation, MFA, social login" },
      { dimension: "Payment infrastructure", other: "Test-mode Stripe integration, no webhook handling", vibe: "Full Stripe/IAP setup with idempotent webhooks, retry logic, refund paths" },
      { dimension: "Database architecture", other: "Basic CRUD, no indexing or migration strategy", vibe: "Schema design with indexing, migrations, caching, and scaling plan" },
      { dimension: "App Store deployment", other: "No awareness of iOS provisioning or review guidelines", vibe: "End-to-end: profiles, compliance, submission, appeal if needed" },
      { dimension: "Infrastructure & monitoring", other: "None — generates code, not deployment pipelines", vibe: "CI/CD, staging environments, Sentry, error tracking, alerting" },
      { dimension: "When it breaks in production", other: "You prompt again and hope for a different result", vibe: "I debug the actual issue, write the fix, you review the PR" },
    ],
    whenOther: [
      "You're already productive with one tool and don't need a switch",
      "You have a senior engineer handling production concerns",
      "You just need faster code generation, not production architecture",
    ],
    whenVibe: [
      "You built a prototype with either tool and can't get it to production",
      "Your AI-generated auth or payments break under real load",
      "You need someone who understands what AI tools get wrong",
    ],
  },
  {
    slug: "bolt-vs-v0",
    title: "Bolt vs v0 for Production Apps",
    subtitle: "One builds full-stack. The other builds frontends. Neither ships.",
    description:
      "Bolt generates full-stack apps with a backend. v0 generates pixel-perfect React UIs. Both are incredible for prototyping. Neither handles the production infrastructure that turns a prototype into a product real users can trust with their data and money.",
    metaTitle: "Bolt vs v0 for Production Apps | VibeCofounder",
    metaDescription:
      "Bolt vs v0: full-stack app builder vs UI generator. Which gets you closer to production? Compare their strengths, gaps, and why you still need production engineering to ship either.",
    otherName: "Bolt / v0",
    otherSlug: "bolt",
    otherTagline: "AI app builders for rapid prototyping",
    painPoints: [
      {
        title: "Bolt's backend is a sandbox, not production infrastructure",
        body: "Bolt gives you a working backend, but it's running in a WebContainer. When you need to migrate to Vercel with proper environment variables, staging previews, and production monitoring, the generated code needs significant rework. It's not a one-click deploy to production.",
      },
      {
        title: "v0 builds to mock APIs, not real backends",
        body: "v0 generates beautiful React components that talk to placeholder APIs. When it's time to wire in real auth, real payment processing, and real database queries, you're rebuilding the data layer from scratch. The UI is real. The product isn't.",
      },
      {
        title: "Neither has a mobile deployment path",
        body: "Both tools produce web applications. If your product needs to be on the App Store or Google Play, you're starting from zero. No React Native conversion, no provisioning profiles, no TestFlight distribution — just a web URL and a dream.",
      },
    ],
    comparisons: [
      { dimension: "Output type", other: "Bolt: full-stack web app. v0: React UI with mock APIs", vibe: "Production-ready product: auth, payments, data, mobile, infrastructure" },
      { dimension: "Backend", other: "Bolt: sandbox runtime. v0: none (frontend only)", vibe: "Real production backend: Vercel/Fly.io, Supabase, proper environment config" },
      { dimension: "Auth", other: "Bolt: basic auth. v0: not included", vibe: "Complete auth: refresh tokens, MFA, social login, session management" },
      { dimension: "Payments", other: "Neither includes payment integration", vibe: "Full Stripe/IAP: webhooks, subscriptions, refund paths, invoice management" },
      { dimension: "Mobile", other: "Web-only. No mobile deployment path", vibe: "App Store + Google Play: provisioning, compliance, submission, review" },
      { dimension: "Ownership", other: "Bolt: WebContainer lock-in. v0: exports to Next.js", vibe: "Your repo. Your deployment. Your infrastructure. You review every PR." },
    ],
    whenOther: [
      "You just need a working prototype for a demo or investor meeting",
      "You're exploring ideas and haven't committed to a product yet",
      "You have a separate engineering team handling production",
    ],
    whenVibe: [
      "You have a working Bolt or v0 prototype and need to ship it for real users",
      "Your prototype needs auth, payments, or mobile deployment",
      "You want to own your infrastructure, not rent a sandbox",
    ],
  },
  {
    slug: "cursor-vs-bolt",
    title: "Cursor vs Bolt for Shipping Products",
    subtitle: "One writes code in your editor. The other builds apps in a browser.",
    description:
      "Cursor is for developers who want AI inside their existing workflow. Bolt is for founders who want AI to build an entire app from scratch. Both produce impressive results. Neither gets you past the 80% wall where production auth, payments, and deployment live.",
    metaTitle: "Cursor vs Bolt for Shipping Products | VibeCofounder",
    metaDescription:
      "Cursor vs Bolt: code editor AI vs app builder AI. Which gets you closer to a shipped product? Compare their approaches and why production engineering still matters.",
    otherName: "Cursor / Bolt",
    otherSlug: "cursor",
    otherTagline: "AI code editor and full-stack app builder",
    painPoints: [
      {
        title: "Cursor understands your project but can't architect production",
        body: "Cursor has the best context awareness of any AI code tool. It reads your entire codebase and generates code that fits. But it doesn't know that your database needs indexing for the query pattern your users will generate. It can't tell you that your auth setup will break when refresh tokens expire on mobile.",
      },
      {
        title: "Bolt builds fast but locks you into its runtime",
        body: "Bolt generates a complete full-stack app in minutes. The problem: it runs in Bolt's WebContainer, which is a sandbox, not production infrastructure. When you need to deploy to your own Vercel account with proper CI/CD, staging environments, and monitoring — you're essentially rebuilding the deployment layer from scratch.",
      },
      {
        title: "Neither handles the cross-cutting concerns",
        body: "Auth, payments, database schema, App Store compliance, monitoring, error tracking — these aren't features you add with a prompt. They're architectural decisions that cascade through your entire codebase. AI tools generate each piece in isolation. A technical cofounder makes them work together.",
      },
    ],
    comparisons: [
      { dimension: "Approach", other: "Cursor: AI in your editor. Bolt: AI builds the app", vibe: "Senior engineer works alongside you in your repo" },
      { dimension: "Code ownership", other: "Cursor: your repo. Bolt: their runtime (can export)", vibe: "100% your repo, your infrastructure, your deployment" },
      { dimension: "Production readiness", other: "Generated code needs production hardening", vibe: "Every PR is production-grade. You review and merge." },
      { dimension: "Auth & payments", other: "Scaffolded, not production-ready", vibe: "Fully implemented with edge cases handled" },
      { dimension: "Mobile deployment", other: "Web-only output from both", vibe: "iOS + Android: App Store, Google Play, compliance" },
      { dimension: "When you're stuck", other: "Prompt again and iterate", vibe: "Debug together. Fix the actual problem. Ship the PR." },
    ],
    whenOther: [
      "You're still exploring and need rapid prototyping, not production",
      "You want AI assistance in your existing coding workflow (Cursor)",
      "You want to generate a quick demo without local setup (Bolt)",
    ],
    whenVibe: [
      "You've built something with Cursor or Bolt and need it to work for real users",
      "Your AI-generated code breaks under production conditions",
      "You need infrastructure, auth, payments, or mobile — not more prompts",
    ],
  },
  {
    slug: "lovable-vs-bolt",
    title: "Lovable vs Bolt for Production Apps",
    subtitle: "Both build full-stack AI apps. Neither ships them.",
    description:
      "Lovable and Bolt are the two leading AI app builders. Lovable has built-in Supabase integration. Bolt has its own WebContainer runtime. Both get you from idea to working prototype faster than any alternative. But a working prototype isn't a shipped product. Here's what each misses and why production engineering still matters.",
    metaTitle: "Lovable vs Bolt for Production Apps | VibeCofounder",
    metaDescription:
      "Lovable vs Bolt: which AI app builder gets you closer to production? Compare Supabase integration vs WebContainer runtime, and learn why both need production hardening to ship.",
    otherName: "Lovable / Bolt",
    otherSlug: "lovable",
    otherTagline: "AI app builders with backend integration",
    painPoints: [
      {
        title: "Lovable's Supabase setup is prototype-grade",
        body: "Lovable wins on backend integration — it generates real Supabase schemas with auth. But the schemas lack Row Level Security policies, the indexes are missing for real query patterns, and there's no migration strategy. When your user base grows, you'll be manually adding indexes and rewriting queries while users experience slow load times.",
      },
      {
        title: "Bolt's runtime isn't production infrastructure",
        body: "Bolt deploys to a WebContainer — a sandboxed browser environment. It's impressive technology for demos. But production apps need Vercel with preview deployments, Fly.io for container workloads, environment variable management, and CI/CD pipelines. Bolt can't give you any of that.",
      },
      {
        title: "Both lack payment and mobile paths",
        body: "Neither Lovable nor Bolt includes payment integration (Stripe, IAP) or mobile deployment (App Store, Google Play). These are the two things that separate a prototype from a revenue-generating product. You can build the most beautiful AI-generated app in the world — if users can't pay you and it's not on their phones, it's not a business.",
      },
    ],
    comparisons: [
      { dimension: "Backend", other: "Lovable: real Supabase. Bolt: sandbox runtime", vibe: "Production backend: Supabase/Firebase/Postgres with proper config" },
      { dimension: "Auth", other: "Lovable: basic Supabase Auth. Bolt: demo-grade", vibe: "Complete auth with refresh tokens, MFA, social login, session management" },
      { dimension: "Database", other: "Lovable: basic schema. Bolt: in-memory only", vibe: "Indexed schema, migration strategy, caching, connection pooling" },
      { dimension: "Payments", other: "Neither includes payment integration", vibe: "Full Stripe/IAP with webhooks, subscriptions, refund handling" },
      { dimension: "Deployment", other: "Both deploy to sandbox URLs", vibe: "Your Vercel/Fly.io account with CI/CD and staging" },
      { dimension: "Mobile", other: "Web-only from both tools", vibe: "iOS + Android deployment with App Store compliance" },
    ],
    whenOther: [
      "You're validating an idea and need the fastest possible prototype",
      "You want to test a concept with users before investing in production",
      "You're building an internal tool that doesn't need payments or mobile",
    ],
    whenVibe: [
      "Your Lovable or Bolt app needs to handle real users, real payments, or real mobile deployment",
      "Your Supabase schema needs RLS policies, indexing, and migration support",
      "You're ready to own your infrastructure instead of renting a sandbox",
    ],
  },
];

export function getComparisonBySlug(slug: string): ComparisonData | undefined {
  return toolComparisons.find((c) => c.slug === slug);
}

export const allComparisonSlugs = toolComparisons.map((c) => c.slug);
