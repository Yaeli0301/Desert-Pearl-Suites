import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/data/rooms";
import { BLUR_DATA_URL } from "@/lib/images";
import { formatPrice } from "@/lib/format";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function RoomCard({
  room,
  locale,
  dict,
  priority = false,
}: {
  room: Room;
  locale: Locale;
  dict: Dictionary;
  priority?: boolean;
}) {
  const href = localePath(locale, `/rooms/${room.slug}`);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-sm bg-cream-soft shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe">
      <Link
        href={href}
        className="relative block aspect-[4/5] overflow-hidden"
        aria-label={room.name}
      >
        <Image
          src={room.cardImage}
          alt={room.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
        <span className="absolute top-4 rounded-full bg-ink/75 px-3 py-1 text-[10px] uppercase tracking-luxe text-cream backdrop-blur-sm ltr:left-4 rtl:right-4">
          {dict.common.from}
          <span dir="ltr" className="mx-0.5 inline-block">
            {formatPrice(room.priceFrom)}
          </span>{" "}
          {dict.common.perNight}
        </span>

        {/* Tags slide up on hover */}
        <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 ltr:translate-y-3 rtl:translate-y-3">
          {room.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-luxe text-ink"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl text-ink">{room.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
          {room.shortBenefit}
        </p>
        <div className="mt-5 flex items-center gap-4 text-[11px] uppercase tracking-luxe text-ink-faint">
          <span>{room.size}</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span>{room.occupancy}</span>
        </div>
        <Link
          href={href}
          className="link-underline mt-6 self-start text-xs uppercase tracking-luxe text-gold-deep"
        >
          {dict.common.discoverSuite}
        </Link>
      </div>
    </article>
  );
}
