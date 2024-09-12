/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            'primary-color':'',
            'secondary-color': '',
            'bg-color': '#08232F'
          },
            backgroundImage:{
            'discuss-bg': "url('')",
          },
            fontFamily: {
            'poppins': "Poppins, sans-serif",
          }
      },
    },
    plugins: [],
  }