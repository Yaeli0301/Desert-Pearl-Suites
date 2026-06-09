import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig, whatsappHref, wazeHref } from "@/lib/site";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();
  const region =
    locale === "he"
      ? "מצפה רמון, מדבר הנגב, ישראל"
      : siteConfig.location.region;

  return (
    <footer className="bg-ink text-cream/80">
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-3 lg:py-20">
        <div>
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={617}
            height={374}
            className="h-24 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
            {dict.footer.blurb}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5 text-gold-soft">{dict.footer.explore}</p>
          <ul className="space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={localePath(locale, link.href)}
                  className="link-underline text-cream/70 hover:text-cream"
                >
                  {dict.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5 text-gold-soft">
            {dict.footer.reservations}
          </p>
          <ul className="space-y-3 text-sm text-cream/70">
            <li>
              <a
                href={wazeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-cream"
              >
                {region}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.contact.phoneE164}`}
                className="link-underline hover:text-cream"
                dir="ltr"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="link-underline hover:text-cream"
                dir="ltr"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-cream"
              >
                {dict.footer.whatsappUs}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-5 text-xs uppercase tracking-luxe text-cream/60">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-soft"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-soft"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/65 sm:flex-row">
          <p>
            © {year}{" "}
            {siteConfig.name}.{" "}
            {dict.footer.rights}
          </p>
          <p>{dict.footer.crafted}</p>
        </div>
      </div>
    </footer>
  );
}
