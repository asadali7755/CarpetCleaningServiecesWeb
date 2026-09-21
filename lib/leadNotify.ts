import { Resend } from 'resend'

export interface LeadFields {
  type: string
  phone: string
  work?: string
  name?: string
}

export async function notifyLead({ type, phone, work, name }: LeadFields) {
  const resend = new Resend(process.env.RESEND_API_KEY!)
  const time = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })

  await resend.emails.send({
    from: 'CarpetCleaningDubai <onboarding@resend.dev>',
    to: 'marbleprodxb@gmail.com',
    subject: `[CarpetCleaningDubai] New ${type}`,
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#ecfdf5;border-radius:12px;border-top:4px solid #059669;">
        <div style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#059669;font-weight:700;">carpetcleaningdubai.com</div>
        <h2 style="margin:0 0 24px;font-size:22px;color:#064e3b;">New ${type}</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:10px 0;border-bottom:1px solid #d1fae5;color:#666;width:110px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #d1fae5;font-weight:600;color:#064e3b;">${name || '—'}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #d1fae5;color:#666;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #d1fae5;font-weight:600;color:#064e3b;">${phone}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #d1fae5;color:#666;">Service</td><td style="padding:10px 0;border-bottom:1px solid #d1fae5;color:#064e3b;">${work || '—'}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #d1fae5;color:#666;">Type</td><td style="padding:10px 0;border-bottom:1px solid #d1fae5;color:#064e3b;">${type}</td></tr>
          <tr><td style="padding:10px 0;color:#666;">Time (Dubai)</td><td style="padding:10px 0;color:#064e3b;">${time}</td></tr>
        </table>
        <div style="margin:24px 0 0;padding:12px 16px;background:#d1fae5;border-radius:8px;font-size:12px;color:#059669;">
          <strong>Website:</strong> carpetcleaningdubai.com &nbsp;|&nbsp; <strong>Business:</strong> Al Haya Carpet &amp; Rug Care
        </div>
      </div>
    `,
  })
}
