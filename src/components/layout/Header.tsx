"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { navLinks, siteConfig } from "@/lib/site";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

export function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const home = localePath(locale, "/");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-[#fff8e6] transition-all duration-500",
        scrolled || menuOpen
          ? "shadow-soft"
          : "shadow-[0_1px_0_rgba(0,0,0,0.06)]",
      )}
    >
      <nav className="container-luxe relative flex h-24 items-center justify-between sm:h-28">
        {/* Left: desktop nav / mobile menu button */}
        <ul className="hidden max-w-[42%] items-center gap-4 xl:gap-6 lg:flex">
          {navLinks.map((link) => {
            const href = localePath(locale, link.href);
            const active =
              link.href === "/"
                ? pathname === home
                : pathname.startsWith(href);
            return (
              <li key={link.href}>
                <Link
                  href={href}
                  className={cn(
                    "link-underline text-xs uppercase tracking-luxe transition-colors",
                    active ? "font-semibold text-ink" : "text-ink/75 hover:text-ink",
                  )}
                >
                  {dict.nav[link.key]}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <div className="space-y-1.5">
            <span
              className={cn(
                "block h-px w-6 bg-ink transition-all duration-300",
                menuOpen && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-ink transition-all duration-300",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-ink transition-all duration-300",
                menuOpen && "-translate-y-[7px] -rotate-45",
              )}
            />
          </div>
        </button>

        {/* Center: logo */}
        <Link
          href={home}
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center leading-none"
          aria-label={siteConfig.name}
        >
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={617}
            height={374}
            priority
            className="h-16 w-auto sm:h-20"
          />
        </Link>

        {/* Right: controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          <LanguageSwitcher locale={locale} />
          <Button
            href={localePath(locale, "/contact")}
            size="sm"
            className="hidden lg:inline-flex"
          >
            {dict.nav.checkAvailability}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-cream-dark bg-cream/95 backdrop-blur-md transition-[max-height] duration-500 lg:hidden",
          menuOpen ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <ul className="container-luxe flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={localePath(locale, link.href)}
                className="block py-3 text-sm uppercase tracking-luxe text-ink/80"
              >
                {dict.nav[link.key]}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Button
              href={localePath(locale, "/contact")}
              size="sm"
              className="w-full"
            >
              {dict.nav.checkAvailability}
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
