import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoomCard } from "@/components/rooms/RoomCard";
import { getRooms } from "@/data/rooms";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function RoomsPreview({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.home.roomsPreview;
  const rooms = getRooms(locale);

  return (
    <section className="bg-cream py-20 lg:py-28" aria-labelledby="rooms-heading">
      <div className="container-luxe">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
          <Reveal>
            <Button href={localePath(locale, "/rooms")} variant="outline">
              {dict.common.viewAllSuites}
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <Reveal as="div" key={room.slug} delay={index * 0.1} variant="scale">
              <RoomCard room={room} locale={locale} dict={dict} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
