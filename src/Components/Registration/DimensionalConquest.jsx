import React from "react";
import AnimatedCursor from "react-animated-cursor";

import "./regform.css";

const DimensionalConquest = () => {
  return (
    <>
      <div className="bg-dcregbg p-10 bg-cover h-[600vh] md:h-[320vh] flex flex-col items-center justify-center">
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
            Dimensional Conquest <span> Registration </span>
          </h1>
          <h1 className="text-end p-10 text-white font-mono">
            Team Leader & Teammates are two separate participants, hence make
            sure not to give any wrong/same details.
          </h1>

          <form
            action="https://app.unoforms.xyz/submit/fCGvUqrUi5W"
            class="team-form"
            method="post"
            className="form-container"
          >
            <input
              type="hidden"
              name="event_name"
              value="DimensionalConquest"
            />

            <div class="ip-container gspan-2">
              <label className="ip-title" for="TeamName">Team Name <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="TeamName"
                name="TeamName"
                placeholder="Enter team name"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="TeamLeaderName">Team Leader Name <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="TeamLeaderName"
                name="TeamLeaderName"
                placeholder="Enter team leader name"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teamLeadEmail">Team Leader Email <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="email"
                id="teamLeadEmail"
                name="teamLeadEmail"
                placeholder="Enter team leader's email"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="TeamLeadercllgName">Team Leader College Name <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="TeamLeadercllgName"
                name="TeamLeadercllgName"
                placeholder="Enter team leader College name"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teamLeadWhatsApp">Team Leader WhatsApp Number <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="tel"
                id="teamLeadWhatsApp"
                name="teamLeadWhatsApp"
                placeholder="Enter team leader's WhatsApp number"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teamLeadDiscord">Team Leader Discord ID <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="teamLeadDiscord"
                name="teamLeadDiscord"
                placeholder="Enter team leader's Discord ID"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teamLeadInGameID">Team Leader In-Game ID <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="teamLeadInGameID"
                name="teamLeadInGameID"
                placeholder="Enter team leader's in-game ID"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teamLeadRank">Team Leader Rank <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="teamLeadRank"
                name="teamLeadRank"
                placeholder="Enter team leader's rank"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teammate1Name">Teammate 1 Name <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="teammate1Name"
                name="teammate1Name"
                placeholder="Enter teammate 1's name"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teammate1ID">Teammate 1 ID <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="teammate1ID"
                name="teammate1ID"
                placeholder="Enter teammate 1's ID"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teammate1Rank">Teammate 1 Rank <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="teammate1Rank"
                name="teammate1Rank"
                placeholder="Enter teammate 1's rank"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teammate2Name">Teammate 2 Name <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="teammate2Name"
                name="teammate2Name"
                placeholder="Enter teammate 2's name"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teammate2ID">Teammate 2 ID <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="teammate2ID"
                name="teammate2ID"
                placeholder="Enter teammate 2's ID"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teammate2Rank">Teammate 2 Rank <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="teammate2Rank"
                name="teammate2Rank"
                placeholder="Enter teammate 2's rank"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teammate3Name">Teammate 3 Name <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="teammate3Name"
                name="teammate3Name"
                placeholder="Enter teammate 3's name"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teammate3ID">Teammate 3 ID <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="teammate3ID"
                name="teammate3ID"
                placeholder="Enter teammate 3's ID"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teammate3Rank">Teammate 3 Rank <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="teammate3Rank"
                name="teammate3Rank"
                placeholder="Enter teammate 3's rank"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teammate4Name">Teammate 4 Name <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="teammate4Name"
                name="teammate4Name"
                placeholder="Enter teammate 4's name"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teammate4ID">Teammate 4 ID <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="teammate4ID"
                name="teammate4ID"
                placeholder="Enter teammate 4's ID"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teammate4Rank">Teammate 4 Rank <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="teammate4Rank"
                name="teammate4Rank"
                placeholder="Enter teammate 4's rank"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="substituteName">Substitute Name <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="substituteName"
                name="substituteName"
                placeholder="Enter substitute's name"
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="substituteID">Substitute ID <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="substituteID"
                name="substituteID"
                placeholder="Enter substitute's ID"
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="substituteRank">Substitute Rank <span className="req">*</span></label>
              <input
                className="ip-box"
                
                type="text"
                id="substituteRank"
                name="substituteRank"
                placeholder="Enter substitute's rank"
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

export default DimensionalConquest;
