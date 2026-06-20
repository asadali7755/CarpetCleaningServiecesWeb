import { Icon } from "./Icons";
import { PHONE_TEL, waHref } from "./constants";

// Floating WhatsApp + call (desktop) and a sticky bottom bar (mobile).
export default function Fab() {
  return (
    <>
      <div className="fab">
        <a className="fab-wa" href={waHref()} target="_blank" rel="noopener" aria-label="WhatsApp us"><Icon name="whatsapp" /></a>
        <a className="fab-call" href={`tel:${PHONE_TEL}`} aria-label="Call us"><Icon name="phone" /></a>
      </div>
      <div className="mbar">
        <a className="mbar-call" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> Call now</a>
        <a className="mbar-wa" href={waHref()} target="_blank" rel="noopener"><Icon name="whatsapp" /> WhatsApp</a>
      </div>
    </>
  );
}
