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
              {/* Instagram */}
              <a
                href="https://www.instagram.com/urbanmiles_official?igsh=MWE1Z21zbGljcmxmcA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1PtmSSp6Yt/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.56v14.91A4.536 4.536 0 0 1 19.44 24H4.56A4.536 4.536 0 0 1 0 19.44V4.56A4.536 4.536 0 0 1 4.56 0h14.88A4.536 4.536 0 0 1 24 4.56zm-7.2 0h-2.4c-.913 0-1.2.384-1.2 1.248V7.2H16.8l-.336 2.88H13.2V18h-3.12v-7.92H8.4V7.2h1.68V5.568C10.08 3.168 11.52 1.92 13.68 1.92c1.008 0 2.04.072 3.12.216V4.56z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917857870449"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-green-400 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
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
