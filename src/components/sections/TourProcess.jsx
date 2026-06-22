import { motion } from 'framer-motion'
import { MessageCircle, FileText, CheckCircle, Plane } from 'lucide-react'
import { tourProcess } from '../../data/siteContent'
import { useInView } from '../../hooks/useScrollSpy'
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations'
import { openWhatsApp } from '../../utils/whatsapp'

const iconMap = { MessageCircle, FileText, CheckCircle, Plane }

export default function TourProcess() {
  const [ref, inView] = useInView(0.15)

  return (
    <section className="section-pad bg-primary-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-pad relative z-10" ref={ref}>
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary font-ui text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            ✦ How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Book Your Trip in <span className="text-secondary">4 Simple Steps</span>
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            Getting your dream holiday started is easier than you think. Here's how we make it happen.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tourProcess.map((step, i) => {
            const Icon = iconMap[step.icon] || CheckCircle
            return (
              <motion.div key={i} variants={staggerItem} className="relative">
                {/* Connector line */}
                {i < tourProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-white/15 z-0 -translate-x-1/2" />
                )}

                <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-6 text-center hover:bg-white/15 hover:border-white/25 transition-all duration-300 hover:-translate-y-2 glossy-card">
                  {/* Step number */}
                  <div className="font-ui text-xs font-bold text-secondary/60 mb-3 tracking-widest uppercase">{step.step}</div>

                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-secondary/20 border border-secondary/30 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-secondary" />
                  </div>

                  <h3 className="font-ui font-bold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => openWhatsApp('Hello Hyatt Holidays, I would like to start planning my trip. Please guide me.')}
            className="btn-primary text-base px-8 py-3.5"
          >
            Start Planning Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}
