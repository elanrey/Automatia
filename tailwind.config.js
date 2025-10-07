/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./sectores/**/*.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d45fa',
        secondary: '#dc41f1',
        dark: '#0f1729',
        light: '#f8fafc',
        gray: {
          DEFAULT: '#666666',
          light: '#e0e0e0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-red': 'linear-gradient(135deg, rgb(255, 178, 174), rgb(199, 16, 16))',
        'gradient-blue': 'linear-gradient(135deg, rgb(180, 216, 250), rgb(29, 79, 215))',
        'gradient-green': 'linear-gradient(135deg, rgb(128, 230, 158), rgb(24, 126, 19))',
        'gradient-purple': 'linear-gradient(135deg, rgb(217, 157, 243), rgb(128, 18, 202))',
        'gradient-orange': 'linear-gradient(135deg, rgb(247, 196, 138), rgb(202, 74, 35))',
        'gradient-pink': 'linear-gradient(135deg, rgb(255, 182, 193), rgb(245, 90, 167))',
        'gradient-yellow': 'linear-gradient(135deg, rgb(245, 236, 155), rgb(201, 161, 4))',
        'gradient-gray': 'linear-gradient(135deg, rgb(229, 229, 229), rgb(169, 169, 169))',
        'gradient-brown': 'linear-gradient(135deg, rgb(211, 185, 152), rgb(124, 60, 14))',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}