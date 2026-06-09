import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BLUR_DATA_URL } from "@/lib/images";
import type { Dictionary } from "@/i18n/dictionaries";

const images = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1300&q=72",
  "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1300&q=72",
  "https://images.unsplash.com/photo-1502790671504-542ad42d5189?auto=format&fit=crop&w=1300&q=72",
];

export function EmotionalStory({ dict }: { dict: Dictionary }) {
  const t = dict.home.story;

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream lg:py-32" aria-labelledby="story-heading">
      <div className="container-luxe">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          className="[&_h2]:text-cream [&_p]:text-cream/75"
        />

        <div className="mt-20 space-y-20 lg:space-y-28">
          {t.items.map((item, index) => {
            const flipped = index % 2 === 1;
            return (
              <div
                key={item.time}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
              >
                <Reveal
                  variant="scale"
                  className={flipped ? "lg:order-2" : undefined}
                >
                  <div className="relative aspect-[5/4] overflow-hidden rounded-sm shadow-luxe">
                    <Parallax amount={36} className="absolute inset-0">
                      <Image
                        src={images[index]}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                        className="object-cover"
                      />
                    </Parallax>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                  </div>
                </Reveal>

                <Reveal delay={0.1} className={flipped ? "lg:order-1" : undefined}>
                  <span className="inline-flex items-center gap-3">
                    <span className="rule-gold" />
                    <span className="text-xs uppercase tracking-wider2 text-gold-soft">
                      {item.time}
                    </span>
                  </span>
                  <h3 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-cream/70">
                    {item.description}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
