import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock, Coffee } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Book a Free Intro Call | VibeCofounder",
  description:
    "Book a 1-hour call. We'll look at your stack, figure out what's blocking you, and decide if it makes sense to work together.",
};

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <p className="text-xs text-muted/60 uppercase tracking-widest mb-6">
          Contact
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
          Let&apos;s figure out
          <br />
          <span className="text-gradient">what&apos;s blocking you.</span>
        </h1>
        <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed mb-10">
          Book a 1-hour call. We&apos;ll look at your stack, figure out
          what&apos;s broken, and decide if it makes sense to work together.
          No pitch, no commitment. Just problem-solving.
        </p>

        <div className="flex flex-col items-center gap-6 mb-12">
          <Link
            href="https://fantastical.app/giq5x5fcyt-s8uy/1-hour-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors text-sm"
          >
            <Calendar className="w-4 h-4" />
            Schedule a free intro call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <div className="flex items-center gap-6 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              1 hour
            </span>
            <span className="flex items-center gap-1.5">
              <Coffee className="w-3.5 h-3.5" />
              No pitch, just problem-solving
            </span>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted/60 mb-2">
            Prefer email?
          </p>
          <Link
            href="mailto:nickprokesch@gmail.com"
            className="text-sm text-muted hover:text-foreground transition-colors animated-underline"
          >
            nickprokesch@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}