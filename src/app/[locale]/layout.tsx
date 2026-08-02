import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { LazyMotion, domAnimation } from "framer-motion";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";
import "../globals.css";

// Archivo carries the display type: a grotesk with enough weight at 800 to hold
// a full-bleed headline, and tight enough apertures not to look friendly.
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], weight: ["400", "600", "800"] });
// Mono is the label voice — catalogue numbers, years, credits.
const mono = JetBrains_Mono({ variable: "--font-mono-jb", subsets: ["latin"], weight: ["400", "500"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: { default: `${SITE.name} — ${t("titleSuffix")}`, template: `%s — ${SITE.name}` },
    description: t("description"),
    openGraph: {
      title: `${SITE.name} — ${t("titleSuffix")}`,
      description: t("description"),
      locale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${archivo.variable} ${mono.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>
          <LazyMotion features={domAnimation}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </LazyMotion>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
