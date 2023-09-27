import React,{Suspense} from "react";
import Title from "../Assets/header.svg";
import College from "../Assets/college.svg";
import CountdownTimer from "./CountdownTimer/CountdownTimer";
import AnimatedCursor from "react-animated-cursor";

import MainLogoCanvas from "./ModelRender/LogoModel";
import { motion } from 'framer-motion';
import {slideIn} from "../utils/motion"




const Loading = () => {
  return (
    <div className="h-screen pr-20">
      <div className="flex h-4/5 pt-10 items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
        <motion.div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <MainLogoCanvas/>
      </motion.div>
        </div>
        <div className="flex h-full items-center gap-10 justify-center flex-col">
          <img src={Title} alt="title"></img>
          <CountdownTimer CountdownTimeStampMs={1697623200000} />
        </div>
      </div>

      <div className="flex items-end justify-end px-20">
        <img src={College} alt="college"></img>
      </div>
      <AnimatedCursor
        innerSize={20}
        outerSize={20}
        color="193, 11, 111"
        outerAlpha={0.3}
        innerScale={0.3}
        outerScale={5}
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
      />
    </div>
  );
};

export default Loading;
