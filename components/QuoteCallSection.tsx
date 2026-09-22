'use client';
import { useState } from 'react';
import { useRequestCall, useToast } from './RequestCallModal';
import { sendEnquiry } from '@/lib/sendEmail';
import { Icon } from './Icons';
import { PHONE_DISPLAY, PHONE_TEL } from './constants';

const BENEFITS = [
  { icon: 'clipboard', title: 'Free consultation', desc: 'Talk it through with a cleaning expert, no pressure.' },
  { icon: 'shield', title: 'Honest pricing', desc: 'Transparent quotes — no hidden charges, ever.' },
  { icon: 'clock', title: 'Fast callback', desc: 'We call you back within 30 minutes, same day.' },
  { icon: 'calendar', title: '7 days a week', desc: 'Available 8 AM to 10 PM, every day of the week.' },
];

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
    <section className="inner sec-lavender" style={{ padding: '70px var(--pad) 80px' }}>
      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
        <div className="contact-grid">
          {/* Request a Call side */}
          <div className="contact-card">
            <p className="eyebrow teal">Talk to Us</p>
            <h2 className="grad-text" style={{ fontSize: 'clamp(24px, 3vw, 34px)', lineHeight: 1.15, marginBottom: 14 }}>
              Prefer a Phone Call?
            </h2>
            <p style={{ color: 'var(--text-2)', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
              Not sure which service you need? Our cleaning experts are ready to help — request
              a call and get personalized advice, no pressure, no obligation.
            </p>

            <ul className="contact-list" style={{ marginBottom: 28 }}>
              {BENEFITS.map((b) => (
                <li key={b.title}>
                  <div className="ic"><Icon name={b.icon} /></div>
                  <div>
                    <b>{b.title}</b>
                    <span>{b.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                onClick={open}
                className="btn-green"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: 'none', cursor: 'pointer' }}
              >
                <span style={{ width: 17, height: 17 }}><Icon name="phone" /></span>
                Request a Call
              </button>
              <a href={`tel:${PHONE_TEL}`} className="btn-outline">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Get a Free Quote form side */}
          <div className="contact-card">
            <p className="eyebrow teal">Quick Response</p>
            <h3>Get a Free Quote</h3>
            <p style={{ color: 'var(--text-2)', fontSize: 14, lineHeight: 1.6, marginBottom: 22 }}>
              Fill in your details and we will get back to you within 30 minutes with a
              no-obligation quote.
            </p>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '28px 12px' }}>
                <div
                  className="ic"
                  style={{ width: 52, height: 52, borderRadius: '50%', margin: '0 auto 16px' }}
                >
                  <Icon name="check" />
                </div>
                <h4 style={{ fontFamily: 'var(--display)', fontSize: 18, marginBottom: 8, color: 'var(--text)' }}>
                  Quote Request Sent!
                </h4>
                <p style={{ color: 'var(--text-2)', fontSize: 14, marginBottom: 20 }}>
                  We will call you back shortly with your quote.
                </p>
                <button onClick={() => setSent(false)} className="btn-outline" style={{ fontSize: 13 }}>
                  Submit Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <div>
                  <label htmlFor="qc-name">Your name</label>
                  <input
                    id="qc-name"
                    type="text"
                    placeholder="Your name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="qc-phone">Phone / WhatsApp</label>
                  <input
                    id="qc-phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="+971 5X XXX XXXX *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="qc-service">Service needed</label>
                  <select id="qc-service" value={work} onChange={(e) => setWork(e.target.value)}>
                    <option value="">Select Service</option>
                    <option value="Carpet Cleaning">Carpet Cleaning</option>
                    <option value="Rug Cleaning">Rug Cleaning</option>
                    <option value="Sofa Cleaning">Sofa Cleaning</option>
                    <option value="Mattress Cleaning">Mattress Cleaning</option>
                    <option value="Curtain Cleaning">Curtain Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                  </select>
                </div>
                <button type="submit" className="btn-green" disabled={loading} style={{ border: 'none', cursor: 'pointer', width: '100%', justifyContent: 'center' }}>
                  {loading ? 'Sending...' : 'Get My Free Quote'}
                </button>
                <p style={{ color: 'var(--text-3)', fontSize: 12, textAlign: 'center', margin: 0 }}>
                  No spam. No obligation. Just a fair quote.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
