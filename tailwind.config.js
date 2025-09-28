/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        muted: "#64748b",
        accent: "#f1c40f"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17,24,39,.08)"
      },
    },
  },
  plugins: [],
};
