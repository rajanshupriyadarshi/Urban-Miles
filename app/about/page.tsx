import Image from 'next/image'
import CTASection from '@/components/home/CTASection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'About Urban Miles | Premium Cab Service Pune',
  description: 'Learn about Urban Miles — Pune\'s premium cab service. Meet our leadership team and learn about our mission and values.',
}

const values = [
  { icon: '🎯', title: 'Punctuality First',    desc: 'We treat your time as sacred. On-time pickup is non-negotiable.' },
  { icon: '🔒', title: 'Safety Always',         desc: 'Verified drivers, tracked rides, and safe vehicles — every single trip.' },
  { icon: '💎', title: 'Premium Experience',    desc: 'From booking to arrival, we obsess over every detail of your journey.' },
  { icon: '🤝', title: 'Transparent Fares',    desc: 'No hidden charges. No surge pricing. Ever. What you see is what you pay.' },
]

const leaders = [
  {
    name:        'Akash Kumar Singh',
    title:       'Founder & Chief Executive Officer (CEO)',
    titleColor:  '#5B21B6',
    photo:       '/ceo-akash.png',
    initials:    'AK',
    bgColor:     '#5B21B6',
    qualifications: [
      'B.Tech (Mechanical Engineering)',
      'Certified Transport Management Professional',
    ],
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
    name:        'Puja Singh',
    title:       'Co-Founder & Managing Director (MD)',
    titleColor:  '#F59E0B',
    photo:       '/md-puja.png',
    initials:    'PS',
    bgColor:     '#F59E0B',
    qualifications: [
      'B.Tech (Computer Science Engineering)',
      'Certified Operations & Supply Chain Manager',
    ],
    positions: [
      'Co-Founder, Urban Miles (July 2025)',
      'Managing Director, Urban Miles',
      'Member, Women Entrepreneurs Network, Pune',
      'Advisor, Sustainable Urban Mobility Initiative',
    ],
    message: [
      'At Urban Miles, we believe transportation is more than simply moving from one place to another — it is about connecting people, creating opportunities, and delivering experiences built on trust and reliability.',
      'As Managing Director, I am committed to driving sustainable growth while maintaining the highest standards of service excellence. Our focus remains on innovation, operational efficiency, and customer satisfaction, ensuring that every journey with Urban Miles is safe, comfortable, and dependable.',
      'We continuously invest in technology, strengthen our partnerships, and empower our talented team to exceed expectations and adapt to the evolving needs of modern mobility. Our vision is to build a future where transportation is smarter, more accessible, and more customer-centric than ever before.',
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
                { label: 'Founded',       value: 'July 2025',       color: '#5B21B6' },
                { label: 'Headquarters', value: 'Lohegaon, Pune',  color: '#F59E0B' },
                { label: 'Fleet',         value: 'Sedan, SUV, Luxury', color: '#7C3AED' },
                { label: 'Mission',       value: 'Ride Premium',    color: '#EC4899' },
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

      {/* ── Leadership Messages (Jadhavar-style) ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#5B21B6]/10 rounded-full px-4 py-2 mb-4">
              <span className="text-[#5B21B6] text-xs font-semibold uppercase tracking-widest">Leadership</span>
            </div>
            <h2 className="font-outfit font-black text-4xl text-slate-900">
              Meet Our <span className="text-[#5B21B6]">Leaders</span>
            </h2>
          </div>

          {/* Leader cards */}
          <div className="space-y-12">
            {leaders.map((leader, idx) => (
              <div key={leader.name}
                className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">

                {/* Top accent bar */}
                <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${leader.bgColor}, ${idx === 0 ? '#F59E0B' : '#5B21B6'})` }} />

                <div className="grid md:grid-cols-[260px_1fr] gap-0">

                  {/* ── Left: Profile ── */}
                  <div className="bg-slate-50 border-r border-slate-100 p-8 flex flex-col items-center text-center">

                    {/* Circular photo */}
                    <div className="relative mb-5">
                      <div className="w-36 h-36 rounded-full overflow-hidden border-4 shadow-lg"
                        style={{ borderColor: leader.bgColor }}>
                        <Image
                          src={leader.photo}
                          alt={leader.name}
                          width={144}
                          height={144}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      {/* Role badge */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-white text-[10px] font-bold whitespace-nowrap shadow"
                        style={{ backgroundColor: leader.bgColor }}>
                        {idx === 0 ? 'CEO' : 'Co-Founder & MD'}
                      </div>
                    </div>

                    {/* Name & title */}
                    <h3 className="font-outfit font-black text-xl text-slate-900 mt-2 leading-tight">{leader.name}</h3>
                    <p className="text-sm font-semibold mt-1" style={{ color: leader.titleColor }}>{leader.title}</p>
                    <p className="text-slate-400 text-xs mt-0.5">Urban Miles</p>

                    {/* Divider */}
                    <div className="w-12 h-0.5 rounded-full my-5" style={{ backgroundColor: leader.bgColor }} />

                    {/* Qualifications */}
                    <div className="w-full text-left">
                      <div className="text-slate-700 font-semibold text-xs uppercase tracking-widest mb-3">Qualifications:</div>
                      <ul className="space-y-1.5">
                        {leader.qualifications.map(q => (
                          <li key={q} className="flex items-start gap-2 text-slate-600 text-xs">
                            <span className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: leader.bgColor }} />
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* ── Right: Message ── */}
                  <div className="p-8">
                    <h4 className="font-outfit font-black text-2xl text-slate-900 mb-5 flex items-center gap-3">
                      <span className="text-3xl opacity-30 font-serif" style={{ color: leader.bgColor }}>&ldquo;</span>
                      Message
                    </h4>

                    <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-7">
                      {leader.message.map((para, i) => <p key={i}>{para}</p>)}
                      <p className="italic text-slate-500">{leader.closing}</p>
                    </div>

                    {/* Key Positions */}
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                      <h5 className="font-outfit font-bold text-slate-900 text-sm mb-3 uppercase tracking-wide">
                        Key Positions &amp; Contributions
                      </h5>
                      <ul className="space-y-2">
                        {leader.positions.map(pos => (
                          <li key={pos} className="flex items-start gap-2.5 text-slate-600 text-sm">
                            <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24"
                              fill="none" stroke={leader.bgColor} strokeWidth="2.5" strokeLinecap="round">
                              <path d="M9 18l6-6-6-6"/>
                            </svg>
                            {pos}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Signature */}
                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black font-outfit text-sm flex-shrink-0"
                        style={{ backgroundColor: leader.bgColor }}>
                        {leader.initials}
                      </div>
                      <div>
                        <div className="font-outfit font-black text-slate-900">{leader.name}</div>
                        <div className="text-xs font-semibold" style={{ color: leader.bgColor }}>{leader.title}</div>
                      </div>
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
