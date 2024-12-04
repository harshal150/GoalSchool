import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import Awards from "../component/Awards";
import Footer from "../component/Footer";
import EnquiryPopUp from "../component/enquiry/EnquiryPopUp";
import Marquee from "../component/Marquee";
import FeaturesSection from "../component/FeaturesSection";
import PrincipleMessage from "../component/DirectorsMessage";
import Numbers from "../component/Numbers";
import Tagline from "../component/Tagline";
const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true); // Show popup after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div>
    {/* <Marquee/> */}
      <Navbar />
      <Header />
      <FeaturesSection/>
      <PrincipleMessage/>
      <Numbers/>
      <Tagline/>
      <Awards />
      <Footer />
      {showPopup && <EnquiryPopUp onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Home;
