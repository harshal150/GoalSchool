import React, { useEffect, useRef, useState } from "react";
import vissioj from "../../assets/About/vission.jpg"; // Vision image
import Mission from "../../assets/About/mission.avif"; // Mission image

const Motto = () => {
  const [visibleSections, setVisibleSections] = useState({
    vision: false,
    mission: false,
  });

  const visionRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "vision") {
              setVisibleSections((prev) => ({ ...prev, vision: true }));
            } else if (entry.target.id === "mission") {
              setVisibleSections((prev) => ({ ...prev, mission: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (visionRef.current) observer.observe(visionRef.current);
    if (missionRef.current) observer.observe(missionRef.current);

    return () => {
      if (visionRef.current) observer.unobserve(visionRef.current);
      if (missionRef.current) observer.unobserve(missionRef.current);
    };
  }, []);

  return (
    <div>
      {/* Vision Section */}
      <div
        id="vision"
        ref={visionRef}
        className={`bg-[#FFF8F0] flex flex-wrap items-center justify-between py-10 px-6 sm:px-12 lg:px-16 transition-transform duration-1000 ${
          visibleSections.vision ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {/* Left Side: Vision Image */}
        <div className="relative w-full lg:w-[500px] mb-8 lg:mb-0 lg:pr-6">
          <div className="overflow-hidden rounded-tl-[180px] rounded-tr-[150px] rounded-br-[200px] rounded-bl-[50px]">
            <img
              src={vissioj}
              alt="Vision"
              className="w-[90%] h-auto object-cover"
            />
          </div>
          {/* Circle Decoration */}
          <div className="absolute -bottom-6 right-1 flex space-x-2">
            <div className="w-12 h-12 bg-[#FFD500] rounded-full"></div>
            <div className="w-6 h-6 bg-[#FF8C00] rounded-full"></div>
          </div>
        </div>

        {/* Right Side: Vision Text */}
        <div className="w-full lg:w-1/2 lg:pl-6">
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            Our <span className="text-indigo-600">Motto</span>
          </h2>
          <p className="mb-4 italic text-gray-700 font-semibold">
          "Education is not the learning of facts, but the training 
          of the mind to think." – Albert Einstein 
          </p>
          <p className="text-sm text-gray-700 font-semibold">
          This motto reflects the school's dedication to delivering the 
highest quality education and empowering rural children with 
global opportunities.
          </p>
        </div>
      </div>

  
    </div>
  );
};

export default Motto;
