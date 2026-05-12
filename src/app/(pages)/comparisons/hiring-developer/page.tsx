import type { Metadata } from "next";
import { ArrowRight, User, Users, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alternatives to Hiring a Full-Time Developer | VibeCofounder",
  description:
    "A full-time senior engineer costs $150K–$225K/yr plus benefits, equity, and months of ramp-up. An on-demand technical cofounder costs a fraction and ships immediately.",
};

export default function HiringDeveloperAlternative() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs text-muted/60 uppercase tracking-widest mb-6">
            Alternatives
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            You don&apos;t need to hire.
            <br />
            <span className="text-gradient">
              You need to ship.
            </span>
          </h1>
          <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed mb-10">
            Hiring a full-time senior engineer costs $150K–$225K/year, takes
            3–6 months to ramp, and requires you to become a manager. Your
            AI-built prototype doesn&apos;t need a full-time team. It needs
            someone to finish the last 20% — right now.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors text-sm"
          >
            Get the last 20% done
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Why hiring is wrong stage */}
      <section className="relative py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl font-bold tracking-tight mb-8">
            Why hiring is the wrong move (right now)
          </h2>
          <div className="space-y-6">
            <PainRow
              icon={User}
              title="You can't afford a senior engineer"
              body="Senior engineers at startups earn $150K–$225K/year. Add benefits, payroll tax, equity dilution, and that's easily $200K–$300K fully loaded. Before they've written a single line of code. Before you have revenue."
            />
            <PainRow
              icon={Users}
              title="You don't know what to hire for yet"
              body="Your AI prototype hasn't been tested with real users. You might need a frontend specialist — or a backend engineer. Or an iOS developer. Or all three. Hiring the wrong specialty too early locks you into a stack you might regret."
            />
            <PainRow
              icon={Shield}
              title="Managing a hire is a full-time job"
              body="Interviewing, onboarding, code review, 1:1s, career development. If you're a solo founder, adding an employee means you're now a manager. That's 5–10 hours/week you could spend on product, users, or customers — gone."
            />
          </div>
        </div>
      </section>

      {/* Options comparison */}
      <section className="relative py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold tracking-tight mb-8 text-center">
            Your options for getting past the 80% wall
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-medium text-muted" />
                  <th className="text-left py-3 px-4 font-medium text-red-400/80">
                    Full-Time Hire
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-amber-400/80">
                    Freelancer
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
                    <td className="py-3 px-4 text-xs">{c.hire}</td>
                    <td className="py-3 px-4 text-xs">{c.freelancer}</td>
                    <td className="py-3 pl-4 text-xs">{c.vibe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-muted mb-4">
            Ship first. Hire later.
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
    dimension: "Cost",
    hire: "$150K–$225K/yr + benefits, equity, payroll tax",
    freelancer: "$50–$300/hr. Quality varies wildly. No recourse if they vanish.",
    vibe: "Scoped pricing. No retainer. No equity. No surprises.",
  },
  {
    dimension: "Time to start",
    hire: "4–12 weeks to recruit, interview, and hire",
    freelancer: "Days. If you're lucky and they show up.",
    vibe: "Same week.",
  },
  {
    dimension: "Ramp-up",
    hire: "3–6 months to become productive in your codebase",
    freelancer: "Weeks. But they might not finish what they start.",
    vibe: "Immediate. Works with what AI already built.",
  },
  {
    dimension: "Seniority",
    hire: "Depends on what you can afford",
    freelancer: "Ranges from bootcamp grad to 15-year veteran",
    vibe: "Senior full-stack engineer every time",
  },
  {
    dimension: "Commitment",
    hire: "Full-time employee. Firing is hard and expensive.",
    freelancer: "None. They can disappear mid-project.",
    vibe: "Scoped to the problem. You decide when it's done.",
  },
  {
    dimension: "You become a manager",
    hire: "Yes. Onboarding, 1:1s, career dev, performance reviews.",
    freelancer: "Less, but you're project manager for a team of one.",
    vibe: "You review PRs. That's it — no management overhead.",
  },
];