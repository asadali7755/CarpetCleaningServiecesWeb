export interface EnquiryData {
  type: string;
  phone: string;
  work?: string;
  name?: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function sendEnquiry(data: EnquiryData): Promise<void> {
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
      if (res.ok) return;
      console.error(`sendEnquiry attempt ${attempt} failed: ${res.status}`);
    } catch (e) {
      console.error(`sendEnquiry attempt ${attempt} error:`, e);
    }
    if (attempt < 3) await sleep(1500);
  }
}
