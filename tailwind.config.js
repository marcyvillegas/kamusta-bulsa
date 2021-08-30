
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: '#325475',
        boldtext: '#406E8E',
        name: '#161925',
        bell: '#23395B',
        swhite: '#EEEEEE',
      },
      fontFamily: {
        'pins' : ['Poppins', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
