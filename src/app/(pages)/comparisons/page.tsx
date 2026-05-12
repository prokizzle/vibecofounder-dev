import type { Metadata } from "next";
import { Container, SectionIntro, FadeInStagger, FadeInItem } from "@/app/_components/ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { toolComparisons } from "@/data/comparisons";

export const metadata: Metadata = {
  title: "Compare Your Options | VibeCofounder",
  description:
    "Dev agency, fractional CTO, full-time hire, or on-demand technical cofounder — which makes sense for your stage? Compare pricing, timelines, and trade-offs.",
};

const servicePages = [
  {
    href: "/comparisons/dev-agency",
    title: "vs Dev Agency",
    preview:
      "Agencies start at $50K and take 6 months. An on-demand technical cofounder costs less, ships immediately, and understands your AI-built codebase.",
  },
  {
    href: "/comparisons/fractional-cto",
    title: "vs Fractional CTO",
    preview:
      "Fractional CTOs give you strategy at $150–$300/hr. A technical cofounder also writes the code. Which one fits your stage?",
  },
  {
    href: "/comparisons/hiring-developer",
    title: "vs Hiring Full-Time",
    preview:
      "A senior engineer costs $150K–$225K/year plus benefits and ramp time. You don't need a hire. You need to ship.",
  },
];

export default function Comparisons() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24">
        <Container>
          <SectionIntro
            heading="You have options. Here's how they stack up."
            description="Agencies, fractional CTOs, full-time hires, AI tools — every path to shipping has different trade-offs in cost, speed, and control."
            align="center"
          />
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <h2 className="font-heading text-xs font-semibold text-accent uppercase tracking-[0.15em] mb-6">
            Service comparisons
          </h2>
          <FadeInStagger className="space-y-4" stagger={0.05}>
            {servicePages.map((p) => (
              <FadeInItem key={p.href}>
                <Link
                  href={p.href}
                  className="block border border-border rounded-xl bg-surface p-6 card-hover group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-semibold text-base mb-1 group-hover:text-foreground transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {p.preview}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted shrink-0 ml-4 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <section className="pb-24 section-divider">
        <Container>
          <h2 className="font-heading text-xs font-semibold text-accent uppercase tracking-[0.15em] mb-6">
            AI tool comparisons
          </h2>
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.05}>
            {toolComparisons.map((c) => (
              <FadeInItem key={c.slug}>
                <Link
                  href={`/comparisons/${c.slug}`}
                  className="block border border-border rounded-xl bg-surface p-6 card-hover group h-full"
                >
                  <h3 className="font-heading font-semibold text-base mb-1 group-hover:text-foreground transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{c.subtitle}</p>
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>
    </div>
  );
}