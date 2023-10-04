import React from 'react'
import image from "./visionxasset/image.svg"
import coords from "./visionxasset/coords.svg"
import rule1 from "./visionxasset/xrule1.svg"
import rule2 from "./visionxasset/xrule2.svg"
import rule3 from "./visionxasset/xrule3.svg"
import rule4 from "./visionxasset/xrule4.svg"
import rule4lg from "./visionxasset/xrule4lg.svg"
import rule5 from "./visionxasset/xrule5.svg"
import rule6 from "./visionxasset/xrule6.svg"
import rule7 from "./visionxasset/xrule7.svg"
import reg from "./visionxasset/visionxreg.svg"

const VisionXrules = () => {
  return (
    <div className="flex flex-wrap flex justify-center items-center">
      {/* Top row */}
      <div className="w-full md:w-1/4 p-5">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className='text-xl font-mono font-bold text-white'>
          Rule-1
          </h1>
          <p className='font-mono font-bold text-white'>
          A team can consist of up to 3 members at most
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/4 p-4">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className='text-xl font-mono font-bold text-white'>
          Rule-2
          </h1>
          <p className='font-mono font-bold text-white'>
          A team can consist of up to 3 members at most
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className='text-xl font-mono font-bold text-white'>
          Rule-3
          </h1>
          <p className='font-mono font-bold text-white'>
          Prepare a concise 2-3minutes documentary (video) that captivates the problem statement and solution.
          </p>
      </div>
      </div>

      {/* Middle row */}
      <div className="w-full px-[10rem]">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className='text-xl font-mono font-bold text-white'>
          Rule-4
          </h1>
          <p className='font-mono font-bold text-white'>
          During the 8-minute presentation,
          <ul className='list-disc'>
            <li>The first 3 minutes will be allocated for the video to be played.</li>
            <li>Next 3 minutes to cover the problem statement and proposed solution.</li>
            <li>The final 2 minutes will be reserved for answering questions.</li>
          </ul>
          </p>
      </div>
      </div>

      {/* Bottom row */}
      <div className="w-full md:w-1/4 p-4">
        
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className='text-xl font-mono font-bold text-white'>
          Rule-5
          </h1>
          <p className='font-mono font-bold text-white'>
          Ensure your ppt is polished and aligned with the sample ppt provided.
          </p>
      </div>
        
      </div>
      <div className="w-full md:w-1/4 p-4">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className='text-xl font-mono font-bold text-white'>
          Rule-6
          </h1>
          <p className='font-mono font-bold text-white'>
          Be ready for the surprise events that might challenge your skills and creativity.
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className='text-xl font-mono font-bold text-white'>
          Rule-7
          </h1>
          <p className='font-mono font-bold text-white'>
          Remember to bring your laptop and any other essential gadgets required for the event. Ideas will be shortlisted based on criteria.
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

export default VisionXrules