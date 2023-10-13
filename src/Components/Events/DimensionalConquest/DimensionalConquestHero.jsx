import React from "react";
import xtitle from "./dimensionalconquestasset/valtitle.svg";
import image1 from "./dimensionalconquestasset/image.svg";
import DimensionalConquestrules from "./DimensionalConquestrules";
import Footer from "../../footer";
import { Link } from "react-router-dom";
const DimensionalConquestHero = () => {
  return (
    <div className="bg-dcbg bg-cover">
      <div className="navbar navbar-end bg-transparent w-full h-32">
        <div className="w-full flex items-center justify-start">
          <div className="flex w-1/2 items-center justify-center">
            <ul className="md:flex hidden border-b-2 border-white/25 items-center justify-between px-10 font-mono text-white gap-10 text-xl p-2  w-full">
              <Link to="/">
                <li className="hover:text-white/50 w-28 h-10 hover:bg-white/25 flex items-center justify-center ">
                  <a>Home</a>
                </li>
              </Link>
              <li className="hover:text-white/50 w-64 h-10 hover:bg-white/25 flex items-center justify-center">
                <a>Dimensional Conquest</a>
              </li>

              <li className="hover:text-white/50 w-28 h-10 hover:bg-white/25 flex items-center justify-center">
                <a href="#Foot">Contact</a>
              </li>
            </ul>
          </div>
          <div className="dropdown w-full md:hidden flex items-center justify-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <div className="flex items-center  justify-center">
              <ul
                tabIndex={0}
                className="menu flex font-mono text-white  justify-center items-center backdrop-blur-md menu-lg dropdown-content mt-64 z-[1] mr-32 p-2 border border-white/10 shadow-xl pr-96 rounded-box w-28"
              >
                <Link to="/">
                  
                  <li>
                    <a>Home</a>
                  </li>
                </Link>
                <li>
                  <a className="w-72">Dimensional Conquest</a>
                </li>

                <li>
                  <a href="#Foot">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='z-0'>
      <img src={VisionBg} className="object-cover w-full" />
      </div> */}
      <div className="flex flex-wrap z-10 h-full">
        <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 flex  justify-center p-8">
          {/* Content for the first cell */}
          <div className=" flex flex-col items-center justify-center ">
            <div className="w-full md:w-5/6">
            <img className="px-4 md:px-8" src={xtitle} alt="" />
            </div>
            
            {/* <img className="md:px-8" src={mreport} alt="" /> */}
            <div className='w-full md:w-5/6 flex flex-col items-start justify-start pt-12 px-8'>
            <div className=' w-full  flex-col  flex items-start justify-start'>
                <h1 className='font-mono font-bold italic text-[24px] w-[20rem] pb-2 text-white'>MISSION REPORT</h1>
                <div className=' w-full text-justify  flex flex-col items-start justify-start'>
                <p className='font-mono  text-white font-bold text-[20px] pb-2 pt-8'>Dimensional Conquest is an exciting Valorant Tournament that showcases the skills & teamwork of your squad. It provides an excellent platform for amateur & semi-pro players to compete, gain experience & potentially make a name for themselves in the competitive valorant scene. </p>
                </div>
            </div>
          </div>
            <div className="w-full md:w-5/6 flex flex-col items-start justify-start pt-12 px-10">
              <div className=" w-full  flex-col  flex items-start justify-start">
                <h1 className="font-mono font-bold text-2xl w-[20rem] pb-2 text-white">
                  Round Infinity
                </h1>
                <div className=" w-full text-justify  flex flex-col items-start justify-start">
                  <p className="font-mono text-white text-lg pb-2 pt-4">
                    Elimination Bracket 5 vs 5.
                  </p>
                  <p className="font-mono text-white text-lg pb-2">
                    Single Elimination where the Team reaching 13 Round Victory
                    Wins.
                  </p>
                  <p className="font-mono text-white text-lg pb-2">
                    Elimination match-making for round Infinity Is based on team
                    strolling where teams are given a number which they choose
                    to match up with their rival to win against.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/6 flex flex-col items-start justify-start pt-12 px-10">
              <div className=" w-full  flex-col  flex items-start justify-start">
                <h1 className="font-mono font-bold text-2xl w-[20rem] pb-2 text-white">
                  Semi-Final
                </h1>
                <div className=" w-full text-justify  flex flex-col items-start justify-start">
                  <p className="font-mono text-white text-lg pb-2 pt-4">
                    Best Of 3 matches.
                  </p>
                  <p className="font-mono text-white text-lg pb-2">
                    Where one team with 2 wins Or The lowest number of lost
                    rounds, Wins.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/6 flex flex-col items-start justify-start pt-12 px-10">
              <div className=" w-full  flex-col  flex items-start justify-start">
                <h1 className="font-mono font-bold text-2xl w-[20rem] pb-2 text-white">
                  Finals
                </h1>
                <div className=" w-full text-justify  flex flex-col items-start justify-start">
                  <p className="font-mono text-white text-lg pb-2 pt-4">
                    Best Of 5 matches
                  </p>
                  <p className="font-mono text-white text-lg pb-2">
                    First team to win 3 matches wins.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/6 flex flex-col items-start justify-start pt-12 px-10">
              <div className=" w-full  flex-col  flex items-start justify-start">
                <h1 className="font-mono font-bold text-2xl w-[20rem] pb-2 text-white">
                  Note
                </h1>
                <div className=" w-full text-justify  flex flex-col items-start justify-start">
                  <p className="font-mono text-white text-lg pb-2 pt-4">
                    Their is 2 division of brackets, The Upper Bracket And Lower
                    Bracket. Where platinum & below will be considered for Lower
                    Bracket And Diamond & above will be considered for Upper
                    Bracket.
                  </p>
                  <p className="font-mono text-white text-lg pb-2">
                    Team Overall Needs To Be platinum for Upper Bracket, incase
                    of 3 or more platinums on one team will lead to Upper
                    Bracket.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/6 flex flex-col items-start justify-start pt-12 px-10">
              <div className=" w-full  flex-col  flex items-start justify-start">
                <h1 className="font-mono font-bold text-2xl w-[20rem] pb-2 text-white">
                  Map Pool
                </h1>
                <div className=" w-full text-justify  flex flex-col items-start justify-start">
                  <p className="font-mono text-white text-lg pb-2 pt-4">
                    Bind, Split, Haven, Ascent, Icebox, Breeze, Lotus, Pearl,
                    Sunset
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
          {/* Content for the second cell */}
          <div className="flex flex-col items-center justify-center sm:flex sm:items-center sm:justify-center">
            <img
              className="w-3/4 h-[40rem] object-cover mb-10"
              src={image1}
              alt=""
            />
            <div className="flex flex-col">
              <div className="border-b-2 w-full border-white flex items-end">
                <h1 className="font-mono font-bold text-2xl w-[20rem] pb-2 text-white">
                  Student Coordinators
                </h1>
              </div>
              <div>
                <p className="font-mono text-white text-lg pb-2 pt-4">
                  Kiran Kumar K <a href="tel:+919444451705">9444451705</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                  Raj Ronald Shaw <a href="tel:+919360834365">9360834365</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                  Karthik Maharaja AV <a href="tel:+917708320081">7708320081</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                Aravindan <a href="tel:+919789236655">9789236655</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                Gopinathan S <a href="tel:+919360758395">9360758395</a>
                </p>
                 
              </div>
            </div>
          </div>
        </div>
        {/* <div className="md:w-1/4 lg:w-full xl:w-full flex items-end justify-end">
       
        <div className="flex items-end justify-center px-28">
          <img src={coords} alt="" />
        </div>
      </div> */}
      </div>
      <DimensionalConquestrules />
      <div id="Foot">
        <Footer />
      </div>
    </div>
  );
};

export default DimensionalConquestHero;
