import type { Metadata } from "next";
import { Container, SectionIntro, FadeInStagger, FadeInItem } from "@/app/_components/ui";
import { aiTools } from "@/data/ai-tools";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical Cofounder for AI Tool Founders | VibeCofounder",
  description:
    "Need a technical cofounder who understands your AI tool? I work with Cursor, Copilot, Claude, Bolt, v0, and Lovable founders to ship production-ready apps.",
};

export default function ForIndex() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24">
        <Container>
          <SectionIntro
            heading="Technical cofounder for AI founders"
            description="Pick your AI tool. I'll handle the production 20% that it can't — auth, payments, database, mobile deployment, and infrastructure."
          />

          <FadeInStagger
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.06}
          >
            {aiTools.map((tool) => (
              <FadeInItem key={tool.slug}>
                <Link
                  href={`/for/${tool.slug}`}
                  className="block border border-border rounded-xl bg-surface p-6 card-hover group h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{tool.logo}</span>
                    <h3 className="font-heading font-semibold text-lg group-hover:text-accent transition-colors">
                      {tool.name} founders
                    </h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    Technical cofounder who understands {tool.name}&apos;s production gaps and fixes what matters.
                  </p>
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>
    </div>
  );
}
