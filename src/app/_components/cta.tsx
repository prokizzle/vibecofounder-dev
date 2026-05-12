"use client";

import { Container, FadeIn } from "./ui";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section id="cta" className="py-24 section-divider">
      <Container>
        <FadeIn>
          <div className="cta-dark rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-xs text-muted-soft uppercase tracking-[0.15em] mb-4">
                Still reading?
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
                Stop vibing. Start shipping.
              </h2>
              <p className="mt-4 text-base text-muted leading-relaxed">
                Book a 30-minute call. We look at your stack, figure out what's
                blocking you, and decide if it makes sense to work together. No pitch.
                Just problem-solving.
              </p>

              <p className="mt-3 text-sm text-muted-soft">
                Taking on 2-3 engagements this quarter. After that, waitlist.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://cal.com/nicholasprokesch/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-semibold hover:bg-accent-hover transition-colors text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule a free intro call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-sm text-muted-soft mb-2">
                  Not ready to talk? Audit your app first:
                </p>
                <Link
                  href="/production-checklist"
                  className="btn-press inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/25 text-accent text-sm font-semibold hover:bg-accent-soft transition-colors"
                >
                  Free Production Readiness Checklist
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
