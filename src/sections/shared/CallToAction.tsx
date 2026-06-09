import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig, whatsappHref } from "@/lib/site";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type CallToActionProps = {
  locale: Locale;
  dict: Dictionary;
  title?: string;
  description?: string;
};

export function CallToAction({
  locale,
  dict,
  title,
  description,
}: CallToActionProps) {
  const t = dict.cta;

  return (
    <section className="bg-cream-soft py-20 lg:py-28">
      <div className="container-luxe">
        <Reveal
          variant="scale"
          className="relative mx-auto max-w-3xl overflow-hidden rounded-sm border border-cream-dark bg-cream p-10 text-center shadow-soft lg:p-16"
        >
          <span
            className="pointer-events-none absolute inset-x-0 -top-px mx-auto h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent"
            aria-hidden="true"
          />
          <p className="eyebrow text-gold-deep">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
            {title ?? t.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
            {description ?? t.description}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href={localePath(locale, "/contact")} size="lg">
              {t.ctaPrimary}
            </Button>
            <Button
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              {t.ctaSecondary}
            </Button>
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            {t.callPre}{" "}
            <a
              href={`tel:${siteConfig.contact.phoneE164}`}
              className="link-underline text-ink"
              dir="ltr"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
