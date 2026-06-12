'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#5B21B6]/6 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 mb-6">
              <span className="text-[#5B21B6] text-xs font-medium">Get In Touch</span>
            </div>
            <h1 className="font-outfit font-bold text-5xl sm:text-6xl text-slate-900 mb-4">
              Book Your
              <span className="gradient-gold"> Ride Today</span>
            </h1>
            <p className="text-slate-600 text-xl max-w-xl mx-auto">
              Call, WhatsApp, or fill out the form and we will get back to you within minutes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-5">
              {[
                {
                  icon: '📞',
                  title: 'Phone / WhatsApp',
                  value: '+91 7857870449',
                  sub: 'Available 24/7',
                  href: 'tel:7857870449',
                  color: '#5B21B6',
                },
                {
                  icon: '📧',
                  title: 'Email',
                  value: 'info@urbanmiles.in',
                  sub: 'Response within 1 hour',
                  href: 'mailto:info@urbanmiles.in',
                  color: '#F59E0B',
                },
                {
                  icon: '📍',
                  title: 'Office Address',
                  value: 'Lohegaon, Pune',
                  sub: 'Maharashtra, India',
                  href: '#',
                  color: '#7C3AED',
                },
                {
                  icon: '⏰',
                  title: 'Operating Hours',
                  value: '24 Hours / 7 Days',
                  sub: 'Including holidays',
                  href: '#',
                  color: '#EC4899',
                },
              ].map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-start gap-4 glass border border-slate-200 rounded-2xl p-5 card-hover group block"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${info.color}15` }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-slate-600 text-xs uppercase tracking-widest mb-1">{info.title}</div>
                    <div className="text-slate-900 font-semibold font-outfit">{info.value}</div>
                    <div className="text-slate-600 text-sm">{info.sub}</div>
                  </div>
                </a>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917857870449?text=Hi! I want to book a cab with Urban Miles."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="glass border border-slate-200 rounded-3xl p-8 bg-white">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-outfit font-bold text-slate-900 text-2xl mb-3">Message Sent!</h3>
                  <p className="text-slate-600">We will call you back within 15 minutes. Thank you!</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[#5B21B6] text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-outfit font-bold text-2xl text-slate-900 mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-slate-600 text-xs uppercase tracking-widest mb-2 block">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#5B21B6]/50 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="text-slate-600 text-xs uppercase tracking-widest mb-2 block">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#5B21B6]/50 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="text-slate-600 text-xs uppercase tracking-widest mb-2 block">Service Needed</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-[#5B21B6]/50 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="airport">Airport Transfer</option>
                        <option value="outstation">Outstation Cab</option>
                        <option value="local">Local / Hourly</option>
                        <option value="corporate">Corporate</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-slate-600 text-xs uppercase tracking-widest mb-2 block">Message</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Pickup location, date, and any other details..."
                        rows={4}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#5B21B6]/50 transition-all duration-300 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-shine w-full bg-gradient-to-r from-[#5B21B6] to-[#4C1D95] text-white font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(91,33,182,0.4)] hover:scale-[1.02] transition-all duration-300"
                    >
                      Send Message →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
