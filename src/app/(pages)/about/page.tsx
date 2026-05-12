import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Nick — Technical Cofounder | VibeCofounder",
  description:
    "Full-stack engineer across iOS, Android, and TypeScript. I help vibe coders ship products that don't break in production.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs text-muted/60 uppercase tracking-widest mb-6">
            About
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            I&apos;m Nick Prokesch. I help
            <br />
            <span className="text-gradient">
              founders actually ship.
            </span>
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-6">
            Full-stack engineer across iOS, Android, and TypeScript. 10+
            years building production software. Currently focused on helping
            solo founders and indie developers get past the gap between
            &quot;works in my demo&quot; and &quot;works for paying users.&quot;
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors text-sm"
          >
            Book a call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Stack */}
      <section className="relative py-16 sm:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl font-bold tracking-tight mb-8">What I work with</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <StackCol
              title="iOS"
              items={[
                "Swift 6, SwiftUI, SwiftData",
                "Tuist monorepo architecture",
                "TestFlight & App Store submission",
                "Push notifications, in-app purchase",
              ]}
            />
            <StackCol
              title="Android"
              items={[
                "Kotlin, Jetpack Compose, Hilt DI",
                "Orbit MVI architecture",
                "Google Play Console",
                "Gradle multi-module builds",
              ]}
            />
            <StackCol
              title="Web & Backend"
              items={[
                "TypeScript, React, Next.js",
                "Firebase (Auth, Firestore, Functions)",
                "Stripe, Clerk, Vercel",
                "PostgreSQL, Supabase, Prisma",
              ]}
            />
            <StackCol
              title="Infrastructure"
              items={[
                "CI/CD (GitHub Actions, fastlane)",
                "Sentry, monitoring, alerting",
                "Docker, edge functions",
                "Blue-green deploys, rollback strategies",
              ]}
            />
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="relative py-16 sm:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl font-bold tracking-tight mb-8">How I work</h2>
          <div className="space-y-8">
            <PrincipleRow
              title="Scoped engagements, no retainers"
              body="Every project starts with a free call where we figure out
              what's actually broken and what it'll take to fix it. Then you
              get a fixed scope and fixed price. No monthly invoices. No
              long-term lock-in. You pay to ship, not to keep me on payroll."
            />
            <PrincipleRow
              title="You review every PR"
              body="I work in your repo, on your branches. You review the code
              before it merges. When the engagement ends, you understand
              everything that was built — no black boxes, no code you're
              afraid to touch."
            />
            <PrincipleRow
              title="I work with what AI already built"
              body="I won't tell you to throw out your AI-generated code. The
              prototype you built has value — it proves the concept, it got
              you 80% there. I fix the parts that break, restructure what
              needs restructuring, and leave what's working alone."
            />
            <PrincipleRow
              title="I tell you when you don't need me"
              body="If your problem is solvable with a weekend of focused
              prompting and a good tutorial, I'll tell you that. If you
              actually need a full-time hire, I'll tell you that too. I'm here
              to get you shipped — not to upsell you into an engagement you
              don't need."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-muted mb-4">
            Want to know if we&apos;d work well together?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors text-sm"
          >
            Let&apos;s talk
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function StackCol({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-accent mb-3">{title}</h3>
      <ul className="space-y-2 text-sm text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function PrincipleRow({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div>
      <h3 className="font-semibold text-sm mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{body}</p>
    </div>
  );
}