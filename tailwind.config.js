/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0E131F',
        'accent-red': '#FF0035',
        'button-gray': '#38405F',
      },
      fontFamily: {
        'koulen': ['Koulen', 'cursive'],
      },
      animation: {
        'grid-move': 'gridMove 20s linear infinite',
      },
      keyframes: {
        gridMove: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-20px) translateY(-10px)' },
          '50%': { transform: 'translateX(-40px) translateY(-20px)' },
          '75%': { transform: 'translateX(-20px) translateY(-30px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        }
      }
    },
  },
  plugins: [],
} 