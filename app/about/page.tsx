import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/home/CTASection'

export const metadata = {
  title: 'About Urban Miles | Premium Cab Service Pune',
  description: 'Learn about Urban Miles — Pune\'s premium cab service founded in July 2025 in Lohegaon. Our mission, values, and story.',
}

const values = [
  { icon: '🎯', title: 'Punctuality First', desc: 'We treat your time as sacred. On-time pickup is non-negotiable.' },
  { icon: '🔒', title: 'Safety Always', desc: 'Verified drivers, tracked rides, and safe vehicles — every single trip.' },
  { icon: '💎', title: 'Premium Experience', desc: 'From booking to arrival, we obsess over every detail of your journey.' },
  { icon: '🤝', title: 'Transparent Fares', desc: 'No hidden charges. No surge pricing. Ever. What you see is what you pay.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#5B21B6]/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 mb-6">
            <span className="text-[#5B21B6] text-xs font-medium">Our Story</span>
          </div>
          <h1 className="font-outfit font-bold text-5xl sm:text-6xl text-slate-900 mb-6">
            Pune&apos;s Newest
            <span className="gradient-gold block">Premium Cab Service</span>
          </h1>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            Born in Lohegaon, Pune on July 1, 2025, Urban Miles was founded with one simple belief: every passenger deserves a premium, stress-free ride — without paying premium prices.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-outfit font-bold text-4xl text-slate-900 mb-6">
                Why We Started
                <span className="gradient-gold block">Urban Miles</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  The founders of Urban Miles experienced firsthand the frustration of unreliable cabs, surge pricing, and unprofessional drivers. Whether it was a missed flight, an uncomfortable ride, or a surprise bill — the problems were consistent.
                </p>
                <p>
                  We decided to build something different. Urban Miles launched in Lohegaon, Pune with a fleet of clean, well-maintained cars and a strict driver verification process. Our promise: fixed fares, professional service, and a ride you can rely on.
                </p>
                <p>
                  Since July 2025, we&apos;ve served thousands of happy passengers across Pune and beyond, and we&apos;re just getting started.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Founded', value: 'July 2025', color: '#5B21B6' },
                { label: 'Headquarters', value: 'Lohegaon, Pune', color: '#F59E0B' },
                { label: 'Fleet', value: 'Sedan, SUV, Luxury', color: '#7C3AED' },
                { label: 'Mission', value: 'Ride Premium', color: '#EC4899' },
              ].map((item) => (
                <div key={item.label} className="glass border border-slate-200 rounded-2xl p-5 card-hover">
                  <div className="text-xs text-slate-600 uppercase tracking-widest mb-2">{item.label}</div>
                  <div className="font-outfit font-bold text-lg" style={{ color: item.color }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-outfit font-bold text-3xl text-slate-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="glass border border-slate-200 rounded-2xl p-6 card-hover flex gap-4">
                <div className="text-3xl">{v.icon}</div>
                <div>
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-1">{v.title}</h3>
                  <p className="text-slate-600 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
