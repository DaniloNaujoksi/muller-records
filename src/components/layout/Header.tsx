"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";
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
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label={t("primary")}>
          {NAV.map(({ href, key }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "type-label transition-colors",
                  active ? "text-blood" : "text-dim hover:text-paper",
                )}
              >
                {t(key)}
              </Link>
            );
          })}
          <LanguageSwitcher className="border-l border-rule pl-8" />
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
