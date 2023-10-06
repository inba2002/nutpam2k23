import React from 'react'
import eve1 from "../Assets/eve1.png"
import eve2 from "../Assets/eve2.png"
import eve3 from "../Assets/eve3.png"
import eve4 from "../Assets/eve4.png"
import eve5 from "../Assets/eve5.png"
import eve6 from "../Assets/eve6.png"
import eve7 from "../Assets/eve7.png"
import eve8 from "../Assets/eve8.png"
import ml from "../Assets/missionlist.svg"
import { Link } from "react-router-dom";


const tarotDeck = [
  eve1,
  eve2,
  eve3,
  eve4,
 eve5,
 eve6,
 eve7,
 eve8,
]
const head = [
  "VIsion X",
  "AISTRONOMY",
  "Cosmo COde",
  "Pixel Legacy",
 "celestial PAUSE",
 "ASTRO CAPTURE",
 "SPACE ODySSEY",
 "DIMENSIONAL CONQUEST",
]
const desc=[
  "Dive deep into innovation by picking a real-world problem statement and creating a groundbreaking solution. Present your visionary thoughts through a video within the allocated time and get ready for a surprising event that awaits you! ✨🌟🌟 Let your creativity soar and embrace the unexpected at VisionX!",
  "AIstronomy is an Technical Event based on Artificial Intelligence and Machine Learning, which evaluates your knowledge in AI, ML and makes your mind to train like a Astro.",
  "Cosmo Code is a Technical Event promises excitement, competition, and a chance to showcase your coding abilities. Whether you are a coding enthusiast or a seasoned programmer, this event is your opportunity to shine and earn an recognition among your peers.",
  "Are you ready to embark on a cosmic design journey? Join us in this exciting UI design contest centered around the captivating theme of space exploration. Let your imagination soar among the stars as you craft innovative, user-centric solutions.",
  "Celestical Pause is an musical fun based event , where you can enjoy your time with music.Celestical Pause is an musical fun based event , where you can enjoy your time with music",
  "AstroCapture delves into life on land, capturing mesmerizing visuals to reveal the world in night mode.",
  "A non-technical treasure hunting event with the theme of 'Space Odyssey' promises an exciting and adventurous experience. In this event, participants will form teams, and each team will be assigned a part of the story. Their mission is to uncover the rest of the story by decoding given QR clues in order to locate the hidden treasure(clues) . The first two teams who is hunting the treasure will be rewarded with cash price.",
  "Dimensional Conquest is an exciting Valorant Tournament that showcases the skills & teamwork of your squad. It provides an excellent platform for amateur & semi-pro players to compete, gain experience & potentially make a name for themselves in the competitive valorant scene.",
]

const Eventshoriscroll = () => {

    const cards=[
        {navigation:"/visionx",image:eve1,head:"VIsion X",desc:"Dive deep into innovation by picking a real-world problem statement and creating a groundbreaking solution. Present your visionary thoughts through a video within the allocated time and get ready for a surprising event that awaits you! ✨🌟🌟 Let your creativity soar and embrace the unexpected at VisionX!"},
        {navigation:"/aistronomy",image:eve2,head:"AISTRONOMY",desc:"AIstronomy is an Technical Event based on Artificial Intelligence and Machine Learning, which evaluates your knowledge in AI, ML and makes your mind to train like a Astro."},
        {navigation:"/cosmocode",image:eve3,head:"Cosmo Code",desc:"Cosmo Code is a Technical Event promises excitement, competition, and a chance to showcase your coding abilities. Whether you are a coding enthusiast or a seasoned programmer, this event is your opportunity to shine and earn an recognition among your peers."},
        {navigation:"/pixellegacy",image:eve4,head:"Pixel Legacy",desc:"Are you ready to embark on a cosmic design journey? Join us in this exciting UI design contest centered around the captivating theme of space exploration. Let your imagination soar among the stars as you craft innovative, user-centric solutions."},
        {navigation:"/celestialpause",image:eve5,head:"Celestial Pause",desc:"Celestical Pause is an musical fun based event , where you can enjoy your time with music.Celestical Pause is an musical fun based event , where you can enjoy your time with music"},
        {navigation:"/astrocapture",image:eve6,head:"AstroCapture",desc:"AstroCapture delves into life on land, capturing mesmerizing visuals to reveal the world in night mode."},
        {navigation:"/spaceodyssey",image:eve7,head:"Space Odyssey",desc:"A non-technical treasure hunting event with the theme of 'Space Odyssey' promises an exciting and adventurous experience. In this event, participants will form teams, and each team will be assigned a part of the story. Their mission is to uncover the rest of the story by decoding given QR clues in order to locate the hidden treasure(clues) . The first two teams who is hunting the treasure will be rewarded with cash price."},
        {navigation:"/dimensionalconquest",image:eve8,head:"Dimensional Conquest",desc:"Dimensional Conquest is an exciting Valorant Tournament that showcases the skills & teamwork of your squad. It provides an excellent platform for amateur & semi-pro players to compete, gain experience & potentially make a name for themselves in the competitive valorant scene."},
    ]

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };

  return (
    <div className="mx-auto flex flex-col justify-center">
      <div className="w-1/2 mx-5">
            <img src={ml} alt="" />
          </div>
      <div>
        <ul className="flex flex-row gap-4 overflow-y-auto scrollbar-hide p-4">
          {cards.map((item) => (
            <li>
                <div style={{backgroundImage:`url(${item.image})`,backgroundSize: "cover",}} className='w-[90rem] h-[45rem] flex items-center justify-end'>
              <div className="w-[50rem] h-[30rem] mr-10 bg-opacity-30 backdrop-filter backdrop-blur-md bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 scroll-smooth">
                <h2 className="text-[32px] uppercase text-white md:px-12 md:py-5"
                      style={{ fontFamily: "manplay"}}>{item.head}</h2>
                <p className="text-[18px] font-mono uppercase text-white md:px-12 md:py-5 md:leading-10 md:text-sm">
                  {item.desc}
                </p>
                <Link to={item.navigation}>
                <div className="w-full md:p-4 flex items-center justify-end">
                <button className="footer-bg text-white w-[12rem] h-[3rem] text-lg font-mono hover:shadow-xl hover:bg-white/75">
                Register Now
                </button>
                </div>
                </Link>
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Eventshoriscroll