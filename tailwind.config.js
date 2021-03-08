module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {},
    maxHeight: {
      0: '0',
      '1/3': '33vh',
      '1/4': '25vh',
      '2/3': '66vh',
      '1/2': '50vh',
      '3/4': '75vh',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
