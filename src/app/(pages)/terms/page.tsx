import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | VibeCofounder",
  description: "Terms governing your use of VibeCofounder services.",
};

export default function Terms() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-24 sm:py-32">
      <p className="text-xs text-muted/60 uppercase tracking-widest mb-6">Legal</p>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
        Terms of Service
      </h1>
      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted leading-relaxed">
        <p><strong className="text-foreground">Last updated:</strong> May 2026</p>

        <h2 className="text-foreground text-lg font-semibold mt-8">1. Services</h2>
        <p>
          VibeCofounder provides technical consulting services — architecture review, software
          development, infrastructure setup, and App Store submission assistance — on a
          project-by-project basis. Each engagement is governed by a separate scope of work,
          agreed upon before any payment or work begins.
        </p>

        <h2 className="text-foreground text-lg font-semibold mt-8">2. No guarantee of outcomes</h2>
        <p>
          I work hard to ship your product. But software is complex and I cannot guarantee
          specific outcomes — such as App Store approval, uptime, revenue, or user adoption.
          What I guarantee: I will do the work as scoped, communicate clearly, and not disappear.
        </p>

        <h2 className="text-foreground text-lg font-semibold mt-8">3. Intellectual property</h2>
        <p>
          Unless otherwise agreed in writing, all code, configuration, and documentation
          I produce for your project becomes your property upon full payment of the agreed
          scope. You grant me a license to reference the project in my portfolio (anonymized
          if requested).
        </p>

        <h2 className="text-foreground text-lg font-semibold mt-8">4. Confidentiality</h2>
        <p>
          I treat all information about your business, product, codebase, and users as
          confidential. I will not share your information with third parties except as
          necessary to perform the work (e.g., deploying to your cloud provider).
        </p>

        <h2 className="text-foreground text-lg font-semibold mt-8">5. Payment</h2>
        <p>
          Pricing is scoped and fixed per engagement. Payment terms are defined in each
          scope of work. Work begins after the scope is agreed upon and the initial payment
          (if required) is received.
        </p>

        <h2 className="text-foreground text-lg font-semibold mt-8">6. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, my liability for any claim arising from
          services provided is limited to the amount you paid for the specific engagement in
          question. I am not liable for indirect, consequential, or incidental damages.
        </p>

        <h2 className="text-foreground text-lg font-semibold mt-8">7. Termination</h2>
        <p>
          Either party may terminate an engagement with written notice. Upon termination,
          you pay for work completed up to that point, and I deliver all work product to date.
        </p>

        <h2 className="text-foreground text-lg font-semibold mt-8">8. Governing law</h2>
        <p>
          These terms are governed by the laws of the United States. Any disputes will be
          resolved through individual arbitration, not class action.
        </p>

        <h2 className="text-foreground text-lg font-semibold mt-8">9. Contact</h2>
        <p>
          Questions?{" "}
          <Link href="mailto:nickprokesch@gmail.com" className="text-accent hover:underline">
            nickprokesch@gmail.com
          </Link>
        </p>
      </div>
    </div>
  );
}