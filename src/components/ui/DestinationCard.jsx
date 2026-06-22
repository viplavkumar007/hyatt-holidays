import { motion } from 'framer-motion'
import { MapPin, MessageSquare } from 'lucide-react'
import { openWhatsApp } from '../../utils/whatsapp'

export default function DestinationCard({ dest, index }) {
  return (
    <motion.div
      className="dest-card group"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={dest.image}
          alt={dest.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent" />

        {/* Tag */}
        <div className="absolute top-3 left-3 bg-secondary/90 backdrop-blur-sm text-white font-ui text-xs font-semibold px-3 py-1 rounded-full">
          {dest.tag}
        </div>

        {/* Dest name overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-display font-bold text-white text-lg leading-tight">{dest.name}</h3>
          <p className="text-white/75 text-xs mt-0.5 flex items-center gap-1">
            <MapPin size={11} />
            {dest.description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white p-3 flex items-center justify-between">
        <span className="font-ui text-xs text-slate-500">Contact us for pricing</span>
        <button
          onClick={() => openWhatsApp(dest.whatsappMsg)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold font-ui
            bg-primary text-white
            px-3 py-1.5 rounded-xl
            transition-all duration-200
            hover:bg-secondary hover:-translate-y-0.5 hover:shadow-md
            active:scale-95"
        >
          <MessageSquare size={11} />
          Enquire
        </button>
      </div>
    </motion.div>
  )
}
