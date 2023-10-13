import React from 'react'

import hod from "../../Assets/Crew/Staff/hod.jpg"
import padhu from "../../Assets/Crew/Staff/padhu.jpg"
import nirmala from "../../Assets/Crew/Staff/nirmaladevi.jpg"
import sownthar from "../../Assets/Crew/Core/sownthar.jpg"
import ebhish from "../../Assets/Crew/Core/ebhish.jpg"
import vasanth from "../../Assets/Crew/Core/vasanth.jpeg"
import abhi from "../../Assets/Crew/Core/abhi.jpg"
import sangee from "../../Assets/Crew/Core/sangeetha.jpg"
import indhu from "../../Assets/Crew/Core/indhu.jpg"

import karthik from "../../Assets/Crew/designdev/Karthik.png"
import inba from "../../Assets/Crew/designdev/inba.jpg"
import ani from "../../Assets/Crew/designdev/anijpg.jpg"
import dhaas from "../../Assets/Crew/designdev/dhaas.jpg"
import barath from "../../Assets/Crew/designdev/barat.jpg"
import ij from "../../Assets/Crew/designdev/ij.png"
import janahar from "../../Assets/Crew/designdev/janahar.jpg"
import sa from "../../Assets/Crew/designdev/sakthiarunachalam.jpg"
import shylash from "../../Assets/Crew/designdev/shylash.jpg"

import bathri from "../../Assets/Crew/content/bathri..jpg"
import sriram from "../../Assets/Crew/content/srira.jpg"
import vincy from "../../Assets/Crew/content/vincy.jpg"

import rooban from "../../Assets/Crew/office/rooban.jpg"
import navin from "../../Assets/Crew/office/navi.jpg"
import shiva from "../../Assets/Crew/office/shiv.jpg"
import rathika from "../../Assets/Crew/office/rathika.jpg"
import nitheesh from "../../Assets/Crew/office/nithees.jpg"
import amirtha from "../../Assets/Crew/office/amirthavarsh.png"

import vishali from "../../Assets/Crew/socialmedia/vishali.jpeg"
import durga from "../../Assets/Crew/socialmedia/jayadurga.jpg"
import aswanth from "../../Assets/Crew/socialmedia/aswanth.jpg"
import yuvanesh from "../../Assets/Crew/socialmedia/yuvanesh.jpg"
import raj from "../../Assets/Crew/office/raj.jpg"

import rajalakshmi from "../../Assets/Crew/visionx/rajalakshmi.jpg"
import suganya from "../../Assets/Crew/visionx/suganya.jpg"
import badhri from "../../Assets/Crew/visionx/badhri.png"
import aanandhini from "../../Assets/Crew/visionx/aanandhini.jpg"
import jaisurya from "../../Assets/Crew/visionx/jaisurya.jpg"
import muthupriya from "../../Assets/Crew/visionx/muthupriya.png"
import harishrajan from "../../Assets/Crew/visionx/harishrajan.jpeg"

import parthi from "../../Assets/Crew/aistronomy/parthiban.jpg"
import thiru from "../../Assets/Crew/aistronomy/thirunavukkarsu.jpg"
import yakesh from "../../Assets/Crew/aistronomy/yakesh.jpg"
import suraj from "../../Assets/Crew/aistronomy/suraj.jpg"
import kamali from "../../Assets/Crew/aistronomy/kamali.png"
import kaniha from "../../Assets/Crew/aistronomy/kaniha.jpg"
import kavinshree from "../../Assets/Crew/aistronomy/kavinshree.jpg"

import thangam from "../../Assets/Crew/cosmocode/thangapalani.jpg"
import subhashini from "../../Assets/Crew/cosmocode/subashini.jpg"
import harish from "../../Assets/Crew/cosmocode/harishkumar.png"
import aish from "../../Assets/Crew/cosmocode/aiswarya.jpg"
import adhav from "../../Assets/Crew/cosmocode/adhav.jpg"
import harini from "../../Assets/Crew/cosmocode/harini.jpeg"
import sid from "../../Assets/Crew/cosmocode/sidharth.jpg"

