import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/dictionaries";

const icons = [
  <path
    key="couples"
    d="M12 21s-6-4-6-9a6 6 0 0 1 12 0c0 5-6 9-6 9Zm0-7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    stroke="currentColor"
    strokeWidth="1.4"
    fill="none"
  />,
  <path
    key="celebration"
    d="M12 3v4M8 7h8M6 11h12v10H6V11Z"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
  <path
    key="peace"
    d="M12 3c-4 4-6 7-6 10a6 6 0 0 0 12 0c0-3-2-6-6-10Z"
    stroke="currentColor"
    strokeWidth="1.4"
    fill="none"
  />,
  <path
    key="nature"
    d="M12 22V12M12 12C9 8 5 7 3 9c2 4 6 5 9 3M12 12c3-4 7-5 9-3-2 4-6 5-9 3"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
  <path
    key="family"
    d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM15 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM4 20v-1a4 4 0 0 1 4-4h0M16 15h2a4 4 0 0 1 4 4v1"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
  <path
    key="luxury"
    d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7L2 9.4h7.6L12 2Z"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinejoin="round"
    fill="none"
  />,
];

export function GuestTypes({ dict }: { dict: Dictionary }) {
  const t = dict.home.guestTypes;

  return (
    <section className="py-20 lg:py-28" aria-labelledby="guest-types-heading">
      <div className="container-luxe">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.audiences.map((audience, i) => (
            <Reveal key={audience.title} delay={i * 0.04}>
              <article className="group relative h-full overflow-hidden rounded-sm border border-cream-dark bg-cream p-7 transition-colors duration-300 hover:border-gold/45">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/10 text-gold-deep transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    {icons[i]}
                  </svg>
                </span>
                <h3 className="mt-5 font-serif text-xl text-ink">
                  {audience.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {audience.description}
                </p>
                <span className="pointer-events-none absolute -bottom-6 -end-6 h-20 w-20 rounded-full bg-gold/5 transition-transform duration-700 group-hover:scale-150" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
