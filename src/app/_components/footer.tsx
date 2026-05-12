import Link from "next/link";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="section-divider py-16">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xs font-semibold text-muted-soft uppercase tracking-[0.12em] mb-4">
              Product
            </h4>
            <div className="flex flex-col gap-2.5">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/#services">Services</FooterLink>
              <FooterLink href="/tools">Tools to Production</FooterLink>
              <FooterLink href="/for">For AI Founders</FooterLink>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-muted-soft uppercase tracking-[0.12em] mb-4">
              Compare
            </h4>
            <div className="flex flex-col gap-2.5">
              <FooterLink href="/comparisons">All Comparisons</FooterLink>
              <FooterLink href="/comparisons/dev-agency">vs Agency</FooterLink>
              <FooterLink href="/comparisons/fractional-cto">
                vs Fractional CTO
              </FooterLink>
              <FooterLink href="/comparisons/hiring-developer">
                vs Hiring
              </FooterLink>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-muted-soft uppercase tracking-[0.12em] mb-4">
              Resources
            </h4>
            <div className="flex flex-col gap-2.5">
              <FooterLink href="/production-checklist">Production Checklist</FooterLink>
              <FooterLink href="/glossary">Glossary</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="https://x.com/nickprokesch">X / Twitter</FooterLink>
              <FooterLink href="https://github.com/nicholasprokesch">
                GitHub
              </FooterLink>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-muted-soft uppercase tracking-[0.12em] mb-4">
              Legal
            </h4>
            <div className="flex flex-col gap-2.5">
              <FooterLink href="/privacy">Privacy</FooterLink>
              <FooterLink href="/terms">Terms</FooterLink>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle">
          <span className="font-heading text-sm text-muted-soft">
            vibecofounder<span className="text-accent">.dev</span>
          </span>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto");
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="text-sm text-muted hover:text-foreground transition-colors animated-underline w-fit"
    >
      {children}
    </Link>
  );
}
