"use client";

import { Container, SectionIntro, FadeInStagger, FadeInItem } from "./ui";

interface Vignette {
  problem: string;
  fix: string;
  result: string;
}

const vignettes: Vignette[] = [
  {
    problem: "Stripe webhooks failing silently. Subscriptions weren't provisioning and the founder didn't know until a customer emailed.",
    fix: "Rewrote the webhook handler with proper idempotency, retry logic, and a dead-letter queue for unprocessable events.",
    result: "Zero missed webhooks since. Subscription revenue flows without manual intervention.",
  },
  {
    problem: "AI-built iOS app rejected from App Store review 3 times. Guideline 4.0, provisioning issues, and a crash-on-launch that didn't show locally.",
    fix: "Restructured the app target, regenerated provisioning profiles, fixed the main-thread blocker, and walked through Apple's appeal process.",
    result: "Approved in 48 hours. Currently live on the App Store.",
  },
  {
    problem: "Solo founder, 3 months in 'one more feature' mode. A working prototype with no path to launch, no staging environment, no monitoring.",
    fix: "Cut scope to launch-critical features, set up CI/CD with preview deployments, wired in Sentry for error tracking, and shipped the MVP.",
    result: "Launched in 2 weeks. Real users. Real feedback. No more feature creep.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 section-divider">
      <Container>
        <SectionIntro
          heading="What unstuck looks like"
          description="Real projects. Real problems. Real ships."
        />

        <FadeInStagger
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          stagger={0.08}
        >
          {vignettes.map((v) => (
            <FadeInItem key={v.problem.slice(0, 40)}>
              <div className="card-hover border border-border rounded-xl bg-surface p-6 h-full flex flex-col">
                <div className="space-y-4 flex-1">
                  <div>
                    <span className="text-[10px] font-semibold text-red-400/70 uppercase tracking-[0.1em]">Problem</span>
                    <p className="text-sm text-muted leading-relaxed mt-1">{v.problem}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-accent uppercase tracking-[0.1em]">Fix</span>
                    <p className="text-sm text-muted leading-relaxed mt-1">{v.fix}</p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-border-subtle">
                  <span className="text-[10px] font-semibold text-emerald-400/70 uppercase tracking-[0.1em]">Result</span>
                  <p className="text-sm text-foreground/85 leading-relaxed mt-1 font-medium">{v.result}</p>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
