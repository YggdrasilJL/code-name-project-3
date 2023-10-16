/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      zen: ["Zen Dots", "monospace"],
    },
    colors: {
      // cyberpunk color palette
      cyber: {
        black: "#000",
        yellow: "#FEE801",
        darkYellow: "#969A27",
        blue: "#4CC9F0",
        pink: "#FF00F2",
      },
      opacityBlack: "rgba(0,0,0,0.6)",
      // gives us all default tailwind colors
      ...colors,
    },
  },
  plugins: [],
}
