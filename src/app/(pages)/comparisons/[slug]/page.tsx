import type { Metadata } from "next";
import { Container, SectionIntro, FadeIn, FadeInStagger, FadeInItem } from "@/app/_components/ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { toolComparisons, getComparisonBySlug, allComparisonSlugs } from "@/data/comparisons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allComparisonSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);
  if (!comp) return {};

  return {
    title: comp.metaTitle,
    description: comp.metaDescription,
  };
}

export default async function ToolComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);
  if (!comp) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comp.title,
    description: comp.description,
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
      "@id": `https://vibecofounder.com/comparisons/${comp.slug}`,
    },
  };

  const comparisonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: comp.title,
    description: comp.subtitle,
    numberOfItems: comp.comparisons.length,
    itemListElement: comp.comparisons.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.dimension,
      item: {
        "@type": "Thing",
        name: c.dimension,
        description: `${comp.otherName}: ${c.other}. VibeCofounder: ${c.vibe}`,
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonLd) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-24">
        <Container>
          <FadeIn className="max-w-3xl">
            <p className="text-xs text-accent font-semibold uppercase tracking-[0.15em] mb-4">
              Compare
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              {comp.title}
            </h1>
            <p className="mt-2 text-xl text-muted">{comp.subtitle}</p>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              {comp.description}
            </p>
            <p className="mt-3 text-xs text-muted/60">Last updated: May 2026</p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="btn-press group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-semibold hover:bg-accent-hover transition-colors text-sm"
              >
                Skip the comparison. Ship instead.
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Pain points */}
      <section className="py-24 section-divider">
        <Container>
          <SectionIntro
            heading={`Why founders outgrow both`}
            description="The problems that AI code tools and app builders can't solve, regardless of which one you pick."
          />
          <FadeInStagger className="mt-16 max-w-2xl space-y-8" stagger={0.1}>
            {comp.painPoints.map((p) => (
              <FadeInItem key={p.title}>
                <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.body}</p>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="py-24 section-divider">
        <Container>
          <SectionIntro heading="Head-to-head comparison" />
          <FadeIn className="mt-16 max-w-4xl">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-medium text-muted" />
                    <th className="text-left py-3 px-4 font-medium text-red-400/80">
                      {comp.otherName}
                    </th>
                    <th className="text-left py-3 pl-4 font-medium text-accent">
                      VibeCofounder
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {comp.comparisons.map((c) => (
                    <tr key={c.dimension}>
                      <td className="py-3 pr-4 text-muted font-medium">{c.dimension}</td>
                      <td className="py-3 px-4 text-muted">{c.other}</td>
                      <td className="py-3 pl-4">{c.vibe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* When to choose what */}
      <section className="py-24">
        <Container>
          <SectionIntro heading="When to choose what" />
          <FadeIn className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              <div className="border border-border rounded-xl bg-surface p-6">
                <h3 className="font-heading font-semibold text-sm text-red-400/80 mb-3">
                  Stick with {comp.otherName} if...
                </h3>
                <ul className="space-y-2 text-sm text-muted">
                  {comp.whenOther.map((item) => (
                    <li key={item}>&#8226; {item}</li>
                  ))}
                </ul>
              </div>
              <div className="border border-accent/40 rounded-xl bg-surface p-6 ring-1 ring-accent/20">
                <h3 className="font-heading font-semibold text-sm text-accent mb-3">
                  Work with VibeCofounder if...
                </h3>
                <ul className="space-y-2 text-sm text-muted">
                  {comp.whenVibe.map((item) => (
                    <li key={item}>&#8226; {item}</li>
                  ))}
                </ul>
              </div>
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
                  Stop comparing tools. Start shipping.
                </h2>
                <p className="mt-4 text-base text-muted leading-relaxed">
                  Both tools write code. Neither ships it. Book a free intro call and get your app past the 80% wall.
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
