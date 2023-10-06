import "./App.css";
import Loading from "./Components/Loading";
import AnimatedCursor from "react-animated-cursor";
import StarsCanvas from "../src/Components/Stars";
import DimensionalConquest from "./Components/Registration/DimensionalConquest";
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
import Visionx from "./Components/Registration/Visionx";
import SpaceOdyssey from "./Components/Registration/SpaceOdyssey";
import PixelLegacy from "./Components/Registration/PixelLegacy";
import CosmoCode from "./Components/Registration/CosmoCode";
import CelesticalPause from "./Components/Registration/CelestialPause";
import AstroCapture from "./Components/Registration/AstroCapture";

import Deck from "./Components/Slider/Deck";
import Eventshoriscroll from "./Components/Eventshoriscroll";
import { Loader } from "@react-three/drei";


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
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/celestialpause" element={<CelesticalPaiseHero />} />
          <Route path="/aistronomy" element={<AIHero />} />
          <Route path="/spaceodyssey" element={<SpaceOdysseyHero />} />
          <Route path="/astrocapture" element={<AstroHero />} />
          
          <Route
            path="/dimensionalconquest"
            element={<DimensionalConquestHero />}
          />
          <Route path="/cosmocode" element={<CosmoHero />} />
          <Route path="/visionx" element={<VisionHero />} />
          <Route path="/pixellegacy" element={<PixelHero />} />
          <Route path="/visionxRegistration" element={<Visionx />}></Route>
          <Route
            path="/spaceodysseyRegistration"
            element={<SpaceOdyssey />}
          />
          <Route path="/pixelLegacyRegistration" element={<PixelLegacy/>}/>
          <Route path="/dimensionalConquestRegistration" element={<DimensionalConquest />} />
          <Route path="/cosmoCodeRegistration" element={<CosmoCode />}/>
          <Route path="/celesticalRegistration" element={<CelesticalPause />}></Route>
          <Route path="/astroCaptureRegistration" element={<AstroCapture />}></Route>
          <Route path="/AistronomyRegistration" element={<Aistronomy />}></Route>
        </Routes>

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
      </div>
      
    </>
  );
}

export default App;
