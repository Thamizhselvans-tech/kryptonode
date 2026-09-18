/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#05140D',
          900: '#0A2E1F', // Primary Deep Forest Green
          800: '#0E3B28',
          700: '#155238',
          600: '#1B6E4A',
          50: '#F2F8F5',
        },
        emerald: {
          DEFAULT: '#1B5E3F', // Secondary Muted Emerald
          light: '#2E8B57',
          soft: '#E8F4EE',
          muted: '#5C6E63',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FAF9F5', // Supporting Warm Off-White / Ivory
          200: '#F2F0E6',
          300: '#E8E5D8',
        },
        charcoal: {
          DEFAULT: '#15201A', // Text Near Black / Charcoal
          light: '#2B3831',
          muted: '#5C6E63',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'forest-subtle': '0 4px 20px -2px rgba(10, 46, 31, 0.06)',
        'forest-card': '0 10px 30px -4px rgba(10, 46, 31, 0.1)',
        'forest-glow': '0 0 25px rgba(27, 94, 63, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
