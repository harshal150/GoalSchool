import React from "react";
import { Icon } from "@iconify/react";
import one from '../assets/1.jpg'
import two from '../assets/2.avif'
import three from '../assets/3.avif'
const FeaturesSection = () => {
  const features = [
    {
      icon: one,
      title: "Cambridge Curriculum",
      hoverColor: "hover:bg-green-100",
    },
    {
      icon: two,
      title: "Personalized Learning Experience",
      hoverColor: "hover:bg-red-100",
    },
    {
      icon: three,
      title: "Quality Education",
      hoverColor: "hover:bg-violet-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white  mx-12 rounded-lg shadow-lg z-50 cursor-pointer m-5">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center p-6 transition-all duration-300 ${feature.hoverColor}`}
        >
          {/* <Icon icon={feature.icon} width="48" height="48" className="mb-4 text-teal-500" /> */}
          <img src={feature.icon} alt="" className="h-16 w-16 mb-4 rounded-2xl  "  />
          <h3 className="text-lg font-semibold text-gray-800 text-center">{feature.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
