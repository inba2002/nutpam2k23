import React from "react";
import introVideo from "../Assets/Nutpam-Video.mp4"
import "../Components/video.css"

export default function Video() {
  return (
    <div className="h-screen flex overflow-x-hidden items-center justify-center  w-screen">
      <div className="flex w-3/4  items-center justify-center">
        <h1 className="C text-white  text-[400px]">C</h1>
        <video className="" autoPlay controls loop>
          <source src={introVideo}></source>
        </video>
        <h1 className="C text-white  text-[400px]">S</h1>
      </div>
    </div>
  );
}
