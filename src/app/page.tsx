import { Nav } from "./_components/nav";
import { Hero } from "./_components/hero";
import { Problem } from "./_components/problem";
import { HowItWorks } from "./_components/how-it-works";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";
import { FAQ } from "./_components/faq";
import { CTA } from "./_components/cta";
import { Footer } from "./_components/footer";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VibeCofounder",
  url: "https://vibecofounder.com",
  description:
    "On-demand technical cofounder who gets vibe coders past the 80% wall and into production. Handles auth, payments, database, mobile deployment, and infrastructure.",
  founder: {
    "@type": "Person",
    name: "Nick Prokesch",
    url: "https://vibecofounder.com/about",
  },
  sameAs: [
    "https://twitter.com/nickprokesch",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <Nav />
      <main id="main-content">
        <Hero />
        <Problem />
        <HowItWorks />
        <Services />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}