import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import ContactForm from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import RequestCall from "@/components/RequestCall";
import { SITE_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL, HOURS, waHref } from "@/components/constants";

export const metadata: Metadata = {
  title: "Contact — Book Carpet Cleaning in the UAE",
  description: "Book carpet, rug, sofa or mattress cleaning across Dubai, Sharjah, Ajman and the UAE. Call, WhatsApp or send us a message for a free quote.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function Contact() {
  return (
    <div className="page">
      <Nav />
      <main>
        <section className="sub-hero">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="sep">/</span>
            <span style={{ color: "var(--green)" }}>Contact</span>
          </nav>
          <h1>Book your free inspection</h1>
          <p className="lead">Call, WhatsApp or send us a message — we&apos;ll get back with a no-obligation quote within the hour. Same-day service available across Dubai, Sharjah and Ajman.</p>
          <div className="cta-row">
            <a className="btn-green" href={waHref()} target="_blank" rel="noopener">Get a Free Quote via WhatsApp →</a>
            <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
            <RequestCall className="btn-outline" />
          </div>
        </section>

        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 70px" }}>
          <div className="about-hero-img" style={{ marginBottom: 28 }}>
            <Image src="/images/services/sofa-upholstery-cleaning-card-dubai.webp" alt="Al Haya carpet cleaning technician performing deep extraction cleaning in a Dubai home" width={1280} height={520} loading="lazy" style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Get in touch</h3>
              <ul className="contact-list">
                <li><span className="ic"><Icon name="phone" /></span><div><b>Call us</b><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></div></li>
                <li><span className="ic"><Icon name="whatsapp" /></span><div><b>WhatsApp</b><a href={waHref()} target="_blank" rel="noopener">Chat for a free quote</a></div></li>
                <li><span className="ic"><Icon name="mail" /></span><div><b>Email</b><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></li>
                <li><span className="ic"><Icon name="clock" /></span><div><b>Hours</b><span>{HOURS}</span></div></li>
                <li><span className="ic"><Icon name="pin" /></span><div><b>Coverage</b><span>All 7 Emirates, UAE</span></div></li>
                <li><span className="ic"><Icon name="star" /></span><div><b>Google Business</b><a href="https://maps.app.goo.gl/Q4Qjx7GFZKZ1DSfz9" target="_blank" rel="noopener">View on Google Maps</a></div></li>
              </ul>
            </div>
            <div className="contact-card">
              <h3>Request a quote</h3>
              <ContactForm />
            </div>
          </div>

          {/* Google Business Profile */}
          <div className="c-gmb-section">
            <div className="c-gmb-card">
              <div className="c-gmb-top">
                <div className="g-icon">G</div>
                <div className="c-gmb-meta">
                  <span className="c-gmb-name">Alhaya Cleaning on Google</span>
                  <span className="c-gmb-lbl">Carpet Cleaning Services Dubai</span>
                </div>
              </div>
              <div className="c-gmb-rating">
                <span className="c-gmb-rate">4.3</span>
                <div>
                  <div className="c-gmb-stars">★★★★<span className="c-gmb-star-half">★</span></div>
                  <div className="c-gmb-rev-count">Based on Google reviews</div>
                </div>
              </div>
              <div className="c-gmb-reviews">
                <div className="c-gmb-review">
                  <div className="c-gmb-review-head">
                    <strong>Sarah M.</strong>
                    <span>Google · Dubai</span>
                  </div>
                  <p>&quot;Best carpet cleaning service in Dubai. My carpets look brand new!&quot;</p>
                </div>
                <div className="c-gmb-review">
                  <div className="c-gmb-review-head">
                    <strong>Ahmed K.</strong>
                    <span>Google · Sharjah</span>
                  </div>
                  <p>&quot;Professional team, on time, and excellent stain removal results.&quot;</p>
                </div>
                <div className="c-gmb-review">
                  <div className="c-gmb-review-head">
                    <strong>Fatima R.</strong>
                    <span>Google · Ajman</span>
                  </div>
                  <p>&quot;Removed years of carpet odor completely. Highly recommend Alhaya.&quot;</p>
                </div>
              </div>
              <div className="c-gmb-cta">
                <a href="https://www.google.com/maps/place/Madinat+Alhaya+Building+Cleaning+Services/@24.749148,55.4692488,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f6dc22e5a8d45:0x5f56211bd03d48bd!8m2!3d24.749148!4d55.4692488!16s%2Fg%2F11fjs0c7kn" target="_blank" rel="noopener">View on Google Maps →</a>
                <a href="https://www.google.com/maps/place/Madinat+Alhaya+Building+Cleaning+Services/@24.749148,55.4692488,17z/data=!4m8!3m7!1s0x3e5f6dc22e5a8d45:0x5f56211bd03d48bd!8m2!3d24.749148!4d55.4692488!9m1!1b1!16s%2Fg%2F11fjs0c7kn?hl=en" target="_blank" rel="noopener">Leave a Google Review ★</a>
              </div>
            </div>
            <div className="c-map">
              <iframe
                title="Madinat Alhaya Building Cleaning Services — Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.5!2d55.4692488!3d24.749148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dc22e5a8d45%3A0x5f56211bd03d48bd!2sMadinat%20Alhaya%20Building%20Cleaning%20Services!5e0!3m2!1sen!2sae!4v1719900000000!5m2!1sen!2sae"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Fab />
    </div>
  );
}
