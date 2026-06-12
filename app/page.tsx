import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import PopularRoutes from '@/components/home/PopularRoutes'
import HowItWorks from '@/components/home/HowItWorks'
import FleetShowcase from '@/components/home/FleetShowcase'
import StatsSection from '@/components/home/StatsSection'
import TrustSection from '@/components/home/TrustSection'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PopularRoutes />
      <HowItWorks />
      <FleetShowcase />
      <TrustSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  )
}
