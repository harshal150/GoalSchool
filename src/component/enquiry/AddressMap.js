import React from "react";

const AddressMap = () => {
  return (
    <div className="google-map-container flex justify-center items-center overflow-hidden ">
      <div className="map-wrapper w-full max-w-full md:p-12 sm:p-6  shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241.76252359400104!2d74.486856!3d14.183039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc38da891cef09%3A0x80290e07da3bd790!2sGoal%20International%20School!5e0!3m2!1sen!2sin!4v1734940487605!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

     
      </div>
    </div>
  );
};

export default AddressMap;
