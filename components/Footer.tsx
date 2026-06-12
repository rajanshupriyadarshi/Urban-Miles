import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const services = [
    { label: 'Airport Transfer', href: '/airport-cabs' },
    { label: 'Outstation Cabs', href: '/outstation-cabs' },
    { label: 'Local/Hourly', href: '/local-cabs' },
    { label: 'Corporate Rides', href: '/contact' },
  ]

  const company = [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ]

  const cities = [
    'Pune', 'Mumbai', 'Nashik', 'Aurangabad',
    'Kolhapur', 'Nagpur', 'Shirdi', 'Lonavala'
  ]

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#5B21B6] to-transparent" />

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#5B21B6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="Urban Miles Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-outfit font-black text-xl">
                  <span style={{ color: '#5B21B6' }}>Urban</span>
                  <span style={{ color: '#F59E0B' }}>Miles</span>
                </span>
                <div className="text-[10px] text-slate-400 tracking-widest uppercase">Premium Rides</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Pune&apos;s most trusted premium cab service. Serving since July 2025 with a commitment to comfort, safety, and on-time arrivals.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: 'M24 4.56v14.91A4.536 4.536 0 0 1 19.44 24H4.56A4.536 4.536 0 0 1 0 19.44V4.56A4.536 4.536 0 0 1 4.56 0h14.88A4.536 4.536 0 0 1 24 4.56zm-7.2 0h-2.4c-.913 0-1.2.384-1.2 1.248V7.2H16.8l-.336 2.88H13.2V18h-3.12v-7.92H8.4V7.2h1.68V5.568C10.08 3.168 11.52 1.92 13.68 1.92c1.008 0 2.04.072 3.12.216V4.56z', label: 'Facebook' },
                { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z', label: 'Instagram' },
                { icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', label: 'Twitter' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-[#5B21B6] hover:bg-slate-800 transition-all duration-300 hover:scale-110"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit font-semibold text-white mb-4 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-slate-300 text-sm hover:text-[#5B21B6] link-underline transition-colors duration-200">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-outfit font-semibold text-white mb-4 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-slate-300 text-sm hover:text-[#5B21B6] link-underline transition-colors duration-200">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-semibold text-white mb-4 text-sm uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#5B21B6">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-0.5">Call / WhatsApp</div>
                  <a href="tel:7857870449" className="text-slate-200 text-sm hover:text-[#5B21B6] transition-colors">+91 7857870449</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#5B21B6">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-0.5">Email</div>
                  <a href="mailto:info@urbanmiles.in" className="text-slate-200 text-sm hover:text-[#5B21B6] transition-colors">info@urbanmiles.in</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#5B21B6">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-0.5">Office</div>
                  <p className="text-slate-200 text-sm">Lohegaon, Pune,<br />Maharashtra, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Cities */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <h4 className="font-outfit font-semibold text-white mb-4 text-sm uppercase tracking-widest">Cities We Serve</h4>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <span key={city} className="text-slate-300 text-xs px-3 py-1.5 rounded-full border border-slate-700 hover:border-[#5B21B6]/50 hover:text-[#5B21B6] transition-all duration-200 cursor-pointer">
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-xs">
            © 2025 Urban Miles. All rights reserved. Est. July 2025.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available 24/7 for bookings
          </div>
        </div>
      </div>
    </footer>
  )
}
