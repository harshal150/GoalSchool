import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import imagebg from '../../assets/Facilities/counselling.avif'; // Update image path as needed

const features = [
  { text: "Professional counselors for student support." },
  { text: "Personalized guidance for academic planning." },
  { text: "Mental health resources and workshops." },
  { text: "Career counseling for future readiness." },
  { text: "Confidential and safe environment for discussions." },
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

const CounselingServices = () => {
  return (
    <section className="py-14 md:px-24 text-zinc-900">
      <div className="container px-4">
        <div className="grid grid-cols-12 items-center gap-4 mb-12">
          {/* Text Section */}
          <div className="col-span-12 lg:col-span-6">
            <h1 className="text-2xl leading-none font-bold uppercase tracking-wider mb-2">
              Counseling Services
            </h1>
            <hr className="bg-blue-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
            <p className="opacity-70 mb-2 text-[14px]">
              Our Counseling Services provide essential support to students, addressing their emotional, social, and academic needs. We aim to foster a nurturing environment where students can thrive personally and academically.
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
                alt="Counseling Services"
                className="max-w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounselingServices;
