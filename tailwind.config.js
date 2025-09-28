/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#f1c40f",
          deep: "#0f172a",
          light: "#f8f5e7"
        }
      },
      boxShadow: {
        brand: "0 20px 50px rgba(15,23,42,.12)"
      }
    },
  },
  plugins: [],
};
