/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        blackopsone: ['Black Ops One', 'sans-serif'],
        anonymouspro: ['Anonymous Pro', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

