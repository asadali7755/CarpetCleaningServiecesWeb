"use client";

import { Icon } from "./Icons";
import { PHONE_TEL, waHref } from "./constants";
import { useRequestCall } from "./RequestCallModal";

export default function Fab() {
  const { open } = useRequestCall();
  return (
    <>
      <div className="fab">
        <a className="fab-wa" href={waHref()} target="_blank" rel="noopener" aria-label="WhatsApp us"><Icon name="whatsapp" /></a>
        <button className="fab-req" onClick={open} aria-label="Request a call">
          <Icon name="phone" />
        </button>
      </div>
      <div className="mbar">
        <a className="mbar-call" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> Call now</a>
        <a className="mbar-wa" href={waHref()} target="_blank" rel="noopener"><Icon name="whatsapp" /> WhatsApp</a>
        <button className="mbar-req" onClick={open}><Icon name="phone" /> Request Call</button>
      </div>
    </>
  );
}
