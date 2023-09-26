import React from "react";
import Title from "../Assets/header.svg";
import College from "../Assets/college.svg";

const Loading = () => {
  return (
    <div className="h-screen">
      <div className="flex h-4/5 items-center justify-center">
        <div className="w-1/2">
          
        </div>
        <div className="flex h-full items-center justify-center flex-col">
          <img src={Title}></img>
        </div>
        
      </div>
      <div className="flex items-end justify-end px-20">
            <img src={College}></img>
          </div>
        
    </div>
  );
};

export default Loading;
