import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Loader from "./component/loader/Loader";
import Home from "./pages/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import About from "./pages/about/About";
import Motto from "./pages/about/Motto";
import VissionMission from "./pages/about/VissionMission";
import Principlemsg from "./pages/about/Principlemsg";
import History from "./pages/about/History";
import EnquiryPage from "./pages/EnquiryPage";
import AdmissionProgramsPage from "./pages/AdmissionProgramsPage";
import GalleryPage from "./pages/resourcepages/GalleryPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import ModernClassroomsPage from "./pages/Facilities/ModernClassroomsPage";
import KnowledgeCenterPage from "./pages/Facilities/KnowledgeCenterPage";
import CounselingServicesPage from "./pages/Facilities/CounselingServicesPage";

// Custom hook to scroll to the top on route change
const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader when the route changes
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // Adjust timeout as needed
    return () => clearTimeout(timeout);
  }, [location]);

  // Scroll to top on route change
  useScrollToTop();

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/+918088335006`; // Add your WhatsApp number here
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="App">
      {loading && <Loader />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/motto" element={<Motto />} />
        <Route path="/visionmission" element={<VissionMission />} />
        <Route path="/principlemessage" element={<Principlemsg />} />
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/admissionprograms" element={<AdmissionProgramsPage />} />
        <Route path="/facilities" element={<FacilitiesPage />}></Route>
        <Route
          path="/facilities/modernclassroom"
          element={<ModernClassroomsPage />}
        />
        <Route
          path="/facilities/knowledgecenter"
          element={<KnowledgeCenterPage />}
        />
        <Route
          path="/facilities/CounselingServices"
          element={<CounselingServicesPage />}
        />
      </Routes>

      {/* WhatsApp Icon */}
      <div className="fixed bottom-8 right-8 z-50">
        <FontAwesomeIcon
          icon={faWhatsapp}
          size="3x"
          className="text-green-500 cursor-pointer hover:scale-110 transition-transform"
          onClick={handleWhatsAppClick}
        />
      </div>
    </div>
  );
}

export default App;
