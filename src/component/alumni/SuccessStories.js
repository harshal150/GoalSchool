import React, { useState, useRef } from "react";

import rakshita from "../../assets/About/Kids Section/1.jpeg";

const testimonials = [
    {
      name: "Aarav Sharma",
      batch: "Batch 2018-19",
      image: rakshita,
      quote: "Goal School has been the cornerstone of my personal and academic growth. The incredible faculty, supportive peers, and a plethora of extracurricular activities helped me discover my true potential. The school nurtured not only my intellect but also my creativity and leadership skills, enabling me to excel in every sphere of life. I owe my confidence and achievements to the strong foundation laid during my years here.",
    },
    {
      name: "Ishita Roy",
      batch: "Batch 2017-18",
      image: rakshita,
      quote: "Reflecting on my time at Goal School, I am overwhelmed with gratitude. The nurturing environment, coupled with excellent resources, made learning an exciting journey. From participating in debate competitions to organizing cultural fests, every experience enriched my personality and honed my skills. I carry the lessons and friendships I made here as my most cherished memories.",
    },
    {
      name: "Vikram Pillai",
      batch: "Batch 2015-16",
      image: rakshita,
      quote: "The years I spent at Goal School were nothing short of life-changing. The emphasis on holistic development and individual attention to every student made all the difference. The lessons in discipline, critical thinking, and teamwork have stayed with me throughout my professional life. Goal School is not just an institution; it's a family that empowers every child to succeed.",
    },
    {
      name: "Meera Iyer",
      batch: "Batch 2014-15",
      image: rakshita,
      quote: "Joining Goal School was the best decision my parents made for me. The teachers were more than just educators; they were mentors who inspired me to dream big and work hard. The vibrant learning atmosphere and innovative teaching methods prepared me for life beyond academics. I truly believe that Goal School shapes students into responsible, confident, and well-rounded individuals.",
    },
    {
      name: "Rohan Gupta",
      batch: "Batch 2020-21",
      image: rakshita,
      quote: "Even as a recent graduate, I can confidently say that Goal School has left a lasting impact on me. The values instilled and the friendships made during my time here have been invaluable. The school’s focus on discipline and curiosity created an environment where I could thrive academically and personally. I am proud to be an alumnus of such an incredible institution.",
    },
    {
      name: "Priya Malhotra",
      batch: "Batch 2019-20",
      image: rakshita,
      quote: "Goal School will always hold a special place in my heart. The support and encouragement from teachers and peers made it a safe space to learn and grow. I particularly loved the focus on cultural activities, which helped me explore my artistic side. My time here has shaped me into a confident individual ready to face the challenges of the world.",
    },
    {
      name: "Karan Desai",
      batch: "Batch 2021-22",
      image: rakshita,
      quote: "My experience at Goal School was extraordinary. The school gave me opportunities to explore my interests and provided constant support to pursue them. From science exhibitions to sports meets, the wide range of activities encouraged me to step out of my comfort zone. Today, as I look back, I realize how much these experiences have contributed to my personal and professional life.",
    },
  ];
  

const SuccessStories = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  return (
    <section className="py-16">
      <div className="mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Success Stories
        </h2>
        <h2 className="text-[10px] md:text-lg md:mx-36 font-normal text-center text-gray-700 mb-12">
        Here are some notable alumni who are out there making their dreams come true and making us proud too!


          </h2>
        <div
          ref={sliderRef}
          className="overflow-hidden relative cursor-default"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex gap-8 ${
              isHovered ? "animation-paused" : ""
            } flwrap md:flnowrap`}
            style={{
              animation: "slide 30s linear infinite",
              animationPlayState: window.innerWidth < 768 ? "paused" : "running", // Disable animation on mobile
            }}
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl p-8 transform transition md:w-[400px] md:h-[350px] duration-500 ease-in-out mb-3"
                style={{
                  flex: "0 0 auto",
                  minWidth: "300px",
                  maxWidth: "320px",
                  height: "400px",
                }}
              >
                <div className="flex items-center mb-6">
                  <img
                    className="w-16 h-16 rounded-full object-cover object-top border-1 border-black mr-4"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.batch}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animation-paused {
          animation-play-state: paused !important;
        }
        @media (max-width: 768px) {
          div[style*="animation: slide"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;
