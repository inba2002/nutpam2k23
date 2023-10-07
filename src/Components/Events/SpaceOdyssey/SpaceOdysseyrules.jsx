import React from "react";
import { Link } from "react-router-dom";

const SpaceOdysseyrules = () => {
  return (
    <div className="flex flex-wrap  justify-center items-center">
      {/* Top row */}
      <div className="w-full md:w-1/4 ml-5 p-1 mr-8 md:ml-[-0.1rem]">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className="text-xl font-mono font-bold text-white">Rule-1</h1>
          <p className="font-mono font-bold text-white">
            Each team should consist of two participants.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-5 gap-4">
          <h1 className="text-xl font-mono font-bold text-white">Rule-2</h1>
          <p className="font-mono font-bold text-white">
            The Participants are insisted not to damage college properties and
            not to disturb the ongoing classes.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-2">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className="text-xl font-mono font-bold text-white">Rule-3</h1>
          <p className="font-mono font-bold text-white">
            Each team will be provided by 3 credits for revealing the clues
          </p>
        </div>
      </div>

      {/* Middle row */}
      <div className="w-full md:w-1/5 p-4">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-8 gap-4">
          <h1 className="text-xl font-mono font-bold text-white">Rule-4</h1>
          <p className="font-mono font-bold text-white">
            Communication or collaboration with other teams will be disqualified
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="w-full md:w-1/4 p-2">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-14 gap-4">
          <h1 className="text-xl font-mono font-bold text-white">Rule-5</h1>
          <p className="font-mono font-bold text-white">
            Do not damage any QR while attending events.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/4 p-2">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className="text-xl font-mono font-bold text-white">Rule-6</h1>
          <p className="font-mono font-bold text-white">
            Participants must take a selfie with each QR they found and send it
            to the admin.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/4 p-3">
        <div className="flex flex-col bg-white/[0.1] rounded-xl backdrop-blur-3xl p-11 gap-4">
          <h1 className="text-xl font-mono font-bold text-white">Rule-7</h1>
          <p className="font-mono font-bold text-white">
            After the last clue has been found, the participants will be
            returned to the venue.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/4 p-2 flex items-center justify-center">
      <Link to="/spaceodysseyRegistration">
          <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SpaceOdysseyrules;
