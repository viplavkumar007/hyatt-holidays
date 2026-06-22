import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react'
import { brand } from '../../data/siteContent'
import { openWhatsApp } from '../../utils/whatsapp'
import { useInView } from '../../hooks/useScrollSpy'
import { fadeUp, slideLeft, slideRight } from '../../utils/animations'

const INIT = { name: '', phone: '', email: '', destination: '', travelDate: '', message: '' }
const ERRORS_INIT = {}

function FloatingInput({ label, id, type = 'text', value, onChange, error, required }) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        required={required}
        className={`peer w-full border rounded-2xl px-4 pt-5 pb-2 text-sm text-dark bg-white outline-none transition-all duration-200
          focus:ring-2 focus:ring-primary/30 focus:border-primary
          ${error ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 hover:border-primary/40'}`}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 font-ui pointer-events-none
          peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400
          peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-primary
          top-1.5 text-[10px] ${value ? 'text-primary' : 'text-slate-400'}`}
      >
        {label}{required && ' *'}
      </label>
      {error && <p className="text-xs text-red-500 mt-1 ml-1">{error}</p>}
    </div>
  )
}

export default function Contact({ addToast }) {
  const [ref, inView] = useInView(0.1)
  const [form, setForm] = useState(INIT)
  const [errors, setErrors] = useState(ERRORS_INIT)
  const [loading, setLoading] = useState(false)

  const set = (field) => (val) => setForm((prev) => ({ ...prev, [field]: val }))

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim() || !/^\d{10,13}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Valid phone number required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.destination.trim()) e.destination = 'Please enter a destination'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setLoading(true)

    // Simulate async + route to WhatsApp
    await new Promise((r) => setTimeout(r, 1200))

    const msg = `Hello Hyatt Holidays! I'd like to enquire about a tour package.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Destination: ${form.destination}
Travel Date: ${form.travelDate || 'Flexible'}
Message: ${form.message || 'Please share your best packages.'}`

    openWhatsApp(msg)
    setLoading(false)
    setForm(INIT)
    addToast?.('Enquiry sent! We will contact you shortly.', 'success')
  }

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-pad" ref={ref}>
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <span className="section-badge mb-4">✦ Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
            Plan Your <span className="text-primary">Dream Trip</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Reach out to us and our travel experts will craft the perfect itinerary for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <h3 className="font-display text-2xl font-bold mb-2">Let's Connect</h3>
              <p className="text-white/70 text-sm mb-8">We're here to help you plan the perfect getaway. Reach us through any channel below.</p>

              <div className="space-y-5">
                <a href={`tel:${brand.phone}`} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-secondary/80 transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-ui mb-0.5">Phone / WhatsApp</p>
                    <p className="font-ui font-semibold text-sm">{brand.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${brand.email}`} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-secondary/80 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-ui mb-0.5">Email Us</p>
                    <p className="font-ui font-semibold text-sm break-all">{brand.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-ui mb-0.5">Office Address</p>
                    <p className="font-ui text-sm leading-relaxed">{brand.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <button
              onClick={() => openWhatsApp(brand.whatsappDefaultMsg)}
              className="w-full btn-whatsapp justify-center py-4 text-base rounded-2xl"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp Now
            </button>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-slate-200 rounded-3xl shadow-card p-7 space-y-4"
              noValidate
            >
              <h3 className="font-display font-bold text-xl text-dark mb-2">Send an Enquiry</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <FloatingInput label="Full Name" id="name" value={form.name} onChange={set('name')} error={errors.name} required />
                <FloatingInput label="Phone Number" id="phone" type="tel" value={form.phone} onChange={set('phone')} error={errors.phone} required />
              </div>
              <FloatingInput label="Email Address" id="email" type="email" value={form.email} onChange={set('email')} error={errors.email} required />
              <div className="grid sm:grid-cols-2 gap-4">
                <FloatingInput label="Destination" id="destination" value={form.destination} onChange={set('destination')} error={errors.destination} required />
                <FloatingInput label="Travel Date" id="travelDate" type="date" value={form.travelDate} onChange={set('travelDate')} />
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => set('message')(e.target.value)}
                  rows={3}
                  placeholder="Your message or special requirements..."
                  className="peer w-full border border-slate-200 hover:border-primary/40 focus:border-primary rounded-2xl px-4 py-3 text-sm text-dark bg-white outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending Enquiry…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Enquiry via WhatsApp
                  </>
                )}
              </button>
              <p className="text-xs text-slate-400 text-center">
                Your enquiry will open in WhatsApp for a quick response.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 rounded-3xl overflow-hidden shadow-card border border-slate-100"
        >
          <iframe
            title="Hyatt Holidays Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCVTowers%2C+Mettupalayam+Road%2C+Coimbatore!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
