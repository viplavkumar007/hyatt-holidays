import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { testimonials } from '../../data/siteContent'
import { useInView } from '../../hooks/useScrollSpy'
import { fadeUp } from '../../utils/animations'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-secondary fill-secondary' : 'text-slate-300'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [ref, inView] = useInView(0.2)
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDir(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const go = (d) => {
    setDir(d)
    setCurrent((prev) => (prev + d + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-pad bg-muted">
      <div className="container-pad" ref={ref}>
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <span className="section-badge mb-4">✦ Traveler Stories</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
            What Our <span className="text-primary">Travelers Say</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Real experiences from real travelers who chose Hyatt Holidays for their dream journeys.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          {/* Featured testimonial */}
          <div className="relative bg-white rounded-3xl shadow-glass-lg p-8 md:p-10 mb-6 overflow-hidden">
            <Quote size={56} className="absolute top-6 right-6 text-primary/8" strokeWidth={1} />
            <div className="relative z-10">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={current}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <StarRating rating={testimonials[current].rating} />
                  <p className="font-display text-lg md:text-xl text-dark leading-relaxed mt-4 mb-6 italic">
                    "{testimonials[current].review}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      className="w-12 h-12 rounded-2xl object-cover shadow-md"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-ui font-bold text-dark text-sm">{testimonials[current].name}</p>
                      <p className="font-ui text-xs text-secondary font-medium">{testimonials[current].destination}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => go(1)}
                className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-secondary' : 'w-2 bg-slate-300 hover:bg-primary/40'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid of all testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`bg-white rounded-3xl shadow-card p-5 border transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-card-hover ${
                i === current ? 'border-primary/30 ring-1 ring-primary/20' : 'border-slate-100'
              }`}
            >
              <StarRating rating={t.rating} />
              <p className="text-slate-600 text-sm leading-relaxed mt-3 mb-4 line-clamp-3">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-xl object-cover" loading="lazy" />
                <div>
                  <p className="font-ui font-semibold text-dark text-xs">{t.name}</p>
                  <p className="font-ui text-xs text-secondary">{t.destination}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
