import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const itemIcons = [
  // calendar
  <path key="cal" d="M7 3v3m10-3v3M4 8h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  // trend
  <path key="trend" d="M3 17l6-6 4 4 7-7m0 0h-5m5 0v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  // key
  <path key="key" d="M15 7a4 4 0 11-3.9 5H8v2H6v2H3v-3l5.1-5.1A4 4 0 0115 7z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
];

export function Scarcity({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.home.scarcity;

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-cream lg:py-28" aria-labelledby="scarcity-heading">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,161,91,0.12),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container-luxe relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-[11px] uppercase tracking-luxe text-gold-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              {t.eyebrow}
            </span>
            <h2
              id="scarcity-heading"
              className="mt-6 text-balance font-serif text-3xl font-light leading-tight sm:text-4xl lg:text-5xl"
            >
              {t.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/70">
              {t.description}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {t.items.map((item, index) => (
            <Reveal
              as="div"
              key={item}
              delay={index * 0.1}
              className="glass flex items-center gap-4 rounded-sm p-5 text-start"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 text-gold-soft">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  {itemIcons[index]}
                </svg>
              </span>
              <p className="text-sm leading-snug text-cream/85">{item}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button href={localePath(locale, "/contact")} size="lg">
            {t.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
