import Image from 'next/image'
import CTASection from '@/components/home/CTASection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'About Urban Miles | Premium Cab Service Pune',
  description: 'Learn about Urban Miles — Pune\'s premium cab service. Meet our leadership team and learn about our mission and values.',
}

const values = [
  { icon: '🎯', title: 'Punctuality First',  desc: 'We treat your time as sacred. On-time pickup is non-negotiable.' },
  { icon: '🔒', title: 'Safety Always',       desc: 'Verified drivers, tracked rides, and safe vehicles — every single trip.' },
  { icon: '💎', title: 'Premium Experience', desc: 'From booking to arrival, we obsess over every detail of your journey.' },
  { icon: '🤝', title: 'Transparent Fares',  desc: 'No hidden charges. No surge pricing. Ever. What you see is what you pay.' },
]

const leaders = [
  {
    name:       'Akash Kumar Singh',
    role:       'CEO',
    title:      'Founder & Chief Executive Officer',
    titleColor: '#5B21B6',
    photo:      '/ceo-akash.png',
    initials:   'AK',
    bgColor:    '#5B21B6',
    gradFrom:   '#5B21B6',
    gradTo:     '#7C3AED',
    tags:       ['Founder', 'Visionary', 'Leader'],
    positions: [
      'Founder, Urban Miles (July 2025)',
      'Former logistics consultant — Pune region',
      'Member, Startup Ecosystem, Pune',
      'Mentor, Young Entrepreneurs Forum',
    ],
    message: [
      'At Urban Miles, our journey began with a simple vision — to transform urban transportation through innovation, reliability, and exceptional customer service. Every decision we make is guided by our commitment to creating seamless mobility solutions that people can trust.',
      'I believe that true success comes from putting customers first, embracing technology, and fostering a culture of integrity and continuous improvement. Our dedicated team works tirelessly to ensure that every ride reflects our values of safety, professionalism, and excellence.',
      'I extend my heartfelt gratitude to our customers, partners, and employees whose trust and support have been instrumental in our growth. Together, we will continue to build smarter mobility solutions and set new benchmarks for quality and innovation.',
    ],
    closing: 'Thank you for being an important part of the Urban Miles journey.',
  },
  {
    name:       'Puja Singh',
    role:       'Co-Founder & MD',
    title:      'Co-Founder & Managing Director',
    titleColor: '#D97706',
    photo:      '/md-puja.png',
    initials:   'PS',
    bgColor:    '#F59E0B',
    gradFrom:   '#F59E0B',
    gradTo:     '#F97316',
    tags:       ['Co-Founder', 'Strategist', 'Innovator'],
    positions: [
      'Co-Founder, Urban Miles (July 2025)',
      'Managing Director, Urban Miles',
      'Member, Women Entrepreneurs Network, Pune',
      'Advisor, Sustainable Urban Mobility Initiative',
    ],
    message: [
      'At Urban Miles, we believe transportation is more than simply moving from one place to another — it is about connecting people, creating opportunities, and delivering experiences built on trust and reliability.',
      'As Managing Director, I am committed to driving sustainable growth while maintaining the highest standards of service excellence. Our focus remains on innovation, operational efficiency, and customer satisfaction, ensuring that every journey with Urban Miles is safe, comfortable, and dependable.',
      'We continuously invest in technology, strengthen our partnerships, and empower our talented team to exceed expectations and adapt to the evolving needs of modern mobility.',
    ],
    closing: 'I sincerely thank our customers, business partners, and employees for their continued confidence and support. Together, we will continue shaping the future of urban mobility.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden bg-slate-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#5B21B6]/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#5B21B6]/10 rounded-full px-4 py-2 mb-6">
            <span className="text-[#5B21B6] text-xs font-semibold uppercase tracking-widest">Our Story</span>
          </div>
          <h1 className="font-outfit font-black text-5xl sm:text-6xl text-slate-900 mb-6">
            About{' '}
            <span className="text-[#5B21B6]">Urban<span className="text-[#F59E0B]">Miles</span></span>
          </h1>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            Born in Lohegaon, Pune on July 1, 2025 — founded with one simple belief: every passenger deserves a premium, stress-free ride.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-outfit font-bold text-4xl text-slate-900 mb-6">
                Why We Started
                <span className="text-[#5B21B6] block">Urban Miles</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>The founders of Urban Miles experienced firsthand the frustration of unreliable cabs, surge pricing, and unprofessional drivers. Whether it was a missed flight, an uncomfortable ride, or a surprise bill — the problems were consistent.</p>
                <p>We decided to build something different. Urban Miles launched in Lohegaon, Pune with a fleet of clean, well-maintained cars and a strict driver verification process. Our promise: fixed fares, professional service, and a ride you can rely on.</p>
                <p>Since July 2025, we&apos;ve served hundreds of happy passengers across Pune and beyond, and we&apos;re just getting started.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Founded',       value: 'July 2025',          color: '#5B21B6' },
                { label: 'Headquarters', value: 'Lohegaon, Pune',     color: '#F59E0B' },
                { label: 'Fleet',         value: 'Sedan, SUV, Luxury', color: '#7C3AED' },
                { label: 'Mission',       value: 'Ride Premium',       color: '#EC4899' },
              ].map(item => (
                <div key={item.label} className="border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">{item.label}</div>
                  <div className="font-outfit font-bold text-lg" style={{ color: item.color }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-outfit font-bold text-3xl text-slate-900 text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map(v => (
              <div key={v.title} className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 hover:shadow-md transition-shadow">
                <div className="text-3xl">{v.icon}</div>
                <div>
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-1">{v.title}</h3>
                  <p className="text-slate-500 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#5B21B6]/10 rounded-full px-4 py-2 mb-4">
              <span className="text-[#5B21B6] text-xs font-semibold uppercase tracking-widest">Leadership</span>
            </div>
            <h2 className="font-outfit font-black text-4xl text-slate-900">
              Meet Our <span className="text-[#5B21B6]">Leaders</span>
            </h2>
          </div>

          {/* Leader cards */}
          <div className="space-y-10">
            {leaders.map((leader) => (
              <div key={leader.name} className="rounded-3xl overflow-hidden shadow-lg border border-slate-100">

                <div className="flex flex-col md:flex-row">

                  {/* ── Left: Gradient Profile Panel ── */}
                  <div
                    className="md:w-64 flex-shrink-0 flex flex-col items-center justify-center p-10 text-white relative overflow-hidden"
                    style={{ background: `linear-gradient(145deg, ${leader.gradFrom}, ${leader.gradTo})` }}
                  >
                    {/* Decorative circles */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10" />

                    {/* Photo */}
                    <div className="relative z-10 mb-5">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl">
                        <Image
                          src={leader.photo}
                          alt={leader.name}
                          width={128}
                          height={128}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      {/* Role badge */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-[10px] font-black px-3 py-0.5 rounded-full whitespace-nowrap shadow-md"
                        style={{ color: leader.gradFrom }}>
                        {leader.role}
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="relative z-10 font-outfit font-black text-lg text-center leading-tight mt-2">{leader.name}</h3>
                    <p className="relative z-10 text-white/80 text-xs text-center mt-1">Urban Miles</p>

                    {/* Divider */}
                    <div className="relative z-10 w-10 h-px bg-white/40 my-4" />

                    {/* Tags */}
                    <div className="relative z-10 flex flex-wrap justify-center gap-2">
                      {leader.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-semibold bg-white/20 border border-white/30 rounded-full px-2.5 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ── Right: Message & Positions ── */}
                  <div className="flex-1 bg-white p-8">

                    {/* Title */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-1 h-8 rounded-full" style={{ backgroundColor: leader.gradFrom }} />
                      <div>
                        <div className="font-outfit font-black text-slate-900 text-xl">{leader.name}</div>
                        <div className="text-sm font-semibold" style={{ color: leader.titleColor }}>{leader.title}</div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-3 text-slate-600 text-sm leading-relaxed mb-6">
                      {leader.message.map((para, i) => <p key={i}>{para}</p>)}
                      <p className="italic text-slate-400 text-xs border-l-2 pl-3" style={{ borderColor: leader.gradFrom }}>
                        {leader.closing}
                      </p>
                    </div>

                    {/* Key Positions */}
                    <div className="grid sm:grid-cols-2 gap-2">
                      {leader.positions.map(pos => (
                        <div key={pos} className="flex items-center gap-2.5 bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-100">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: leader.gradFrom }} />
                          <span className="text-slate-600 text-xs">{pos}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
