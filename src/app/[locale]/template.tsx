"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * A template re-mounts on every navigation, which lets us play a gentle
 * fade-and-rise transition between pages for a more cinematic feel.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
