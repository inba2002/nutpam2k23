import React from 'react'
import reg from "./astrocaptureasset/visionxreg.svg"

const AstroCapturerules = () => {
  return (
    <div className="flex flex-wrap flex justify-center items-center">
      {/* Top row */}
      <div className="w-full md:w-1/4 p-2 md:p-1">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className='text-xl font-mono text-white'>
          Rule-1
          </h1>
          <p className='font-mono text-white'>
          Individual participant only.
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/3 p-2 md:p-4">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className='text-xl font-mono text-white'>
          Rule-2
          </h1>
          <p className='font-mono text-white'>
          The photo should be taken by the participant only.
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/3 p-2">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className='text-xl font-mono text-white'>
          Rule-3
          </h1>
          <p className='font-mono text-white'>
          The contest image must be sent along with a photo taken using GPS camera from same location.
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/4 p-2 md:p-1">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className='text-xl font-mono text-white'>
          Rule-4
          </h1>
          <p className='font-mono text-white'>
          The submitted image should not be a composite image(meaning no two or more images should be combined).
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/3 md:p-4 p-2">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className='text-xl font-mono text-white'>
          Rule-5
          </h1>
          <p className='font-mono text-white'>
          Winners will be chosen based on the like count and the judging criteria.
          </p>
      </div>
      </div>
      <div className="w-full md:w-1/3 p-2">
      <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className='text-xl font-mono text-white'>
          Rule-6
          </h1>
          <p className='font-mono text-white'>
          The image sent should not include any copyright or watermark in it.
          </p>
      </div>
      </div>
      <div className="w-full p-4">
      <div className="w-full p-4 flex items-center justify-center p-5">
      <button className='footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75'>Register Now</button>
      </div>
      </div>
    </div>
  )
}

export default AstroCapturerules
