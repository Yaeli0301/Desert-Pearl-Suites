"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const DELAY_MS = 3 * 60 * 1000;
const STORAGE_KEY = "dps-overview-invite-dismissed";

export function OverviewInvite({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const t = dict.overview.invite;

  const onOverviewPage = pathname.includes("/overview");

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* private browsing */
    }
  }, []);

  useEffect(() => {
    if (onOverviewPage) return;

    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }

    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [onOverviewPage]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, dismiss]);

  const overviewHref = localePath(locale, "/overview");

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-md sm:p-6"
          onClick={dismiss}
          role="dialog"
          aria-modal="true"
          aria-labelledby="overview-invite-title"
        >
          <motion.div
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 28, scale: 0.96 }
            }
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 16, scale: 0.98 }
            }
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-sm border border-gold/35 bg-cream shadow-luxe"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

            <button
              type="button"
              onClick={dismiss}
              aria-label={t.close}
              className="absolute end-4 top-4 grid h-9 w-9 place-items-center rounded-full text-ink/50 transition-colors hover:bg-cream-dark hover:text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="bg-ink px-8 pb-10 pt-12 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] uppercase tracking-luxe text-gold">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7L2 9.4h7.6L12 2Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
                {t.badge}
              </span>

              <div className="mx-auto mt-6 w-44">
                <Image
                  src="/logo.png"
                  alt="Desert Pearl"
                  width={617}
                  height={374}
                  className="h-auto w-full"
                />
              </div>

              <p className="eyebrow mt-6 text-gold">{t.eyebrow}</p>
              <h2
                id="overview-invite-title"
                className="mt-3 font-serif text-2xl leading-tight text-cream sm:text-3xl"
              >
                {t.title}
              </h2>
            </div>

            <div className="px-8 py-8 text-center">
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                {t.description}
              </p>

              <div className="mt-8 flex flex-col items-center gap-4">
                <Button href={overviewHref} size="lg" onClick={dismiss}>
                  {t.cta}
                </Button>
                <button
                  type="button"
                  onClick={dismiss}
                  className="text-xs uppercase tracking-luxe text-ink-muted transition-colors hover:text-ink"
                >
                  {t.dismiss}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
