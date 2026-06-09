"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Subtle vertical parallax for background imagery. The inner element is rendered
 * slightly oversized so the movement never reveals an empty edge.
 */
export function Parallax({
  children,
  amount = 60,
  className,
}: {
  children: ReactNode;
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-amount, amount],
  );

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div style={{ y }} className="absolute inset-0 -top-[12%] h-[124%]">
        {children}
      </motion.div>
    </div>
  );
}
