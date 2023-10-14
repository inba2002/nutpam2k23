import React from 'react'

import ioe from "./asassets/ioe.jpg"
import css from "./asassets/css.png"
import dept from "../../Assets/dept.png"
import ieee from "./asassets/ieee.png"
import cs from "./asassets/cs.png"

const Association = () => {
  return (
    <div className="w-full flex flex-wrap justify-center  gap-3 py-5 text-white">
        <div className="w-full flex justify-center">
        <h1 className="font-mono md:text-[3rem] lg:text-[3rem] text-[2rem] text-center">
          in Association with
        </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-8 px-5">
          <div className="flex justify-center">
            <div class=" rounded-xl  w-full md:w-80 lg:w-80 text-white">
              <div className="w-full flex flex-col items-center justify-center">
                <img
                  src={ioe}
                  alt="image1"
                  class="flex items-center justify-center w-48 h-48 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div class=" rounded-xl  w-full md:w-80 lg:w-80 text-white">
              <div className="w-full flex flex-col items-center justify-center">
                <img
                  src={css}
                  alt="image1"
                  class="flex items-center justify-center w-52 h-52 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div class=" rounded-xl  w-full md:w-80 lg:w-80 text-white">
              <div className="w-full flex flex-col items-center justify-center">
                <img
                  src={dept}
                  alt="image1"
                  class="flex items-center justify-center w-52 h-56 object-cover"
                />
              </div>
            </div>
          </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-8 px-5">
          <div className="flex justify-center">
            <div class=" rounded-xl  w-full md:w-80 lg:w-80 text-white">
              <div className="w-full flex flex-col items-center justify-center">
                <img
                  src={ieee}
                  alt="image1"
                  class="flex items-center justify-center w-72 h-48 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div class=" rounded-xl  w-full md:w-80 lg:w-80 text-white">
              <div className="w-full flex flex-col items-center justify-center">
                <img
                  src={cs}
                  alt="image1"
                  class="flex items-center justify-center w-72 h-48 object-contain"
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Association