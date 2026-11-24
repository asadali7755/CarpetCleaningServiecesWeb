import type { Metadata } from "next";
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
import { CLIPS, FRAMES, ALL_PAIRS } from "@/lib/media";
import { SITE_URL, PHONE_DISPLAY, PHONE_TEL, waHref } from "@/components/constants";

export const metadata: Metadata = {
  title: "About Us — Carpet Cleaning Team in the UAE",
  description: "Al Haya cleans carpets, rugs and upholstery at homes and offices in all 7 UAE emirates, with a trained, background-checked team and eco-friendly products.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const WHY = [
  { t: "Trained & background-checked crew", d: "Trained, background-checked technicians who come to your home or office.", icon: "shield" },
  { t: "Eco-friendly & safe", d: "Non-toxic products that are safe for children, pets and sensitive skin.", icon: "leaf" },
  { t: "Same-day service", d: "Book in the morning, enjoy fresh carpets the same evening across Dubai.", icon: "clock" },
  { t: "100% satisfaction", d: "Not happy with a spot? We re-clean it free — written guarantee on every job.", icon: "thumbup" },
  { t: "Transparent pricing", d: "Clear fixed quote before we start. No hidden charges, ever.", icon: "clipboard" },
  { t: "All of the UAE", d: "Coverage across all seven emirates, residential and commercial.", icon: "pin" },
];

export default function About() {
  return (
    <div className="page rp rp-carpet">
      <CarpetBackdrop variant="mihrab" />
      <Nav />
      <main>
        <PageHero
          variant="split"
          crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
          eyebrow="About Al Haya"
          title="Trusted carpet care, across the UAE"
          lead="Al Haya Carpet Services is an on-demand carpet, rug, sofa and mattress cleaning company built on one promise — spotless results and healthier homes, delivered fast and done right."
          actions={
            <>
              <a className="rb-gold" href={waHref()} target="_blank" rel="noopener"><Icon name="whatsapp" /> Get a free quote</a>
              <a className="rb-line" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> Call {PHONE_DISPLAY}</a>
              <RequestCall className="rb-line" />
            </>
          }
          media={
            <div className="ab-stack">
              <div className="ab-a"><AutoVideo src={CLIPS.rug.src} poster={CLIPS.rug.poster} label={CLIPS.rug.label} eager /></div>
              <div className="ab-b"><Image src={FRAMES.strip.src} alt={FRAMES.strip.alt} fill sizes="240px" /></div>
            </div>
          }
        />

        {/* Story — big quote + two paragraphs */}
        <section className="rh-sec ab-story">
          <div className="rh-wrap">
            <blockquote className="ab-quote" data-reveal="blur">
              &ldquo;Spotless results and healthier homes, delivered fast and done right.&rdquo;
            </blockquote>
            <div className="mg-grid ab-text">
              <p data-reveal="left">Carpets, rugs and upholstery trap dust, allergens and bacteria that ordinary vacuuming never reaches. We combine deep shampoo extraction, high-temperature steam sanitisation and careful stain treatment to restore your soft furnishings to a fresh, hygienic, like-new condition.</p>
              <p data-reveal="right">From a single rug to a full villa or a multi-floor office, our trained crew brings professional cleaning equipment and eco-friendly products to every job — with pickup-and-return for rugs and curtains, and convenient on-site service for carpets, sofas and mattresses.</p>
            </div>
          </div>
        </section>

        {/* Values — bento */}
        <section className="rh-sec rh-services">
          <div className="rh-wrap">
            <div className="rh-head" data-reveal>
              <p className="rh-eyebrow">What you can expect</p>
              <h2 className="rh-h2">Why families and offices choose us</h2>
            </div>
            <ul className="ab-bento" data-stagger>
              {WHY.map((w) => (
                <li key={w.t} className="ab-cell">
                  <span className="rh-ic"><Icon name={w.icon} /></span>
                  <b>{w.t}</b>
                  <p>{w.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Real work */}
        <section className="rh-sec rh-results">
          <div className="rh-wrap rh-results-grid">
            <div data-reveal="left">
              <p className="rh-eyebrow">Our work</p>
              <h2 className="rh-h2">See what our team does</h2>
              <p className="rh-sub">Real before and after photos from our own jobs. Drag the handle to compare.</p>
              <figure className="ab-frame">
                <Image src={FRAMES.rug.src} alt={FRAMES.rug.alt} width={FRAMES.rug.w} height={FRAMES.rug.h} sizes="(max-width:1000px) 100vw, 480px" />
              </figure>
            </div>
            <div data-reveal="right"><BeforeAfter pairs={ALL_PAIRS} /></div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
      <Fab />
      <RevealInit />
    </div>
  );
}
