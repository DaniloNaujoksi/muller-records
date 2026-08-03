"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { LogoMark, LogoWordmark } from "@/components/ui/Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { AppPathname } from "@/i18n/routing";

const NAV: { href: AppPathname; key: string }[] = [
  { href: "/catalog", key: "catalog" },
  { href: "/artists", key: "artists" },
  { href: "/history", key: "history" },
  { href: "/merch", key: "merch" },
  { href: "/contact", key: "contact" },
];

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1800px] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="shrink-0"
          onClick={(e) => {
            setOpen(false);
            // On the homepage the link would be a no-op — turn it into the
            // way back up instead.
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          {/* The wordmark is the permanent top-left brand, on every page and
              every viewport. The head is the part that comes and goes: HeroLogo
              measures `header-mark-slot` to know where to dock, and hides it
              via `data-hero-logo` on <html> while the big mark is on screen.
              The hidden slot also collapses to zero width, so the wordmark
              starts flush at the gutter and slides right when the head
              arrives. The slot's left edge is the gutter either way, which is
              what keeps HeroLogo's measured dock target valid in both states.
              Everywhere outside the homepage the attribute never appears, so
              the full lockup shows from the start. */}
          <span className="flex items-center">
            <span
              id="header-mark-slot"
              className="block w-10 overflow-hidden transition-[width,margin,opacity] duration-200 [[data-hero-logo]_&]:mr-0 [[data-hero-logo]_&]:w-0 [[data-hero-logo]_&]:opacity-0 mr-3"
            >
              <LogoMark className="h-9" />
            </span>
            <LogoWordmark className="h-7" />
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label={t("primary")}>
          {NAV.map(({ href, key }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "type-label text-[0.8125rem] transition-colors",
                  active ? "text-blood" : "text-dim hover:text-paper",
                )}
              >
                {t(key)}
              </Link>
            );
          })}
          <LanguageSwitcher className="border-l border-rule pl-8 text-[0.8125rem]" />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t("close") : t("open")}
          className="md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/*
        Mobile panel. Rendered conditionally rather than hidden with CSS so the
        links are not tab-reachable while the panel is closed.
      */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label={t("primary")}
          className="border-t border-rule bg-ink px-6 pb-8 pt-4 md:hidden"
        >
          <ul className="flex flex-col">
            {NAV.map(({ href, key }) => (
              <li key={href} className="border-b border-rule">
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "type-heading block py-4 text-3xl transition-colors",
                    pathname === href ? "text-blood" : "text-paper",
                  )}
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher className="pt-6" />
        </nav>
      )}
    </header>
  );
}
