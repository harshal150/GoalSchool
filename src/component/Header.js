



import React, { useState, useEffect } from "react";
import bgImage from "../assets/Header/bg3.jpg";
import bgImage2 from "../assets/Header/bg4.jpg";
import bgImage3 from "../assets/Header/bg5.jpg";
import bgImage4 from "../assets/Header/bg7.jpg";
import bgImage5 from "../assets/Header/bg8.jpg";
import bgImage6 from "../assets/Header/bg9.jpg";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import './Header.css'

const Header = () => {
  const images = [bgImage, bgImage2, bgImage3, bgImage4, bgImage5, bgImage6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

const navigate = useNavigate();
const handelClick = () => {
  navigate('/admissionprograms')
}

  return (
    <header
      className="relative h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-black/80"></div>

      {/* Content */}
      <div className="z-10 container px-4">
        <div className="grid grid-cols-14">
          <div className="col-span-12 md:col-span-9 lg:col-span-7 xl:col-span-6 lg:ml-1">
            <h3 className="text-[16px] leading-snug md:text-3xl font-bold tracking-wider mb-5">
              Welcome to{" "}
              <span className="text-green-500">Goal International Public School</span>
            </h3>
            <h2 className="text-[42px] capitalize leading-snug md:text-5xl font-bold tracking-wider mb-6">
              India's Best <br />
              <span className="capitalize mt-2">International School</span>
            </h2>
            <div className="md:mr-40 lg:mr-48 lg:mt-10">
              <button onClick={handelClick} className="navbutton bg-blue-600 text-white py-2 px-6 rounded-md flex items-center hover:bg-blue-700 transition duration-300">
                Admissions Open for AY 2025-2026
                <Icon
                  icon="flowbite:arrow-right-outline"
                  width="16"
                  height="16"
                  style={{ color: "white", marginLeft: "8px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
