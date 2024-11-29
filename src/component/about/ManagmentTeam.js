import React, { useState, useEffect, useRef } from "react";
import principle from "../../assets/About/Managment Team/Principle.avif";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Principal",
    image: principle,
    testimonial:
      "At our school, we believe in shaping young minds with values, knowledge, and the courage to face challenges. Our mission is to empower every student to achieve their dreams and make meaningful contributions to society. We foster a supportive environment where students develop their skills, confidence, and leadership qualities.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Vice Principal",
    image: principle,
    testimonial:
      "Education is the key to unlocking the potential within every child. We strive to provide a nurturing environment where every student is encouraged to explore, learn, and grow into well-rounded individuals. Our focus on holistic development ensures students excel academically while gaining life skills that prepare them for the future.",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Head of Curriculum",
    image: principle,
    testimonial:
      "Our commitment to excellence ensures that every child receives a comprehensive education that inspires and motivates them to succeed. We emphasize critical thinking, creativity, and a love for lifelong learning.",
  },
];

const ManagementTeam = () => {
  const [visibleIds, setVisibleIds] = useState([]);
  const sectionRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleIds((prev) => [...prev, parseInt(entry.target.id)]);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
        Management Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((member, i) => (
          <div
            key={member.id}
            id={member.id}
            ref={(el) => (sectionRef.current[i] = el)}
            className={`flex flex-col items-center md:flex-row bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200 transform transition-transform duration-700 ease-out ${
              visibleIds.includes(member.id)
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Left Side: Image */}
            <div className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Right Side: Testimonial */}
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{member.role}</p>
              <p className="text-sm text-gray-700">{member.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagementTeam;
