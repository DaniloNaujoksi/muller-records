import { clsx } from "clsx";

/**
 * "02 / CATALOGUE" — the numbered mono label above every section. The number is
 * what makes the page read as a pressing sheet rather than a landing page.
 */
export function SectionLabel({
  index,
  children,
  className,
}: {
  index: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={clsx("type-label flex items-center gap-3 text-mute", className)}>
      <span className="text-blood">{index}</span>
      <span aria-hidden className="h-px w-8 bg-rule" />
      <span>{children}</span>
    </p>
  );
}
