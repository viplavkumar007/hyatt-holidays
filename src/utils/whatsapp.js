export const WA_NUMBER = '919655811106'

export function openWhatsApp(message) {
  const encoded = encodeURIComponent(message || 'Hello Hyatt Holidays, I would like to know more about your tour packages.')
  window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer')
}
