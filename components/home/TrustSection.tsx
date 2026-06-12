const trusts = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    ),
    title: 'Verified Drivers',
    description: 'Every driver undergoes background checks, training, and regular performance reviews.',
    color: '#5B21B6',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    title: 'Fixed Pricing',
    description: 'No surge pricing, no hidden fees. What you see at booking is exactly what you pay.',
    color: '#F59E0B',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
      </svg>
    ),
    title: 'Always On Time',
    description: 'We monitor traffic and plan ahead. Your driver is never late — guaranteed.',
    color: '#7C3AED',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
      </svg>
    ),
    title: '24/7 Support',
    description: 'Round-the-clock customer support via phone and WhatsApp. We are always here for you.',
    color: '#EC4899',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.76 2.84 21.45 1 20.56 1 19c0-1.18.75-2.24 1.81-2.69C5.72 15.13 12 11 12 3l1.5 2.5L16 3c0 0 1 5 1 5z"/>
        <path d="M12.71 15.56C11.41 16.5 10.24 17 9 17c-1.61 0-3.03-.96-3.71-2.37C6.27 13.9 7.5 13 9 13c1.5 0 2.73.9 3.71 2.56z"/>
      </svg>
    ),
    title: 'Clean & Safe Cars',
    description: 'All vehicles are sanitized before every ride and maintained to the highest standards.',
    color: '#10B981',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
      </svg>
    ),
    title: 'Easy Cancellation',
    description: 'Plans changed? Cancel anytime before the ride starts with no hassle.',
    color: '#F59E0B',
  },
]

export default function TrustSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#5B21B6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 mb-4">
            <span className="text-[#5B21B6] text-xs font-medium tracking-wider uppercase">Why Choose Us</span>
          </div>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl text-slate-900 mb-4">
            Built on
            <span className="gradient-gold"> Trust</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Every Urban Miles ride is designed around your safety, comfort, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trusts.map((trust) => (
            <div
              key={trust.title}
              className="group glass border border-slate-200 rounded-2xl p-6 card-hover relative overflow-hidden"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 0% 0%, ${trust.color}08 0%, transparent 60%)` }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${trust.color}12`, color: trust.color }}
              >
                {trust.icon}
              </div>

              <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">{trust.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{trust.description}</p>

              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${trust.color}60, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
