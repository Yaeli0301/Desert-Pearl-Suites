"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, whatsappHref } from "@/lib/site";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

/**
 * Persistent conversion bar shown only on small screens. It keeps the two
 * highest-intent actions — booking and WhatsApp — one tap away at all times.
 */
export function MobileStickyCTA({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();

  // Avoid covering the contact form's own actions.
  if (pathname.startsWith(localePath(locale, "/contact"))) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cream-dark bg-cream/95 backdrop-blur-md lg:hidden">
      <div className="flex items-stretch gap-2 px-3 py-3">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 py-3 text-xs font-medium uppercase tracking-luxe text-ink"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.16c-.25.69-1.45 1.32-2 1.4-.51.07-1.16.1-1.87-.12-.43-.13-.98-.32-1.69-.62-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07s.76-2.18 1.03-2.48c.27-.3.59-.37.79-.37l.57.01c.18.01.43-.07.67.51.25.59.85 2.05.92 2.2.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.71.81 2 .96.3.15.49.22.56.35.07.12.07.71-.18 1.4Z" />
          </svg>
          {dict.common.whatsapp}
        </a>
        <Link
          href={localePath(locale, "/contact")}
          className="flex flex-[1.4] items-center justify-center rounded-full bg-gold py-3 text-xs font-medium uppercase tracking-luxe text-ink"
        >
          {dict.mobileCta.book}
        </Link>
        <a
          href={`tel:${siteConfig.contact.phoneE164}`}
          aria-label={dict.common.call}
          className="grid place-items-center rounded-full border border-ink/15 px-4 text-ink"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
