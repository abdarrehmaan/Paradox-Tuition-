/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1E3A8A',    // Deep trustworthy navy
          lightBlue: '#2563EB', // Vibrant modern EdTech blue
          cyan: '#06B6D4',    // Modern cyan accent
          orange: '#F97316',  // Crisp energetic orange
          amber: '#F59E0B',   // Warm amber
          pink: '#EC4899',    // Clean vibrant accent
          emerald: '#10B981', // Verified / success emerald
          dark: '#0B1329',    // Ultra-deep slate dark for text/contrast
          surface: '#111C38', // Deep card dark
          gray: '#F8FAFC',    // Slate soft gray
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 12px 32px -4px rgba(15, 23, 42, 0.08)',
        'soft-xl': '0 20px 45px -8px rgba(15, 23, 42, 0.12)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow-blue': '0 0 25px -5px rgba(37, 99, 235, 0.35)',
        'glow-orange': '0 0 25px -5px rgba(249, 115, 22, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite linear',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
