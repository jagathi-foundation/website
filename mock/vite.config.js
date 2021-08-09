// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        "about.html": resolve(__dirname, 'about.html'),
        "projects.html": resolve(__dirname, 'projects.html'),
        "redirecttovolunteer.html": resolve(__dirname, 'redirecttovolunteer.html')
      }
    }
  }
}