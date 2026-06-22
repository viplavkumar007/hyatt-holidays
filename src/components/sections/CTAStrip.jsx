import { motion } from 'framer-motion'
import { Sparkles, Phone } from 'lucide-react'
import { brand } from '../../data/siteContent'
import { openWhatsApp } from '../../utils/whatsapp'
import { useInView } from '../../hooks/useScrollSpy'

export default function CTAStrip() {
  const [ref, inView] = useInView(0.3)

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-secondary via-secondary-400 to-secondary-300" ref={ref}>
      {/* Animated pulse rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-white/20"
              style={{ width: `${i * 200}px`, height: `${i * 200}px`, top: `-${i * 100}px`, left: `-${i * 100}px` }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </div>

      <div className="container-pad relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex justify-center mb-4">
            <Sparkles size={32} className="text-white" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to Explore the World?
          </h2>
          <p className="text-white/80 text-base mb-8">
            Contact Hyatt Holidays today and let our experts design your perfect holiday package.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => openWhatsApp('Hello Hyatt Holidays, I am ready to plan my trip! Please help me with the best tour packages.')}
              className="inline-flex items-center gap-2 font-ui font-semibold text-secondary bg-white px-7 py-3.5 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us Now
            </button>
            <a
              href={`tel:${brand.phone}`}
              className="inline-flex items-center gap-2 font-ui font-semibold text-white border-2 border-white/60 bg-white/15 backdrop-blur-sm px-7 py-3.5 rounded-2xl hover:-translate-y-1 hover:bg-white/25 transition-all duration-300 active:scale-95"
            >
              <Phone size={16} />
              {brand.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
