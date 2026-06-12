'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const tripTabs = [
  { id: 'airport',    label: 'Airport',               icon: '✈️' },
  { id: 'one-way',    label: 'Outstation One-Way',     icon: '→' },
  { id: 'round-trip', label: 'Outstation Round-Trip',  icon: '⇄' },
  { id: 'hourly',     label: 'Hourly Rental',          icon: '🕐' },
]

const trustBadges = [
  { icon: '✓', text: 'Guaranteed Rides' },
  { icon: '✓', text: '24x7 Customer Support' },
  { icon: '✓', text: 'Free Cancellation' },
  { icon: '✓', text: 'Verified Drivers' },
]

const today = new Date().toISOString().split('T')[0]
const nowTime = new Date().toTimeString().slice(0, 5)

export default function HeroSection() {
  const router = useRouter()
  const [activeTab, setActiveTab]   = useState('airport')
  const [from, setFrom]             = useState('')
  const [to, setTo]                 = useState('')
  const [departure, setDeparture]   = useState(today)
  const [pickupTime, setPickupTime] = useState(nowTime)
  const [duration, setDuration]     = useState('4')
  const [returnDate, setReturnDate] = useState('')
  const [error, setError]           = useState('')

  function swapLocations() {
    setFrom(to)
    setTo(from)
  }

  function handleGo() {
    setError('')
    if (!from) { setError('Please enter pickup location.'); return }
    if (activeTab !== 'hourly' && !to) { setError('Please enter drop location.'); return }
    if (!departure) { setError('Please select departure date.'); return }

    const params = new URLSearchParams({
      from,
      to: activeTab === 'hourly' ? `Local Ride (${duration} hrs)` : to,
      date: departure,
      time: pickupTime,
      tripType: activeTab,
      ...(activeTab === 'round-trip' && returnDate ? { returnDate } : {}),
    })
    router.push(`/book?${params.toString()}`)
  }

  const isHourly     = activeTab === 'hourly'
  const isRoundTrip  = activeTab === 'round-trip'

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden">

      {/* ── Background Image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-10">

        {/* Headline */}
        <h1 className="font-outfit font-black text-3xl sm:text-4xl md:text-5xl text-white mb-3 leading-tight drop-shadow-lg">
          Experience Hassle-Free Online Cab Booking in{' '}
          <span style={{ color: '#F59E0B' }}>Pune</span>
        </h1>
        <p className="text-white/80 text-lg sm:text-xl mb-8 font-light drop-shadow">
          Fast, Easy &amp; Reliable — Book Your Cab Now
        </p>

        {/* ── Booking Card ── */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Trip Type Tabs */}
          <div className="flex border-b border-slate-100 overflow-x-auto scrollbar-hide">
            {tripTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setError('') }}
                className={`flex-shrink-0 flex items-center gap-1.5 px-5 py-3.5 text-sm font-semibold transition-all duration-200 border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#5B21B6] text-[#5B21B6] bg-purple-50'
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                {activeTab === tab.id ? (
                  <span className="w-4 h-4 rounded-full bg-[#5B21B6] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </span>
                ) : (
                  <span className="w-4 h-4 rounded-full border-2 border-slate-300" />
                )}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">

            {/* FROM */}
            <div className="flex-1 px-4 py-3 min-w-0">
              <label className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">From</label>
              <input
                type="text"
                placeholder="Pickup Location"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full text-slate-900 text-sm font-medium placeholder-slate-400 outline-none bg-transparent"
              />
            </div>

            {/* SWAP button */}
            {!isHourly && (
              <div className="hidden sm:flex items-center px-2">
                <button
                  onClick={swapLocations}
                  className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#5B21B6] hover:text-[#5B21B6] transition-all duration-200 flex-shrink-0"
                  title="Swap locations"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/>
                  </svg>
                </button>
              </div>
            )}

            {/* TO / DURATION */}
            {isHourly ? (
              <div className="flex-1 px-4 py-3 min-w-0">
                <label className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">Duration</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full text-slate-900 text-sm font-medium outline-none bg-transparent"
                >
                  {[2,3,4,6,8,10,12].map(h => (
                    <option key={h} value={String(h)}>{h} Hours</option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="flex-1 px-4 py-3 min-w-0">
                <label className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">To</label>
                <input
                  type="text"
                  placeholder="Drop Location"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full text-slate-900 text-sm font-medium placeholder-slate-400 outline-none bg-transparent"
                />
              </div>
            )}

            {/* DEPARTURE DATE */}
            <div className="flex-shrink-0 px-4 py-3">
              <label className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">
                Departure {isRoundTrip ? '(Go)' : ''}
              </label>
              <input
                type="date"
                value={departure}
                min={today}
                onChange={(e) => setDeparture(e.target.value)}
                className="text-slate-900 text-sm font-medium outline-none bg-transparent w-36"
              />
            </div>

            {/* RETURN DATE (Round Trip) */}
            {isRoundTrip && (
              <div className="flex-shrink-0 px-4 py-3">
                <label className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">Return</label>
                <input
                  type="date"
                  value={returnDate}
                  min={departure || today}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="text-slate-900 text-sm font-medium outline-none bg-transparent w-36"
                />
              </div>
            )}

            {/* PICKUP TIME */}
            <div className="flex-shrink-0 px-4 py-3">
              <label className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">Pickup Time</label>
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="text-slate-900 text-sm font-medium outline-none bg-transparent w-24"
              />
            </div>

            {/* GO BUTTON */}
            <div className="flex-shrink-0 p-2">
              <button
                onClick={handleGo}
                className="h-full min-h-[56px] px-8 bg-gradient-to-r from-[#5B21B6] to-[#4C1D95] text-white font-bold text-base rounded-xl hover:shadow-[0_0_25px_rgba(91,33,182,0.5)] hover:scale-[1.03] transition-all duration-300 flex items-center gap-2"
              >
                Go
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="px-4 pb-3 text-red-500 text-xs font-medium">⚠️ {error}</div>
          )}
        </div>

        {/* ── Trust Badges ── */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6">
          {trustBadges.map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-white/90 text-sm">
              <span className="w-5 h-5 rounded-full bg-[#5B21B6] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                {badge.icon}
              </span>
              {badge.text}
            </div>
          ))}
        </div>

        {/* Phone CTA */}
        <div className="mt-5">
          <a
            href="tel:7857870449"
            className="inline-flex items-center gap-2 text-white/80 hover:text-[#F59E0B] text-sm transition-colors duration-200"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Or call us: <strong className="text-white">+91 7857870449</strong>
          </a>
        </div>
      </div>
    </section>
  )
}
