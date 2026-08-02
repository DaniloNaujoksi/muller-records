import { clsx } from "clsx";

/**
 * The single page gutter. Sections that bleed to the edge (marquee, full-bleed
 * imagery) skip this on purpose — everything else uses it so the vertical rules
 * in `.grid-rules` line up from section to section.
 */
export function Container({
  children,
  className,
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div className={clsx("mx-auto w-full px-6 md:px-10", wide ? "max-w-[1800px]" : "max-w-[1400px]", className)}>
      {children}
    </div>
  );
}
