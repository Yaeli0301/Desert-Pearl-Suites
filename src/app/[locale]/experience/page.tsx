import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/sections/shared/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CallToAction } from "@/sections/shared/CallToAction";
import { BLUR_DATA_URL } from "@/lib/images";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const momentImages = [
  {
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=72",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=72",
  },
  {
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=72",
  },
];

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "he";
  const dict = getDictionary(locale);
  return {
    title: dict.experience.metaTitle,
    description: dict.experience.metaDescription,
    alternates: { canonical: `/${locale}/experience` },
  };
}

export default function ExperiencePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "he";
  const dict = getDictionary(locale);
  const t = dict.experience;

  return (
    <>
      <PageHeader
        eyebrow={t.header.eyebrow}
        title={t.header.title}
        description={t.header.description}
        image="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=2000&q=72"
        imageAlt={t.header.title}
      />

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="container-luxe max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow text-gold-deep">{t.intro.eyebrow}</p>
            <p className="mt-6 font-serif text-2xl leading-relaxed text-ink sm:text-3xl">
              {t.intro.lead}
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink-muted">
              {t.intro.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Alternating moments */}
      <section className="bg-cream-soft py-20 lg:py-28" aria-labelledby="moments-heading">
        <div className="container-luxe">
          <SectionHeading
            eyebrow={t.moments.eyebrow}
            title={t.moments.title}
            description={t.moments.description}
          />

          <div className="mt-16 space-y-16 lg:space-y-24">
            {t.moments.items.map((moment, index) => (
              <div
                key={moment.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={momentImages[index].image}
                      alt={moment.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal
                  delay={0.1}
                  className={index % 2 === 1 ? "lg:order-1" : undefined}
                >
                  <p className="eyebrow text-gold-deep">0{index + 1}</p>
                  <h3 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">
                    {moment.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-ink-muted">
                    {moment.description}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        locale={locale}
        dict={dict}
        title={t.cta.title}
        description={t.cta.description}
      />
    </>
  );
}
