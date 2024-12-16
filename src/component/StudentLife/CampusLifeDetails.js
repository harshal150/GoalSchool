import React from 'react';
import campuslifephoto from '../../assets/studentlife/campuslife.jpg'
const CampusLifeDetails = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Welcome to Our Campus Life
      </h2>

      <p className="text-md text-gray-700 leading-relaxed mb-8 text-center md:mx-20">
        Discover a vibrant campus that fosters academic growth, personal
        development, and lifelong friendships. Our facilities, activities, and
        services are designed to provide an enriching experience for every
        student.
      </p>

      {/* Highlighted Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl cursor-pointer">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-3.86 0-7 3.14-7 7a7 7 0 0014 0c0-3.86-3.14-7-7-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            State-of-the-Art Facilities
          </h3>
          <p className="text-gray-600">
            Modern classrooms, advanced laboratories, and well-equipped
            libraries to nurture academic excellence.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl cursor-pointer">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V7a2 2 0 00-2-2h-4l-2-2H8l-2 2H2v6m16 8H6a2 2 0 01-2-2m0 0h16a2 2 0 01-2 2m-5-3h5"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Comfortable Hostels
          </h3>
          <p className="text-gray-600">
            Safe and welcoming accommodations for students to feel at home
            while staying on campus.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl cursor-pointer">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h11M9 21V3M17 16l4-4m0 0l-4-4m4 4H9"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Extracurricular Activities
          </h3>
          <p className="text-gray-600">
            From sports to arts, our campus offers a variety of activities to
            engage every student.
          </p>
        </div>
      </div>

      {/* Image and Text Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <img
            src={campuslifephoto}
            alt="Campus"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            A Space to Learn, Explore, and Grow
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our campus isn't just about academics—it's about creating a holistic
            environment where students can thrive. With state-of-the-art
            facilities, inspiring architecture, and lush greenery, it’s the
            perfect place to unlock potential.
          </p>
          <button className="items-center text-[#1053F3] justify-center rounded-lg border border-[#6A65FF] px-4 py-2 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 bg-[#5138EE]/10">
            Learn More
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-indigo-700 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer">
        <h3 className="text-3xl font-extrabold mb-4">
          Ready to Join the Campus Life?
        </h3>
        <p className="text-lg mb-6">
          Be a part of a community that values learning, growth, and success.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold shadow-md hover:bg-gray-100 transition duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default CampusLifeDetails;
