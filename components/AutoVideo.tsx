"use client";

import { useEffect, useRef, useState } from "react";

// Muted, looping job clip that only downloads and plays while it is on screen.
// Nothing is fetched until the clip scrolls into view (the poster shows first),
// it pauses when it leaves the screen, and it does not autoplay for visitors
// who prefer reduced motion or have Data Saver on: they get a play button.
export default function AutoVideo({
  src,
  poster,
  label,
  className,
  eager = false,
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
  /** Load the poster straight away (only for videos at the top of the page). */
  eager?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [manual, setManual] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [showPoster, setShowPoster] = useState(eager);

  // Below-the-fold posters load only when the video gets close to the screen.
  useEffect(() => {
    if (eager) return;
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShowPoster(true); io.disconnect(); }
    }, { rootMargin: "400px" });
    io.observe(v);
    return () => io.disconnect();
  }, [eager]);

  // Attach the source only when needed, directly on the element, so play()
  // never runs against an empty <video>.
  const load = (v: HTMLVideoElement) => {
    if (!v.getAttribute("src")) v.setAttribute("src", src);
  };

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches || !!conn?.saveData;
    if (reduce) {
      setManual(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          load(v);
          v.play().then(() => setPlaying(true)).catch(() => setManual(true));
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  const start = () => {
    const v = ref.current;
    if (!v) return;
    load(v);
    v.play().then(() => { setPlaying(true); setManual(false); }).catch(() => {});
  };

  return (
    <div className={`av ${className || ""}`}>
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="none"
        poster={showPoster ? poster : undefined}
        aria-label={label}
      />
      {manual && !playing && (
        <button className="av-play" onClick={start} aria-label={`Play video: ${label}`}>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
        </button>
      )}
    </div>
  );
}
