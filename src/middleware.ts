import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

/** Detect the best locale from the Accept-Language header, falling back to default. */
function detectLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (header) {
    const preferred = header
      .split(",")
      .map((part) => part.split(";")[0].trim().toLowerCase());
    for (const lang of preferred) {
      const base = lang.split("-")[0];
      if ((locales as readonly string[]).includes(base)) return base;
    }
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip if the path already starts with a supported locale.
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  // Redirect e.g. /rooms -> /he/rooms (or detected locale).
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Run on everything except Next internals, API and static assets.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
