import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CatalogTable } from "@/components/sections/CatalogTable";
import { albums, releases, imprints, type Imprint } from "@/data/catalog";
import { LINKS } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "catalog" });
  return { title: t("title"), description: t("lede") };
}

export default async function CatalogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("catalog");
  const columns = {
    catalog: t("columns.catalog"),
    title: t("columns.title"),
    artist: t("columns.artist"),
    credits: t("columns.credits"),
    year: t("columns.year"),
    imprint: t("columns.imprint"),
  };

  // Grouped by imprint so the Mad Musician series does not read as a break in
  // the Müller numbering — it is its own line, restarted at 01.
  const order: Imprint[] = ["mad-musician", "muller", "beroshima-music", "acid-orange"];
  const groups = order
    .map((key) => ({ key, items: releases.filter((r) => r.imprint === key) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <PageHero index="02" label={t("label")} title={t("title")} />

      <section className="border-b border-rule py-20">
        <Container wide>
          <p className="max-w-3xl text-sm leading-relaxed text-mute">
            {t("disclaimer")}{" "}
            <a
              href={LINKS.discogs}
              target="_blank"
              rel="noreferrer noopener"
              className="text-blood underline underline-offset-4"
            >
              Discogs
            </a>
            .
          </p>

          {groups.map(({ key, items }) => (
            <div key={key} className="mt-16 first:mt-12">
              <div className="flex items-baseline gap-4 border-b border-paper pb-4">
                <h2 className="type-heading text-2xl md:text-3xl">{imprints[key].name}</h2>
                <span className="type-label text-mute">
                  {t("since", { year: imprints[key].founded })} · {t("count", { count: items.length })}
                </span>
              </div>
              <CatalogTable items={items} labels={columns} showImprint={false} />
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container wide>
          <h2 className="type-heading text-3xl md:text-4xl">{t("albums")}</h2>
          <ul className="mt-10 grid gap-px border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
            {albums.map((album) => (
              <li key={album.title} className="border-b border-rule py-8 sm:border-r sm:pr-6">
                <p className="type-label text-blood">{album.year}</p>
                <h3 className="type-heading mt-3 text-xl">{album.title}</h3>
                <p className="mt-2 text-sm text-mute">{album.artist}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
