import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | VibeCofounder",
  description: "How VibeCofounder handles your data.",
};

export default function Privacy() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-24 sm:py-32">
      <p className="text-xs text-muted/60 uppercase tracking-widest mb-6">Legal</p>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
        Privacy Policy
      </h1>
      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted leading-relaxed">
        <p><strong className="text-foreground">Last updated:</strong> May 2026</p>

        <h2 className="text-foreground text-lg font-semibold mt-8">What I collect</h2>
        <p>
          When you book a call via Cal.com or subscribe to my email list, I collect:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Your name (as provided)</li>
          <li>Your email address</li>
          <li>Any information you choose to share during a call or in a message</li>
        </ul>

        <h2 className="text-foreground text-lg font-semibold mt-8">How I use it</h2>
        <p>I use your information only to:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Schedule and conduct intro calls</li>
          <li>Send you the free guide or resources you requested</li>
          <li>Communicate about potential engagements</li>
        </ul>
        <p>I do not sell, rent, or share your data with third parties.</p>

        <h2 className="text-foreground text-lg font-semibold mt-8">Third-party services</h2>
        <p>This site uses:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            <strong>Cal.com</strong> — for scheduling. Subject to{" "}
            <Link href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Cal.com&apos;s privacy policy
            </Link>.
          </li>
          <li>
            <strong>ConvertKit</strong> — for email delivery. Subject to{" "}
            <Link href="https://convertkit.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              ConvertKit&apos;s privacy policy
            </Link>.
          </li>
          <li>
            <strong>Vercel</strong> — hosting. Does not process personal data on my behalf.
          </li>
        </ul>

        <h2 className="text-foreground text-lg font-semibold mt-8">Your rights</h2>
        <p>
          You can request that I delete any personal information I hold about you at any time.
          Contact me at{" "}
          <Link href="mailto:nickprokesch@gmail.com" className="text-accent hover:underline">
            nickprokesch@gmail.com
          </Link>.
        </p>

        <h2 className="text-foreground text-lg font-semibold mt-8">Contact</h2>
        <p>
          Nick Prokesch —{" "}
          <Link href="mailto:nickprokesch@gmail.com" className="text-accent hover:underline">
            nickprokesch@gmail.com
          </Link>
        </p>
      </div>
    </div>
  );
}