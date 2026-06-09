import { siteConfig } from "./site";

/** Builds FAQPage structured data for rich results and AI search engines. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Organisation / Hotel level structured data used on the homepage. */
export function hotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneE164,
    email: siteConfig.contact.email,
    priceRange: "₪₪₪₪",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.addressLocality,
      addressRegion: siteConfig.location.addressRegion,
      addressCountry: siteConfig.location.addressCountry,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      bestRating: siteConfig.rating.scale,
      reviewCount: siteConfig.rating.reviewCount,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}
