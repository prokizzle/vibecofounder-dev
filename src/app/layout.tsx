import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VibeCofounder — On-Demand Technical Cofounder for AI-Built Products",
  description:
    "Your vibe coding got you 80% of the way. An on-demand technical cofounder handles the last 20% — production infrastructure, auth, payments, mobile deployment, and getting past the App Store review.",
  openGraph: {
    title: "VibeCofounder — On-Demand Technical Cofounder",
    description:
      "Turn your AI prototype into a shipped product. Architecture, auth, payments, infrastructure, and mobile deployment.",
    siteName: "VibeCofounder",
    type: "website",
  },
  other: {
    "llms-txt": "https://vibecofounder.com/llms.txt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
