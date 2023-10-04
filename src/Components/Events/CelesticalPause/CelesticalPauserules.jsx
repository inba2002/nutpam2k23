import React from 'react'
import reg from '../VisionX/visionxasset/visionxreg.svg'

const CelesticalPauserules = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {/* Top row */}
      <div className="w-full md:w-1/3 p-5">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className='text-xl font-mono font-bold text-white'>
          Rule-1
          </h1>
          <p className='font-mono font-bold text-white'>
          Each team must contain 2-3 members. Every team member should be present during event
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className='text-xl font-mono font-bold text-white'>
          Rule-2
          </h1>
          <p className='font-mono font-bold text-white'>
          No electronic Gadgets are allowed to find the answer.          
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

export default CelesticalPauserules