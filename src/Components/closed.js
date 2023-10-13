import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Logo from "../Assets/success-note.png";

export default function Closed() {
  return (
    <div className="bg-successbg p-10 bg-cover h-[200vh] md:h-[190vh] flex flex-col items-center justify-center">
      <div className="w-screen">
        <div className="navbar navbar-end bg-transparent w-full h-32">
          <div className="w-full flex items-center justify-end">
            <div className="flex w-1/2 items-center justify-center">
              <ul className="md:flex hidden border-b-2 border-white/25 items-center justify-between px-40 font-mono text-white gap-10 text-xl p-2  w-full">
                <Link to="/">
                  <li className="hover:text-white/50 w-28 h-10 hover:bg-white/25 flex items-center justify-center ">
                    <a>Home</a>
                  </li>
                </Link>

                <li className="hover:text-white/50 w-28 h-10 hover:bg-white/25 flex items-center justify-center">
                  <a href="#Foot">Contact</a>
                </li>
              </ul>
            </div>
            <div className="dropdown w-full md:hidden flex items-center justify-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <div className="flex items-center  justify-center">
                <ul
                  tabIndex={0}
                  className="menu font-mono text-white flex justify-center items-center backdrop-blur-md menu-lg dropdown-content mt-64 z-[1] mr-32 p-2 border border-white/10 shadow-xl pr-96 rounded-box w-28"
                >
                  <Link to="/">
                    <li>
                      <a>Home</a>
                    </li>
                  </Link>

                  <li>
                    <a href="#Foot">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-1/4  md:h-3/4 p-24 bg-black/[0.6] backdrop-blur-md gap-10 rounded-lg">
        <img src={Logo} className="md:h-52"></img>
        <p className="text-center text-white md:text-2xl  p-10 md:w-3/4">
          The Registration has been Closed Better luck next Time......
        </p>
        <Link to="/">
          <button className="btn w-52 h-16 bg-gradient-to-r rounded text-blue-700 to-black/[0.1] from-black/[0.6]">
            Redirect
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
