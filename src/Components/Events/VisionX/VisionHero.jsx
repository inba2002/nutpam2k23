import React from "react";

import xtitle from "../VisionX/visionxasset/xtitlesvg.svg";
import AnimatedCursor from "react-animated-cursor";
import image from "./visionxasset/visionbg.png";


import VisionXrules from "./VisionXrules";

import Footer from "../../footer";
import { Link } from "react-router-dom";

const VisionHero = () => {
  return (
    <div className="bg-visionxbg bg-cover font-mono">
      <div className="w-screen">
        <div className="navbar navbar-end bg-transparent w-full h-32">
          <div className="w-full flex items-center justify-start">
            <div className="flex w-1/2 items-center justify-center">
              <ul className="md:flex hidden border-b-2 border-white/25 items-center justify-between px-10 font-mono text-white gap-10 text-xl p-2  w-full">
                <Link to="/">
                  <li className="hover:text-white/50 w-28 h-10 hover:bg-white/25 flex items-center justify-center ">
                    <a>Home</a>
                  </li>
                </Link>
                <li className="hover:text-white/50 w-28 h-10 hover:bg-white/25 flex items-center justify-center">
                  <a>Vision X</a>
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
                  className="menu font-mono text-white flex justify-center items-center backdrop-blur-md menu-lg dropdown-content mt-64 z-[1] mr-32 p-2 border border-white/10 shadow-xl pr-96 rounded-box w-28"
                >
                  <Link to="/">
                  <li>
                    <a>Home</a>
                  </li>
                  </Link>
                  <li>
                    <a className="w-36">Vision X</a>
                  </li>

                  <li>
                    <a href="#Foot">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='z-0'>
      <img src={VisionBg} className="object-cover w-full" />
      </div> */}
      <div className="flex flex-wrap z-10 h-full">
        <div className="w-full md:w-5/6 lg:w-3/4 xl:w-3/4 flex  justify-center p-8">
          {/* Content for the first cell */}
          <div className=" flex flex-col items-center justify-center">
            <div className="w-full md:w-5/6">
            <img src={xtitle} alt="" />  
            </div>
            
            {/* <img src={mreport} alt="" /> */}
            <div className='w-full md:w-5/6 flex flex-col items-start justify-start pt-12'>
            <div className=' w-full  flex-col  flex items-start justify-start'>
                <h1 className='font-mono font-bold italic text-[24px] w-[20rem] pb-2 text-white'>MISSION REPORT</h1>
                <div className=' w-full text-justify  flex flex-col items-start justify-start'>
                <p className='font-mono  text-white font-bold text-[20px] pb-2 pt-8'>   Dive deep into innovation by picking a real-world problem statement and creating a groundbreaking solution. Present your visionary thoughts through a video within the allocated time and get ready for a surprising event that awaits you! ✨🌟🌟 Let your creativity soar and embrace the unexpected at VisionX!</p>
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
              src={image}
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
                  Badhrinath R <a href="tel:+918248261992">8248261992</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                  Aanandhini S <a href="tel:+917338811212">7338811212</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                  JaiSurya S <a href="tel:+919840680496">9840680496</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                Muthu Priya <a href="tel:+9172009 65530">72009 65530</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                Harisharajan <a href="tel:+9197913 40230">97913 40230</a>
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
      <AnimatedCursor
        // clickables={[
        //   "a",
        //   'input[type="text"]',
        //   'input[type="email"]',
        //   'input[type="number"]',
        //   'input[type="submit"]',
        //   'input[type="image"]',
        //   "label[for]",
        //   "select",
        //   "textarea",
        //   "button",
        //   ".link",
        //   {
        //     target: ".custom",
        //     options: {
        //       innerSize: 12,
        //       outerSize: 12 ,
        //       color: "255, 255, 255",
        //       outerAlpha: 0.3,
        //       innerScale: 0.7,
        //       outerScale: 5,
        //     },
        //   },
        // ]}
        innerSize={0}
        outerSize={10}
        color="255, 255, 255"
        outerAlpha={1}
        innerScale={0}
        outerScale={0}
        innerStyle={{
          mixBlendMode: "exclusion",
          backdropFilter: 10,
        }}
      />
      <VisionXrules />
      <div id="Foot">
        <Footer />
      </div>
    </div>
  );
};

export default VisionHero;
