/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        back: "url(../src/Assets/mainbg.png)",
        title: "url(../src/Assets/header.svg)",
      }
    },
  },
  plugins: [],
}

