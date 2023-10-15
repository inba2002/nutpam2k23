import React from 'react'

import byts from "./asassets/byts.jpg"
import vani from "./asassets/vani.png"
import live from "./asassets/livewire.jpg"
import active from "./asassets/activegalaxy.png"
import digi from "./asassets/digi.png"
import guvi from "./asassets/guvi.png"
import smr from "./asassets/smr.jpg"
import imar from "./asassets/imarticus.png"
import soft from "./asassets/softrate.png"
import fore from "./asassets/foreview.jpg"
import alien from "./asassets/alienlogo.png"
import moon from "./asassets/moon.jpg"

const Sponsors = () => {
  return (
    <div className="w-full flex flex-wrap justify-center  gap-3 py-5 text-white">
        <div className="w-full flex justify-center">
        <h1 className="font-mono md:text-[3rem] lg:text-[3rem] text-[2rem] text-center">
          Our Valued Sponsors
        </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-8 px-5">
          <div className="flex justify-center">
            <div class=" rounded-xl  w-full md:w-80 lg:w-80 text-white">
              <div className="w-full flex flex-col items-center justify-center">
                <img
                  src={byts}
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
                  src={vani}
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
                  src={live}
                  alt="image1"
                  class="flex items-center justify-center w-72 h-48 object-contain"
                />
              </div>
            </div>
          </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-8 px-5">
          <div className="flex justify-center">
            <div class=" rounded-xl  w-full md:w-80 lg:w-80 text-white">
              <div className="w-full flex flex-col  items-center justify-center">
                <img
                  src={guvi}
                  alt="image1"
                  class="flex items-center justify-center bg-white w-72 h-28 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div class=" rounded-xl  w-full md:w-80 lg:w-80 text-white">
              <div className="w-full flex flex-col items-center justify-center">
                <img
                  src={imar}
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
                  src={fore}
                  alt="image1"
                  class="flex items-center justify-center w-72 h-48 object-contain"
                />
              </div>
            </div>
          </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-8 px-5">
          <div className="flex justify-center">
            <div class=" rounded-xl  w-full md:w-80 lg:w-80 text-white">
              <div className="w-full flex flex-col  items-center justify-center">
                <img
                  src={active}
                  alt="image1"
                  class="flex items-center justify-center bg-white w-72 h-28 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div class=" rounded-xl  w-full md:w-80 lg:w-80 text-white">
              <div className="w-full flex flex-col items-center justify-center">
                <img
                  src={digi}
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
                  src={smr}
                  alt="image1"
                  class="flex items-center justify-center w-72 h-48 object-contain"
                />
              </div>
            </div>
          </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-8 px-5">
          <div className="flex justify-center">
            <div class=" rounded-xl  w-full md:w-80 lg:w-80 text-white">
              <div className="w-full flex flex-col items-center justify-center">
                <img
                  src={soft}
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
                  src={moon}
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
                  src={alien}
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

export default Sponsors