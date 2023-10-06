import React from "react";
import AnimatedCursor from "react-animated-cursor";

const DimensionalConquest = () => {
  return (
    <>
    <div className="bg-visionxformbg bg-cover h-full flex flex-col p-10 items-center justify-center">
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
          action="https://app.unoforms.xyz/submit/fCGvUqrUi5W"
          class="team-form"
          method="post"
          className="flex flex-col justify-center rounded-lg bg-white/0.2 backdrop-blur-sm  bg-transparent"
          style={{
            background: "rgba(0, 0, 0, 0.60)",
            borderRadius: "21px",
            backdropFilter: "blur(10px)",
          }}
        >
          <input type="hidden" name="event_name" value="DimensionalConquest" />
          <h1 className="md:text-4xl text-center p-5 text-white font-mono">
          Dimensional Conquest Registration
          </h1>
          <h1 className="text-end p-10 text-white">
            Team Lead & Teammates are two separate participants, hence make sure
            not to give any wrong/same details.
          </h1>
          <div className="md:grid md:text-xl grid-cols-2 gap-4 md:p-10 max-w-screen-2xl mx-auto">
            <div class="form-row col-span-2">
        <label for="TeamName">Team Name:</label>
        <input
        className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
        style={{
          borderRadius: "14px",
          background: " rgba(0, 2, 13, 0.75)",
        }}
          type="text"
          id="TeamName"
          name="TeamName"
          placeholder="Enter team name"
          required
        />
      </div>
      <div class="form-row">
        <label for="TeamLeaderName">Team Leader Name:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="TeamLeaderName"
          name="TeamLeaderName"
          placeholder="Enter team leader name"
          required
        />
      </div>
      <div class="form-row">
        <label for="teamLeadEmail">Team Leader Email:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="email"
          id="teamLeadEmail"
          name="teamLeadEmail"
          placeholder="Enter team leader's email"
          required
        />
      </div>
      <div class="form-row">
        <label for="TeamLeadercllgName">Team Leader College Name:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="TeamLeadercllgName"
          name="TeamLeadercllgName"
          placeholder="Enter team leader College name"
          required
        />
      </div>
      <div class="form-row">
        <label for="teamLeadWhatsApp">Team Leader WhatsApp Number:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="tel"
          id="teamLeadWhatsApp"
          name="teamLeadWhatsApp"
          placeholder="Enter team leader's WhatsApp number"
          required
        />
      </div>
      <div class="form-row">
        <label for="teamLeadDiscord">Team Leader Discord ID:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="teamLeadDiscord"
          name="teamLeadDiscord"
          placeholder="Enter team leader's Discord ID"
          required
        />
      </div>
      <div class="form-row">
        <label for="teamLeadInGameID">Team Leader In-Game ID:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="teamLeadInGameID"
          name="teamLeadInGameID"
          placeholder="Enter team leader's in-game ID"
          required
        />
      </div>
      <div class="form-row">
        <label for="teamLeadRank">Team Leader Rank:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="teamLeadRank"
          name="teamLeadRank"
          placeholder="Enter team leader's rank"
          required
        />
      </div>
      <div class="form-row">
        <label for="teammate1Name">Teammate 1 Name:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="teammate1Name"
          name="teammate1Name"
          placeholder="Enter teammate 1's name"
          required
        />
      </div>
      <div class="form-row">
        <label for="teammate1ID">Teammate 1 ID:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="teammate1ID"
          name="teammate1ID"
          placeholder="Enter teammate 1's ID"
          required
        />
      </div>
      <div class="form-row">
        <label for="teammate1Rank">Teammate 1 Rank:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="teammate1Rank"
          name="teammate1Rank"
          placeholder="Enter teammate 1's rank"
          required
        />
      </div>
      <div class="form-row">
        <label for="teammate2Name">Teammate 2 Name:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="teammate2Name"
          name="teammate2Name"
          placeholder="Enter teammate 2's name"
          required
        />
      </div>
      <div class="form-row">
        <label for="teammate2ID">Teammate 2 ID:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="teammate2ID"
          name="teammate2ID"
          placeholder="Enter teammate 2's ID"
          required
        />
      </div>
      <div class="form-row">
        <label for="teammate2Rank">Teammate 2 Rank:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="teammate2Rank"
          name="teammate2Rank"
          placeholder="Enter teammate 2's rank"
          required
        />
      </div>
      <div class="form-row">
        <label for="teammate3Name">Teammate 3 Name:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="teammate3Name"
          name="teammate3Name"
          placeholder="Enter teammate 3's name"
          required
        />
      </div>
      <div class="form-row">
        <label for="teammate3ID">Teammate 3 ID:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="teammate3ID"
          name="teammate3ID"
          placeholder="Enter teammate 3's ID"
          required
        />
      </div>
      <div class="form-row">
        <label for="teammate3Rank">Teammate 3 Rank:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="teammate3Rank"
          name="teammate3Rank"
          placeholder="Enter teammate 3's rank"
          required
        />
      </div>
      <div class="form-row">
        <label for="teammate4Name">Teammate 4 Name:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="teammate4Name"
          name="teammate4Name"
          placeholder="Enter teammate 4's name"
          required
        />
      </div>
      <div class="form-row">
        <label for="teammate4ID">Teammate 4 ID:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="teammate4ID"
          name="teammate4ID"
          placeholder="Enter teammate 4's ID"
          required
        />
      </div>
      <div class="form-row">
        <label for="teammate4Rank">Teammate 4 Rank:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="teammate4Rank"
          name="teammate4Rank"
          placeholder="Enter teammate 4's rank"
          required
        />
      </div>
      <div class="form-row">
        <label for="substituteName">Substitute Name:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="substituteName"
          name="substituteName"
          placeholder="Enter substitute's name"
        />
      </div>
      <div class="form-row">
        <label for="substituteID">Substitute ID:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="substituteID"
          name="substituteID"
          placeholder="Enter substitute's ID"
        />
      </div>
      <div class="form-row">
        <label for="substituteRank">Substitute Rank:</label>
        <input
         className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
         style={{
           borderRadius: "14px",
           background: " rgba(0, 2, 13, 0.75)",
         }}
          type="text"
          id="substituteRank"
          name="substituteRank"
          placeholder="Enter substitute's rank"
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

export default DimensionalConquest;
