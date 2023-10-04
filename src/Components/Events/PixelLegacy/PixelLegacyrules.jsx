import React from 'react'
import reg from "./pixellegacyasset/visionxreg.svg"

const PixelLegacyrules = () => {
  return (
    <div className="flex flex-wrap flex justify-center items-center">
      {/* Top row */}
      <div className="w-full md:w-1/4 p-2 md:p-1">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-5 gap-4">
          <h1 className='text-xl font-mono text-white'>
          Rule-1
          </h1>
          <p className='font-mono text-white'>
          Team size – minimum of 1 member and maximum of 2 members
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/3 p-2 md:p-4">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-5 gap-4">
          <h1 className='text-xl font-mono text-white'>
          Rule-2
          </h1>
          <p className='font-mono text-white'>
          Platform : Figma only.
Participants must have a figma account 
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/3 p-2">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-5 gap-4">
          <h1 className='text-xl font-mono text-white'>
          Rule-3
          </h1>
          <p className='font-mono text-white'>
          Participants can bring laptops or Systems will be provided for the Event
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/4 p-2 md:p-1">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className='text-xl font-mono text-white'>
          Rule-4
          </h1>
          <p className='font-mono text-white'>
          The use of pre-existing designs or templates is strictly prohibited.
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/3 md:p-4 p-2">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className='text-xl font-mono text-white'>
          Rule-5
          </h1>
          <p className='font-mono text-white'>
          The theme will only be announced on the day of the event.
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/3 p-2">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className='text-xl font-mono text-white'>
          Rule-6
          </h1>
          <p className='font-mono text-white'>
          You will be judged based on creativity and the uniqueness of the design.
          </p>
      </div>
      </div>
      <div className="w-full md:p-4 p-2">
      <div className="flex items-center justify-center">
        <img className='' src={reg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PixelLegacyrules