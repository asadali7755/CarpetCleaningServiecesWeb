// Decorative Arabic / Persian backdrop behind a whole page. Each page type has
// its own pattern and motion (see "Royal carpet backdrops" in royal.css):
//   royal      — Persian carpet field + turning medallion + woven borders (home)
//   kilim      — stepped kilim diamonds rolling upwards (services)
//   mashrabiya — 8-point star lattice + counter-turning 12-point rosette (locations)
//   zellige    — Moroccan star-and-cross tiles that gently breathe (contact)
//   paisley    — Persian boteh drifting sideways (gallery)
//   vine       — floral damask vine drifting down and swaying (blog, guides)
//   mihrab     — rows of mihrab arches gliding sideways (about)
// Pure CSS + small SVG files; an ivory shade on top keeps text readable.
export type BackdropVariant = "royal" | "kilim" | "mashrabiya" | "zellige" | "paisley" | "vine" | "mihrab";

const HAS_FOCAL: BackdropVariant[] = ["royal", "mashrabiya"];
const HAS_BORDER: BackdropVariant[] = ["royal", "kilim"];

export default function CarpetBackdrop({ variant = "royal" }: { variant?: BackdropVariant }) {
  return (
    <div className="carpet-bg" data-v={variant} aria-hidden="true">
      <div className="carpet-field" />
      {HAS_FOCAL.includes(variant) && <div className="carpet-medallion" />}
      {HAS_BORDER.includes(variant) && (
        <>
          <div className="carpet-border carpet-border-l" />
          <div className="carpet-border carpet-border-r" />
        </>
      )}
      <div className="carpet-shade" />
    </div>
  );
}
