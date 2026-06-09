import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { RoomGallery } from "@/components/rooms/RoomGallery";
import { JsonLd } from "@/components/seo/JsonLd";
import { roomSlugs, getRoomBySlug } from "@/data/rooms";
import { siteConfig, whatsappHref } from "@/lib/site";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { BLUR_DATA_URL } from "@/lib/images";
import { formatPrice } from "@/lib/format";
import { locales, localePath, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Params = { params: { locale: string; slug: string } };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    roomSlugs.map((slug) => ({ locale, slug })),
  );
}

export function generateMetadata({ params }: Params): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "he";
  const room = getRoomBySlug(params.slug, locale);
  if (!room) return {};

  return {
    title: room.name,
    description: `${room.shortBenefit} ${room.perfectFor}`,
    alternates: { canonical: `/${locale}/rooms/${room.slug}` },
    openGraph: {
      title: `${room.name} | ${siteConfig.name}`,
      description: room.shortBenefit,
      images: [{ url: room.heroImage }],
    },
  };
}

export default function RoomPage({ params }: Params) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "he";
  const room = getRoomBySlug(params.slug, locale);
  if (!room) notFound();
  const dict = getDictionary(locale);
  const t = dict.room;

  return (
    <>
      <JsonLd data={faqSchema(room.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: dict.nav.home, url: `/${locale}` },
          { name: t.breadcrumbSuites, url: `/${locale}/rooms` },
          { name: room.name, url: `/${locale}/rooms/${room.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={room.heroImage}
            alt={room.name}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/40" />
        </div>

        <div className="container-luxe relative z-10 pb-16 pt-32 text-cream">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-5 text-xs uppercase tracking-luxe text-cream/75">
              <Link href={localePath(locale, "/rooms")} className="link-underline hover:text-cream">
                {t.breadcrumbSuites}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gold-soft">{room.name}</span>
            </nav>
            <h1 className="max-w-3xl text-balance text-4xl font-light leading-[1.05] sm:text-5xl lg:text-6xl">
              {room.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80">
              {room.intro}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-luxe text-cream/70">
              <span>
                {dict.common.from}
                <span dir="ltr" className="mx-0.5 inline-block">
                  {formatPrice(room.priceFrom)}
                </span>{" "}
                {dict.common.perNight}
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-gold sm:block" />
              <span>{room.size}</span>
              <span className="hidden h-1 w-1 rounded-full bg-gold sm:block" />
              <span>{room.occupancy}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {room.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cream/25 bg-ink/40 px-3 py-1.5 text-[11px] uppercase tracking-luxe text-cream backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Perfect for + benefits */}
      <section className="py-20 lg:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-gold-deep">{t.perfectFor}</p>
            <p className="mt-5 font-serif text-2xl leading-relaxed text-ink sm:text-3xl">
              {room.perfectFor}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={localePath(locale, "/contact")} size="lg">
                {dict.nav.checkAvailability}
              </Button>
              <Button
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
              >
                {t.askQuestion}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow text-gold-deep">{t.whatYoullLove}</p>
            <ul className="mt-6 space-y-4">
              {room.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-4">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold/50 text-gold-deep">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-base leading-relaxed text-ink-muted">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-ink py-20 text-cream lg:py-28">
        <div className="container-luxe max-w-3xl text-center">
          <Reveal>
            <span className="mx-auto block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="eyebrow mt-6 text-gold-soft">{t.theStory}</p>
            <p className="mt-6 font-serif text-2xl font-light leading-relaxed sm:text-3xl">
              {room.story}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream-soft py-20 lg:py-28" aria-labelledby="room-gallery-heading">
        <div className="container-luxe">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 id="room-gallery-heading" className="font-serif text-3xl text-ink sm:text-4xl">
              {t.aLookInside}
            </h2>
            <p className="text-xs uppercase tracking-luxe text-ink-faint">
              {t.galleryHint}
            </p>
          </div>
          <RoomGallery
            images={room.gallery}
            roomName={room.name}
            detailLabel={t.interiorDetail}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28" aria-labelledby="room-faq-heading">
        <div className="container-luxe max-w-3xl">
          <h2 id="room-faq-heading" className="text-center font-serif text-3xl text-ink sm:text-4xl">
            {t.goodToKnow}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base text-ink-muted">
            {t.faqIntro}
          </p>
          <div className="mt-10">
            <FaqAccordion faqs={room.faqs} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink py-20 text-cream lg:py-28">
        <div className="container-luxe text-center">
          <Reveal>
            <p className="eyebrow text-gold-soft">{t.finalEyebrow}</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-light leading-tight sm:text-4xl">
              {t.finalTitle}
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href={localePath(locale, "/contact")} size="lg">
                {dict.nav.checkAvailability}
              </Button>
              <Button
                href={localePath(locale, "/rooms")}
                variant="outlineLight"
                size="lg"
              >
                {t.compareSuites}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
