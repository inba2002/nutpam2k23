
import './App.css';
import Loading from './Components/Loading';
import AnimatedCursor from "react-animated-cursor"
import StarsCanvas from "../src/Components/Stars"
import CSV from './Components/CSV';
import './index.css'
import Footer from './Components/footer';

function App() {
  return (
    <div className="w-full overflow-x-hidden bg-back bg-cover relative z-0">
      <Loading/>
      <StarsCanvas/>
      <CSV />
      <Footer />
    
    </div>
  );
}

export default App;
