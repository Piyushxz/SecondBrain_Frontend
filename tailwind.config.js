/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors:{
        primaryColor:"#1a2439",
        primaryColor2:"#222f4a",
        secondaryColor:"#30436b",
        backgroundColor:"#0A1128",
        backgroundColor2:"#e3d9fb",
        customGray:"#191919"

      }
    },
  },
  plugins: [],
}
// #a549ff
