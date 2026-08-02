import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/Logo";
import { SITE } from "@/lib/constants";

/**
 * Full-viewport opener. The whole thing is type and rules — no photography,
 * because the label has no shot of hero imagery yet and a stock DJ photo would
 * undercut the one asset that is genuinely strong: the mark.
 *
 * When Frank's logo arrives, the LogoMark block here is where it goes big.
 */
export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="scanlines relative flex min-h-[calc(100svh-4rem)] flex-col justify-between overflow-hidden border-b border-rule pb-10 pt-16">
      {/* Faint grid rules, letting the black breathe without adding colour. */}
      <div aria-hidden className="grid-rules pointer-events-none absolute inset-0 opacity-40" />

      <Container wide className="relative">
        <p className="type-label text-mute">
          {SITE.city} · {t("since", { year: SITE.foundedYear })}
        </p>
      </Container>

      <Container wide className="relative">
        <h1 className="type-display text-[clamp(3.5rem,13vw,13rem)]">
          <span className="block">Müller</span>
          <span className="block text-blood">Records</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-dim md:text-lg">
          {t("lede")}
        </p>
      </Container>

      <Container wide className="relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/catalog"
              className="type-label flex items-center gap-2 border border-paper px-6 py-4 transition-colors hover:bg-paper hover:text-ink"
            >
              {t("ctaCatalog")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/artists"
              className="type-label flex items-center gap-2 border border-rule px-6 py-4 text-dim transition-colors hover:border-blood hover:text-blood"
            >
              {t("ctaArtists")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <LogoMark className="hidden h-32 w-32 text-rule lg:block" />
        </div>
      </Container>
    </section>
  );
}
