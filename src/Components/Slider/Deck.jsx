import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSprings, animated, to } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import './styles.css'
import eve1 from "../../Assets/eve1.png"
import eve2 from "../../Assets/eve2.png"
import eve3 from "../../Assets/eve3.png"
import eve4 from "../../Assets/eve4.png"
import eve5 from "../../Assets/eve5.png"
import eve6 from "../../Assets/eve6.png"
import eve7 from "../../Assets/eve7.png"
import eve8 from "../../Assets/eve8.png"

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
const too = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) => `perspective(1500px) rotateX(15deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`


// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     ;[array[i], array[j]] = [array[j], array[i]]
//   }
//   return array
// }

function Deck() {
  
  const cards = tarotDeck
  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(cards.length, (i) => ({ ...too(i), from: from(i) })) 
  
  const bind = useDrag(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 
    const dir = xDir < 0 ? -1 : 1 
    if (!down && trigger) gone.add(index) 
    set((i) => {
      if (index !== i) return 
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) 
      const scale = down ? 1.1 : 1 
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set((i) => too(i)), 600)
  })

  return props.map(({ x, y, rot, scale }, i) => (
    <div className='maindiv'>
      <div className='subdiv'>
        <div>
          <div>
    <animated.div key={i} style={{ transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
      {
        
      }
      <animated.div {...bind(i)} style={{ transform: to([rot, scale], trans), backgroundImage: `url(${cards[i]})` }}>
      <div className="w-full absolute inset-0 z-10 flex items-center justify-end ">
                  <div className="w-full h-11/12 md:w-3/5 mr-8 bg-gradient-to-br from-white/20 to-white/0 p-8 backdrop-blur-lg rounded-[2rem]">
                    <h1
                      className="text-[32px] uppercase text-white md:px-12 md:py-5"
                      style={{ fontFamily: "manplay" }}
                    >
                      {head[i]}
                    </h1>
                    <p className="text-[18px] font-mono uppercase text-white md:px-12 md:py-5 md:leading-10 md:text-sm">
                    {desc[i]}
                    </p>
                    <div className="w-full md:p-4 flex items-center justify-end">
                      <button className="footer-bg text-white w-[12rem] h-[3rem] text-lg font-mono hover:shadow-xl hover:bg-white/75">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
      </animated.div>
    </animated.div>
    </div>
    </div>
    </div>
    </div>
  ))
}


 export default Deck