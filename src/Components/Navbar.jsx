import { useState } from "react";
import close from "../Assets/close.svg";
import menu from "../Assets/menu.svg";

import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="w-screen">
      <div className="navbar navbar-end bg-transparent w-full h-32">
        <div className="w-full flex items-center justify-end">
          <div className="flex w-1/2 items-center justify-center">
            <ul className="md:flex hidden border-b-2 border-white/25 items-center justify-between px-10 text-white gap-10 text-xl p-2  w-full">
              <li className="hover:text-white/50 w-24 h-10 hover:bg-white/25 flex items-center justify-center ">
                <a>Home</a>
              </li>
              <li className="hover:text-white/50 w-24 h-10 hover:bg-white/25 flex items-center justify-center">
                <a>About</a>
              </li>
              <li className="hover:text-white/50 w-24 h-10 hover:bg-white/25 flex items-center justify-center">
                <a>Mission</a>
              </li>
              <li className="hover:text-white/50 w-24 h-10 hover:bg-white/25 flex items-center justify-center">
                <a>Sponsers</a>
              </li>
              <li className="hover:text-white/50 w-24 h-10 hover:bg-white/25 flex items-center justify-center">
                <a>Team</a>
              </li>
              <li className="hover:text-white/50 w-24 h-10 hover:bg-white/25 flex items-center justify-center">
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="dropdown md:hidden">
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
                className="menu items-center backdrop-blur-md menu-lg dropdown-content mt-64 z-[1] mr-32 p-2 border border-white/10 shadow-xl pr-96 rounded-box w-28"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Mission</a>
                </li>
                <li>
                  <a>Sponsers</a>
                </li>
                <li>
                  <a>Team</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
