import { motion } from 'framer-motion'
import { MapPin, Headphones, Tag, Award, Globe, Clock } from 'lucide-react'
import { aboutFeatures } from '../../data/siteContent'
import { useInView } from '../../hooks/useScrollSpy'
import { staggerContainer, staggerItem, fadeUp, slideLeft, slideRight } from '../../utils/animations'

const iconMap = { MapPin, Headphones, Tag, Award, Globe, Clock }

export default function About() {
  const [ref, inView] = useInView(0.2)

  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-pad" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Image collage */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-glass-lg aspect-[4/5] max-w-lg mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                alt="Happy travelers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-4 md:right-4 bg-white rounded-2xl shadow-card-hover px-5 py-4 border border-slate-100"
            >
              <p className="font-display font-bold text-3xl text-primary leading-none">1000+</p>
              <p className="font-ui text-xs text-slate-500 mt-0.5">Happy Travelers</p>
            </motion.div>
            {/* Corner accent */}
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-secondary/20 border-2 border-secondary/30 flex items-center justify-center">
              <Globe size={28} className="text-secondary" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <span className="section-badge mb-4">✦ About Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-6 leading-snug">
              About <span className="text-primary">Hyatt Holidays</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Hyatt Holidays, a unit of Ace Square, is a trusted travel agency based in Coimbatore offering customized domestic and international tour packages. We help travelers discover incredible destinations with carefully planned itineraries, reliable support, and unforgettable experiences.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Whether you're planning a family vacation, honeymoon, group tour, pilgrimage trip, or an international holiday, our team ensures a hassle-free and enjoyable journey from start to finish.
            </p>

            {/* Feature grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {aboutFeatures.map((feat, i) => {
                const Icon = iconMap[feat.icon] || Globe
                return (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="flex items-center gap-2.5 bg-primary/5 border border-primary/10 rounded-2xl px-3 py-3 hover:bg-primary/10 hover:border-primary/20 transition-colors cursor-default"
                  >
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-primary" />
                    </div>
                    <span className="font-ui text-xs font-medium text-slate-700 leading-snug">{feat.label}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
