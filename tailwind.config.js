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
        card1: "#dc148c",
        card2: "#006450",
        card3: "#8400e7",
        card4: "#503750",
        card5: "#0d73ec",
        card6: "#d84000",
        card7: "#148a08",
        card8: "#e91429",
        card9: "#e1118c",
        card10: "#8d67ab",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
