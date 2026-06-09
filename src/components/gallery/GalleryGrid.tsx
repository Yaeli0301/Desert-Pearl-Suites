"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  galleryFilters,
  type GalleryFilter,
  type GalleryImage,
} from "@/data/gallery";
import { Lightbox } from "@/components/ui/Lightbox";
import { BLUR_DATA_URL } from "@/lib/images";
import { cn } from "@/lib/utils";

export function GalleryGrid({
  images,
  labels,
}: {
  images: GalleryImage[];
  labels: Record<GalleryFilter, string>;
}) {
  const [filter, setFilter] = useState<GalleryFilter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = images.filter(
    (image) => filter === "All" || image.category === filter,
  );

  return (
    <div>
      {/* Category filter */}
      <div
        className="flex flex-wrap justify-center gap-2 sm:gap-3"
        role="tablist"
        aria-label={labels.All}
      >
        {galleryFilters.map((category) => {
          const active = filter === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setFilter(category);
                setOpenIndex(null);
              }}
              className={cn(
                "rounded-full border px-5 py-2 text-xs uppercase tracking-luxe transition-all duration-300",
                active
                  ? "border-gold bg-gold text-ink"
                  : "border-cream-dark text-ink-muted hover:border-gold/60 hover:text-ink",
              )}
            >
              {labels[category]}
            </button>
          );
        })}
      </div>

      {/* Masonry via CSS columns */}
      <motion.div layout className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {visible.map((image, index) => (
            <motion.figure
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={image.alt}
                className="block w-full"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={image.span === "tall" ? 1100 : 640}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="h-auto w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/75 to-transparent p-4 text-start text-xs uppercase tracking-luxe text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {labels[image.category]}
                </figcaption>
              </button>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>

      <Lightbox
        images={visible.map((img) => ({ src: img.src, alt: img.alt }))}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </div>
  );
}
