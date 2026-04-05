import HeroSection from '../components/sections/hero-section'
import FeaturesSection from '../components/sections/features-section'
import DemoSection from '../components/sections/demo-section'
import PricingSection from '../components/sections/pricing-section'
import TestimonialsSection from '../components/sections/testimonials-section'
import CtaSection from '../components/sections/cta-section'
import Navbar from '../components/layout/navbar'
import Footer from '../components/layout/footer'
import ParticlesBackground from '../components/effects/particles-background'

export default function HomePage() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <PricingSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}