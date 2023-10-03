import React from 'react'
import C from './C'
import S from './S'
import Video from './video'

const CSV = () => {
  return (
    <div className='md:w-full p-5 md:h-11/12 mx-auto overflow-x-hidden flex'>
        <div className='flex items-start md:mb-[37rem] mb-[10rem] mr-[-2rem] md:mr-[-6rem] z-0'>
            <div>
            <C/>
            </div>
        </div>
        <div className='flex items-center justify-center z-10'>
            <div>
            <Video/>
            </div>
        </div>
        <div className='flex items-end justify-start md:mb-[5rem] ml-[-2rem] md:ml-[-10rem] z-20'>
            <div>
            <S/>
            </div>
        </div>
    </div>
  )
}

export default CSV