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
        search: "#242424",
        textColor: "#a7a7a7",
        footer: "#000000",
        hoverColor: "#181818",
        playListBg: "#282828",
        dropDown: "#282828",
        FooterPlay: "#4d4d4d",
        nav: "#090909",
        icon: "#292929",
        iconHover: "#7d7b7b",
        bg: "#4a4a4a",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
