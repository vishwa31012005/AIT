/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'brand-purple': '#8B5CF6',
        'brand-pink': '#EC4899',
        'brand-teal': '#14B8A6',
      }
    },
  },
  plugins: [],
}
