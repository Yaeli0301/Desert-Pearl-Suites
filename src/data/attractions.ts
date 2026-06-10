import type { Locale } from "@/i18n/config";

const img = (id: string, w = 560) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=60`;

export type Attraction = {
  image: string;
  distance: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

export const attractions: Attraction[] = [
  {
    image: img("photo-1509316785289-025f5b846b35"),
    distance: { he: "5 דק׳ נסיעה", en: "5 min drive" },
    title: {
      he: "מכתש רמון",
      en: "Ramon Crater",
    },
    description: {
      he: "המכתש הגיאולוגי הגדול בעולם — שקיעות, מרפסות תצפית ושבילים שמחברים בין מדבר לשמיים.",
      en: "The world's largest erosion crater — sunsets, lookout terraces and trails that bridge desert and sky.",
    },
  },
  {
    image: img("photo-1419242902214-272b3f66ee7a"),
    distance: { he: "במלון", en: "At the hotel" },
    title: {
      he: "תצפית כוכבים",
      en: "Stargazing",
    },
    description: {
      he: "שמי מצפה רמון מהכי נקיים בישראל. סוויטת השמיים עם תקרת זכוכית — או מרפסת פרטית תחת שביל החלב.",
      en: "Mitzpe Ramon has some of Israel's clearest skies. The Celestial Loft's glass ceiling — or your private terrace under the Milky Way.",
    },
  },
  {
    image: img("photo-1501785888041-af3ef285b470"),
    distance: { he: "10 דק׳ נסיעה", en: "10 min drive" },
    title: {
      he: "שבילי מדבר וטיולי רגל",
      en: "Desert trails & hikes",
    },
    description: {
      he: "מסלולי הליכה מודרכים, שקיעות על כתפי הדיונות וטיולי בוקר שמתחילים ממש מהדלת.",
      en: "Guided walking routes, dune-top sunsets and morning hikes that start right from your door.",
    },
  },
  {
    image: img("photo-1540541338287-41700207dee6"),
    distance: { he: "15 דק׳ נסיעה", en: "15 min drive" },
    title: {
      he: "חוויות נגב אותנטיות",
      en: "Authentic Negev experiences",
    },
    description: {
      he: "חוות מדבר, אומנות בדואית, טעימות תבלינים וסיורי ג'יפים — הכל במרחק קצר מהמלון.",
      en: "Desert farms, Bedouin hospitality, spice tastings and jeep tours — all a short drive from the hotel.",
    },
  },
  {
    image: img("photo-1469371670807-013ccf25f16a"),
    distance: { he: "20 דק׳ נסיעה", en: "20 min drive" },
    title: {
      he: "ארוחות ויינות מקומיים",
      en: "Local dining & wine",
    },
    description: {
      he: "מסעדות גורמה בנגב, יקבים בוטיקיים וארוחות שדה — או ארוחה פרטית מוזמנת אליכם לסוויטה.",
      en: "Negev gourmet restaurants, boutique wineries and field dinners — or a private meal arranged at your suite.",
    },
  },
  {
    image: img("photo-1519671482749-fd09be7ccebf"),
    distance: { he: "30 דק׳ נסיעה", en: "30 min drive" },
    title: {
      he: "אילת והים האדום",
      en: "Eilat & the Red Sea",
    },
    description: {
      he: "יום של צלילה, שחייה ושמש — וערב של חזרה לשקט ויוקרה של המלון. שילוב מושלם של ים ומדבר.",
      en: "A day of diving, swimming and sun — then an evening back to the hotel's calm and luxury. The perfect sea-and-desert pairing.",
    },
  },
];
