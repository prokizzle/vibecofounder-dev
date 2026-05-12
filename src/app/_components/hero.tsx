"use client";

import { FadeIn } from "./ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
      <FadeIn className="max-w-2xl mx-auto px-6 lg:px-8">
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
          Your vibe got you{" "}
          <span className="text-gradient">80% of the way.</span>
        </h1>

        <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
          I handle the 20% AI can&apos;t. Auth that doesn&apos;t leak.
          Payments that settle. Databases that don&apos;t melt. App Store
          submissions that actually get approved.
        </p>

        <p className="mt-3 text-sm text-muted-soft">
          14 founders unstuck &middot; 100% App Store approval rate
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
          <Link
            href="/contact"
            className="btn-press group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-semibold hover:bg-accent-hover transition-colors text-sm"
          >
            Ship your prototype
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="https://fantastical.app/giq5x5fcyt-s8uy/1-hour-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-soft hover:text-foreground transition-colors py-3"
          >
            Skip straight to a call →
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
