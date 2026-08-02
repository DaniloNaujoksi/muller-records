import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { MerchGrid } from "@/components/sections/MerchGrid";
import { apparel, records, recordsInStock } from "@/data/merch";
import { LINKS, SITE } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "merch" });
  return { title: t("title"), description: t("lede") };
}

export default async function MerchPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("merch");
  const soldOutRecords = records.filter((r) => r.soldOut);

  return (
    <>
      <PageHero index="04" label={t("label")} title={t("title")} lede={t("lede")} />

      <section className="border-b border-rule py-20">
        <Container wide>
          <div className="flex flex-wrap items-baseline gap-4">
            <h2 className="type-heading text-3xl md:text-4xl">{t("apparel.title")}</h2>
            <span className="type-label text-mute">{t("count", { count: apparel.length })}</span>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t("apparel.body")}</p>
          <div className="mt-10">
            <MerchGrid items={apparel} />
          </div>
        </Container>
      </section>

      <section className="border-b border-rule py-20">
        <Container wide>
          <div className="flex flex-wrap items-baseline gap-4">
            <h2 className="type-heading text-3xl md:text-4xl">{t("vinyl.title")}</h2>
            <span className="type-label text-mute">
              {t("count", { count: recordsInStock.length })}
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t("vinyl.body")}</p>
          <div className="mt-10">
            <MerchGrid items={recordsInStock} />
          </div>
        </Container>
      </section>

      {soldOutRecords.length > 0 && (
        <section className="border-b border-rule py-20">
          <Container wide>
            <div className="flex flex-wrap items-baseline gap-4">
              <h2 className="type-heading text-3xl md:text-4xl">{t("gone.title")}</h2>
              <span className="type-label text-mute">
                {t("count", { count: soldOutRecords.length })}
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t("gone.body")}</p>
            <div className="mt-10">
              <MerchGrid items={soldOutRecords} />
            </div>
          </Container>
        </section>
      )}

      <section className="py-24">
        <Container wide>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="type-heading text-[clamp(2rem,5vw,3.5rem)]">{t("records.title")}</h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-dim">{t("records.body")}</p>
              <a
                href={LINKS.bandcampLabel}
                target="_blank"
                rel="noreferrer noopener"
                className="type-label mt-8 flex w-fit items-center gap-2 border border-paper px-6 py-4 transition-colors hover:bg-paper hover:text-ink"
              >
                {t("records.cta")}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="border-t border-rule pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
              <h2 className="type-heading text-2xl">{t("wholesale.title")}</h2>
              <p className="mt-4 text-base leading-relaxed text-dim">{t("wholesale.body")}</p>
              <a
                href={`mailto:${SITE.email}`}
                className="type-label mt-6 flex w-fit items-center gap-2 text-blood transition-opacity hover:opacity-70"
              >
                {SITE.email}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
