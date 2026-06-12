'use client'
import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: new (options: Record<string, any>) => { open: () => void }
  }
}

interface RazorpayResponse {
  razorpay_payment_id: string
  razorpay_order_id: string
  razorpay_signature: string
}

const vehicles = [
  { id: 'sedan',  name: 'Urban Comfort', type: 'Sedan',      examples: 'Dzire / Etios',    seats: 4, price: 13, base: 400,  emoji: '🚗', accent: '#5B21B6' },
  { id: 'suv',    name: 'Urban Plus',    type: 'SUV / MUV',  examples: 'Ertiga / Marazzo',  seats: 6, price: 16, base: 600,  emoji: '🚙', accent: '#F59E0B' },
  { id: 'luxury', name: 'Urban Elite',   type: 'Premium SUV', examples: 'Innova Crysta',    seats: 7, price: 22, base: 900,  emoji: '🏎️', accent: '#7C3AED' },
]

function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true)
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

function BookPageContent() {
  const router = useRouter()
  const params = useSearchParams()

  const from      = params.get('from')     || ''
  const to        = params.get('to')       || ''
  const date      = params.get('date')     || ''
  const time      = params.get('time')     || ''
  const tripType  = params.get('tripType') || 'airport'
  const returnDate = params.get('returnDate') || ''

  const [name, setName]       = useState('')
  const [phone, setPhone]     = useState('')
  const [vehicle, setVehicle] = useState('sedan')
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const tripLabel: Record<string, string> = {
    'airport':    'Airport Transfer',
    'one-way':    'Outstation One-Way',
    'round-trip': 'Outstation Round-Trip',
    'hourly':     'Hourly Rental',
  }

  const selectedVehicle = vehicles.find(v => v.id === vehicle)!
  const estimatedKm = tripType === 'round-trip' ? 60 : 30
  const baseFare  = selectedVehicle.base
  const kmFare    = selectedVehicle.price * estimatedKm
  const subtotal  = baseFare + kmFare
  const gst       = subtotal * 0.05
  const total     = subtotal + gst

  async function handlePayment() {
    setError('')
    if (!name.trim())        { setError('Please enter your name.'); return }
    if (phone.length !== 10) { setError('Please enter a valid 10-digit phone number.'); return }

    setLoading(true)
    const loaded = await loadRazorpay()
    if (!loaded) { setError('Payment gateway failed to load. Check your internet.'); setLoading(false); return }

    const bookingDetails = { name, phone, pickup: from, drop: to, date, time, vehicle: selectedVehicle.name, tripType: tripLabel[tripType] }

    try {
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: total, bookingDetails }),
      })
      const order = await orderRes.json()

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Urban Miles',
        description: `${selectedVehicle.name} — ${tripLabel[tripType]}`,
        order_id: order.orderId,
        handler: async (response: RazorpayResponse) => {
          const verifyRes = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...response, bookingDetails }),
          })
          const result = await verifyRes.json()
          if (result.success) {
            const successParams = new URLSearchParams({
              bookingId: result.bookingId, paymentId: result.paymentId,
              name, phone, pickup: from, drop: to, date, time,
              vehicle: selectedVehicle.name, tripType: tripLabel[tripType],
              amount: subtotal.toFixed(2), gst: gst.toFixed(2), total: total.toFixed(2),
            })
            router.push(`/booking-success?${successParams.toString()}`)
          } else {
            setError('Payment verification failed. Please contact support.')
            setLoading(false)
          }
        },
        prefill: { name, contact: phone },
        theme: { color: '#5B21B6' },
        modal: { ondismiss: () => setLoading(false) },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#5B21B6] text-sm mb-6 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Back to Home
        </Link>

        <h1 className="font-outfit font-black text-2xl text-slate-900 mb-2">Complete Your Booking</h1>
        <p className="text-slate-500 text-sm mb-8">Review your trip details and complete payment to confirm your ride.</p>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left — Trip Summary + Customer Details */}
          <div className="lg:col-span-2 space-y-5">

            {/* Trip Summary */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h2 className="font-outfit font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-[#5B21B6]" />
                Trip Details
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Trip Type', value: tripLabel[tripType] },
                  { label: 'Pickup', value: from },
                  { label: 'Drop', value: to },
                  { label: 'Date', value: date },
                  { label: 'Time', value: time },
                  ...(returnDate ? [{ label: 'Return Date', value: returnDate }] : []),
                ].map((d) => (
                  <div key={d.label}>
                    <div className="text-slate-400 text-[11px] uppercase tracking-wide">{d.label}</div>
                    <div className="text-slate-900 text-sm font-semibold mt-0.5">{d.value || '—'}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicle Selection */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h2 className="font-outfit font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-[#F59E0B]" />
                Choose Vehicle
              </h2>
              <div className="grid sm:grid-cols-3 gap-3">
                {vehicles.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVehicle(v.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      vehicle === v.id
                        ? 'border-[#5B21B6] bg-purple-50'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="text-3xl mb-2">{v.emoji}</div>
                    <div className={`font-bold text-sm ${vehicle === v.id ? 'text-[#5B21B6]' : 'text-slate-900'}`}>{v.name}</div>
                    <div className="text-slate-400 text-xs">{v.type}</div>
                    <div className="text-slate-500 text-xs mt-1">{v.examples}</div>
                    <div className="mt-2 font-semibold text-sm" style={{ color: v.accent }}>₹{v.price}/km · Base ₹{v.base}</div>
                    <div className="text-slate-400 text-[11px]">{v.seats} seats</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Details */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h2 className="font-outfit font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-[#5B21B6]" />
                Your Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-500 text-xs font-medium mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6]/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 text-xs font-medium mb-1.5">Phone Number *</label>
                  <div className="flex">
                    <span className="flex items-center px-3 bg-slate-50 border border-r-0 border-slate-200 rounded-l-xl text-slate-500 text-sm">+91</span>
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className="flex-1 border border-slate-200 rounded-r-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6]/10 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right — Fare Summary + Pay */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm sticky top-24">
              <h2 className="font-outfit font-bold text-slate-900 text-base mb-4">Fare Estimate</h2>

              <div className="text-center py-4 border border-slate-100 rounded-xl bg-slate-50 mb-4">
                <div className="text-3xl mb-1">{selectedVehicle.emoji}</div>
                <div className="font-bold text-slate-900">{selectedVehicle.name}</div>
                <div className="text-slate-400 text-xs">{selectedVehicle.type} · {selectedVehicle.seats} seats</div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Base Fare</span>
                  <span className="text-slate-900">₹{baseFare}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Per KM (est. ~{estimatedKm}km)</span>
                  <span className="text-slate-900">₹{kmFare}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">GST (5%)</span>
                  <span className="text-slate-900">₹{gst.toFixed(0)}</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t border-slate-100 text-base">
                  <span className="text-slate-900">Total</span>
                  <span className="text-[#5B21B6] font-outfit text-xl">₹{total.toFixed(0)}</span>
                </div>
                <p className="text-[10px] text-slate-400 text-center">* Estimate only. Final fare based on actual km.</p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-xs px-3 py-2 rounded-xl mb-3">
                  ⚠️ {error}
                </div>
              )}

              <button
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#5B21B6] to-[#4C1D95] text-white font-bold py-4 rounded-xl text-sm hover:shadow-[0_0_25px_rgba(91,33,182,0.4)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                    Processing...
                  </>
                ) : (
                  <>Pay ₹{total.toFixed(0)} via Razorpay</>
                )}
              </button>

              <p className="text-center text-slate-400 text-[11px] mt-3">
                🔒 Secured · Free cancellation · No hidden charges
              </p>

              {/* Call alternative */}
              <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-100 text-center">
                <div className="text-amber-700 text-xs font-medium">Prefer to book by phone?</div>
                <a href="tel:7857870449" className="text-[#5B21B6] font-bold text-sm">+91 7857870449</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BookPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-4 border-[#5B21B6] border-t-transparent animate-spin" />
      </div>
    }>
      <BookPageContent />
    </Suspense>
  )
}
