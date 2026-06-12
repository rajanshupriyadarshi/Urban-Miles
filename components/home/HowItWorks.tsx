const steps = [
  {
    number: '01',
    title: 'Choose Your Ride',
    description: 'Select from Airport Transfer, Outstation, or Local/Hourly. Enter pickup and drop details.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    color: '#5B21B6',
  },
  {
    number: '02',
    title: 'Pick Your Vehicle',
    description: 'Browse available cab categories — Sedan, SUV, or Luxury. All with fixed, upfront pricing.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
        <circle cx="7.5" cy="14.5" r="1.5"/>
        <circle cx="16.5" cy="14.5" r="1.5"/>
      </svg>
    ),
    color: '#F59E0B',
  },
  {
    number: '03',
    title: 'Confirm & Pay',
    description: 'Confirm your booking with secure payment. Get instant confirmation via SMS and email.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
      </svg>
    ),
    color: '#7C3AED',
  },
  {
    number: '04',
    title: 'Enjoy Your Ride',
    description: 'Your driver arrives on time. Track live location, ride comfortably, and arrive stress-free.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    color: '#EC4899',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#5B21B6]/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 mb-4">
            <span className="text-[#5B21B6] text-xs font-medium tracking-wider uppercase">How It Works</span>
          </div>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl text-slate-900 mb-4">
            Book in Under
            <span className="gradient-gold"> 60 Seconds</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-lg mx-auto">
            Simple, fast, and reliable. Your next ride is just a few taps away.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-px"
            style={{ background: 'linear-gradient(90deg, #5B21B6, #F59E0B, #7C3AED, #EC4899)' }}
          />

          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center group">
              {/* Step number circle */}
              <div
                className="relative w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${step.color}15`,
                  border: `2px solid ${step.color}40`,
                  boxShadow: `0 0 30px ${step.color}20`,
                }}
              >
                <div style={{ color: step.color }}>{step.icon}</div>
                <div
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: step.color }}
                >
                  {i + 1}
                </div>
              </div>

              <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
