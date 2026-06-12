import Link from 'next/link'

const fleet = [
  {
    name: 'Urban Comfort',
    type: 'Sedan',
    examples: 'Dzire / Etios / Amaze',
    seats: 4,
    luggage: 2,
    priceKm: '₹13/km',
    basePrice: '₹400',
    ac: true,
    best: 'Solo travel & couples',
    gradient: 'from-[#5B21B6]/20 to-transparent',
    accent: '#5B21B6',
    popular: true,
    emoji: '🚗',
  },
  {
    name: 'Urban Plus',
    type: 'SUV / MUV',
    examples: 'Ertiga / Marazzo',
    seats: 6,
    luggage: 4,
    priceKm: '₹16/km',
    basePrice: '₹600',
    ac: true,
    best: 'Families & groups',
    gradient: 'from-[#F59E0B]/20 to-transparent',
    accent: '#F59E0B',
    popular: false,
    emoji: '🚙',
  },
  {
    name: 'Urban Elite',
    type: 'Premium SUV',
    examples: 'Innova Crysta',
    seats: 7,
    luggage: 6,
    priceKm: '₹22/km',
    basePrice: '₹900',
    ac: true,
    best: 'Luxury & corporate',
    gradient: 'from-[#7C3AED]/20 to-transparent',
    accent: '#7C3AED',
    popular: false,
    emoji: '🏎️',
  },
]

export default function FleetShowcase() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#7C3AED]/8 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full border border-slate-200 px-4 py-2 mb-4">
            <span className="text-[#F59E0B] text-xs font-medium tracking-wider uppercase">Our Fleet</span>
          </div>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl text-slate-900 mb-4">
            Choose Your
            <span className="gradient-teal"> Perfect Ride</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Every vehicle is air-conditioned, sanitized, and driven by a verified professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fleet.map((car) => (
            <div
              key={car.name}
              className={`group relative glass border border-slate-200 rounded-2xl overflow-hidden card-hover bg-gradient-to-b ${car.gradient}`}
            >
              {car.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#5B21B6] to-[#4C1D95] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="p-6">
                {/* Car emoji (placeholder for actual image) */}
                <div
                  className="w-full h-32 rounded-2xl flex items-center justify-center mb-5 text-6xl"
                  style={{ background: `${car.accent}08` }}
                >
                  {car.emoji}
                </div>

                {/* Type badge */}
                <div
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                  style={{ background: `${car.accent}20`, color: car.accent }}
                >
                  {car.type}
                </div>

                <h3 className="font-outfit font-bold text-slate-900 text-xl mb-1">{car.name}</h3>
                <p className="text-slate-500 text-xs mb-5">{car.examples}</p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[
                    { icon: '👥', label: `${car.seats} Seats` },
                    { icon: '🧳', label: `${car.luggage} Bags` },
                    { icon: '❄️', label: 'AC' },
                  ].map((spec) => (
                    <div key={spec.label} className="glass border border-slate-200 rounded-xl p-2 text-center">
                      <div className="text-lg mb-0.5">{spec.icon}</div>
                      <div className="text-slate-600 text-[11px]">{spec.label}</div>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between glass border border-slate-200 rounded-xl p-3 mb-5">
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase tracking-wide">Per KM</div>
                    <div className="font-outfit font-bold text-lg" style={{ color: car.accent }}>{car.priceKm}</div>
                  </div>
                  <div className="w-px h-8 bg-slate-200" />
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase tracking-wide">Base Fare</div>
                    <div className="font-outfit font-bold text-lg" style={{ color: car.accent }}>{car.basePrice}</div>
                  </div>
                  <div className="w-px h-8 bg-slate-200" />
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase tracking-wide">Best For</div>
                    <div className="text-slate-900 text-xs font-medium">{car.best.split('&')[0].trim()}</div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="btn-shine w-full block text-center py-3 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(135deg, ${car.accent}, ${car.accent}CC)`,
                    color: 'white',
                  }}
                >
                  Book {car.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
