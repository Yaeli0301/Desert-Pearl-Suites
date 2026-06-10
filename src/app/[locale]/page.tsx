import { Hero } from "@/sections/home/Hero";
import { HotelIntro } from "@/sections/home/HotelIntro";
import { EmotionalStory } from "@/sections/home/EmotionalStory";
import { GuestTypes } from "@/sections/home/GuestTypes";
import { NearbyAttractions } from "@/sections/home/NearbyAttractions";
import { SocialProof } from "@/sections/home/SocialProof";
import { WhyChooseUs } from "@/sections/home/WhyChooseUs";
import { RoomsPreview } from "@/sections/home/RoomsPreview";
import { Scarcity } from "@/sections/home/Scarcity";
import { ExperienceTeaser } from "@/sections/home/ExperienceTeaser";
import { CallToAction } from "@/sections/shared/CallToAction";
import { JsonLd } from "@/components/seo/JsonLd";
import { hotelSchema } from "@/lib/seo";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "he";
  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd data={hotelSchema()} />
      <Hero locale={locale} dict={dict} />
      <HotelIntro dict={dict} />
      <EmotionalStory dict={dict} />
      <GuestTypes dict={dict} />
      <NearbyAttractions locale={locale} dict={dict} />
      <SocialProof locale={locale} dict={dict} />
      <WhyChooseUs dict={dict} />
      <RoomsPreview locale={locale} dict={dict} />
      <Scarcity locale={locale} dict={dict} />
      <ExperienceTeaser locale={locale} dict={dict} />
      <CallToAction locale={locale} dict={dict} />
    </>
  );
}
