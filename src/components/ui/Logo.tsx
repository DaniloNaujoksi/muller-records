import { clsx } from "clsx";
import MarkSvg from "@/assets/logo-mark.svg";
import WordmarkSvg from "@/assets/logo-wordmark.svg";

/**
 * The label's own artwork, vector-traced from the original and left otherwise
 * untouched. Both files carry `fill="currentColor"`, so colour comes from the
 * surrounding text colour — white in the header, grey in merch tiles, red on
 * hover. Never recolour by baking a fill into the asset.
 *
 * The mark and the wordmark are separate on purpose: the head reads at 24px,
 * the stacked wordmark does not, so small contexts get the head alone.
 *
 * Neither component sets its own size. Sizing classes passed by the caller and
 * defaults set here land in the same stylesheet, where source order decides the
 * winner rather than the order they appear in `class` — a default `h-auto` here
 * silently beat every `h-9` at the call site. Callers own the size; these set
 * only `w-auto` so the aspect ratio follows the height.
 */

/** The head. Use alone wherever the wordmark would be unreadable. */
export function LogoMark({ className }: { className?: string }) {
  return <MarkSvg role="img" aria-label="Müller Records" className={clsx("block w-auto", className)} />;
}

/** "MÜLLER RECORDS" as drawn, not set in a typeface. Stacked, roughly 4.5:1. */
export function LogoWordmark({ className }: { className?: string }) {
  return <WordmarkSvg aria-hidden className={clsx("block w-auto", className)} />;
}

/**
 * The lockup: head plus wordmark, as it appears on the sleeves. `compact` drops
 * the wordmark for tight spaces, and it is hidden below `sm` regardless.
 */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={clsx("flex items-center gap-3", className)}>
      <MarkSvg role="img" aria-label="Müller Records" className="block h-9 w-auto shrink-0" />
      {/* Larger than the original lockup's ratio, where the wordmark is a sixth
          of the head and would land at 6px here — unreadable in a header. */}
      {!compact && <LogoWordmark className="hidden h-7 sm:block" />}
    </span>
  );
}
