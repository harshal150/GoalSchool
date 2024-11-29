import React, { useEffect, useRef, useState } from "react";
import vissioj from "../../assets/About/vission.jpg"; // Vision image
import Mission from "../../assets/About/mission.avif"; // Mission image

const VisionMission = () => {
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
            Our <span className="text-indigo-600">Vision</span>
          </h2>
          <p className="text-sm text-gray-700 font-semibold">
            To nurture a generation of confident, compassionate, and
            forward-thinking individuals by providing a dynamic and inclusive
            learning environment rooted in academic excellence, cultural values,
            and innovation. We envision empowering students to thrive in a
            global society, equipped with the skills, ethics, and resilience
            needed to shape a brighter future for themselves and the world.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div
        id="mission"
        ref={missionRef}
        className={`flex flex-wrap bg-green-100 items-center justify-between py-10 px-6 sm:px-12 lg:px-16 transition-transform duration-1000 ${
          visibleSections.mission
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90"
        }`}
      >
        {/* Left Side: Mission Text */}
        <div className="w-full lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            Our <span className="text-indigo-600">Mission</span>
          </h2>
          <p className="text-sm text-gray-700 font-semibold">
            To create a vibrant learning community where students are encouraged
            to explore their potential, develop critical thinking, and embrace a
            lifelong love for learning. Our mission is to provide a holistic
            education that balances academics, extracurricular activities, and
            character development, fostering responsible global citizens who
            contribute positively to society.
          </p>
        </div>

        {/* Right Side: Mission Image */}
        <div className="relative w-full lg:w-[500px] lg:pl-6">
          <div className="overflow-hidden rounded-tl-[180px] rounded-tr-[150px] rounded-br-[200px] rounded-bl-[50px]">
            <img
              src={Mission}
              alt="Mission"
              className="w-[90%] h-auto object-cover"
            />
          </div>
          {/* Circle Decoration */}
          {/* <div className="absolute -bottom-6 left-1 flex space-x-2">
            <div className="w-12 h-12 bg-[#FFD500] rounded-full"></div>
            <div className="w-6 h-6 bg-[#FF8C00] rounded-full"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
