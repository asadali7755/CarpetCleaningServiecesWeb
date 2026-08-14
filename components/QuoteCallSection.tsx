'use client';
import { useState } from 'react';
import { useRequestCall, useToast } from './RequestCallModal';
import { sendEnquiry } from '@/lib/sendEmail';
import { PHONE_DISPLAY, PHONE_TEL } from './constants';

export default function QuoteCallSection() {
  const { open } = useRequestCall();
  const showToast = useToast();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [work, setWork] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setLoading(true);
    try {
      await sendEnquiry({ type: 'Free Quote Request', phone, name: name || '—', work: work || 'Carpet Cleaning' });
    } catch {}
    setLoading(false);
    setSent(true);
    showToast('Quote request sent! We will contact you shortly.');
  };

  return (
    <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="container-x">
        <div className="quote-call-grid">
          {/* Request a Call Side */}
          <div>
            <div className="section-tag">Talk to Us</div>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 42px)', marginBottom: 16, lineHeight: 1.15 }}>
              Prefer a <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Phone Call?</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
              Not sure which service you need? Our cleaning experts are ready to help. Request a call and get personalized advice — no pressure, no obligation. We will assess your requirements and provide a transparent quote over the phone.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
              {[
                'Free consultation with cleaning experts',
                'Honest pricing — no hidden charges',
                'Same-day callback within 30 minutes',
                'Available 7 days a week, 8 AM to 10 PM',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--fg-muted)', fontSize: 15 }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>&#10003;</span> {item}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button onClick={open} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Request a Call
              </button>
              <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Get a Free Quote Card */}
          <div>
            <div style={{ background: 'var(--bg-elev)', border: '1px solid var(--line-strong)', borderRadius: 20, padding: 'clamp(24px, 4vw, 36px)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--accent)' }} />
              <div className="section-tag" style={{ marginBottom: 8 }}>Quick Response</div>
              <h3 style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', marginBottom: 8 }}>Get a Free Quote</h3>
              <p style={{ color: 'var(--fg-muted)', fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                Fill in your details and we will get back to you within 30 minutes with a no-obligation quote.
              </p>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'color-mix(in oklab, var(--accent) 15%, transparent)', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 24, color: 'var(--accent)' }}>&#10003;</div>
                  <h4 style={{ marginBottom: 8, fontSize: 18 }}>Quote Request Sent!</h4>
                  <p style={{ color: 'var(--fg-muted)', fontSize: 14, marginBottom: 20 }}>We will call you back shortly with your quote.</p>
                  <button onClick={() => setSent(false)} className="btn btn-ghost" style={{ fontSize: 13 }}>Submit Another</button>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Your Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    className="form-input"
                    type="tel"
                    inputMode="tel"
                    placeholder="+971 5X XXX XXXX *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <select
                    className="form-input"
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
                  >
                    <option value="">Select Service</option>
                    <option value="Carpet Cleaning">Carpet Cleaning</option>
                    <option value="Rug Cleaning">Rug Cleaning</option>
                    <option value="Sofa Cleaning">Sofa Cleaning</option>
                    <option value="Mattress Cleaning">Mattress Cleaning</option>
                    <option value="Curtain Cleaning">Curtain Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                  </select>
                  <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '14px 24px' }}>
                    {loading ? 'Sending...' : 'Get My Free Quote'}
                  </button>
                  <p style={{ color: 'var(--fg-dim)', fontSize: 12, textAlign: 'center' }}>
                    No spam. No obligation. Just a fair quote.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
