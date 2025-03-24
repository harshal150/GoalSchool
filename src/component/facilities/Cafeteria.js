import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import cafeteriaImg from '../../assets/Facilities/cafeteria.webp'; // Update path if needed

const features = [
  { text: "Nutritious and hygienic meals prepared daily." },
  { text: "Spacious seating with clean and pleasant ambiance." },
  { text: "Separate meal plans for students and staff." },
  { text: "Availability of healthy snacks and beverages." },
  { text: "Strict adherence to food safety standards." },
];

const FeatureItem = ({ item, index }) => {
  const { text } = item;
  return (
    <>
      <div className="mb-4">
        <FontAwesomeIcon
          icon={faCheck}
          className="fas fa-check text-green-600 mr-2 text-sm"
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

const Cafeteria = () => {
  return (
    <>
      <section className="py-14 md:px-24 text-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-12 items-center gap-4 mb-12">
            {/* Text Section */}
            <div className="col-span-12 lg:col-span-6">
              <h1 className="text-2xl leading-none font-bold uppercase tracking-wider mb-2">
                Cafeteria
              </h1>
              <hr className="bg-green-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
              <p className="opacity-70 mb-2 text-[14px]">
                Our Cafeteria is a vibrant and inviting space where students and staff can enjoy nutritious, balanced meals. With a focus on hygiene and health, it offers a wide variety of food options in a relaxed atmosphere.
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
                  src={cafeteriaImg}
                  alt="Cafeteria"
                  className="max-w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <MenuList /> Add your cafeteria menu display here */}
    </>
  );
};

export default Cafeteria;
