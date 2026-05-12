import type { Metadata } from "next";
import { ArrowRight, Brain, Handshake, Wrench } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fractional CTO vs On-Demand Technical Cofounder | VibeCofounder",
  description:
    "Fractional CTOs provide strategic leadership at $150–$300/hr. A technical cofounder also writes the code. Here's how to choose.",
};

export default function FractionalCTOVs() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs text-muted/60 uppercase tracking-widest mb-6">
            vs
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Fractional CTOs tell you what to build.
            <br />
            <span className="text-gradient">
              I build it with you.
            </span>
          </h1>
          <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed mb-10">
            A fractional CTO gives you strategy — roadmaps, architecture docs,
            tech stack recommendations. But if you&apos;re a solo founder with an
            AI-built prototype, you don&apos;t need a roadmap. You need someone
            who will open a PR.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors text-sm"
          >
            Talk to someone who ships
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* TL;DR */}
      <section className="relative py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl font-bold tracking-tight mb-6">
            TL;DR
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Fractional CTOs</strong> are
              strategic advisors. They charge <strong>$150–$300/hr</strong> or{" "}
              <strong>$10K–$25K/month retainers</strong> — sometimes plus 1–2%
              equity. They produce roadmaps, architecture diagrams, and hiring
              recommendations. They don&apos;t typically write production code
              or handle App Store submissions.
            </p>
            <p>
              <strong className="text-foreground">
                A technical cofounder
              </strong>{" "}
              does the strategy AND the implementation. Same senior engineering
              expertise, but the deliverable is a shipped product — not a PDF.
              You get PRs to review, not slide decks to read.
            </p>
            <p>
              If you already have a development team and need someone to lead
              them, hire a fractional CTO. If you need someone to{" "}
              <em>do the work</em> — fix the auth, ship the payments, get past
              App Store review — that&apos;s a different role entirely.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="relative py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold tracking-tight mb-8 text-center">
            Fractional CTO vs. technical cofounder
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-medium text-muted" />
                  <th className="text-left py-3 px-4 font-medium text-amber-400/80">
                    Fractional CTO
                  </th>
                  <th className="text-left py-3 pl-4 font-medium text-accent">
                    VibeCofounder
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {comparisons.map((c) => (
                  <tr key={c.dimension}>
                    <td className="py-3 pr-4 text-muted">{c.dimension}</td>
                    <td className="py-3 px-4">{c.cto}</td>
                    <td className="py-3 pl-4">{c.vibe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Three-way differentiation */}
      <section className="relative py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold tracking-tight mb-8 text-center">
            Different tools for different stages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DiffCard
              icon={Brain}
              title="Fractional CTO"
              when="You have a dev team and need leadership"
              does="Roadmaps, architecture reviews, hiring, investor prep"
              cost="$150–$300/hr or $10K–$25K/mo"
              accent="amber"
            />
            <DiffCard
              icon={Wrench}
              title="Technical Cofounder"
              when="You have an AI prototype and need to ship"
              does="Code, PRs, App Store submissions, infrastructure, payments"
              cost="Scoped pricing. No retainer."
              accent="accent"
              highlight
            />
            <DiffCard
              icon={Handshake}
              title="Full-Time CTO"
              when="You're post-Series A with 10+ engineers"
              does="Culture, hiring, org design, long-term tech vision"
              cost="$230K–$380K/yr + equity + benefits"
              accent="emerald"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-muted mb-4">
            Strategy is cheap. Shipping is the hard part.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors text-sm"
          >
            Book a free intro call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function DiffCard({
  icon: Icon,
  title,
  when,
  does,
  cost,
  accent,
  highlight,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  when: string;
  does: string;
  cost: string;
  accent: "amber" | "accent" | "emerald";
  highlight?: boolean;
}) {
  const accentMap = {
    amber: "text-amber-400/80 border-amber-400/30",
    accent: "text-accent border-accent/40",
    emerald: "text-emerald-400/80 border-emerald-400/30",
  };
  return (
    <div
      className={`border rounded-2xl bg-surface p-6 ${
        highlight ? "border-accent/60 ring-1 ring-accent/20" : "border-border"
      }`}
    >
      <Icon className={`w-5 h-5 mb-3 ${accentMap[accent].split(" ")[0]}`} />
      <h3 className="font-semibold text-sm mb-3">{title}</h3>
      <div className="space-y-3 text-xs text-muted">
        <div>
          <span className="text-foreground font-medium">Best when: </span>
          {when}
        </div>
        <div>
          <span className="text-foreground font-medium">Does: </span>
          {does}
        </div>
        <div>
          <span className="text-foreground font-medium">Cost: </span>
          {cost}
        </div>
      </div>
    </div>
  );
}

const comparisons = [
  {
    dimension: "Primary deliverable",
    cto: "Strategy documents, roadmaps, architecture reviews",
    vibe: "Working code. PRs you review. Shipped features.",
  },
  {
    dimension: "Typical engagement",
    cto: "10–25 hrs/week retainer, ongoing advisory",
    vibe: "Scoped project: specific problems, clear finish line",
  },
  {
    dimension: "Codes in your repo",
    cto: "Rarely. May pair with your devs but doesn't ship features",
    vibe: "That's the job. Every engagement produces merged PRs.",
  },
  {
    dimension: "App Store submission",
    cto: "May advise on compliance. Won't handle provisioning",
    vibe: "End-to-end: profiles, certs, submission, appeal if needed",
  },
  {
    dimension: "Handles auth/payments/infra",
    cto: "Recommends approach. Your team implements",
    vibe: "Designs AND implements. You review the PRs.",
  },
  {
    dimension: "Pricing",
    cto: "$150–$300/hr, often + equity, monthly retainer",
    vibe: "Free intro call → fixed scope + fixed price. No retainer.",
  },
  {
    dimension: "Who it's best for",
    cto: "Founders with a team who need technical leadership",
    vibe: "Solo founders who need someone to DO the hard 20%",
  },
];