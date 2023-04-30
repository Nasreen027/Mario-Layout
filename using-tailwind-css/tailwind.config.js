/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        red : "#f63232",
        white : "#ffffff",
        mustard : "#feb614",
        navBg : "#f4f4f4",
        liColor : "#a0a6b4",
        liNthChild : "#f64f6f",
        heading2: "#f64347",
        paragraph1 : "#55585a",
        paragraph2 : "#afb6c4",
        footerH3 : "#4b4b4b"
      }
    },
  },
  plugins: [],
}