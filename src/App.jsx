
import './App.css';
import Loading from './Components/Loading';
import AnimatedCursor from "react-animated-cursor"
import StarsCanvas from "../src/Components/Stars"

import { useState, CSSProperties } from "react";
import CircleLoader from "react-spinners/CircleLoader";
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

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  let [loading, setLoading] = useState(true)
  let [color, setColor] = useState("#ffffff");
  return (
    
    <>


      {/* <SpaceOdysseyHero/>
      <VisionHero/> 
      <CelesticalPaiseHero/>
      <CosmoHero/>
      <DimensionalConquestHero/>
      <AstroHero/>
      <PixelHero/> */}
      {/* <VisionHero/> */}
      <AIHero/>
         {/* <div className="w-full overflow-x-hidden bg-back bg-cover relative z-0">

      <Loading/>
      <StarsCanvas/>
      <Department />
      <Discover/>
      <Footer />
<<<<<<< HEAD
    </div> */}
    {/* <div className="sweet-loading">
=======
    </div> 
    <div className="sweet-loading">
>>>>>>> 5a5451166443d70adad8addea3830d8d4719c45b
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <CircleLoader
        color="#bd00ff"
        cssOverride={{}}
        loading
        size={147}
        speedMultiplier={1}
      />
    </div> */}
    </>

  );
}

export default App;
