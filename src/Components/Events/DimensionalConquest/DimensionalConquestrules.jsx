import React from 'react'
import reg from '../VisionX/visionxasset/visionxreg.svg'

const DimensionalConquestrules = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {/* Top row */}
      <div className="w-full md:w-1/5 p-5">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-14 gap-4">
          <h1 className='text-xl font-mono font-bold text-white'>
          Rule-1
          </h1>
          <p className='font-mono font-bold text-white'>
          No Toxixity
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/4 p-4">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className='text-xl font-mono font-bold text-white'>
          Rule-2
          </h1>
          <p className='font-mono font-bold text-white'>
          No Smurfing, if caught direct elimination
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className='text-xl font-mono font-bold text-white'>
          Rule-3
          </h1>
          <p className='font-mono font-bold text-white'>
          Team Lead should mention the rank history of each teammates in the discord
          </p>
      </div>
      </div>
      <div className="w-full p-4">
      <div className="flex items-center justify-center">
        <img className='' src={reg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default DimensionalConquestrules