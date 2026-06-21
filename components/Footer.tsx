import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icons";
import { BRAND, PHONE_DISPLAY, PHONE_TEL, EMAIL, HOURS } from "./constants";
import { SERVICES } from "@/lib/servicesData";
import { LOCATIONS } from "@/lib/locationsData";

export default function Footer() {
  return (
    <footer className="ft" id="contact">
      <div className="ft-in">
        <div className="ft-grid">
          <div className="ft-col ft-about">
            <div className="nav-brand">
              <Image
                src="/images/alhaya-carpet-cleaning-services-dubai-logo.webp"
                alt="Alhaya Cleaning Services Logo - Carpet Deep Cleaning Dubai UAE"
                title="Alhaya Cleaning Services"
                width={44}
                height={44}
                loading="lazy"
                style={{ borderRadius: 10 }}
              />
              <span>
                <span className="brand-name">AL HAYA</span>
                <span className="brand-sub">CARPET CLEANING SERVICES</span>
              </span>
            </div>
            <p>Professional carpet deep shampoo cleaning with rapid 2-4 hours dry time. Residential and commercial carpet cleaning, stain removal, and odor elimination across Dubai, Abu Dhabi, Sharjah and all UAE Emirates.</p>
          </div>

          <div className="ft-col">
            <h5>Services</h5>
            <ul>{SERVICES.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>)}</ul>
          </div>

          <div className="ft-col">
            <h5>Service Areas</h5>
            <ul>{LOCATIONS.map((l) => <li key={l.slug}><Link href={`/locations/${l.slug}`}>Carpet Cleaning {l.name}</Link></li>)}</ul>
          </div>

          <div className="ft-col">
            <h5>Resources</h5>
            <ul>
              <li><Link href="/guides">Carpet Cleaning Guide</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="ft-col">
            <h5>Get in touch</h5>
            <ul className="ft-contact">
              <li><Icon name="phone" /> <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
              <li><Icon name="mail" /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><Icon name="clock" /> <span>{HOURS}</span></li>
              <li><Icon name="pin" /> <span>Serving all 7 Emirates, UAE</span></li>
              <li><Icon name="star" /> <a href="https://maps.app.goo.gl/Q4Qjx7GFZKZ1DSfz9" target="_blank" rel="noopener">Google Business Profile</a></li>
            </ul>
          </div>
        </div>

        <div className="ft-bottom">
          <span>© {new Date().getFullYear()} {BRAND}. All rights reserved.</span>
          <span>Dubai · Abu Dhabi · Sharjah · Ajman · UAQ · RAK · Fujairah</span>
        </div>
      </div>
    </footer>
  );
}
