import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import imagebg from '../../assets/Facilities/classrooms.avif'; // Update image path as needed

const features = [
  { text: "Smart boards and interactive displays for engaging lessons." },
  { text: "High-speed internet for seamless learning experiences." },
  { text: "Ergonomic furniture for student comfort and focus." },
  { text: "Audio-visual aids to enhance teaching and presentations." },
  { text: "Flexible seating arrangements to foster collaboration." },
];

const FeatureItem = ({ item, index }) => {
  const { text } = item;
  return (
    <>
      <div className="mb-4">
        <FontAwesomeIcon
          icon={faCheck}
          className="fas fa-check text-blue-600 mr-2 text-sm"
        />
        <span className="opacity-75 text-[12px]">{text}</span>
      </div>

      {index !== features.length && <hr className="w-11/12 my-2" />}
    </>
  );
};

FeatureItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const ModernClassrooms = () => {
  return (
    <section className="py-14 md:px-24 text-zinc-900">
      <div className="container px-4">
        <div className="grid grid-cols-12 items-center gap-4 mb-12">
          {/* Text Section */}
          <div className="col-span-12 lg:col-span-6">
            <h1 className="text-2xl leading-none font-bold uppercase tracking-wider mb-2">
              Modern Classrooms
            </h1>
            <hr className="bg-blue-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
            <p className="opacity-70 mb-2 text-[14px]">
              Our modern classrooms are equipped with cutting-edge technology and 
              designed to create a dynamic and interactive learning environment. 
              We believe in empowering students through innovative teaching methods 
              that make learning more effective and enjoyable.
            </p>
            <ul className="flex flex-col mt-5 text-[12px]">
              {features.map((item, i) => (
                <li key={i}>
                  <FeatureItem item={item} index={i + 1} />
                </li>
              ))}
            </ul>
          </div>
          {/* Image Section */}
          <div className="col-span-12 lg:col-span-6">
            <div className="mt-12 lg:mt-0">
              <img
                src={imagebg}
                alt="Modern Classrooms"
                className="max-w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernClassrooms;
