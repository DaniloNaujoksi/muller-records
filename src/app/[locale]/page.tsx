import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { VinylBackdrop } from "@/components/ui/VinylBackdrop";
import { Hero } from "@/components/sections/Hero";
import { StatBand } from "@/components/sections/StatBand";
import { ArtistGrid } from "@/components/sections/ArtistGrid";
import { CatalogTable } from "@/components/sections/CatalogTable";
import { artists, headlineArtists } from "@/data/artists";
import { releases, imprints, type Imprint } from "@/data/catalog";
import { LINKS } from "@/lib/constants";
import portrait from "@/assets/photos/beroshima-portrait.webp";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");

  return (
    <>
      {/*
        The roster ticker runs above the hero, hard under the navigation. It is
        the first thing on the page on purpose: the names are the label's
        strongest argument, and they land before a single line of copy is read.
      */}
      <Marquee items={artists.map((a) => a.name)} durationSeconds={80} />

      <Hero />
      <StatBand />

      <Section index="01" label={t("artists.label")}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="type-heading max-w-4xl text-[clamp(2.25rem,6vw,5rem)]">
            {t("artists.title")}
          </h2>
          <ArrowLink href="/artists">{t("artists.cta")}</ArrowLink>
        </div>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-dim">{t("artists.body")}</p>
        <div className="mt-14">
          <ArtistGrid items={headlineArtists} remixLabel={t("artists.remix")} />
        </div>
      </Section>

      <ImprintStrip />

      <Section index="02" label={t("catalog.label")}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="type-heading max-w-4xl text-[clamp(2.25rem,6vw,5rem)]">
            {t("catalog.title")}
          </h2>
          <ArrowLink href="/catalog">{t("catalog.cta")}</ArrowLink>
        </div>
        <div className="mt-14">
          <CatalogTable
            items={releases.slice(0, 10)}
            labels={{
              catalog: t("catalog.columns.catalog"),
              title: t("catalog.columns.title"),
              artist: t("catalog.columns.artist"),
              credits: t("catalog.columns.credits"),
              year: t("catalog.columns.year"),
              imprint: t("catalog.columns.imprint"),
            }}
          />
        </div>
      </Section>

      <StoryBlock />
      <MerchTeaser />
    </>
  );
}

/** Shared shell so every home section sits on the same rhythm. */
function Section({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-rule py-24 md:py-32">
      <Container wide>
        <Reveal>
          <SectionLabel index={index}>{label}</SectionLabel>
          <div className="mt-10">{children}</div>
        </Reveal>
      </Container>
    </section>
  );
}

function ArrowLink({ href, children }: { href: "/artists" | "/catalog" | "/history" | "/merch"; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="type-label flex items-center gap-2 text-dim transition-colors hover:text-blood"
    >
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}

/** The four imprints, side by side — the part of the story most visitors miss. */
function ImprintStrip() {
  const t = useTranslations("home.imprints");
  const order: Imprint[] = ["acid-orange", "muller", "beroshima-music", "mad-musician"];

  return (
    <section className="border-b border-rule bg-smoke py-24 md:py-32">
      <Container wide>
        <SectionLabel index="01.5">{t("label")}</SectionLabel>
        <ul className="mt-12 grid gap-px md:grid-cols-2 lg:grid-cols-4">
          {order.map((key) => (
            <li key={key} className="border-t border-rule pt-6 md:border-r md:pr-6 md:last:border-r-0">
              <p className="type-label text-blood">{imprints[key].founded}</p>
              <h3 className="type-heading mt-3 text-2xl">{imprints[key].name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{imprints[key].note}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** History teaser. Pull quote, the portrait, one link out. */
function StoryBlock() {
  const t = useTranslations("home.story");

  return (
    <section className="border-b border-rule py-24 md:py-32">
      <Container wide>
        <Reveal>
          <SectionLabel index="03">{t("label")}</SectionLabel>
          <blockquote className="type-heading mt-10 max-w-5xl text-[clamp(2rem,5.5vw,4.5rem)]">
            {t("quote")}
          </blockquote>
          <div className="mt-12 grid gap-12 border-t border-rule pt-12 md:grid-cols-[1fr_1.1fr] md:items-start">
            <Photo
              src={portrait}
              alt={t("portraitAlt")}
              caption={t("portraitCaption")}
              sizes="(min-width: 768px) 45vw, 100vw"
            />
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-dim">{t("bodyOne")}</p>
              <p className="text-base leading-relaxed text-dim">{t("bodyTwo")}</p>
              <div className="pt-4">
                <ArrowLink href="/history">{t("cta")}</ArrowLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function MerchTeaser() {
  const t = useTranslations("home.merch");

  return (
    <section className="scanlines relative overflow-hidden py-24 md:py-32">
      <VinylBackdrop opacityClassName="opacity-12" />
      <div aria-hidden className="grid-rules pointer-events-none absolute inset-0 opacity-30" />
      <Container wide className="relative">
        <Reveal>
          <SectionLabel index="04">{t("label")}</SectionLabel>
          <h2 className="type-display mt-10 max-w-5xl text-[clamp(2.5rem,8vw,7rem)]">
            {t("title")}
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-dim">{t("body")}</p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/merch"
              className="type-label flex items-center gap-2 border border-paper px-6 py-4 transition-colors hover:bg-paper hover:text-ink"
            >
              {t("cta")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={LINKS.bandcampLabel}
              target="_blank"
              rel="noreferrer noopener"
              className="type-label flex items-center gap-2 border border-rule px-6 py-4 text-dim transition-colors hover:border-blood hover:text-blood"
            >
              {t("bandcamp")}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
