import type { Metadata } from "next";
import { Container, SectionIntro, FadeInStagger, FadeInItem } from "@/app/_components/ui";
import { aiTools } from "@/data/ai-tools";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Tools to Production | VibeCofounder",
  description:
    "Ship your AI-built prototype to production. Guides for Cursor, Copilot, Claude, Bolt, v0, and Lovable — covering auth, payments, database, mobile deployment, and infrastructure.",
};

export default function ToolsIndex() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24">
        <Container>
          <SectionIntro
            heading="AI tools to production"
            description="Your AI tool got you 80% of the way. I handle the 20% it can't. Pick your tool to see the specific production gaps and how I fix them."
          />

          <FadeInStagger
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.06}
          >
            {aiTools.map((tool) => (
              <FadeInItem key={tool.slug}>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="block border border-border rounded-xl bg-surface p-6 card-hover group h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{tool.logo}</span>
                    <div>
                      <h3 className="font-heading font-semibold text-lg group-hover:text-accent transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-muted">{tool.category}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {tool.tagline}
                  </p>
                  <div className="space-y-1">
                    {tool.productionGaps.slice(0, 2).map((gap) => (
                      <p key={gap} className="text-xs text-red-400/50 line-clamp-1">
                        {gap.slice(0, 80)}...
                      </p>
                    ))}
                  </div>
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>
    </div>
  );
}
