"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/ui/Parallax";
import { BLUR_DATA_URL } from "@/lib/images";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const reduceMotion = useReducedMotion();
  const t = dict.home.hero;

  const rise = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay, ease },
  });

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Parallax amount={70} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2200&q=72"
          alt={t.title}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover motion-safe:animate-slow-zoom"
        />
      </Parallax>

      {/* Layered cinematic gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,10,10,0.55)_100%)]" />

      <div className="container-luxe relative z-10 py-32 text-cream">
        <motion.div {...rise(0)} className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <p className="eyebrow text-gold-soft">{t.eyebrow}</p>
        </motion.div>

        <motion.h1
          {...rise(0.12)}
          className="mt-6 max-w-4xl text-balance text-[2.6rem] font-light leading-[1.04] sm:text-6xl lg:text-[5rem]"
        >
          {t.title}
        </motion.h1>

        <motion.p
          {...rise(0.26)}
          className="mt-7 max-w-xl text-lg leading-relaxed text-cream/85"
        >
          {t.subtitle}
        </motion.p>

        <motion.div {...rise(0.4)} className="mt-10 flex flex-wrap items-center gap-4">
          <Button href={localePath(locale, "/contact")} size="lg">
            {t.ctaPrimary}
          </Button>
          <Button
            href={localePath(locale, "/rooms")}
            size="lg"
            variant="outlineLight"
          >
            {t.ctaSecondary}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/70"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-wider2">{dict.common.scroll}</span>
        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-cream/40 p-2">
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="block h-2 w-1 rounded-full bg-cream/80"
          />
        </div>
      </motion.div>
    </section>
  );
}
