import { NextRequest, NextResponse } from 'next/server';
import { notifyLead } from '@/lib/leadNotify';

export async function POST(req: NextRequest) {
  try {
    const { type, phone, work, name } = await req.json();
    await notifyLead({ type, phone, work, name });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
