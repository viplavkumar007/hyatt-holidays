import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import { brand } from '../../data/siteContent'
import { openWhatsApp } from '../../utils/whatsapp'

const quickLinks = ['Home', 'About', 'Services', 'Destinations', 'Testimonials', 'Contact']
const popularTours = ['Kerala', 'Kashmir', 'Dubai', 'Singapore', 'Bali', 'Maldives']

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const linkMap = {
  Home: 'hero', About: 'about', Services: 'services',
  Destinations: 'destinations', Testimonials: 'testimonials', Contact: 'contact',
}

const destMap = {
  Kerala: 'domestic', Kashmir: 'domestic', Dubai: 'international',
  Singapore: 'international', Bali: 'international', Maldives: 'international',
}

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Main footer */}
      <div className="container-pad py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="font-display font-bold text-2xl text-white">HYATT HOLIDAYS</p>
              <p className="font-ui text-xs tracking-widest text-secondary-400 uppercase mt-0.5">A Unit of Ace Square</p>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Your trusted travel partner for customized domestic and international holiday packages. We craft seamless, memorable journeys for every kind of traveler.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => openWhatsApp()}
                className="p-2.5 bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white rounded-xl transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
              <a
                href={`mailto:${brand.email}`}
                className="p-2.5 bg-secondary/20 hover:bg-secondary text-secondary hover:text-white rounded-xl transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${brand.phone}`}
                className="p-2.5 bg-primary-700/50 hover:bg-primary text-primary-300 hover:text-white rounded-xl transition-all duration-200"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-ui font-semibold text-white mb-5 text-base">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(linkMap[link])}
                    className="text-slate-300 hover:text-secondary text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="font-ui font-semibold text-white mb-5 text-base">Popular Tours</h4>
            <ul className="space-y-2.5">
              {popularTours.map((tour) => (
                <li key={tour}>
                  <button
                    onClick={() => scrollTo(destMap[tour])}
                    className="text-slate-300 hover:text-secondary text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors" />
                    {tour}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-ui font-semibold text-white mb-5 text-base">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${brand.phone}`} className="flex items-start gap-3 text-slate-300 hover:text-secondary transition-colors text-sm group">
                  <Phone size={15} className="mt-0.5 shrink-0 text-secondary/60 group-hover:text-secondary" />
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="flex items-start gap-3 text-slate-300 hover:text-secondary transition-colors text-sm group break-all">
                  <Mail size={15} className="mt-0.5 shrink-0 text-secondary/60 group-hover:text-secondary" />
                  {brand.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-300 text-sm">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-secondary/60" />
                  <span className="leading-relaxed">{brand.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="container-pad py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-sm text-center sm:text-left">
            © 2026 Hyatt Holidays – A Unit of Ace Square. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-400 text-sm">
            <Globe size={13} />
            <span>Coimbatore, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
