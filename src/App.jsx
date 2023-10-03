
import './App.css';
import Loading from './Components/Loading';
import AnimatedCursor from "react-animated-cursor"
import StarsCanvas from "../src/Components/Stars"
import CSV from './Components/CSV';
import Department from './department';
import './index.css'
import Footer from './Components/footer';


function App() {
  return (
    <div  className="w-full overflow-x-hidden bg-back bg-cover relative">
         {/* <div className="w-full overflow-x-hidden bg-back bg-cover relative z-0"> */}
      <Loading/>
      <StarsCanvas/>
      {/* <CSV /> */}
<<<<<<< HEAD
      <Department />
=======
>>>>>>> 0c11bbda51699f6266af19394b36d6086e7ef984
      <Footer />
    {/* </div> */}
    </div>
  );
}

export default App;
