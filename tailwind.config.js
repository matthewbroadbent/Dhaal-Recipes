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
          50: '#FFF5F5',
          100: '#FFE0E0',
          200: '#FFC7C7',
          300: '#FFA8A8',
          400: '#FF8A8A',
          500: '#FF6B6B',
          600: '#FA5252',
          700: '#F03E3E',
          800: '#E03131',
          900: '#C92A2A',
        },
        spice: {
          mild: '#FCD34D',
          medium: '#FB923C',
          hot: '#EF4444',
          extreme: '#991B1B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      },
    },
  },
  plugins: [],
}
