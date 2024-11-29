import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/principle.avif";

const PrincipleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`bg-gray-50 py-8 px-4 md:py-12 md:px-1 transform transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-xl capitalize md:text-3xl font-bold text-center text-indigo-800 mb-6">
        From The Principal's Desk
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-lg rounded-lg p-4 md:p-8">
        {/* Image Section */}
        <div className="col-span-1 md:col-span-1 flex items-start">
          <img
            className="w-36 h-48 md:w-60 md:h-60 rounded-md shadow-md"
            src={logo}
            alt="Dr. Manila Carvalho, Principal"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="col-span-2 text-gray-600 text-md leading-relaxed">
          <p className="mb-4 italic font-semibold">
            “The goal of education is not merely to increase the amount of knowledge but to create the possibilities for a child to invent and discover, to create individuals capable of doing new things.” – Jean Piaget
          </p>
          <p className="mb-4">
            At <strong>Goal International Public School</strong>, education goes beyond knowledge transfer. Our mission is to nurture creativity, critical thinking, adaptability, and resilience in our students, preparing them for a rapidly changing world.
          </p>
          <p className="mb-4">
            With state-of-the-art infrastructure and highly qualified faculty, we provide a balanced blend of academics and co-curricular activities, fostering holistic development and unlocking every student's potential.
          </p>
          <p className="mb-4">
            We are committed to instilling core values such as empathy, compassion, and environmental consciousness, shaping responsible and conscientious citizens of tomorrow.
          </p>
          <p className=" mb-4">
            Wishing each one of you a year filled with meaningful learning and growth.
          </p>
          <p className=" mb-1">
          With warm regards,
          </p>

          {/* Name and Designation */}
          <div className="pt-4 border-t border-gray-300">
            <h2 className="text-xl font-bold text-gray-700">Mrs Savita Powar</h2>
            <p className="text-gray-500">Principal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipleMessage;
