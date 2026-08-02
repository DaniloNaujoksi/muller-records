import { clsx } from "clsx";

/**
 * Edge-to-edge scrolling ticker of artist names. The content is duplicated once
 * and the track translates exactly -50%, so the loop is seamless without
 * measuring anything at runtime.
 *
 * The duplicate copy is `aria-hidden` — a screen reader should hear the roster
 * once, not twice.
 */
export function Marquee({
  items,
  className,
  durationSeconds = 60,
  reverse = false,
}: {
  items: string[];
  className?: string;
  durationSeconds?: number;
  reverse?: boolean;
}) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
          <span className="type-heading text-2xl text-paper/70 md:text-4xl">{item}</span>
          <span aria-hidden className="text-blood">
            ●
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={clsx("relative flex overflow-hidden border-y border-rule py-5", className)}>
      <div
        className="flex min-w-full shrink-0 motion-reduce:animate-none"
        style={{
          animation: `marquee ${durationSeconds}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
