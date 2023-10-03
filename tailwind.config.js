/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        back: "url(../src/Assets/updatedbg.svg)",
        visionxbg: "url(../src/Components/Events/VisionX/visionxasset/visionxbg.svg)",
        title: "url(../src/Assets/header.svg)",
      },
    },
    fontFamily: {
      anurati: ["Anurati", "sans-serif"],
      beyono: ["Beyno-Test"]
    },
  },
  plugins: [require("daisyui")],
};
