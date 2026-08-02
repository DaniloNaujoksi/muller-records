"use client";

import { useLocale } from "next-intl";
import { clsx } from "clsx";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type AppPathname } from "@/i18n/routing";

/**
 * EN / DE toggle. `usePathname` from next-intl returns the *internal* pathname
 * ("/catalog") rather than the localised one ("/katalog"), which is exactly what
 * `Link` wants back — so switching language keeps the visitor on the same page
 * instead of dumping them on the homepage.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname() as AppPathname;
  const active = useLocale();

  return (
    <div className={clsx("type-label flex items-center gap-2", className)}>
      {routing.locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-2">
          {i > 0 && <span className="text-rule">/</span>}
          <Link
            href={pathname}
            locale={locale}
            className={clsx(
              "transition-colors",
              locale === active ? "text-blood" : "text-mute hover:text-paper",
            )}
          >
            {locale}
          </Link>
        </span>
      ))}
    </div>
  );
}
