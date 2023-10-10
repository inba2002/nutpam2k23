import React from 'react'
import AnimatedCursor from 'react-animated-cursor'
import "./regform.css"

const SpaceOdyssey = () => {
  return (
    <>
      <div className="bg-spaceodysseyregbg p-10 bg-cover h-[360vh] md:h-[220vh] flex flex-col items-center justify-center">
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
            Space Odyssey <span> Registration </span>
          </h1>
          <h1 className="text-end p-10 text-white font-mono">
            Team Leader & Teammates are two separate participants, hence make
            sure not to give any wrong/same details.
          </h1>

          <form
            action="https://app.unoforms.xyz/submit/nlUwaOkfs9Y"
            method="post"
            class="team-form"
            className="form-container"
          >
            <input type="hidden" name="event_name" value="SpaceOdyssey" />

            <div class="ip-container gspan-2">
              <label className="ip-title" for="TeamName">
                Team Name <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamName"
                name="TeamName"
                placeholder="Enter team name"
                required
              />
            </div>
            <div class="form-row">
              <label className="ip-title" for="TeamLeaderName">
                Team Leader Name <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamLeaderName"
                name="TeamLeaderName"
                placeholder="Enter team leader name"
                required
              />
            </div>
            
            <div class="form-row">
              <label className="ip-title" for="TeamLeadEmail">
                Team Leader Email <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="email"
                id="TeamLeadEmail"
                name="TeamLeadEmail"
                placeholder="Enter team leader's email"
                required
              />
            </div>
            
            <div class="form-row">
              <label className="ip-title" for="TeamLeadEmail1">
                Team Lead College Name <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="name"
                id="TeamLeadEmail1"
                name="TeamLeadEmail1"
                placeholder="Enter TeamLead email"
                required
              />
            </div>

            

            <div class="form-row">
              <label className="ip-title" for="TeamLeadDept">
                Team Leader Department <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamLeadDept"
                name="TeamLeadDept"
                placeholder="Enter team leader's department"
                required
              />
            </div>
            <div class="form-row ">
              <label className="ip-title" for="TeamLeadYear">
                Team Lead Year * <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamLeadYear"
                name="TeamLeadYear"
                placeholder="Enter teammate's department"
                required
              />
            </div>


            

            <div class="form-row">
              <label className="ip-title" for="TeamLeadWhatsApp">
                Team Leader WhatsApp Number <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="tel"
                id="TeamLeadWhatsApp"
                name="TeamLeadWhatsApp"
                placeholder="Enter team leader's WhatsApp number"
                required
              />
            </div>

            <div class="form-row">
              <label className="ip-title" for="TeammateName1">
                Teammate Name 
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeammateName1"
                name="TeammateName1"
                placeholder="Enter teammate's name"
              />
            </div>
            <div class="form-row">
              <label className="ip-title" for="TeammateEmail1">
                Teammate Email 
              </label>
              <input
                className="ip-box"
                type="email"
                id="TeammateEmail1"
                name="TeammateEmail1"
                placeholder="Enter Teammate email"
              />
            </div>
            <div class="form-row">
              <label className="ip-title" for="TeammateCollege">
                Teammate College Name 
              </label>
              <input
                className="ip-box"
                type="name"
                id="TeammateCollege"
                name="TeammateCollege"
                placeholder="Enter teammate's email"
              />
            </div>

            <div class="form-row">
              <label className="ip-title" for="TeamMateDept">
                TeamMate Department 
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamMateDept"
                name="TeamMateDept"
                placeholder="Enter team leader's department"
              />
            </div>
            <div class="form-row ">
              <label className="ip-title" for="TeamMateYear">
                TeamMate Year 
              </label>
              <input
                className="ip-box"
                type="text"
                id="TeamMateYear"
                name="TeamMateYear"
                placeholder="Enter teammate's department"
              />
            </div>
            <div class="form-row">
              <label className="ip-title" for="TeammateWhatsApp1">
                Teammate WhatsApp Number 
              </label>
              <input
                className="ip-box"
                type="tel"
                id="TeammateWhatsApp1"
                name="TeammateWhatsApp1"
                placeholder="Enter teammate's WhatsApp number"
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

export default SpaceOdyssey;