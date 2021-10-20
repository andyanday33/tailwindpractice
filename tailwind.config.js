module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors: {
        primary: '#20225',
        secondary: '#5865f2',
      },
    },
  },
  plugins: [],
}
