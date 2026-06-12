import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { amount, bookingDetails } = body

    // amount should be in paise (INR × 100)
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        customerName: bookingDetails.name,
        customerPhone: bookingDetails.phone,
        pickup: bookingDetails.pickup,
        drop: bookingDetails.drop,
        date: bookingDetails.date,
        time: bookingDetails.time,
        vehicle: bookingDetails.vehicle,
        tripType: bookingDetails.tripType,
      },
    })

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    })
  } catch (error) {
    console.error('Razorpay order creation failed:', error)
    return NextResponse.json(
      { error: 'Failed to create payment order' },
      { status: 500 }
    )
  }
}
