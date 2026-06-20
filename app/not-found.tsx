import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="page">
      <Nav />
      <main>
        <section className="sub-hero" style={{ textAlign: "center", paddingTop: 90, paddingBottom: 90 }}>
          <h1 style={{ margin: "0 auto" }}>Page not found</h1>
          <p className="lead" style={{ margin: "16px auto 0" }}>The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to spotless carpets.</p>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <Link className="btn-green" href="/">Back to home →</Link>
            <Link className="btn-outline" href="/services">View services</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
