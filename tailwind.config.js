/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'agri-green': {
          50: '#E8F0EA',
          100: '#D1E1D5',
          200: '#A3C3AB',
          300: '#75A581',
          400: '#478757',
          500: '#2D5A3D',
          600: '#244A31',
          700: '#1B3A25',
          800: '#122A19',
          900: '#091A0D',
        },
        'agri-orange': {
          50: '#FEF3E6',
          100: '#FDE7CD',
          200: '#FBCF9B',
          300: '#F9B769',
          400: '#F79F37',
          500: '#E07B00',
          600: '#B46300',
          700: '#874A00',
          800: '#5A3200',
          900: '#2D1900',
        },
        'agri-cream': {
          50: '#FEFEFE',
          100: '#FAFAF8',
          200: '#F5F5F0',
          300: '#EBEBDF',
          400: '#E1E1CE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
