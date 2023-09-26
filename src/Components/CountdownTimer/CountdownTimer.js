import { useState, useEffect } from "react";
import React from "react";
import { getRemainingTimeUntilMsTimestamp } from "./utils/CountdownTimerUtils";

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
      <div className="w-full">
        <div className="flex items-center justify-start  w-full text-5xl text-white gap-5">
          <div>
            <span className=" px-1 border w-16 h-24 rounded xl:px-2 bg-white/25">
              {remainingTime.days}
            </span>
          </div>
          <span>:</span>
          <div>
            <span className=" lg:px-2 px-1 border rounded w-16 h-24  bg-white/25">
              {remainingTime.hours}
            </span>
          </div>
          <span>:</span>
          <div>
            <span className=" lg:px-2 px-1 border rounded w-16 h-24  bg-white/25">
              {remainingTime.minutes}
            </span>
          </div>
          <span>:</span>
          <div>
            <span className=" lg:px-2 px-1 border rounded w-16 h-24  bg-white/25">
              {remainingTime.seconds}
            </span>
          </div>
          <p className="text-lg">
            seconds more <br></br> to kick off!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
