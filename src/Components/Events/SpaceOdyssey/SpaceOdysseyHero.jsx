import React from 'react'
import image from "../VisionX/visionxasset/image.svg"
import xtitle from "./spaceodysseyasset/spacetitle.svg"
import mreport from "./spaceodysseyasset/spacedesc.svg"
import coords from "./spaceodysseyasset/spacecoords.svg"
import rules from "./SpaceOdysseyrules"
import SpaceOdysseyrules from './SpaceOdysseyrules'
import Footer from '../../footer';

const SpaceOdysseyHero = () => {
  return (
    <div className='bg-spaceodbg bg-cover'>
      {/* <div className='z-0'>
      <img src={VisionBg} className="object-cover w-full" />
      </div> */}
        <div className="flex flex-wrap z-10 h-full">
      <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 flex  justify-center p-8">
        {/* Content for the first cell */}
        <div className=" flex flex-col items-center justify-center">
          <img src={xtitle} alt=""/>
          <img className='pt-8' src={mreport} alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        {/* Content for the second cell */}
        <div className="flex flex-col items-center justify-center sm:flex sm:items-center sm:justify-center">
          <img className="w-3/4 h-[40rem] object-cover mb-10" src={image} alt="" />
          {/* <img src={coords} className='md:w-3/4 lg:w-3/4 xl:w-3/4 p-4' alt="" /> */}
          <div className='flex flex-col'>
            <div className='border-b-2 w-full border-white flex items-end'>
                <h1 className='font-mono font-bold text-2xl w-[20rem] pb-2 text-white'>Student Coordinators</h1>
            </div>
            <div>
                <p className='font-mono text-white text-lg pb-2 pt-4'>Dhanush B K <a href="tel:+916374151627">6374151627</a></p>
                <p  className='font-mono text-white text-lg pb-2'>Ragul D <a href="tel:+919025578462">9025578462</a></p>
                <p  className='font-mono text-white text-lg pb-2'>Jawahar J <a href="tel:+917904196076">7904196076</a></p>
                <p  className='font-mono text-white text-lg pb-2'>Vasanth R <a href="tel:+918668129601">8668129601</a></p>
                <p className='font-mono text-white text-lg pb-2'>Pranav <a href="tel:+919789847335">9789847335</a></p>
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
    <SpaceOdysseyrules/>
    <Footer/>
    </div>
  )
}

export default SpaceOdysseyHero