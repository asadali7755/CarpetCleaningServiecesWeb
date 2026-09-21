import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getStripe } from '@/lib/stripe'
import { notifyLead } from '@/lib/leadNotify'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  const rawBody = await req.text()
  const signature = req.headers.get('stripe-signature')
  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(rawBody, signature!, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const { type, name, phone, work } = session.metadata ?? {}
    if (phone) {
      await notifyLead({ type: type || 'Free Quote Request', name, phone, work })
    } else {
      console.error('Stripe webhook: checkout.session.completed missing expected metadata', session.id)
    }
  }
  return NextResponse.json({ received: true })
}
