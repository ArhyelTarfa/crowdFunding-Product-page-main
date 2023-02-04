/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit', 
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
       'desktop' : "url('../images/image-hero-desktop.jpg')",
        'mobile': "url('../images/image-hero-mobile.jpg')",
      },
      colors:{
        'Moderatecyan': "hsl(176, 50%, 47%)",
        'Darkcyan': "hsl(176, 72%, 28%)",
        "Darkgray": 'hsl(0, 0%, 48%)'
      },
      fontFamily:{
        'commissioner': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
