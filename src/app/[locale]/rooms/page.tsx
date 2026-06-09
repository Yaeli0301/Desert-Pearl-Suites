import type { Metadata } from "next";
import { PageHeader } from "@/sections/shared/PageHeader";
import { RoomCard } from "@/components/rooms/RoomCard";
import { Reveal } from "@/components/ui/Reveal";
import { CallToAction } from "@/sections/shared/CallToAction";
import { getRooms } from "@/data/rooms";
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
    title: dict.rooms.metaTitle,
    description: dict.rooms.metaDescription,
    alternates: { canonical: `/${locale}/rooms` },
  };
}

export default function RoomsPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "he";
  const dict = getDictionary(locale);
  const rooms = getRooms(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.rooms.header.eyebrow}
        title={dict.rooms.header.title}
        description={dict.rooms.header.description}
        image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=72"
        imageAlt={dict.rooms.header.title}
      />

      <section className="py-20 lg:py-28">
        <div className="container-luxe">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, index) => (
              <Reveal as="div" key={room.slug} delay={index * 0.1}>
                <RoomCard
                  room={room}
                  locale={locale}
                  dict={dict}
                  priority={index === 0}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CallToAction locale={locale} dict={dict} />
    </>
  );
}
