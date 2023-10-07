import React from "react";
import AnimatedCursor from "react-animated-cursor";
const PixelLegacy = () => {
  return (
    <>
     <div className="bg-visionxformbg bg-cover h-screeen p-10 flex flex-col items-center justify-center">
     <AnimatedCursor className="z-50"
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
          outerSize={10}
          color="255, 255, 255"
          outerAlpha={1}
          innerScale={0}
          outerScale={0}
          innerStyle={{
            mixBlendMode: "exclusion",
            backdropFilter: 10,
          }}
        />
      <form
        action="https://app.unoforms.xyz/submit/UJFB-_qxJ6t"
        method="post"
        class="team-form"
        className="flex flex-col justify-center rounded-lg bg-white/0.2 backdrop-blur-sm  bg-transparent"
        style={{
          background: "rgba(0, 0, 0, 0.60)",
          borderRadius: "21px",
          backdropFilter: "blur(10px)",
        }}
      >
          <input type="hidden" name="event_name" value="PixelLegacy" />
          <h1 className="md:text-4xl text-center p-5 text-white font-mono">
            Pixel Legacy Registration
          </h1>
          <div className="md:grid md:text-xl flex flex-col items-center justify-center grid-cols-2 gap-4 pl-4 md:p-10 max-w-screen-2xl mx-auto">
            <div class="form-row flex flex-col   w-full col-span-2">
              <label for="TeamName" className="text-start">Team Name:</label>
              <input
              className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="TeamName"
                name="TeamName"
                // placeholder="Enter team name"
                required
              />
            </div>
            <div class="form-row">
              <label for="TeamLeaderName">Team Leader Name:</label>
              <input
              className="input w-3/4 md:w-full h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="TeamLeaderName"
                name="TeamLeaderName"
                // placeholder="Enter team leader name"
                required
              />
            </div>
            <div class="form-row">
              <label for="TeammateName1">Teammate Name:</label>
              <input
              className="input w-3/4 md:w-full h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="TeammateName1"
                name="TeammateName1"
                // placeholder="Enter teammate's name"
              />
            </div>
            <div class="form-row">
              <label for="TeamLeadEmail">Team Leader Email:</label>
              <input
              className="input w-3/4 md:w-full h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="email"
                id="TeamLeadEmail"
                name="TeamLeadEmail"
                // placeholder="Enter team leader's email"
                required
              />
            </div>
            <div class="form-row">
              <label for="TeammateEmail1">Teammate Email:</label>
              <input
              className="input w-3/4 md:w-full h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="email"
                id="TeammateEmail1"
                name="TeammateEmail1"
                // placeholder="Enter Teammate email"
              />
            </div>
            <div class="form-row">
              <label for="TeamLeadEmail1">Team Lead College Name *:</label>
              <input
              className="input w-3/4 md:w-full h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="name"
                id="TeamLeadEmail1"
                name="TeamLeadEmail1"
                // placeholder="Enter TeamLead email"
                required
              />
            </div>
            <div class="form-row">
              <label for="TeammateCollege">Teammate College Name *:</label>
              <input
              className="input w-3/4 md:w-full h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="name"
                id="TeammateCollege"
                name="TeammateCollege"
                // placeholder="Enter teammate's email"
              />
            </div>
            <div className="md:flex md:flex-row flex-col justify-between items-center ">
            <div class="form-row">
              <label for="TeamLeadDept">Team Leader Department:</label>
              <input
              className="input w-3/4 md:w-full  h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="TeamLeadDept"
                name="TeamLeadDept"
                // placeholder="Enter team leader's department"
                required
              />
            </div>
            <div class="form-row ">
              <label for="TeamLeadYear">Team Lead Year *:</label>
              <input
              className="input w-3/4 md:w-full md:w-3/4 h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="TeamLeadYear"
                name="TeamLeadYear"
                // placeholder="Enter teammate's department"
                required
              />
            </div>
            </div>
            <div className="md:flex md:flex-row flex-col justify-between items-center ">
            <div class="form-row">
              <label for="TeamMateDept">TeamMate Department:</label>
              <input
              className="input w-3/4 md:w-full md:w-3/4 h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="TeamMateDept"
                name="TeamMateDept"
                // placeholder="Enter team leader's department"
              />
            </div>
            <div class="form-row ">
              <label for="TeamMateYear">TeamMate Year *:</label>
              <input
              className="input w-3/4 md:w-full md:w-3/4 h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="TeamMateYear"
                name="TeamMateYear"
                // placeholder="Enter teammate's department"
              />
            </div>
            </div>
            <div class="form-row">
              <label for="TeamLeadWhatsApp">Team Leader WhatsApp Number:</label>
              <input
              className="input w-3/4 md:w-full h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="tel"
                id="TeamLeadWhatsApp"
                name="TeamLeadWhatsApp"
                // placeholder="Enter team leader's WhatsApp number"
                required
              />
            </div>
            <div class="form-row">
              <label for="TeammateWhatsApp1">Teammate WhatsApp Number:</label>
              <input
              className="input w-3/4 md:w-full h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="tel"
                id="TeammateWhatsApp1"
                name="TeammateWhatsApp1"
                // placeholder="Enter teammate's WhatsApp number"
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-10">
            <button
              className="btn w-32 items-center justify-center hover:bg-white/10 px-20 hover:shadow-lg bg-white/25 text-rgba-50-95-255-70 text-center text-#325FFFB2 font-space-mono text-24 font-semibold leading-192 tracking-0.72"
              style={{
                borderRadius: "4px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                background:
                  "linear-gradient(266deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)",
                backdropFilter: "blur(15px)",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PixelLegacy;
