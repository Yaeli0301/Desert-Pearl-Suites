import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { BLUR_DATA_URL } from "@/lib/images";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function ExperienceTeaser({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.home.experience;

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden py-24 lg:py-32" aria-labelledby="experience-heading">
      <Parallax amount={60} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=2200&q=72"
          alt={t.title}
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover"
        />
      </Parallax>
      <div className="absolute inset-0 bg-ink/75" />

      <div className="container-luxe relative z-10 text-center text-cream">
        <Reveal>
          <p className="eyebrow text-gold-soft">{t.eyebrow}</p>
          <h2
            id="experience-heading"
            className="mx-auto mt-5 max-w-3xl text-balance text-3xl font-light leading-tight sm:text-5xl lg:text-6xl"
          >
            {t.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            {t.description}
          </p>
          <div className="mt-10">
            <Button href={localePath(locale, "/experience")} size="lg">
              {t.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
