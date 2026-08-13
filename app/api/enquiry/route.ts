import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY!);
  try {
    const { type, phone, work, name, time } = await req.json();

    await resend.emails.send({
      from: 'CarpetCleaningDubai Website <onboarding@resend.dev>',
      to: 'Madinatalhaya@gmail.com',
      subject: `New Enquiry — ${type}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#ecfdf5;border-radius:12px;">
          <h2 style="margin:0 0 24px;font-size:22px;color:#064e3b;">New Enquiry — carpetcleaningdubai.com</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #d1fae5;color:#666;width:110px;">Type</td><td style="padding:10px 0;border-bottom:1px solid #d1fae5;font-weight:600;color:#064e3b;">${type}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #d1fae5;color:#666;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #d1fae5;font-weight:600;color:#064e3b;">${phone}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #d1fae5;color:#666;">Work</td><td style="padding:10px 0;border-bottom:1px solid #d1fae5;color:#064e3b;">${work || '—'}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #d1fae5;color:#666;">Name</td><td style="padding:10px 0;border-bottom:1px solid #d1fae5;color:#064e3b;">${name || '—'}</td></tr>
            <tr><td style="padding:10px 0;color:#666;">Time</td><td style="padding:10px 0;color:#064e3b;">${time}</td></tr>
          </table>
          <p style="margin:24px 0 0;font-size:13px;color:#6b7280;">Source: carpetcleaningdubai.com</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
