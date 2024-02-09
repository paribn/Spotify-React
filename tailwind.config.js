/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#121212",
        green: "#1ed760",
        active: "#181818",
        textColor: "#a7a7a7",
        footer: "#000000",
      },
    },
  },
  plugins: [],
};
