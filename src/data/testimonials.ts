import type { Locale } from "@/i18n/config";

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  detail: string;
};

const data: Record<Locale, Testimonial[]> = {
  en: [
    {
      quote:
        "The most romantic stay of our lives. Waking up to the desert from our private tub felt unreal. Every single detail was considered.",
      author: "Maya & Daniel",
      location: "Tel Aviv, Israel",
      detail: "Honeymoon · Dune Pearl Suite",
    },
    {
      quote:
        "We came for our anniversary and left already planning the next visit. Total privacy, impeccable design and genuine warmth.",
      author: "Noa S.",
      location: "London, UK",
      detail: "Anniversary · Oasis Garden Suite",
    },
    {
      quote:
        "Falling asleep under the stars through the glass ceiling is something I will never forget. Pure magic in the Negev.",
      author: "Itai R.",
      location: "Berlin, Germany",
      detail: "Getaway · Celestial Loft",
    },
  ],
  he: [
    {
      quote:
        "השהות הרומנטית ביותר בחיינו. להתעורר אל המדבר מתוך האמבט הפרטי שלנו הרגיש לא אמיתי. כל פרט קטן נחשב.",
      author: "מאיה ודניאל",
      location: "תל אביב, ישראל",
      detail: "ירח דבש · סוויטת פנינת הדיונה",
    },
    {
      quote:
        "באנו ליום הנישואין ויצאנו כשאנחנו כבר מתכננים את הביקור הבא. פרטיות מוחלטת, עיצוב ללא רבב וחום אמיתי.",
      author: "נועה ש.",
      location: "לונדון, אנגליה",
      detail: "יום נישואין · סוויטת גן הנווה",
    },
    {
      quote:
        "להירדם תחת הכוכבים דרך תקרת הזכוכית זה משהו שלעולם לא אשכח. קסם טהור בנגב.",
      author: "איתי ר.",
      location: "ברלין, גרמניה",
      detail: "חופשה · לופט השמיים",
    },
  ],
};

export function getTestimonials(locale: Locale): Testimonial[] {
  return data[locale] ?? data.he;
}
