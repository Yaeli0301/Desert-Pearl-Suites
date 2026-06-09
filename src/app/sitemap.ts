import type { MetadataRoute } from "next";
import { roomSlugs } from "@/data/rooms";
import { siteConfig } from "@/lib/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["", "/rooms", "/experience", "/gallery", "/contact"];

  const pageRoutes = locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
  );

  const roomRoutes = locales.flatMap((locale) =>
    roomSlugs.map((slug) => ({
      url: `${siteConfig.url}/${locale}/rooms/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...pageRoutes, ...roomRoutes];
}
