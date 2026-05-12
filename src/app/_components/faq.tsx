"use client";

import { useState } from "react";
import { Container, SectionIntro, FadeInStagger, FadeInItem } from "./ui";

const faqs = [
  {
    q: "Can't I just keep prompting the AI?",
    a: "If that was working, you wouldn't be reading this. AI is incredible at known patterns and helpless against your specific edge cases. The webhook that fails silently. The provisioning profile that won't validate. The race condition that only triggers with 12 concurrent users. You've already burned weekends prompting. It's not going to ship your product.",
  },
  {
    q: "I can't afford a consultant right now.",
    a: "What's costing more: a scoped engagement that gets you to launch, or three more months of \"almost done\" with no users, no revenue, no feedback? Agencies start at $50k and take 6 months. A full-time engineer is $150k+/year plus equity. Most of my engagements cost less than a single month of that, because I only work on the 20% you actually need.",
  },
  {
    q: "I don't want to lose control of my codebase.",
    a: "You review every PR. You stay in the loop. I'm here to unblock you, not take over. When we're done, you have a production-grade codebase you understand, not a black box you're afraid to touch.",
  },
  {
    q: "How does pricing work?",
    a: "Everything starts with a free 30-minute call. We figure out what's actually broken and what it'll take to fix it. Then I give you a fixed scope and price. No retainers, no surprise invoices, no long-term commitment. You know exactly what you're getting before you pay anything.",
  },
  {
    q: "Who is this not for?",
    a: "If you want someone to build the entire product from scratch while you wait, I'm not the right person. If you already have a senior engineering team, you don't need me. If you're an enterprise looking for staff augmentation, wrong fit. I work best with solo founders and small teams who already have momentum and just need to get past the wall.",
  },
];

export function FAQ() {
  return (
    <section className="py-24">
      <Container>
        <SectionIntro
          heading="Questions you're probably asking"
          description="The stuff every founder wonders before reaching out."
        />

        <FadeInStagger
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4"
          stagger={0.05}
        >
          {faqs.map((faq) => (
            <FadeInItem key={faq.q}>
              <FAQItem faq={faq} />
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-heading font-semibold text-sm">{faq.q}</span>
        <span
          className="text-muted-soft text-lg leading-none shrink-0 transition-transform duration-150"
          style={{ transform: open ? "rotate(45deg)" : "none" }}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-200 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-muted leading-relaxed px-5 pb-5">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}
