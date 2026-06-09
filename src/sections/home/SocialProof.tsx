import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getTestimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function SocialProof({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.home.proof;
  const testimonials = getTestimonials(locale);

  return (
    <section className="bg-cream py-20 lg:py-28" aria-labelledby="proof-heading">
      <div className="container-luxe">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        {/* Rating band */}
        <Reveal className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4 text-center">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-6xl text-ink lg:text-7xl">
              {siteConfig.rating.value}
            </span>
            <span className="text-sm uppercase tracking-luxe text-ink-muted">
              {t.ratingSuffix} {siteConfig.rating.scale}
            </span>
          </div>
          <div className="flex items-center gap-1 text-gold" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6.1 21.3l1.2-6.6L2.5 9.5l6.6-.9L12 2.5z" />
              </svg>
            ))}
          </div>
          <p className="text-base leading-relaxed text-ink-muted">
            {t.lovedByPre}{" "}
            <span className="font-medium text-ink">{t.happyGuests}</span>{" "}
            {t.lovedByPost}
          </p>
        </Reveal>

        <h2 id="proof-heading" className="sr-only">
          {t.srHeading}
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              as="div"
              key={testimonial.author}
              delay={index * 0.1}
              variant="scale"
              className="flex flex-col rounded-sm border border-cream-dark bg-cream-soft p-7 shadow-soft transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 text-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6.1 21.3l1.2-6.6L2.5 9.5l6.6-.9L12 2.5z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 flex-1 font-serif text-lg leading-relaxed text-ink/90">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-cream-dark pt-4">
                <p className="text-sm font-medium text-ink">{testimonial.author}</p>
                <p className="mt-0.5 text-xs text-ink-muted">{testimonial.location}</p>
                <p className="mt-1 text-[11px] uppercase tracking-luxe text-gold-deep">
                  {testimonial.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
