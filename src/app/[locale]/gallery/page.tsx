import type { Metadata } from "next";
import { PageHeader } from "@/sections/shared/PageHeader";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { CallToAction } from "@/sections/shared/CallToAction";
import { getGalleryImages } from "@/data/gallery";
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
    title: dict.gallery.metaTitle,
    description: dict.gallery.metaDescription,
    alternates: { canonical: `/${locale}/gallery` },
  };
}

export default function GalleryPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "he";
  const dict = getDictionary(locale);
  const images = getGalleryImages(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.gallery.header.eyebrow}
        title={dict.gallery.header.title}
        description={dict.gallery.header.description}
        image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=72"
        imageAlt={dict.gallery.header.title}
      />

      <section className="py-20 lg:py-28">
        <div className="container-luxe">
          <GalleryGrid images={images} labels={dict.gallery.categories} />
        </div>
      </section>

      <CallToAction locale={locale} dict={dict} />
    </>
  );
}
