/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        satoshi: ["Satoshi", "sans-serif"], 
      },
      colors:{
        primaryColor:"#1a2439",
        primaryColor2:"#222f4a",
        secondaryColor:"#30436b",
        backgroundColor:"#0A1128",
        backgroundColor2:"#e3d9fb",
        customGray:"#191919",
        customBlue:"#78abfb"

      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
// #a549ff
