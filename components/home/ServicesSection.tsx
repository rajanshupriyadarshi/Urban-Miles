'use client'
import Link from 'next/link'

const services = [
  {
    id: 'airport',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    ),
    title: 'Airport Transfer',
    description: 'Punctual airport pickups and drops. Track flights, meet & greet, and no waiting charges.',
    href: '/airport-cabs',
    color: '#5B21B6',
    badge: 'Most Popular',
    features: ['Flight tracking', 'Meet & Greet', 'No waiting fee'],
  },
  {
    id: 'outstation',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
      </svg>
    ),
    title: 'Outstation Rides',
    description: 'One-way and round-trip intercity travel. Comfortable rides to any destination across Maharashtra.',
    href: '/outstation-cabs',
    color: '#F59E0B',
    badge: 'Best Value',
    features: ['One Way', 'Round Trip', 'Transparent fares'],
  },
  {
    id: 'local',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    title: 'Local / Hourly',
    description: 'Book a cab for a few hours for multiple stops. Perfect for shopping, meetings, or city tours.',
    href: '/local-cabs',
    color: '#7C3AED',
    badge: 'Flexible',
    features: ['2–12 hours', 'Multiple stops', 'Fixed hourly rate'],
  },
  {
    id: 'corporate',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>
    ),
    title: 'Corporate Rides',
    description: 'Dedicated corporate accounts with monthly billing, MIS reports, and priority support.',
    href: '/contact',
    color: '#EC4899',
    badge: 'For Business',
    features: ['Monthly billing', 'Priority support', 'MIS reports'],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-[#5B21B6]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 mb-4">
            <span className="text-[#5B21B6] text-xs font-medium tracking-wider uppercase">Our Services</span>
          </div>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl text-slate-900 mb-4">
            Everything You Need,
            <span className="gradient-gold block">One Platform</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            From quick airport runs to multi-day outstation trips — Urban Miles covers every journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 card-hover cursor-pointer overflow-hidden block"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}10 0%, transparent 70%)` }}
              />

              {/* Badge */}
              <div
                className="absolute top-4 right-4 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: `${service.color}20`, color: service.color }}
              >
                {service.badge}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${service.color}15`, color: service.color }}
              >
                {service.icon}
              </div>

              <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{service.description}</p>

              {/* Features */}
              <ul className="space-y-1.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                    <span style={{ color: service.color }}>→</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Bottom arrow */}
              <div
                className="mt-5 flex items-center gap-1.5 text-xs font-semibold group-hover:gap-3 transition-all duration-300"
                style={{ color: service.color }}
              >
                Book Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              {/* Bottom glow line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
