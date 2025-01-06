import React from "react";
import logo from '../../assets/faculty/group.jpg'
const FacultyHeader = () => {
  return (
    <header className="bg-white py-16 md:px-12">
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2 mr-5">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Meet Our Faculty
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            At <strong>Goal School</strong>, our educators bring expertise,
            passion, and a commitment to excellence, ensuring every student
            receives the best education possible.
          </p>
          <ul className="mt-6 space-y-3 text-md text-gray-700">
            <li className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
              Dedicated to academic excellence.
            </li>
            <li className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
              Focused on holistic development.
            </li>
            <li className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
              Experts in their respective fields.
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <img
            src={logo} // Replace with your actual image path
            alt="Faculty at Goal School"
            className="w-full h-96 rounded-lg shadow-md"
          />
        </div>
      </div>
    </header>
  );
};

export default FacultyHeader;
