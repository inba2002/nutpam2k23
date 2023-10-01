import React from "react";
import introVideo from "../Assets/Nutpam-Video.mp4"
import "../Components/video.css"

export default function Video() {
  return (
    <div className="w-full ">
        <video className="rounded-3xl" autoPlay controls loop>
          <source src={introVideo}></source>
        </video>
    </div>
  );
}
