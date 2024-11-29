import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Loader from "./component/loader/Loader";
import Home from "./pages/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import About from "./pages/About";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader when the route changes
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // Adjust timeout as needed
    return () => clearTimeout(timeout);
  }, [location]);

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
