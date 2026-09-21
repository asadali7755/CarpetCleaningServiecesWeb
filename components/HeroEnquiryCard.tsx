'use client';
import { useState, useEffect } from 'react';
import { useRequestCall, useToast } from './RequestCallModal';

const PENDING_KEY = 'ccd_hero_quote_pending';

export default function HeroEnquiryCard() {
  const { open } = useRequestCall();
  const showToast = useToast();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [job, setJob] = useState('');
  const [err, setErr] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [waLink, setWaLink] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const quote = params.get('quote');
    const source = params.get('source');
    if (source === 'hero_card') {
      if (quote === 'success') {
        setSent(true);
        showToast("Payment received! We'll be in touch shortly.");
        try {
          const pending = sessionStorage.getItem(PENDING_KEY);
          if (pending) {
            const { name: n, job: j, number: num } = JSON.parse(pending);
            const msg = encodeURIComponent(`Hi, I need carpet cleaning services.\nWork: ${j || 'Carpet cleaning'}\nName: ${n}\nNumber: ${num}`);
            setWaLink(`https://wa.me/971551275545?text=${msg}`);
            sessionStorage.removeItem(PENDING_KEY);
          }
        } catch {}
      } else if (quote === 'cancelled') {
        showToast('Payment cancelled. You can try again anytime.');
      }
      if (quote) {
        params.delete('quote');
        params.delete('source');
        params.delete('session_id');
        const query = params.toString();
        window.history.replaceState({}, '', window.location.pathname + (query ? `?${query}` : ''));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = async () => {
    if (!number.trim()) { setErr('Please enter your phone number'); return; }
    setErr('');
    setLoading(true);
    try {
      sessionStorage.setItem(PENDING_KEY, JSON.stringify({ name: name || '—', job, number }));
    } catch {}
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'WhatsApp Quote (Hero)', name: name || '—', phone: number, work: job || 'Carpet cleaning', source: 'hero_card', returnPath: window.location.pathname }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      showToast('Could not start payment. Please try again.');
    } catch {
      showToast('Could not start payment. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="hero-enquiry-card">
      <span className="heq-label">Quick Quote — AED 50</span>
      <h2 className="heq-title">Tell us the job &amp; your number.<br/>Adjustable against your booking.</h2>
      {sent ? (
        <div className="heq-form" style={{ textAlign: 'center', padding: '12px 4px' }}>
          <p style={{ marginBottom: 12 }}>Payment received! We&apos;ll be in touch shortly.</p>
          {waLink && (
            <a className="heq-wa" href={waLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-flex' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              Continue on WhatsApp
            </a>
          )}
        </div>
      ) : (
        <div className="heq-form">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name *"
            required
          />
          <input
            value={job}
            onChange={(e) => setJob(e.target.value)}
            placeholder="What needs cleaning? (e.g. living room carpet, 3 rugs)"
          />
          <input
            value={number}
            onChange={(e) => { setNumber(e.target.value); setErr(''); }}
            placeholder="Your mobile number (UAE)*"
            inputMode="tel"
            style={err ? { borderColor: '#e53e3e' } : {}}
          />
          {err && <span className="heq-err">{err}</span>}
          <div className="heq-btns">
            <button className="heq-wa" onClick={submit} disabled={loading}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              {loading ? 'Redirecting...' : 'Pay AED 50 & Get Quote'}
            </button>
            <button className="heq-call" onClick={open}>Request a Call</button>
          </div>
        </div>
      )}
    </div>
  );
}
