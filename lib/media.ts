// Real job media (team's own photos and videos) used across the redesign.
// Keep this list to real media only; AI or stock images must not appear as
// "results", "before/after" or "real work".
import type { BAPair } from "@/components/BeforeAfter";

export interface Clip { src: string; poster: string; label: string; tag: string }

export const CLIPS: Record<string, Clip> = {
  rug: { src: "/media/rug-shampoo-machine-dubai.mp4", poster: "/media/rug-shampoo-machine-dubai-poster.webp", label: "Rotary shampoo on a living-room rug", tag: "Rug shampoo" },
  fitted: { src: "/media/fitted-carpet-extraction-dubai.mp4", poster: "/media/fitted-carpet-extraction-dubai-poster.webp", label: "Hot-water extraction on a fitted carpet", tag: "Extraction" },
  office: { src: "/media/office-carpet-shampoo-uae.mp4", poster: "/media/office-carpet-shampoo-uae-poster.webp", label: "Shampoo machine on an office carpet", tag: "Office carpet" },
};

export const PAIRS: Record<string, BAPair> = {
  extraction: { before: "/media/ba-extraction-before.jpg", after: "/media/ba-extraction-after.jpg", title: "Deep extraction and rinse — living-room carpet", w: 577, h: 683 },
  shampoo: { before: "/media/ba-shampoo-before.jpg", after: "/media/ba-shampoo-after.jpg", title: "Deep shampoo and scrubbing — fitted carpet", w: 540, h: 690 },
  spot: { before: "/media/ba-spot-stain-before.jpg", after: "/media/ba-spot-stain-after.jpg", title: "Spot stain removal and deep extraction", w: 553, h: 650 },
  deep: { before: "/media/ba-deep-clean-before.jpg", after: "/media/ba-deep-clean-after.jpg", title: "Deep cleaning of a heavily soiled carpet", w: 580, h: 390 },
};

export const ALL_PAIRS: BAPair[] = [PAIRS.extraction, PAIRS.shampoo, PAIRS.spot, PAIRS.deep];

export const FRAMES = {
  rug: { src: "/media/rug-shampoo-lather-dubai.jpg", alt: "Rug being shampooed with a rotary machine", w: 848, h: 480 },
  strip: { src: "/media/fitted-carpet-clean-strip-dubai.jpg", alt: "Clean strip left by hot-water extraction on a fitted carpet", w: 352, h: 640 },
  office: { src: "/media/office-carpet-cleaning-uae.jpg", alt: "Office carpet being cleaned with a shampoo machine", w: 352, h: 640 },
};

/** Which real clip and before/after pair suits each service page. */
export const SERVICE_MEDIA: Record<string, { clip?: Clip; pair?: BAPair; pairs?: BAPair[] }> = {
  "carpet-cleaning": { clip: CLIPS.fitted, pair: PAIRS.shampoo, pairs: [PAIRS.shampoo, PAIRS.extraction, PAIRS.deep] },
  "stain-removal": { clip: CLIPS.fitted, pair: PAIRS.spot, pairs: [PAIRS.spot, PAIRS.deep] },
  "odor-removal": { clip: CLIPS.fitted, pair: PAIRS.extraction, pairs: [PAIRS.extraction, PAIRS.deep] },
  "rug-cleaning": { clip: CLIPS.rug, pair: PAIRS.extraction },
  "commercial-carpet-cleaning": { clip: CLIPS.office, pair: PAIRS.deep, pairs: [PAIRS.deep, PAIRS.spot] },
  "sofa-upholstery-cleaning": {},
};
