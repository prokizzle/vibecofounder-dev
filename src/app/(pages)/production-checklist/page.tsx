"use client";

import { useState } from "react";
import { Container, SectionIntro, FadeIn, FadeInStagger, FadeInItem } from "@/app/_components/ui";
import { ChecklistCaptureForm } from "@/app/_components/checklist-capture-form";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Authentication",
    items: [
      { text: "Refresh token rotation is implemented", passed: false, link: "/glossary/refresh-token-rotation" },
      { text: "MFA enrollment flow works on mobile", passed: false, link: "/glossary/production-readiness" },
      { text: "Social login redirect handles edge cases (cancelled auth, app not installed)", passed: false, link: "/glossary/oauth-edge-cases" },
      { text: "Session management survives token expiry without logout", passed: false, link: "/glossary/production-readiness" },
      { text: "Auth state persists across app background/foreground cycles", passed: false, link: "/glossary/production-readiness" },
    ],
  },
  {
    name: "Payments",
    items: [
      { text: "Webhooks are idempotent (duplicate events don't double-charge)", passed: false, link: "/glossary/idempotent-webhooks" },
      { text: "Failed payment recovery (dunning) is implemented", passed: false, link: "/glossary/stripe-integration" },
      { text: "Subscription lifecycle (upgrade/downgrade/cancel) works end-to-end", passed: false, link: "/glossary/stripe-integration" },
      { text: "Refund path exists and updates internal state", passed: false, link: "/glossary/stripe-integration" },
      { text: "Test mode and live mode are clearly separated", passed: false, link: "/glossary/stripe-integration" },
    ],
  },
  {
    name: "Database",
    items: [
      { text: "Indexes exist for your actual query patterns", passed: false, link: "/glossary/database-indexing" },
      { text: "Migration strategy is in place (not manual ALTER TABLE)", passed: false, link: "/glossary/database-migration" },
      { text: "Connection pooling is configured for production load", passed: false, link: "/glossary/database-indexing" },
      { text: "Row-level security policies are set (if using Supabase/Firebase)", passed: false, link: "/glossary/production-readiness" },
      { text: "Backup and recovery plan exists", passed: false, link: "/glossary/staging-environment" },
    ],
  },
  {
    name: "Infrastructure",
    items: [
      { text: "CI/CD pipeline runs tests before deploy", passed: false, link: "/glossary/ci-cd-pipeline" },
      { text: "Staging environment mirrors production", passed: false, link: "/glossary/staging-environment" },
      { text: "Error tracking is live (Sentry, Bugsnag, etc.)", passed: false, link: "/glossary/ci-cd-pipeline" },
      { text: "Alerting is configured for uptime and error spikes", passed: false, link: "/glossary/production-readiness" },
      { text: "Preview deployments exist for every PR", passed: false, link: "/glossary/staging-environment" },
    ],
  },
  {
    name: "Mobile Deployment (if applicable)",
    items: [
      { text: "Provisioning profiles are set up for TestFlight", passed: false, link: "/glossary/provisioning-profiles" },
      { text: "App Store compliance guidelines are followed", passed: false, link: "/glossary/app-store-review" },
      { text: "Push notification configuration is production-grade", passed: false, link: "/glossary/app-store-review" },
      { text: "App Store review submission is ready (screenshots, metadata, privacy policy)", passed: false, link: "/glossary/app-store-review" },
      { text: "Review appeal process is documented", passed: false, link: "/glossary/app-store-review" },
    ],
  },
  {
    name: "Security",
    items: [
      { text: "Input validation exists on all user-facing endpoints", passed: false, link: "/glossary/production-readiness" },
      { text: "Rate limiting is configured for auth and payment endpoints", passed: false, link: "/glossary/production-readiness" },
      { text: "Environment variables are not leaked in client bundle", passed: false, link: "/glossary/ci-cd-pipeline" },
      { text: "CORS policy is restrictive, not wildcard", passed: false, link: "/glossary/production-readiness" },
      { text: "Dependency audit for known vulnerabilities is clean", passed: false, link: "/glossary/production-readiness" },
    ],
  },
];

