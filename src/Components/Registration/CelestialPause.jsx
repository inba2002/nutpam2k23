import React from "react";
import "../footer.css";
import { saveAs } from 'file-saver';
import CelesticalPauserules from "../Events/CelesticalPause/CelesticalPauserules";
import AnimatedCursor from "react-animated-cursor";

import "./regform.css";

function CelesticalPause() {
  return (
    <>
      <div className="bg-celestialpauseregbg p-10 bg-cover h-[520vh] md:h-[290vh] flex flex-col items-center justify-center">
        <AnimatedCursor
          className="z-50"
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

        <div className="reg-container">
          <h1 className="reg-title">
            Celestial Pause <span> Registration </span>
          </h1>
          <h1 className="text-end p-10 text-white font-mono">
            Team Leader & Teammates are two separate participants, hence make
            sure not to give any wrong/same details.
          </h1>

          <form
            action="https://app.unoforms.xyz/submit/9wQR0CpNqFm"
            method="post"
            class="team-form"
            className="form-container"
          >
            <input type="hidden" name="event_name" value="CelestialPause" />

            <div class="ip-container gspan-2">
              <label className="ip-title" for="teamName">
                Team Name <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamName"
                name="TeamName"
                placeholder="Team Name"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="TeamLeaderName">
                Team Leader Name <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamLeaderName"
                name="TeamLeaderName"
                placeholder="Leader Name"
                required
              />
            </div>

            <div class="ip-container">
              <label className="ip-title" for="TeamLeadEmail">
                Team Leader Email <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="email"
                id="TeamLeadEmail"
                name="TeamLeadEmail"
                placeholder="Team Leader Mail"
                required
              />
            </div>

            <div class="ip-container ">
              <label className="ip-title" for="TeamLeaderCllg">
                Team Leader College <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamLeaderYear"
                name="TeamLeaderYear"
                placeholder="College Name"
                required
              />
            </div>

            <div class="ip-container">
              <label className="ip-title" for="TeamLeaderDept">
                Team Leader Department <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamLeaderDept"
                name="TeamLeaderDept"
                placeholder="Department"
                required
              />
            </div>
            <div class="ip-container ">
              <label className="ip-title" for="TeamLeaderYear">
                Team Leader Year <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamLeaderYear"
                name="TeamLeaderYear"
                placeholder="Year"
                required
              />
            </div>

            <div class="ip-container">
              <label className="ip-title" for="TeamLeadWhatsApp">
                Team Leader WhatsApp Number <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="tel"
                id="TeamLeadWhatsApp"
                name="TeamLeadWhatsApp"
                placeholder="Team Leader WhatsApp Number"
                required
              />
            </div>

            <div class="ip-container">
              <label className="ip-title" for="TeammateName1">
                Teammate Name 1 <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeammateName1"
                name="TeammateName1"
                placeholder="Teammate Name 1"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="TeammateEmail1">
                Teammate 1 Email <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="email"
                id="TeammateEmail1"
                name="TeammateEmail1"
                placeholder="Teammate 1 Email"
                required
              />
            </div>
            <div class="ip-container ">
              <label className="ip-title" for="TeamMateCllg">
                Teammate College <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamMateCllg"
                name="TeamMateCllg"
                placeholder="College Name"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="Teammate1Dept">
                Teammate 1 Department <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="Teammate1Dept"
                name="Teammate1Dept"
                placeholder="Department"
                required
              />
            </div>
            <div class="ip-container ">
              <label className="ip-title" for="Teammate1Year">
                Teammate1 Year <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="Teammate1Year"
                name="Teammate1Year"
                placeholder="Year"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="TeammateWhatsApp1">
                Teammate 1 WhatsApp Number <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="tel"
                id="TeammateWhatsApp1"
                name="TeammateWhatsApp1"
                placeholder="Teammate 1 WhatsApp Number"
                required
              />
            </div>
            <div className="ip-container">
              <label className="ip-title" htmlFor="teammateName2">
                Teammate Name 2 <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeammateName2"
                name="TeammateName2"
                placeholder="Teammate Name 2"
              />
            </div>
            <div className="ip-container">
              <label className="ip-title" htmlFor="teammateEmail2">
                Teammate 2 Email <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="email"
                id="TeammateEmail2"
                name="TeammateEmail2"
                placeholder="Teammate 2 Email"
              />
            </div>
            <div className="ip-container">
              <label className="ip-title" htmlFor="teammateCollegeName2">
                Teammate 2 College Name <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeammateCollegeName2"
                name="TeammateCollegeName2"
                placeholder="Teammate 2 College Name"
              />
            </div>

            <div class="ip-container">
              <label className="ip-title" for="Teammate2Dept">
                Teammate 2 Department <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="Teammate2Dept"
                name="Teammate2Dept"
                placeholder="Department"
              />
            </div>
            <div class="ip-container ">
              <label className="ip-title" for="Teammate2Year">
                Teammate 2 Year <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="Teammate2Year"
                name="Teammate2Year"
                placeholder="Year"
              />
            </div>

            <div className="ip-container">
              <label className="ip-title" htmlFor="teammateWhatsApp2">
                Teammate 2 WhatsApp Number <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="tel"
                id="TeammateWhatsApp2"
                name="TeammateWhatsApp2"
                placeholder="Teammate 2 Whatsapp No."
              />
            </div>

            <div className="flex items-center justify-center gspan-2">
              <button className="sub-button">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CelesticalPause;
