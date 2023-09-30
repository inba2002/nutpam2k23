
import './App.css';
import Loading from './Components/Loading';
import AnimatedCursor from "react-animated-cursor"
import StarsCanvas from "../src/Components/Stars"
import './index.css'

function App() {
  return (
    <div className="w-full bg-back bg-cover relative z-0">
      <Loading/>
      <StarsCanvas/>
      
    
    
    </div>
  );
}

export default App;
