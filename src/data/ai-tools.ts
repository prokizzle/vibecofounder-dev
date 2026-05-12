export interface AITool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  strengths: string[];
  productionGaps: string[];
  logo: string;
}

export const aiTools: AITool[] = [
  {
    slug: "cursor",
    name: "Cursor",
    tagline: "AI-first code editor built on VS Code",
    description:
      "Cursor is an AI-powered code editor that integrates LLMs directly into the coding workflow. It excels at code generation, refactoring, and debugging within an existing project context. Founders build entire features by prompting Cursor's tab-complete and chat, then hit the wall when those features need production auth, payment flows, or App Store compliance.",
    category: "AI Code Editor",
    strengths: [
      "Best-in-class code generation with project context",
      "Tab-complete that understands your entire codebase",
      "Inline editing and multi-file refactoring",
      "Composer mode for multi-step feature generation",
    ],
    productionGaps: [
      "No production auth architecture — it'll scaffold Clerk but miss refresh token rotation",
      "Database schema design stops at basic CRUD — no indexing, no migration strategy",
      "Payment integration works in test mode, fails on webhook idempotency",
      "No understanding of App Store provisioning profiles or review guidelines",
      "Generated infrastructure configs miss staging/preview environments",
    ],
    logo: "🔮",
  },
  {
    slug: "copilot",
    name: "GitHub Copilot",
    tagline: "AI pair programmer integrated into your IDE",
    description:
      "GitHub Copilot provides AI-assisted code completion and generation inside VS Code, JetBrains, and other editors. It's excellent at writing individual functions and implementing patterns, but it doesn't architect systems or handle the cross-cutting concerns that make a prototype production-ready. Founders rely on it for velocity, then discover it can't debug why their Stripe webhooks fail silently in production.",
    category: "AI Code Assistant",
    strengths: [
      "Fast inline code completion across all languages",
      "Copilot Chat for Q&A within the editor",
      "Workspace knowledge for project-aware suggestions",
      "Deep GitHub integration with PR summaries",
    ],
    productionGaps: [
      "Generates auth boilerplate but misses session management edge cases",
      "Creates payment endpoints without webhook handling or idempotency",
      "No awareness of App Store compliance or provisioning requirements",
      "Database queries lack optimization — no connection pooling awareness",
      "Infrastructure suggestions are tutorial-grade, not production-grade",
    ],
    logo: "🐙",
  },
  {
    slug: "claude",
    name: "Claude",
    tagline: "Anthropic's conversational AI for coding and analysis",
    description:
      "Claude excels at understanding complex requirements and generating substantial code artifacts. It's the tool founders use to build entire prototypes from a single detailed prompt. The problem: Claude's code runs perfectly in a sandbox but breaks when deployed to real infrastructure with real users hitting real edge cases simultaneously.",
    category: "AI Assistant",
    strengths: [
      "Exceptional at understanding complex multi-step requirements",
      "Generates complete, well-structured code artifacts",
      "Strong at explaining architectural decisions",
      "Artifacts feature for instant prototyping",
    ],
    productionGaps: [
      "No awareness of your specific production environment constraints",
      "Auth patterns are textbook — missing refresh token rotation, social login redirect handling",
      "Database designs are conceptual — no migration strategy, no indexing for query patterns",
      "Payment flows skip webhook failure handling and retry logic",
      "No App Store review awareness or compliance checking",
    ],
    logo: "🧠",
  },
  {
    slug: "bolt",
    name: "Bolt",
    tagline: "Full-stack AI app builder with instant deployment",
    description:
      "Bolt (StackBlitz) generates full-stack web applications from natural language and deploys them instantly. It's perfect for getting a working prototype in minutes. But the deployed prototype is a demo, not a product. When you need real user authentication, payment processing, or mobile deployment, Bolt's generated code needs significant production hardening.",
    category: "AI App Builder",
    strengths: [
      "Full-stack app generation from natural language",
      "Instant deployment to a shareable URL",
      "Built-in WebContainer runtime — no local setup",
      "Rapid iteration with in-browser editing",
    ],
    productionGaps: [
      "Generated auth is demo-grade — no production session management",
      "Database layer is simplistic — no migrations, no scaling strategy",
      "Payment integration is test-mode only — no webhook handling",
      "No path to mobile deployment or App Store submission",
      "Infrastructure is locked to their runtime — can't migrate to Vercel/Fly.io",
    ],
    logo: "⚡",
  },
  {
    slug: "v0",
    name: "v0",
    tagline: "Vercel's AI interface generator",
    description:
      "v0 generates React/Next.js UI components and full pages from natural language descriptions. It's the fastest way to get a pixel-perfect frontend built. But a pretty frontend isn't a product. v0 doesn't handle the backend infrastructure, auth flows, payment processing, or deployment pipelines that turn a UI into something real users can safely use.",
    category: "AI UI Generator",
    strengths: [
      "Best-in-class React/Next.js UI generation",
      "Pixel-perfect components from text descriptions",
      "Direct deployment to Vercel",
      "Iterative refinement through conversation",
    ],
    productionGaps: [
      "Only generates the UI layer — no backend, no auth, no payments",
      "Generated components need production API integration (it builds to mocks)",
      "No database schema or data layer generation",
      "No mobile deployment path — web-only output",
      "Missing infrastructure: CI/CD, monitoring, error tracking",
    ],
    logo: "▲",
  },
  {
    slug: "lovable",
    name: "Lovable",
    tagline: "AI app builder with Supabase integration",
    description:
      "Lovable (formerly GPT Engineer) generates full-stack applications with built-in Supabase backend integration. It's one step closer to production than pure UI generators. But the Supabase schema it generates is prototype-grade, the auth configuration misses production edge cases, and there's no path to mobile deployment without significant rework.",
    category: "AI App Builder",
    strengths: [
      "Full-stack generation with real Supabase backend",
      "Built-in auth and database setup",
      "GitHub sync for code ownership",
      "Deploy to shareable URL in minutes",
    ],
    productionGaps: [
      "Supabase schema is basic — no RLS policies, no indexing strategy",
      "Auth setup skips MFA, social login edge cases, and session management",
      "No payment integration out of the box",
      "No mobile deployment or App Store path",
      "Missing production monitoring, error tracking, and alerting",
    ],
    logo: "💜",
  },
];

export function getToolBySlug(slug: string): AITool | undefined {
  return aiTools.find((t) => t.slug === slug);
}

export function getOtherTools(excludeSlug: string): AITool[] {
  return aiTools.filter((t) => t.slug !== excludeSlug);
}
