"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect } from "react";

export type LightboxImage = { src: string; alt: string };

export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const open = index !== null;

  const go = useCallback(
    (dir: number) => {
      if (index === null) return;
      const next = (index + dir + images.length) % images.length;
      onNavigate(next);
    },
    [index, images.length, onNavigate],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go, onClose]);

  return (
    <AnimatePresence>
      {open && index !== null ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Previous"
            className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink sm:left-8"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <motion.div
            key={images[index].src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[78vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </motion.div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Next"
            className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink sm:right-8"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-luxe text-cream/60">
            {index + 1} / {images.length}
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
