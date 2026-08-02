import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ArtistGrid } from "@/components/sections/ArtistGrid";
import { artists, artistCount } from "@/data/artists";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "artists" });
  return { title: t("title"), description: t("lede") };
}

export default async function ArtistsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("artists");

  const releaseArtists = artists.filter((a) => a.role === "release");
  const remixArtists = artists.filter((a) => a.role === "remix");

  return (
    <>
      <PageHero
        index="01"
        label={t("label")}
        title={t("title")}
        lede={t("lede", { count: artistCount })}
      />

      <section className="border-b border-rule py-20">
        <Container wide>
          <h2 className="type-heading text-3xl md:text-4xl">{t("releasedHere")}</h2>
          <div className="mt-10">
            <ArtistGrid items={releaseArtists} remixLabel={t("remix")} />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container wide>
          <h2 className="type-heading text-3xl md:text-4xl">{t("remixedHere")}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t("remixNote")}</p>
          <div className="mt-10">
            <ArtistGrid items={remixArtists} remixLabel={t("remix")} />
          </div>
        </Container>
      </section>
    </>
  );
}
