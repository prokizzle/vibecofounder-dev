"use client";

import { useState } from "react";
import { captureEmail } from "@/app/_actions/capture-email";

interface ChecklistCaptureFormProps {
  onSubmitted: () => void;
}

export function ChecklistCaptureForm({ onSubmitted }: ChecklistCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const result = await captureEmail(email);
    if (result.success) {
      onSubmitted();
    } else {
      setError(result.error || "Something went wrong.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      <div className="flex gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@startup.com"
          required
          className="flex-1 rounded-full border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
        <button
          type="submit"
          disabled={submitting}
          className="btn-press shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background hover:bg-accent-hover transition-colors disabled:opacity-50"
        >
          {submitting ? "Sending..." : "Get the checklist"}
        </button>
      </div>
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
      <p className="mt-3 text-xs text-muted/50">No spam. Unsubscribe anytime. I just want to help you ship.</p>
    </form>
  );
}
