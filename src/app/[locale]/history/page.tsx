import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Timeline } from "@/components/sections/Timeline";
import { Marquee } from "@/components/ui/Marquee";
import { Photo } from "@/components/ui/Photo";
import { artists } from "@/data/artists";
import { LINKS } from "@/lib/constants";
import tape from "@/assets/photos/beroshima-tape.jpeg";
import recordsWall from "@/assets/photos/beroshima-records-wall.jpg";
import ballet from "@/assets/photos/catastrophe-ballet-cover.jpg";

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
      <PageHero
        index="03"
        label={t("label")}
        title={t("title")}
        lede={t("lede")}
        photo={ballet}
        photoAlt={t("heroPhotoAlt")}
        /* The kneeling figure sits just past the middle of the sleeve. */
        photoPosition="object-[center_45%]"
        /* Sepia sleeve, dark subject on bright sand — needs more than the
           default to read as anything other than texture. */
        photoOpacity="opacity-55"
      />

      <section className="border-b border-rule py-20 md:py-28">
        <Container wide>
          {/* The timeline runs long, so the two photographs sit in a sticky
              column beside it rather than interrupting the sequence. */}
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <Timeline />
            <div className="order-first space-y-10 lg:sticky lg:top-28 lg:order-last lg:self-start">
              <Photo
                src={tape}
                alt={t("photos.tapeAlt")}
                caption={t("photos.tapeCaption")}
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <Photo
                src={recordsWall}
                alt={t("photos.wallAlt")}
                caption={t("photos.wallCaption")}
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <Marquee items={artists.map((a) => a.name)} durationSeconds={artists.length * 4} reverse />

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
