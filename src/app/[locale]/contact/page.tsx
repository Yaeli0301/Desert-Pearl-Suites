import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig, whatsappHref, wazeHref } from "@/lib/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "he";
  const dict = getDictionary(locale);
  return {
    title: dict.contact.metaTitle,
    description: dict.contact.metaDescription,
    alternates: { canonical: `/${locale}/contact` },
  };
}

export default function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "he";
  const dict = getDictionary(locale);
  const t = dict.contact;
  const region =
    locale === "he"
      ? "מצפה רמון, מדבר הנגב, ישראל"
      : siteConfig.location.region;

  return (
    <section className="pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="container-luxe">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left: intro + direct contact */}
          <Reveal>
            <p className="eyebrow text-gold-deep">{t.eyebrow}</p>
            <h1 className="mt-4 text-balance text-4xl font-light leading-[1.05] text-ink sm:text-5xl">
              {t.title}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted/80">
              {t.lead}
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-sm border border-cream-dark bg-cream-soft p-5 transition-colors hover:border-gold/60"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#25D366]/15 text-[#1ba350]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.16c-.25.69-1.45 1.32-2 1.4-.51.07-1.16.1-1.87-.12-.43-.13-.98-.32-1.69-.62-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07s.76-2.18 1.03-2.48c.27-.3.59-.37.79-.37l.57.01c.18.01.43-.07.67.51.25.59.85 2.05.92 2.2.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.71.81 2 .96.3.15.49.22.56.35.07.12.07.71-.18 1.4Z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-luxe text-ink-muted/60">
                    {t.whatsappTitle}
                  </span>
                  <span className="block text-sm font-medium text-ink">
                    {t.whatsappSub}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneE164}`}
                className="flex items-center gap-4 rounded-sm border border-cream-dark bg-cream-soft p-5 transition-colors hover:border-gold/60"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold-deep">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-luxe text-ink-muted/60">
                    {t.callTitle}
                  </span>
                  <span className="block text-sm font-medium text-ink" dir="ltr">
                    {siteConfig.contact.phoneDisplay}
                  </span>
                </span>
              </a>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="rounded-sm border border-cream-dark bg-cream p-7 sm:p-10">
              <h2 className="font-serif text-2xl text-ink">{t.formTitle}</h2>
              <p className="mt-2 text-sm text-ink-muted/70">{t.formSub}</p>
              <div className="mt-7">
                <ContactForm locale={locale} dict={dict} />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Find us — clickable Waze block, visually fused to the image below */}
        <Reveal>
          <a
            href={wazeHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.findUsCta}
            className="group mx-auto mt-20 block max-w-3xl overflow-hidden rounded-sm border border-cream-dark shadow-luxe lg:mt-28"
          >
            <div className="bg-ink px-8 py-12 text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold/20 text-gold ring-1 ring-gold/40">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <p className="eyebrow mt-5 text-gold">{t.findUsTitle}</p>
              <p className="mt-3 font-serif text-2xl text-cream sm:text-3xl">
                {region}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-luxe text-gold transition-all group-hover:gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a9 9 0 0 0-9 9c0 2.5 1.2 4.3 2.9 6.1.7.8 1.2 1.7 1.4 2.7.1.7.7 1.2 1.4 1.2h.3c.5 0 1-.3 1.2-.8.1-.2.3-.4.6-.4s.5.2.6.4c.2.5.7.8 1.2.8h.3c.7 0 1.3-.5 1.4-1.2.2-1 .7-1.9 1.4-2.7C19.8 15.3 21 13.5 21 11a9 9 0 0 0-9-9Zm-2.6 8.2a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm5.2 0a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Z" />
                </svg>
                {t.findUsCta}
                <span aria-hidden className="rtl:rotate-180">→</span>
              </span>
            </div>
            <div className="relative aspect-[16/8] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1600&q=72"
                alt={region}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-ink/30" />
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
