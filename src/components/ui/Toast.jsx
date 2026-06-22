import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, X } from 'lucide-react'

export default function Toast({ toasts, removeToast }) {
  return (
    <div
      aria-live="polite"
      aria-atomic="false"
      className="fixed top-24 right-4 z-[200] flex flex-col gap-3 max-w-sm w-full pointer-events-none"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 60, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`pointer-events-auto flex items-start gap-3 rounded-2xl px-4 py-3.5 shadow-xl border ${
              toast.type === 'success'
                ? 'bg-white border-emerald-200 text-emerald-800'
                : 'bg-white border-red-200 text-red-800'
            }`}
            role="alert"
          >
            {toast.type === 'success'
              ? <CheckCircle size={20} className="shrink-0 text-emerald-500 mt-0.5" />
              : <XCircle size={20} className="shrink-0 text-red-500 mt-0.5" />
            }
            <p className="text-sm font-medium leading-snug flex-1">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="shrink-0 p-0.5 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

// ── useToast hook ────────────────────────────────────────────
import { useState, useCallback } from 'react'

export function useToast() {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => removeToast(id), 4500)
  }, [])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return { toasts, addToast, removeToast }
}
