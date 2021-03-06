module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      dark: "#212121",
      white: "#ffffff",
      active: "#929090",
      indigo: "rgba(0, 195, 255)",
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
