const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm:"480px",
      md: '768px',

      lg: '1024px',

      xl: '1440px'
 
    },
    extend: {
      animation: {
        loopscroll: "loopscroll 20s linear infinite",
      },
      keyframes: {
        loopscroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },

    fontFamily:{
      Lobster:["Lobster", "serif"],
      RedHat: ["Red Hat Text", "serif"]
    },
    container:{
      center:true,
      padding:{
        DEFAULT: "10px",
        md:"32px"
      }
    }
  },
  plugins: [],
}