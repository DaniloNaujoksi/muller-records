import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/Logo";
import { LINKS, SITE } from "@/lib/constants";
import type { AppPathname } from "@/i18n/routing";

const NAV: { href: AppPathname; key: string }[] = [
  { href: "/catalog", key: "catalog" },
  { href: "/artists", key: "artists" },
  { href: "/history", key: "history" },
  { href: "/merch", key: "merch" },
  { href: "/contact", key: "contact" },
];

const EXTERNAL = [
  { href: LINKS.bandcampLabel, label: "Bandcamp" },
  { href: LINKS.residentAdvisor, label: "Resident Advisor" },
  { href: LINKS.discogs, label: "Discogs" },
  { href: LINKS.x, label: "X" },
  { href: LINKS.facebook, label: "Facebook" },
];

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-rule">
      <Container wide className="py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <LogoMark className="h-20 text-paper" />
            <p className="type-heading mt-6 max-w-sm text-3xl">{t("sign")}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">{t("blurb")}</p>
          </div>

          <nav aria-label={t("siteLinks")}>
            <p className="type-label text-mute">{t("siteLinks")}</p>
            <ul className="mt-5 space-y-3">
              {NAV.map(({ href, key }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-dim transition-colors hover:text-blood">
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("elsewhere")}>
            <p className="type-label text-mute">{t("elsewhere")}</p>
            <ul className="mt-5 space-y-3">
              {EXTERNAL.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-dim transition-colors hover:text-blood"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-rule pt-6 text-xs text-mute md:flex-row md:items-center md:justify-between">
          <p>
            © {SITE.foundedYear}–{new Date().getFullYear()} {SITE.name}, {SITE.city}
          </p>
          <p className="type-label">{t("tagline")}</p>
        </div>
      </Container>
    </footer>
  );
}
