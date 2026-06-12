'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import { generateBillPdf } from '@/lib/generateBillPdf'

function BookingSuccessContent() {
  const params = useSearchParams()

  const bookingId  = params.get('bookingId')  || 'UM00000000'
  const paymentId  = params.get('paymentId')  || ''
  const name       = params.get('name')       || ''
  const phone      = params.get('phone')      || ''
  const pickup     = params.get('pickup')     || ''
  const drop       = params.get('drop')       || ''
  const date       = params.get('date')       || ''
  const time       = params.get('time')       || ''
  const vehicle    = params.get('vehicle')    || ''
  const tripType   = params.get('tripType')   || ''
  const amount     = parseFloat(params.get('amount') || '0')
  const gst        = parseFloat(params.get('gst')    || '0')
  const total      = parseFloat(params.get('total')  || '0')

  const paymentDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })

  function handleDownload() {
    generateBillPdf({
      bookingId,
      paymentId,
      customerName: name,
      customerPhone: phone,
      pickup,
      drop,
      date,
      time,
      vehicle,
      tripType,
      amount,
      gst,
      totalAmount: total,
      paymentDate,
    })
  }

  const details = [
    { label: 'Booking ID',   value: bookingId,  highlight: true },
    { label: 'Payment ID',   value: paymentId   || '—' },
    { label: 'Customer',     value: name },
    { label: 'Phone',        value: `+91 ${phone}` },
    { label: 'Pickup',       value: pickup },
    { label: 'Drop',         value: drop },
    { label: 'Date',         value: date },
    { label: 'Time',         value: time },
    { label: 'Vehicle',      value: vehicle },
    { label: 'Trip Type',    value: tripType },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-20">
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#5B21B6]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#F59E0B]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-2xl">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-[#5B21B6] to-[#4C1D95] px-8 pt-10 pb-16 text-center relative">
            <div className="absolute inset-0 opacity-10"
              style={{backgroundImage:'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize:'20px 20px'}}
            />
            {/* Animated checkmark */}
            <div className="relative mx-auto w-20 h-20 mb-4">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5B21B6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="font-outfit font-bold text-3xl text-white mb-2">Booking Confirmed!</h1>
            <p className="text-blue-200 text-sm">Your ride has been successfully booked and payment received.</p>

            {/* Booking ID badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mt-4 border border-white/20">
              <span className="text-blue-200 text-xs">Booking ID:</span>
              <span className="text-white font-bold font-outfit text-sm tracking-wider">{bookingId}</span>
            </div>
          </div>

          {/* White card bump up */}
          <div className="relative -mt-8 mx-6">
            <div className="bg-green-50 border border-green-200 rounded-2xl px-5 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <div>
                <div className="text-green-800 font-semibold text-sm">Payment Successful</div>
                <div className="text-green-600 text-xs">₹{total.toFixed(2)} paid · {paymentDate}</div>
              </div>
              <div className="ml-auto text-right">
                <div className="font-outfit font-bold text-green-700 text-xl">₹{total.toFixed(2)}</div>
                <div className="text-green-500 text-xs">Total Paid</div>
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div className="px-6 pt-6 pb-2">
            <h2 className="font-outfit font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-[#5B21B6] inline-block" />
              Trip Details
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {details.map((d) => (
                <div key={d.label} className="flex items-center justify-between py-2 border-b border-slate-50">
                  <span className="text-slate-500 text-sm">{d.label}</span>
                  <span className={`text-sm font-medium ${d.highlight ? 'text-[#5B21B6] font-bold font-outfit' : 'text-slate-900'}`}>
                    {d.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fare breakdown */}
          <div className="px-6 py-4">
            <h2 className="font-outfit font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-[#F59E0B] inline-block" />
              Fare Breakdown
            </h2>
            <div className="bg-slate-50 rounded-2xl p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Base + Per KM Fare</span>
                <span className="text-slate-900 font-medium">₹{amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">GST (5%)</span>
                <span className="text-slate-900 font-medium">₹{gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t border-slate-200">
                <span className="text-slate-900">Total Paid</span>
                <span className="text-[#5B21B6] font-outfit text-lg">₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 pb-8 space-y-3">
            {/* Download PDF Bill */}
            <button
              onClick={handleDownload}
              className="w-full btn-shine bg-gradient-to-r from-[#5B21B6] to-[#4C1D95] text-white font-bold py-4 rounded-2xl text-sm hover:shadow-[0_0_30px_rgba(91,33,182,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF Bill
            </button>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/917857870449?text=Hi! My booking ID is ${bookingId}. I've completed payment. Name: ${name}, Pickup: ${pickup}, Date: ${date}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 border-2 border-[#25D366] text-[#25D366] font-bold py-3.5 rounded-2xl text-sm hover:bg-[#25D366]/5 transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Share on WhatsApp
            </a>

            <Link
              href="/"
              className="w-full flex items-center justify-center gap-2 text-slate-500 py-3 rounded-2xl text-sm hover:text-slate-900 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Support note */}
          <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 text-center">
            <p className="text-slate-500 text-xs">
              Need help? Call us at{' '}
              <a href="tel:7857870449" className="text-[#5B21B6] font-semibold">+91 7857870449</a>
              {' '}· Your driver will contact you 30 mins before pickup.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BookingSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-[#5B21B6] border-t-transparent animate-spin mx-auto mb-4" />
          <p className="text-slate-500">Loading your booking...</p>
        </div>
      </div>
    }>
      <BookingSuccessContent />
    </Suspense>
  )
}
