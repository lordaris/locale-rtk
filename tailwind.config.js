/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        brown: {
          soft: "#ebe4dc",
          DEFAULT: "#d4c6b8",
          mitsubishi: "#070707",
          medium: "#886847",
          light: "#8f7552",

        }
      },
    },
  },
  plugins: [],
}
