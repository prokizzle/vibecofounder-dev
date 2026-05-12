"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import React from "react";

/* ── Container ─────────────────────────────────────────────── */
interface ContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function Container({
  children,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <motion.div
      className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ── SectionIntro ──────────────────────────────────────────── */
interface SectionIntroProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionIntro({
  eyebrow,
  heading,
  description,
  align = "left",
  className = "",
}: SectionIntroProps) {
  return (
    <FadeIn className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
        {heading}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted leading-relaxed">
          {description}
        </p>
      )}
    </FadeIn>
  );
}

/* ── FadeIn ────────────────────────────────────────────────── */
interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  y = 16,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ── FadeInStagger ─────────────────────────────────────────── */
interface FadeInStaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function FadeInStagger({
  children,
  className = "",
  stagger = 0.1,
  delay = 0,
}: FadeInStaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      variants={{
        hidden: {},
        visible: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── FadeInItem (child of FadeInStagger) ───────────────────── */
interface FadeInItemProps {
  children: React.ReactNode;
  className?: string;
}

export function FadeInItem({ children, className = "" }: FadeInItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── List / ListItem (Studio border-divider pattern) ───────── */
interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export function List({ children, className = "" }: ListProps) {
  return <div className={`border-t border-border ${className}`}>{children}</div>;
}

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

export function ListItem({ children, className = "" }: ListItemProps) {
  return (
    <div
      className={`border-b border-border py-6 first:pt-2 last:pb-2 ${className}`}
    >
      {children}
    </div>
  );
}
