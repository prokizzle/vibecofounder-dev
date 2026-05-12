import type { Metadata } from "next";
import { Container, SectionIntro, FadeIn, FadeInStagger, FadeInItem, List, ListItem } from "@/app/_components/ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { aiTools, getToolBySlug, getOtherTools } from "@/data/ai-tools";

interface PageProps {
  params: Promise<{ tool: string }>;
}

export async function generateStaticParams() {
  return aiTools.map((tool) => ({ tool: tool.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tool: toolSlug } = await params;
  const tool = getToolBySlug(toolSlug);
  if (!tool) return {};

  return {
    title: `${tool.name} to Production: Ship Your ${tool.name} App | VibeCofounder`,
    description: `${tool.name} gets you 80% of the way. I handle the 20% it can't: production auth, payment integration, database scaling, and App Store deployment for ${tool.name}-built apps.`,
  };
}

export default async function ToolToProductionPage({ params }: PageProps) {
  const { tool: toolSlug } = await params;
  const tool = getToolBySlug(toolSlug);
  if (!tool) return null;

  const otherTools = getOtherTools(toolSlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${tool.name} to Production: Ship Your ${tool.name} App`,
    description: tool.description,
    author: {
      "@type": "Person",
      name: "Nick Prokesch",
      url: "https://vibecofounder.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "VibeCofounder",
      url: "https://vibecofounder.com",
    },
    dateModified: "2026-05-11",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://vibecofounder.com/tools/${tool.slug}`,
    },
  };

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${tool.name} Production Hardening`,
    description: `On-demand technical cofounder service for ${tool.name}-built apps. Handles production auth, payments, database, mobile deployment, and infrastructure.`,
    brand: {
      "@type": "Brand",
      name: "VibeCofounder",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free 1-hour intro call",
      url: "https://fantastical.app/giq5x5fcyt-s8uy/1-hour-meeting",
    },
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-24">
        <Container>
          <FadeIn className="max-w-3xl">
            <p className="text-xs text-accent font-semibold uppercase tracking-[0.15em] mb-4">
              {tool.category} to Production
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              {tool.name} got you to 80%.
              <br />
              <span className="text-gradient">I ship the last 20.</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              {tool.description}
            </p>
            <p className="mt-3 text-xs text-muted/60">Last updated: May 2026</p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="btn-press group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-semibold hover:bg-accent-hover transition-colors text-sm"
              >
                Ship your {tool.name} app
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* What {tool} does well */}
      <section className="py-24 section-divider">
        <Container>
          <SectionIntro
            heading={`What ${tool.name} does well`}
            description={`${tool.name} is an incredible tool for prototyping. Here's where it shines.`}
          />
          <FadeInStagger className="mt-16 max-w-2xl" stagger={0.08}>
            <List>
              {tool.strengths.map((s) => (
                <FadeInItem key={s}>
                  <ListItem>
                    <p className="text-sm text-foreground">{s}</p>
                  </ListItem>
                </FadeInItem>
              ))}
            </List>
          </FadeInStagger>
        </Container>
      </section>

      {/* Production gaps */}
      <section className="py-24">
        <Container>
          <SectionIntro
            heading={`Where ${tool.name} hits the wall`}
            description="The specific production problems AI can't solve for your app. These are the things that break when real users show up."
          />
          <FadeInStagger className="mt-16 max-w-2xl" stagger={0.08}>
            <List>
              {tool.productionGaps.map((gap) => (
                <FadeInItem key={gap}>
                  <ListItem>
                    <p className="text-sm text-muted leading-relaxed">{gap}</p>
                  </ListItem>
                </FadeInItem>
              ))}
            </List>
          </FadeInStagger>
        </Container>
      </section>

      {/* What I do for {tool} founders */}
      <section className="py-24 section-divider">
        <Container>
          <SectionIntro
            heading={`What I do for ${tool.name} founders`}
            description="The specific production engineering your app needs. You review every PR. You stay in control."
          />
          <FadeInStagger className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.06}>
            {[
              { title: "Auth that doesn't leak", desc: "Refresh token rotation, MFA, social login edge cases, session management. The full flow, not the scaffold AI generates." },
              { title: "Payments that settle", desc: "Stripe integration with idempotent webhooks, subscription lifecycle management, failed payment recovery, and proper financial reporting." },
              { title: "Database that scales", desc: "Schema design with indexing for your actual query patterns, migration strategy, connection pooling, and caching. More than CREATE TABLE statements." },
              { title: "Infrastructure that stays up", desc: "CI/CD pipelines, staging environments, Vercel/Fly.io deployment, Sentry error tracking, and alerting. Your app runs on your infrastructure." },
              { title: "Mobile that gets approved", desc: "App Store compliance, provisioning profiles, TestFlight distribution, push notifications, and review appeal handling. End-to-end mobile deployment." },
              { title: "Architecture review", desc: "I audit your AI-generated codebase for anti-patterns, fix the production concerns, and leave you with code you can actually maintain." },
            ].map((item) => (
              <FadeInItem key={item.title}>
                <div className="border border-border rounded-xl bg-surface p-6 card-hover h-full">
                  <h3 className="font-heading font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      {/* Other tools */}
      <section className="py-24">
        <Container>
          <SectionIntro
            heading={`Built with a different tool?`}
            description="I work with founders using any AI-assisted development workflow."
          />
          <FadeInStagger className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.05}>
            {otherTools.map((t) => (
              <FadeInItem key={t.slug}>
                <Link
                  href={`/tools/${t.slug}`}
                  className="block border border-border rounded-xl bg-surface p-5 card-hover group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{t.logo}</span>
                    <h3 className="font-heading font-semibold text-sm group-hover:text-accent transition-colors">{t.name}</h3>
                  </div>
                  <p className="text-xs text-muted">{t.tagline}</p>
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 section-divider">
        <Container>
          <FadeIn>
            <div className="cta-dark rounded-3xl p-8 sm:p-12 lg:p-16">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tight">
                  Ship your {tool.name} app.
                </h2>
                <p className="mt-4 text-base text-muted leading-relaxed">
                  Book a free 1-hour call. We look at your {tool.name} codebase, figure out what&apos;s blocking you, and decide if it makes sense to work together.
                </p>
                <div className="mt-8">
                  <Link
                    href="https://fantastical.app/giq5x5fcyt-s8uy/1-hour-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-semibold hover:bg-accent-hover transition-colors text-sm"
                  >
                    Schedule a free intro call
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
