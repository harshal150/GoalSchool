import React from "react";
import { motion } from "framer-motion";
import ome from "../../assets/members/AramNayak2.jpg";

const facultyData = [
  {
    name: "Mrs. Asha Kumar",
    photo: ome,
    designation: "Mathematics Teacher",
    classesHandled: "Nursery, LKG",
    experience: "10+ years",
  },
  {
    name: "Mr. Ravi Sharma",
    photo: ome,
    designation: "Science Teacher",
    classesHandled: "LKG, UKG",
    experience: "8 years",
  },
  {
    name: "Mrs. Priya Sen",
    photo: ome,
    designation: "English Teacher",
    classesHandled: "Nursery, UKG",
    experience: "5 years",
  },
  {
    name: "Mr. Arjun Patel",
    photo: ome,
    designation: "Art & Craft Teacher",
    classesHandled: "LKG, UKG",
    experience: "7 years",
  },
  {
    name: "Mrs. Meera Desai",
    photo: ome,
    designation: "Music Teacher",
    classesHandled: "Nursery, LKG",
    experience: "6 years",
  },
  {
    name: "Mr. Rajesh Nair",
    photo: ome,
    designation: "Physical Education Teacher",
    classesHandled: "UKG, Nursery",
    experience: "10 years",
  },
  {
    name: "Mrs. Kavita Reddy",
    photo: ome,
    designation: "Hindi Teacher",
    classesHandled: "LKG, UKG",
    experience: "9 years",
  },
  {
    name: "Ms. Anjali Verma",
    photo: ome,
    designation: "Social Skills Mentor",
    classesHandled: "Nursery, LKG",
    experience: "4 years",
  },
];

const KindergartenFaculty = () => {
  return (
    <div className="bg-yellow-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Kindergarten Faculty
        </h2>

        {/* Faculty Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {facultyData.map((faculty, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={faculty.photo}
                alt={faculty.name}
                className="w-full h-60 object-top object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{faculty.name}</h3>
                <p className="text-sm text-gray-500">{faculty.designation}</p>
                <p className="text-gray-600 mt-2 text-sm">
                  <strong>Classes:</strong> {faculty.classesHandled}
                </p>
                <p className="text-gray-600 mt-1 text-sm">
                  <strong>Experience:</strong> {faculty.experience}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default KindergartenFaculty;
