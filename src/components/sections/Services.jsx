import { motion } from 'framer-motion'
import {
  Map, Globe, Heart, Users, UsersRound, Landmark,
  Plane, Building2, FileText, Shield, MessageSquare
} from 'lucide-react'
import { services } from '../../data/siteContent'
import { useInView } from '../../hooks/useScrollSpy'
import { staggerContainer, staggerItem, fadeUp } from '../../utils/animations'
import { openWhatsApp } from '../../utils/whatsapp'

const iconMap = { Map, Globe, Heart, Users, UsersRound, Landmark, Plane, Building2, FileText, Shield }

// Vibrant card color pairs
const cardColors = [
  { bg: 'from-[#0F4C81] to-[#1565A8]', icon: 'bg-white/20', text: 'text-white' },
  { bg: 'from-[#F5A623] to-[#F8BA4D]', icon: 'bg-white/20', text: 'text-white' },
  { bg: 'from-[#1ABC9C] to-[#16A085]', icon: 'bg-white/20', text: 'text-white' },
  { bg: 'from-[#8B5CF6] to-[#6D28D9]', icon: 'bg-white/20', text: 'text-white' },
  { bg: 'from-[#F43F5E] to-[#E11D48]', icon: 'bg-white/20', text: 'text-white' },
  { bg: 'from-[#3B82F6] to-[#2563EB]', icon: 'bg-white/20', text: 'text-white' },
  { bg: 'from-[#10B981] to-[#059669]', icon: 'bg-white/20', text: 'text-white' },
  { bg: 'from-[#F97316] to-[#EA580C]', icon: 'bg-white/20', text: 'text-white' },
  { bg: 'from-[#0EA5E9] to-[#0284C7]', icon: 'bg-white/20', text: 'text-white' },
  { bg: 'from-[#EC4899] to-[#DB2777]', icon: 'bg-white/20', text: 'text-white' },
]

export default function Services() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="services" className="section-pad bg-muted">
      <div className="container-pad" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <span className="section-badge mb-4">✦ What We Offer</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
            Our <span className="text-primary">Travel Services</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            End-to-end travel solutions crafted for every kind of traveler — from first-time flyers to seasoned explorers.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe
            const colors = cardColors[i % cardColors.length]
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className={`relative rounded-3xl overflow-hidden shadow-card cursor-default
                  bg-gradient-to-br ${colors.bg}
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:shadow-card-hover
                  glossy-card`}
              >
                {/* Glossy sheen overlay */}
                <div className="absolute inset-0 glossy pointer-events-none rounded-3xl z-0" />

                <div className="relative z-10 p-5 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl ${colors.icon} backdrop-blur-sm flex items-center justify-center mb-4`}>
                    <Icon size={22} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-ui font-bold text-white text-sm leading-snug mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/75 text-xs leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>

                  {/* Enquire button */}
                  <button
                    onClick={() => openWhatsApp(service.whatsappMsg)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold font-ui
                      bg-white/20 backdrop-blur-sm text-white border border-white/30
                      px-3.5 py-2 rounded-xl self-start
                      transition-all duration-200
                      hover:bg-white hover:text-gray-800 hover:-translate-y-0.5 hover:shadow-md
                      active:scale-95"
                  >
                    <MessageSquare size={12} />
                    Enquire Now
                  </button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
