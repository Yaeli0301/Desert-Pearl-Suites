import { Button } from "@/components/ui/Button";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale, localePath } from "@/i18n/config";

// not-found can't read route params, so we present the default locale (Hebrew).
export default function NotFound() {
  const locale = defaultLocale;
  const dict = getDictionary(locale);
  const t = dict.notFound;

  return (
    <section className="flex min-h-[80vh] items-center bg-cream-soft">
      <div className="container-luxe text-center">
        <p className="eyebrow text-gold-deep">{t.eyebrow}</p>
        <h1 className="mt-5 font-serif text-6xl text-ink sm:text-8xl">{t.title}</h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-muted">
          {t.body}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href={localePath(locale, "/")} size="lg">
            {dict.common.backHome}
          </Button>
          <Button href={localePath(locale, "/rooms")} variant="outline" size="lg">
            {t.viewSuites}
          </Button>
        </div>
      </div>
    </section>
  );
}
