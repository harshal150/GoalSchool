import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";

const cards = [
  {
    count: 17,
    title: "Years of Excellence",
  },
  {
    count: 1267,
    title: "Students",
  },
  {
    count: 278,
    title: "Faculty Members",
  },
  {
    count: 355,
    title: "Employees Worldwide",
  },
];

const CardItem = ({ item, isVisible }) => (
  <div>
    <h2 className="font-bold text-2xl md:text-[45px] leading-none mb-4">
      {isVisible && <CountUp end={item.count} duration={2} />}
    </h2>
    <p className="text-base leading-none uppercase">
      <em>{item.title}</em>
    </p>
  </div>
);

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

const Numbers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Start the animation when the section is visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
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
      className="light py-16 md:py-16 text-white bg-cover bg-top bg-no-repeat relative overflow-hidden z-[1]"
      style={{
        backgroundImage:
          "url(https://cdn.easyfrontend.com/pictures/hero/hero_17.jpg)",
      }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 -z-[1]"
        style={{
          background:
            "linear-gradient(135deg,rgba(255, 65, 109, 0.85),rgba(255, 75, 43, 0.85))",
        }}
      />
      <div className="container px-4">
        <div className="grid grid-cols-12 text-center">
          {cards.map((item, i) => (
            <div
              className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8"
              key={i}
            >
              <CardItem item={item} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
