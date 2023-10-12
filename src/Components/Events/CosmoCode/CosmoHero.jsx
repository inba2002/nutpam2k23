import React from "react";
import xtitle from "../CosmoCode/cosmocodeasset/xtitlesvg.svg";
import { Link } from "react-router-dom";
import image from "./cosmocodeasset/image.svg";
import "./cosmocode.css";
import CosmoCoderules from "./CosmoCoderules";
import Footer from "../../footer";


const CosmoHero = () => {
  return (
    <div className="bg-cosmobg bg-cover">
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
                <a>Cosmo Code</a>
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
                  <a className="w-64">Cosmo Code</a>
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
          <div className=" flex flex-col items-center justify-center">
            <div className="w-full md:w-5/6">
            <img src={xtitle} className="px-4 md:px-8" alt="" />
            </div>
            
            <div className='w-full md:w-5/6 flex flex-col items-start justify-start pt-12 px-8'>
            <div className=' w-full  flex-col  flex items-start justify-start'>
                <h1 className='font-mono font-bold italic text-[24px] w-[20rem] pb-2 text-white'>MISSION REPORT</h1>
                <div className=' w-full text-justify  flex flex-col items-start justify-start'>
                <p className='font-mono  text-white font-bold text-[20px] pb-2 pt-8'>    Cosmo Code is a Technical Event promises excitement, competition, and a chance to showcase your coding abilities. Whether you are a coding enthusiast or a seasoned programmer, this event is your opportunity to shine and earn an recognition among your peers.</p>
                </div>
            </div>
          </div>
            <div className="w-full md:w-5/6 flex flex-col items-start justify-start pt-12 px-10">
              <div className=" w-full  flex-col  flex items-start justify-start">
                <h1 className="font-mono font-bold text-2xl w-[20rem] pb-2 text-white">
                Round 1
                </h1>
                <div className=" w-full text-justify  flex flex-col items-start justify-start">
                  <p className="font-mono text-white text-lg pb-2 pt-4">
                  In the first round, participants will embark on a 30-minute coding journey filled with challenges. They will encounter three intriguing coding challenges:
                  </p>
                  <ol className="list-decimal ">
                    <li className="font-mono text-white text-lg pb-2 pt-4">Jumbled Coding: Untangle the code and bring order to chaos.</li>
                    <li className="font-mono text-white text-lg pb-2 pt-4">Debugging: Hunt down and fix elusive bugs in the provided code.</li>
                    <li className="font-mono text-white text-lg pb-2 pt-4">Blind Coding: Trust your instincts and code without seeing the output in real-time.</li>
                  </ol>
                  <p className="font-mono text-white text-lg pb-2 pt-4">  
                  Participants can arrive anytime until 12:30 pm to begin their 30-minute challenge.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/6 flex flex-col items-start justify-start pt-12 px-10">
              <div className=" w-full  flex-col  flex items-start justify-start">
                <h1 className="font-mono font-bold text-2xl w-[20rem] pb-2 text-white">
                Round 2
                </h1>
                <div className=" w-full text-justify  flex flex-col items-start justify-start">
                  <p className="font-mono text-white text-lg pb-2 pt-4">
                  Only the best coders from Round 1 will advance to the final round, Code To Cosmos.
                  </p>
                  <p className="font-mono text-white text-lg pb-2">  
                  In this round, participants will face two coding questions, and they have 30 minutes to demonstrate their coding skills.
                  </p>
                  <p className="font-mono text-white text-lg pb-2">  
                  The choice of programming language is flexible, allowing participants to showcase their coding proficiency in their preferred language.
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
                  Harish Kumar S <a href="tel:+919176941079">9176941079</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                  Aiswarya V <a href="tel:+919444783843">9444783843</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                  Adhavan M <a href="tel:+917550194049">7550194049</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                Harini V  <a href="tel:+919345411309">9345411309</a>
                </p>
                <p className="font-mono text-white text-lg pb-2">
                Siddharth S Swamy <a href="tel:+919894202251">9894202251</a>
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
      <CosmoCoderules />
      <Footer />
    </div>
  );
};

export default CosmoHero;
