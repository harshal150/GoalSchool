


import React from "react";
import PropTypes from "prop-types";
import kindergarten from '../assets/admissions/kindergarten.jpg'
import class1 from '../assets/admissions/class1-10.jpg'
import highschool from '../assets/admissions/college.jpg'
import { Link } from "react-router-dom";

const portfolios = [
    {
      img: kindergarten,
      title: "Kindergarten",
      text: "Our Kindergarten program provides a nurturing and fun environment, focusing on the early development of children. It’s designed to help kids grow socially, emotionally, and cognitively through engaging activities and play-based learning.",
      color: "blue",
    },
    {
      img: class1,
      title: "Class I-X",
      text: "Classes I to X offer a comprehensive curriculum that balances academics with extracurricular activities. Our goal is to foster intellectual curiosity, critical thinking, and a love for learning, preparing students for future challenges.",
      color: "green",
    },
    // {
    //   img:highschool,
    //   title: "Class XI-XII",
    //   text: "Classes XI and XII provide a focused and in-depth education, preparing students for college and future careers. With specialized subject offerings and personalized guidance, we aim to equip students with the skills and knowledge to succeed.",
    //   color: "Red",
    // },
  ];
  
const PortfolioItem = ({ item, index }) => {
	const { img, title, text, color } = item;
	return (
		<div className="flex flex-col gap-6 max-w-7xl mt-6 mx-auto shadow-xl  hover:shadow-2xl transition-shadow cursor-pointer rounded-3xl">
			<div
				className={`grid grid-cols-12 bg-${color}-100 bg-opacity-30 rounded-xl p-6 md:p-12`}
			>
				<div
					className={`col-span-12 lg:col-span-5 ${
						index % 2 === 0 && "order-2"
					}`}
				>
					<div
						className={`bg-${color}-100 bg-opacity-75 flex justify-center items-center p-4 rounded-xl`}
					>
						<img src={img} alt="" className="max-w-full w-full h-auto" />
					</div>
				</div>
				<div className="col-span-12 lg:col-span-7">
					<div className="mt-6 lg:mt-0 lg:px-12 text-center lg:text-start h-full flex flex-col justify-center">
						<h5 className="text-2xl md:text-[30px] leading-tight font-bold mb-4">
							{title}
						</h5>
						<p className="leading-loose opacity-80 mb-6 lg:pr-12 text-sm font-bold">{text}</p>
						<div>
							<button className="font-bold bg-blue-600 text-white px-5 py-2 hover:bg-opacity-90 duration-300 rounded inline-flex">
								Learn More
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

PortfolioItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number,
};

const AdmissionPrograms = () => {
	return (

<div className="z-30">
    
<div className="items-center text-center mx-auto mt-4 lg:mt-10">
						<h2 className="text-2xl text-center  md:text-[32px] font-bold text-blue-500">
							Admissions
						</h2>
					</div>
<div className=" py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
        
          <h2 className="text-sm md:text-2xl font-bold text-yellow-500 mb-6">
            Admissions Open For Academic Year 2025-2026 (Kindergarten to Std X)
          </h2>
         
          <p className="text-sm font-semibold text-gray-500 mx-auto max-w-6xl sm:px-10">
          Goal International Public School, founded in 2016 by Shri A. R. 
Nayak, was established with a clear vision to provide quality 
and global education to rural students in the Honnavar region. 
Shri A R Nayak, a visionary leader, recognized the need for an 
educational institution that could offer students from rural areas 
the same high standards of learning found in more urbanized 
centers. 
The school stands as the only ICSE-affiliated institution in 
Honnavar Taluk, ensuring that students have access to a globally 
recognized curriculum. Since its inception, the school has aimed 
to foster holistic development, blending academic excellence 
with a focus on values, personality development, and cultural 
awareness.          </p>
        </div>
        
      </div>

          <div className="items-center mt-5 text-center mx-auto">
          <Link
            to="/enquiry"
            className="inline-block bg-green-400 text-white py-1 px-4 rounded-lg text-sm font-semibold mb-6 hover:bg-green-500 transition duration-300"
          >
            CLICK HERE FOR ENQUIRY
          </Link>
					</div>
		<section className="ezy__portfolio16 light py-14 md:py-12 text-zinc-900 ">
        
			<div className="container px-4 mx-auto">
				<div className="flex justify-between items-center max-w-7xl mx-auto">


                
					{/* <div className="items-center text-center mx-auto">
						<h2 className="text-2xl text-center  md:text-[32px] font-bold text-blue-500">
							Academic Programs 
						</h2>
					</div> */}
					{/* <div className="w-1/3 text-end">
						<button className="font-bold bg-blue-600 text-white px-8 py-3 hover:bg-opacity-90 duration-300 rounded">
							See All
						</button>
					</div> */}
				</div>
				{portfolios.map((item, i) => (
					<PortfolioItem item={item} index={i + 1} key={i} />
				))}
			</div>
		</section>
</div>
	);
};
export default AdmissionPrograms;