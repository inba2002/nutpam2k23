import React from "react";
import "../footer.css";
import AnimatedCursor from "react-animated-cursor";
import SP from "../../Assets/visionxsample.pdf"
import "./regform.css";

function Visionx() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("src\Components\Registration\assets\Vision-XTemplateMU.pptx").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Vision-XTemplateMU.pptx";
        alink.click();
      });
    });
  };

  return (
    <>
      <div className="bg-visionxregbg p-10 bg-cover flex flex-col items-center justify-center">
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

        {/* $$$$$$$$default code */}

        <div className="reg-container">
          <h1 className="reg-title">
            Vision X <span> Registration </span>
          </h1>
          <h1 className="text-end p-10 text-white font-mono">
            Team Leader & Teammates are two separate participants, hence make
            sure not to give any wrong/same details.
          </h1>

          <form
            action="https://app.unoforms.xyz/submit/qb-__2_ucxi"
            method="post"
            class="team-form"
            className="form-container"
          >
            <div class="ip-container gspan-2">
              <label className="ip-title" for="teamName">
                Team Name <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="teamName"
                name="teamName"
                placeholder="Team Name"
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
                id="teamLeaderName"
                name="teamLeaderName"
                placeholder="Leader Name"
                required
              />
            </div>
            <div className="ip-container">
              <label className="ip-title" htmlFor="teammateCollegeName2">
                Team Leader College Name <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="teammateCollegeName2"
                name="teammateCollegeName2"
                placeholder="Teammate 2 College Name"
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
                id="teamLeadEmail"
                name="teamLeadEmail"
                placeholder="Team Leader Mail"
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
                id="teamLeadDept"
                name="teamLeadDept"
                placeholder="Team Leader Department"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teamLeadWhatsApp">
                Team Leader WhatsApp Number <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="tel"
                id="teamLeadWhatsApp"
                name="teamLeadWhatsApp"
                placeholder="Team Leader WhatsApp Number"
                required
              />
            </div>

            <div class="ip-container">
              <label className="ip-title" for="teammateName1">
                Teammate Name 1 <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="teammateName1"
                name="teammateName1"
                placeholder="Teammate Name 1"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teammateEmail1">
                Teammate 1 Email <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="email"
                id="teammateEmail1"
                name="teammateEmail1"
                placeholder="Teammate 1 Email"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teammateDept1">
                Teammate 1 Department <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="teammateDept1"
                name="teammateDept1"
                placeholder="Teammate 1 Department"
                required
              />
            </div>
            <div class="ip-container">
              <label className="ip-title" for="teammateWhatsApp1">
                Teammate 1 WhatsApp Number <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="tel"
                id="teammateWhatsApp1"
                name="teammateWhatsApp1"
                placeholder="Teammate 1 WhatsApp Number"
                required
              />
            </div>
            <div className="ip-container">
              <label className="ip-title" htmlFor="teammateName2">
                Teammate Name 2 
                {/* <span className="req">*</span> */}
              </label>
              <input
                className="ip-box"
                type="text"
                id="teammateName2"
                name="teammateName2"
                placeholder="Teammate Name 2"
                
              />
            </div>
            <div className="ip-container">
              <label className="ip-title" htmlFor="teammateEmail2">
                Teammate 2 Email 
                {/* <span className="req">*</span> */}
              </label>
              <input
                className="ip-box"
                type="email"
                id="teammateEmail2"
                name="teammateEmail2"
                placeholder="Teammate 2 Email"
                
              />
            </div>
            <div className="ip-container">
              <label className="ip-title" htmlFor="teammateCollegeName2">
                Team Leader College Name <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="teammateCollegeName2"
                name="teammateCollegeName2"
                placeholder="Teammate 2 College Name"
                required
              />
            </div>
            <div className="ip-container">
              <label className="ip-title" htmlFor="teammateDept2">
                Teammate 2 Department 
                {/* <span className="req">*</span> */}
              </label>
              <input
                className="ip-box"
                type="text"
                id="teammateDept2"
                name="teammateDept2"
                placeholder="Teammate 2 Department"
                
              />
            </div>
            {/* <div className="ip-container">
              <label className="ip-title" htmlFor="teammateYear2">
                Teammate 2 Year <span className="req">*</span>
              </label>
              <input
                className="ip-box"
                type="text"
                id="teammateYear2"
                name="teammateYear2"
                placeholder="Teammate 2 Year"
                required
              />
            </div> */}
            <div className="ip-container">
              <label className="ip-title" htmlFor="teammateWhatsApp2">
                Teammate 2 WhatsApp Number 
                {/* <span className="req">*</span> */}
              </label>
              <input
                className="ip-box"
                type="tel"
                id="teammateWhatsApp2"
                name="teammateWhatsApp2"
                placeholder="Teammate 2 Whatsapp No."
                
              />
            </div>
            <div className="text-white font-bold text-xl pt-8 flex items-center justify-center gspan-2">
            <a download="" className="underline underline-offset-4 decoration-blue-500" href={SP}>Click Here to Download the Sample PPT</a>
            </div>
            {/* <div className="ip-container flex items-center justify-center">
              <label className="ip-title flex items-center justify-center" htmlFor="teammateWhatsApp2">
                PPT Template will be shared from the event Team<span className="req">*</span>
              </label>
               <button className="flex items-center justify-center btn btn-primary" onClick={onButtonClick}>Download PPT</button>
            </div> */}

            <div className="flex items-center justify-center gspan-2">
              <button className="sub-button">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Visionx;
