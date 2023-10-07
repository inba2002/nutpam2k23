import React from 'react'
import { Link } from 'react-router-dom'
import xtitle from "../AIstronomy/aiasset/xtitlesvg.svg"
import mreport from "../AIstronomy/aiasset/missionreport.svg"
import image from "./aiasset/image.svg"
import "./ai.css";
import Airules from './Airules'
import Footer from '../../footer'

const AiHero = () => {
  return (
    <div className='bg-aistromybg bg-cover w-screen'>
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
                <a>AIstronomy</a>
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
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a className="w-64 ">AIstronomy</a>
                </li>

                <li>
                  <a>Contact</a>
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
          <img src={xtitle} className='px-8 md:px-8' alt=""/>
          {/* <img src={mreport} className='pt-8 md:pl-[5rem] pb-8' alt="" /> */}
          <div className='w-full md:w-3/5 flex flex-col items-start justify-start pt-12 px-8'>
            <div className=' w-full  flex-col  flex items-start justify-start'>
                <h1 className='font-mono font-bold italic text-[24px] w-[20rem] pb-2 text-white'>MISSION REPORT</h1>
                <div className=' w-full text-justify  flex flex-col items-start justify-start'>
                <p className='font-mono  text-white font-bold text-[20px] pb-2 pt-8'>   AIstronomy is an Technical Event based on Artificial Intelligence and Machine Learning, which evaluates your knowledge in AI, ML and makes your mind to train like a Astro.</p>
                </div>
            </div>
          </div>
          <div className="w-full md:w-3/5 flex flex-col items-start justify-start pt-12 px-10">
              <div className=" w-full  flex-col  flex items-start justify-start">
                <h1 className="font-mono font-bold text-2xl w-[20rem] pb-2 text-white">
                Round 1
                </h1>
                <div className=" w-full text-justify  flex flex-col items-start justify-start">
                  <p className="font-mono text-white text-lg pb-2 pt-4">
                  1.Quiz               2.Apoteletion
                  </p>
                  <p className="font-mono text-white text-lg pb-2">
                  (A apotelesm for the given problem statement or use case)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-col items-start justify-start pt-12 px-10">
              <div className=" w-full  flex-col  flex items-start justify-start">
                <h1 className="font-mono font-bold text-2xl w-[20rem] pb-2 text-white">
                Round 2
                </h1>
                <div className=" w-full text-justify  flex flex-col items-start justify-start">
                  <p className="font-mono text-white text-lg pb-2 pt-4">
                  Create a AI/ML/DL model, that solve the given problem statement.
                  </p>
                  <p className="font-mono text-white text-lg pb-2">
                  (code implementation should be in Google Colab only!)
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        {/* Content for the second cell */}
        <div className="flex flex-col items-center justify-center sm:flex sm:items-center sm:justify-center">
          <img className="w-3/4 h-[40rem] object-cover mb-10" src={image} alt="" />
          <div className='flex flex-col'>
            <div className='border-b-2 w-full border-white flex items-end'>
                <h1 className='font-mono font-bold text-2xl w-[20rem] pb-2 text-white'>Student Coordinators</h1>
            </div>
          <div>
                <p className='font-mono text-white text-lg pb-2 pt-4'>Yakesh Karthikeyan <a href="tel:+918903046081">8903046081</a></p>
                <p  className='font-mono text-white text-lg pb-2'>Kamali <a href="tel:+919025172019">9025172019</a></p>
                <p  className='font-mono text-white text-lg pb-2'>Suraj  <a href="tel:+919342316784">9342316784</a></p>
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
    <Airules/>
    <Footer/>
    </div>
  )
}

export default AiHero