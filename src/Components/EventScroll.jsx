import React, { useRef, useState, useEffect }  from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import eve1 from "../Assets/vxbg.svg"
import eve2 from "../Assets/aobg.svg"
import eve3 from "../Assets/ccbgsvg.svg"
import eve4 from "../Assets/plbg.svg"
import eve5 from "../Assets/cpbg.svg"
import eve6 from "../Assets/acbg.svg"
import eve7 from "../Assets/sobg.svg"
import eve8 from "../Assets/dqbg.svg"
import Eventbg from "../Assets/eventbg.svg"
import { RiFontFamily } from 'react-icons/ri';
import ml from '../Assets/missionlist.svg'
import astrobg from '../Assets/astrobg.png'

const EventScroll = () => {


  return (
    <div className="w-full h-full flex flex-col">
      <img src={ml} alt="" className="w-1/4 ml-[5.5rem]"/>
      <HorizontalScrollCarousel />
    </div>
  );
};
const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);
  
    return (
      <>
        <section
          ref={targetRef}
          className="relative h-[110vh] py-8 bg-transparent"
        >
          <div className="sticky top-0 h-screen items-center hidden md:flex overflow-hidden">
            <motion.div style={{ x }} className="flex gap-0">
              <div className="group relative md:h-9/12 md:w-[90rem] overflow-hidden bg-transparent">
                <div className="absolute  transition-transform duration-300  scroll-smooth ">
                  <img src={eve1} alt="" />
                  <div className="w-full absolute inset-0 z-10 flex items-start ">
                  <div className="w-full h-11/12 md:w-3/4 mx-auto bg-gradient-to-br from-white/20 to-white/0 p-8 backdrop-blur-lg rounded-[2rem]">
                    <h1
                      className="text-[32px] uppercase text-white md:px-12 md:py-5"
                      style={{ fontFamily: "manplay" }}
                    >
                      VIsion X
                    </h1>
                    <p className="text-[18px] font-mono uppercase text-white md:px-12 md:py-5 md:leading-10 md:text-sm">
                    Dive deep into innovation by picking a real-world problem statement and creating a groundbreaking solution. Present your visionary thoughts through a video within the allocated time and get ready for a surprising event that awaits you! ✨🌟🌟 Let your creativity soar and embrace the unexpected at VisionX!
                    </p>
                    <div className="w-full md:p-4 flex items-center justify-end">
                      <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
                </div>
                
              </div>
              <div className="group relative md:h-[50rem] md:w-[90rem] overflow-hidden bg-transparent">
                <div className="absolute inset-0 z-0 transition-transform duration-300  scroll-smooth ">
                  <img src={eve2} alt="" />
                  <div className="w-3/4 absolute inset-0 z-10 mx-auto flex items-start">
                  <div className="w-full h-11/12 md:w-3/4 mx-auto bg-gradient-to-br from-white/20 to-white/0 p-8 backdrop-blur-lg rounded-[2rem]">
                    <h1
                      className="text-[32px] uppercase text-white md:px-12 md:py-5"
                      style={{ fontFamily: "manplay" }}
                    >
                      AISTRONOMY
                    </h1>
                    <p className="text-[18px] font-mono uppercase text-white md:px-12 md:py-5 md:leading-10 md:text-sm">
                    AIstronomy is an Technical Event based on Artificial Intelligence and Machine Learning, which evaluates your knowledge in AI, ML and makes your mind to train like a Astro.
                    </p>
                    <div className="w-full md:p-4 flex items-center justify-end">
                      <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="group relative md:h-[50rem] md:w-[90rem] overflow-hidden bg-transparent">
                <div className="absolute inset-0 z-0 transition-transform duration-300  scroll-smooth ">
                  <img src={eve3} alt="" />
                  <div className="w-full absolute inset-0 z-10 flex items-start ">
                  <div className="w-full h-11/12 md:w-3/4 mx-auto bg-gradient-to-br from-white/20 to-white/0 p-8 backdrop-blur-lg rounded-[2rem]">
                    <h1
                      className="text-[32px] uppercase text-white md:px-12 md:py-5"
                      style={{ fontFamily: "manplay" }}
                    >
                      Cosmo COde
                    </h1>
                    <p className="text-[18px] font-mono uppercase text-white md:px-12 md:py-5 md:leading-10 md:text-sm">
                    Cosmo Code is a Technical Event promises excitement, competition, and a chance to showcase your coding abilities. Whether you are a coding enthusiast or a seasoned programmer, this event is your opportunity to shine and earn an recognition among your peers.
                    </p>
                    <div className="w-full md:p-4 flex items-center justify-end">
                      <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="group relative md:h-[50rem] md:w-[90rem] overflow-hidden bg-transparent">
                <div className="absolute inset-0 z-0 transition-transform duration-300  scroll-smooth ">
                  <img src={eve4} alt="" />
                  <div className="w-full absolute inset-0 z-10 flex items-start ">
                  <div className="w-full h-11/12 md:w-3/4 mx-auto bg-gradient-to-br from-white/20 to-white/0 p-8 backdrop-blur-lg rounded-[2rem]">
                    <h1
                      className="text-[32px] uppercase text-white md:px-12 md:py-5"
                      style={{ fontFamily: "manplay" }}
                    >
                      Pixel Legacy
                    </h1>
                    <p className="text-[18px] font-mono uppercase text-white md:px-12 md:py-5 md:leading-10 md:text-sm">
                    Are you ready to embark on a cosmic design journey? Join us in this exciting UI design contest centered around the captivating theme of space exploration. Let your imagination soar among the stars as you craft innovative, user-centric solutions.
                    </p>
                    <div className="w-full md:p-4 flex items-center justify-end">
                      <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="group relative md:h-[50rem] md:w-[90rem] overflow-hidden bg-transparent">
                <div className="absolute inset-0 z-0 transition-transform duration-300  scroll-smooth ">
                  <img src={eve5} alt="" />
                  <div className="w-full absolute inset-0 z-10 flex items-start ">
                  <div className="w-full h-11/12 md:w-3/4 mx-auto bg-gradient-to-br from-white/20 to-white/0 p-8 backdrop-blur-lg rounded-[2rem]">
                    <h1
                      className="text-[32px] uppercase text-white md:px-12 md:py-5"
                      style={{ fontFamily: "manplay" }}
                    >
                      celestial PAUSE
                    </h1>
                    <p className="text-[18px] font-mono uppercase text-white md:px-12 md:py-5 md:leading-10 md:text-sm">
                    Celestical Pause is an musical fun based event , where you can enjoy your time with music.Celestical Pause is an musical fun based event , where you can enjoy your time with music
                    </p>
                    <div className="w-full md:p-4 flex items-center justify-end">
                      <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="group relative md:h-[50rem] md:w-[90rem] overflow-hidden bg-transparent">
                <div className="absolute inset-0 z-0 transition-transform duration-300  scroll-smooth ">
                  <img src={eve6} alt="" />
                  <div className="w-full absolute inset-0 z-10 flex items-start ">
                  <div className="w-full h-11/12 md:w-3/4 mx-auto bg-gradient-to-br from-white/20 to-white/0 p-8 backdrop-blur-lg rounded-[2rem]">
                    <h1
                      className="text-[32px] uppercase text-white md:px-12 md:py-5"
                      style={{ fontFamily: "manplay" }}
                    >
                      ASTRO CAPTURE
                    </h1>
                    <p className="text-[18px] font-mono uppercase text-white md:px-12 md:py-5 md:leading-10 md:text-sm">
                    AstroCapture delves into life on land, capturing mesmerizing visuals to reveal the world in night mode.
                    </p>
                    <div className="w-full md:p-4 flex items-center justify-end">
                      <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="group relative md:h-[50rem] md:w-[90rem] overflow-hidden bg-transparent">
                <div className="absolute inset-0 z-0 transition-transform duration-300  scroll-smooth ">
                  <img src={eve7} alt="" />
                  <div className="w-full absolute inset-0 z-10 flex items-start ">
                  <div className="w-full h-11/12 md:w-3/4 mx-auto bg-gradient-to-br from-white/20 to-white/0 p-8 backdrop-blur-lg rounded-[2rem]">
                    <h1
                      className="text-[32px] uppercase text-white md:px-12 md:py-5"
                      style={{ fontFamily: "manplay" }}
                    >
                      SPACE ODySSEY
                    </h1>
                    <p className="text-[18px] font-mono uppercase text-white md:px-12 md:py-5 md:leading-10 md:text-sm">
                    A non-technical treasure hunting event with the theme of 'Space Odyssey' promises an exciting and adventurous experience. In this event, participants will form teams, and each team will be assigned a part of the story. Their mission is to uncover the rest of the story by decoding given QR clues in order to locate the hidden treasure(clues) . The first two teams who is hunting the treasure will be rewarded with cash price.
                    </p>
                    <div className="w-full md:p-4 flex items-center justify-end">
                      <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="group relative md:h-[50rem] md:w-[90rem] overflow-hidden bg-transparent">
                <div className="absolute inset-0 z-0 transition-transform duration-300  scroll-smooth ">
                  <img src={eve8} alt="" />
                  <div className="w-full absolute inset-0 z-10 flex items-start ">
                  <div className="w-full h-11/12 md:w-3/4 mx-auto bg-gradient-to-br from-white/20 to-white/0 p-8 backdrop-blur-lg rounded-[2rem]">
                    <h1
                      className="text-[32px] uppercase text-white md:px-12 md:py-5"
                      style={{ fontFamily: "manplay" }}
                    >
                      DIMENSIONAL CONQUEST
                    </h1>
                    <p className="text-[18px] font-mono uppercase text-white md:px-12 md:py-5 md:leading-10 md:text-sm">
                    Dimensional Conquest is an exciting Valorant Tournament that showcases the skills & teamwork of your squad. It provides an excellent platform for amateur & semi-pro players to compete, gain experience & potentially make a name for themselves in the competitive valorant scene.
                    </p>
                    <div className="w-full md:p-4 flex items-center justify-end">
                      <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </>
    );
  };
  
  const Card = ({ card }) => {
    return (
      <div
        key={card.id}
        className="group relative md:h-[50rem] md:w-[90rem] overflow-hidden bg-transparent"
      >
        <div
          // style={{
          //   backgroundImage: `url(${card.url})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
          className="absolute inset-0 z-0 transition-transform duration-300  scroll-smooth "
        >
          <img src={card.url} alt="" />
        </div>
        {/* <div className="absolute inset-0 z-10 grid place-content-center ">
          <div className="w-full h-[90vh] md:w-3/4 mx-auto bg-gradient-to-br from-white/20 to-white/0 p-8 backdrop-blur-lg rounded-[2rem]">
            <h1 className='text-[32px] uppercase text-white md:px-12 md:py-5' style={{fontFamily:'manplay'}}>{card.head}</h1>
            <p className='text-[18px] font-mono uppercase text-white md:px-12 md:py-5 md:leading-10 md:text-sm'>{card.title}</p>
            <div className="w-full md:p-4 flex items-center justify-end">
          <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
            Register Now
          </button>
      </div>
      </div>
      </div> */}
      </div>
  );
};

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative h-[50vh] w-[80vw] overflow-hidden bg-transparent"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${Eventbg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 "
//       ></div>
//       <div className="absolute inset-0 z-10 grid place-content-center">
//         <div className="w-3/4 mx-auto bg-gradient-to-br from-white/20 to-white/0 p-8 backdrop-blur-lg">
//           <h1
//             className="text-[32px] uppercase text-white px-12 py-5"
//             style={{ fontFamily: "manplay" }}
//           >
//             {card.head}
//           </h1>
//           <p className="text-[18px] font-mono uppercase text-white px-12 py-5 leading-10">
//             {card.title}
//           </p>
//           <div className="w-full p-4 flex items-center justify-end">
//             <Link to={card.head.replace(" ", "").toLowerCase()}>
//               <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
//                 Register Now
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default EventScroll;

const cards = [
  {
    url: "C:/Users/Inbasekar/OneDrive/Desktop/NUTPAM2K23/Web/Nutpam2k23/nutpam2k23/src/Assets/eve1.svg",
    head: "celestial PAUSE",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 1,
  },
  {
    url: "eve2",
    head: "ASTRO CAPTURE ",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 2,
  },
  {
    url: "../Assets/eve1.svg",
    head: "SPACE ODySSEY",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 3,
  },
  {
    url: "../Assets/eve1.svg",
    head: "AISTRONOMY",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 4,
  },
  {
    url: "../Assets/eve1.svg",
    head: "DIMENSIONAL CONQUEST",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 5,
  },
  {
    url: "../Assets/eve1.svg",
    head: "Cosmo COde",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 6,
  },
  {
    url: "../Assets/eve1.svg",
    head: "VIsion X",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 7,
  },
  {
    url: "../Assets/eve1.svg",
    head: "Pixel Legacy",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 7,
  },
];
