import React from "react";
import { motion } from "framer-motion";
import ome from "../../assets/members/AramNayak2.jpg";
import  bharati from '../../assets/faculty/Pre-Primary/bharati.JPG'
import  Azmin from '../../assets/faculty/Pre-Primary/azmin.JPG'
import  Sushmita from '../../assets/faculty/Pre-Primary/sushmita.JPG'
import  Veronica from '../../assets/faculty/Pre-Primary/veronica.JPG'
import  Roslin from '../../assets/faculty/Pre-Primary/glanet.JPG'
import  Sangeeta from '../../assets/faculty/Pre-Primary/sangeeta.JPG'
import  Shweta from '../../assets/faculty/Pre-Primary/shweta.g.JPG'
import  Supriya from '../../assets/faculty/Pre-Primary/supriya.JPG'
import  Hemalata from '../../assets/faculty/Pre-Primary/hemalata.1.JPG'

const facultyData = [
  {
    name: "Mrs. Hemalata Prabhu",
    photo: Hemalata,
    designation: "English Teacher",
    classesHandled: "Nursery, LKG",
    experience: "9 years",
  },
  {
    name: "Mrs. Shweta Naik",
    photo: Shweta,
    designation: "English Teacher",
    classesHandled: "LKG, UKG",
    experience: "4 years",
  },
  {
    name: "Ms. Veronica Gonsalves",
    photo: Veronica,
    designation: "EVS Teacher",
    classesHandled: "LKG, UKG",
    experience: "2 years",
  },
  {
    name: "Mrs. Bharati Naik",
    photo: bharati,
    designation: "Mathematics Teacher",
    classesHandled: "Nursery, LKG",
    experience: "2 years",
  },
  {
    name: "Mrs. Azmin Shaikh",
    photo: Azmin,
    designation: "English Teacher",
    classesHandled: "LKG, UKG",
    experience: "1 years",
  },
  {
    name: "Ms. Sushmita Naik",
    photo: Sushmita,
    designation: "EVS Teacher",
    classesHandled: "Nursery, UKG",
    experience: "1 years",
  },
  
  {
    name: "Ms. Roslin Fernandes",
    photo: Roslin,
    designation: "GK Teacher",
    classesHandled: "Nursery, LKG",
    experience: "1 years",
  },
  {
    name: "Mrs. Sangeeta Jalisatgi",
    photo: Sangeeta,
    designation: "English Teacher",
    classesHandled: "UKG, Nursery",
    experience: "1 years",
  },
 
  {
    name: "Ms. Supriya Naik",
    photo: Supriya,
    designation: "Gk Mentor",
    classesHandled: "Nursery, LKG",
    experience: "1 years",
  },
];

const KindergartenFaculty = () => {
  return (
    <div className="bg-yellow-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8 capitalize">
         Pre-Primary Teachers
        </h2>

        {/* Faculty Grid */}
        <motion.div
         
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"
        >
          {facultyData.map((faculty, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
             
            >
              <img
                src={faculty.photo}
                alt={faculty.name}
                className="w-full h-60 object-top object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{faculty.name}</h3>
                <p className="text-sm text-gray-500">{faculty.designation}</p>
                {/* <p className="text-gray-600 mt-2 text-sm">
                  <strong>Classes:</strong> {faculty.classesHandled}
                </p> */}
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
