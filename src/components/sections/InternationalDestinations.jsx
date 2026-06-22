import { motion } from 'framer-motion'
import { internationalDestinations } from '../../data/siteContent'
import { useInView } from '../../hooks/useScrollSpy'
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations'
import DestinationCard from '../ui/DestinationCard'

export default function InternationalDestinations() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="international" className="section-pad bg-muted">
      <div className="container-pad" ref={ref}>
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <span className="section-badge mb-4">✦ Beyond Borders</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
            International <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            From the golden dunes of Dubai to the paradise islands of Maldives — your international dream trip awaits.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {internationalDestinations.map((dest, i) => (
            <motion.div key={dest.id} variants={staggerItem}>
              <DestinationCard dest={dest} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
