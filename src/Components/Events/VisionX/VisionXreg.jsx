import React,{ useState } from 'react'
import title from './visionxasset/visionxregtitle.svg'
import desc from './visionxasset/visionxregsdesc.svg'
import extra from './visionxasset/thirdmate.svg'

const VisionXreg = () => {
    
      return (
        <div className=' w-3/4 flex justify-center mx-auto bg-visionxregbg bg-cover'>
          <div className='w-full flex flex-col items-center justify-center'>
            <img className='p-8' src={title} alt="" />
            <img className='p-4' src={desc} alt="" />
            <div className='w-full'>
                <h2 className='w-full text-white'>Team Name</h2>
                <input type="text" required placeholder='Team Name'/>
              </div>
            <div className='w-full flex flex-row'>
          <div className='w-1/2 flex flex-col items-center justify-center'>
              <div>
                <h2 className='text-white'>Team Lead Name</h2>
                <input type="text" required placeholder='Name'/>
              </div>
              <div>
              <h2 className='text-white'>Team Lead E-mail</h2>
                <input type="text" required placeholder='E-mail'/>
              </div>
              <div>
              <h2 className='text-white'>Team Lead College Name</h2>
                <input type="text" required placeholder='College Name'/>
              </div>
              <div className='w-full flex flex-row items-center justify-center'>
              <div>
                <h2 className='text-white'>Team Lead Dep</h2>
                <input type="text" required placeholder='Name'/>
              </div>
              <div>
              <h2 className='text-white'>Team Lead Year</h2>
                <input type="text" required placeholder='E-mail'/>
              </div>
              </div>
              <div>
              <h2 className='text-white'>Team Lead WhatsApp No</h2>
                <input type="text" required placeholder='WhatsApp No.'/>
              </div>
            </div>
            <div className='w-1/2 flex flex-col items-center justify-center'>
            <div>
                <h2 className='text-white'>Team Lead Name</h2>
                <input type="text" required placeholder='Name'/>
              </div>
              <div>
              <h2 className='text-white'>Team Lead E-mail</h2>
                <input type="text" required placeholder='E-mail'/>
              </div>
              <div>
              <h2 className='text-white'>Team Lead College Name</h2>
                <input type="text" required placeholder='College Name'/>
              </div>
              <div className='w-full flex flex-row items-center justify-center'>
              <div>
                <h2 className='text-white'>Team Lead Dep</h2>
                <input type="text" required placeholder='Name'/>
              </div>
              <div>
              <h2 className='text-white'>Team Lead Year</h2>
                <input type="text" required placeholder='E-mail'/>
              </div>
              </div>
              <div>
              <h2 className='text-white'>Team Lead WhatsApp No</h2>
                <input type="text" required placeholder='WhatsApp No.'/>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-row'>
            <div className='w-3/4 items-center justify-center'>
              <img src={extra} alt="" />
            </div>
            <div className='w-1/4 items-center justify-center'>
            <input
            type="checkbox"
            id="option1"
            name="option1"
          />
            </div>
          </div>
          <div className='w-full flex flex-row'>
              <div className='w-1/2 flex flex-col items-center justify-center'>
              <div>
                <h2 className='text-white'>Team Lead Name</h2>
                <input type="text" required placeholder='Name'/>
              </div>
              <div>
              <h2 className='text-white'>Team Lead E-mail</h2>
                <input type="text" required placeholder='E-mail'/>
              </div>
              <div>
              <h2 className='text-white'>Team Lead College Name</h2>
                <input type="text" required placeholder='College Name'/>
              </div>
              </div>
              <div className='w-1/2 flex flex-col items-center '>
              <div>
              <h2 className='text-white'>Team Lead E-mail</h2>
                <input type="text" required placeholder='E-mail'/>
              </div>
              <div className='w-full flex flex-row items-center justify-center'>
              <div>
                <h2 className='text-white'>Team Lead Dep</h2>
                <input type="text" required placeholder='Name'/>
              </div>
              <div>
              <h2 className='text-white'>Team Lead Year</h2>
                <input type="text" required placeholder='E-mail'/>
              </div>
              </div>
              </div>
          </div>
          <div className='w-3/4 flex flex-row'>
          <div>
              <h2 className='text-white'>PPT Upload</h2>
              <input
            type="file"
            id="pdfFile"
            name="pdfFile"
            accept=".pdf" // Restrict file selection to PDF files
            className="w-full px-3 py-2 border rounded-md"
          />
              </div>
          </div>
          </div>
          
        </div>
      );
    };

export default VisionXreg