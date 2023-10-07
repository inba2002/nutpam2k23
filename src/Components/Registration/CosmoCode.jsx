import React from "react";
import AstroCapturerules from "../Events/AstroCapture/AstroCapture/AstroCapturerules";
import AnimatedCursor from "react-animated-cursor";

import "./regform.css";

const CosmoCode = () => {
  return (
    <>
      <div className="bg-cosmocoderegbg p-10 bg-cover h-[200vh] md:h-[150vh] flex flex-col items-center justify-center">
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
            Cosmo Code <span> Registration </span>
          </h1>

          <form
            action="https://app.unoforms.xyz/submit/szueUkkgaeQ"
            method="post"
            class="team-form"
            className="form-container"
            style={{ marginTop: "3rem" }}
          >
            <input type="hidden" name="event_name" value="CosmoCode" />

            <div class="ip-container gspan-2">
              <label className="ip-title" for="CollegeName">
                College Name <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="CollegeName"
                name="CollegeName"
                placeholder="College Name"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="Name">
                Name <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="Name"
                name="Name"
                placeholder="Name"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="Email">
                Email <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="email"
                id="Email"
                name="Email"
                placeholder="E-mail"
                required
              />
            </div>

            <div class="ip-container">
              <label className="ip-title" for="Dept">
                Department <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="Dept"
                name="Dept"
                placeholder="Department"
                required
              />
            </div>
            <div class="ip-container ">
              <label className="ip-title" for="Year">
                Year <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="Year"
                name="Year"
                placeholder="Year"
                required
              />
            </div>

            <div class="ip-container gspan-2">
              <label className="ip-title" for="WhatsApp">
                WhatsApp Number <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="tel"
                id="WhatsApp"
                name="WhatsApp"
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

export default CosmoCode;
