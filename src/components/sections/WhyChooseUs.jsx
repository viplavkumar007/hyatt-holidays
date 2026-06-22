import { motion } from 'framer-motion'
import {
  Settings, Users, Globe, Tag, Headphones,
  CheckCircle, FileText, Zap, Clock, Star
} from 'lucide-react'
import { whyChooseUs } from '../../data/siteContent'
import { useInView } from '../../hooks/useScrollSpy'
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations'

const iconMap = { Settings, Users, Globe, Tag, Headphones, CheckCircle, FileText, Zap, Clock, Star }

export default function WhyChooseUs() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="destinations" className="section-pad bg-white">
      <div className="container-pad" ref={ref}>
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <span className="section-badge mb-4">✦ Why Hyatt Holidays</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
            Why Travelers <span className="text-primary">Choose Us</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            We go beyond booking tickets — we craft journeys that create lifelong memories.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || CheckCircle
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className="feature-card p-5 text-center cursor-default group"
              >
                <div className="w-12 h-12 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary">
                  <Icon size={20} className="text-primary transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="font-ui font-bold text-dark text-sm mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
