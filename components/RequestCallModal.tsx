'use client';
import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { PHONE_DISPLAY, PHONE_TEL, waHref } from './constants';
import { sendEnquiry } from '@/lib/sendEmail';

interface ModalCtxType {
  open: () => void;
  close: () => void;
  showToast: (msg?: string) => void;
}
const ModalCtx = createContext<ModalCtxType>({ open: () => {}, close: () => {}, showToast: () => {} });
export function useRequestCall() { return useContext(ModalCtx); }
export function useToast() { return useContext(ModalCtx).showToast; }

function SuccessToast({ message, onDone }: { message: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 5000);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className="success-toast">
      <div className="st-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div className="st-body">
        <span className="st-title">Request sent</span>
        <span className="st-msg">{message}</span>
      </div>
      <button className="st-close" onClick={onDone} aria-label="Dismiss">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  );
}

export function RequestCallProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState('');

  const showToast = (msg = "We'll be in touch shortly.") => {
    setToast(msg);
    setTimeout(() => setToast(''), 5000);
  };

  const value = { open: () => setIsOpen(true), close: () => setIsOpen(false), showToast };

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    if (isOpen) window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [isOpen]);

  return (
    <ModalCtx.Provider value={value}>
      {children}
      {isOpen && (
        <RequestCallModal
          onClose={value.close}
          onSent={(msg) => { value.close(); showToast(msg); }}
        />
      )}
      {toast && <SuccessToast message={toast} onDone={() => setToast('')} />}
    </ModalCtx.Provider>
  );
}

function RequestCallModal({ onClose, onSent }: { onClose: () => void; onSent: (msg: string) => void }) {
  const [phone, setPhone] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) { setErr('Phone number is required'); return; }
    setErr('');
    setLoading(true);
    try { await sendEnquiry({ type: 'Request a Call', phone }); } catch {}
    setLoading(false);
    onSent('We got your number! Expect a call back shortly.');
  };

  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <span className="modal-label">Request a Call</span>
        <h3>Drop your number.<br/>We&apos;ll call you back.</h3>
        <p>One field. No name, no email, no fuss. Free quote on the call.</p>
        <form onSubmit={submit}>
          <input
            ref={inputRef}
            type="tel"
            inputMode="tel"
            placeholder="+971 5X XXX XXXX *"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); setErr(''); }}
            style={err ? { borderColor: '#e53e3e' } : {}}
          />
          {err && <span style={{ color: '#e53e3e', fontSize: 12, marginTop: 4, display: 'block' }}>{err}</span>}
          <button type="submit" className="modal-submit" disabled={loading}>
            {loading ? 'Sending...' : 'Call me back'}
          </button>
        </form>
        <div className="modal-or">Or reach us instantly</div>
        <div className="modal-alt">
          <a href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          <a href={waHref('Hi, I need carpet cleaning services.')} target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
