/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        back: "url(../src/Assets/updatedbg.svg)",
        visionxbg: "url(../src/Components/Events/VisionX/visionxasset/visionxbg.svg)",
        dcbg: "url(../src/Components/Events/DimensionalConquest/dimensionalconquestasset/dcbg.png)",
        title: "url(../src/Assets/header.svg)",
        visionxregbg: "url(../src/Components/Events/VisionX/visionxasset/bgblur.svg)",
        pixelbg: "url(../src/Components/Events/PixelLegacy/pixellegacyasset/pixelbg.png)",
        astrobg: "url(../src/Components/Events/AstroCapture/AstroCapture/astrocaptureasset/astrobg.png)",
        cosmobg: "url(../src/Components/Events/CosmoCode/cosmocodeasset/cosmobg.png)",
        spaceodbg: "url(../src/Components/Events/SpaceOdyssey/spaceodysseyasset/spaceodbg.png)",
        aistromybg: "url(../src/Components/Events/AIstronomy/aiasset/aistromybg.png)",
      },
    },
    fontFamily: {
      anurati: ["Anurati", "sans-serif"],
      mono: ["Space Mono"]
    },
  },
  plugins: [require("daisyui")],
};
