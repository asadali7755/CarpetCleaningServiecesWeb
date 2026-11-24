import Image from "next/image";

// Endless, slowly moving strip of real job photos. Pure CSS animation (no JS);
// it pauses on hover and stops for visitors who prefer reduced motion.
const PHOTOS = [
  { src: "/media/ba-extraction-after.jpg", alt: "Living-room carpet after deep extraction" },
  { src: "/media/rug-shampoo-lather-dubai.jpg", alt: "Rug being shampooed with a rotary machine" },
  { src: "/media/ba-shampoo-after.jpg", alt: "Fitted carpet after deep shampoo, fresh pile lines" },
  { src: "/media/fitted-carpet-clean-strip-dubai.jpg", alt: "Clean strip left by hot-water extraction on a fitted carpet" },
  { src: "/media/ba-spot-stain-after.jpg", alt: "Carpet after spot stain removal" },
  { src: "/media/office-carpet-cleaning-uae.jpg", alt: "Office carpet being cleaned with a shampoo machine" },
  { src: "/media/ba-deep-clean-after.jpg", alt: "Heavily soiled carpet after deep cleaning" },
];

export default function PhotoStrip() {
  const row = [...PHOTOS, ...PHOTOS];
  return (
    <div className="strip" aria-label="Photos from our recent carpet cleaning jobs">
      <div className="strip-track">
        {row.map((p, i) => (
          <figure className="strip-item" key={i} aria-hidden={i >= PHOTOS.length ? "true" : undefined}>
            <Image src={p.src} alt={i >= PHOTOS.length ? "" : p.alt} fill sizes="260px" />
          </figure>
        ))}
      </div>
    </div>
  );
}
