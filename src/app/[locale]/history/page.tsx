import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Timeline } from "@/components/sections/Timeline";
import { Marquee } from "@/components/ui/Marquee";
import { artists } from "@/data/artists";
import { LINKS } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "history" });
  return { title: t("title"), description: t("lede") };
}

export default async function HistoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("history");
  const impact = ["berlin", "japan", "detroit", "longevity"] as const;

  return (
    <>
      <PageHero index="03" label={t("label")} title={t("title")} lede={t("lede")} />

      <section className="border-b border-rule py-20 md:py-28">
        <Container wide>
          <Timeline />
        </Container>
      </section>

      <Marquee items={artists.map((a) => a.name)} durationSeconds={90} reverse />

      <section className="border-b border-rule py-24 md:py-32">
        <Container wide>
          <h2 className="type-heading text-[clamp(2rem,5vw,4rem)]">{t("impact.title")}</h2>
          <ul className="mt-14 grid gap-px border-t border-rule md:grid-cols-2">
            {impact.map((key) => (
              <li key={key} className="border-b border-rule py-10 md:border-r md:pr-10 md:even:border-r-0">
                <h3 className="type-heading text-2xl md:text-3xl">{t(`impact.${key}.title`)}</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-dim">
                  {t(`impact.${key}.body`)}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20">
        <Container wide>
          <h2 className="type-heading text-2xl">{t("sources.title")}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t("sources.body")}</p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { href: LINKS.wikipedia, label: "Wikipedia" },
              { href: LINKS.residentAdvisor, label: "Resident Advisor" },
              { href: LINKS.discogs, label: "Discogs" },
              { href: LINKS.bandcampLabel, label: "Bandcamp" },
            ].map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="type-label text-dim transition-colors hover:text-blood"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
