import type { Metadata } from "next";
import { Container, SectionIntro, FadeIn, FadeInStagger, FadeInItem } from "@/app/_components/ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { aiTools, getToolBySlug } from "@/data/ai-tools";

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
    title: `Technical Cofounder for ${tool.name} Founders | VibeCofounder`,
    description: `Need a technical cofounder who understands ${tool.name}? I work alongside ${tool.name} founders to handle the production 20%: auth, payments, database, mobile deployment, and infrastructure.`,
  };
}

export default async function TechnicalCofounderPage({ params }: PageProps) {
  const { tool: toolSlug } = await params;
  const tool = getToolBySlug(toolSlug);
  if (!tool) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Technical Cofounder for ${tool.name} Founders`,
    description: `Need a technical cofounder who understands ${tool.name}? On-demand production hardening for ${tool.name}-built apps.`,
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
      "@id": `https://vibecofounder.com/for/${tool.slug}`,
    },
  };

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to ship your ${tool.name} app to production`,
    description: `Steps to take a ${tool.name}-built prototype from 80% to production-ready with a technical cofounder.`,
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Review your codebase",
        text: `I look at what ${tool.name} generated, identify the production gaps, and give you a clear list of what needs fixing.`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Fix the hard 20%",
        text: "Auth edge cases, payment webhooks, database indexes, App Store compliance, CI/CD pipelines.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Review and ship",
        text: "Every fix is a PR. You review it, understand it, and merge it. You own the production-grade codebase.",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-24">
        <Container>
          <FadeIn className="max-w-3xl">
            <p className="text-xs text-accent font-semibold uppercase tracking-[0.15em] mb-4">
              For {tool.name} Founders
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Technical cofounder for{" "}
              <span className="text-gradient">{tool.name}</span> founders
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              You built your prototype with {tool.name}. That work is real. Now you need someone who understands both {tool.name}'s strengths and its production gaps — and can bridge the 80% wall without rewriting everything from scratch.
            </p>
            <p className="mt-3 text-xs text-muted/60">Last updated: May 2026</p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="btn-press group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-semibold hover:bg-accent-hover transition-colors text-sm"
              >
                Talk to someone who ships
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-24 section-divider">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <SectionIntro
              heading="How it works with your stack"
              description={`I don't rewrite what ${tool.name} built. I work alongside it, fix the production concerns, and ship the product.`}
            />

            <FadeInStagger className="mt-16 lg:mt-0 space-y-6" stagger={0.1}>
              {[
                { step: "01", title: "I review your codebase", desc: `I look at what ${tool.name} generated, identify the production gaps, and give you a clear list of what needs fixing — not what needs rewriting.` },
                { step: "02", title: "I fix the hard 20%", desc: "Auth edge cases. Payment webhooks. Database indexes. App Store compliance. CI/CD pipelines. I handle the things AI can't reliably get right." },
                { step: "03", title: "You review, we ship", desc: "Every fix is a PR. You review it, you understand it, you merge it. When we're done, you have a production-grade codebase you own and understand." },
              ].map((s) => (
                <FadeInItem key={s.step}>
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 border border-accent/20">
                      <span className="font-mono text-xs text-accent font-bold">{s.step}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </Container>
      </section>

      {/* What I fix in {tool} projects */}
      <section className="py-24 section-divider">
        <Container>
          <SectionIntro
            heading={`What I fix in ${tool.name} projects`}
            description="The specific production problems I see in every AI-generated codebase."
          />
          <FadeInStagger className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.06}>
            {tool.productionGaps.map((gap, i) => {
              const fixes = [
                { title: "Auth architecture", desc: "Refresh token rotation, MFA, social login redirect handling, session management" },
                { title: "Payment infrastructure", desc: "Idempotent webhooks, subscription lifecycle, failed payment recovery, refund paths" },
                { title: "Database scaling", desc: "Indexing for query patterns, migration strategy, connection pooling, caching" },
                { title: "Infrastructure & CI/CD", desc: "Staging environments, Vercel/Fly.io deployment, Sentry error tracking, alerting" },
                { title: "Mobile deployment", desc: "App Store compliance, provisioning, TestFlight, push notifications, review handling" },
                { title: "Architecture review", desc: "Audit AI-generated patterns, fix anti-patterns, establish maintainable foundation" },
              ];
              const fix = fixes[i % fixes.length];
              return (
                <FadeInItem key={i}>
                  <div className="border border-border rounded-xl bg-surface p-6 card-hover h-full">
                    <p className="text-sm text-red-400/60 mb-2">Gap: {gap.slice(0, 60)}...</p>
                    <h3 className="font-heading font-semibold text-base mb-1">{fix.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{fix.desc}</p>
                  </div>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </Container>
      </section>

      {/* Why me vs alternatives */}
      <section className="py-24">
        <Container>
          <SectionIntro
            heading="Why a technical cofounder, not a freelancer or agency"
            description={`The alternatives don't understand ${tool.name} projects. They'll want to rewrite everything.`}
          />
          <FadeIn className="mt-16 max-w-4xl">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-medium text-muted" />
                    <th className="text-left py-3 px-4 font-medium text-red-400/80">Agency</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-soft">Freelancer</th>
                    <th className="text-left py-3 pl-4 font-medium text-accent">VibeCofounder</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    { dimension: "Understands AI code", agency: "Wants to rewrite", freelancer: "Maybe", vibe: "Works with it, fixes what matters" },
                    { dimension: "Starting cost", agency: "$20K–$50K minimum", freelancer: "$5K–$10K", vibe: "Free intro call, then scoped pricing" },
                    { dimension: "Time to first commit", agency: "2–4 weeks", freelancer: "1–2 weeks", vibe: "Same week" },
                    { dimension: "You review the work", agency: "Monthly status decks", freelancer: "Varies", vibe: "Every PR. You stay in the codebase." },
                    { dimension: "Commitment", agency: "6–12 month contracts", freelancer: "Per-project", vibe: "Scoped. No retainer. No lock-in." },
                  ].map((c) => (
                    <tr key={c.dimension}>
                      <td className="py-3 pr-4 text-muted font-medium">{c.dimension}</td>
                      <td className="py-3 px-4 text-muted text-xs">{c.agency}</td>
                      <td className="py-3 px-4 text-muted text-xs">{c.freelancer}</td>
                      <td className="py-3 pl-4 text-xs">{c.vibe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 section-divider">
        <Container>
          <FadeIn>
            <div className="cta-dark rounded-3xl p-8 sm:p-12 lg:p-16">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tight">
                  Your {tool.name} prototype deserves to ship.
                </h2>
                <p className="mt-4 text-base text-muted leading-relaxed">
                  Book a free 30-minute call. We look at your codebase, figure out what&apos;s blocking you, and get you past the 80% wall.
                </p>
                <div className="mt-8">
                  <Link
                    href="https://cal.com/nicholasprokesch/30min"
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
