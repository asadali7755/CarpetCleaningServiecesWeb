import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import CarpetBackdrop from "@/components/CarpetBackdrop";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import RevealInit from "@/components/RevealInit";
import PageHero from "@/components/PageHero";
import AutoVideo from "@/components/AutoVideo";
import BeforeAfter from "@/components/BeforeAfter";
import CtaBand from "@/components/CtaBand";
import RequestCall from "@/components/RequestCall";
import { Icon } from "@/components/Icons";
import { CLIPS, FRAMES, ALL_PAIRS, PAIRS } from "@/lib/media";
import { SITE_URL, BRAND, waHref } from "@/components/constants";

export const metadata: Metadata = {
  title: "Gallery — Real Carpet Cleaning Results Dubai & UAE",
  description:
    "Photos and videos of our carpet, rug and sofa cleaning jobs in Dubai and across the UAE: deep shampoo, stain removal and rug care, before and after.",
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: "Gallery — Real Carpet Cleaning Results | Alhaya Cleaning Services",
    description: "See real carpet cleaning results — photos and videos of deep shampoo cleaning, stain removal, and rug care across Dubai & UAE.",
    url: `${SITE_URL}/gallery`,
    siteName: BRAND,
    type: "website",
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Carpet Cleaning Gallery — Real Work Results",
  description: "Professional carpet cleaning photos and videos showing real results across Dubai and UAE by Alhaya Cleaning Services.",
  url: `${SITE_URL}/gallery`,
  publisher: {
    "@type": "LocalBusiness",
    name: BRAND,
    url: SITE_URL,
  },
};

// Only the team's own photos and videos (see lib/media.ts).
type Tile =
  | { kind: "video"; src: string; poster: string; label: string; wide?: boolean }
  | { kind: "img"; src: string; alt: string; w: number; h: number; cap: string };

const TILES: Tile[] = [
  { kind: "video", src: CLIPS.rug.src, poster: CLIPS.rug.poster, label: CLIPS.rug.label, wide: true },
  { kind: "img", src: PAIRS.extraction.after, alt: "Living-room carpet after deep extraction", w: 577, h: 683, cap: "After deep extraction" },
  { kind: "video", src: CLIPS.fitted.src, poster: CLIPS.fitted.poster, label: CLIPS.fitted.label },
  { kind: "img", src: PAIRS.shampoo.before, alt: "Fitted carpet before deep shampoo", w: 540, h: 690, cap: "Before — fitted carpet" },
  { kind: "img", src: PAIRS.shampoo.after, alt: "Fitted carpet after deep shampoo", w: 540, h: 690, cap: "After — fitted carpet" },
  { kind: "img", src: FRAMES.rug.src, alt: FRAMES.rug.alt, w: FRAMES.rug.w, h: FRAMES.rug.h, cap: "Rug shampoo in progress" },
  { kind: "video", src: CLIPS.office.src, poster: CLIPS.office.poster, label: CLIPS.office.label },
  { kind: "img", src: PAIRS.spot.before, alt: "Carpet with a spot stain before treatment", w: 553, h: 650, cap: "Spot stain — before" },
  { kind: "img", src: PAIRS.spot.after, alt: "Carpet after spot stain removal", w: 553, h: 650, cap: "Spot stain — after" },
  { kind: "img", src: FRAMES.strip.src, alt: FRAMES.strip.alt, w: FRAMES.strip.w, h: FRAMES.strip.h, cap: "Clean strip from extraction" },
  { kind: "img", src: PAIRS.deep.before, alt: "Heavily soiled carpet before deep cleaning", w: 580, h: 390, cap: "Deep clean — before" },
  { kind: "img", src: PAIRS.deep.after, alt: "Carpet after deep cleaning", w: 580, h: 390, cap: "Deep clean — after" },
  { kind: "img", src: PAIRS.extraction.before, alt: "Living-room carpet before deep extraction", w: 577, h: 683, cap: "Before deep extraction" },
  { kind: "img", src: FRAMES.office.src, alt: FRAMES.office.alt, w: FRAMES.office.w, h: FRAMES.office.h, cap: "Office carpet shampoo" },
];

export default function GalleryPage() {
  return (
    <div className="page rp rp-carpet">
      <CarpetBackdrop variant="paisley" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />
      <Nav />
      <main>
        <PageHero
          variant="center"
          crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
          eyebrow="Our Gallery"
          title="Our Work Speaks for Itself"
          lead="Real photos and videos from real jobs — no stock images, no filters. Browse our carpet cleaning, stain removal and rug care results from homes and offices in the UAE."
          actions={
            <>
              <a className="rb-gold" href={waHref()} target="_blank" rel="noopener"><Icon name="whatsapp" /> WhatsApp</a>
              <RequestCall className="rb-line" />
              <Link className="rb-line" href="/contact">Get a Quote</Link>
            </>
          }
        />

        {/* Featured before / after */}
        <section className="rh-sec rh-results" style={{ paddingTop: 30 }}>
          <div className="rh-wrap rh-results-grid">
            <div data-reveal="left">
              <p className="rh-eyebrow">Before &amp; after</p>
              <h2 className="rh-h2">Slide to see the difference</h2>
              <p className="rh-sub">Four real jobs. Pick one below the photo and drag the handle.</p>
              <div className="gl-count" data-stagger>
                <div><b>{TILES.filter((t) => t.kind === "video").length}</b><span>Videos</span></div>
                <div><b>{TILES.filter((t) => t.kind === "img").length}</b><span>Photos</span></div>
                <div><b>100%</b><span>Real Work</span></div>
              </div>
            </div>
            <div data-reveal="right"><BeforeAfter pairs={ALL_PAIRS} /></div>
          </div>
        </section>

        {/* Masonry of photos and videos */}
        <section className="rh-sec">
          <div className="rh-wrap">
            <div className="rh-head" data-reveal>
              <p className="rh-eyebrow">Photos &amp; videos</p>
              <h2 className="rh-h2">From our recent jobs</h2>
            </div>
            <div className="gm">
              {TILES.map((t, i) =>
                t.kind === "video" ? (
                  <figure className={`gm-item${t.wide ? " wide" : ""}`} key={i} data-reveal="zoom">
                    <AutoVideo src={t.src} poster={t.poster} label={t.label} />
                    <figcaption>{t.label}</figcaption>
                  </figure>
                ) : (
                  <figure className="gm-item" key={i} data-reveal="zoom">
                    <Image src={t.src} alt={t.alt} width={t.w} height={t.h} sizes="(max-width:720px) 100vw, 400px" />
                    <figcaption>{t.cap}</figcaption>
                  </figure>
                )
              )}
            </div>
          </div>
        </section>

        <CtaBand
          title="Want Results Like These?"
          text="Every photo and video you see is from a real job by our trained professionals. Book your carpet or rug cleaning today and see the difference."
        />
      </main>
      <Footer />
      <Fab />
      <RevealInit />
    </div>
  );
}
