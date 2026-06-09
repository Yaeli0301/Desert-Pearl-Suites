import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/dictionaries";

const icons = [
  <path
    key="shield"
    d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinejoin="round"
    fill="none"
  />,
  <path
    key="design"
    d="M4 20l8-16 8 16M8 14h8"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
  <path
    key="heart"
    d="M12 21s-7-4.5-9.2-9C1.3 9.3 2.6 6 5.8 6 8 6 9.2 7.5 12 10c2.8-2.5 4-4 6.2-4 3.2 0 4.5 3.3 3 6-2.2 4.5-9.2 9-9.2 9z"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinejoin="round"
    fill="none"
  />,
];

export function WhyChooseUs({ dict }: { dict: Dictionary }) {
  const t = dict.home.why;

  return (
    <section className="bg-cream-soft py-20 lg:py-28" aria-labelledby="why-heading">
      <div className="container-luxe">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.pillars.map((pillar, index) => (
            <Reveal
              as="div"
              key={pillar.title}
              delay={index * 0.12}
              variant="scale"
              className="group relative overflow-hidden rounded-sm border border-cream-dark bg-cream p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/40 text-gold-deep transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                <svg width="26" height="26" viewBox="0 0 24 24">
                  {icons[index]}
                </svg>
              </span>
              <h3 className="mt-6 font-serif text-2xl text-ink">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {pillar.description}
              </p>
              <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gold/5 transition-transform duration-700 group-hover:scale-150" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
