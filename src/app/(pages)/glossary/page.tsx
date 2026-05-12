import type { Metadata } from "next";
import { Container, SectionIntro, FadeInStagger, FadeInItem } from "@/app/_components/ui";
import { glossaryTerms } from "@/data/glossary";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glossary: Production Terms for AI-Built Apps | VibeCofounder",
  description:
    "The production engineering terms every vibe coder needs to know. From refresh token rotation to App Store review — clear definitions and where AI gets them wrong.",
};

export default function GlossaryIndex() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24">
        <Container>
          <SectionIntro
            heading="Glossary for AI builders"
            description="The production engineering terms every vibe coder needs to know. Clear definitions, why they matter, and where AI tools get them wrong."
          />

          <FadeInStagger
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            stagger={0.04}
          >
            {glossaryTerms.map((term) => (
              <FadeInItem key={term.slug}>
                <Link
                  href={`/glossary/${term.slug}`}
                  className="block border border-border rounded-xl bg-surface p-5 card-hover group h-full"
                >
                  <h3 className="font-heading font-semibold text-base mb-1 group-hover:text-accent transition-colors">
                    {term.term}
                  </h3>
                  <p className="text-sm text-muted line-clamp-3">{term.definition.slice(0, 150)}...</p>
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>
    </div>
  );
}
