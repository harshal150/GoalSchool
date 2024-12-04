import React from "react";
import building from '../../assets/About/Kids Section/7.jpg'


const History = () => {
	return (
        <section className=" bg-teal-50">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-xl font-bold text-green-600 sm:text-3xl">
                Our History
              </h2>
              <p className="mt-4 text-gray-600 text-sm font-semibold">
              Goal International Public School,founded in 2016 by Shri A. R. 
              Nayak, was established with a clear vision to provide quality 
and global education to rural students in the Honnavar region. 
Shri A R Nayak, a visionary leader, recognized the need for an 
educational institution that could offer students from rural areas 
the same high standards of learning found in more urbanized 
centers.
              </p>
              <p className="mt-4 text-gray-600 text-sm font-semibold">
              The school stands as the only ICSE-affiliated institution in 
Honnavar Taluk, ensuring that students have access to a globally 
recognized curriculum. Since its inception, the school has aimed 
to foster holistic development, blending academic excellence 
with a focus on values, personality development, and cultural 
awareness.
              </p>
              <p className="mt-4 text-gray-600 text-sm font-semibold">
              Today, Goal International Public School continues to fulfill its 
mission of empowering students, preparing them for challenges 
both locally and globally, and nurturing the leaders of tomorrow.
              </p>
              {/* <div className="mt-8">
                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
                  Learn more about us
                  <span className="ml-2">→</span>
                </a>
              </div> */}
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src={building}
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
	);
};

export default History