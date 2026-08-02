import { defineRouting } from "next-intl/routing";

// English leads: techno is an export business and the label's biggest audience
// outside Berlin sits in Japan. German is the home market and stays a full
// translation, not an afterthought.
export const routing = defineRouting({
  locales: ["en", "de"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  // No sniffing the Accept-Language header. Everyone lands on English and
  // switches deliberately — a German browser being redirected to /de made the
  // default locale a lie and meant the label's own site opened differently
  // depending on who was looking at it.
  localeDetection: false,
  pathnames: {
    "/": { en: "/", de: "/start" },
    "/catalog": { en: "/catalog", de: "/katalog" },
    "/artists": { en: "/artists", de: "/artists" },
    "/history": { en: "/history", de: "/geschichte" },
    "/merch": { en: "/merch", de: "/merch" },
    "/contact": { en: "/contact", de: "/kontakt" },
  },
});

export type AppPathname = keyof typeof routing.pathnames;
