"use client";

import { Container, SectionIntro, FadeInStagger, FadeInItem, List, ListItem } from "./ui";
import { Bug, ServerCrash, AlertTriangle, ShieldQuestion } from "lucide-react";

const pains = [
  {
    icon: Bug,
    title: "It worked in the preview",
    description:
      "Your AI-built auth works locally but breaks in production. Refresh tokens, session management, social login redirects. The edge cases are endless.",
  },
  {
    icon: ServerCrash,
    title: "You shipped and it fell over",
    description:
      "Five users hit your app and the database melted. AI doesn't teach indexing strategies, connection pooling, or cold start mitigation.",
  },
  {
    icon: AlertTriangle,
    title: "Feature creep, scope rot",
    description:
      "You've been \"two weeks from launch\" for three months. Every AI session adds a new feature instead of shipping what's already built.",
  },
  {
    icon: ShieldQuestion,
    title: "Nobody reviewed your architecture",
    description:
      "Your AI-generated code has no second pair of eyes. No one challenged the data model, the security decisions, or the state management approach.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 section-divider">
      <Container>
        <SectionIntro
          heading="This is where AI abandons you"
          description="You shipped a prototype in a weekend with AI. That work is real. But then you hit the gap between &quot;looks great in a demo&quot; and &quot;actually works for real users.&quot;"
        />

        <FadeInStagger className="mt-16 max-w-2xl" stagger={0.08}>
          <List>
            {pains.map((p) => (
              <FadeInItem key={p.title}>
                <ListItem>
                  <div className="flex gap-4">
                    <p.icon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-heading font-semibold text-base mb-1">{p.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </ListItem>
              </FadeInItem>
            ))}
          </List>
        </FadeInStagger>
      </Container>
    </section>
  );
}
