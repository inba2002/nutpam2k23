import React from "react";
import Title from "../Assets/header.svg";
import College from "../Assets/college.svg";
import CountdownTimer from "./CountdownTimer/CountdownTimer";

const Loading = () => {

  return (
    <div className="h-screen">
      <div className="flex h-4/5 items-center justify-center">
        <div className="w-1/2"></div>
        <div className="flex h-full items-center gap-10 justify-center flex-col">
          <img src={Title} alt="title"></img>
          
        </div>
      </div>
      <div className="flex items-end justify-end px-20">
      <CountdownTimer CountdownTimeStampMs={1697623200000}/>
        <img src={College} alt="college"></img>
      </div>
    </div>
  );
};

export default Loading;
