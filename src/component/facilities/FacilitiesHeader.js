import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import imagebg from '../../assets/Facilities/schoolFacilities.avif'
const features = [
  { text: "State-of-the-art classrooms with modern technology." },
  { text: "A vast library and knowledge center for research." },
  { text: "Top-notch sports and extracurricular facilities." },
  { text: "Professional counseling and support services." },
  { text: "Safe and secure campus environment." },
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
        <span className="opacity-75 text-sm">{text}</span>
      </div>

      {index !== features.length && <hr className="w-11/12 my-2" />}
    </>
  );
};

FeatureItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const FacilitiesHeader = () => {
  return (
    <section className="py-14 md:px-24  text-zinc-900">
      <div className="container px-4">
        <div className="grid grid-cols-12 items-center gap-4 mb-12">
          {/* Text Section */}
          <div className="col-span-12 lg:col-span-6">
            <h6 className="font-medium opacity-70 mb-2">Hello Visitor,</h6>
            <h1 className="text-3xl leading-none font-bold uppercase tracking-wider mb-2">
              Welcome to Goal School
            </h1>
            <hr className="bg-blue-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
            <p className="opacity-70 mb-2">
              At Goal School, we believe in empowering young minds and shaping
              bright futures. Our facilities are designed to provide a
              well-rounded educational experience, fostering academic excellence
              and personal growth.
            </p>
            <ul className="flex flex-col mt-5">
              {features.map((item, i) => (
                <li key={i}>
                  <FeatureItem item={item} index={i + 1} />
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <button className="bg-gray-900 text-white hover:bg-opacity-90 rounded-md px-5 py-2 transition">
                Explore Facilities
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="col-span-12 lg:col-span-6">
            <div className="mt-12 lg:mt-0">
              <img
                src={imagebg}
                alt="School Facilities"
                className="max-w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesHeader;
