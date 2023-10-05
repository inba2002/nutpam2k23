import React from 'react'

import xtitle from "../AIstronomy/aiasset/xtitlesvg.svg"
import mreport from "../AIstronomy/aiasset/missionreport.svg"
import image from "./aiasset/image.svg"
import "./ai.css";
import Airules from './Airules'
import Footer from '../../footer'

const AiHero = () => {
  return (
    <div className='bg-aistromybg bg-cover'>
      {/* <div className='z-0'>
      <img src={VisionBg} className="object-cover w-full" />
      </div> */}
        <div className="flex flex-wrap z-10 h-full">
      <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 flex  justify-center p-8">
        {/* Content for the first cell */}
        <div className=" flex flex-col items-center justify-center">
          <img src={xtitle} className='pt-20' alt=""/>
          <img src={mreport} className='pt-8 md:pl-[5rem] pb-8' alt="" />
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