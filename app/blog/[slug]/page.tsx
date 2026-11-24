import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import CarpetBackdrop from "@/components/CarpetBackdrop";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import { Icon } from "@/components/Icons";
import RevealInit from "@/components/RevealInit";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { POSTS, getPost } from "@/lib/blogData";
import { SITE_URL, BRAND } from "@/components/constants";

const BLOG_IMAGES = [
  "/images/services/carpet-deep-shampoo-cleaning-card-dubai.webp",
  "/images/services/carpet-deep-cleaning-process-uae.webp",
  "/images/services/sofa-upholstery-cleaning-card-dubai.webp",
  "/images/services/professional-stain-removal-service-dubai.webp",
  "/images/gallery/professional-carpet-cleaning-technician-dubai.webp",
  "/images/services/specialized-rug-cleaning-service-dubai.webp",
  "/images/gallery/carpet-shampoo-deep-cleaning-dubai.webp",
  "/images/gallery/deep-carpet-cleaning-process-uae.webp",
  "/images/gallery/carpet-steam-extraction-cleaning-uae.webp",
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
  const faqSchema = p.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: p.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;
  const isBlock = (html: string) => /^<(h3|ul|ol|div)[\s>]/.test(html);
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
    <div className="page rp rp-carpet">
      <CarpetBackdrop variant="vine" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Nav />

      <main>
        <PageHero
          variant="center"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: p.title.length > 40 ? p.title.slice(0, 40) + "…" : p.title },
          ]}
          eyebrow="Article"
          title={p.h1 ?? p.title}
          lead={p.description}
        >
          <time className="post-date">{p.date}</time>
        </PageHero>

        <section className="rh-wrap" style={{ paddingBottom: 40 }}>
          <div className="post-cover" data-reveal="clip">
            <Image src={BLOG_IMAGES[POSTS.findIndex((x) => x.slug === p.slug) % BLOG_IMAGES.length]} alt={`${p.title} — Al Haya Carpet Cleaning Dubai`} width={1280} height={520} loading="lazy" sizes="(max-width:1320px) 100vw, 1200px" />
          </div>
          <div className="prose post-body">
            {p.sections ? (
              <>
                {p.intro && <p>{p.intro}</p>}
                {p.sections.map((s, i) => (
                  <div key={i}>
                    <h2>{s.h2}</h2>
                    {s.body.map((item, j) =>
                      isBlock(item) ? (
                        <div key={j} dangerouslySetInnerHTML={{ __html: item }} />
                      ) : (
                        <p key={j} dangerouslySetInnerHTML={{ __html: item }} />
                      ),
                    )}
                  </div>
                ))}
                {p.faqs && p.faqs.length > 0 && (
                  <div className="prose-faq">
                    <h2>Frequently Asked Questions</h2>
                    {p.faqs.map((f, i) => (
                      <details key={i}>
                        <summary>{f.q}</summary>
                        <p>{f.a}</p>
                      </details>
                    ))}
                  </div>
                )}
                {p.related && p.related.length > 0 && (
                  <p className="prose-related">
                    Related:{" "}
                    {p.related.map((r, i) => (
                      <span key={r.href}>
                        {i > 0 && " · "}
                        <Link href={r.href}>{r.label}</Link>
                      </span>
                    ))}
                  </p>
                )}
              </>
            ) : (
              <>
                {p.body.map((para, i) => <p key={i}>{para}</p>)}
                {p.related && p.related.length > 0 && (
                  <p className="prose-related">
                    Related:{" "}
                    {p.related.map((r, i) => (
                      <span key={r.href}>
                        {i > 0 && " · "}
                        <Link href={r.href}>{r.label}</Link>
                      </span>
                    ))}
                  </p>
                )}
              </>
            )}
          </div>
        </section>

        <CtaBand />

        {/* Other posts */}
        <section className="rh-sec" style={{ paddingTop: 10 }}>
          <div className="rh-wrap">
            <div className="rh-head" data-reveal>
              <p className="rh-eyebrow">Keep reading</p>
              <h2 className="rh-h2">More Articles</h2>
            </div>
            <div className="rl-slider">
              {others.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="rl-card tilt">
                  <div className="rl-body">
                    <span className="bl-meta">{r.date}</span>
                    <h3>{r.title}</h3>
                    <p>{r.description.slice(0, 120)}…</p>
                    <span className="rh-more">Read <Icon name="arrow" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Fab />
      <RevealInit />
    </div>
  );
}
