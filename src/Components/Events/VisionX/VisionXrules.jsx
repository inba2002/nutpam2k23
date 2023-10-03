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
      <div className="w-full md:w-1/4 p-4">
        <div className="flex items-center">
            <img src={rule1} alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/4 p-4">
        <div className="flex items-center justify-center">
        <img src={rule2} alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
      <div className="flex items-center justify-end">
        <img src={rule3} alt="" />
        </div>
      </div>

      {/* Middle row */}
      <div className="w-full p-4">
      <div className="flex items-center justify-center">
        <img className='md:hidden lg:hidden' src={rule4} alt="" />
        <img className='hidden sm:block ' src={rule4lg} alt="" />
        </div>
      </div>

      {/* Bottom row */}
      <div className="w-full md:w-1/4 p-4">
        
        <div className="flex items-center">
        <img src={rule5} alt="" />
        </div>
        
      </div>
      <div className="w-full md:w-1/4 p-4">
      <div className="flex items-center justify-center">
        <img src={rule6} alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="flex items-center justify-end">
        <img src={rule7} alt="" />
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