"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "./ui";

const links = [
  { href: "/about", label: "About" },
  { href: "/tools", label: "Tools" },
  { href: "/comparisons", label: "Compare" },
  { href: "/glossary", label: "Glossary" },
  { href: "/production-checklist", label: "Checklist", highlight: true },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-150 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border-subtle"
          : ""
      }`}
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Container className="flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-heading text-base font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          vibecofounder<span className="text-accent">.dev</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${"highlight" in l && l.highlight ? "text-accent font-semibold hover:text-accent-hover" : "text-muted hover:text-foreground"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-press text-sm px-5 py-2 rounded-full bg-accent text-background font-semibold hover:bg-accent-hover transition-colors"
          >
            Book a call
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden text-foreground p-2 -mr-2 cursor-pointer"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden border-t border-border-subtle bg-background/95 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Container className="py-4 flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={closeMobile}
                  className={`text-sm transition-colors py-1 ${"highlight" in l && l.highlight ? "text-accent font-semibold" : "text-muted hover:text-foreground"}`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={closeMobile}
                className="btn-press text-sm px-5 py-2.5 rounded-full bg-accent text-background font-semibold hover:bg-accent-hover transition-colors text-center mt-1"
              >
                Book a call
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
