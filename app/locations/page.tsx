import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import { Icon } from "@/components/Icons";
import { LOCATIONS } from "@/lib/locationsData";
import RequestCall from "@/components/RequestCall";
import { SITE_URL, PHONE_DISPLAY, PHONE_TEL, waHref } from "@/components/constants";

export const metadata: Metadata = {
  title: "Service Areas — Carpet Cleaning Across the UAE",
  description: "Al Haya provides carpet, rug, sofa and mattress cleaning across all 7 emirates — Dubai, Sharjah, Ajman, Abu Dhabi, RAK, UAQ and Fujairah. Same-day service.",
  alternates: { canonical: `${SITE_URL}/locations` },
};

export default function LocationsHub() {
  return (
    <div className="page">
      <Nav />
      <main>
        <section className="sub-hero">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="sep">/</span>
            <span style={{ color: "var(--green)" }}>Service Areas</span>
          </nav>
          <h1>Carpet cleaning across all 7 emirates</h1>
          <p className="lead">Daily coverage in Dubai, Sharjah and Ajman, plus scheduled routes to Abu Dhabi, Ras Al Khaimah, Umm Al Quwain and Fujairah. Pickup, clean and return — anywhere in the UAE.</p>
          <div className="cta-row">
            <a className="btn-green" href={waHref()} target="_blank" rel="noopener">Book a free quote →</a>
            <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
            <RequestCall className="btn-outline" />
          </div>
        </section>

        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 70px" }}>
          <div className="rel-grid rel-grid--img">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="rel-card rel-card--img">
                <div className="rel-card-img">
                  <Image src={l.image} alt={`Carpet Cleaning ${l.name}`} fill sizes="(max-width:600px) 100vw,(max-width:900px) 50vw,33vw" />
                </div>
                <div className="rel-card-content">
                  <div className="ic"><Icon name="pin" /></div>
                  <h3>Carpet Cleaning {l.name}</h3>
                  <p>{l.intro.slice(0, 110)}…</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <Fab />
    </div>
  );
}
