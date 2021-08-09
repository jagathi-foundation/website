module.exports = {
  purge: ['./index.html', './about.html', './projects.html', './redirecttovolunteer.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        main: "Poppins, sans-serif"
      },
      screens: {
        xs: "500px"
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
