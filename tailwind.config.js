/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C81',
          50: '#E8F1FA',
          100: '#C5D9F0',
          200: '#8DB4E0',
          300: '#5590D0',
          400: '#2B6DB7',
          500: '#0F4C81',
          600: '#0B3B65',
          700: '#082C4C',
          800: '#051D33',
          900: '#030F1A',
        },
        secondary: {
          DEFAULT: '#F5A623',
          50: '#FEF6E9',
          100: '#FDEAC4',
          200: '#FBD088',
          300: '#F8BA4D',
          400: '#F5A623',
          500: '#D98B0A',
          600: '#A86B08',
          700: '#7A4E06',
          800: '#4D3104',
          900: '#241702',
        },
        accent: '#1ABC9C',
        surface: '#F8FAFC',
        muted: '#F1F5F9',
        dark: '#1E293B',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        ui: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(15, 76, 129, 0.12)',
        'glass-lg': '0 16px 48px rgba(15, 76, 129, 0.18)',
        'card': '0 4px 24px rgba(15, 76, 129, 0.08)',
        'card-hover': '0 12px 40px rgba(15, 76, 129, 0.18)',
        'gold': '0 4px 24px rgba(245, 166, 35, 0.25)',
        'gold-hover': '0 8px 32px rgba(245, 166, 35, 0.4)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(15,76,129,0.85) 0%, rgba(15,76,129,0.5) 50%, rgba(26,188,156,0.3) 100%)',
        'card-gradient': 'linear-gradient(135deg, #0F4C81 0%, #1565A8 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F5A623 0%, #F8BA4D 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245,166,35,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(245,166,35,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
