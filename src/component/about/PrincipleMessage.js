import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/Header/bg4.jpg";

const AboutPrincipleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`bg-blue-100 py-8 px-4 md:py-12 md:px-1 transform transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-xl capitalize md:text-3xl font-bold text-center text-indigo-800 mb-6">
        Principal's Message
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 shadow-lg rounded-lg p-4 md:p-8">
        {/* Image Section */}
        <div className="col-span-1 md:col-span-1 flex items-start">
          <img
            className="w-36 h-48 md:w-60 md:h-64 rounded-md shadow-md bg-contain"
            src={logo}
            alt="Dr. Manila Carvalho, Principal"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="col-span-2 text-gray-600 text-md leading-relaxed">
          <p className="mb-4 italic font-semibold">
            "Education is the most powerful weapon which you can use to change
            the world." – Nelson Mandela
          </p>
          <p className="mb-4">
            Dear Students, Parents, and Esteemed Members of the GIPS Family,
          </p>
          <p className="mb-4">
            It is with great pride and joy that I welcome you to Goal
            International Public School, Manki. At GIPS, we are committed to
            nurturing young minds, fostering curiosity, and equipping our
            students with the tools they need to excel in an ever-changing
            world.{" "}
          </p>
          <p className="mb-4">
            Education at GIPS goes beyond academics. We believe in shaping
            individuals who are not only knowledgeable but also empathetic,
            responsible, and visionary. Our dedicated faculty works tirelessly
            to create an engaging and supportive environment where every student
            feels valued and inspired to achieve their potential.{" "}
          </p>
          <p className="mb-4">
            We blend a rigorous academic curriculum with a vibrant array of
            co-curricular and extracurricular activities, aiming for the
            holistic development of each child. Whether it's excelling in the
            classroom, on the sports field, or in creative endeavors, our
            students are encouraged to dream big and strive for excellence in
            every pursuit.
          </p>
          <p className=" mb-4">
            At GIPS, we also prioritize values such as integrity, respect, and
            compassion, ensuring that our students grow into well-rounded
            individuals who contribute positively to society. Together with
            parents and the community, we aspire to instill a lifelong love for
            learning in our students and prepare them to face the future with
            confidence and resilience.{" "}
          </p>
          <p className=" mb-4">
            As Swami Vivekananda once said, "Arise, awake, and stop not until
            the goal is reached." This powerful message encourages us to pursue
            our dreams with determination, perseverance, and dedication, values
            that we instill in every student who walks through our doors.{" "}
          </p>
          <p className=" mb-4">
            Let us work hand in hand to make GIPS a beacon of knowledge,
            innovation, and character building. Thank you for your trust and
            support in shaping the leaders of tomorrow.{" "}
          </p>
          <p className=" mb-1">warm regards,</p>

          {/* Name and Designation */}
          <div className="pt-4 border-t border-gray-300">
            <h2 className="text-xl font-bold text-gray-700">
              Mrs. Savita Vivek Powar{" "}
            </h2>
            <p className="text-gray-500">
              Principal <br></br>
              Goal International Public School, Manki
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPrincipleMessage;
