"use client";

import { useState } from "react";
import { waHref, BRAND } from "./constants";
import { SERVICES } from "@/lib/servicesData";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICES[0].name);
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const waText =
    `New enquiry from ${name || "(no name)"}\n` +
    `Phone: ${phone || "(not given)"}\n` +
    `Service: ${service}\n` +
    `Message: ${msg || "(none)"}`;

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() && !phone.trim()) return;

    setStatus("sending");

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (key) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: key,
            subject: `New Carpet Cleaning Enquiry — ${service}`,
            from_name: BRAND,
            name: name || "(not given)",
            phone: phone || "(not given)",
            service,
            message: msg || "(none)",
          }),
        });
        if (res.ok) {
          setStatus("sent");
          setName("");
          setPhone("");
          setService(SERVICES[0].name);
          setMsg("");
          return;
        }
      } catch {
        /* fall through to WhatsApp */
      }
    }

    window.open(waHref(waText), "_blank");
    setStatus("sent");
    setName("");
    setPhone("");
    setService(SERVICES[0].name);
    setMsg("");
  };

  if (status === "sent") {
    return (
      <div className="contact-form" style={{ textAlign: "center", padding: "40px 20px" }}>
        <div style={{ fontSize: 28, marginBottom: 12, color: "var(--green)" }}>&#10003;</div>
        <p style={{ fontSize: 18, fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>
          Request received!
        </p>
        <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 20 }}>
          We&apos;ll get back to you within the hour.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <a className="btn-green" href={waHref(waText)} target="_blank" rel="noopener" style={{ fontSize: 14 }}>
            Also message on WhatsApp →
          </a>
          <button
            className="btn-outline"
            style={{ fontSize: 14 }}
            onClick={() => setStatus("idle")}
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

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
      <button type="submit" className="btn-green" style={{ alignSelf: "flex-start" }} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry →"}
      </button>
    </form>
  );
}
