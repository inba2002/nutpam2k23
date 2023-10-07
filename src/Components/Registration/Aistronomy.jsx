import React from "react";
import AnimatedCursor from "react-animated-cursor";

import "./regform.css";

const Aistronomy = () => {
  return (
    <>
      <div className="bg-aistronomyregbg p-10 bg-cover h-[390vh] md:h-[250vh] flex flex-col items-center justify-center">
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
            AIstronomy <span> Registration </span>
          </h1>
          <h1 className="text-end p-10 text-white font-mono">
            Team Leader & Teammates are two separate participants, hence make
            sure not to give any wrong/same details.
          </h1>

          <form
            action="https://app.unoforms.xyz/submit/wq83BONj7Ik"
            method="post"
            class="team-form"
            className="form-container"
          >
            <div class="ip-container gspan-2">
              <label className="ip-title" for="TeamName">
                Team Name <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamName"
                name="TeamName"
                placeholder="Name"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teamLeaderName">
                Team Leader Name <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamLeaderName"
                name="TeamLeaderName"
                placeholder="Name"
                required
              />
            </div>

            <div class="ip-container">
              <label className="ip-title" for="teamLeadEmail">
                Team Leader Email <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="email"
                id="TeamLeadEmail"
                name="TeamLeadEmail"
                placeholder="E-mail"
                required
              />
            </div>

            <div class="ip-container">
              <label className="ip-title" for="TeamLeadCollege">
                Team Lead College Name <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamLeadCollege"
                name="TeamLeadCollege"
                placeholder="College Name"
                required
              />
            </div>

            <div class="ip-container">
              <label className="ip-title" for="teamLeadDept">
                Team Leader Department <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamLeadDept"
                name="TeamLeadDept"
                placeholder="Department"
                required
              />
            </div>
            <div class="ip-container ">
              <label className="ip-title" for="TeamLeadYear">
                Team Lead Year <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamLeadYear"
                name="TeamLeadYear"
                placeholder="Year"
                required
              />
            </div>

            <div class="ip-container">
              <label className="ip-title" for="TeamLeadWhatsApp">
                Team Leader WhatsApp Number:
                <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="tel"
                id="TeamLeadWhatsApp"
                name="TeamLeadWhatsApp"
                placeholder="WhatsApp number"
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
                placeholder="Name"
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
                placeholder="E-mail"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="Teammate1College">
                Teammate 1 College Name <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="Teammate1College"
                name="Teammate1College"
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
                Teammate 1 Year <span className="req">*</span>
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
                Teammate 1 WhatsApp Number:
                <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="tel"
                id="TeammateWhatsApp1"
                name="TeammateWhatsApp1"
                placeholder="WhatsApp number"
                required
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
};

export default Aistronomy;
