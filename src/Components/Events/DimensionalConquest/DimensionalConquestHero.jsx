import React from 'react'
import xtitle from './dimensionalconquestasset/valtitle.svg'
import mreport from './dimensionalconquestasset/valdesc.svg'
import image1 from "./dimensionalconquestasset/image.svg"
import DimensionalConquestrules from './DimensionalConquestrules'
import Footer from '../../footer';

const DimensionalConquestHero = () => {
  return (
    <div className='bg-dcbg bg-cover'>
      {/* <div className='z-0'>
      <img src={VisionBg} className="object-cover w-full" />
      </div> */}
        <div className="flex flex-wrap z-10 h-full">
      <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 flex  justify-center p-8">
        {/* Content for the first cell */}
        <div className=" flex flex-col items-center justify-center ">
          <img className='md:px-8' src={xtitle} alt=""/>
          <img className='md:px-8' src={mreport} alt="" />
          <div className='w-full md:w-3/5 flex flex-col items-start justify-start pt-12 px-10'>
            <div className=' w-full  flex-col  flex items-start justify-start'>
                <h1 className='font-mono font-bold text-2xl w-[20rem] pb-2 text-white'>Round Infinity</h1>
                <div className=' w-full text-justify  flex flex-col items-start justify-start'>
                <p className='font-mono text-white text-lg pb-2 pt-4'>Elimination Bracket 5 vs 5.</p>
                <p  className='font-mono text-white text-lg pb-2'>Single Elimination where the Team reaching 13 Round Victory Wins.</p>
                <p  className='font-mono text-white text-lg pb-2'>Elimination match-making for round Infinity Is based on team strolling where teams are given a number which they choose to match up with their rival to win against.</p>
                </div>
            </div>
          </div>
          <div className='w-full md:w-3/5 flex flex-col items-start justify-start pt-12 px-10'>
            <div className=' w-full  flex-col  flex items-start justify-start'>
                <h1 className='font-mono font-bold text-2xl w-[20rem] pb-2 text-white'>Semi-Final</h1>
                <div className=' w-full text-justify  flex flex-col items-start justify-start'>
                <p className='font-mono text-white text-lg pb-2 pt-4'>Best Of 3 matches.</p>
                <p  className='font-mono text-white text-lg pb-2'>Where one team with 2 wins Or The lowest number of lost rounds, Wins.</p>
                </div>
            </div>
          </div>
          <div className='w-full md:w-3/5 flex flex-col items-start justify-start pt-12 px-10'>
            <div className=' w-full  flex-col  flex items-start justify-start'>
                <h1 className='font-mono font-bold text-2xl w-[20rem] pb-2 text-white'>Finals</h1>
                <div className=' w-full text-justify  flex flex-col items-start justify-start'>
                <p className='font-mono text-white text-lg pb-2 pt-4'>Best Of 5 matches</p>
                <p  className='font-mono text-white text-lg pb-2'>First team to win 3 matches wins.</p>
                </div>
            </div>
          </div>
          <div className='w-full md:w-3/5 flex flex-col items-start justify-start pt-12 px-10'>
            <div className=' w-full  flex-col  flex items-start justify-start'>
                <h1 className='font-mono font-bold text-2xl w-[20rem] pb-2 text-white'>Note</h1>
                <div className=' w-full text-justify  flex flex-col items-start justify-start'>
                <p className='font-mono text-white text-lg pb-2 pt-4'>Their is 2 division of brackets, The Upper Bracket And Lower Bracket. Where platinum & below will be considered for Lower Bracket And Diamond & above will be considered for Upper Bracket.</p>
                <p  className='font-mono text-white text-lg pb-2'>Team Overall Needs To Be platinum for Upper Bracket, incase of 3 or more platinums on one team will lead to Upper Bracket.</p>
                </div>
            </div>
          </div>
          <div className='w-full md:w-3/5 flex flex-col items-start justify-start pt-12 px-10'>
            <div className=' w-full  flex-col  flex items-start justify-start'>
                <h1 className='font-mono font-bold text-2xl w-[20rem] pb-2 text-white'>Map Pool</h1>
                <div className=' w-full text-justify  flex flex-col items-start justify-start'>
                <p className='font-mono text-white text-lg pb-2 pt-4'>Bind, Split, Haven, Ascent, Icebox, Breeze, Lotus, Pearl, Sunset</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        {/* Content for the second cell */}
        <div className="flex flex-col items-center justify-center sm:flex sm:items-center sm:justify-center">
          <img className="w-3/4 h-[40rem] object-cover mb-10" src={image1} alt="" />
          <div className='flex flex-col'>
            <div className='border-b-2 w-full border-white flex items-end'>
                <h1 className='font-mono font-bold text-2xl w-[20rem] pb-2 text-white'>Student Coordinators</h1>
            </div>
            <div>
                <p className='font-mono text-white text-lg pb-2 pt-4'>Kiran Kumar K  <a href="tel:+919444451705">9444451705</a></p>
                <p  className='font-mono text-white text-lg pb-2'>Raj Ronald Shaw  <a href="tel:+919360834365">9360834365</a></p>
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
    <DimensionalConquestrules/>
    <Footer/>
    </div>
  )
}

export default DimensionalConquestHero