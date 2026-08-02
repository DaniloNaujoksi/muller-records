import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intl = createMiddleware(routing);

/**
 * Locale detection plus the rewrite from localised paths (`/de/katalog`) to the
 * route folders (`/de/catalog`).
 *
 * The matcher is a plain path pattern on purpose — the negative-lookahead regex
 * most examples show silently matches nothing but `/` here. Excluding internal
 * paths inside the function costs a few string comparisons and cannot fail
 * quietly.
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isInternal =
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel") ||
    pathname.includes(".");

  if (isInternal) return NextResponse.next();

  return intl(request);
}

export const config = {
  matcher: ["/:path*"],
};
