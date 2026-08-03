import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ContactComposer } from "@/components/sections/ContactComposer";
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

  return (
    <>
      <PageHero index="05" label={t("label")} title={t("title")} />

      <section className="border-b border-rule py-20">
        <Container wide>
          <ContactComposer email={SITE.email} />
        </Container>
      </section>

      <section className="py-20">
        <Container wide>
          <h2 className="type-heading text-2xl">{t("elsewhere")}</h2>
          <ul className="mt-8 grid gap-px border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: LINKS.bandcampLabel, label: "Bandcamp" },
              { href: LINKS.residentAdvisor, label: "Resident Advisor" },
              { href: LINKS.facebook, label: "Facebook" },
              { href: LINKS.x, label: "X" },
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
