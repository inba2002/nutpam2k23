import "./App.css";
import Loading from "./Components/Loading";
import AnimatedCursor from "react-animated-cursor";
import StarsCanvas from "../src/Components/Stars";

import { useState, CSSProperties } from "react";
import CircleLoader from "react-spinners/CircleLoader";
<<<<<<< HEAD
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
=======
import BasicDetails from "./Components/Registration/BasicDetails"
import Department from './department';
import './index.css'
import Footer from './Components/footer';
import Navbar from './Components/Navbar';
import Discover from './discover';
import VisionHero from './Components/Events/VisionX/VisionHero';
import SpaceOdysseyHero from './Components/Events/SpaceOdyssey/SpaceOdysseyHero';
import CelesticalPaiseHero from './Components/Events/CelesticalPause/CelesticalPaiseHero';
import DimensionalConquestHero from './Components/Events/DimensionalConquest/DimensionalConquestHero';
import AstroHero from './Components/Events/AstroCapture/AstroCapture/AstroHero'
import PixelHero from './Components/Events/PixelLegacy/PixelHero'
import CosmoHero from './Components/Events/CosmoCode/CosmoHero'
import AIHero from './Components/Events/AIstronomy/AiHero'
import EventScroll from './Components/EventScroll';

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };
>>>>>>> 2d05ed6b573f654d5a15be83c865d89a563eca1f

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <>
<<<<<<< HEAD
      <VisionHero />
      <div className="w-full overflow-x-hidden bg-back bg-cover relative z-0">
        <Routes>
          <Route path="/" element={<Loading />}></Route>
          <Route path="/Register" element={<BasicDetails />}></Route>
        </Routes>
        
        <Footer />
      </div>
=======

      {/* <BasicDetails /> */}
      {/* <SpaceOdysseyHero/>
      <VisionHero/> 
      <CelesticalPaiseHero/>
      <CosmoHero/>
      <DimensionalConquestHero/>
      <AstroHero/>
      <PixelHero/> */}
      
      {/* <VisionHero/> */}
     <div className="w-full bg-back bg-cover relative z-0">


      {/* <AIHero/> */}

         {/* <div className="w-full overflow-x-hidden bg-back bg-cover relative z-0">

      
     <StarsCanvas/> */}
     <Loading/>
      <Department />
      <Discover/>
      <EventScroll/>
      <Footer />
    </div> 
    {/* <div className="sweet-loading">

    </div> 
    <div className="sweet-loading">

    </div>  */}
     {/* <div className="sweet-loading">

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
<<<<<<< HEAD

=======
=======
      />
    </div> */}
>>>>>>> e943fa6622311dc3d6101a4e12dae2d6dddbb0db
>>>>>>> 2d05ed6b573f654d5a15be83c865d89a563eca1f
>>>>>>> e3adf5f7625a3fd439e6c0084a310ba8071eda5c
    </>
  );
}

export default App;
