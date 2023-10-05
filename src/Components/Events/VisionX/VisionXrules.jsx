import React from "react";
import "./visionx.css";
import { Link } from "react-router-dom";
import BasicDetails from "../../Registration/BasicDetails";

const VisionXrules = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {/* Top row */}
      <div className="w-full md:w-1/4 p-5">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className="text-xl font-mono font-bold text-white">Rule-1</h1>
          <p className="font-mono font-bold text-white">
            A team can consist of up to 3 members at most
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/4 p-4">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className="text-xl font-mono font-bold text-white">Rule-2</h1>
          <p className="font-mono font-bold text-white">
            A team can consist of up to 3 members at most
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className="text-xl font-mono font-bold text-white">Rule-3</h1>
          <p className="font-mono font-bold text-white">
            Prepare a concise 2-3minutes documentary (video) that captivates the
            problem statement and solution.
          </p>
        </div>
      </div>

      {/* Middle row */}
      <div className="w-full md:w-11/12 md:px-20 p-4">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className="text-xl font-mono font-bold text-white">Rule-4</h1>
          <p className="font-mono font-bold text-white">
            During the 8-minute presentation,
            <ul className="list-disc">
              <li>
                The first 3 minutes will be allocated for the video to be
                played.
              </li>
              <li>
                Next 3 minutes to cover the problem statement and proposed
                solution.
              </li>
              <li>
                The final 2 minutes will be reserved for answering questions.
              </li>
            </ul>
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="w-full md:w-1/4 p-4">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className="text-xl font-mono font-bold text-white">Rule-5</h1>
          <p className="font-mono font-bold text-white">
            Ensure your ppt is polished and aligned with the sample ppt
            provided.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/4 p-4">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className="text-xl font-mono font-bold text-white">Rule-6</h1>
          <p className="font-mono font-bold text-white">
            Be ready for the surprise events that might challenge your skills
            and creativity.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className="text-xl font-mono font-bold text-white">Rule-7</h1>
          <p className="font-mono font-bold text-white">
            Remember to bring your laptop and any other essential gadgets
            required for the event. Ideas will be shortlisted based on criteria.
          </p>
        </div>
      </div>
      <div className="w-full p-4 flex items-center justify-center">
        <Link to="/Register">
          <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VisionXrules;
