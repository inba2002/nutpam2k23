/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
          pixelf:'#7f35f8',
          pixele:'#ff0cf5'
      },
      backgroundImage: {
        back: 
        "url(../src/Assets/updatedbg.svg)",
        visionxbg:
          "url(../src/Components/Events/VisionX/visionxasset/visionxbg.svg)",
        dcbg: 
          "url(../src/Components/Events/DimensionalConquest/dimensionalconquestasset/dcbg.png)",
        title: 
          "url(../src/Assets/header.svg)",
        visionxregbg:
          "url(../src/Components/Events/VisionX/visionxasset/bgblur.svg)",
        pixelbg:
          "url(../src/Components/Events/PixelLegacy/pixellegacyasset/pixelbg.png)",
        astrobg:
          "url(../src/Components/Events/AstroCapture/AstroCapture/astrocaptureasset/astrobg.png)",
        cosmobg:
          "url(../src/Components/Events/CosmoCode/cosmocodeasset/cosmobg.png)",
        spaceodbg:
          "url(../src/Components/Events/SpaceOdyssey/spaceodysseyasset/spaceodbg.png)",
        aistromybg:
          "url(../src/Components/Events/AIstronomy/aiasset/aistromybg.png)",
          visionxregbg:
          "url(../src/Assets/VisionX_Reg_BG.png)",
          aistronomyregbg:
          "url(../src/Assets/Aistronomy_reg_bg.jpg)",
          cosmocoderegbg:
          "url(../src/Assets/Cosmocode_reg_bg.png)",
          pixellegacyregbg:
          "url(../src/Assets/pixellegacy_reg_bg.png)",
          celestialpauseregbg:
          "url(../src/Assets/celestialpause_reg_bg.png)",
          astrocaptureregbg:
          "url(../src/Assets/astrocapture_reg_bg.png)",
          spaceodysseyregbg:
          "url(../src/Assets/spaceodyssey_reg_bg.jpg)",
          dcregbg:
          "url(../src/Assets/dimensionalconquest_reg_bg.png)",
          successbg:"url(../src/Assets/success-bg.png)"
      },
      cursor: {
        // Define your custom cursor styles here
        'custom-cursor': 'url(../src/Assets/curso.png), auto',
      },
    },
    fontFamily: {
      anurati: ["Anurati", "sans-serif"],
      mono: ["Space Mono"],
    },
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')({ nocompatible: true })],
};
