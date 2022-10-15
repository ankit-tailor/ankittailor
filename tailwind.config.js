const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      dark: "#111827",
      white: "#f9fafb",
      active: "#929090",
      linkDark: "#1f2937",
      linkLight: "#e5e7eb",
      indigo: "rgba(0, 195, 255)",
      cyan: colors.cyan,
      blue: colors.blue,
    },
  },
  variants: {
    extend: {
      textOpacity: ["dark"],
      animation: ["motion-safe"],
    },
  },
  plugins: [],
}
