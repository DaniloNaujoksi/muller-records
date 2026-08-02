import { clsx } from "clsx";

/**
 * PLACEHOLDER MARK — swap this for Frank's actual logo.
 *
 * Frank rates the real logo as the strongest asset the label has, so this is
 * built to be replaced, not kept: drop the artwork in `public/logo.svg` and
 * change this component to render it. Everything else on the site sizes the
 * logo through `className`, so nothing downstream needs touching.
 *
 * Until then: the umlaut is the label's most recognisable letterform detail, so
 * the placeholder leans on it — two dots over an M inside a hard red frame.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="Müller Records"
      className={clsx("block", className)}
    >
      <rect x="2" y="2" width="96" height="96" fill="none" stroke="currentColor" strokeWidth="4" />
      {/* Umlaut */}
      <rect x="30" y="22" width="11" height="11" fill="var(--color-blood)" />
      <rect x="59" y="22" width="11" height="11" fill="var(--color-blood)" />
      {/* M, drawn as strokes so it stays crisp at favicon size */}
      <path
        d="M22 78 V44 L50 68 L78 44 V78"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

/** Mark plus wordmark, for the header and footer. */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={clsx("flex items-center gap-3", className)}>
      <LogoMark className="h-8 w-8 text-paper" />
      {!compact && (
        <span className="type-heading text-lg leading-none">
          Müller<span className="text-blood">·</span>Records
        </span>
      )}
    </span>
  );
}
