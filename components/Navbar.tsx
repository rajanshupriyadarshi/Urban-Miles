'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import AuthModal from './AuthModal'

interface User {
  name: string
  phone: string
  email: string
  type?: string
  companyName?: string
}

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [authOpen, setAuthOpen]     = useState(false)
  const [user, setUser]             = useState<User | null>(null)
  const [userMenuOpen, setUserMenu] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Load user from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('urbanmiles_user')
    if (saved) setUser(JSON.parse(saved))
  }, [])

  function handleLogout() {
    localStorage.removeItem('urbanmiles_user')
    setUser(null)
    setUserMenu(false)
  }

  const links = [
    { label: 'Home',         href: '/' },
    { label: 'Airport Cabs', href: '/airport-cabs' },
    { label: 'Outstation',   href: '/outstation-cabs' },
    { label: 'Local Rides',  href: '/local-cabs' },
    { label: 'About',        href: '/about' },
    { label: 'Contact',      href: '/contact' },
  ]

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  // Color mode based on scroll position
  const onDark      = !scrolled
  const linkBase    = onDark ? 'text-white/85 hover:text-white' : 'text-slate-700 hover:text-[#5B21B6]'
  const activeCls   = onDark
    ? 'text-[#F59E0B] font-semibold border-b-2 border-[#F59E0B]'
    : 'text-[#5B21B6] font-semibold border-b-2 border-[#5B21B6]'
  const phoneColor  = onDark ? 'text-white/85 hover:text-[#F59E0B]' : 'text-[#5B21B6] hover:text-[#4C1D95]'
  const burgerColor = onDark ? 'bg-white' : 'bg-slate-800'

  // Avatar initials
  const initials = user
    ? user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : ''

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md'
            : 'bg-black/25 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="group-hover:scale-105 transition-transform duration-300 drop-shadow">
                <Image src="/logo.png" alt="Urban Miles" width={46} height={46} className="object-contain" priority />
              </div>
              <div className="hidden sm:block">
                <span className="font-outfit font-black text-lg leading-none">
                  <span style={{ color: onDark ? '#fff' : '#5B21B6' }} className="transition-colors duration-300">Urban</span>
                  <span style={{ color: '#F59E0B' }}>Miles</span>
                </span>
                <div className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${onDark ? 'text-white/60' : 'text-slate-400'}`}>
                  Premium Rides
                </div>
              </div>
            </Link>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden lg:flex items-center gap-0">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm rounded-lg transition-all duration-200 ${
                    isActive(link.href) ? activeCls : linkBase
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* ── Right: Phone + Auth ── */}
            <div className="flex items-center gap-2.5">
              {/* Phone */}
              <a
                href="tel:7857870449"
                className={`hidden md:flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${phoneColor}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                7857870449
              </a>

              {/* Auth button / User avatar */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenu(!userMenuOpen)}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                      user.type === 'corporate'
                        ? 'bg-[#1e293b] text-white hover:bg-[#334155]'
                        : 'bg-[#5B21B6] text-white hover:bg-[#4C1D95]'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${user.type === 'corporate' ? 'bg-[#F59E0B] text-slate-900' : 'bg-[#F59E0B] text-slate-900'}`}>
                      {user.type === 'corporate' ? '🏢' : initials}
                    </div>
                    <span className="hidden sm:block max-w-[90px] truncate">
                      {user.type === 'corporate' ? user.companyName || user.name.split(' ')[0] : user.name.split(' ')[0]}
                    </span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                  </button>

                  {/* Dropdown */}
                  {userMenuOpen && (
                    <div className="absolute right-0 top-12 w-52 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50">
                      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
                        <div className="text-slate-900 font-semibold text-sm truncate">{user.name}</div>
                        <div className="text-slate-400 text-xs truncate">{user.email || user.phone}</div>
                        {user.type === 'corporate' && (
                          <span className="mt-1 inline-flex items-center gap-1 bg-[#1e293b] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">🏢 Corporate</span>
                        )}
                      </div>
                      {user.type === 'corporate' ? (
                        <>
                          <Link href="/corporate/dashboard" onClick={() => setUserMenu(false)}
                            className="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1e293b] transition-colors font-medium">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                            Corporate Dashboard
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link href="/book" onClick={() => setUserMenu(false)}
                            className="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#5B21B6] transition-colors">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                            My Bookings
                          </Link>
                          <Link href="/profile" onClick={() => setUserMenu(false)}
                            className="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#5B21B6] transition-colors border-t border-slate-50">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            Manage Profile
                          </Link>
                        </>
                      )}
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors border-t border-slate-100"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>
                        Logout
                      </button>
                    </div>
                  )}
                </div>

              ) : (
                <button
                  onClick={() => setAuthOpen(true)}
                  className={`flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl border-2 transition-all duration-200 ${
                    onDark
                      ? 'border-white/40 text-white hover:bg-white/10'
                      : 'border-[#5B21B6] text-[#5B21B6] hover:bg-[#5B21B6] hover:text-white'
                  }`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                  </svg>
                  Login or Create Account
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
              )}

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col gap-[5px] p-2 ml-1"
                aria-label="Toggle menu"
              >
                <span className={`block w-6 h-[2px] transition-all duration-300 rounded ${burgerColor} ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block w-6 h-[2px] transition-all duration-300 rounded ${burgerColor} ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-[2px] transition-all duration-300 rounded ${burgerColor} ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden bg-white/98 backdrop-blur-md ${
            menuOpen ? 'max-h-[500px] opacity-100 border-t border-slate-100 shadow-xl' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-purple-50 text-[#5B21B6] font-semibold border-l-4 border-[#5B21B6]'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-[#5B21B6]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 flex flex-col gap-2 border-t border-slate-100 mt-1">
              <a href="tel:7857870449"
                className="flex items-center justify-center gap-2 text-[#5B21B6] font-semibold py-3 border border-[#5B21B6]/30 rounded-xl bg-purple-50 text-sm">
                📞 Call: 7857870449
              </a>
              {user ? (
                <button onClick={() => { handleLogout(); setMenuOpen(false) }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-50 text-red-500 font-semibold text-sm border border-red-100">
                  Logout ({user.name.split(' ')[0]})
                </button>
              ) : (
                <button
                  onClick={() => { setAuthOpen(true); setMenuOpen(false) }}
                  className="btn-shine bg-gradient-to-r from-[#5B21B6] to-[#4C1D95] text-white font-semibold text-sm px-5 py-3 rounded-xl text-center"
                >
                  Login or Create Account
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        onLogin={(u) => setUser(u)}
      />

      {/* Close user menu on outside click */}
      {userMenuOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setUserMenu(false)} />
      )}
    </>
  )
}
