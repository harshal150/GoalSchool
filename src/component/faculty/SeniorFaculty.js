import React from "react";
import { motion } from "framer-motion";
import ome from "../../assets/members/AramNayak2.jpg";

const facultyData = [
  {
    name: "Dr. Sunil Mehta",
    photo: ome,
    designation: "Mathematics Teacher",
    classesHandled: "Class 6 to Class 10",
    experience: "12 years",
  },
  {
    name: "Mrs. Ritu Kapoor",
    photo: ome,
    designation: "Science Teacher",
    classesHandled: "Class 8 to Class 10",
    experience: "10 years",
  },
  {
    name: "Mr. Arvind Gupta",
    photo: ome,
    designation: "English Teacher",
    classesHandled: "Class 1 to Class 5",
    experience: "8 years",
  },
  {
    name: "Ms. Neha Verma",
    photo: ome,
    designation: "Hindi Teacher",
    classesHandled: "Class 3 to Class 8",
    experience: "9 years",
  },
  {
    name: "Dr. Karan Singh",
    photo: ome,
    designation: "Physics Teacher",
    classesHandled: "Class 9 and 10",
    experience: "14 years",
  },
  {
    name: "Mrs. Meena Roy",
    photo: ome,
    designation: "Chemistry Teacher",
    classesHandled: "Class 9 and 10",
    experience: "11 years",
  },
  {
    name: "Mr. Suresh Nair",
    photo: ome,
    designation: "Biology Teacher",
    classesHandled: "Class 6 to Class 10",
    experience: "15 years",
  },
  {
    name: "Ms. Priya Sharma",
    photo: ome,
    designation: "Social Studies Teacher",
    classesHandled: "Class 4 to Class 8",
    experience: "7 years",
  },
  {
    name: "Mrs. Anjali Desai",
    photo: ome,
    designation: "Art & Craft Teacher",
    classesHandled: "Class 1 to Class 5",
    experience: "6 years",
  },
  {
    name: "Mr. Rajiv Bhalla",
    photo: ome,
    designation: "Physical Education Teacher",
    classesHandled: "Class 1 to Class 10",
    experience: "13 years",
  },
  {
    name: "Mrs. Shalini Mehta",
    photo: ome,
    designation: "Computer Science Teacher",
    classesHandled: "Class 6 to Class 10",
    experience: "10 years",
  },
  {
    name: "Mr. Vishal Rao",
    photo: ome,
    designation: "Music Teacher",
    classesHandled: "Class 1 to Class 5",
    experience: "9 years",
  },
];

const SeniorFaculty = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Senior Faculty (Class 1 to 10)
        </h2>

        {/* Faculty Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {facultyData.map((faculty, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
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

export default SeniorFaculty;
