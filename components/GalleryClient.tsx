"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Icon } from "./Icons";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, type GalleryCategory, type GalleryItem } from "@/lib/galleryData";

function ScrollVideo({ src, poster, alt }: { src: string; poster?: string; alt: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.play().catch(() => {}); else el.pause(); },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={alt}
      className="gal-video"
    />
  );
}

function Lightbox({ item, onClose, onPrev, onNext }: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lb-overlay" onClick={onClose}>
      <div className="lb-content" onClick={(e) => e.stopPropagation()}>
        <button className="lb-close" onClick={onClose} aria-label="Close"><Icon name="x" /></button>
        <button className="lb-prev" onClick={onPrev} aria-label="Previous">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" /></svg>
        </button>
        <button className="lb-next" onClick={onNext} aria-label="Next">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" /></svg>
        </button>
        {item.type === "video" ? (
          <video src={item.src} poster={item.poster} controls autoPlay playsInline className="lb-media" />
        ) : (
          <Image src={item.src} alt={item.alt} width={1200} height={800} className="lb-media" style={{ objectFit: "contain" }} />
        )}
        <div className="lb-caption">
          <span className="lb-title">{item.title}</span>
        </div>
      </div>
    </div>
  );
}

export default function GalleryClient() {
  const [active, setActive] = useState<GalleryCategory>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const categoryFiltered = active === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === active);
  const videos = categoryFiltered.filter((i) => i.type === "video");
  const images = categoryFiltered.filter((i) => i.type === "image");
  // Combined order (videos first, then images) drives the lightbox index so
  // arrow-key / prev-next navigation moves smoothly across both sections.
  const combined = [...videos, ...images];

  const openVideoLightbox = useCallback((idx: number) => setLightbox(idx), []);
  const openImageLightbox = useCallback((idx: number) => setLightbox(videos.length + idx), [videos.length]);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevItem = useCallback(() => setLightbox((i) => (i !== null ? (i - 1 + combined.length) % combined.length : null)), [combined.length]);
  const nextItem = useCallback(() => setLightbox((i) => (i !== null ? (i + 1) % combined.length : null)), [combined.length]);

  return (
    <>
      <style>{`
        .gal-video-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .gal-video-grid .gal-card { border-top: 4px solid var(--coral); aspect-ratio: 9 / 16; }
        .gal-photo-grid { columns: 3; column-gap: 14px; }
        .gal-photo-grid .gal-card { border-top: 4px solid var(--teal); }
        .gal-section-head { text-align: center; margin-bottom: 28px; }
        .gal-section-head h2 {
          font-family: var(--display); font-weight: 700;
          font-size: clamp(26px, 3.2vw, 38px); letter-spacing: -0.01em; line-height: 1.15;
        }
        .gal-video-section { margin-bottom: 64px; }
        @media (max-width: 900px) {
          .gal-video-grid { grid-template-columns: repeat(2, 1fr); }
          .gal-photo-grid { columns: 2; }
        }
        @media (max-width: 640px) {
          .gal-video-grid { grid-template-columns: 1fr; gap: 14px; }
          .gal-photo-grid { columns: 1; column-gap: 10px; }
        }
      `}</style>

      {/* Stats bar */}
      <div className="gal-stats">
        <div className="gal-stat"><span className="gal-stat-num" style={{ color: "var(--teal)" }}>7</span><span className="gal-stat-label">Videos</span></div>
        <div className="gal-stat-div" />
        <div className="gal-stat"><span className="gal-stat-num" style={{ color: "var(--teal)" }}>25+</span><span className="gal-stat-label">Photos</span></div>
        <div className="gal-stat-div" />
        <div className="gal-stat"><span className="gal-stat-num" style={{ color: "var(--teal)" }}>7</span><span className="gal-stat-label">Emirates</span></div>
        <div className="gal-stat-div" />
        <div className="gal-stat"><span className="gal-stat-num" style={{ color: "var(--teal)" }}>100%</span><span className="gal-stat-label">Real Work</span></div>
      </div>

      {/* Filter tabs */}
      <div className="gal-filters">
        {GALLERY_CATEGORIES.map((c) => (
          <button
            key={c.key}
            className={`gal-tab${active === c.key ? " gal-tab-active" : ""}`}
            onClick={() => setActive(c.key)}
          >
            {c.label}
            {active === c.key && (
              <span className="gal-tab-count">
                {c.key === "all" ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter((i) => i.category === c.key).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* VIDEO SECTION */}
      {videos.length > 0 && (
        <div className="gal-video-section">
          <div className="gal-section-head">
            <p className="eyebrow purple">Videos</p>
            <h2 className="grad-text">Cleaning Process Videos</h2>
          </div>
          <div className="gal-video-grid">
            {videos.map((item, idx) => (
              <div
                key={item.id}
                className="gal-card gal-card-video"
                onClick={() => openVideoLightbox(idx)}
              >
                <ScrollVideo src={item.src} poster={item.poster} alt={item.alt} />
                <div className="gal-play-badge">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><polygon fill="currentColor" points="8,5 20,12 8,19" /></svg>
                </div>
                <div className="gal-card-overlay">
                  <span className="gal-card-title">{item.title}</span>
                  <span className="gal-card-cat">{GALLERY_CATEGORIES.find((c) => c.key === item.category)?.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* IMAGE SECTION */}
      {images.length > 0 && (
        <div className="gal-photo-section">
          <div className="gal-section-head">
            <p className="eyebrow teal">Photos</p>
            <h2 className="grad-text">Before &amp; After Results</h2>
          </div>
          <div className="gal-photo-grid">
            {images.map((item, idx) => (
              <div
                key={item.id}
                className={`gal-card${item.aspect === "portrait" ? " gal-card-tall" : ""}`}
                onClick={() => openImageLightbox(idx)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width:600px) 100vw,(max-width:900px) 50vw,33vw"
                  className="gal-img"
                />
                <div className="gal-card-overlay">
                  <span className="gal-card-title">{item.title}</span>
                  <span className="gal-card-cat">{GALLERY_CATEGORIES.find((c) => c.key === item.category)?.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && combined[lightbox] && (
        <Lightbox item={combined[lightbox]} onClose={closeLightbox} onPrev={prevItem} onNext={nextItem} />
      )}
    </>
  );
}
