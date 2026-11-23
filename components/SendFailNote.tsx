'use client';
import { PHONE_DISPLAY, PHONE_TEL, waHref } from './constants';

// Shown when a form could not be emailed, so the visitor can still reach us.
export default function SendFailNote({ message = 'Sorry, your request could not be sent.' }: { message?: string }) {
  return (
    <div className="send-fail" role="alert">
      <p>{message} Please WhatsApp or call us instead:</p>
      <div className="send-fail-links">
        <a href={waHref('Hi, I need carpet cleaning services.')} target="_blank" rel="noopener" data-wa-direct>
          WhatsApp us
        </a>
        <a href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
      </div>
    </div>
  );
}
