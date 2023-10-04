import React from 'react'
import VisionBg from "../AstroCapture/astrocaptureasset/visionxbg.svg"
import xtitle from "../AstroCapture/astrocaptureasset/xtitlesvg.svg"
import criteria from "../AstroCapture/astrocaptureasset/criteria.svg"
import mreport from "../AstroCapture/astrocaptureasset/missionreport.svg"
import image from "./astrocaptureasset/image.svg"
import "./astrocapture.css";
import AstroCapturerules from './AstroCapturerules'
import Footer from '../../../footer';

const AstroHero = () => {
  return (
    <div className='bg-astrobg bg-cover'>
      {/* <div className='z-0'>
      <img src={VisionBg} className="object-cover w-full" />
      </div> */}
        <div className="flex flex-wrap z-10 h-full">
      <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 flex  justify-center p-8">
        {/* Content for the first cell */}
        <div className=" flex flex-col items-center justify-center">
          <img src={xtitle} className='pt-20' alt=""/>
          <img src={mreport} className='pt-10 md:ml-[-5rem]' alt="" />
          <img src={criteria} className='pt-10 pb-[5rem] ml-[2rem]' alt="" />
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
                <p className='font-mono text-white text-lg pb-2 pt-4'>Suresh S <a href="tel:+916383412312">6383412312</a></p>
                <p  className='font-mono text-white text-lg pb-2'>Minu Dhakshina B S <a href="tel:+918438686045">8438686045</a></p>
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
    <AstroCapturerules/>
    <Footer/>
    </div>
  )
}

export default AstroHero