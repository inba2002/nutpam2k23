import React from "react";
import introVideo from "../Assets/Nutpam-Video.mp4"
import "../Components/video.css"

export default function Video() {
  return (
    <div className="w-full md:h-full h-96 flex items-center justify-center">
        <video className="h-full" autoPlay controls loop>
          <source src={introVideo}></source>
        </video>
    </div>
  );
}
