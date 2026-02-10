import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import type { ListingGalleryImage } from "@/globals/types/listing";
import { urlFor } from "@/lib/sanityImage";

type Props = {
  images: ListingGalleryImage[];
  // Pass a function from Astro if you want to build Sanity URLs there
  getUrl?: (img: ListingGalleryImage) => string;
  getAlt?: (img: ListingGalleryImage, index: number) => string;
};

export default function ListingGalleryLightbox({
  images,
  getUrl,
  getAlt,
}: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = useMemo(() => {
    return (images ?? [])
      .map((img, i) => {
        const src = urlFor(img?.image).url() || "";
        if (!src) return null;

        return {
          src,
          alt: getAlt
            ? getAlt(img, i)
            : (img.image.alt ?? img.caption ?? `Listing image ${i + 1}`),
          description: img.caption ?? undefined,
        };
      })
      .filter(Boolean) as { src: string; alt?: string; description?: string }[];
  }, [images, getUrl, getAlt]);

  if (!slides.length) return null;

  return (
    <div className="w-full mb-24">
      {/* Simple grid preview */}
      <div className="flex items-center justify-center gap-4">
        {slides.slice(0, 3).map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            style={{
              border: 0,
              padding: 0,
              background: "transparent",
              cursor: "pointer",
            }}
            aria-label={`Open image ${i + 1}`}
          >
            <img
              src={s.src}
              alt={s.alt || `Listing image ${i + 1}`}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                borderRadius: 10,
                display: "block",
              }}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <button
          type="button"
          onClick={() => {
            setIndex(0);
            setOpen(true);
          }}
          className="btn-primary"
        >
          SEE FULL GALLERY
        </button>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
        // optional niceties:
        carousel={{ finite: false }}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
}
