/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
      colors: {
        mainBg: "#121212",
        greenPlay: "#1ed760",
        active: "#181818",
        textColor: "#a7a7a7",
        footer: "#000000",
        hoverColor: "#181818",
        playListBg: "#282828",
        dropDown: "#282828",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};