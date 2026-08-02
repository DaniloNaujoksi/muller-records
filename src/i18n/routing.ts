import { defineRouting } from "next-intl/routing";

// English leads: techno is an export business and the label's biggest audience
// outside Berlin sits in Japan. German is the home market and stays a full
// translation, not an afterthought.
export const routing = defineRouting({
  locales: ["en", "de"],
  defaultLocale: "en",
  localePrefix: "as-needed",
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
