import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingActions from './components/ui/FloatingActions'
import ScrollProgress from './components/ui/ScrollProgress'
import Toast, { useToast } from './components/ui/Toast'

import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import DomesticDestinations from './components/sections/DomesticDestinations'
import InternationalDestinations from './components/sections/InternationalDestinations'
import WhyChooseUs from './components/sections/WhyChooseUs'
import TourProcess from './components/sections/TourProcess'
import Testimonials from './components/sections/Testimonials'
import Gallery from './components/sections/Gallery'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import CTAStrip from './components/sections/CTAStrip'

export default function App() {
  const { toasts, addToast, removeToast } = useToast()

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <DomesticDestinations />
        <CTAStrip />
        <InternationalDestinations />
        <WhyChooseUs />
        <TourProcess />
        <Testimonials />
        <Gallery />
        <CTAStrip />
        <FAQ />
        <Contact addToast={addToast} />
      </main>
      <Footer />
      <FloatingActions />
      <Toast toasts={toasts} removeToast={removeToast} />
    </>
  )
}
