import React from "react";
import image from "../SpaceOdyssey/spaceodysseyasset/spacebg.png";
import xtitle from "./spaceodysseyasset/spacetitle.svg";
import mreport from "./spaceodysseyasset/spacedesc.svg";
import { Link } from "react-router-dom";

import SpaceOdysseyrules from "./SpaceOdysseyrules";
import Footer from "../../footer";

const SpaceOdysseyHero = () => {
  return (
    <div className="bg-spaceodbg bg-cover">
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
                <a>Space Odyssey</a>
              </li>

              <li className="hover:text-white/50 w-28 h-10 hover:bg-white/25 flex items-center justify-center">
                <a href="#Foot">Contact</a>
              </li>
            </ul>
          </div>
          <div className="dropdown md:hidden w-full flex items-center justify-end">
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
                  <a className="w-64">Space Odyssey</a>
                </li>
                
                <li >
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
          <div className=" flex flex-col items-center justify-center">
            <img src={xtitle} alt="" />
            {/* <img className="pt-8" src={mreport} alt="" /> */}
            <div className='w-full md:w-3/5 flex flex-col items-start justify-start pt-12'>
            <div className=' w-full  flex-col  flex items-start justify-start'>
                <h1 className='font-mono font-bold italic text-[24px] w-[20rem] pb-2 text-white'>MISSION REPORT</h1>
                <div className=' w-full text-justify  flex flex-col items-start justify-start'>
                <p className='font-mono  text-white font-bold text-[20px] pb-2 pt-8'>A non-technical treasure hunting event with the theme of 'Space Odyssey' promises an exciting and adventurous experience. In this event, participants will form teams, and each team will be assigned a part of the story. Their mission is to uncover the rest of the story by decoding given QR clues in order to locate the hidden treasure(clues) . The first two teams who is hunting the treasure will be rewarded with cash price.</p>
                </div>
            </div>
          </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
          {/* Content for the second cell */}
          <div className="flex flex-col items-center justify-center sm:flex sm:items-center sm:justify-center">
            <img
              className="w-3/4 h-[40rem] object-cover  mb-10"
              src={image}
              alt=""
            />
            {/* <img src={coords} className='md:w-3/4 lg:w-3/4 xl:w-3/4 p-4' alt="" /> */}
            <div className="flex flex-col">
              <div className="border-b-2 w-full border-white flex items-end">
                <h1 className="font-mono font-bold text-2xl w-[20rem] pb-2 text-white">
                  Student Coordinators
                </h1>
              </div>
              <div>
                <p className="font-mono text-white text-lg pb-2 pt-4">
                  Dhanush B K <a href="tel:+916374151627">6374151627</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                  Ragul D <a href="tel:+919025578462">9025578462</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                  Jawahar J <a href="tel:+917904196076">7904196076</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                  Vasanth R <a href="tel:+918668129601">8668129601</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                  Pranav <a href="tel:+919789847335">9789847335</a>
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
      <SpaceOdysseyrules />
      <div id="Foot">
        <Footer />
      </div>
    </div>
  );
};

export default SpaceOdysseyHero;
