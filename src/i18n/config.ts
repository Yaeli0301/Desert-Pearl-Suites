export const locales = ["he", "en"] as const;
export const defaultLocale = "he";

export type Locale = (typeof locales)[number];

/** Text direction per locale — Hebrew is right-to-left. */
export const localeDirection: Record<Locale, "rtl" | "ltr"> = {
  he: "rtl",
  en: "ltr",
};

/** Human label shown in the language switcher. */
export const localeLabels: Record<Locale, string> = {
  he: "עברית",
  en: "English",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Build a locale-prefixed internal path, e.g. localePath("he", "/rooms"). */
export function localePath(locale: Locale, path = "/") {
  const clean = path === "/" ? "" : path;
  return `/${locale}${clean}`;
}
