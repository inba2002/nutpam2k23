
import './App.css';
import Loading from './Components/Loading';
import AnimatedCursor from "react-animated-cursor"
import StarsCanvas from "../src/Components/Stars"

import Department from './department';
import './index.css'
import Footer from './Components/footer';
import Navbar from './Components/Navbar';
import Discover from './discover';
import VisionHero from './Components/Events/VisionX/VisionHero';
import SpaceOdysseyHero from './Components/Events/SpaceOdyssey/SpaceOdysseyHero';
import CelesticalPaiseHero from './Components/Events/CelesticalPause/CelesticalPaiseHero';

function App() {
  return (
    <>

      {/* <SpaceOdysseyHero/>*/}
      <VisionHero/> 
      <CelesticalPaiseHero/>
         {/* <div className="w-full overflow-x-hidden bg-back bg-cover relative z-0">
      <Loading/>
      <StarsCanvas/>
      <Department />
      <Discover/>
      <Footer />
    </div> */}
    </>

  );
}

export default App;
