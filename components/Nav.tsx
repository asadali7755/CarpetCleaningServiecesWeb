"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icons";
import RequestCall from "./RequestCall";
import { PHONE_DISPLAY, PHONE_TEL, FACEBOOK_URL, LINKEDIN_URL, waHref } from "./constants";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Service Areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand" aria-label="Alhaya Carpet Cleaning Services Dubai">
          <Image
            src="/images/alhaya-carpet-cleaning-services-dubai-logo.webp"
            alt="Alhaya Carpet Cleaning Services Dubai - Professional Carpet Deep Cleaning UAE"
            title="Alhaya Cleaning Services"
            width={44}
            height={44}
            priority
            style={{ borderRadius: 10 }}
          />
          <span>
            <span className="brand-name">AL HAYA</span>
            <span className="brand-sub">CARPET CLEANING SERVICES</span>
          </span>
        </Link>

        <nav className="nav-menu">
          {LINKS.map((l) => <Link key={l.href} className="nav-link" href={l.href}>{l.label}</Link>)}
          <div className="nav-social">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener" aria-label="Facebook" className="nav-social-link"><Icon name="facebook" /></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener" aria-label="LinkedIn" className="nav-social-link"><Icon name="linkedin" /></a>
          </div>
          <a className="nav-phone-pill" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> {PHONE_DISPLAY}</a>
          <RequestCall />
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <Icon name={open ? "x" : "menu"} />
          </button>
        </nav>
      </div>

      <div className={`nav-mobile${open ? " open" : ""}`}>
        {LINKS.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>)}
        <a className="btn-book" href={waHref()} target="_blank" rel="noopener" onClick={() => setOpen(false)}>Book Now</a>
      </div>
    </header>
  );
}
