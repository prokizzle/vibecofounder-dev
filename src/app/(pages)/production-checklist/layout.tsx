import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production Readiness Checklist — 30 Items Your AI App Needs Before Launch | VibeCofounder",
  description:
    "Free 30-point production readiness checklist for vibe-coded apps. Covers auth, payments, database, infrastructure, mobile deployment, and security. Find the gaps AI can't fill.",
  openGraph: {
    title: "Production Readiness Checklist — 30 Items Your AI App Needs",
    description: "Free checklist: find the production gaps in your AI-built app before your users do.",
    type: "website",
  },
};

export default function ChecklistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
