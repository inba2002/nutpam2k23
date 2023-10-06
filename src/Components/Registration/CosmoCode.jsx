import React from "react";
import AstroCapturerules from "../Events/AstroCapture/AstroCapture/AstroCapturerules";
import AnimatedCursor from "react-animated-cursor";

const CosmoCode = () => {
  return (
    <>
     <div className="bg-visionxformbg bg-cover h-screen flex flex-col items-center justify-center">
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
        action="https://app.unoforms.xyz/submit/szueUkkgaeQ"
        method="post"
        class="team-form"
        className="flex flex-col justify-center rounded-lg bg-white/0.2 backdrop-blur-sm  bg-transparent"
        style={{
          background: "rgba(0, 0, 0, 0.60)",
          borderRadius: "21px",
          backdropFilter: "blur(10px)",
        }}
      >
          <input type="hidden" name="event_name" value="CosmoCode" />
          <h1 className="md:text-4xl text-center p-5 text-white font-mono">
          Cosmo Code Registration
          </h1>
          <div className="md:grid md:text-xl grid-cols-2 gap-4 md:p-10 max-w-screen-2xl mx-auto">
          <div class="form-row col-span-2">
              <label for="CollegeName">College Name:</label>
              <input
                className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
                type="text"
                id="CollegeName"
                name="CollegeName"
                placeholder="College Name"
                style={{
                  borderRadius: "14px",
                  background: " rgba(0, 2, 13, 0.75)",
                }}
                required
              />
            </div>
            <div class="form-row">
              <label for="Name">Name:</label>
              <input
              className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="Name"
                name="Name"
                placeholder="Name"
                required
              />
            </div>
            <div class="form-row">
              <label for="Email">Email:</label>
              <input
              className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="email"
                id="Email"
                name="Email"
                placeholder="E-mail"
                required
              />
            </div>
            <div className="md:flex md:flex-row flex-col justify-between items-center ">
            <div class="form-row">
              <label for="Dept">Department:</label>
              <input
              className="input w-full md:w-3/4 h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="Dept"
                name="Dept"
                placeholder="Department"
                required
              />
            </div>
            <div class="form-row ">
              <label for="Year"> Year *:</label>
              <input
              className="input w-full md:w-7/8 h-16 rounded-xl px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="text"
                id="Year"
                name="Year"
                placeholder="Year"
                required
              />
            </div>
            </div>
            <div class="form-row">
              <label for="WhatsApp">WhatsApp Number:</label>
              <input
              className="input w-3/4 md:w-full h-16 rounded-xl md:px-4"
              style={{
                borderRadius: "14px",
                background: " rgba(0, 2, 13, 0.75)",
              }}
                type="tel"
                id="WhatsApp"
                name="WhatsApp"
                placeholder="WhatsApp number"
                required
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

export default CosmoCode;
