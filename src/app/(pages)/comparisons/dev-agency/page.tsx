import type { Metadata } from "next";
import { ArrowRight, DollarSign, Clock, MessageSquare, Code } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dev Agency Alternative for AI-Built Products | VibeCofounder",
  description:
    "Dev agencies start at $50K and take 6 months. An on-demand technical cofounder costs less, ships faster, and understands your AI-built codebase.",
};

export default function DevAgencyAlternative() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs text-muted/60 uppercase tracking-widest mb-6">
            Alternatives
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Dev agencies build what you ask for.
            <br />
            <span className="text-gradient">I build what you actually need.</span>
          </h1>
          <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed mb-10">
            Agencies cost $50K–$500K, run 6–12 months, and bill you for every
            change order. Meanwhile, your AI prototype sits there, 80% done,
            while you wait for a project manager to schedule a kickoff call.
            There&apos;s a better way.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors text-sm"
          >
            Work with a technical cofounder instead
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Why people look for alternatives */}
      <section className="relative py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl font-bold tracking-tight mb-8">
            Why founders move on from agencies
          </h2>
          <div className="space-y-6">
            <PainRow
              icon={DollarSign}
              title="They cost more than your runway"
              body="Small agency: $90–$160/hr. Mid-market: $120–$250/hr. Enterprise: $400–$900/hr. A typical project runs $50K–$500K. Most pre-revenue founders don't have that — and shouldn't spend it before proving product-market fit."
            />
            <PainRow
              icon={Clock}
              title="6-month timelines kill momentum"
              body="You built an AI prototype in a weekend. An agency will take 2 weeks just to write a proposal. Kickoff call. Discovery phase. Sprint planning. By the time they start coding, you've lost the urgency that made your project exciting."
            />
            <PainRow
              icon={MessageSquare}
              title="They don't speak vibe coder"
              body="Your codebase was built with Cursor and Claude. It has patterns a senior engineer would recognize as AI-generated. Agencies will want to rewrite everything from scratch — not because it's broken, but because they didn't build it."
            />
            <PainRow
              icon={Code}
              title="Change orders, scope creep, surprise invoices"
              body="Agencies profit from scope expansion. Every 'small change' becomes a change order. The fixed-price quote you signed? That was for exactly what's in the SOW. Everything else is extra."
            />
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="relative py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold tracking-tight mb-8 text-center">
            Dev agency vs. on-demand technical cofounder
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-medium text-muted" />
                  <th className="text-left py-3 px-4 font-medium text-red-400/80">
                    Dev Agency
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
                    <td className="py-3 px-4">{c.agency}</td>
                    <td className="py-3 pl-4">{c.vibe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="relative py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl font-bold tracking-tight mb-8">
            When an agency makes sense (and when it doesn&apos;t)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-border rounded-2xl bg-surface p-6">
              <h3 className="font-semibold text-sm text-red-400/80 mb-3">
                Hire an agency if...
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• You have $100K+ budget and 6+ months to wait</li>
                <li>• You need a 10-person team across 4 time zones</li>
                <li>• Your MVP is already validated and scaling</li>
                <li>• You have a dedicated internal PM to manage them</li>
              </ul>
            </div>
            <div className="border border-accent/30 rounded-2xl bg-surface p-6">
              <h3 className="font-semibold text-sm text-accent mb-3">
                Work with a technical cofounder if...
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• You&apos;re pre-revenue or just launched</li>
                <li>• You built a prototype with AI and need to ship it</li>
                <li>• You want one senior engineer, not an org chart</li>
                <li>• You review your own PRs and want to stay in control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-muted mb-4">
            Stop waiting for a proposal. Start shipping.
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

function PainRow({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-4">
      <Icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
      <div>
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

const comparisons = [
  {
    dimension: "Starting cost",
    agency: "$20K–$50K minimum engagement",
    vibe: "$0 — free intro call, then scoped pricing",
  },
  {
    dimension: "Time to first commit",
    agency: "2–4 weeks (proposals, SOWs, kickoffs)",
    vibe: "Same week",
  },
  {
    dimension: "Who writes the code",
    agency: "Junior devs you never meet",
    vibe: "One senior engineer — the person you talked to",
  },
  {
    dimension: "Understands AI-built code",
    agency: "Will want to rewrite everything",
    vibe: "Works with what AI built, fixes what matters",
  },
  {
    dimension: "Pricing model",
    agency: "Fixed-bid or T&M, change orders extra",
    vibe: "Fixed scope, fixed price, no surprises",
  },
  {
    dimension: "Commitment",
    agency: "6–12 month contracts",
    vibe: "Project-based. No ongoing retainer required",
  },
  {
    dimension: "You review the work",
    agency: "Monthly status decks",
    vibe: "Every PR. You stay in the codebase",
  },
];