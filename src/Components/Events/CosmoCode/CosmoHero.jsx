import React from 'react'
import VisionBg from "../CosmoCode/cosmocodeasset/visionxbg.svg"
import xtitle from "../CosmoCode/cosmocodeasset/xtitlesvg.svg"
import mreport from "../CosmoCode/cosmocodeasset/missionreport.svg"
import round1 from "../CosmoCode/cosmocodeasset/round1.svg"
import round1cnt from "../CosmoCode/cosmocodeasset/round1cnt.svg"
import round2 from "../CosmoCode/cosmocodeasset/round2.svg"
import round2cnt from "../CosmoCode/cosmocodeasset/round2cnt.svg"
import image from "./cosmocodeasset/image.svg"
import "./cosmocode.css";
import CosmoCoderules from './CosmoCoderules'
import Footer from '../../footer';

const CosmoHero = () => {
  return (
    <div className='bg-cosmobg bg-cover'>
      {/* <div className='z-0'>
      <img src={VisionBg} className="object-cover w-full" />
      </div> */}
        <div className="flex flex-wrap z-10 h-full">
      <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 flex  justify-center p-8">
        {/* Content for the first cell */}
        <div className=" flex flex-col items-center justify-center">
          <img src={xtitle} className='pt-20' alt=""/>
          <img src={mreport} className='pt-8' alt="" />
          <img src={round1} className='pt-8 self-start ml-5' alt="" />
          <img src={round1cnt} className='pt-8 pb-12' alt="" />
          <img src={round2} className='pt-8 self-start ml-6' alt="" />
          <img src={round2cnt} className='pt-8 ml-10 pb-8' alt="" />
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
                <p className='font-mono text-white text-lg pb-2 pt-4'>Harish Kumar S <a href="tel:+919176941079">9176941079</a></p>
                <p  className='font-mono text-white text-lg pb-2'>Adhavan M <a href="tel:+917550194049">7550194049</a></p>
                <p  className='font-mono text-white text-lg pb-2'>Saran R <a href="tel:+919499040940">9499040940</a></p>
                <p className='font-mono text-white text-lg pb-2'>Aiswarya V <a href="tel:+919444783843">9444783843</a></p>
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
    <CosmoCoderules/>
    <Footer/>
    </div>
  )
}

export default CosmoHero