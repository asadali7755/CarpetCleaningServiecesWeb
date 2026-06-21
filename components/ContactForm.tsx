"use client";

import { useState } from "react";
import { waHref } from "./constants";
import { SERVICES } from "@/lib/servicesData";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICES[0].name);
  const [msg, setMsg] = useState("");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `New enquiry from ${name || "(no name)"}\n` +
      `Phone: ${phone || "(not given)"}\n` +
      `Service: ${service}\n` +
      `Message: ${msg || "(none)"}`;
    window.open(waHref(text), "_blank");
  };

  return (
    <form className="contact-form" onSubmit={send}>
      <div>
        <label htmlFor="cf-name">Your name</label>
        <input id="cf-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Aisha" />
      </div>
      <div>
        <label htmlFor="cf-phone">Phone / WhatsApp</label>
        <input id="cf-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="05x xxx xxxx" />
      </div>
      <div>
        <label htmlFor="cf-service">Service needed</label>
        <select id="cf-service" value={service} onChange={(e) => setService(e.target.value)}>
          {SERVICES.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="cf-msg">Message</label>
        <textarea id="cf-msg" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Tell us about your carpets, rugs or sofas…" />
      </div>
      <button type="submit" className="btn-green" style={{ alignSelf: "flex-start" }}>
        Send via WhatsApp →
      </button>
    </form>
  );
}
