import React, { Suspense } from "react";
import Title from "../Assets/header.svg";
import College from "../Assets/college.svg";
import CountdownTimer from "./CountdownTimer/CountdownTimer";
import Department from "../department";
import AnimatedCursor from "react-animated-cursor";
import "../App.css";
import MainLogoCanvas from "./ModelRender/LogoModel";
import StarsCanvas from "./Stars";
import Footer from "./footer";
import EventScroll from "./EventScroll";
import Discover from "../../src/discover";
import Horiscroll from "./Horiscroll";

import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import Navbar from "./Navbar";
import { Stars } from "@react-three/drei";
import Deck from "./Slider/Deck";
import Eventshoriscroll from "./Eventshoriscroll";

const Loading = () => {
  return (
    <>
      <div className="h-screen overflow-x-hidden w-screen pr-20">
        <div className="w-screen">
          <div className="navbar navbar-end bg-transparent w-full h-32">
            <div className="w-full flex items-center justify-end">
              <div className="flex w-1/2 items-center justify-center">
                <ul className="md:flex hidden border-b-2 border-white/25 items-center justify-between px-10 text-white font-mono gap-10 text-xl p-2  w-full">
                  <li className="hover:text-white/50 w-24 h-10 hover:bg-white/25 flex items-center justify-center ">
                    <a>Home</a>
                  </li>
                  <li className="hover:text-white/50 w-24 h-10 hover:bg-white/25 flex items-center justify-center">
                    <a href="#Departments">About</a>
                  </li>
                  <li className="hover:text-white/50 w-24 h-10 hover:bg-white/25 flex items-center justify-center">
                    <a href="#Missions">Mission</a>
                  </li>

                  <li className="hover:text-white/50 w-24 h-10 hover:bg-white/25 flex items-center justify-center">
                    <a>Team</a>
                  </li>
                  <li className="hover:text-white/50 w-24 h-10 hover:bg-white/25 flex items-center justify-center">
                    <a href="#Foot">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown md:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
                <div className="flex items-center  justify-center">
                  <ul
                    tabIndex={0}
                    className="menu text-white flex items-center justify-center backdrop-blur-md menu-lg dropdown-content mt-64 z-[1] mr-32 p-2 border border-white/10 shadow-xl pr-96 rounded-box w-28"
                  >
                    <li>
                      <a href="#Departments">Home</a>
                    </li>
                    <li>
                      <a>About</a>
                    </li>
                    <li>
                      <a href="#Missions">Mission</a>
                    </li>

                    <li>
                      <a>Team</a>
                    </li>
                    <li>
                      <a href="#foot">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex w-screen h-3/4 md:h-4/5 pt-10 items-center justify-center">
          <div className="md:mr-[-40rem] md:w-[50rem] w-[10rem] h-[5rem] md:h-[5rem] mt-[-10rem] md:mt-[-50rem] md:flex items-start justify-start pb-10">
            <svg
              width="599"
              height="846"
              viewBox="0 0 599 846"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2" filter="url(#filter0_f_290_57)">
                <g filter="url(#filter1_dd_290_57)">
                  <path
                    d="M54.5625 238.833L72.9455 271.261L118.29 10L54.5625 184.99V238.833Z"
                    fill="black"
                  />
                </g>
                <path
                  d="M74.1719 376.455L133.61 468.889L196.725 376.455L133.917 46.7114L74.1719 376.455Z"
                  fill="black"
                />
                <g filter="url(#filter2_d_290_57)">
                  <path
                    d="M-0.587891 377.723L133.608 575.351L270.868 377.723L239.004 331.834L221.847 277.991L198.562 297.57L212.043 377.723L133.608 498.257L58.2378 377.723L68.0421 297.57L48.4335 277.991L31.8888 331.834L-0.587891 377.723Z"
                    fill="black"
                  />
                </g>
                <g filter="url(#filter3_d_290_57)">
                  <path
                    d="M-151.148 724.146L-23.2589 544.758L5.54122 590.035L-151.148 724.146Z"
                    fill="black"
                  />
                </g>
                <g filter="url(#filter4_d_290_57)">
                  <path
                    d="M197.338 533.745L155.057 594.93V700.169L588.284 836L459.602 638.372L410.581 619.405L346.24 583.917L473.083 788.276L243.908 591.871L305.185 486.021L267.193 427.283L237.168 475.008L254.938 525.179L197.338 656.116V533.745Z"
                    fill="black"
                  />
                </g>
                <g filter="url(#filter5_d_290_57)">
                  <path
                    d="M-196.672 642.654L-318 835.999L112.163 700.168V593.706L72.946 538.64L61.9161 642.654L16.5713 522.731L36.1799 479.902L-0.586212 426.059L-38.5778 488.468L27.6011 593.706L-205.251 783.38L-82.6971 587.588L-139.072 620.628L-196.672 642.654Z"
                    fill="black"
                  />
                </g>
                <path
                  d="M215.107 244.951L196.724 277.379L151.38 16.1188L215.107 191.108V244.951Z"
                  fill="black"
                />
                <g filter="url(#filter6_d_290_57)">
                  <path
                    d="M413.101 718.801L286.189 549.041L263.517 589.423L413.101 718.801Z"
                    fill="black"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_290_57"
                  x="-328"
                  y="0"
                  width="926.283"
                  height="846"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="5"
                    result="effect1_foregroundBlur_290_57"
                  />
                </filter>
                <filter
                  id="filter1_dd_290_57"
                  x="50.5625"
                  y="10"
                  width="71.7285"
                  height="269.261"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_290_57"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_290_57"
                    result="effect2_dropShadow_290_57"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_290_57"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_290_57"
                  x="-4.58789"
                  y="277.991"
                  width="279.457"
                  height="305.36"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_290_57"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_290_57"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter3_d_290_57"
                  x="-155.148"
                  y="544.758"
                  width="164.689"
                  height="187.387"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_290_57"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_290_57"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter4_d_290_57"
                  x="151.057"
                  y="427.283"
                  width="441.227"
                  height="416.717"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_290_57"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_290_57"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter5_d_290_57"
                  x="-322"
                  y="426.059"
                  width="438.164"
                  height="417.941"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_290_57"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_290_57"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter6_d_290_57"
                  x="259.518"
                  y="549.041"
                  width="157.584"
                  height="177.76"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_290_57"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_290_57"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="w-full h-1/2 md:h-full flex items-center justify-center">
            <motion.div className="xl:flex-1">
              <MainLogoCanvas />
            </motion.div>
          </div>
          <div className="md:flex h-4/5 w-full pt-10 items-center justify-center">
            {/* <div className="w-full"></div> */}
            <div className="flex md:h-full p-5 w-full  items-center gap-10 justify-center flex-col">
              <img
                className="w-full  flex items-center pr-10 justify-center "
                src={Title}
                alt="title"
              ></img>
              <CountdownTimer CountdownTimeStampMs={1697536800000} />
            </div>
          </div>
        </div>
        <div className="flex items-center w-screen justify-center md:items-end md:justify-end md:px-20">
          <img
            src={College}
            className="flex items-center justify-center"
            alt="college"
          ></img>
        </div>
      </div>
      <div id="Departments">
        <Department />
      </div>
      <Discover />
      <div id="Missions" className="hidden md:block">
        <Eventshoriscroll/>
      </div>
      <div className="block md:hidden">
        <Horiscroll/>
      </div>
      <div id="Foot">
        <Footer />
      </div>
      {/* <div className="w-screen h-screen hidden md:block">
        <EventScroll />
        </div>   */}
        {/* <div className="block sm:hidden">
        <Deck/>
        </div> */}
              
        {/* <div className="block md:hidden"><Horiscroll/></div>
      <Footer /> */}
    </>
  );
};

export default Loading;
