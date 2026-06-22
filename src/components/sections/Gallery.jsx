import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { galleryImages } from '../../data/siteContent'
import { useInView } from '../../hooks/useScrollSpy'
import { fadeUp, staggerContainer, staggerItem } from '../../utils/animations'

export default function Gallery() {
  const [ref, inView] = useInView(0.1)
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="section-pad bg-white">
      <div className="container-pad" ref={ref}>
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <span className="section-badge mb-4">✦ Travel Gallery</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
            Moments From <span className="text-primary">Our Journeys</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            A glimpse into the beautiful destinations and experiences we've crafted for our travelers.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-card group cursor-zoom-in relative"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '4/3' : '1/1' }}
              />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-ui text-xs font-medium">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.alt} className="w-full h-full object-contain" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-white font-ui font-semibold">{lightbox.alt}</p>
                <p className="text-white/60 text-sm">{lightbox.category}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-2xl text-white hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
