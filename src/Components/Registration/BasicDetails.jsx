import React, { useState } from "react";
import Visionx from "./Visionx";
import Aistronomy from "./Aistronomy";
import CosmoCode from "./CosmoCode";
import PixelLegacy from "./PixelLegacy";
import SpaceOdyssey from "./SpaceOdyssey";
import DimensionalConquest from "./DimensionalConquest";

const BasicDetails = () => {
  const events = ["visionX", "AIstronomy", "CosmoCode", "PixelLegacy", "SpaceOdyssey", "DimensionalConquest"];
  const [select, setSelect] = useState("");

  const containerStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '10px',
    padding: '20px',
    width: '50vw',  // Set width to 100vw for full viewport width
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    margin: 'auto'
  };

  const inputStyle = {
    width: '100%', // Set input fields to 100% width
    margin: '0 auto',
    height: '81px',
    flexShrink: '0',
    borderRadius: '14px',
    background: 'rgba(0, 2, 13, 0.75)',
    padding: '20px',
    color: 'white',
    fontSize: '18px',
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    background: 'linear-gradient(to right, #FFD700, #FF6347)',
    color: 'white',
    cursor: 'pointer',
    transition: '0.3s'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column', // Align input fields vertically within the form
  };

  const handleButtonClick = (e) => {
    setSelect(e);
  };

  return (
    <div style={containerStyle}>
      <div>Nutpam Basic Details</div>
      <form className="flex justify-center flex-col" style={formStyle}>
        <input type="text" style={inputStyle} name="name" placeholder="NAME" />
        <input type="text" style={inputStyle} name="collegeName" placeholder="COLLEGE" />
        <input type="text" style={inputStyle} name="dept" placeholder="Department" />
        <select style={inputStyle} name="year">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input type="email" style={inputStyle} name="email" placeholder="EMAIL" />
        <input type="number" style={inputStyle} name="phoneNumber" placeholder="PHONE NUMBER" />
        <div className="flex flex-col">
          {events.map((e, i) => {
            return (
              <button
                key={i}
                type="button"
                onClick={() => handleButtonClick(e)}
                style={{ ...buttonStyle, background: select === e ? 'rgba(255, 255, 255, 0.3)' : buttonStyle.background }}
              >
                {e}
              </button>
            );
          })}
        </div>
      </form>
      {select && select === "visionX" && <Visionx />}
      {select && select === "AIstronomy" && <Aistronomy />}
      {select && select === "CosmoCode" && <CosmoCode />}
      {select && select === "PixelLegacy" && <PixelLegacy />}
      {select && select === "SpaceOdyssey" && <SpaceOdyssey />}
      {select && select === "DimensionalConquest" && <DimensionalConquest />}
    </div>
  );
};

export default BasicDetails;