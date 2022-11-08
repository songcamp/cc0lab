const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bp-typewrite)", ...defaultTheme.fontFamily.sans],
        body: ["var(--font-ft88)", ...defaultTheme.fontFamily.mono],
      }
    },
  },
  plugins: [],
}
