import type { Locale } from "@/i18n/config";

export type GalleryCategory = "Rooms" | "Outdoor" | "Events";
export type GalleryFilter = "All" | GalleryCategory;

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
  /** Controls masonry height for visual rhythm. */
  span: "tall" | "short";
};

const img = (id: string, w = 1100) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=72`;

export const galleryFilters: GalleryFilter[] = [
  "All",
  "Rooms",
  "Outdoor",
  "Events",
];

type GalleryEntry = {
  src: string;
  category: GalleryCategory;
  span: "tall" | "short";
  alt: Record<Locale, string>;
};

const entries: GalleryEntry[] = [
  {
    src: img("photo-1582719478250-c89cae4dc85b"),
    category: "Rooms",
    span: "tall",
    alt: {
      en: "Luxury suite bedroom with desert view at Desert Pearl Suites",
      he: "חדר שינה בסוויטת יוקרה עם נוף מדברי בדרבן פרל",
    },
  },
  {
    src: img("photo-1540541338287-41700207dee6"),
    category: "Outdoor",
    span: "short",
    alt: {
      en: "Private plunge pool in a walled desert garden",
      he: "בריכת טבילה פרטית בגן מדברי מוקף חומה",
    },
  },
  {
    src: img("photo-1469371670807-013ccf25f16a"),
    category: "Events",
    span: "short",
    alt: {
      en: "Candlelit dinner table set for a celebration in the desert",
      he: "שולחן ארוחה לאור נרות ערוך לחגיגה במדבר",
    },
  },
  {
    src: img("photo-1611892440504-42a792e24d32"),
    category: "Rooms",
    span: "short",
    alt: {
      en: "Designer suite interior with soft natural light",
      he: "פנים סוויטה מעוצב באור טבעי רך",
    },
  },
  {
    src: img("photo-1501785888041-af3ef285b470"),
    category: "Outdoor",
    span: "tall",
    alt: {
      en: "Negev desert landscape at golden hour",
      he: "נוף מדבר הנגב בשעת הזהב",
    },
  },
  {
    src: img("photo-1519671482749-fd09be7ccebf"),
    category: "Events",
    span: "tall",
    alt: {
      en: "Elegant celebration setup with string lights at dusk",
      he: "מערך חגיגה אלגנטי עם שרשרות אורות בשעת בין הערביים",
    },
  },
  {
    src: img("photo-1631049307264-da0ec9d70304"),
    category: "Rooms",
    span: "short",
    alt: {
      en: "Spa bathroom with deep soaking tub",
      he: "חדר רחצה ספא עם אמבט השריה עמוק",
    },
  },
  {
    src: img("photo-1542314831-068cd1dbfeeb"),
    category: "Outdoor",
    span: "short",
    alt: {
      en: "Outdoor terrace lounge overlooking the desert at sunset",
      he: "מרפסת חוץ עם פינת ישיבה המשקיפה אל המדבר בשקיעה",
    },
  },
  {
    src: img("photo-1464366400600-7168b8af9bc3"),
    category: "Events",
    span: "short",
    alt: {
      en: "Intimate event dinner under the desert stars",
      he: "ארוחת אירוע אינטימית תחת כוכבי המדבר",
    },
  },
  {
    src: img("photo-1618221195710-dd6b41faaea6"),
    category: "Rooms",
    span: "tall",
    alt: {
      en: "Celestial loft with glass ceiling for stargazing",
      he: "לופט השמיים עם תקרת זכוכית לצפייה בכוכבים",
    },
  },
  {
    src: img("photo-1520250497591-112f2f40a3f4"),
    category: "Outdoor",
    span: "short",
    alt: {
      en: "Sunlit garden patio with woven daybeds",
      he: "פטיו גן שטוף שמש עם מיטות יום ארוגות",
    },
  },
  {
    src: img("photo-1530023367847-a683933f4172"),
    category: "Events",
    span: "short",
    alt: {
      en: "Champagne toast at a private desert celebration",
      he: "הרמת כוסית שמפניה בחגיגה מדברית פרטית",
    },
  },
];

export function getGalleryImages(locale: Locale): GalleryImage[] {
  return entries.map(({ alt, ...rest }) => ({ ...rest, alt: alt[locale] }));
}
