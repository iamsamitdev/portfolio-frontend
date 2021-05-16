module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ['Montserrat','Noto Sans Thai UI','sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
