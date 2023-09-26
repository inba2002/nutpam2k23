import React from "react";
import Title from "../Assets/header.svg";
import College from "../Assets/college.svg";
import CountdownTimer from "../CountdownTimer";

const Loading = () => {

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;



  return (
    <div className="h-screen">
      <div className="flex h-4/5 items-center justify-center">
        <div className="w-1/2"></div>
        <div className="flex h-full items-center justify-center flex-col">
          <img src={Title} alt="title"></img>
          <h1>Countdown Timer</h1>
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
      </div>
      <div className="flex items-end justify-end px-20">
        <img src={College} alt="college"></img>
      </div>
    </div>
  );
};

export default Loading;
