import React from "react";
import { Link } from "react-router-dom";

const facilities = [
  {
    icon: "🏫",
    title: "Modern Classrooms",
    path: "/facilities/modernclassroom",
    description: "Equipped with smart boards, projectors, and high-speed internet to create an engaging and interactive learning environment."
  },
  {
    icon: "📚",
    title: "Knowledge Center",
    path: "/facilities/knowledgecenter",
    description: "A hub for research, innovation, and self-paced learning with access to global resources."
  },
  {
    icon: "🧠",
    title: "Counseling Services",
    path: "/facilities/CounselingServices",
    description: "Professional guidance and support for students' mental health and career planning, ensuring holistic development."
  },
  {
    icon: "🍽️",
    title: "Cafeteria",
    path: "/cafeteria",
    description: "A hygienic and spacious cafeteria offering healthy and delicious food options, catering to diverse tastes."
  },
  {
    icon: "🚍",
    title: "Transportation",
    path: "/transportation",
    description: "Well-managed school buses with GPS tracking for safe and reliable commutes."
  },
  {
    icon: "🔒",
    title: "24/7 Security",
    path: "/security",
    description: "Round-the-clock surveillance and security personnel ensuring a safe campus environment."
  },
  {
    icon: "💻",
    title: "Technology",
    path: "/technology",
    description: "Advanced tech tools and labs to prepare students for the digital age, fostering innovation and digital skills."
  },
  {
    icon: "🍼",
    title: "Day Care Center",
    path: "/day-care-center",
    description: "A safe and caring environment for the little ones, enabling parents to focus on work or studies."
  },
  {
    icon: "⚕️",
    title: "Medicare",
    path: "/medicare",
    description: "On-campus medical facilities with trained staff to handle emergencies and provide routine health care."
  },
  {
    icon: "⚽",
    title: "Sports Complex",
    path: "/sports-complex",
    description: "State-of-the-art facilities for indoor and outdoor sports activities, promoting physical fitness and teamwork."
  },
  {
    icon: "🎨",
    title: "Art & Music Rooms",
    path: "/art-music-rooms",
    description: "Dedicated spaces to foster creativity in art, music, and dance, encouraging students to explore their artistic talents."
  },
  {
    icon: "🔬",
    title: "Science Labs",
    path: "/science-labs",
    description: "Fully equipped labs for physics, chemistry, and biology experiments, providing hands-on learning experiences."
  }
];


const Facilities = () => {
  return (
    <div className="bg-blue-100 py-16 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Facilities</h2>
        <p className="mt-4 text-gray-600 lg:text-lg">
          World-class facilities to ensure the best environment for students.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <Link
            key={index}
            to={facility.path}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-4 text-blue-500">{facility.icon}</div>
            <h3 className="text-xl font-bold text-gray-800">{facility.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{facility.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
