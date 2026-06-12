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

      {/* ── Leadership Messages ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#5B21B6]/10 rounded-full px-4 py-2 mb-4">
              <span className="text-[#5B21B6] text-xs font-semibold uppercase tracking-widest">Leadership</span>
            </div>
            <h2 className="font-outfit font-black text-4xl text-slate-900">
              Words from Our <span className="text-[#5B21B6]">Leaders</span>
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
              The vision and values that drive every journey at Urban Miles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* CEO Card */}
            <div className="relative bg-gradient-to-br from-[#5B21B6] to-[#4C1D95] rounded-3xl p-8 text-white overflow-hidden shadow-xl shadow-purple-200">
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />

              {/* Quote icon */}
              <div className="relative text-[#F59E0B] text-6xl font-serif leading-none mb-4 opacity-60">&ldquo;</div>

              {/* Message */}
              <div className="relative space-y-4 text-white/90 text-sm leading-relaxed mb-8">
                <p>
                  At Urban Miles, our journey began with a simple vision — to transform urban transportation through innovation, reliability, and exceptional customer service. Every decision we make is guided by our commitment to creating seamless mobility solutions that people can trust.
                </p>
                <p>
                  I believe that true success comes from putting customers first, embracing technology, and fostering a culture of integrity and continuous improvement. Our dedicated team works tirelessly to ensure that every ride reflects our values of safety, professionalism, and excellence.
                </p>
                <p className="text-white/70 italic">
                  Thank you for being an important part of the Urban Miles journey.
                </p>
              </div>

              {/* Signature */}
              <div className="relative flex items-center gap-4 border-t border-white/20 pt-5">
                <div className="w-12 h-12 rounded-full bg-[#F59E0B] flex items-center justify-center text-slate-900 font-black text-lg font-outfit flex-shrink-0">
                  AK
                </div>
                <div>
                  <div className="font-outfit font-black text-lg text-white">Akash Kumar Singh</div>
                  <div className="text-[#F59E0B] text-xs font-semibold tracking-wide">Founder &amp; Chief Executive Officer (CEO)</div>
                  <div className="text-white/50 text-xs mt-0.5">Urban Miles</div>
                </div>
              </div>
            </div>

            {/* MD Card */}
            <div className="relative bg-white border-2 border-slate-100 rounded-3xl p-8 overflow-hidden shadow-xl shadow-slate-100">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F59E0B] to-[#5B21B6] rounded-t-3xl" />
              {/* Decorative */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-50 rounded-full" />

              {/* Quote icon */}
              <div className="relative text-[#F59E0B] text-6xl font-serif leading-none mb-4 opacity-60">&ldquo;</div>

              {/* Message */}
              <div className="relative space-y-4 text-slate-600 text-sm leading-relaxed mb-8">
                <p>
                  At Urban Miles, we believe transportation is more than simply moving from one place to another — it is about connecting people, creating opportunities, and delivering experiences built on trust and reliability.
                </p>
                <p>
                  As Managing Director, I am committed to driving sustainable growth while maintaining the highest standards of service excellence. Our focus remains on innovation, operational efficiency, and customer satisfaction, ensuring that every journey with Urban Miles is safe, comfortable, and dependable.
                </p>
                <p>
                  We continuously invest in technology, strengthen our partnerships, and empower our talented team to exceed expectations and adapt to the evolving needs of modern mobility.
                </p>
                <p className="text-slate-400 italic">
                  I sincerely thank our customers, business partners, and employees for their continued confidence and support.
                </p>
              </div>

              {/* Signature */}
              <div className="relative flex items-center gap-4 border-t border-slate-100 pt-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#f97316] flex items-center justify-center text-white font-black text-lg font-outfit flex-shrink-0">
                  PS
                </div>
                <div>
                  <div className="font-outfit font-black text-lg text-slate-900">Puja Singh</div>
                  <div className="text-[#5B21B6] text-xs font-semibold tracking-wide">Managing Director (MD)</div>
                  <div className="text-slate-400 text-xs mt-0.5">Urban Miles</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
