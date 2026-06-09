import type { Locale } from "@/i18n/config";

/**
 * Bilingual room catalogue. Locale-independent fields (slug, price, images) live
 * at the top level; all human text is stored per locale under `content`.
 */

type RoomContent = {
  name: string;
  shortBenefit: string;
  intro: string;
  /** Short chips shown near the title, e.g. "For couples". */
  tags: string[];
  perfectFor: string;
  /** Longer emotional narrative paragraph. */
  story: string;
  size: string;
  occupancy: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
};

type RoomData = {
  slug: string;
  priceFrom: number;
  heroImage: string;
  cardImage: string;
  gallery: string[];
  content: Record<Locale, RoomContent>;
};

/** Flattened, locale-resolved room used throughout the UI. */
export type Room = RoomContent & {
  slug: string;
  priceFrom: number;
  heroImage: string;
  cardImage: string;
  gallery: string[];
};

const img = (id: string, w = 1300) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=72`;

const roomsData: RoomData[] = [
  {
    slug: "dune-pearl-suite",
    priceFrom: 1590,
    heroImage: img("photo-1582719478250-c89cae4dc85b", 2000),
    cardImage: img("photo-1582719478250-c89cae4dc85b", 900),
    gallery: [
      img("photo-1611892440504-42a792e24d32"),
      img("photo-1631049307264-da0ec9d70304"),
      img("photo-1618773928121-c32242e63f39"),
      img("photo-1560448204-e02f11c3d0e2"),
    ],
    content: {
      en: {
        name: "Dune Pearl Suite",
        shortBenefit:
          "A private suite with an outdoor soaking tub under the stars.",
        intro:
          "Our signature suite blends raw desert texture with soft, tactile luxury. Floor-to-ceiling glass dissolves the line between your bed and the open Negev sky.",
        tags: ["For couples", "Honeymoon", "Private soaking tub", "Stargazing"],
        perfectFor:
          "Couples seeking a deeply private romantic getaway with their own outdoor soaking tub and uninterrupted desert views.",
        story:
          "There is a moment, just after sunset, when the desert exhales. The stone holds the day's warmth, the sky turns from amber to indigo, and the only sound is water moving in your private tub. The Dune Pearl Suite was built for exactly that moment — for two people, a horizon, and nothing else asking for your attention.",
        size: "55 m²",
        occupancy: "2 guests",
        benefits: [
          "Private outdoor soaking tub with desert panorama",
          "King bed dressed in pure Egyptian cotton linen",
          "Wraparound terrace with sunset lounge seating",
          "Curated minibar with local Negev wines",
          "Rainfall shower and heated stone bathroom floor",
        ],
        faqs: [
          {
            question: "Is the Dune Pearl Suite suitable for a honeymoon?",
            answer:
              "Absolutely. It is our most requested suite for honeymoons and anniversaries thanks to the private outdoor tub, total seclusion and an optional in-suite candlelit dinner.",
          },
          {
            question: "Can we arrange a romantic surprise on arrival?",
            answer:
              "Yes. We offer rose petal turndown, champagne on ice and personalised welcome notes. Just let us know at booking and we will prepare everything before you arrive.",
          },
          {
            question: "What view does the suite face?",
            answer:
              "The suite faces west over the open desert, giving you front-row sunsets and exceptional stargazing directly from bed.",
          },
        ],
      },
      he: {
        name: "סוויטת פנינת הדיונה",
        shortBenefit: "סוויטה פרטית עם אמבט השריה חיצוני תחת הכוכבים.",
        intro:
          "סוויטת הדגל שלנו משלבת מרקם מדברי גולמי עם יוקרה רכה ומלטפת. קירות זכוכית מהרצפה עד התקרה מוחקים את הגבול בין המיטה לשמי הנגב הפתוחים.",
        tags: ["לזוגות", "ירח דבש", "אמבט פרטי", "צפייה בכוכבים"],
        perfectFor:
          "זוגות המחפשים חופשה רומנטית פרטית במיוחד, עם אמבט השריה חיצוני משלהם ונוף מדברי בלתי מופרע.",
        story:
          "יש רגע, רגע אחרי השקיעה, שבו המדבר נושם החוצה. האבן שומרת את חום היום, השמיים עוברים מענבר לכחול עמוק, והצליל היחיד הוא המים הזורמים באמבט הפרטי שלכם. סוויטת פנינת הדיונה נבנתה בדיוק בשביל הרגע הזה — בשביל שני אנשים, אופק, ושום דבר אחר שמבקש את תשומת ליבכם.",
        size: '55 מ"ר',
        occupancy: "2 אורחים",
        benefits: [
          "אמבט השריה חיצוני פרטי עם פנורמה מדברית",
          "מיטת קינג עם מצעי כותנה מצרית טהורה",
          "מרפסת עוטפת עם פינת ישיבה לשקיעה",
          "מיני-בר מוקפד עם יינות מקומיים מהנגב",
          "מקלחת גשם ורצפת אבן מחוממת בחדר הרחצה",
        ],
        faqs: [
          {
            question: "האם סוויטת פנינת הדיונה מתאימה לירח דבש?",
            answer:
              "בהחלט. זו הסוויטה המבוקשת ביותר לירח דבש ויום נישואין, בזכות האמבט החיצוני הפרטי, הבידוד המוחלט ואפשרות לארוחה רומנטית לאור נרות בתוך הסוויטה.",
          },
          {
            question: "אפשר לארגן הפתעה רומנטית בהגעה?",
            answer:
              "כן. אנו מציעים פיזור עלי ורדים, שמפניה על קרח וברכת קבלת פנים אישית. רק עדכנו אותנו בהזמנה ונכין הכל לפני שתגיעו.",
          },
          {
            question: "לאיזה כיוון פונה הסוויטה?",
            answer:
              "הסוויטה פונה מערבה אל המדבר הפתוח, ומעניקה לכם שקיעות בשורה הראשונה וצפייה יוצאת דופן בכוכבים ישירות מהמיטה.",
          },
        ],
      },
    },
  },
  {
    slug: "oasis-garden-suite",
    priceFrom: 1450,
    heroImage: img("photo-1566073771259-6a8506099945", 2000),
    cardImage: img("photo-1566073771259-6a8506099945", 900),
    gallery: [
      img("photo-1582719508461-905c673771fd"),
      img("photo-1551882547-ff40c63fe5fa"),
      img("photo-1584132967334-10e028bd69f7"),
      img("photo-1540541338287-41700207dee6"),
    ],
    content: {
      en: {
        name: "Oasis Garden Suite",
        shortBenefit:
          "A walled private garden with a plunge pool and shaded patio.",
        intro:
          "An intimate retreat wrapped around a secluded garden. Sun-warmed stone, swaying date palms and a private plunge pool make this suite feel like a hidden oasis.",
        tags: ["For couples", "Small celebrations", "Plunge pool", "Private garden"],
        perfectFor:
          "Couples and small celebrations who want their own outdoor space, a plunge pool and a serene garden for slow mornings.",
        story:
          "Behind a quiet wall, the world goes soft. Date palms throw lace-like shade across warm stone, the plunge pool catches the sky, and the day asks nothing of you. The Oasis Garden Suite is a place to lose track of the hours — long breakfasts, longer afternoons, and evenings that drift into starlight.",
        size: "48 m²",
        occupancy: "2–3 guests",
        benefits: [
          "Private walled garden with plunge pool",
          "Shaded patio with hand-woven daybeds",
          "Open-plan living area with desert-stone fireplace",
          "Slow breakfast served in your garden",
          "Outdoor rain shower among the palms",
        ],
        faqs: [
          {
            question: "Is the plunge pool private?",
            answer:
              "Yes. The plunge pool sits inside your own walled garden and is completely private to your suite.",
          },
          {
            question: "Can the Oasis Garden Suite host a small celebration?",
            answer:
              "The garden comfortably hosts an intimate toast for up to eight guests. For larger events our team can arrange a dedicated celebration space on the property.",
          },
          {
            question: "Is breakfast included?",
            answer:
              "A seasonal breakfast made from local Negev produce is included and can be served privately in your garden each morning.",
          },
        ],
      },
      he: {
        name: "סוויטת גן הנווה",
        shortBenefit: "גן פרטי מוקף חומה עם בריכת טבילה ופטיו מוצל.",
        intro:
          "מפלט אינטימי העוטף גן מבודד. אבן מחוממת שמש, דקלי תמר מתנדנדים ובריכת טבילה פרטית גורמים לסוויטה להרגיש כמו נווה מדבר נסתר.",
        tags: ["לזוגות", "חגיגות קטנות", "בריכת טבילה", "גן פרטי"],
        perfectFor:
          "זוגות וחגיגות קטנות שרוצים מרחב חוץ משלהם, בריכת טבילה וגן שליו לבקרים איטיים.",
        story:
          "מאחורי חומה שקטה, העולם מתרכך. דקלי תמר פורשים צל עדין על האבן החמה, בריכת הטבילה לוכדת את השמיים, והיום לא מבקש מכם דבר. סוויטת גן הנווה היא מקום לאבד בו את תחושת הזמן — ארוחות בוקר ארוכות, אחר צהריים ארוכים עוד יותר, וערבים שנמסים אל תוך אור הכוכבים.",
        size: '48 מ"ר',
        occupancy: "2–3 אורחים",
        benefits: [
          "גן פרטי מוקף חומה עם בריכת טבילה",
          "פטיו מוצל עם מיטות יום ארוגות ביד",
          "מרחב מגורים פתוח עם אח מאבן מדברית",
          "ארוחת בוקר איטית המוגשת בגן שלכם",
          "מקלחת גשם חיצונית בין הדקלים",
        ],
        faqs: [
          {
            question: "האם בריכת הטבילה פרטית?",
            answer:
              "כן. בריכת הטבילה ממוקמת בתוך הגן המוקף חומה שלכם והיא פרטית לחלוטין לסוויטה.",
          },
          {
            question: "האם אפשר לערוך חגיגה קטנה בסוויטת גן הנווה?",
            answer:
              "הגן מארח בנוחות הרמת כוסית אינטימית עד שמונה אורחים. לאירועים גדולים יותר הצוות שלנו יכול לארגן מרחב חגיגות ייעודי בנכס.",
          },
          {
            question: "האם ארוחת בוקר כלולה?",
            answer:
              "ארוחת בוקר עונתית מתוצרת מקומית של הנגב כלולה, וניתן להגיש אותה בפרטיות בגן שלכם מדי בוקר.",
          },
        ],
      },
    },
  },
  {
    slug: "celestial-loft",
    priceFrom: 1750,
    heroImage: img("photo-1618221195710-dd6b41faaea6", 2000),
    cardImage: img("photo-1618221195710-dd6b41faaea6", 900),
    gallery: [
      img("photo-1617103996702-96ff29b1c467"),
      img("photo-1505693416388-ac5ce068fe85"),
      img("photo-1505691938895-1758d7feb511"),
      img("photo-1522708323590-d24dbb6b0267"),
    ],
    content: {
      en: {
        name: "Celestial Loft",
        shortBenefit: "A glass-roofed loft built for stargazing from your bed.",
        intro:
          "Designed around the night sky, the Celestial Loft features a retractable glass ceiling above the bed. By day it is filled with light; by night it becomes your private observatory.",
        tags: ["For couples", "Stargazing", "Glass ceiling", "Romantic"],
        perfectFor:
          "Stargazers, romantics and anyone who wants to fall asleep beneath the clearest skies in Israel.",
        story:
          "Press a button and the ceiling slides away. Suddenly there is nothing between you and the deepest sky you have ever seen — thousands of stars, the slow arc of the Milky Way, the occasional silver streak of a meteor. The Celestial Loft turns the simple act of going to sleep into the most romantic thing you will do all year.",
        size: "60 m²",
        occupancy: "2 guests",
        benefits: [
          "Retractable glass ceiling above the bed for stargazing",
          "Telescope and night-sky guide provided",
          "Sunken lounge with desert-facing picture window",
          "Double vanity spa bathroom with deep soaking tub",
          "Climate-controlled comfort for cool desert nights",
        ],
        faqs: [
          {
            question: "Can the glass ceiling be closed for privacy?",
            answer:
              "Yes. The glass ceiling is fully retractable and comes with a blackout shade, so you control light and privacy completely.",
          },
          {
            question: "Is the loft good for stargazing year-round?",
            answer:
              "The desert offers exceptional clear skies in every season. We provide a telescope and a simple star map so you can navigate the night sky from bed.",
          },
          {
            question: "How many guests can stay?",
            answer:
              "The Celestial Loft is designed as a romantic retreat for two guests.",
          },
        ],
      },
      he: {
        name: "לופט השמיים",
        shortBenefit: "לופט עם תקרת זכוכית שנבנה לצפייה בכוכבים מהמיטה.",
        intro:
          "לופט השמיים תוכנן סביב שמי הלילה, ומציע תקרת זכוכית נפתחת מעל המיטה. ביום הוא מוצף אור; בלילה הוא הופך למצפה הכוכבים הפרטי שלכם.",
        tags: ["לזוגות", "צפייה בכוכבים", "תקרת זכוכית", "רומנטי"],
        perfectFor:
          "חובבי כוכבים, רומנטיקנים וכל מי שרוצה להירדם תחת השמיים הצלולים ביותר בישראל.",
        story:
          "לחיצת כפתור, והתקרה נפתחת. פתאום אין דבר בינכם לבין השמיים העמוקים ביותר שראיתם — אלפי כוכבים, הקשת האיטית של שביל החלב, ולעיתים פס כסוף של מטאור. לופט השמיים הופך את הפעולה הפשוטה של ללכת לישון לדבר הרומנטי ביותר שתעשו השנה.",
        size: '60 מ"ר',
        occupancy: "2 אורחים",
        benefits: [
          "תקרת זכוכית נפתחת מעל המיטה לצפייה בכוכבים",
          "טלסקופ ומדריך שמי לילה",
          "פינת ישיבה שקועה עם חלון נוף אל המדבר",
          "חדר רחצה ספא עם כיור כפול ואמבט השריה עמוק",
          "בקרת אקלים לנוחות בלילות המדבר הקרירים",
        ],
        faqs: [
          {
            question: "האם ניתן לסגור את תקרת הזכוכית לפרטיות?",
            answer:
              "כן. תקרת הזכוכית נפתחת לחלוטין ומגיעה עם וילון האפלה, כך שאתם שולטים באור ובפרטיות באופן מלא.",
          },
          {
            question: "האם הלופט מתאים לצפייה בכוכבים כל השנה?",
            answer:
              "המדבר מציע שמיים צלולים יוצאי דופן בכל עונה. אנו מספקים טלסקופ ומפת כוכבים פשוטה כדי שתוכלו לנווט בשמי הלילה מהמיטה.",
          },
          {
            question: "כמה אורחים יכולים להתארח?",
            answer: "לופט השמיים מתוכנן כמפלט רומנטי לשני אורחים.",
          },
        ],
      },
    },
  },
];

/** Slugs are locale-independent — used for static params. */
export const roomSlugs = roomsData.map((room) => room.slug);

function flatten(room: RoomData, locale: Locale): Room {
  const { content, ...rest } = room;
  return { ...rest, ...content[locale] };
}

export function getRooms(locale: Locale): Room[] {
  return roomsData.map((room) => flatten(room, locale));
}

export function getRoomBySlug(slug: string, locale: Locale): Room | undefined {
  const room = roomsData.find((entry) => entry.slug === slug);
  return room ? flatten(room, locale) : undefined;
}
