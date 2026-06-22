import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/siteContent'
import { useInView } from '../../hooks/useScrollSpy'
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations'

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-primary/30 shadow-card' : 'border-slate-200 hover:border-primary/20'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-2xl"
        aria-expanded={isOpen}
      >
        <span className={`font-ui font-semibold text-sm pr-4 ${isOpen ? 'text-primary' : 'text-dark'}`}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0"
        >
          <ChevronDown size={18} className={isOpen ? 'text-primary' : 'text-slate-400'} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-5">
              <div className="w-12 h-px bg-primary/20 mb-3" />
              <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [ref, inView] = useInView(0.15)
  const [openIdx, setOpenIdx] = useState(0)

  const toggle = (i) => setOpenIdx((prev) => (prev === i ? null : i))

  return (
    <section className="section-pad bg-muted">
      <div className="container-pad" ref={ref}>
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <span className="section-badge mb-4">✦ FAQs</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Everything you need to know about booking your dream trip with Hyatt Holidays.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto space-y-3"
        >
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={staggerItem}>
              <FAQItem
                q={faq.q}
                a={faq.a}
                isOpen={openIdx === i}
                onClick={() => toggle(i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
