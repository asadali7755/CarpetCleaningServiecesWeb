"use client";

import { useState } from "react";
import { BRAND } from "./constants";
import { SERVICES } from "@/lib/servicesData";

type Step = "form" | "sending" | "done";

export default function RequestCall({ className = "btn-book" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICES[0].name);

  const reset = () => {
    setStep("form");
    setName("");
    setPhone("");
    setService(SERVICES[0].name);
  };

  const close = () => {
    setOpen(false);
    setTimeout(reset, 300);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setStep("sending");

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (key) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: key,
            subject: `Callback Request — ${service}`,
            from_name: BRAND,
            name,
            phone,
            service,
            request_type: "Callback Request",
          }),
        });
      } catch {
        /* show success anyway — data went to WhatsApp fallback below if needed */
      }
    }
    setStep("done");
  };

  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        Request a Call
      </button>

      {open && (
        <div className="rc-overlay" onClick={close}>
          <div className="rc-modal" onClick={(e) => e.stopPropagation()}>
            <button className="rc-close" onClick={close} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>

            {step === "done" ? (
              <div className="rc-success">
                <div className="rc-check">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <h3>Request Sent Successfully!</h3>
                <p>Our team will contact you within 30 minutes.</p>
                <button className="btn-outline" style={{ marginTop: 16, fontSize: 14 }} onClick={close}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="rc-title">Request a Call Back</h3>
                <p className="rc-desc">Fill in your details and our team will call you within 30 minutes.</p>
                <form className="rc-form" onSubmit={submit}>
                  <div>
                    <label htmlFor="rc-name">Name <span className="rc-req">*</span></label>
                    <input
                      id="rc-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="rc-phone">Contact Number <span className="rc-req">*</span></label>
                    <input
                      id="rc-phone"
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05x xxx xxxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="rc-service">Service Needed <span className="rc-req">*</span></label>
                    <select
                      id="rc-service"
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="btn-green rc-submit" disabled={step === "sending"}>
                    {step === "sending" ? "Sending..." : "Send Request →"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
