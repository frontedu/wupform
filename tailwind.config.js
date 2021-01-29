module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: ['active'],
    },
    textColor: {
      'primary': '#008FB2',
      'secondary': '#008FB2',
      'danger': '#e3342f',
      'gray': '#444444',
      'white': '#00000',
    }
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}