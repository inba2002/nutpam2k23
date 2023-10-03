/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        back: "url(../src/Assets/updatedbg.svg)",
        title: "url(../src/Assets/header.svg)",
      },
    },
    fontFamily: {
      anurati: ["Anurati", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
