import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Same Resend account, sender domain and lead inbox as marblepro.ae and
// servedubai.ae. Set ENQUIRY_FROM / ENQUIRY_TO on Hostinger to change them
// without a code change. The From name tells the boss which site sent it.
const LEADS_FROM = process.env.ENQUIRY_FROM || 'Carpet Cleaning Dubai Website <leads@mail.marblepro.ae>';
const LEADS_TO = process.env.ENQUIRY_TO || 'marbleprodxb@gmail.com';

const ALLOWED_HOSTS = ['carpetcleaningdubai.com', 'www.carpetcleaningdubai.com', 'localhost', '127.0.0.1'];

// Small per-IP throttle so one client cannot flood the inbox.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function sameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get('origin');
  if (!origin) return true; // some browsers omit Origin on same-origin requests
  try {
    const host = new URL(origin).hostname;
    return ALLOWED_HOSTS.includes(host) || host.endsWith('.hostingersite.com');
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  if (!sameOrigin(req)) {
    return NextResponse.json({ ok: false, error: 'forbidden' }, { status: 403 });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'too_many_requests' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const type = clean(body.type, 60) || 'Enquiry';
  const phone = clean(body.phone, 30);
  const name = clean(body.name, 80);
  const work = clean(body.work, 1000);
  const time = clean(body.time, 60) || new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' });

  const digits = phone.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) {
    return NextResponse.json({ ok: false, error: 'invalid_phone' }, { status: 400 });
  }

  const e = {
    type: escapeHtml(type),
    phone: escapeHtml(phone),
    name: escapeHtml(name || '—'),
    work: escapeHtml(work || '—'),
    time: escapeHtml(time),
  };
  const page = escapeHtml(clean(req.headers.get('referer'), 300) || '—');

  const row = (label: string, value: string, bold = false) =>
    `<tr><td style="padding:10px 0;border-bottom:1px solid #d1fae5;color:#666;width:110px;">${label}</td><td style="padding:10px 0;border-bottom:1px solid #d1fae5;${bold ? 'font-weight:600;' : ''}color:#064e3b;">${value}</td></tr>`;

  const resend = new Resend(process.env.RESEND_API_KEY!);
  try {
    const { error } = await resend.emails.send({
      from: LEADS_FROM,
      to: LEADS_TO,
      subject: `[CarpetCleaningDubai] New ${type.replace(/[\r\n]/g, ' ')}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#ecfdf5;border-radius:12px;border-top:4px solid #059669;">
          <div style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#059669;font-weight:700;">carpetcleaningdubai.com</div>
          <h2 style="margin:0 0 24px;font-size:22px;color:#064e3b;">New ${e.type}</h2>
          <table style="width:100%;border-collapse:collapse;">
            ${row('Name', e.name, true)}
            ${row('Phone', e.phone, true)}
            ${row('Service', e.work)}
            ${row('Type', e.type)}
            ${row('Page', page)}
            <tr><td style="padding:10px 0;color:#666;">Time (Dubai)</td><td style="padding:10px 0;color:#064e3b;">${e.time}</td></tr>
          </table>
          <div style="margin:24px 0 0;padding:12px 16px;background:#d1fae5;border-radius:8px;font-size:12px;color:#059669;">
            <strong>Website:</strong> carpetcleaningdubai.com
          </div>
        </div>
      `,
    });
    // resend.emails.send resolves with { error } instead of throwing on API
    // errors, so check it; otherwise a failed send looks like a success.
    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 500 });
  }
}
