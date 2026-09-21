import { NextResponse } from 'next/server'
import { getStripe, QUOTE_FEE_AED_MINOR } from '@/lib/stripe'

export const runtime = 'nodejs'

const clip = (value: string, max = 450) =>
  value.length > max ? `${value.slice(0, max)}…` : value

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, work, type, returnPath, source } = body
    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 })
    }
    const origin = req.headers.get('origin') ?? new URL(req.url).origin
    const path = typeof returnPath === 'string' && returnPath.startsWith('/') ? returnPath : '/'
    const src = encodeURIComponent(String(source || 'form'))
    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'aed',
          product_data: { name: 'Quote Request Fee', description: 'AED 50 — adjustable against your final booking' },
          unit_amount: QUOTE_FEE_AED_MINOR,
        },
        quantity: 1,
      }],
      metadata: {
        type: clip(String(type || 'Free Quote Request')),
        name: clip(String(name || '—')),
        phone: clip(String(phone)),
        work: clip(String(work || '—')),
      },
      success_url: `${origin}${path}?quote=success&source=${src}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}${path}?quote=cancelled&source=${src}`,
    })
    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout session error:', err)
    return NextResponse.json({ error: 'Could not start checkout' }, { status: 500 })
  }
}
