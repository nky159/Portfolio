/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        sqlblue:"#31648C",
        node:"#529F41",
        js:"#F7DF1E"
      }
    },
  },
  plugins: [],
}

