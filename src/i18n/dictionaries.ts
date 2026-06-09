import type { Locale } from "./config";
import { he, type Dictionary } from "./dictionaries/he";
import { en } from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { he, en };

/** Returns the full UI dictionary for a locale (defaults to Hebrew). */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? he;
}

export type { Dictionary };
