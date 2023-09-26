/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",  
    "./node_modules/vue-tailwind-datepicker/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require("@tailwindcss/forms")],
  daisyui: {
    themes: ["light"],
  },
}
