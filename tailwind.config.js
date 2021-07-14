const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        trueGray: colors.trueGray,
        indigo: colors.indigo,
        teal: colors.teal
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
