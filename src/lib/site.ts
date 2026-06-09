/**
 * Central place for brand-wide constants. Keeping these in one module makes the
 * site easy to re-skin and keeps contact details consistent across pages.
 */
export const siteConfig = {
  name: "Desert Pearl Suites",
  shortName: "Desert Pearl",
  tagline: "Private Luxury Stay in the Heart of the Desert",
  description:
    "Desert Pearl Suites is a boutique hotel in the Israeli desert offering private luxury suites for couples, romantic getaways, celebrations and unforgettable moments.",
  // Used for canonical URLs, sitemap and structured data.
  // Override in production via NEXT_PUBLIC_SITE_URL (set automatically on Vercel).
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.desertpearlsuites.com",
  locale: "en_US",
  location: {
    region: "Mitzpe Ramon, Negev Desert, Israel",
    addressLocality: "Mitzpe Ramon",
    addressRegion: "Southern District",
    addressCountry: "IL",
    // Exact coordinates used for the Waze deep link in the "Find us" section.
    lat: 30.609722,
    lng: 34.801389,
  },
  contact: {
    // International format keeps tel:/WhatsApp links valid everywhere.
    phoneDisplay: "+972 50-123-4567",
    phoneE164: "+972501234567",
    whatsapp: "972501234567",
    email: "stay@desertpearlsuites.com",
  },
  social: {
    instagram: "https://instagram.com/desertpearlsuites",
    facebook: "https://facebook.com/desertpearlsuites",
  },
  rating: {
    value: 9.6,
    scale: 10,
    reviewCount: 312,
  },
} as const;

export const navLinks = [
  { href: "/", key: "home" },
  { href: "/rooms", key: "rooms" },
  { href: "/experience", key: "experience" },
  { href: "/gallery", key: "gallery" },
  { href: "/contact", key: "contact" },
  { href: "/overview", key: "overview" },
] as const;

/** Pre-built WhatsApp deep link with a friendly default message. */
export const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
  "Hi Desert Pearl Suites, I'd like to check availability for a stay.",
)}`;

/** Waze deep link that opens turn-by-turn navigation to the exact location. */
export const wazeHref = `https://waze.com/ul?ll=${siteConfig.location.lat}%2C${siteConfig.location.lng}&navigate=yes`;
