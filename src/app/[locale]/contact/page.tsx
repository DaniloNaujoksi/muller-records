import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { LINKS, SITE } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title"), description: t("lede") };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");

  // Plain mailto links rather than a form: no form means no spam endpoint, no
  // GDPR consent copy and no backend to keep alive. Add a form when there is a
  // reason to, not before.
  const channels = [
    { key: "demos", href: `mailto:${SITE.email}?subject=Demo`, value: SITE.email },
    { key: "bookings", href: `mailto:${SITE.email}?subject=Booking`, value: SITE.email },
    { key: "press", href: `mailto:${SITE.email}?subject=Press`, value: SITE.email },
  ] as const;

  return (
    <>
      <PageHero index="05" label={t("label")} title={t("title")} lede={t("lede")} />

      <section className="border-b border-rule py-20">
        <Container wide>
          <ul className="grid gap-px border-t border-rule md:grid-cols-3">
            {channels.map(({ key, href, value }) => (
              <li key={key} className="border-b border-rule py-10 md:border-r md:pr-8 md:last:border-r-0">
                <h2 className="type-heading text-2xl">{t(`channels.${key}.title`)}</h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-dim">
                  {t(`channels.${key}.body`)}
                </p>
                <a
                  href={href}
                  className="type-label mt-6 flex w-fit items-center gap-2 text-blood transition-opacity hover:opacity-70"
                >
                  {value}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20">
        <Container wide>
          <h2 className="type-heading text-2xl">{t("elsewhere")}</h2>
          <ul className="mt-8 grid gap-px border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: LINKS.bandcampLabel, label: "Bandcamp" },
              { href: LINKS.residentAdvisor, label: "Resident Advisor" },
              { href: LINKS.x, label: "X" },
              { href: LINKS.facebook, label: "Facebook" },
            ].map(({ href, label }) => (
              <li key={label} className="border-b border-rule sm:border-r sm:last:border-r-0">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="type-heading flex items-center justify-between p-6 text-xl transition-colors hover:text-blood"
                >
                  {label}
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
