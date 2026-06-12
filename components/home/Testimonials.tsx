'use client'
import { useState } from 'react'

const reviews = [
  {
    name: 'Priya Sharma',
    location: 'Pune, Maharashtra',
    rating: 5,
    text: 'Booked Urban Miles for my early morning airport transfer. The driver was on time, the car was spotless, and the fare was exactly what was quoted. No surprises. Will always use them!',
    avatar: 'PS',
    color: '#5B21B6',
    trip: 'Airport Transfer',
  },
  {
    name: 'Rahul Mehta',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'Did a Pune to Mumbai trip. The Innova was amazing, driver knew alternate routes to avoid traffic, and we reached in 2.5 hours. Pricing was transparent and very fair.',
    avatar: 'RM',
    color: '#F59E0B',
    trip: 'Outstation',
  },
  {
    name: 'Ananya Kulkarni',
    location: 'Pune, Maharashtra',
    rating: 5,
    text: 'Used the hourly booking for a day of hospital visits and errands. The driver was patient, helpful, and professional. Highly recommend Urban Miles for senior citizens too!',
    avatar: 'AK',
    color: '#7C3AED',
    trip: 'Local Hourly',
  },
  {
    name: 'Vikram Singh',
    location: 'Lohegaon, Pune',
    rating: 5,
    text: 'Our company has switched all employee transport to Urban Miles. The billing is automated, reports are clean, and the team is super responsive. Best decision we made.',
    avatar: 'VS',
    color: '#EC4899',
    trip: 'Corporate',
  },
  {
    name: 'Deepika Joshi',
    location: 'Nashik, Maharashtra',
    rating: 5,
    text: 'Took a Pune-Shirdi trip with family. All 6 of us fit comfortably in the Innova. Reasonable price, great driver, and on-time drop. Definitely booking again!',
    avatar: 'DJ',
    color: '#10B981',
    trip: 'Outstation',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#EC4899]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full border border-slate-200 px-4 py-2 mb-4">
            <span className="text-[#EC4899] text-xs font-medium tracking-wider uppercase">Customer Stories</span>
          </div>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl text-slate-900 mb-4">
            Real People,
            <span className="gradient-gold"> Real Reviews</span>
          </h2>
        </div>

        {/* Featured Review */}
        <div className="max-w-3xl mx-auto mb-10">
          <div
            className="glass border border-slate-200 rounded-3xl p-8 relative overflow-hidden transition-all duration-500"
          >
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ background: `radial-gradient(circle at 100% 0%, ${reviews[active].color}08 0%, transparent 60%)` }}
            />

            {/* Quote icon */}
            <div className="text-6xl text-[#5B21B6]/20 font-serif leading-none mb-4">&ldquo;</div>

            <p className="text-slate-900 text-lg leading-relaxed mb-6 relative">
              {reviews[active].text}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: reviews[active].color }}
                >
                  {reviews[active].avatar}
                </div>
                <div>
                  <div className="text-slate-900 font-semibold">{reviews[active].name}</div>
                  <div className="text-slate-600 text-sm">{reviews[active].location}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex gap-0.5 justify-end mb-1">
                  {[...Array(reviews[active].rating)].map((_, i) => (
                    <span key={i} className="text-[#5B21B6] text-sm">★</span>
                  ))}
                </div>
                <div
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: `${reviews[active].color}20`, color: reviews[active].color }}
                >
                  {reviews[active].trip}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selector buttons */}
        <div className="flex justify-center gap-3 flex-wrap">
          {reviews.map((review, i) => (
            <button
              key={review.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                active === i
                  ? 'bg-gradient-to-r from-[#5B21B6] to-[#4C1D95] text-white font-semibold shadow-lg'
                  : 'glass border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
                style={{
                  background: active === i ? 'rgba(0,0,0,0.2)' : review.color,
                  color: 'white',
                }}
              >
                {review.avatar}
              </div>
              {review.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
