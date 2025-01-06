import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import imagebg from '../../assets/Facilities/knowledge.jpg'; // Update image path as needed
import BooksList from "./BooksList";
const features = [
  { text: "Extensive library with physical and digital resources." },
  { text: "Dedicated study pods for focused learning." },
  { text: "Access to global databases and online research tools." },
  { text: "Librarians to guide students in finding relevant materials." },
  { text: "Collaborative spaces for group projects and discussions." },
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

const KnowledgeCenter = () => {
  return (
  <>
      <section className="py-14 md:px-24 text-zinc-900">
      <div className="container px-4">
        <div className="grid grid-cols-12 items-center gap-4 mb-12">
          {/* Text Section */}
          <div className="col-span-12 lg:col-span-6">
            <h1 className="text-2xl leading-none font-bold uppercase tracking-wider mb-2">
              Library
            </h1>
            <hr className="bg-blue-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
            <p className="opacity-70 mb-2 text-[14px]">
              Our Library is the hub of learning and research at Goal School. 
              It offers an extensive collection of resources, advanced tools for research, 
              and collaborative spaces to encourage innovation and self-paced learning.
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
                alt="Library"
                className="max-w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <BooksList/>
  </>
  );
};

export default KnowledgeCenter;
