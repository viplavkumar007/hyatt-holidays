import { motion } from 'framer-motion'
import { Phone, ChevronDown } from 'lucide-react'
import { heroStats, brand } from '../../data/siteContent'
import { openWhatsApp } from '../../utils/whatsapp'
import { heroStagger, heroItem } from '../../utils/animations'

const BG_IMAGES = [
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1800&q=80',
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGES[0]}
          alt="Travel destination"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/50 to-primary-900/90" />
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-pad pb-16 pt-32 md:pt-40">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={heroItem} className="mb-5">
            <span className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 backdrop-blur-sm text-secondary-300 font-ui text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              ✦ Trusted Travel Partner · Coimbatore
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={heroItem} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-5">
            Explore The World{' '}
            <span className="text-secondary italic">With Confidence</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={heroItem} className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
            {brand.subTagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={heroItem} className="flex flex-wrap gap-4 mb-14">
            <button
              onClick={() => openWhatsApp('Hello Hyatt Holidays, I would like to plan my trip. Please share tour packages available.')}
              className="btn-primary text-base px-7 py-3.5"
            >
              Plan My Trip
            </button>
            <button
              onClick={() => openWhatsApp(brand.whatsappDefaultMsg)}
              className="btn-ghost text-base px-7 py-3.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={heroItem}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {heroStats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-4 text-center glossy"
              >
                <p className="font-display font-bold text-2xl md:text-3xl text-secondary mb-0.5">{stat.value}</p>
                <p className="font-ui text-xs text-white/75 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="relative z-10 flex justify-center pb-6"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-white/50 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="font-ui text-xs uppercase tracking-wider">Discover More</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
