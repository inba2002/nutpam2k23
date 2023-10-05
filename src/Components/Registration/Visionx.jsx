import React from "react";
import "../footer.css";
import AnimatedCursor from "react-animated-cursor";

function Visionx() {
  return (
    <div className="">
      <form
        action=""
        class="team-form"
        className="flex flex-col justify-center bg-black/[0.6] rounded-lg  backdrop-blur-sm"
      >
        <h1 className="md:text-4xl text-center p-5 text-white font-mono">
          Vision X Registration
        </h1>
        <h1 className="text-end">
          Team Lead & Teammates are two separate participants, hence make sure
          not to give any wrong/same details.
        </h1>
        <div className="md:grid md:text-xl grid-cols-2 gap-4 md:p-10">
          <div class="form-row">
            <label for="teamName">Team Name:</label>
            <input
              className="w-full h-16 rounded px-10"
              type="text"
              id="teamName"
              name="teamName"
              required
            />
          </div>
          <div class="form-row">
            <label for="teamLeaderName">Team Leader Name:</label>
            <input
              className="w-full h-16 rounded px-10"
              type="text"
              id="teamLeaderName"
              name="teamLeaderName"
              required
            />
          </div>
          <div class="form-row">
            <label for="teammateName1">Teammate Name 1:</label>
            <input
              className="w-full h-16 rounded px-10"
              type="text"
              id="teammateName1"
              name="teammateName1"
              required
            />
          </div>
          <div class="form-row">
            <label for="teamLeadEmail">Team Leader Email:</label>
            <input
              className="w-full h-16 rounded px-10"
              type="email"
              id="teamLeadEmail"
              name="teamLeadEmail"
              required
            />
          </div>
          <div class="form-row">
            <label for="teammateEmail1">Teammate 1 Email:</label>
            <input
              className="w-full h-16 rounded px-10"
              type="email"
              id="teammateEmail1"
              name="teammateEmail1"
              required
            />
          </div>
          <div class="form-row">
            <label for="teamLeadDept">Team Leader Department:</label>
            <input
              className="w-full h-16 rounded px-10"
              type="text"
              id="teamLeadDept"
              name="teamLeadDept"
              required
            />
          </div>
          <div class="form-row">
            <label for="teammateDept1">Teammate 1 Department:</label>
            <input
              className="w-full h-16 rounded px-10"
              type="text"
              id="teammateDept1"
              name="teammateDept1"
              required
            />
          </div>
          <div class="form-row">
            <label for="teamLeadWhatsApp">Team Leader WhatsApp Number:</label>
            <input
              className="w-full h-16 rounded px-10"
              type="tel"
              id="teamLeadWhatsApp"
              name="teamLeadWhatsApp"
              required
            />
          </div>
          <div class="form-row">
            <label for="teammateWhatsApp1">Teammate 1 WhatsApp Number:</label>
            <input
              className="w-full h-16 rounded px-10"
              type="tel"
              id="teammateWhatsApp1"
              name="teammateWhatsApp1"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="teammateName2">Teammate Name 2:</label>
            <input
              className="w-full h-16 rounded px-10"
              type="text"
              id="teammateName2"
              name="teammateName2"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="teammateEmail2">Teammate 2 Email:</label>
            <input
              className="w-full h-16 rounded px-10"
              type="email"
              id="teammateEmail2"
              name="teammateEmail2"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="teammateCollegeName2">
              Teammate 2 College Name:
            </label>
            <input
              className="w-full h-16 rounded px-10"
              type="text"
              id="teammateCollegeName2"
              name="teammateCollegeName2"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="teammateDept2">Teammate 2 Department:</label>
            <input
              className="w-full h-16 rounded px-10"
              type="text"
              id="teammateDept2"
              name="teammateDept2"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="teammateYear2">Teammate 2 Year:</label>
            <input
              className="w-full h-16 rounded px-10"
              type="text"
              id="teammateYear2"
              name="teammateYear2"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="teammateWhatsApp2">
              Teammate 2 WhatsApp Number:
            </label>
            <input
              className="w-full h-16 rounded px-10"
              type="tel"
              id="teammateWhatsApp2"
              name="teammateWhatsApp2"
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-center p-10">
          <button
            className="btn  w-32 items-center justify-center hover:bg-white/10 hover:shadow-lg bg-white/25"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <AnimatedCursor
        // clickables={[
        //   "a",
        //   'input[type="text"]',
        //   'input[type="email"]',
        //   'input[type="number"]',
        //   'input[type="submit"]',
        //   'input[type="image"]',
        //   "label[for]",
        //   "select",
        //   "textarea",
        //   "button",
        //   ".link",
        //   {
        //     target: ".custom",
        //     options: {
        //       innerSize: 12,
        //       outerSize: 12 ,
        //       color: "255, 255, 255",
        //       outerAlpha: 0.3,
        //       innerScale: 0.7,
        //       outerScale: 5,
        //     },
        //   },
        // ]}
        innerSize={0}
        outerSize={25}
        color="255, 255, 255"
        outerAlpha={1}
        innerScale={0}
        outerScale={0}
        innerStyle={{
          mixBlendMode: "exclusion",
          backdropFilter: 10,
        }}
      />
    </div>
  );
}

export default Visionx;
