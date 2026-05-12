"use client";

import { Container, SectionIntro, FadeIn, FadeInStagger, FadeInItem } from "./ui";
import {
  ArrowRight,
  Shield,
  CreditCard,
  Database,
  Cloud,
  Smartphone,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Shield,
    title: "Auth that doesn't leak",
    description:
      "OAuth, magic links, MFA, session management. I wire up Clerk or build a custom Firebase Auth flow that handles edge cases.",
  },
  {
    icon: CreditCard,
    title: "Payments that settle",
    description:
      "Stripe integration, subscriptions, IAP, revenue reporting. Webhooks, invoice management, and the refund path.",
  },
  {
    icon: Database,
    title: "Data models that scale",
    description:
      "Schema design, migrations, indexing, caching. I untangle your Firestore or Supabase setup before it becomes technical debt.",
  },
  {
    icon: Cloud,
    title: "Infrastructure that stays up",
    description:
      "CI/CD pipelines, staging environments, monitoring, error tracking. Sentry setup, deploy to Vercel or Fly.io, pager alerts.",
  },
  {
    icon: Smartphone,
    title: "Mobile that gets through review",
    description:
      "App Store compliance, provisioning profiles, push notifications, TestFlight distribution. I get your app past Apple's gatekeepers.",
  },
  {
    icon: Wrench,
    title: "Architecture review & refactor",
    description:
      "I audit your codebase for anti-patterns, fix the state management spaghetti, and leave you with a maintainable foundation.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 section-divider">
      <Container>
        <SectionIntro
          heading="What I actually do"
          description="The specific things that turn a prototype into a product."
        />

        <FadeInStagger
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          stagger={0.06}
        >
          {services.map((s) => (
            <FadeInItem key={s.title}>
              <div className="card-hover border border-border rounded-xl bg-surface p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 border border-accent/20">
                    <s.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-base">{s.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {s.description}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/contact"
            className="btn-press inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent/25 text-accent text-sm font-semibold hover:bg-accent-soft transition-colors group"
          >
            Book a call to get unstuck
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
