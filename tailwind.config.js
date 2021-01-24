module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bg-pattern': "url('/Components/Stage/assets/ZenBG.png')",
      }),
      colors: {
        'background': '#020203',
      },
      filter: {
        'none': 'none',
        'grayscale': 'grayscale(1)',
        'invert': 'invert(1)',
        'sepia': 'sepia(1)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
],
}
