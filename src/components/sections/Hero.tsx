import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/Logo";
import { VinylBackdrop } from "@/components/ui/VinylBackdrop";
import { SITE } from "@/lib/constants";
import studio from "@/assets/photos/beroshima-studio.webp";

/**
 * Full-viewport opener: the studio shot sunk almost all the way into the black,
 * with the type sitting on top. The photo is there to give the black depth, not
 * to be looked at — at 18% opacity behind a gradient it registers as texture
 * first and a portrait second, which is why the headline stays readable.
 */
export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="scanlines relative flex min-h-[calc(100svh-4rem)] flex-col justify-between overflow-hidden border-b border-rule pb-10 pt-16">
      {/*
        Two background layers, split down the middle so they do not fight: the
        studio photo held to the left behind the headline, and Müller 2037
        turning off the right edge. The record is the first thing a visitor
        should catch — it is the label's own artwork, and it does more work than
        any press shot would.
      */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src={studio}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[25%_center] opacity-15 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/70" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/60" />
      </div>

      <VinylBackdrop className="top-[45%]" opacityClassName="opacity-34" />

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
          {/* No watermark mark here any more — the record occupies that corner,
              and two faint label marks in the same space read as a mistake. */}
        </div>
      </Container>
    </section>
  );
}
