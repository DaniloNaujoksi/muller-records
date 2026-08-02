import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ArtistGrid, ArtistList } from "@/components/sections/ArtistGrid";
import { artists, artistCount, headlineArtists } from "@/data/artists";
import takkyu from "@/assets/photos/takkyu-ishino.jpg";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "artists" });
  // `lede` interpolates {count}; without it next-intl throws FORMATTING_ERROR
  // and the page ships with no meta description at all.
  return { title: t("title"), description: t("lede", { count: artistCount }) };
}

export default async function ArtistsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("artists");

  return (
    <>
      <PageHero
        index="01"
        label={t("label")}
        title={t("title")}
        lede={t("lede", { count: artistCount })}
        photo={takkyu}
        photoAlt={t("heroPhotoAlt")}
        /* Takkyu's face sits about a third down the square frame. */
        photoPosition="object-[center_32%]"
      />

      <section className="border-b border-rule py-20">
        <Container wide>
          <h2 className="type-heading text-3xl md:text-4xl">{t("known")}</h2>
          <div className="mt-10">
            <ArtistGrid items={headlineArtists} />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container wide>
          <div className="flex flex-wrap items-baseline gap-4">
            <h2 className="type-heading text-3xl md:text-4xl">{t("everyone")}</h2>
            <span className="type-label text-mute">{t("count", { count: artistCount })}</span>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t("orderNote")}</p>
          <div className="mt-10">
            <ArtistList items={artists} />
          </div>
        </Container>
      </section>
    </>
  );
}
