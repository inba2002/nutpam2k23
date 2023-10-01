import React,{Suspense} from "react";
import Title from "../Assets/header.svg";
import College from "../Assets/college.svg";
import CountdownTimer from "./CountdownTimer/CountdownTimer";
import AnimatedCursor from "react-animated-cursor";
import  '../App.css';

import MainLogoCanvas from "./ModelRender/LogoModel";
import { motion } from 'framer-motion';
import {slideIn} from "../utils/motion"




const Loading = () => {
  return (
    <div className="h-screen overflow-x-hidden w-screen pr-20">
      <div className="md:flex w-screen h-3/4 md:h-4/5 pt-10 items-center justify-center">
        <div className="w-full h-1/2 md:h-full flex items-center justify-center">
        <motion.div className="xl:flex-1">
        <MainLogoCanvas/>
      </motion.div>
        </div>
      <div className="md:flex h-4/5 w-full pt-10 items-center justify-center">
        {/* <div className="w-full"></div> */}
        <div className="md:flex md:h-full p-5 w-full items-center gap-10 justify-center flex-col">
          <img className="w-full  flex items-center justify-center" src={Title} alt="title"></img>
          <CountdownTimer CountdownTimeStampMs={1697623200000} />
        </div>
      </div>

     
      <AnimatedCursor
        // clickables={[
        //   "a",
        //   'input[type="text"]',
        //   'input[type="email"]',
        //   'input[type="number"]',
        //   'input[type="submit"]',
        //   'input[type="image"]',
        //   "label[for]",
        //   "select",
        //   "textarea",
        //   "button",
        //   ".link",
        //   {
        //     target: ".custom",
        //     options: {
        //       innerSize: 12,
        //       outerSize: 12 ,
        //       color: "255, 255, 255",
        //       outerAlpha: 0.3,
        //       innerScale: 0.7,
        //       outerScale: 5,
        //     },
        //   },
        // ]}
        innerSize={100}
        outerSize={100}
        color="193, 11, 111"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={0}
        innerStyle={{
          mixBlendMode: 'exclusion',
          backdropFilter: 10
        }}
      />
      
    </div>
    <div className="flex items-center justify-center md:items-end md:justify-end md:px-20">
        <img src={College} className="flex items-center justify-center" alt="college"></img>
      </div>
    </div>
  );
};

export default Loading;
