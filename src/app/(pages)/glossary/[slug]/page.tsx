import type { Metadata } from "next";
import { Container, SectionIntro, FadeIn, FadeInStagger, FadeInItem } from "@/app/_components/ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { glossaryTerms, getGlossaryTermBySlug, allGlossarySlugs } from "@/data/glossary";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allGlossarySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);
  if (!term) return {};

  return {
    title: `What Is ${term.term}? | VibeCofounder Glossary`,
    description: term.definition.slice(0, 160),
  };
}

export default async function GlossaryTermPage({ params }: PageProps) {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);
  if (!term) return null;

  const relatedTerms = term.relatedTerms
    .map((r) => glossaryTerms.find((t) => t.slug === r))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "VibeCofounder Production Engineering Glossary",
      url: "https://vibecofounder.com/glossary",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${term.term}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: term.definition,
        },
      },
      {
        "@type": "Question",
        name: `Why does ${term.term.toLowerCase()} matter?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: term.whyItMatters,
        },
      },
      {
        "@type": "Question",
        name: `How do AI tools get ${term.term.toLowerCase()} wrong?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: term.aiGotcha,
        },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-24">
        <Container>
          <FadeIn className="max-w-3xl">
            <p className="text-xs text-accent font-semibold uppercase tracking-[0.15em] mb-4">
              Glossary
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              What is <span className="text-gradient">{term.term}</span>?
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              {term.definition}
            </p>
            <p className="mt-3 text-xs text-muted/60">Last updated: May 2026</p>
          </FadeIn>
        </Container>
      </section>

      {/* Why it matters */}
      <section className="py-24 section-divider">
        <Container>
          <FadeIn className="max-w-2xl">
            <SectionIntro heading="Why it matters" />
            <div className="mt-8">
              <p className="text-base text-muted leading-relaxed">{term.whyItMatters}</p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* AI gotcha */}
      <section className="py-24 section-divider">
        <Container>
          <FadeIn className="max-w-2xl">
            <SectionIntro
              heading="Where AI gets this wrong"
              description="How AI tools get this wrong, and why it matters for your app."
            />
            <div className="mt-8">
              <div className="border border-red-400/20 rounded-xl bg-red-400/5 p-6">
                <p className="text-base text-muted leading-relaxed">{term.aiGotcha}</p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Related terms */}
      {relatedTerms.length > 0 && (
        <section className="py-24">
          <Container>
            <SectionIntro heading="Related terms" />
            <FadeInStagger className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.05}>
              {relatedTerms.map((t) => (
                <FadeInItem key={t!.slug}>
                  <Link
                    href={`/glossary/${t!.slug}`}
                    className="block border border-border rounded-xl bg-surface p-5 card-hover group"
                  >
                    <h3 className="font-heading font-semibold text-base mb-1 group-hover:text-accent transition-colors">{t!.term}</h3>
                    <p className="text-sm text-muted line-clamp-2">{t!.definition.slice(0, 120)}...</p>
                  </Link>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 section-divider">
        <Container>
          <FadeIn>
            <div className="cta-dark rounded-3xl p-8 sm:p-12 lg:p-16">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tight">
                  Stuck on {term.term.toLowerCase()}?
                </h2>
                <p className="mt-4 text-base text-muted leading-relaxed">
                  I handle the production engineering that AI can&apos;t. Book a free intro call and get your app past the 80% wall.
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
