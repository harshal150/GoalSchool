import React from "react";
import "./EnquiryPopUp.css";

const EnquiryPopUp = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-card">
        {/* Close Button */}
        <button className="popup-close-button" onClick={onClose}>
          &times;
        </button>

        <p className="popup-heading">Admissions Open for AY 2024-25</p>
        <button className="popup-button">Enquiry Now</button>
      </div>
    </div>
  );
};

export default EnquiryPopUp;
