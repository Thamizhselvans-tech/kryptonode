/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#06090f',
          surface: '#0d141c',
          surfaceHover: '#141f2a',
          emerald: '#10b981',
          emeraldDark: '#031b15',
          emeraldDeep: '#062c22',
          mint: '#34d399',
          mintLight: '#6ee7b7',
          charcoal: '#0b0f17',
          slate: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
