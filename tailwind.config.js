/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",               // 👈 important for Vite
      "./src/**/*.{js,ts,jsx,tsx}", // 👈 includes TS & JSX files
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  