import Image, { type StaticImageData } from "next/image";
import { clsx } from "clsx";

/**
 * Every photograph on this site is monochrome. The palette rule is that red
 * marks one thing per screen — a full-colour press shot would fight that and
 * win, so the images are desaturated and pushed for contrast instead, which
 * also hides how differently the source shots were lit and graded.
 *
 * `caption` prints as a mono label under the frame, in the same voice as the
 * catalogue numbers.
 */
export function Photo({
  src,
  alt,
  caption,
  className,
  imageClassName,
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  src: StaticImageData;
  alt: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure className={clsx("group", className)}>
      <div className="scanlines relative overflow-hidden border border-rule bg-smoke">
        <Image
          src={src}
          alt={alt}
          placeholder="blur"
          priority={priority}
          sizes={sizes}
          className={clsx(
            "w-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-[1.03]",
            imageClassName,
          )}
        />
      </div>
      {caption && (
        <figcaption className="type-label mt-3 flex items-center gap-3 text-mute">
          <span aria-hidden className="h-px w-6 bg-blood" />
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
