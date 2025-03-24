import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import daycareImg from '../../assets/Facilities/daycare.jpg'

const features = [
  { text: "Safe and nurturing environment for young children." },
  { text: "Trained caregivers and support staff available throughout the day." },
  { text: "Age-appropriate learning and play activities." },
  { text: "Nutritious meals and proper rest schedules." },
  { text: "Real-time updates and communication with parents." },
];

const FeatureItem = ({ item, index }) => {
  const { text } = item;
  return (
    <>
      <div className="mb-4">
        <FontAwesomeIcon
          icon={faCheck}
          className="fas fa-check text-pink-600 mr-2 text-sm"
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

const DayCareCenter = () => {
  return (
    <>
      <section className="py-14 md:px-24 text-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-12 items-center gap-4 mb-12">
            {/* Text Section */}
            <div className="col-span-12 lg:col-span-6">
              <h1 className="text-2xl leading-none font-bold uppercase tracking-wider mb-2">
                Day Care Center
              </h1>
              <hr className="bg-pink-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
              <p className="opacity-70 mb-2 text-[14px]">
                Our Day Care Center provides a loving and secure space for young children while their parents are at work. With structured routines, learning through play, and caring supervision, we ensure every child feels at home.
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
                  src={daycareImg}
                  alt="Day Care Center"
                  className="max-w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DayCareCenter;