export default function ProductionChecklistPage() {
  const [revealed, setRevealed] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  function toggleItem(id: string) {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const totalItems = categories.reduce((sum, c) => sum + c.items.length, 0);
  const checkedCount = checkedItems.size;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24">
        <Container>
          <FadeIn className="max-w-3xl">
            <p className="text-xs text-accent font-semibold uppercase tracking-[0.15em] mb-4">
              Free Checklist
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Production Readiness
              <br />
              <span className="text-gradient">Checklist</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              30 items across 6 categories. Go through each one honestly. If you can&apos;t check it off, that&apos;s a gap AI can&apos;t fill, and a place your app will break when real users show up.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Capture gate */}
      {!revealed && (
        <section className="py-24 section-divider">
          <Container>
            <FadeIn className="max-w-2xl">
              <SectionIntro
                heading="Get the full checklist"
                description="Enter your email and I'll send you this checklist plus a breakdown of what to do about each unchecked item. Takes 5 minutes to read, could save you 5 months of being stuck."
              />
              <div className="mt-10">
                <ChecklistCaptureForm onSubmitted={() => setRevealed(true)} />
              </div>
            </FadeIn>
          </Container>
        </section>
      )}

      {/* Checklist content (revealed after email) */}
      {revealed && (
        <>
          {/* Progress bar */}
          <section className="py-8 section-divider">
            <Container>
              <FadeIn className="max-w-2xl">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-foreground">
                    {checkedCount} of {totalItems} items checked
                  </p>
                  <p className="text-xs text-muted">
                    {checkedCount === totalItems
                      ? "Your app is production-ready."
                      : checkedCount === 0
                        ? "Start checking off what you have."
                        : `${totalItems - checkedCount} gaps to fill.`}
                  </p>
                </div>
                <div className="h-2 rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full rounded-full bg-accent transition-all duration-300"
                    style={{ width: `${(checkedCount / totalItems) * 100}%` }}
                  />
                </div>
              </FadeIn>
            </Container>
          </section>

          {/* Categories */}
          {categories.map((cat) => (
            <section key={cat.name} className="py-16 section-divider">
              <Container>
                <FadeIn className="max-w-2xl">
                  <h2 className="font-heading text-2xl font-bold tracking-tight mb-8">
                    {cat.name}
                  </h2>
                  <FadeInStagger className="space-y-3" stagger={0.04}>
                    {cat.items.map((item, i) => {
                      const id = `${cat.name}-${i}`;
                      const isChecked = checkedItems.has(id);
                      return (
                        <FadeInItem key={id}>
                          <button
                            type="button"
                            onClick={() => toggleItem(id)}
                            className="w-full text-left flex items-start gap-3 p-4 rounded-xl border border-border bg-surface hover:border-accent/30 transition-colors group"
                          >
                            <span className="mt-0.5 shrink-0">
                              {isChecked ? (
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                              ) : (
                                <XCircle className="w-5 h-5 text-red-400/40" />
                              )}
                            </span>
                            <span className={`text-sm leading-relaxed ${isChecked ? "text-muted line-through" : "text-foreground"}`}>
                              {item.text}
                            </span>
                            {!isChecked && (
                              <Link
                                href={item.link}
                                className="shrink-0 mt-0.5 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={(e) => e.stopPropagation()}
                              >
                                Learn more
                              </Link>
                            )}
                          </button>
                        </FadeInItem>
                      );
                    })}
                  </FadeInStagger>
                </FadeIn>
              </Container>
            </section>
          ))}

          {/* CTA */}
          <section className="py-24 section-divider">
            <Container>
              <FadeIn>
                <div className="cta-dark rounded-3xl p-8 sm:p-12 lg:p-16">
                  <div className="max-w-xl mx-auto text-center">
                    <h2 className="font-heading text-3xl font-bold tracking-tight">
                      {checkedCount >= totalItems * 0.8
                        ? "Almost there. Let me help with the rest."
                        : "Gaps? I fill them for a living."}
                    </h2>
                    <p className="mt-4 text-base text-muted leading-relaxed">
                      Every unchecked item is something AI keeps getting wrong. I handle these for founders every week. Book a free intro call and get past the 80% wall.
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
        </>
      )}
    </div>
  );
}
