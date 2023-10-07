import React from "react";
import "../footer.css";
import AnimatedCursor from "react-animated-cursor";

function Visionx() {
  return (
    <>
      <div className="bg-visionxbg p-10 bg-cover h-full flex flex-col items-center justify-center">
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
          action="https://app.unoforms.xyz/submit/qb-__2_ucxi"
          method="post"
          class="team-form"
          className="flex flex-col justify-center rounded-lg bg-white/0.2 backdrop-blur-sm p-4 gap-4  bg-transparent"
          style={{
            background: "rgba(0, 0, 0, 0.60)",
            borderRadius: "21px",
            backdropFilter: "blur(10px)",
          }}
        >
          
          <h1 className="md:text-4xl text-center p-5 text-white font-mono">
            Vision X Registration
          </h1>
          <h1 className="text-end p-10 text-white">
            Team Lead & Teammates are two separate participants, hence make sure
            not to give any wrong/same details.
          </h1>
          <div className="md:grid md:text-xl grid-cols-2 gap-4 md:p-10 max-w-screen-2xl mx-auto">
            <div class="form-row col-span-2"> 
              <label for="teamName">Team Name:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="text"
                id="teamName"
                name="teamName"
                // placeholder="Team Name"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div class="form-row">
              <label for="teamLeaderName">Team Leader Name:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="text"
                id="teamLeaderName"
                name="teamLeaderName"
                // placeholder="Leader Name"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div class="form-row">
              <label for="teammateName1">Teammate Name 1:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="text"
                id="teammateName1"
                name="teammateName1"
                // placeholder="Teammate Name 1"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div class="form-row">
              <label for="teamLeadEmail">Team Leader Email:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="email"
                id="teamLeadEmail"
                name="teamLeadEmail"
                // placeholder="Team LEader Mail"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div class="form-row">
              <label for="teammateEmail1">Teammate 1 Email:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="email"
                id="teammateEmail1"
                name="teammateEmail1"
                // placeholder="Teammate 1 Email"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div class="form-row">
              <label for="teamLeadDept">Team Leader Department:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="text"
                id="teamLeadDept"
                name="teamLeadDept"
                // placeholder="Team Leader Department"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div class="form-row">
              <label for="teammateDept1">Teammate 1 Department:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="text"
                id="teammateDept1"
                name="teammateDept1"
                // placeholder="Teammate 1 Department"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div class="form-row">
              <label for="teamLeadWhatsApp">Team Leader WhatsApp Number:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="tel"
                id="teamLeadWhatsApp"
                name="teamLeadWhatsApp"
                // placeholder="Team Leader WhatsApp Number"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div class="form-row">
              <label for="teammateWhatsApp1">Teammate 1 WhatsApp Number:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="tel"
                id="teammateWhatsApp1"
                name="teammateWhatsApp1"
                // placeholder="Teammate 1 WhatsApp Number"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="teammateName2">Teammate Name 2:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="text"
                id="teammateName2"
                name="teammateName2"
                // placeholder="Teammate Name 2"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="teammateEmail2">Teammate 2 Email:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="email"
                id="teammateEmail2"
                name="teammateEmail2"
                // placeholder="Teammate 2 Email"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="teammateCollegeName2">
                Teammate 2 College Name:
              </label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="text"
                id="teammateCollegeName2"
                name="teammateCollegeName2"
                // placeholder="Teammate 2 College Name"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="teammateDept2">Teammate 2 Department:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="text"
                id="teammateDept2"
                name="teammateDept2"
                // placeholder="Teammate 2 Department"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="teammateYear2">Teammate 2 Year:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="text"
                id="teammateYear2"
                name="teammateYear2"
                // placeholder="Teammate 2 Year"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="teammateWhatsApp2">
                Teammate 2 WhatsApp Number:
              </label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="tel"
                id="teammateWhatsApp2"
                name="teammateWhatsApp2"
                // placeholder="Teammate 2 Whatsapp No."
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-10">
            <button
              className="btn w-32 items-center justify-center hover:bg-white/10 hover:shadow-lg bg-white/25 text-rgba-50-95-255-70 text-center text-#325FFFB2 font-space-mono text-24 font-semibold leading-192 tracking-0.72"
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
}

export default Visionx;
