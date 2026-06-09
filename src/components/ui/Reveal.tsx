"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  /** "fade" slides up; "scale" eases in with a gentle zoom. */
  variant?: "fade" | "scale";
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Scroll-reveal wrapper. Animates once on entering the viewport and fully
 * respects the user's reduced-motion preference.
 */
export function Reveal({
  children,
  delay = 0,
  y = 30,
  variant = "fade",
  className,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  const hidden =
    variant === "scale"
      ? { opacity: 0, scale: 0.96, y: y * 0.5 }
      : { opacity: 0, y };

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : hidden}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
