"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

/**
 * Desktop-only floating booking pill that fades in once the visitor scrolls
 * past the hero — keeping the primary conversion action always within reach.
 */
export function FloatingCta({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hidden = pathname.startsWith(localePath(locale, "/contact"));

  return (
    <AnimatePresence>
      {visible && !hidden ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-7 z-40 hidden lg:block ltr:right-7 rtl:left-7"
        >
          <Link
            href={localePath(locale, "/contact")}
            className="group flex items-center gap-3 rounded-full bg-gold px-6 py-4 text-xs font-medium uppercase tracking-luxe text-ink shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
            </span>
            {dict.nav.checkAvailability}
          </Link>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
