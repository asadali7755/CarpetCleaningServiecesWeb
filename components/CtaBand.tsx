import Image from "next/image";
import { Icon } from "./Icons";
import { PHONE_DISPLAY, PHONE_TEL, waHref } from "./constants";

// Royal-blue call-to-action card with a real job photo, used at the end of pages.
export default function CtaBand({
  title = "Ready for a Spotless Carpet?",
  text = "Send a photo on WhatsApp and get a free quote. Our trained team comes to your home or office anywhere in the UAE.",
  msg,
  img = "/media/ba-extraction-after.jpg",
}: {
  title?: string;
  text?: string;
  msg?: string;
  img?: string;
}) {
  return (
    <section className="rh-sec rh-cta-sec">
      <div className="rh-wrap">
        <div className="rh-cta-card" data-reveal="zoom">
          <div className="rh-cta-media" aria-hidden="true">
            <Image src={img} alt="" fill sizes="(max-width:900px) 100vw, 40vw" />
          </div>
          <div className="rh-cta-copy">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="rh-cta">
              <a className="rb-gold" href={waHref(msg)} target="_blank" rel="noopener"><Icon name="whatsapp" /> Get a Free Quote</a>
              <a className="rb-ghost" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
