import React from 'react'
import VisionBg from "../VisionX/visionxasset/visionxbg.svg"
import xtitle from "../VisionX/visionxasset/xtitlesvg.svg"
import mreport from "../VisionX/visionxasset/missionreport.svg"
import image from "./visionxasset/image.svg"
import coords from "./visionxasset/coords.svg"
import "./visionx.css";
import VisionXrules from './VisionXrules'

const VisionHero = () => {
  return (
    <div className='bg-visionxbg bg-cover'>
      {/* <div className='z-0'>
      <img src={VisionBg} className="object-cover w-full" />
      </div> */}
        <div className="flex flex-wrap z-10 h-full">
      <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 flex  justify-center p-8">
        {/* Content for the first cell */}
        <div className=" flex flex-col items-center justify-center">
          <img src={xtitle} alt=""/>
          <img src={mreport} alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        {/* Content for the second cell */}
        <div className="flex flex-col items-center justify-center">
          <img className="w-3/4 h-[40rem] object-cover mb-10" src={image} alt="" />
          <img src={coords} className='md:w-3/4 lg:w-3/4 xl:w-3/4 p-4' alt="" />
        </div>
      </div>
      {/* <div className="md:w-1/4 lg:w-full xl:w-full flex items-end justify-end">
       
        <div className="flex items-end justify-center px-28">
          <img src={coords} alt="" />
        </div>
      </div> */}
    </div>
    <VisionXrules/>
    </div>
  )
}

export default VisionHero