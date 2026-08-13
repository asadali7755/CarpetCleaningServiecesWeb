'use client';
import { useState, useEffect } from 'react';
import { useRequestCall, useToast } from './RequestCallModal';
import { PHONE_TEL, waHref } from './constants';
import { sendEnquiry } from '@/lib/sendEmail';

const onDesktop = () => typeof window !== 'undefined' && window.matchMedia('(hover:hover) and (pointer:fine)').matches;

export default function HeroEnquiryCard() {
  const { open } = useRequestCall();
  const showToast = useToast();
  const [number, setNumber] = useState('');
  const [job, setJob] = useState('');
  const [err, setErr] = useState('');
  const [sent, setSent] = useState(false);
  const [desktop, setDesktop] = useState(false);
  useEffect(() => { setDesktop(onDesktop()); }, []);

  const submit = async () => {
    if (!number.trim()) { setErr('Please enter your phone number'); return; }
    setErr('');
    try { await sendEnquiry({ type: 'WhatsApp Quote (Hero)', phone: number, work: job }); } catch (e) { console.error('sendEnquiry:', e); }
    setSent(true);
    showToast('Enquiry sent! We\'ll be in touch shortly.');
    if (!onDesktop()) {
      const msg = encodeURIComponent(`Hi, I need carpet cleaning services.\nWork: ${job || 'Carpet cleaning'}\nNumber: ${number}`);
      window.open(`https://wa.me/971551275545?text=${msg}`, '_blank');
    }
  };

  return (
    <div className="hero-enquiry-card">
      <span className="heq-label">Quick Quote - WhatsApp in 60 sec</span>
      <h2 className="heq-title">Tell us the job &amp; your number.<br/>That&apos;s it.</h2>
      <div className="heq-form">
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
          <button className="heq-wa" onClick={submit} disabled={sent}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            {sent ? 'Sent!' : desktop ? 'Send Enquiry' : 'WhatsApp'}
          </button>
          <button className="heq-call" onClick={open}>Request a Call</button>
        </div>
      </div>
    </div>
  );
}
