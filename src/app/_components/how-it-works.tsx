"use client";

import { Container, SectionIntro, FadeIn, FadeInStagger, FadeInItem } from "./ui";
import { MessageCircle, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "30-min deep dive",
    description:
      "We figure out what's actually broken: architecture, state, deployment, or just prioritization chaos. No BS.",
  },
  {
    icon: Code,
    step: "02",
    title: "I ship, you review",
    description:
      "I build the hard parts: auth flows, database schema, payment integration, CI/CD. You review PRs. Not a black box.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Hit production, together",
    description:
      "App Store submission, launch checklist, monitoring, post-launch triage. I stay until it's live and stable.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <SectionIntro
            heading="From stuck to shipped"
            description="Three steps. No retainers. No long-term lock-in."
          />

          <FadeInStagger className="mt-16 lg:mt-0 space-y-6" stagger={0.1}>
            {steps.map((s) => (
              <FadeInItem key={s.step}>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 border border-accent/20">
                    <s.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-mono text-xs text-accent tabular-nums">{s.step}</span>
                  <h3 className="font-heading font-semibold text-lg mt-1 mb-2">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </section>
  );
}
