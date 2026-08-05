import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import { Icon } from "@/components/Icons";
import { LOCATIONS } from "@/lib/locationsData";
import { PHONE_DISPLAY, PHONE_TEL, waHref, SITE_URL } from "@/components/constants";

export const metadata: Metadata = {
  title: "Service Areas — Carpet Cleaning Across the UAE",
  description: "Al Haya provides carpet, rug, sofa and mattress cleaning across all 7 emirates — Dubai, Sharjah, Ajman, Abu Dhabi, RAK, UAQ and Fujairah. Same-day service.",
  alternates: { canonical: `${SITE_URL}/locations` },
};

const borderColors = ["var(--teal)", "var(--coral)", "var(--purple)", "var(--green)"];

export default function LocationsHub() {
  return (
    <div className="page">
      <Nav />
      <main>
        <section
          className="sub-hero"
          style={{ background: "linear-gradient(180deg, #F5F3FF 0%, #FFFFFF 100%)" }}
        >
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="sep">/</span>
            <span style={{ color: "var(--teal)" }}>Locations</span>
          </nav>
          <p className="eyebrow teal">Locations</p>
          <h1 className="grad-text">Serving All 7 UAE Emirates</h1>
          <p className="lead">
            Professional carpet, rug, sofa and mattress cleaning delivered to your doorstep — anywhere in the UAE.
          </p>
          <div className="cta-row">
            <a className="btn-green" href={waHref()} target="_blank" rel="noopener">Get Free Quote</a>
            <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </section>

        <section className="inner sec-mint" style={{ padding: "60px var(--pad) 70px" }}>
          <div style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
            <h2 className="sec-title" style={{ fontSize: "clamp(22px,3vw,32px)", marginBottom: 30 }}>Areas We Serve</h2>
            <div className="rel-grid">
              {LOCATIONS.map((l, i) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="rel-card"
                  style={{ borderTop: `4px solid ${borderColors[i % borderColors.length]}`, display: "flex", flexDirection: "column", gap: 12 }}
                >
                  <div className="ic"><Icon name="pin" /></div>
                  <h3>{l.name}</h3>
                  <div className="chips-row" style={{ margin: "4px 0" }}>
                    {l.areas.slice(0, 4).map((a) => (
                      <span key={a} className="chip-link" style={{ pointerEvents: "none" }}>{a}</span>
                    ))}
                  </div>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--green)",
                      background: "rgba(16,185,129,0.1)",
                      padding: "4px 10px",
                      borderRadius: 999,
                      width: "fit-content",
                    }}
                  >
                    <Icon name="clock" /> {l.resp} response
                  </span>
                  <span style={{ color: "var(--teal)", fontWeight: 600, fontSize: 14, marginTop: "auto" }}>View Coverage →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Fab />
    </div>
  );
}
