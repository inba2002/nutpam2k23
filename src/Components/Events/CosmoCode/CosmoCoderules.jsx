import React from "react";
import reg from "./cosmocodeasset/visionxreg.svg";
import { Link } from "react-router-dom";

const CosmoCoderules = () => {
  return (
    <div className="flex flex-wrap flex justify-center items-center">
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
      <div className="w-full md:p-4 p-2">
        <div className="w-full p-4 flex items-center justify-center ">
          <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CosmoCoderules;
