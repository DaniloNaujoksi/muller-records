import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // STATIC_EXPORT=1 builds the site as plain HTML/CSS/JS for Frank's FTP
  // webspace (see scripts/build-static.mjs). Locale routing normally handled
  // by src/proxy.ts moves into the .htaccess that ships with the export.
  // Dev and plain builds keep the proxy and stay unaffected.
  ...(process.env.STATIC_EXPORT
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
  turbopack: {
    // SVGR, so the label mark imports as a React component and inherits colour
    // from CSS (`currentColor`) instead of being a fixed-colour <img>. The mark
    // has to render white in the header, grey in the merch tiles and red on
    // hover — one asset, three colours.
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default withNextIntl(nextConfig);
