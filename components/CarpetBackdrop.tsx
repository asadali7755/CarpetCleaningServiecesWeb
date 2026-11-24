// Royal Persian / Arabic carpet behind the whole page: a slowly drifting
// field pattern, a large medallion that turns very slowly, a woven border
// at the sides, and an ivory shade on top so text stays easy to read.
// Pure CSS + two small SVG files; decorative only (aria-hidden).
export default function CarpetBackdrop() {
  return (
    <div className="carpet-bg" aria-hidden="true">
      <div className="carpet-field" />
      <div className="carpet-medallion" />
      <div className="carpet-border carpet-border-l" />
      <div className="carpet-border carpet-border-r" />
      <div className="carpet-shade" />
    </div>
  );
}
