/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
      }, //end of fontFamily
    },
  },
  plugins: [],
}
