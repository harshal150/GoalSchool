// import React, { useState, useEffect } from "react";

// import bgImage3 from "../../assets/Header/bg5.jpg";

// import bgImage6 from "../../assets/Header/bg9.jpg";
// import { Icon } from "@iconify/react";

// const AboutHeroSection = () => {
//   const images = [ bgImage3, bgImage6];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <header
//       className="relative h-[83vh] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${images[currentIndex]})`,
//       }}
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/70"></div>

//       {/* Content */}
//       <div className="z-10 container px-4">
//         <div className="grid grid-cols-12">
//           <div className="col-span-12 md:col-span-9 lg:col-span-7 xl:col-span-6 lg:ml-16 lg:mt-60">

//           <h1 class="text-2xl md:text-4xl pl-2 my-2 border-l-4  font-sans font-bold border-blue-400 ">
//    About Us
// </h1>

//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default AboutHeroSection;




// import React, { useState, useEffect } from "react";

// import bgImage6 from "../../assets/About/childrens.jpeg";
// import { Icon } from "@iconify/react";

// const AboutHeroSection = () => {
//   const images = [bgImage6];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
// <div>
// <div className="flex flex-wrap">
//       <div className="w-full sm:w-8/12 mb-10">
//         <div className="container mx-auto h-full sm:p-10">
//           <nav className="flex px-4 justify-between items-center">
//             {/* <div className="text-3xl font-bold">
//               About <span className="text-green-700"> Us</span>
//             </div> */}
//             <h1 class="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-blue-400 ">
//     About Us
//  </h1>
//             <div>
//               <img
//                 src="https://image.flaticon.com/icons/svg/497/497348.svg"
//                 alt=""
//                 className="w-8"
//               />
//             </div>
//           </nav>
//           <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
//             <div className="w-full">
//               <h1 className="text-2xl lg:text-3xl font-semibold">
//                 A place where education meets innovation, inspiring every child
//                 to achieve greatness
//               </h1>
//               <div className="w-20 h-1 bg-green-700 my-4" />
//               <p className="text-md mb-10">
//                 At Goal International Public School, education goes beyond
//                 knowledge transfer. Our mission is to nurture creativity,
//                 critical thinking, adaptability, and resilience in our students,
//                 preparing them for a rapidly changing world.
//               </p>

//               <button className="navbutton bg-blue-600 text-white  rounded-md flex items-center hover:bg-blue-700 transition duration-300">
//                 Learn more
//               </button>
//             </div>
//           </header>
//         </div>
//       </div>
//       <img
//         src={bgImage6}
//         alt="Leafs"
//         className="w-full h-36 object-cover sm:h-[83vh] sm:w-4/12"
//       />
//     </div>

//     <div className="custom-shape-divider-bottom-1732866938">
//     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
//         <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
//     </svg>
// </div>
// <style>{`.custom-shape-divider-bottom-1732866938 {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     overflow: hidden;
//     line-height: 0;
// }

// .custom-shape-divider-bottom-1732866938 svg {
//     position: relative;
//     display: block;
//     width: calc(100% + 1.3px);
//     height: 50px;
// }

// .custom-shape-divider-bottom-1732866938 .shape-fill {
//     fill: #FFFFFF;
// }`}</style>
// </div>

    
//   );
// };

// export default AboutHeroSection;



import React, { useState, useEffect } from "react";
import bgImage6 from "../../assets/About/childrens.jpeg";

const AboutHeroSection = () => {
  const images = [bgImage6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      {/* Main Content */}
      <div className="flex flex-wrap relative">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <h1 className="text-2xl md:text-3xl pl-2 my-2 mt-6 border-l-4 font-sans font-bold border-blue-400">
                About Us
              </h1>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-2xl lg:text-3xl font-semibold capitalize">
                  A place where <span className="text-orange-500">education meets innovation</span>, inspiring every child to achieve greatness
                </h1>
                <div className="w-20 h-1 bg-green-700 my-4" />
                <p className="text-sm mb-10">
                  At Goal International Public School, education goes beyond
                  knowledge transfer. Our mission is to nurture creativity,
                  critical thinking, adaptability, and resilience in our
                  students, preparing them for a rapidly changing world.
                </p>

                <button className="navbutton bg-blue-600 text-white rounded-md flex items-center hover:bg-blue-700 transition duration-300 px-4 py-2">
                  Learn more
                </button>
              </div>
            </header>
          </div>
        </div>
        <img
          src={bgImage6}
          alt="Leafs"
          className="w-full h-36 object-cover sm:h-[96vh] sm:w-4/12 hidden md:block"
        />
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-[1] hidden md:block">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default AboutHeroSection;
