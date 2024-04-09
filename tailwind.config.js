/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        60: "60",
      },
      colors: {
        "hero-button": "#243c5a",
        "green-1": "#12BA82",
      },
    },
  },
  plugins: [],
};
