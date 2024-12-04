import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/members/AramNayak2.jpg";

const PrincipleMessage = () => {
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
      className={`bg-gray-50 py-8 px-4 md:py-12 md:px-1 transform transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-xl capitalize md:text-3xl font-bold text-center text-indigo-800 mb-6">
      Chairman’s Message
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
          "Education is not the learning of facts, but the training 
          of the mind to think." – Albert Einstein 
          </p>
          <p className="mb-4">
          Dear Students, Parents, and Well-Wishers,
          </p>
          <p className="mb-4">
          It is with great pride and a deep sense of purpose that I 
welcome you to Goal International Public School, 
Manki. This school was founded with a singular vision: 
to bring world-class education to rural areas and 
empower young minds to achieve their full potential.           </p>
          <p className="mb-4">
          Education is the cornerstone of progress, and we 
believe every child, regardless of their location, 
deserves the opportunity to access high-quality learning. 
Our ICSE curriculum is designed to foster intellectual 
growth, creativity, and strong moral values, ensuring 
our students are prepared to meet the challenges of a 
rapidly changing world.           </p>
          <p className="mb-4">
          At Goal International, we are not just building a school; 
we are building a foundation for a brighter future. Our 
commitment is to provide an environment where 
students from rural communities can dream big, think 
globally, and excel in all walks of life. With state-of
the-art infrastructure, dedicated teachers, and a holistic 
approach to education, we strive to shape individuals 
who will contribute meaningfully to society.          </p>
          <p className=" mb-4">
          I encourage you to join us on this transformative 
journey, where tradition meets modernity and 
aspirations turn into achievements. Together, let us 
nurture leaders of tomorrow who will shine on global 
platforms while staying rooted in their values.          </p>
          <p className=" mb-1">
           warm regards,
          </p>

          {/* Name and Designation */}
          <div className="pt-4 border-t border-gray-300">
            <h2 className="text-xl font-bold text-gray-700">Mr. A R Nayak </h2>
            <p className="text-gray-500">Chairman <br></br>
            Goal International Public School, Manki</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipleMessage;
