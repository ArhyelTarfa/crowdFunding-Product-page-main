/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit', 
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
       'desktop' : "url('../images/image-hero-desktop.jpg')",
        'mobile': "url('../images/image-hero-mobile.jpg')",
      }
    },
  },
  plugins: [],
}
