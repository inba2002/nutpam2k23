import Discovers from "./Assets/discover.png";
import Arrow from "./Assets/double arrow.svg";
import DisNut from "./Assets/DISCOVER NUTPAM.png";
import Heading from "./Assets/Heading.png";
import './App.css';
import Dnut from "./Assets/dnut.png"

export default function Discover() {
  return (
    <div className="flex items-center justify-center w-screen p-14">
      <div className="md:flex items-center justify-center">
        <img src={Dnut} className="md:w-1/4"></img>
        <div className="flex flex-col items-center justify-center md:w-1/2 gap-10">
          <div className="flex items-center justify-center gap-8 text-white text-2xl w-auto rounded bg-white/[0.2] p-4">
            <svg
              className="hidden md:block"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 26 25"
              fill="none"
            >
              <g opacity="0.9">
                <path
                  d="M13.4987 19.792L6.20703 12.5003L13.4987 5.20866"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.7487 19.792L12.457 12.5003L19.7487 5.20866"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <img src={DisNut} className="md:w-auto w-42"></img>
          </div>
          <p className="md:text-2xl md:w-3/4 w-full indent-8 tex text-white text-justify">
            Nutpam 2k22 is created with the theme of “The Mighty Ocean”. With a
            simple, yet intriguing theme, we are obliged to make an indulging
            knowledge pool for all the engineers, just like the mighty ocean
            with exciting and innovative events designed to be fun,
            entertaining, and hectic at the same time.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
