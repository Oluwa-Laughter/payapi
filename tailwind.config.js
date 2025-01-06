/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },

  theme: {
    extend: {
      colors: {
        darkPink: "#ba4270",
        linkWaterWhite: "#fbfcfe",
        sanJuanBlue: "#36536b",
        mirageBlue: "#1b262f",
        charmPink: "#da6d97",
        lightSanJuanBlue: "#6c8294",
      },
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
      },
    },
  },
  plugins: [],
};
