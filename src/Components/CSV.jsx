import React from 'react'
import C from './C'
import S from './S'
import Video from './video'

const CSV = () => {
  return (
    <div className='w-11/12 h-11/12 mx-auto overflow-x-hidden flex'>
        <div className='flex items-start mb-[37rem] mr-[-6rem] z-0'>
            <div>
            <C/>
            </div>
        </div>
        <div className='flex items-center justify-center z-10'>
            <div>
            <Video/>
            </div>
        </div>
        <div className='flex items-end justify-start mb-[5rem] ml-[-10rem] z-20'>
            <div>
            <S/>
            </div>
        </div>
    </div>
  )
}

export default CSV