import React, { useState, useEffect, useRef } from "react";
import principle from '../../assets/About/Managment Team/Principle.avif';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Principal",
    image: principle,
    testimonial:
      "At our school, we believe in shaping young minds with values, knowledge, and the courage to face challenges. Our mission is to empower every student to achieve their dreams and make meaningful contributions to society. We foster a supportive environment where students develop their skills, confidence, and leadership qualities. Together, we aim to create a generation of compassionate, innovative, and responsible global citizens. Our focus on holistic development ensures students excel academically while gaining life skills that prepare them for the future. .",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Vice Principal",
    image: principle,
    testimonial:
      "Education is the key to unlocking the potential within every child. We strive to provide a nurturing environment where every student is encouraged to explore, learn, and grow into well-rounded individuals. Our focus on holistic development ensures students excel academically while gaining life skills that prepare them for the future. Through collaborative learning and innovative teaching methods, we inspire curiosity, creativity, and a love for knowledge in every student.",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Head of Curriculum",
    image: principle,
    testimonial:
      "Our commitment to excellence ensures that every child receives a comprehensive education that inspires and motivates them to succeed. We emphasize critical thinking, creativity, and a love for lifelong learning. By developing a dynamic and inclusive curriculum, we aim to meet the needs of diverse learners and equip them with the tools to navigate an ever-changing world. Our mission is to prepare students not only for academic success but also for meaningful contributions to society.",
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
    <div className="grid grid-cols-1 gap-6 bg-white p-6 mx-12 rounded-lg m-5">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
        Management Team
      </h2>
      {testimonials.map((member, i) => (
        <div
          key={member.id}
          id={member.id}
          ref={(el) => (sectionRef.current[i] = el)}
          className={`flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200 transform transition-transform duration-700 ease-out ${
            visibleIds.includes(member.id)
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* Left Side: Image */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-48 object-cover rounded-xl"
            />
          </div>

          {/* Right Side: Testimonial */}
          <div className="pr-5">
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-gray-500 italic">{member.role}</p>
            <p className="text-gray-700 mt-4 text-sm">{member.testimonial}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManagementTeam;
