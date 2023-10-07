import React from "react";
import "../footer.css";
import { saveAs } from 'file-saver';
import CelesticalPauserules from "../Events/CelesticalPause/CelesticalPauserules";
import AnimatedCursor from "react-animated-cursor";

function CelesticalPause() {

  return (
    <>
      <div className="bg-visionxformbg bg-cover h-screen flex flex-col mt-[620px] md:mt-48 items-center justify-center">
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
          action="https://app.unoforms.xyz/submit/9wQR0CpNqFm"
          method="post"
          class="team-form"
          className="flex flex-col justify-center rounded-lg bg-white/0.2 backdrop-blur-sm  bg-transparent"
          style={{
            background: "rgba(0, 0, 0, 0.60)",
            borderRadius: "21px",
            backdropFilter: "blur(10px)",
          }}
        >
          <input type="hidden" name="event_name" value="CelestialPause" />
          <h1 className="md:text-4xl text-center p-5 text-white font-mono">
          Celestial Pause Registration
          </h1>
          <h1 className="text-end p-10 text-white">
            Team Lead & Teammates are two separate participants, hence make sure
            not to give any wrong/same details.
          </h1>
          <div className="md:grid md:text-xl grid-cols-2 gap-4 pl-4 md:p-10 max-w-screen-2xl mx-auto">
            <div class="form-row col-span-2 flex flex-col">
              <label for="teamName">Team Name:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="text"
                id="TeamName"
                name="TeamName"
                // placeholder="Team Name"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div class="form-row flex flex-col">
              <label for="TeamLeaderName">Team Leader Name:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="text"
                id="TeamLeaderName"
                name="TeamLeaderName"
                // placeholder="Leader Name"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div class="form-row">
              <label for="TeammateName1">Teammate Name 1:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="text"
                id="TeammateName1"
                name="TeammateName1"
                // placeholder="Teammate Name 1"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div class="form-row">
              <label for="TeamLeadEmail">Team Leader Email:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="email"
                id="TeamLeadEmail"
                name="TeamLeadEmail"
                // placeholder="Team Leader Mail"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div class="form-row">
              <label for="TeammateEmail1">Teammate 1 Email:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="email"
                id="TeammateEmail1"
                name="TeammateEmail1"
                // placeholder="Teammate 1 Email"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div class="form-row ">
              <label for="TeamLeaderCllg">TeamLeader College *:</label>
              <input
              className="input w-3/4 md:w-full h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="TeamLeaderYear"
                name="TeamLeaderYear"
                // placeholder="College Name"
                required
              />
            </div>
            <div class="form-row ">
              <label for="TeamMateCllg">Teammate College *:</label>
              <input
              className="input w-3/4 md:w-full h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="TeamMateCllg"
                name="TeamMateCllg"
                // placeholder="College Name"
                required
              />
            </div>
            <div className="md:flex md:flex-row flex-col justify-between items-center ">
            <div class="form-row">
              <label for="TeamLeaderDept">TeamLeader Department:</label>
              <input
              className="input w-3/4  h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="TeamLeaderDept"
                name="TeamLeaderDept"
                // placeholder="Department"
                required
              />
            </div>
            <div class="form-row ">
              <label for="TeamLeaderYear">TeamLeader Year *:</label>
              <input
              className="input w-3/4 h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="TeamLeaderYear"
                name="TeamLeaderYear"
                // placeholder="Year"
                required
              />
            </div>
            </div>
            <div className="md:flex md:flex-row flex-col justify-between items-center ">
            <div class="form-row">
              <label for="Teammate1Dept">Teammate 1 Department:</label>
              <input
              className="input w-3/4 h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="Teammate1Dept"
                name="Teammate1Dept"
                // placeholder="Department"
                required
              />
            </div>
            <div class="form-row ">
              <label for="Teammate1Year">Teammate1 Year *:</label>
              <input
              className="input w-3/4 h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="Teammate1Year"
                name="Teammate1Year"
                // placeholder="Year"
                required
              />
            </div>
            </div>
            <div class="form-row">
              <label for="TeamLeadWhatsApp">Team Leader WhatsApp Number:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="tel"
                id="TeamLeadWhatsApp"
                name="TeamLeadWhatsApp"
                // placeholder="Team Leader WhatsApp Number"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div class="form-row">
              <label for="TeammateWhatsApp1">Teammate 1 WhatsApp Number:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="tel"
                id="TeammateWhatsApp1"
                name="TeammateWhatsApp1"
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
                id="TeammateName2"
                name="TeammateName2"
                // placeholder="Teammate Name 2"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
              />
            </div>
            <div className="form-row">
              <label htmlFor="teammateEmail2">Teammate 2 Email:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="email"
                id="TeammateEmail2"
                name="TeammateEmail2"
                // placeholder="Teammate 2 Email"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
              />
            </div>
            <div className="form-row">
              <label htmlFor="teammateCollegeName2">
                Teammate 2 College Name:
              </label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="text"
                id="TeammateCollegeName2"
                name="TeammateCollegeName2"
                // placeholder="Teammate 2 College Name"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
              />
            </div>
            <div className="md:flex md:flex-row flex-col justify-between items-center ">
            <div class="form-row">
              <label for="Teammate2Dept">Teammate 2 Department:</label>
              <input
              className="input w-3/4 h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="Teammate2Dept"
                name="Teammate2Dept"
                // placeholder="Department"
              />
            </div>
            <div class="form-row ">
              <label for="Teammate2Year">Teammate 2 Year *:</label>
              <input
              className="input w-3/4 h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="Teammate2Year"
                name="Teammate2Year"
                // placeholder="Year"
              />
            </div>
            </div>
            <div className="form-row">
              <label htmlFor="teammateWhatsApp2">
                Teammate 2 WhatsApp Number:
              </label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="tel"
                id="TeammateWhatsApp2"
                name="TeammateWhatsApp2"
                // placeholder="Teammate 2 Whatsapp No."
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
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
}

export default CelesticalPause;
