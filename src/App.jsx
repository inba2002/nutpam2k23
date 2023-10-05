import "./App.css";
import Loading from "./Components/Loading";
import AnimatedCursor from "react-animated-cursor";
import StarsCanvas from "../src/Components/Stars";

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
import { Routes, Route } from "react-router-dom";

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <>
      <VisionHero />
      <div className="w-full overflow-x-hidden bg-back bg-cover relative z-0">
        <Routes>
          <Route path="/" element={<Loading />}></Route>
          <Route path="/Register" element={<BasicDetails />}></Route>
        </Routes>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
