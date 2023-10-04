
import './App.css';
import Loading from './Components/Loading';
import AnimatedCursor from "react-animated-cursor"
import StarsCanvas from "../src/Components/Stars"

import { useState, CSSProperties } from "react";
import CircleLoader from "react-spinners/CircleLoader";

import Department from './department';
import './index.css'
import Footer from './Components/footer';
import Navbar from './Components/Navbar';
import Discover from './discover';
import VisionHero from './Components/Events/VisionX/VisionHero';
import SpaceOdysseyHero from './Components/Events/SpaceOdyssey/SpaceOdysseyHero';
import CelesticalPaiseHero from './Components/Events/CelesticalPause/CelesticalPaiseHero';

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

function App() {
  // let [loading, setLoading] = useState(true)
  // let [color, setColor] = useState("#ffffff");
  return (
    
    <>

<<<<<<< HEAD
      {/* <SpaceOdysseyHero/>*/}
      <VisionHero/> 
      <CelesticalPaiseHero/>
         {/* <div className="w-full overflow-x-hidden bg-back bg-cover relative z-0">
=======

      {/* <VisionHero/> */}
         <div className="w-full overflow-x-hidden bg-back bg-cover relative z-0">
>>>>>>> c97190941b17f673a0ae3670a1f9e9cb0f7602e7
      <Loading/>
      <StarsCanvas/>
      <Department />
      <Discover/>
      <Footer />
    </div>
    {/* <div className="sweet-loading">
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
