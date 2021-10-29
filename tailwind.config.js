const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ...colors,
        gray: colors.blueGray,
        primary: colors['indigo'],
        secondary: colors['teal'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
