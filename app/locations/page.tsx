import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import RevealInit from "@/components/RevealInit";
import PageHero from "@/components/PageHero";
import PhotoStrip from "@/components/PhotoStrip";
import CtaBand from "@/components/CtaBand";
import { Icon } from "@/components/Icons";
import { LOCATIONS } from "@/lib/locationsData";
import { PHONE_DISPLAY, PHONE_TEL, waHref, SITE_URL } from "@/components/constants";

export const metadata: Metadata = {
  title: "Service Areas — Carpet Cleaning Across the UAE",
  description: "Carpet, rug, sofa and mattress cleaning at your home or office in all 7 emirates: Dubai, Sharjah, Ajman, Abu Dhabi, RAK, UAQ, Fujairah and Dibba.",
  alternates: { canonical: `${SITE_URL}/locations` },
};

export default function LocationsHub() {
  return (
    <div className="page rp">
      <Nav />
      <main>
        <PageHero
          variant="center"
          crumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}
          eyebrow="Locations"
          title="Serving All 7 Emirates, Including Dibba"
          lead="Professional carpet, rug, sofa and mattress cleaning delivered to your doorstep — anywhere in the UAE."
          actions={
            <>
              <a className="rb-gold" href={waHref()} target="_blank" rel="noopener"><Icon name="whatsapp" /> Get Free Quote</a>
              <a className="rb-line" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> Call {PHONE_DISPLAY}</a>
            </>
          }
          chips={LOCATIONS.map((l) => l.name)}
        />

        {/* Bento grid of emirates */}
        <section className="rh-sec" style={{ paddingTop: 20 }}>
          <div className="rh-wrap">
            <div className="rh-head" data-reveal>
              <p className="rh-eyebrow">Coverage</p>
              <h2 className="rh-h2">Areas We Serve</h2>
            </div>
            <div className="bento">
              {LOCATIONS.map((l) => (
                <Link key={l.slug} href={`/locations/${l.slug}`} className="rh-area" data-reveal="zoom">
                  <Image src={l.image} alt={`Carpet cleaning in ${l.name}`} fill sizes="(max-width:720px) 50vw, 33vw" />
                  <span className="rh-area-body">
                    <b>{l.name}</b>
                    <small><Icon name="clock" /> {l.resp} response · {l.areas.slice(0, 3).join(", ")}</small>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="rh-strip-sec" style={{ paddingBottom: 20 }}>
          <p className="rh-strip-label"><span className="rh-dot" /> Real photos from our jobs</p>
          <PhotoStrip />
        </section>

        <CtaBand title="Wherever you are in the UAE" text="Tell us your area on WhatsApp and send a photo of the carpet or rug. We reply with a free quote and a time for our team to come to you." />
      </main>
      <Footer />
      <Fab />
      <RevealInit />
    </div>
  );
}
