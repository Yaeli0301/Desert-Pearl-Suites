import type { Metadata, Viewport } from "next";
import {
  Playfair_Display,
  Jost,
  Frank_Ruhl_Libre,
  Assistant,
} from "next/font/google";
import { notFound } from "next/navigation";
import "../../styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { FloatingCta } from "@/components/layout/FloatingCta";
import { NoiseOverlay } from "@/components/effects/NoiseOverlay";
import { siteConfig } from "@/lib/site";
import {
  isLocale,
  locales,
  localeDirection,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// Latin (English) typefaces.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-en",
  display: "swap",
});
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans-en",
  display: "swap",
});

// Hebrew typefaces (elegant serif + clean sans).
const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-serif-he",
  display: "swap",
});
const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans-he",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "he";
  const dict = getDictionary(locale);
  const title =
    locale === "he"
      ? `${siteConfig.name} | מלון בוטיק יוקרתי במדבר הישראלי`
      : `${siteConfig.name} | Boutique Luxury Hotel in the Israeli Desert`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.home.hero.subtitle,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        he: "/he",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "he" ? "he_IL" : "en_US",
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      title,
      description: dict.home.hero.subtitle,
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#0c0b09",
  width: "device-width",
  initialScale: 1,
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);
  const dir = localeDirection[locale];

  const fontVars = `${playfair.variable} ${jost.variable} ${frankRuhl.variable} ${assistant.variable}`;
  const fontStyle = {
    "--font-serif":
      locale === "he" ? "var(--font-serif-he)" : "var(--font-serif-en)",
    "--font-sans":
      locale === "he" ? "var(--font-sans-he)" : "var(--font-sans-en)",
  } as React.CSSProperties;

  return (
    <html lang={locale} dir={dir} className={fontVars} style={fontStyle}>
      <body className="flex min-h-screen flex-col">
        <NoiseOverlay />
        <Header locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
        <MobileStickyCTA locale={locale} dict={dict} />
        <FloatingCta locale={locale} dict={dict} />
      </body>
    </html>
  );
}
