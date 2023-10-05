import "./App.css";
import Loading from "./Components/Loading";
import AnimatedCursor from "react-animated-cursor";
import StarsCanvas from "../src/Components/Stars";
import { Routes, Route } from "react-router-dom";
import { useState, CSSProperties } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import BasicDetails from "./Components/Registration/BasicDetails";
import Department from "./department";
import "./index.css";
import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";
import Discover from "./discover";
import VisionHero from "./Components/Events/VisionX/VisionHero";
import SpaceOdysseyHero from "./Components/Events/SpaceOdyssey/SpaceOdysseyHero";
import CelesticalPaiseHero from "./Components/Events/CelesticalPause/CelesticalPaiseHero";
import DimensionalConquestHero from "./Components/Events/DimensionalConquest/DimensionalConquestHero";
import AstroHero from "./Components/Events/AstroCapture/AstroCapture/AstroHero";
import PixelHero from "./Components/Events/PixelLegacy/PixelHero";
import CosmoHero from "./Components/Events/CosmoCode/CosmoHero";
import AIHero from "./Components/Events/AIstronomy/AiHero";
import EventScroll from "./Components/EventScroll";
import Aistronomy from "./Components/Registration/Aistronomy";


import Horiscroll from "./Components/Horiscroll";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <>
      <div className="w-full overflow-x-hidden bg-back bg-cover relative z-0">
        <Loading/>
        {/* <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/celestialpause" element={<CelesticalPaiseHero />} />
          <Route path="/astrocapture" element={<AIHero />} />
          <Route path="/spaceodyssey" element={<SpaceOdysseyHero />} />
          <Route path="/aistronomy" element={<AstroHero />} />
          <Route
            path="/dimensionalconquest"
            element={<DimensionalConquestHero />}
          />
          <Route path="/cosmocode" element={<CosmoHero />} />
          <Route path="/visionx" element={<VisionHero />} />
          <Route path="/pixellegacy" element={<PixelHero />} />
<<<<<<< HEAD
        </Routes>
        
=======
        </Routes> */}
        {/* <Horiscroll/> */}
        <AnimatedCursor
          // clickables={[
          //   "a",
          //   'input[type="text"]',
          //   'input[type="email"]',
          //   'input[type="number"]',
          //   'input[type="submit"]',
          //   'input[type="image"]',
          //   "label[for]",
          //   "select",
          //   "textarea",
          //   "button",
          //   ".link",
          //   {
          //     target: ".custom",
          //     options: {
          //       innerSize: 12,
          //       outerSize: 12 ,
          //       color: "255, 255, 255",
          //       outerAlpha: 0.3,
          //       innerScale: 0.7,
          //       outerScale: 5,
          //     },
          //   },
          // ]}
          innerSize={0}
          outerSize={10}
          color="255, 255, 255"
          outerAlpha={1}
          innerScale={0}
          outerScale={0}
          innerStyle={{
            mixBlendMode: "exclusion",
            backdropFilter: 10,
          }}
        />
>>>>>>> 87db230bbfb69c63106ea1b29cf7c3e41b2cd5e3
      </div>
      
      {/* <SpaceOdysseyHero/>
      <VisionHero/> 
      <CelesticalPaiseHero/>
      <CosmoHero/>
      <DimensionalConquestHero/>
      <AstroHero/>
      <PixelHero/> */}

      {/* <VisionHero/> */}

      {/* <div className="w-full bg-back bg-cover relative z-0">
        <Department />
        <Discover />
        <EventScroll />
        <Footer />
      </div> */}
      {/* <div className="sweet-loading">

    </div> 
    <div className="sweet-loading">

      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <CircleLoader
        color="#bd00ff"
        cssOverride={{}}
        loading
        size={147}
        speedMultiplier={1}
      /> */}
      {/* </div> */}
    </>
  );
}

export default App;
