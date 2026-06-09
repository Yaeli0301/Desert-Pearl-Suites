import type { Metadata } from "next";
import { PageHeader } from "@/sections/shared/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "he";
  const dict = getDictionary(locale);
  return {
    title: dict.overview.metaTitle,
    description: dict.overview.metaDescription,
    alternates: { canonical: `/${locale}/overview` },
    robots: { index: false, follow: false },
  };
}

export default function OverviewPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "he";
  const dict = getDictionary(locale);
  const t = dict.overview;

  return (
    <>
      <PageHeader
        eyebrow={t.header.eyebrow}
        title={t.header.title}
        description={t.header.description}
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=72"
        imageAlt={t.header.title}
      />

      {/* Purpose */}
      <section className="py-20 lg:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow={t.purpose.eyebrow}
            title={t.purpose.title}
            align="center"
          />
          <Reveal>
            <p className="mx-auto mt-8 max-w-3xl text-center font-serif text-2xl leading-relaxed text-ink sm:text-3xl">
              {t.purpose.lead}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.purpose.points.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <article className="h-full rounded-sm border border-cream-dark bg-cream-soft p-8">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 font-serif text-lg text-gold-deep">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-ink">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {point.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="bg-cream-soft py-20 lg:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow={t.structure.eyebrow}
            title={t.structure.title}
            description={t.structure.description}
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.structure.pages.map((page, i) => (
              <Reveal key={page.title} delay={i * 0.05}>
                <article className="flex h-full gap-4 rounded-sm border border-cream-dark bg-cream p-6">
                  <span className="shrink-0 font-serif text-3xl text-gold-deep/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-ink">{page.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {page.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 lg:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow={t.technology.eyebrow}
            title={t.technology.title}
            description={t.technology.description}
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.technology.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="h-full border-s-2 border-gold/50 ps-6">
                  <h3 className="font-serif text-lg text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing */}
      <section className="bg-ink py-20 text-cream lg:py-28">
        <div className="container-luxe">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4 text-gold">{t.marketing.eyebrow}</p>
            <h2 className="text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
              {t.marketing.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/75 sm:text-lg">
              {t.marketing.description}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.marketing.tactics.map((tactic, i) => (
              <Reveal key={tactic.title} delay={i * 0.06}>
                <article className="h-full rounded-sm border border-cream/10 bg-ink p-7 shadow-luxe">
                  <span className="text-gold">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7L2 9.4h7.6L12 2Z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="mt-4 font-serif text-lg text-cream">
                    {tactic.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    {tactic.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 lg:py-28">
        <div className="container-luxe text-center">
          <SectionHeading
            eyebrow={t.highlights.eyebrow}
            title={t.highlights.title}
            align="center"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.highlights.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="rounded-sm border border-cream-dark bg-cream-soft px-6 py-10">
                  <p className="font-serif text-5xl text-gold-deep">{stat.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-cream-dark bg-cream-soft py-20 lg:py-24">
        <div className="container-luxe max-w-2xl text-center">
          <Reveal>
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">
              {t.closing.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              {t.closing.description}
            </p>
            <div className="mt-8">
              <Button href={localePath(locale, "/")}>{t.closing.cta}</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
