import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import techImg from '../../assets/Facilities/technology.avif'; // Update image path if needed

const features = [
  { text: "Smart classrooms equipped with interactive whiteboards." },
  { text: "High-speed internet access across the campus." },
  { text: "Dedicated computer labs with updated systems." },
  { text: "Access to online learning platforms and e-resources." },
  { text: "Tech-enabled learning tools for enhanced engagement." },
];

const FeatureItem = ({ item, index }) => {
  const { text } = item;
  return (
    <>
      <div className="mb-4">
        <FontAwesomeIcon
          icon={faCheck}
          className="fas fa-check text-indigo-600 mr-2 text-sm"
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

const Technology = () => {
  return (
    <>
      <section className="py-14 md:px-24 text-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-12 items-center gap-4 mb-12">
            {/* Text Section */}
            <div className="col-span-12 lg:col-span-6">
              <h1 className="text-2xl leading-none font-bold uppercase tracking-wider mb-2">
                Technology
              </h1>
              <hr className="bg-indigo-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
              <p className="opacity-70 mb-2 text-[14px]">
                At Goal School, technology plays a vital role in creating an innovative learning atmosphere. Our campus is fully equipped with the latest tech tools to support digital education and ensure students are future-ready.
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
                  src={techImg}
                  alt="Technology at School"
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

export default Technology;
