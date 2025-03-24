import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import transportImg from '../../assets/Facilities/transportation.jpg'; // Update path if needed

const features = [
  { text: "Safe and punctual transport facility covering major city areas." },
  { text: "GPS-enabled buses for real-time tracking by parents." },
  { text: "Trained drivers and support staff ensuring student safety." },
  { text: "Well-maintained buses with regular safety checks." },
  { text: "Emergency contact system available on each vehicle." },
];

const FeatureItem = ({ item, index }) => {
  const { text } = item;
  return (
    <>
      <div className="mb-4">
        <FontAwesomeIcon
          icon={faCheck}
          className="fas fa-check text-yellow-600 mr-2 text-sm"
        />
        <span className="opacity-75 text-[12px]">{text}</span>
      </div>

      {index !== features.length - 1 && <hr className="w-11/12 my-2" />}
    </>
  );
};

FeatureItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const Transportation = () => {
  return (
    <>
      <section className="py-14 md:px-24 text-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-12 items-center gap-4 mb-12">
            {/* Text Section */}
            <div className="col-span-12 lg:col-span-6">
              <h1 className="text-2xl leading-none font-bold uppercase tracking-wider mb-2">
                Transportation
              </h1>
              <hr className="bg-yellow-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
              <p className="opacity-70 mb-2 text-[14px]">
                Our transportation service ensures a safe, comfortable, and timely commute for students and staff. With well-planned routes and trained personnel, we provide peace of mind to parents and reliable travel for all.
              </p>
              <ul className="flex flex-col mt-5 text-[12px]">
                {features.map((item, i) => (
                  <li key={i}>
                    <FeatureItem item={item} index={i} />
                  </li>
                ))}
              </ul>
            </div>
            {/* Image Section */}
            <div className="col-span-12 lg:col-span-6">
              <div className="mt-12 lg:mt-0">
                <img
                  src={transportImg}
                  alt="School Transportation"
                  className="max-w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <TransportRoutes /> Optional component to show routes, stops, timings */}
    </>
  );
};

export default Transportation;
