/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      DM: ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        blueDark: "#2F1893",
        bgBody: "#F2F2F2",
        green: "#25DAC5",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
