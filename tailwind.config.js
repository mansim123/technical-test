/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: { 'xs': { 'max': '640px' } },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
       
      },
    },
  },
  plugins: [],
}
