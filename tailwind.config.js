
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          dark: '#231F20',
          teal: '#57B7C0',
          muted: '#797777',
          'muted-dark': '#4D4A4A',
          light: '#D9D9D9'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Lexend', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif']
      }
    },
  },
  plugins: [],
}
