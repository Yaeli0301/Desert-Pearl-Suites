import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";

const icons = [
  <path
    key="bed"
    d="M3 10h18v10H3V10Zm0-4h18v3H3V6Z"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinejoin="round"
    fill="none"
  />,
  <path
    key="star"
    d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7L2 9.4h7.6L12 2Z"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinejoin="round"
    fill="none"
  />,
  <path
    key="pin"
    d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
    stroke="currentColor"
    strokeWidth="1.4"
    fill="none"
  />,
  <path
    key="pool"
    d="M4 14c2 2 4 2 6 0s4-2 6 0 4 2 6 0M4 18c2 2 4 2 6 0s4-2 6 0 4 2 6 0"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    fill="none"
  />,
];

export function HotelIntro({ dict }: { dict: Dictionary }) {
  const t = dict.home.hotelIntro;

  return (
    <section
      className="border-b border-cream-dark bg-cream"
      aria-label={t.srLabel}
    >
      <div className="container-luxe py-8 lg:py-10">
        <Reveal>
          <p className="text-center font-serif text-xl text-ink sm:text-2xl">
            {t.headline}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-ink-muted sm:text-base">
            {t.subline}
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {t.highlights.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.04}>
              <div className="flex flex-col items-center rounded-sm border border-cream-dark bg-cream-soft px-4 py-5 text-center">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/35 text-gold-deep">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    {icons[i]}
                  </svg>
                </span>
                <p className="mt-3 text-lg font-medium text-ink" dir="ltr">
                  {item.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-luxe text-ink-muted">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-ink-muted">
          {t.rating}{" "}
          <span className="font-medium text-gold-deep" dir="ltr">
            {siteConfig.rating.value}/{siteConfig.rating.scale}
          </span>
          {" · "}
          {t.reviews}{" "}
          <span dir="ltr">{siteConfig.rating.reviewCount}+</span>
        </p>
      </div>
    </section>
  );
}
