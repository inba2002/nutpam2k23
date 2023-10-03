import { useState, useEffect } from "react";
import React from "react";
import { getRemainingTimeUntilMsTimestamp } from "./utils/CountdownTimerUtils";
import "./count.css";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ CountdownTimeStampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervelId = setInterval(() => {
      updateReminingTime(CountdownTimeStampMs);
    }, 1000);
    return () => clearInterval(intervelId);
  }, [CountdownTimeStampMs]);

  function updateReminingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center md:justify-start justify-center">
        <div className="md:flex items-center justify-start gap-10">
          <div className="flex items-center justify-start w-1/2 md:w-auto text-2xl md:text-5xl text-white gap-5">
            <div>
              <span className=" px-1 tracking-wide  border w-10 h-10 md:w-16 md:h-24 rounded xl:px-2 bg-white/25">
                {remainingTime.days}
              </span>
            </div>
            <span>:</span>
            <div>
              <span className=" lg:px-2 tracking-wide px-1 border rounded w-10 h-10 md:w-16 md:h-24  bg-white/25">
                {remainingTime.hours}
              </span>
            </div>
            <span>:</span>
            <div>
              <span className=" lg:px-2 tracking-wide px-1 border rounded w-10 h-10 md:w-16 md:h-24  bg-white/25">
                {remainingTime.minutes}
              </span>
            </div>
            <span>:</span>
            <div>
              <span className=" lg:px-2 tracking-wide px-1 border rounded w-10 h-10 md:w-16 md:h-24  bg-white/25">
                {remainingTime.seconds}
              </span>
            </div>
          </div>
          <p className="md:text-lg md:p-0 p-10 text-white md:w-36 text-sm time-left">
            seconds more to kick off!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
