import Image from "next/image";
import { clsx } from "clsx";
import vinyl from "@/assets/photos/muller-2037-vinyl.png";

/**
 * Müller 2037, cut out of its sleeve shot and sunk into the page.
 *
 * This is the one place where red is not a marker — it is the record itself,
 * and at 25% over black it settles into a deep maroon that stays inside the
 * palette instead of competing with it. Keep it to a couple of sections: a
 * rotating disc behind every block would turn the site's one flourish into
 * wallpaper.
 *
 * The rotation is CSS-only (`animate-spin-slow`), which the global
 * reduced-motion rule already stops dead.
 */
export function VinylBackdrop({
  className,
  side = "right",
}: {
  className?: string;
  /** Which edge the disc bleeds off. */
  side?: "left" | "right";
}) {
  return (
    <div
      aria-hidden
      className={clsx(
        // z-0 rather than a negative index: the parent section paints no
        // background of its own, so a negative index would drop the disc behind
        // the black page body and out of sight. Content sits on `relative`.
        "pointer-events-none absolute top-1/2 z-0 aspect-square w-[85vw] max-w-[860px] -translate-y-1/2",
        side === "right" ? "-right-[28%]" : "-left-[28%]",
        className,
      )}
    >
      <Image
        src={vinyl}
        alt=""
        sizes="(min-width: 1024px) 860px, 85vw"
        className="animate-spin-slow h-full w-full object-contain opacity-25"
      />
    </div>
  );
}
