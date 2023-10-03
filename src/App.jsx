
import './App.css';
import Loading from './Components/Loading';
import AnimatedCursor from "react-animated-cursor"
import StarsCanvas from "../src/Components/Stars"

import Department from './department';
import './index.css'
import Footer from './Components/footer';


function App() {
  return (
<<<<<<< HEAD
    <div  className="w-full overflow-x-hidden bg-back bg-cover relative z-0">
=======
    <div  className="w-full overflow-x-hidden bg-back bg-cover relative">
      
>>>>>>> dd22ed69e9f4f894ba292d21d9a58f02a08e1262
         {/* <div className="w-full overflow-x-hidden bg-back bg-cover relative z-0"> */}
      <Loading/>
      <StarsCanvas/>
      {/* <CSV /> */}
<<<<<<< HEAD
      <Department />
=======
      
>>>>>>> dd22ed69e9f4f894ba292d21d9a58f02a08e1262
      <Footer />
    {/* </div> */}
    </div>
  );
}

export default App;
