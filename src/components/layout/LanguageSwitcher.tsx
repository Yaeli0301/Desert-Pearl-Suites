"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

/**
 * Swaps the locale segment of the current path, keeping the user on the same
 * page when they switch languages.
 */
export function LanguageSwitcher({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();

  const pathFor = (target: Locale) => {
    const segments = pathname.split("/");
    // segments[0] is "", segments[1] is the current locale.
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  };

  return (
    <div
      className={cn(
        "flex items-center gap-1 text-xs uppercase tracking-luxe",
        className,
      )}
    >
      {locales.map((target, index) => (
        <span key={target} className="flex items-center gap-1">
          {index > 0 ? <span className="text-ink/30">·</span> : null}
          <Link
            href={pathFor(target)}
            hrefLang={target}
            prefetch
            aria-current={target === locale ? "true" : undefined}
            className={cn(
              "transition-colors",
              target === locale
                ? "font-semibold text-ink"
                : "text-ink/60 hover:text-ink",
            )}
          >
            {target === "he" ? "ע" : "EN"}
            <span className="sr-only">{localeLabels[target]}</span>
          </Link>
        </span>
      ))}
    </div>
  );
}
