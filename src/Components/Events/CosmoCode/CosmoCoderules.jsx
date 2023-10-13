import React from "react";
import { Link } from "react-router-dom";

const CosmoCoderules = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {/* <div className="navbar navbar-end bg-transparent w-full h-32">
        <div className="w-full flex items-center justify-start">
          <div className="flex w-1/2 items-center justify-center">
            <ul className="md:flex hidden border-b-2 border-white/25 items-center justify-between px-10 text-white gap-10 text-xl p-2  w-full">
              <Link to="/">
                <li className="hover:text-white/50 w-28 h-10 hover:bg-white/25 flex items-center justify-center ">
                  <a>Home</a>
                </li>
              </Link>
              <li className="hover:text-white/50 w-64 h-10 hover:bg-white/25 flex items-center justify-center">
                <a>CosmoCode</a>
              </li>

              <li className="hover:text-white/50 w-28 h-10 hover:bg-white/25 flex items-center justify-center">
                <a href="#Foot">Contact</a>
              </li>
            </ul>
          </div>
          <div className="dropdown md:hidden flex items-center justify-end">
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
                  <a className="w-64">CosmoCode</a>
                </li>

                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      {/* Top row */}
      <div className="w-full md:w-1/4 p-2 md:p-1">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className="text-xl font-mono text-white">Rule-1</h1>
          <p className="font-mono text-white">Solo Event</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-2 md:p-4">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-5 gap-4">
          <h1 className="text-xl font-mono text-white">Rule-2</h1>
          <p className="font-mono text-white">
            All questions in Round 1 should be presented in the C programming
            language.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-2">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-5 gap-4">
          <h1 className="text-xl font-mono text-white">Rule-3</h1>
          <p className="font-mono text-white">
            Participants can choose their preferred programming language for
            Round 2.
          </p>
        </div>
      </div>
      <div className="w-full md:w-[62rem] p-4 md:p-1">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-5 gap-4">
          <h1 className="text-xl font-mono text-white">Rule-4</h1>
          <p className="font-mono text-white">
            Plagiarism, copying code from external sources, or collaborating
            with others during the event is strictly prohibited.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 md:p-4 p-2">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className="text-xl font-mono text-white">Rule-5</h1>
          <p className="font-mono text-white">Judges' decisions are final.</p>
        </div>
      </div>
      <div className="w-full md:p-4 p-2 flex items-center justify-center">
      <Link to="/closed">
          <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CosmoCoderules;
