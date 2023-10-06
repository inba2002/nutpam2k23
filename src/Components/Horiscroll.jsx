import { motion, useTransform, useScroll, m } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import eve1 from "../Assets/vxbg.svg";
import eve2 from "../Assets/aobg.svg";
import eve3 from "../Assets/ccbgsvg.svg";
import eve4 from "../Assets/plbg.svg";
import eve5 from "../Assets/cpbg.svg";
import eve6 from "../Assets/acbg.svg";
import eve7 from "../Assets/sobg.svg";
import eve8 from "../Assets/dqbg.svg";
import ml from "../Assets/missionlist.svg";
const Horiscroll = () => {
  return (
    <div className="bg-transparent">
      {/* <div className="flex flex-col items-center justify-center">
            <div className="w-full flex flex-col">
              {" "}
              <div className="bg-transparent rounded-lg shadow-md p-1 m-1">
                {" "}
                   <img src={eve1} alt="" className="w-full h-auto" />
              </div>
              <div className="bg-transparent rounded-lg shadow-md p-1 m-1 ">
                {" "}
                   <img src={eve2} alt="" className="w-full h-auto" />
              </div>
              <div className="bg-transparent rounded-lg shadow-md p-1 m-1">
                {" "}
                   <img src={eve3} alt="" className="w-full h-auto" />
              </div>
              <div className="bg-transparent rounded-lg shadow-md p-1 m-1">
                {" "}
                   <img src={eve4} alt="" className="w-full h-auto" />
              </div>
              <div className="bg-transparent rounded-lg shadow-md p-1 m-1">
                {" "}
                   <img src={eve5} alt="" className="w-full h-auto" />
              </div>
              <div className="bg-transparent rounded-lg shadow-md p-1 m-1">
                {" "}
                   <img src={eve6} alt="" className="w-full h-auto" />
              </div>
              <div className="bg-transparent rounded-lg shadow-md p-1 m-1">
                {" "}
                   <img src={eve7} alt="" className="w-full h-auto" />
              </div>
              <div className="bg-transparent rounded-lg shadow-md p-1 m-1">
                {" "}
                   <img src={eve8} alt="" className="w-full h-auto" />
              </div>
            </div>
          </div> */}
      <div className="flex flex-col items-center justify-center p-8 gap-8">
        <div className="w-1/2">
          <img src={ml} alt="" />
        </div>
        <div
          className="w-full flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${eve1})`, backgroundSize: "cover" }}
        >
          <div className="text-justify bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg p-4 m-8 flex flex-col items-center justify-center">
            <h1
              className="text-[32px] uppercase text-white pb-8"
              style={{ fontFamily: "manplay" }}
            >
              Vision X
            </h1>
            <p className="text-[18px] font-mono text-white">
              {" "}
              Dive deep into innovation by picking a real-world problem
              statement and creating a groundbreaking solution. Present your
              visionary thoughts through a video within the allocated time and
              get ready for a surprising event that awaits you! ✨🌟🌟 Let your
              creativity soar and embrace the unexpected at VisionX!
            </p>
            <Link to="/visionx">
            <div className="w-full p-4 flex items-center justify-center">
              <button className="footer-bg text-white w-44 h-16 text-lg font-mono hover:shadow-xl hover:bg-white/75">
                Register Now
              </button>
            </div>
            </Link>
          </div>
          {/* Add other card content here */}
        </div>
        <div
          className="w-full flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${eve2})`, backgroundSize: "cover" }}
        >
          <div className="text-justify bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg p-4 m-8 flex flex-col items-center justify-center">
            <h1
              className="text-[32px] uppercase text-white pb-8"
              style={{ fontFamily: "manplay" }}
            >
              AISTRONOMY
            </h1>
            <p className="text-[18px] font-mono text-white">
              {" "}
              AIstronomy is an Technical Event based on Artificial Intelligence
              and Machine Learning, which evaluates your knowledge in AI, ML and
              makes your mind to train like a Astro.
            </p>
            <Link to="/aistronomy">
            <div className="w-full p-4 flex items-center justify-center">
              <button className="footer-bg text-white w-44 h-16 text-lg font-mono hover:shadow-xl hover:bg-white/75">
                Register Now
              </button>
            </div>
            </Link>
            {/* Add other card content here */}
          </div>
        </div>
        <div
          className="w-full flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${eve3})`, backgroundSize: "cover" }}
        >
          <div className=" text-justify bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg p-4 m-8 flex flex-col items-center justify-center">
            <h1
              className="text-[32px] uppercase text-white pb-8"
              style={{ fontFamily: "manplay" }}
            >
              Cosmo COde
            </h1>
            <p className="text-[18px] font-mono text-white">
              {" "}
              Cosmo Code is a Technical Event promises excitement, competition,
              and a chance to showcase your coding abilities. Whether you are a
              coding enthusiast or a seasoned programmer, this event is your
              opportunity to shine and earn an recognition among your peers.
            </p>
            <Link to="/cosmocode">
            <div className="w-full p-4 flex items-center justify-center">
              <button className="footer-bg text-white w-44 h-16 text-lg font-mono hover:shadow-xl hover:bg-white/75">
                Register Now
              </button>
            </div>
            </Link>
            {/* Add other card content here */}
          </div>
        </div>
        <div
          className="w-full flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${eve4})`, backgroundSize: "cover" }}
        >
          <div className=" text-justify bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg p-4 m-8 flex flex-col items-center justify-center">
            <h1
              className="text-[32px] uppercase text-white pb-8"
              style={{ fontFamily: "manplay" }}
            >
              Pixel Legacy
            </h1>
            <p className="text-[18px] font-mono text-white">
              {" "}
              Are you ready to embark on a cosmic design journey? Join us in
              this exciting UI design contest centered around the captivating
              theme of space exploration. Let your imagination soar among the
              stars as you craft innovative, user-centric solutions.
            </p>
            <Link to="/pixellegacy">
              <div className="w-full p-4 flex items-center justify-center">
                <button className="footer-bg text-white w-44 h-16 text-lg font-mono hover:shadow-xl hover:bg-white/75">
                  Register Now
                </button>
              </div>
            </Link>
            {/* Add other card content here */}
          </div>
        </div>
        <div
          className="w-full flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${eve5})`, backgroundSize: "cover" }}
        >
          <div className=" text-justify bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg p-4 m-8 flex flex-col items-center justify-center">
            <h1
              className="text-[32px] uppercase text-white pb-8"
              style={{ fontFamily: "manplay" }}
            >
              celestial PAUSE
            </h1>
            <p className="text-[18px] font-mono text-white">
              {" "}
              Celestical Pause is an musical fun based event , where you can
              enjoy your time with music.Celestical Pause is an musical fun
              based event , where you can enjoy your time with music
            </p>
            <Link to="/celestialpause">
              <div className="w-full p-4 flex items-center justify-center">
                <button className="footer-bg text-white w-44 h-16 text-lg font-mono hover:shadow-xl hover:bg-white/75">
                  Register Now
                </button>
              </div>
            </Link>
            {/* Add other card content here */}
          </div>
        </div>
        <div
          className="w-full flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${eve6})`, backgroundSize: "cover" }}
        >
          <div className=" text-justify bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg p-4 m-8 flex flex-col items-center justify-center">
            <h1
              className="text-[32px] uppercase text-white pb-8"
              style={{ fontFamily: "manplay" }}
            >
              ASTRO CAPTURE
            </h1>
            <p className="text-[18px] font-mono text-white">
              {" "}
              AstroCapture delves into life on land, capturing mesmerizing
              visuals to reveal the world in night mode.
            </p>
            <Link to="/astrocapture">
              <div className="w-full p-4 flex items-center justify-center">
                <button className="footer-bg text-white w-44 h-16 text-lg font-mono hover:shadow-xl hover:bg-white/75">
                  Register Now
                </button>
              </div>
            </Link>
            {/* Add other card content here */}
          </div>
        </div>
        <div
          className="w-full flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${eve7})`, backgroundSize: "cover" }}
        >
          <div className=" text-justify bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg p-4 m-8 flex flex-col items-center justify-center">
            <h1
              className="text-[32px] uppercase text-white pb-8"
              style={{ fontFamily: "manplay" }}
            >
              SPACE ODySSEY
            </h1>
            <p className="text-[18px] font-mono text-white">
              {" "}
              A non-technical treasure hunting event with the theme of 'Space
              Odyssey' promises an exciting and adventurous experience. In this
              event, participants will form teams, and each team will be
              assigned a part of the story. Their mission is to uncover the rest
              of the story by decoding given QR clues in order to locate the
              hidden treasure(clues) . The first two teams who is hunting the
              treasure will be rewarded with cash price.
            </p>
            <Link to="/spaceodyssey">
              <div className="w-full p-4 flex items-center justify-center">
                <button className="footer-bg text-white w-44 h-16 text-lg font-mono hover:shadow-xl hover:bg-white/75">
                  Register Now
                </button>
              </div>
            </Link>
            {/* Add other card content here */}
          </div>
        </div>
        <div
          className="w-full flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${eve8})`, backgroundSize: "cover" }}
        >
          <div className=" text-justify bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg p-4 m-8 flex flex-col items-center justify-center">
            <h1
              className="text-[32px] uppercase text-white pb-8"
              style={{ fontFamily: "manplay" }}
            >
              DIMENSIONAL CONQUEST
            </h1>
            <p className="text-[18px] font-mono text-white">
              {" "}
              Dimensional Conquest is an exciting Valorant Tournament that
              showcases the skills & teamwork of your squad. It provides an
              excellent platform for amateur & semi-pro players to compete, gain
              experience & potentially make a name for themselves in the
              competitive valorant scene.{" "}
            </p>
            <Link to="/dimensionalconquest">
              <div className="w-full p-4 flex items-center justify-center">
                <button className="footer-bg text-white w-44 h-16 text-lg font-mono hover:shadow-xl hover:bg-white/75">
                  Register Now
                </button>
              </div>
            </Link>
            {/* Add other card content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horiscroll;
