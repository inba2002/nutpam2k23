import React from "react";
import reg from "./aiasset/visionxreg.svg";

const Airules = () => {
  return (
    <div className="flex flex-wrap flex justify-center items-center">
      {/* Top row */}
      <div className="w-full md:w-1/4 p-2 md:p-1">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-5 gap-4">
          <h1 className="text-xl font-mono text-white">Rule-1</h1>
          <p className="font-mono text-white">
            A team should consist of 2 members.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-2 md:p-4">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className="text-xl font-mono text-white">Rule-2</h1>
          <p className="font-mono text-white">
            No tab switch during the quiz round,.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-2">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-5 gap-4">
          <h1 className="text-xl font-mono text-white">Rule-3</h1>
          <p className="font-mono text-white">
            Each team should have to attend two rounds continuously and breaks
            are provided.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-2 md:p-1">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-5 gap-4">
          <h1 className="text-xl font-mono text-white">Rule-4</h1>
          <p className="font-mono text-white">
            Code implementation must be run and represented in Google colab
            only.
          </p>
        </div>
      </div>
      <div className="w-full md:w-3/5 md:p-4 p-2">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className="text-xl font-mono text-white">Rule-5</h1>
          <p className="font-mono text-white">
            All teams need to explain their project during evaluation.
          </p>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="w-full p-4 flex items-center justify-center p-5">
          <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Airules;
