import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import securityImg from '../../assets/Facilities/security.webp'; // Update image path as needed

const features = [
  { text: "Round-the-clock security with trained personnel." },
  { text: "CCTV surveillance across the entire campus." },
  { text: "Strict visitor entry protocols with ID verification." },
  { text: "Regular patrolling and monitoring of premises." },
  { text: "Emergency response systems and first-aid ready." },
];

const FeatureItem = ({ item, index }) => {
  const { text } = item;
  return (
    <>
      <div className="mb-4">
        <FontAwesomeIcon
          icon={faCheck}
          className="fas fa-check text-red-600 mr-2 text-sm"
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

const Security = () => {
  return (
    <>
      <section className="py-14 md:px-24 text-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-12 items-center gap-4 mb-12">
            {/* Text Section */}
            <div className="col-span-12 lg:col-span-6">
              <h1 className="text-2xl leading-none font-bold uppercase tracking-wider mb-2">
                24/7 Security
              </h1>
              <hr className="bg-red-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
              <p className="opacity-70 mb-2 text-[14px]">
                We prioritize the safety of every student and staff member at Goal School. Our campus is under 24/7 surveillance and security measures to ensure a safe and secure learning environment at all times.
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
                  src={securityImg}
                  alt="24/7 Campus Security"
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

export default Security;
