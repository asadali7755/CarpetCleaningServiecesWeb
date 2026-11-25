import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
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
import ProcessSteps from "@/components/ProcessSteps";
import CtaBand from "@/components/CtaBand";
import RequestCall from "@/components/RequestCall";
import { Icon } from "@/components/Icons";
import { AREAS, getArea, areaPath } from "@/lib/areasData";
import { getLocation, locationAnchor } from "@/lib/locationsData";
import { SERVICES } from "@/lib/servicesData";
import { CLIPS, PAIRS, FRAMES } from "@/lib/media";
import { SITE_URL, BRAND, PHONE_DISPLAY, PHONE_TEL, EMAIL, waHref } from "@/components/constants";

export const dynamicParams = false;

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.parent, area: a.slug }));
}

type Params = Promise<{ slug: string; area: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, area } = await params;
  const a = getArea(slug, area);
  if (!a) return {};
  const url = `${SITE_URL}${areaPath(a)}`;
  return {
    title: a.title,
    description: a.metaDesc,
    alternates: { canonical: url },
    openGraph: {
      title: a.title,
      description: a.metaDesc,
      url,
      images: [{ url: CLIPS[a.clip].poster, alt: `Carpet cleaning in ${a.name}` }],
    },
  };
}

// Paragraph text may carry internal links written as [text](/path).
function rich(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(<Link key={m.index} href={m[2]}>{m[1]}</Link>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
const plain = (text: string) => text.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");

// A real job photo beside the first three chapters.
const CHAPTER_FIGS = [FRAMES.strip, FRAMES.office, null, FRAMES.rug];

export default async function AreaPage({ params }: { params: Params }) {
  const { slug, area } = await params;
  const a = getArea(slug, area);
  const parent = getLocation(slug);
  if (!a || !parent) notFound();

  const url = `${SITE_URL}${areaPath(a)}`;
  const parentUrl = `/locations/${parent.slug}`;
  const clip = CLIPS[a.clip];
  const pairs = a.pairs.map((p) => PAIRS[p]);
  const msg = `Hi Al Haya, I need carpet cleaning in ${a.name}, ${parent.name}.`;

  // Service area page: no street address here, so the schema describes the
  // service and the place it covers rather than a business located there.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Carpet cleaning in ${a.name}, ${parent.name}`,
    serviceType: "Carpet cleaning",
    description: plain(a.intro),
    url,
    provider: { "@type": "LocalBusiness", name: BRAND, telephone: PHONE_TEL, email: EMAIL, url: SITE_URL },
    areaServed: {
      "@type": "Place",
      name: a.name,
      alternateName: a.altNames,
      containedInPlace: { "@type": "City", name: parent.name, addressCountry: "AE" },
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/locations` },
      { "@type": "ListItem", position: 3, name: parent.name, item: `${SITE_URL}${parentUrl}` },
      { "@type": "ListItem", position: 4, name: a.name, item: url },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: a.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <div className="page rp rp-carpet">
      <CarpetBackdrop variant="mashrabiya" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />

      <main>
        <PageHero
          variant="split"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/locations" },
            { label: parent.name, href: parentUrl },
            { label: a.name },
          ]}
          eyebrow={`${parent.name} · ${[a.name, ...(a.altNames ?? [])].join(" / ")}`}
          title={a.h1}
          lead={a.intro}
          actions={
            <>
              <a className="rb-gold" href={waHref(msg)} target="_blank" rel="noopener"><Icon name="whatsapp" /> Free quote for {a.name}</a>
              <a className="rb-line" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> Call {PHONE_DISPLAY}</a>
              <RequestCall className="rb-line" />
            </>
          }
          chips={["Homes", "Offices & showrooms", "Staff accommodation", "Same-day slots"]}
          media={
            <div className="ph-frame ph-frame-video">
              <AutoVideo src={clip.src} poster={clip.poster} label={clip.label} eager />
              <span className="rh-live"><i /> Real job video</span>
              <span className="ph-float-card"><Icon name="leaf" /> Eco-friendly, safe for kids &amp; pets</span>
            </div>
          }
        />

        <section className="hl">
          <div className="rh-wrap">
            <ul className="hl-grid" data-stagger>
              {a.highlights.map((h) => (
                <li key={h.t} className="hl-card">
                  <span className="rh-ic"><Icon name="check" /></span>
                  <b>{h.t}</b>
                  <p>{h.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Chapters: sticky outlined number on the left, text and a real photo on the right */}
        <section className="rh-sec ch">
          <div className="rh-wrap">
            <div className="lp-see" data-stagger>
              <Link href={parentUrl}>
                <Icon name="arrow" />
                <span><small>Elsewhere in the emirate, see</small>{locationAnchor(parent)}</span>
              </Link>
              <Link href="/services/commercial-carpet-cleaning">
                <Icon name="arrow" />
                <span><small>For offices and warehouses, see</small>Commercial carpet cleaning</span>
              </Link>
            </div>
            {a.sections.map((s, i) => {
              const fig = CHAPTER_FIGS[i];
              return (
                <article className="ch-row" key={s.h2}>
                  <header className="ch-head" data-reveal="left">
                    <span className="ch-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <h2>{s.h2}</h2>
                  </header>
                  <div className={`ch-body${fig && fig.w > fig.h ? " ch-wide" : ""}`}>
                    <div>
                      {s.paras.map((p, j) => <p key={j} data-reveal="blur">{rich(p)}</p>)}
                    </div>
                    {fig && (
                      <figure className="ch-fig" data-reveal="zoom" style={{ aspectRatio: `${fig.w} / ${fig.h}` }}>
                        <Image src={fig.src} alt={fig.alt} fill loading="lazy" sizes="(max-width:800px) 80vw, 280px" />
                      </figure>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rh-sec rh-results">
          <div className="rh-wrap rh-results-grid">
            <div data-reveal="left">
              <p className="rh-eyebrow">Real result</p>
              <h2 className="rh-h2">What a deep carpet clean looks like</h2>
              <p className="rh-sub">Drag the handle to compare. These photos are from our team&apos;s own jobs, not stock images.</p>
            </div>
            <div data-reveal="right"><BeforeAfter pairs={pairs} /></div>
          </div>
        </section>

        <ProcessSteps title={`Booking carpet cleaning in ${a.name}`} />

        <section className="rh-sec rl">
          <div className="rh-wrap">
            <div className="rh-head" data-reveal>
              <p className="rh-eyebrow">What we clean</p>
              <h2 className="rh-h2">Our services in {a.name}</h2>
            </div>
            <div className="rl-slider">
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="rl-card tilt">
                  <div className="rl-img">
                    <Image src={s.cardImg} alt={`${s.name} in ${a.name}, ${parent.name}`} fill sizes="(max-width:600px) 80vw, 320px" />
                  </div>
                  <div className="rl-body">
                    <span className="rh-ic"><Icon name={s.icon} /></span>
                    <h3>{s.name}</h3>
                    <p>{s.intro.slice(0, 100)}…</p>
                    <span className="rh-more">Explore <Icon name="arrow" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="rh-sec fq">
          <div className="rh-wrap fq-grid">
            <div className="fq-head" data-reveal="left">
              <p className="rh-eyebrow">FAQ</p>
              <h2 className="rh-h2">Carpet cleaning in {a.name}: questions</h2>
              <p className="rh-sub">Anything else? Ask us on WhatsApp.</p>
            </div>
            <div className="fq-list" data-stagger>
              {a.faqs.map((f, i) => (
                <details className="rh-qa fq-item" key={f.q} open={i === 0}>
                  <summary><span className="fq-n">{String(i + 1).padStart(2, "0")}</span>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="rh-sec">
          <div className="rh-wrap">
            <div className="rh-head" data-reveal>
              <p className="rh-eyebrow">Nearby</p>
              <h2 className="rh-h2">Near {a.name}</h2>
              <p className="rh-sub">
                We also clean carpets in the areas around {a.name}. See{" "}
                <Link href={parentUrl}>carpet cleaning in {parent.name}</Link> for the whole emirate.
              </p>
            </div>
            <ul className="nb-grid" data-stagger>
              {a.nearby.map((n) => (
                <li key={n}><Icon name="pin" /> {n}</li>
              ))}
            </ul>
          </div>
        </section>

        <CtaBand
          title={`Carpet cleaning in ${a.name}?`}
          text={`Send a photo and your location in ${a.name} on WhatsApp. We reply with a free quote and a time for our team to come to you.`}
          msg={msg}
        />
      </main>

      <Footer />
      <Fab />
      <RevealInit />
    </div>
  );
}
