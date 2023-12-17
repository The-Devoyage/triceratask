/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [require('flowbite/plugin'), require("@tailwindcss/typography")],
  darkMode: 'class',
  varients: {
    extend: {
      display: ['group-hover'],
    }
  }
}

