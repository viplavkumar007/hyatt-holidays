import { useState } from 'react'
import { motion } from 'framer-motion'
import { domesticDestinations } from '../../data/siteContent'
import { useInView } from '../../hooks/useScrollSpy'
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations'
import DestinationCard from '../ui/DestinationCard'

export default function DomesticDestinations() {
  const [ref, inView] = useInView(0.1)
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? domesticDestinations : domesticDestinations.slice(0, 8)

  return (
    <section id="domestic" className="section-pad bg-white">
      <div className="container-pad" ref={ref}>
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <span className="section-badge mb-4">✦ Explore India</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
            Domestic <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            From the backwaters of Kerala to the snow peaks of Kashmir — discover India's most breathtaking destinations.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {visible.map((dest, i) => (
            <motion.div key={dest.id} variants={staggerItem}>
              <DestinationCard dest={dest} index={i} />
            </motion.div>
          ))}
        </motion.div>

        {!showAll && domesticDestinations.length > 8 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <button onClick={() => setShowAll(true)} className="btn-secondary">
              View All Domestic Destinations
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
