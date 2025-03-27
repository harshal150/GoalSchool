import React from "react";
import "./EnquiryPopUp.css";
import { useNavigate } from "react-router-dom";
const EnquiryPopUp = ({ onClose }) => {
  const naviget = useNavigate();

  const handleClick=() => {
     naviget("/enquiry");
  }
  
  return (
    <div className="popup-overlay">
      <div className="popup-card">
        {/* Close Button */}
        <button className="popup-close-button" onClick={onClose}>
          &times;
        </button>

        <p className="popup-heading">Admissions Open for AY 2025-26</p>
        <button className="popup-button" onClick={handleClick}>Enquiry Now</button>
      </div>
    </div>
  );
};

export default EnquiryPopUp;
