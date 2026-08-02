import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
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
