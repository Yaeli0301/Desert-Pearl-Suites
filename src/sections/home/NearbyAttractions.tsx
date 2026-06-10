import Image from "next/image";
import { attractions } from "@/data/attractions";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function NearbyAttractions({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.home.attractions;

  return (
    <section
      className="bg-cream-soft py-20 lg:py-28"
      aria-labelledby="attractions-heading"
    >
      <div className="container-luxe">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((spot, i) => (
            <Reveal key={spot.title.en} delay={i * 0.04}>
              <article className="overflow-hidden rounded-sm border border-cream-dark bg-cream shadow-soft transition-colors duration-300 hover:border-gold/40">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={spot.image}
                    alt={spot.title[locale]}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                  <span className="absolute bottom-3 start-3 rounded-sm bg-ink/75 px-2.5 py-1 text-[10px] uppercase tracking-luxe text-cream backdrop-blur-sm">
                    {spot.distance[locale]}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-ink">
                    {spot.title[locale]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {spot.description[locale]}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-ink-muted">
            {t.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
