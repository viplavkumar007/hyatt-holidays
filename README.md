# 🌍 Hyatt Holidays — Production Website

A premium React + Vite + Tailwind CSS + Framer Motion travel agency website.

---

## 🚀 Local Development

```bash
npm install
npm run dev
```

Open: http://localhost:5173

---

## 🏗️ Build for Production

```bash
npm run build
npm run preview   # test the built output
```

Output: `/dist` folder

---

## ☁️ Deploy to Vercel

1. Push project to GitHub
2. Go to https://vercel.com → New Project → Import repo
3. Framework: **Vite** (auto-detected)
4. Click **Deploy** — done!

Or via CLI:
```bash
npm i -g vercel
vercel
```

---

## ☁️ Deploy to Netlify

1. Go to https://netlify.com → New site from Git → Import repo
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy**

Or drag-drop the `dist/` folder to Netlify's dashboard.

---

## 📁 Project Structure

```
hyatt-holidays/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── DomesticDestinations.jsx
│   │   │   ├── InternationalDestinations.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── TourProcess.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── CTAStrip.jsx
│   │   └── ui/
│   │       ├── DestinationCard.jsx
│   │       ├── FloatingActions.jsx
│   │       ├── ScrollProgress.jsx
│   │       └── Toast.jsx
│   ├── data/
│   │   └── siteContent.js          ← All content lives here
│   ├── hooks/
│   │   └── useScrollSpy.js         ← useScrollSpy, useInView, useScrolled
│   ├── utils/
│   │   ├── animations.js           ← All Framer Motion variants
│   │   └── whatsapp.js             ← WhatsApp helper
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── netlify.toml
└── package.json
```

---

## ✏️ Updating Content

All content is in `src/data/siteContent.js`:
- `brand` — name, phone, email, address, WhatsApp
- `services` — each has its own `whatsappMsg`
- `domesticDestinations` / `internationalDestinations` — each has its own `whatsappMsg`
- `testimonials`, `faqs`, `galleryImages`, etc.

Every **Enquire Now**, **Book**, and **WhatsApp** button auto-sends a context-specific pre-typed message.

---

## 📱 WhatsApp Integration

Every card and button uses `openWhatsApp(message)` from `src/utils/whatsapp.js`.  
Number: **+91 9655811106**  
Messages are pre-filled per card clicked — no generic messages.

