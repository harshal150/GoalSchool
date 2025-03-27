import React from "react";
import { motion } from "framer-motion";
import deepa from '../../assets/faculty/senior-faculty/deepag.JPG'
import swati from '../../assets/faculty/senior-faculty/swati.JPG'
import deepa2 from '../../assets/faculty/senior-faculty/deepak.JPG'
import Alisha from '../../assets/faculty/senior-faculty/alisha.JPG'
import Vandana from '../../assets/faculty/senior-faculty/vandana.JPG'
import Akshita from '../../assets/faculty/senior-faculty/akshita.JPG'
import Swapnaja from '../../assets/faculty/senior-faculty/swapnaja.JPG'
import Shweta from '../../assets/faculty/senior-faculty/shweta.n.JPG'
import Shraddha from '../../assets/faculty/senior-faculty/shraddha.JPG'
import Savita from '../../assets/faculty/senior-faculty/savita.JPG'
import Rakshita from '../../assets/faculty/senior-faculty/rakshita.JPG'
import Priyanka from '../../assets/faculty/senior-faculty/priyanka.JPG'
import Pankaja from '../../assets/faculty/senior-faculty/pankaja.JPG'
import Divya from '../../assets/faculty/senior-faculty/divya.JPG'
import Sharon from '../../assets/faculty/senior-faculty/sheron.JPG'
import Poornima from '../../assets/faculty/senior-faculty/POORNIMA1.JPG'
import Pavitra from '../../assets/faculty/senior-faculty/pavitra.JPG'
import Pallavi from '../../assets/faculty/senior-faculty/pallavi.JPG'
import Megha from '../../assets/faculty/senior-faculty/meghana.JPG'
import Manjula from '../../assets/faculty/senior-faculty/manjula.JPG'
import Jayalaxmi from '../../assets/faculty/senior-faculty/jayalaxmi.JPG'
import Baby from '../../assets/faculty/senior-faculty/baby.JPG'
import Akshay from '../../assets/faculty/senior-faculty/akshay.1.JPG'
import Abhishek from '../../assets/faculty/senior-faculty/abhishek.JPG'
import Veena from '../../assets/faculty/senior-faculty/veena.JPG'
import Nivedita from '../../assets/faculty/senior-faculty/nivedita.1.JPG'
import Vanita from '../../assets/faculty/senior-faculty/vanita2.JPG'
import Prashant from '../../assets/faculty/senior-faculty/prashant.JPG'

const facultyData = [
  {
    name: "Mrs. Baby Benjamin",
    photo: Baby,
    designation: "History Teacher",
    experience: "9 years",
  },
  {
    name: "Ms. Poornima Naik",
    photo: Poornima,
    designation: "Kannada Teacher",
    experience: "9 years",
  },
  {
    name: "Ms. Manjula Mesta",
    photo: Manjula,
    designation: "Maths Teacher",
    experience: "8 years",
  },
  {
    name: "Mr. Prashant Naik",
    photo: Prashant,
    designation: "P.E Teacher",
    experience: "7 years",
  },
  {
    name: "Ms. Vanita Kharvi",
    photo: Vanita,
    designation: "English Teacher",
    experience: "7 years",
  },
  {
    name: "Mrs. Priyanka Naik",
    photo: Priyanka,
    designation: "Maths Teacher",
    experience: "4 years",
  },
  {
    name: "Mrs. Savita Gouda",
    photo: Savita,
    designation: "Kannada Teacher",
    experience: "3 years",
  },
  {
    name: "Ms. Nivedita Bhomkar",
    photo: Nivedita,
    designation: "Maths Teacher",
    experience: "3 years",
  },
  {
    name: "Mrs. Veena Harikanta",
    photo: Veena,
    designation: "Geography Teacher",
    experience: "3 years",
  },
  {
    name: "Ms. Deepa Gouda",
    photo: deepa,
    designation: "Hindi Teacher",
    experience: "3 years",
  },
  {
    name: "Ms. Shweta Naik",
    photo: Shweta,
    designation: "Kannada Teacher",
    experience: "3 years",
  },
  {
    name: "Mrs. Rakshita Devadiga",
    photo: Rakshita,
    designation: "EVS Teacher",
    experience: "2 years",
  },
  {
    name: "Mrs. Megha Naik",
    photo: Megha,
    designation: "Physics Teacher",
    experience: "2 years",
  },
  {
    name: "Mrs. Deepa Kelsi",
    photo: deepa2,
    designation: "English Teacher",
    experience: "2 years",
  },
  {
    name: "Ms. Alisha Dias",
    photo: Alisha,
    designation: "Biology Teacher",
    experience: "2 years",
  },
  {
    name: "Mr. D Akshay",
    photo: Akshay,
    designation: "Computer Teacher",
    experience: "2 years",
  },
  {
    name: "Mrs. Jayalaxmi Nair",
    photo: Jayalaxmi,
    designation: "Hindi Teacher",
    experience: "2 years",
  },
  {
    name: "Ms. Sharon Lopes",
    photo: Sharon,
    designation: "Value Education Teacher",
    experience: "2 years",
  },
  {
    name: "Mrs. Pallavi Achari",
    photo: Pallavi,
    designation: "Chemistry Teacher",
    experience: "2 years",
  },
  {
    name: "Ms. Swati Naik",
    photo: swati,
    designation: "Kannada Teacher",
    experience: "2 years",
  },
  {
    name: "Ms. Divya Revankar",
    photo: Divya,
    designation: "Physics Teacher",
    experience: "2 years",
  },
  {
    name: "Mrs. Pankaja Naik",
    photo: Pankaja,
    designation: "Hindi Teacher",
    experience: "2 years",
  },
  {
    name: "Ms. Shraddha Moger",
    photo: Shraddha,
    designation: "Maths Teacher",
    experience: "1 years",
  },
  {
    name: "Ms. Pavitra Naik",
    photo: Pavitra,
    designation: "EVS Teacher",
    experience: "1 years",
  },
  {
    name: "Ms. Vandana Fernandes",
    photo: Vandana,
    designation: "English Teacher",
    experience: "1 years",
  },
  {
    name: "Mr. Abhishek Kalas",
    photo: Abhishek,
    designation: "Physics Teacher",
    experience: "1 years",
  },
  {
    name: "Ms. Akshita Naik",
    photo: Akshita,
    designation: "EVS Teacher",
    experience: "1 years",
  },
  {
    name: "Mrs. Swapnaja Naik",
    photo: Swapnaja,
    designation: "Hindi Teacher",
    experience: "1 years",
  },
];


const SeniorFaculty = () => {
  return (
    <div className="bg-blue-50 py-12 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Senior Faculty (Class 1 to 10)
        </h2>

        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
>
  {facultyData.map((faculty, index) => (
    <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <img
        src={faculty.photo}
        alt={faculty.name}
        className="w-full h-60 object-top object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{faculty.name}</h3>
        <p className="text-sm text-gray-500">{faculty.designation}</p>
        <p className="text-gray-600 mt-1 text-sm">
          <strong>Experience:</strong> {faculty.experience}
        </p>
      </div>
    </div>
  ))}
</motion.div>

      </div>
    </div>
  );
};

export default SeniorFaculty;
