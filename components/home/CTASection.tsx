export default function CTASection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900" />
      
      {/* Main glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] bg-[#5B21B6]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="glass border border-[#5B21B6]/20 rounded-3xl p-10 sm:p-16 relative overflow-hidden">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#5B21B6]/10 to-transparent rounded-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#F59E0B]/10 to-transparent rounded-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#5B21B6] animate-pulse" />
              <span className="text-[#5B21B6] text-xs font-medium">Available Right Now</span>
            </div>

            <h2 className="font-outfit font-bold text-4xl sm:text-6xl text-white mb-4">
              Ready to
              <span className="gradient-gold block">Ride Premium?</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of satisfied passengers who trust Urban Miles for every journey. Your first ride is waiting.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:7857870449"
                className="btn-shine bg-gradient-to-r from-[#5B21B6] to-[#4C1D95] text-white font-bold px-8 py-4 rounded-2xl text-lg hover:shadow-[0_0_40px_rgba(91,33,182,0.5)] hover:scale-105 transition-all duration-300 anim-glow flex items-center gap-3"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call Now: 7857870449
              </a>

              <a
                href="https://wa.me/917857870449?text=Hi! I want to book a cab with Urban Miles."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine flex items-center gap-3 glass border border-[#25D366]/30 text-[#25D366] font-bold px-8 py-4 rounded-2xl text-lg hover:bg-[#25D366]/10 transition-all duration-300"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              Serving Pune since July 2025 • Lohegaon, Maharashtra
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
