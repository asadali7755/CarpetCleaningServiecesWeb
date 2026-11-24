import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import RevealInit from "@/components/RevealInit";
import PageHero from "@/components/PageHero";
import AutoVideo from "@/components/AutoVideo";
import ProcessSteps from "@/components/ProcessSteps";
import QuoteCallSection from "@/components/QuoteCallSection";
import RequestCall from "@/components/RequestCall";
import { Icon } from "@/components/Icons";
import { SERVICES } from "@/lib/servicesData";
import { CLIPS, FRAMES, PAIRS } from "@/lib/media";
import { waHref, SITE_URL } from "@/components/constants";

export const metadata: Metadata = {
  title: "Our Services — Carpet, Rug, Sofa & Mattress Cleaning",
  description: "Carpet, rug, sofa and upholstery, mattress, office and curtain cleaning at your home or office in Dubai, Sharjah, Ajman and across the UAE. Free quote.",
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesHub() {
  return (
    <div className="page rp">
      <Nav />
      <main>
        <PageHero
          variant="center"
          crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
          eyebrow="Our Services"
          title="Carpet, Rug & Upholstery Cleaning Services"
          lead="Carpet, rug and upholstery cleaning at your home or office across the UAE, with eco-friendly products that are safe for kids and pets."
          actions={
            <>
              <a className="rb-gold" href={waHref()} target="_blank" rel="noopener"><Icon name="whatsapp" /> WhatsApp</a>
              <RequestCall className="rb-line" />
              <Link className="rb-line" href="/contact">Get a Quote</Link>
            </>
          }
          media={
            <div className="collage" data-stagger>
              <div><AutoVideo src={CLIPS.rug.src} poster={CLIPS.rug.poster} label={CLIPS.rug.label} eager /></div>
              <div><Image src={FRAMES.strip.src} alt={FRAMES.strip.alt} fill sizes="(max-width:720px) 50vw, 300px" /></div>
              <div><Image src={PAIRS.shampoo.after} alt="Fitted carpet after deep shampoo by our team" fill sizes="(max-width:720px) 50vw, 400px" /></div>
            </div>
          }
        />

        {/* Zig-zag service rows */}
        <section className="rh-sec">
          <div className="rh-wrap zz">
            {SERVICES.map((s, i) => (
              <div className="zz-row" key={s.slug}>
                <Link href={`/services/${s.slug}`} className="zz-media" data-reveal={i % 2 ? "right" : "left"}>
                  <Image src={s.cardImg} alt={`${s.name} — Al Haya Carpet Cleaning`} fill sizes="(max-width:1000px) 100vw, 600px" />
                  <span className="zz-num">{s.num}</span>
                </Link>
                <div className="zz-copy" data-reveal={i % 2 ? "left" : "right"}>
                  <span className="rh-ic"><Icon name={s.icon} /></span>
                  <h2>{s.name}</h2>
                  <p>{s.intro}</p>
                  <div className="rh-cta">
                    <Link className="rb-gold" href={`/services/${s.slug}`}>Learn More →</Link>
                    <a className="rb-line" href={waHref(`Hello, I'd like a quote for ${s.name}.`)} target="_blank" rel="noopener"><Icon name="whatsapp" /> Quick quote</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ProcessSteps />
        <QuoteCallSection />
      </main>
      <Footer />
      <Fab />
      <RevealInit />
    </div>
  );
}
