
import './App.css';
import Loading from './Components/Loading';
import AnimatedCursor from "react-animated-cursor"
import StarsCanvas from "../src/Components/Stars"
import Video from './Components/video';
import './index.css'
import Footer from './Components/footer';

function App() {
  return (
    <div className="w-screen overflow-x-hidden bg-back bg-cover relative z-0">
      <Loading/>
      <StarsCanvas/>
      <Video />
      <Footer />
    
    </div>
  );
}

export default App;
