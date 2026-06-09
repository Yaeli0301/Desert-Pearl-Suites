# Desert Pearl Suites

A production-ready, high-end **boutique hotel website** for a fictional luxury desert hotel in Israel. Built to feel premium and emotional, convert visitors into bookings, and score well on performance, SEO and AI-search readability.

![Luxury boutique hotel](https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=70)

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS** (custom luxury design system)
- **Framer Motion** (subtle, reduced-motion-aware animations)
- **next/font** + **next/image** for performance
- **Bilingual i18n** — Hebrew (default, RTL) + English (LTR)

## Languages (i18n)

The site is fully bilingual with locale-based routing:

- Hebrew is the **default** locale and renders right-to-left (`/he`).
- English is available at `/en` and renders left-to-right.
- Visiting `/` redirects to the best locale (via `src/middleware.ts`, using the
  `Accept-Language` header, defaulting to Hebrew).
- A language switcher in the header keeps the user on the same page when
  swapping languages.
- Each locale uses its own typefaces: Frank Ruhl Libre + Assistant for Hebrew,
  Cormorant Garamond + Jost for English.

How it's organised:

- `src/i18n/config.ts` — locales, default, direction, helpers
- `src/i18n/dictionaries/he.ts` + `en.ts` — all UI strings
- `src/data/*` — rooms, testimonials and gallery copy are stored per locale
- All pages live under `src/app/[locale]/`

To add another language: add it to `locales` in `src/i18n/config.ts`, create a
matching dictionary file, and add the localized fields in `src/data/*`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Script          | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server              |
| `npm run build` | Production build                  |
| `npm run start` | Run the production build          |
| `npm run lint`  | Lint with `eslint-config-next`    |

## Project structure

```
src/
├─ app/
│  ├─ [locale]/          # All localized pages (he / en)
│  │  ├─ page.tsx        # Home
│  │  ├─ rooms/          # Suites list + [slug] detail
│  │  ├─ gallery/        # Filterable masonry gallery
│  │  ├─ experience/     # Story / experience page
│  │  └─ contact/        # Booking form + direct contact
│  ├─ sitemap.ts         # Both locales
│  └─ robots.ts
├─ i18n/                 # Locale config + he/en dictionaries
├─ middleware.ts         # Locale detection & redirect
├─ sections/             # Page-level sections
│  ├─ home/              # Hero, EmotionalStory, SocialProof, RoomsPreview, Scarcity…
│  └─ shared/            # PageHeader, CallToAction
├─ components/           # Modular, reusable building blocks
│  ├─ layout/            # Header, Footer, Mobile sticky CTA, FloatingCta, LanguageSwitcher
│  ├─ effects/           # NoiseOverlay, CustomCursor
│  ├─ rooms/             # RoomCard, RoomGallery (lightbox)
│  ├─ gallery/           # Gallery grid (client)
│  ├─ contact/           # Contact form (client)
│  ├─ seo/               # JSON-LD helper
│  └─ ui/                # Button, Reveal, Parallax, Lightbox, SectionHeading, FaqAccordion
├─ styles/               # Design system — tokens.css + globals.css
├─ data/                 # Rooms, testimonials, gallery (single source of truth)
└─ lib/                  # site config, SEO schema, utils
```

## Design system & motion

- **Tokens** live in `src/styles/tokens.css` and map into Tailwind utilities in
  `tailwind.config.ts`: ink `#0A0A0A`, warm white `#F8F5F2`, gold `#C6A15B`.
- **Type:** Playfair Display (EN headings) / Frank Ruhl Libre (HE headings) +
  Jost / Assistant for body.
- **Premium touches:** subtle glassmorphism (`.glass`), soft shadows, gradient
  overlays, a faint film-grain `NoiseOverlay`, and a desktop `CustomCursor`.
- **Micro-interactions:** scroll reveals (`Reveal`), background `Parallax`,
  image zoom on hover, button sheen/glow, page transitions (`template.tsx`) and
  an interactive `Lightbox`. Everything respects `prefers-reduced-motion`.

## Pages

- `/` — Home (hero, social proof, why choose us, rooms preview, experience, CTA)
- `/rooms` — Suite grid
- `/rooms/[slug]` — Single suite (hero, "perfect for", benefits, gallery, FAQ, CTA)
- `/gallery` — Masonry gallery filtered by Rooms / Outdoor / Events
- `/experience` — Emotional story page
- `/contact` — Booking form, WhatsApp & phone CTAs

## Design system

- **Colors:** deep ink black, warm off-white cream, gold accents (see `tailwind.config.ts`)
- **Type:** Cormorant Garamond (serif headings) + Jost (sans body)
- **Motion:** scroll reveals + micro-interactions, all gated behind `prefers-reduced-motion`

## SEO & AI optimization

- Per-page `metadata` with canonical URLs and Open Graph
- Semantic HTML with a single H1 per page and clear H2 hierarchy
- **JSON-LD structured data:** `Hotel`, `FAQPage`, `BreadcrumbList`
- `sitemap.xml` and `robots.txt` generated by the App Router
- Descriptive, human-written copy (no placeholder text)

## Performance

- `next/image` with AVIF/WebP, responsive `sizes`, lazy loading by default
- Minimal client JS — only interactive pieces are client components
- Self-hosted fonts via `next/font` with `display: swap`

## Customization

- **Brand details / contact info:** `src/lib/site.ts`
- **Rooms, testimonials, gallery:** `src/data/*`
- **Images:** currently sourced from Unsplash (configured in `next.config.mjs`). Swap the URLs in `src/data` for your own optimized assets before launch.

## Connecting the contact form

`src/components/contact/ContactForm.tsx` ships with a simulated submit. To go live, wire `handleSubmit` to an API route or a form service (Resend, Formspree, a CRM, etc.).

## Deploy

Deploy to [Vercel](https://vercel.com/) (recommended) or any Node host. Set `siteConfig.url` in `src/lib/site.ts` to your production domain so canonical URLs, the sitemap and structured data resolve correctly.
