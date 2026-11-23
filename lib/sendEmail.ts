export interface EnquiryData {
  type: string;
  phone: string;
  work?: string;
  name?: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Returns true only when the server confirmed the email was sent. Callers must
// show an error (with WhatsApp / call links) when this returns false, so a
// lead is never lost behind a fake "sent" message.
export async function sendEnquiry(data: EnquiryData): Promise<boolean> {
  const body = JSON.stringify({
    type: data.type,
    phone: data.phone,
    work: data.work || '—',
    name: data.name || '—',
    time: new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' }),
  });

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });
      if (res.ok) return true;
      console.error(`sendEnquiry attempt ${attempt} failed: ${res.status}`);
      // 4xx (bad phone, too many requests, forbidden) will not fix itself.
      if (res.status >= 400 && res.status < 500) return false;
    } catch (e) {
      console.error(`sendEnquiry attempt ${attempt} error:`, e);
    }
    if (attempt < 3) await sleep(1500);
  }
  return false;
}
