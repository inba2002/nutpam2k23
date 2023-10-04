import React from 'react'
import VisionBg from "../PixelLegacy/pixellegacyasset/visionxbg.svg"
import xtitle from "../PixelLegacy/pixellegacyasset/xtitlesvg.svg"
import mreport from "../PixelLegacy/pixellegacyasset/missionreport.svg"
import image from "./pixellegacyasset/image.svg"
import "./pixellegacy.css";
import PixelLegacyrules from './PixelLegacyrules'
import Footer from '../../footer';

const PixelHero = () => {
  return (
    <div className='bg-pixelbg bg-cover'>
      {/* <div className='z-0'>
      <img src={VisionBg} className="object-cover w-full" />
      </div> */}
        <div className="flex flex-wrap z-10 h-full">
      <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 flex  justify-center p-8">
        {/* Content for the first cell */}
        <div className=" flex flex-col items-center justify-center">
          <img src={xtitle} alt=""/>
          <img src={mreport} className='pt-8' alt="" />
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
                <p className='font-mono text-white text-lg pb-2 pt-4'>Purushothaman M <a href="tel:+919176517841">9176517841</a></p>
                <p  className='font-mono text-white text-lg pb-2'>Aashrith D <a href="tel:+916369970173">6369970173</a></p>
                <p  className='font-mono text-white text-lg pb-2'>Sivarakshana M <a href="tel:+917550378509">7550378509</a></p>
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
    <PixelLegacyrules/>
    <Footer/>
    </div>
  )
}

export default PixelHero