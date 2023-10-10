import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './teams.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import tl from "../../Assets/teamlist.svg"


import hod from "../../Assets/Crew/Staff/hod.jpg"
import padhu from "../../Assets/Crew/Staff/padhu.jpg"
import nirmala from "../../Assets/Crew/Staff/nirmaladevi.jpg"

import vasanth from "../../Assets/Crew/Core/vasanth.jpeg"
import sownthar from "../../Assets/Crew/Core/sownthar.jpg"
import ebhish from "../../Assets/Crew/Core/ebhish.jpg"
import abhi from "../../Assets/Crew/Core/abhi.jpg"
import indhu from "../../Assets/Crew/Core/indhu.jpg"

const Teams = () => {
  const crew=[
    {image:hod,name:"Dr.B.Sreedevi",designation:"Head of the Department",role:""},
    {image:padhu,name:"Mr.J.Pathmanaban",designation:"Event Coordinator",role:""},
    {image:sownthar,name:"S.Sownthararaaj",designation:"Chairman",role:""},
    {image:ebhish,name:"G.V.Ebishdon",designation:"Vice Chairman",role:""},
    {image:vasanth,name:"V.Vasanthpriyadharsan",designation:"Secretary",role:""},
    {image:abhi,name:"M.Abhishek",designation:"Vice Secretary",role:""},
    {image:"",name:"S.Sangeetha",designation:"Treasurer",role:""},
    {image:indhu,name:"S.Indhu Priyadharhini",designation:"Vice Treasurer"},
    {image:nirmala,name:"Mrs.G.Nirmala Devi",designation:"Event Coordinator",role:""},
    
    
]
  return (
    <div className="mx-auto flex flex-col justify-center pb-8">
      <div className="w-1/2 mx-5">
        <img src={tl} alt="" />
      </div>
      <section className="bswipe">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {crew.map((item)=>(
          <SwiperSlide>
            <div className='w-[20rem] h-[20rem] flex items-center justify-end rounded-[1rem]'>
              <div className='flex flex-col items-center justify-center text-white'>
                <img className='w-[25rem] h-[20rem]' src={item.image} alt="" />
                <div className='pt-4 flex flex-col items-center justify-center'>
                <h1 className='text-xl font-mono'>{item.name}</h1>
                <p className='text-lg font-mono'>{item.designation}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className='flex items-center justify-center pt-8'>
        <button className="footer-bg text-white rounded-lg w-[15rem] h-[3rem] text-lg font-mono hover:shadow-xl hover:bg-white/75">
          View Crew
        </button>
      </div>
    </div>
  );
}

export default Teams