import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <div className="page rp">
      <Nav />
      <main>
        <PageHero
          variant="center"
          crumbs={[{ label: "Home", href: "/" }, { label: "404" }]}
          eyebrow="Error 404"
          title={<><span className="nf-num">404</span>Page not found</>}
          lead="The page you're looking for doesn't exist. Let's get you back to spotless carpets."
          actions={
            <>
              <Link className="rb-gold" href="/">Back to home →</Link>
              <Link className="rb-line" href="/services">View services</Link>
            </>
          }
        />
      </main>
      <Footer />
    </div>
  );
}
