"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { BLUR_DATA_URL } from "@/lib/images";

export function RoomGallery({
  images,
  roomName,
  detailLabel,
}: {
  images: string[];
  roomName: string;
  detailLabel: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const lightboxImages = images.map((src, i) => ({
    src,
    alt: `${roomName} — ${detailLabel} ${i + 1}`,
  }));

  return (
    <>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((src, index) => (
          <Reveal
            as="div"
            key={src}
            delay={index * 0.08}
            className={
              index === 0
                ? "sm:col-span-2 sm:row-span-2"
                : undefined
            }
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`${roomName} — ${detailLabel} ${index + 1}`}
              className={`group relative block w-full overflow-hidden rounded-sm ${
                index === 0
                  ? "aspect-[4/5] sm:h-full"
                  : "aspect-[4/3]"
              }`}
            >
              <Image
                src={src}
                alt={`${roomName} — ${detailLabel} ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
              <span className="absolute bottom-3 grid h-9 w-9 place-items-center rounded-full border border-cream/25 bg-ink/55 text-cream opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 ltr:right-3 rtl:left-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox
        images={lightboxImages}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </>
  );
}
