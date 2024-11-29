import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

const cards = [
  {
    title: "Best International School Award 2022",
  },
  {
    title: "Excellence in Sports Education 2021",
  },
  {
    title: "Top 10 Schools in Academic Excellence 2023",
  },
];

const CardItem = ({ item, isVisible }) => (
  <div
    className={`transform transition-all duration-1000 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    } bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200`}
  >
    <div className="mb-4">
      <img
        src="https://cdn.easyfrontend.com/pictures/logos/award-logo.png"
        alt="Award Logo"
        className="w-12 h-12 mx-auto"
      />
    </div>
    <h5 className="text-md font-semibold text-gray-800 text-center">
      {item.title}
    </h5>
  </div>
);

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

const Awards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-14 md:py-20 bg-white text-gray-700"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold md:text-[36px] text-blue-700">
            School Awards
          </h2>
          <p className="text-lg text-gray-500 mt-2">
            Celebrating excellence in education
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, i) => (
            <CardItem key={i} item={item} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