import viji from "../../Assets/Crew/pixellegacy/viji.jpg"
import ashok from "../../Assets/Crew/pixellegacy/ashok.jpg"
import pursho from "../../Assets/Crew/pixellegacy/purusho.png"
import sivrak from "../../Assets/Crew/pixellegacy/sivarakshana.jpg"
import aashrith from "../../Assets/Crew/pixellegacy/aashrith.jpg"
import rama from "../../Assets/Crew/pixellegacy/jayarama.jpeg"
import varsh from "../../Assets/Crew/pixellegacy/varshini.jpg"



import viveka from "../../Assets/Crew/celestial/vivekanandhan.jpg"
import midhuna from "../../Assets/Crew/celestial/midhuna.jpg"
import barathkumar from "../../Assets/Crew/celestial/barath.jpg"
import deeya from "../../Assets/Crew/celestial/deeya.jpeg"
import madhu from "../../Assets/Crew/celestial/madhu.jpg"
import pavi from "../../Assets/Crew/celestial/pavithra.jpg"
import viki from "../../Assets/Crew/celestial/vignesh.jpg"

const Teamstree = () => {
  const coreteam=[
    {image:hod,name:"Dr.B.Sreedevi",role:"HOD CSE"},
    {image:padhu,name:"Mr.J.Pathmanaban",role:"Staff Coordinator"},
    {image:nirmala,name:"Mrs.G.Nirmala Devi",role:"Staff Coordinator"},
    {image:sownthar,name:"Sownthararaaj S",role:"Chairman"},
    {image:ebhish,name:"Ebishdon G V",role:"Vice Chairman"},
    {image:vasanth,name:"Vasanth Priyadharsan V",role:"Secretary"},
    {image:abhi,name:"Abhishek M",role:"Vice Secretary"},
    {image:sangee,name:"Sangeetha S",role:"Treasurer"},
    {image:indhu,name:"Indhu Priyadharhini S",role:"Vice Treasurer"},
  ]
  const devteam=[
    {image:inba,name:"Inbasekar S",role:"Web Developer"},
    {image:karthik,name:"Karthik Maharaja A V",role:"Web Developer"},
    {image:ani,name:"Anirudh P Menon",role:"Web Developer"},
    {image:dhaas,name:"Dhaasarathy M",role:"Web Developer"},
    {image:ebhish,name:"Dhanush G",role:"Web Developer"},
    {image:barath,name:"Bharathraj N",role:"Web Developer"},
  ]
  const designteam=[
    {image:ij,name:"Harish I J",role:"Graphic Designer & Video Editor"},
    {image:shylash,name:"Shylashroshinraj M Y",role:"Graphic Designer & Video Editor"},
    {image:janahar,name:"Janahar S",role:"Graphic Designer"},
    {image:sa,name:"Sakthi Arunachalam S",role:"Graphic Designer"},
  ]
  const contentteam=[
    {image:bathri,name:"Bathri Narayan V",role:"Content Developer"},
    {image:sriram,name:"Sriram R",role:"Content Developer"},
    {image:vincy,name:"Vincy Albin Theresa M",role:"Content Developer"},
  ]
  const officeteam=[
    {image:rooban,name:"Rooban Chakravarthi B",role:"Office Bearer"},
    {image:padhu,name:"Barath T",role:"Office Bearer"},
    {image:hod,name:"Raj Ronald Shaw",role:"Office Bearer"},
    {image:padhu,name:"Ragavi K",role:"Office Bearer"},
    {image:navin,name:"Navin D",role:"Office Bearer"},
    {image:shiva,name:"Shiva Prasath R",role:"Office Bearer"},
    {image:rathika,name:"Ratikashre S S",role:"Office Bearer"},
    {image:nitheesh,name:"Nitheesh Srinivaasan R",role:"Office Bearer"},
    {image:hod,name:"Srikanth D",role:"Office Bearer"},
    {image:amirtha,name:"Amirthavarshini R",role:"Office Bearer"},
  ]
  const digitalteam=[
    {image:vishali,name:"Vishali R",role:"Digital Influencer"},
    {image:durga,name:"Jayadurga M S",role:"Digital Influencer"},
    {image:aswanth,name:"Aswanth T",role:"Digital Influencer"},
    {image:yuvanesh,name:"Yuvanesh",role:"Digital Influencer"},
  ]
  const visionx=[
    {image:rajalakshmi,name:"Dr.D.Rajalakshmi",role:"Staff Coordinator"},
    {image:suganya,name:"Ms.R.Suganya",role:"Staff Coordinator"},
    {image:badhri,name:"Badhrinath R",role:"Event Coordinator"},
    {image:aanandhini,name:"Aanandhini S",role:"Event Coordinator"},
    {image:jaisurya,name:"Jaisurya S",role:"Event Coordinator"},
    {image:muthupriya,name:"Muthu Priya",role:"Event Coordinator"},
    {image:harishrajan,name:"Harisharajan R R",role:"Event Coordinator"},
  ]
  const aistronomy=[
    {image:parthi,name:"Mr.M.Parthiban",role:"Staff Coordinator"},
    {image:thiru,name:"Mr.J.Thirunavukkarasu",role:"Staff Coordinator"},
    {image:yakesh,name:"Yakesh Karthikeyan B",role:"Event Coordinator"},
    {image:suraj,name:"Suraj R",role:"Event Coordinator"},
    {image:kamali,name:"Kamali P",role:"Event Coordinator"},
    {image:kaniha,name:"Kaniha P",role:"Event Coordinator"},
    {image:kavinshree,name:"Kavinshree V",role:"Event Coordinator"},
  ]
  const cosmocode=[
    {image:thangam,name:"Ms.L.Thangapalani",role:"Staff Coordinator"},
    {image:subhashini,name:"Ms.M.Subashini",role:"Staff Coordinator"},
    {image:harish,name:"Harish Kumar S",role:"Event Coordinator"},
    {image:adhav,name:"Aadhavan M",role:"Event Coordinator"},
    {image:aish,name:"Aiswarya V",role:"Event Coordinator"},
    {image:harini,name:"Harini V",role:"Event Coordinator"},
    {image:sid,name:"Siddharth S Swamy",role:"Event Coordinator"},
  ]
  const pixellegacy=[
    {image:viji,name:"Ms.K.Vijayalakshmi",role:"Staff Coordinator"},
    {image:ashok,name:"Mr.P.Ashok",role:"Staff Coordinator"},
    {image:pursho,name:"Purushothaman M",role:"Event Coordinator"},
    {image:sivrak,name:"Sivarakshana M",role:"Event Coordinator"},
    {image:aashrith,name:"Aashrith D",role:"Event Coordinator"},
    {image:rama,name:"Jayaramakrishna D",role:"Event Coordinator"},
    {image:varsh,name:"Varshini S",role:"Event Coordinator"},
  ]
  const celestial=[
    
      {image:midhuna,name:"Ms.G Midhunadharshini",role:"Staff Coordinator"},
      {image:viveka,name:"Mr.Vivekanandan G",role:"Staff Coordinator"},
      {image:barathkumar,name:"Barath Kumar",role:"Event Coordinator"},
      {image:deeya,name:"Deeyanesh",role:"Event Coordinator"},
      {image:madhu,name:"Madhumitha",role:"Event Coordinator"},
      {image:pavi,name:"Pavithra S",role:"Event Coordinator"},
      {image:viki,name:"Vignesh T",role:"Event Coordinator"},
    
  ]
  const dimen = [
    {image:madhu,name:"Madhumitha",role:"Event Coordinator"},
  ]

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center items-center gap-3 py-5 text-white">
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-mono md:text-[5rem] lg:text-[5rem] text-[3rem] text-center'>NUTPAM ASTRONAUTS</h1>
      </div>
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-mono md:text-[3rem] lg:text-[3rem] text-[2rem] text-center'>Core Astronauts</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-8 px-5">
        
          {coreteam.map((item)=>(
            <div className='flex items-center justify-center'>
              <div class="bg-white/[0.1] rounded-xl backdrop-blur-3xl w-full md:w-80 lg:w-80 bg-white bg-opacity-10 p-3 text-white border border-gray-300 shadow-lg">
              <div className='w-full flex flex-col items-center justify-center'>
                <img
                  src={item.image}
                  alt="image1"
                  class="flex items-center justify-center w-48 h-48 object-cover mb-2 rounded-full"
                />
                <p class="mt-3 tracking-wide font-mono text-sm md:text-lg lg:text-lg text-shadow">
                  {item.name}
                </p>
                <p class="mb-3 tracking-wide font-mono text-sm md:text-base lg:text-base text-shadow">
                  {item.role}
                </p>
              </div>
            </div>
            </div>
          ))}
        
      </div>
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-mono md:text-[3rem] lg:text-[3rem] text-[2rem] text-center'>Development Astronauts</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-8 px-5">
        
          {devteam.map((item)=>(
            <div className='flex items-center justify-center'>
              <div class="bg-white/[0.1] rounded-xl backdrop-blur-3xl w-full md:w-80 lg:w-80 bg-white bg-opacity-10 p-3 text-white border border-gray-300 shadow-lg">
              <div className='w-full flex flex-col items-center justify-center'>
                <img
                  src={item.image}
                  alt="image1"
                  class="flex items-center justify-center w-48 h-48 object-cover mb-2 rounded-full"
                />
                <p class="mt-3 tracking-wide font-mono text-sm md:text-lg lg:text-lg text-shadow">
                  {item.name}
                </p>
                <p class="mb-3 tracking-wide font-mono text-sm md:text-base lg:text-base text-shadow">
                  {item.role}
                </p>
              </div>
            </div>
            </div>
          ))}
        
      </div>
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-mono md:text-[3rem] lg:text-[3rem] text-[2rem] text-center'>Design Astronauts</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-8 px-5">
        
          {designteam.map((item)=>(
            <div className='flex items-center justify-center'>
              <div class="bg-white/[0.1] rounded-xl backdrop-blur-3xl w-full md:w-80 lg:w-80 bg-white bg-opacity-10 p-3 text-white border border-gray-300 shadow-lg">
              <div className='w-full flex flex-col items-center justify-center'>
                <img
                  src={item.image}
                  alt="image1"
                  class="flex items-center justify-center w-48 h-48 object-cover mb-2 rounded-full"
                />
                <p class="mt-3 tracking-wide font-mono text-sm md:text-lg lg:text-lg text-shadow">
                  {item.name}
                </p>
                <p class="mb-3 tracking-wide text-center font-mono text-sm md:text-base lg:text-base text-shadow ">
                  {item.role}
                </p>
              </div>
            </div>
            </div>
          ))}
        
      </div>
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-mono md:text-[3rem] lg:text-[3rem] text-[2rem] text-center'>Content Astronauts</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-8 px-5">
        
          {contentteam.map((item)=>(
            <div className='flex items-center justify-center'>
              <div class="bg-white/[0.1] rounded-xl backdrop-blur-3xl w-full lg:w-80 md:w-80 bg-white bg-opacity-10 p-3 text-white border border-gray-300 shadow-lg">
              <div className='w-full flex flex-col items-center justify-center'>
                <img
                  src={item.image}
                  alt="image1"
                  class="flex items-center justify-center w-48 h-48 object-cover mb-2 rounded-full"
                />
                <p class="mt-3 tracking-wide font-mono text-sm md:text-lg lg:text-lg text-shadow">
                  {item.name}
                </p>
                <p class="mb-3 tracking-wide font-mono text-sm md:text-base lg:text-base text-shadow">
                  {item.role}
                </p>
              </div>
            </div>
            </div>
          ))}
        
      </div>
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-mono md:text-[3rem] lg:text-[3rem] text-[2rem] text-center'>Office Astronauts</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-10 px-5">
        
          {officeteam.map((item)=>(
            <div className='flex items-center justify-center'>
              <div class="bg-white/[0.1] rounded-xl backdrop-blur-3xl w-full md:w-80 lg:w-80 bg-white bg-opacity-10 p-3 text-white border border-gray-300 shadow-lg">
              <div className='w-full flex flex-col items-center justify-center'>
                <img
                  src={item.image}
                  alt="image1"
                  class="flex items-center justify-center w-48 h-48 object-cover mb-2 rounded-full"
                />
                <p class="mt-3 tracking-wide font-mono text-sm md:text-lg lg:text-lg text-shadow">
                  {item.name}
                </p>
                <p class="mb-3 tracking-wide font-mono text-sm md:text-base lg:text-base text-shadow">
                  {item.role}
                </p>
              </div>
            </div>
            </div>
          ))}
        
      </div>

      <div className='w-full flex items-center justify-center'>
        <h1 className='font-mono md:text-[3rem] lg:text-[3rem] text-[2rem] text-center'>Digital Astronauts</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-10 px-5">
        
          {digitalteam.map((item)=>(
            <div className='flex items-center justify-center'>
              <div class="bg-white/[0.1] rounded-xl backdrop-blur-3xl w-full md:w-80 lg:w-80 bg-white bg-opacity-10 p-3 text-white border border-gray-300 shadow-lg">
              <div className='w-full flex flex-col items-center justify-center'>
                <img
                  src={item.image}
                  alt="image1"
                  class="flex items-center justify-center w-48 h-48 object-cover mb-2 rounded-full"
                />
                <p class="mt-3 tracking-wide font-mono text-sm md:text-lg lg:text-lg text-shadow">
                  {item.name}
                </p>
                <p class="mb-3 tracking-wide font-mono text-sm md:text-base lg:text-base text-shadow">
                  {item.role}
                </p>
              </div>
            </div>
            </div>
          ))}
        
      </div>

      <div className='w-full flex items-center justify-center'>
        <h1 className='font-mono md:text-[4rem] lg:text-[4rem] text-[3rem] text-center'>Galactic Adventures</h1>
      </div>
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-mono md:text-[3rem] lg:text-[3rem] text-[2rem] text-center'>VisionX Astronauts</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-10 px-5">
        
          {visionx.map((item)=>(
            <div className='flex items-center justify-center'>
              <div class="bg-white/[0.1] rounded-xl backdrop-blur-3xl w-full md:w-80 lg:w-80 bg-white bg-opacity-10 p-3 text-white border border-gray-300 shadow-lg">
              <div className='w-full flex flex-col items-center justify-center'>
                <img
                  src={item.image}
                  alt="image1"
                  class="flex items-center justify-center w-48 h-48 object-cover mb-2 rounded-full"
                />
                <p class="mt-3 tracking-wide font-mono text-sm md:text-lg lg:text-lg text-shadow">
                  {item.name}
                </p>
                <p class="mb-3 tracking-wide font-mono text-sm md:text-base lg:text-base text-shadow">
                  {item.role}
                </p>
              </div>
            </div>
            </div>
          ))}
        
      </div>
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-mono md:text-[3rem] lg:text-[3rem] text-[2rem] text-center'>AIstronomy Astronauts</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-10 px-5">
        
          {aistronomy.map((item)=>(
            <div className='flex items-center justify-center'>
              <div class="bg-white/[0.1] rounded-xl backdrop-blur-3xl w-full md:w-80 lg:w-80 bg-white bg-opacity-10 p-3 text-white border border-gray-300 shadow-lg">
              <div className='w-full flex flex-col items-center justify-center'>
                <img
                  src={item.image}
                  alt="image1"
                  class="flex items-center justify-center w-48 h-48 object-cover mb-2 rounded-full"
                />
                <p class="mt-3 tracking-wide font-mono text-sm md:text-lg lg:text-lg text-shadow">
                  {item.name}
                </p>
                <p class="mb-3 tracking-wide font-mono text-sm md:text-base lg:text-base text-shadow">
                  {item.role}
                </p>
              </div>
            </div>
            </div>
          ))}
        
      </div>
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-mono md:text-[3rem] lg:text-[3rem] text-[2rem] text-center'>CosmoCode Astronauts</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-3 md:gap-8 place-items-center py-8 lg:px-10 px-5">
        
          {cosmocode.map((item)=>(
            <div className='flex items-center justify-center'>
              <div class="bg-white/[0.1] rounded-xl backdrop-blur-3xl w-full md:w-80 lg:w-80 bg-white bg-opacity-10 p-3 text-white border border-gray-300 shadow-lg">
              <div className='w-full flex flex-col items-center justify-center'>
                <img
                  src={item.image}
                  alt="image1"
                  class="flex items-center justify-center w-48 h-48 object-cover mb-2 rounded-full"
                />
                <p class="mt-3 tracking-wide font-mono text-sm md:text-lg lg:text-lg text-shadow">
                  {item.name}
                </p>
                <p class="mb-3 tracking-wide font-mono text-sm md:text-base lg:text-base text-shadow">
                  {item.role}
                </p>
              </div>
            </div>
            </div>
          ))}
        
      </div>
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-mono md:text-[3rem] lg:text-[3rem] text-[2rem] text-center'>Pixel Legacy Astronauts</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-10 px-5">
        
          {pixellegacy.map((item)=>(
            <div className='flex items-center justify-center'>
              <div class="bg-white/[0.1] rounded-xl backdrop-blur-3xl w-full md:w-80 lg:w-80 bg-white bg-opacity-10 p-3 text-white border border-gray-300 shadow-lg">
              <div className='w-full flex flex-col items-center justify-center'>
                <img
                  src={item.image}
                  alt="image1"
                  class="flex items-center justify-center w-48 h-48 object-cover mb-2 rounded-full"
                />
                <p class="mt-3 tracking-wide font-mono text-sm md:text-lg lg:text-lg text-shadow">
                  {item.name}
                </p>
                <p class="mb-3 tracking-wide font-mono text-sm md:text-base lg:text-base text-shadow">
                  {item.role}
                </p>
              </div>
            </div>
            </div>
          ))}
        
      </div>
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-mono md:text-[3rem] lg:text-[3rem] text-[2rem] text-center'>Celestial Pasuse Astronauts</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-8 px-5">
        
          {celestial.map((item)=>(
            <div className='flex items-center justify-center'>
              <div class="bg-white/[0.1] rounded-xl backdrop-blur-3xl w-full md:w-80 lg:w-80 bg-white bg-opacity-10 p-3 text-white border border-gray-300 shadow-lg">
              <div className='w-full flex flex-col items-center justify-center'>
                <img
                  src={item.image}
                  alt="image1"
                  class="flex items-center justify-center w-48 h-48 object-cover mb-2 rounded-full"
                />
                <p class="mt-3 tracking-wide font-mono text-sm md:text-lg lg:text-lg text-shadow">
                  {item.name}
                </p>
                <p class="mb-3 tracking-wide font-mono text-sm md:text-base lg:text-base text-shadow">
                  {item.role}
                </p>
              </div>
            </div>
            </div>
          ))}
        
      </div>
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-mono md:text-[3rem] lg:text-[3rem] text-[2rem] text-center'>Dimensional Conquest Astronauts</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-8 place-items-center py-8 lg:px-8 px-5">
        
          {celestial.map((item)=>(
            <div className='flex items-center justify-center'>
              <div class="bg-white/[0.1] rounded-xl backdrop-blur-3xl w-full md:w-80 lg:w-80 bg-white bg-opacity-10 p-3 text-white border border-gray-300 shadow-lg">
              <div className='w-full flex flex-col items-center justify-center'>
                <img
                  src={item.image}
                  alt="image1"
                  class="flex items-center justify-center w-48 h-48 object-cover mb-2 rounded-full"
                />
                <p class="mt-3 tracking-wide font-mono text-sm md:text-lg lg:text-lg text-shadow">
                  {item.name}
                </p>
                <p class="mb-3 tracking-wide font-mono text-sm md:text-base lg:text-base text-shadow">
                  {item.role}
                </p>
              </div>
            </div>
            </div>
          ))}
        
      </div>
    </div>
  );
}

export default Teamstree