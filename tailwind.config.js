/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['"Special Gothic Condensed One"', 'sans-serif'],
      secondary: ['Rubik', 'sans-serif'], // correctly formatted
    },
    extend: {},
  },
  plugins: [],
}
