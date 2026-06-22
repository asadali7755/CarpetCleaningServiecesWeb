import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import { Icon } from "@/components/Icons";
import { POSTS, getPost } from "@/lib/blogData";
import RequestCall from "@/components/RequestCall";
import { SITE_URL, BRAND, PHONE_DISPLAY, PHONE_TEL, waHref } from "@/components/constants";

const BLOG_IMAGES = [
  "/images/services/carpet-service-6.jpeg",
  "/images/services/carpet-service-7.jpeg",
  "/images/services/carpet-service-10.jpeg",
  "/images/services/carpet-service-4.jpeg",
  "/images/gallery/action-1.jpeg",
  "/images/services/carpet-service-8.jpeg",
  "/images/gallery/carpet-shampoo-cleaning.webp",
  "/images/gallery/deep-carpet-cleaning-process.webp",
  "/images/gallery/carpet-steam-extraction.jpeg",
];

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const url = `${SITE_URL}/blog/${p.slug}`;
  return {
    title: p.title,
    description: p.description,
    keywords: p.kw.join(", "),
    alternates: { canonical: url },
    openGraph: { title: p.title, description: p.description, url },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const url = `${SITE_URL}/blog/${p.slug}`;
  const others = POSTS.filter((x) => x.slug !== p.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    author: { "@type": "Organization", name: BRAND, url: SITE_URL },
    publisher: { "@type": "Organization", name: BRAND, url: SITE_URL },
    mainEntityOfPage: url,
    datePublished: p.date,
    dateModified: p.date,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: p.title, item: url },
    ],
  };

  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />

      <main>
        <section className="sub-hero">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="sep">/</span>
            <Link href="/blog">Blog</Link><span className="sep">/</span>
            <span style={{ color: "var(--green)" }}>{p.title.length > 40 ? p.title.slice(0, 40) + "…" : p.title}</span>
          </nav>
          <h1>{p.title}</h1>
          <p className="lead">{p.description}</p>
          <time style={{ fontSize: 14, color: "var(--text-2)" }}>{p.date}</time>
        </section>

        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 30px" }}>
          <div className="about-hero-img" style={{ marginBottom: 28 }}>
            <Image src={BLOG_IMAGES[POSTS.findIndex((x) => x.slug === p.slug) % BLOG_IMAGES.length]} alt={`${p.title} — Al Haya Carpet Cleaning Dubai`} width={1280} height={520} loading="lazy" style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="prose">
            {p.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </section>

        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 30px" }}>
          <div className="cta-row">
            <a className="btn-green" href={waHref()} target="_blank" rel="noopener">Book carpet cleaning →</a>
            <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
            <RequestCall className="btn-outline" />
          </div>
        </section>

        {/* Other posts */}
        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 70px" }}>
          <h2 className="sec-title" style={{ fontSize: "clamp(22px,3vw,32px)" }}>More Articles</h2>
          <div className="rel-grid">
            {others.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="rel-card">
                <div className="ic"><Icon name="arrow" /></div>
                <h3>{r.title}</h3>
                <p>{r.description.slice(0, 120)}…</p>
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
