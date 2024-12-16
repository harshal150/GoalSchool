


import React from "react";
import PropTypes from "prop-types";
import mentor from '../../assets/Alumni/mentoring.jpg'
import careertalk from '../../assets/Alumni/carrerstalk.avif'
// import highschool from '../assets/admissions/college.jpg'
import { Link } from "react-router-dom";

const portfolios = [
    {
      img: mentor,
      title: "Be A Mentor",
      text: "We believe mentoring is a great opportunity for Alumni to develop new skills and have a chance to share the benefit of their experience with young Alumnus. As a Alumni mentor, you can help current Alumnus find out more about the reality of courses, college admissions, certain jobs, sectors and professions based on your personal experiences.",
      color: "blue",
    },
    {
      img: careertalk,
      title: "Give A Career Talk",
      text: "Share your career experience with young Alumnus and inspire them to achieve their goals and reach their full potential. We believe Alumnus would benefit tremendously from hearing from alumni who have ‘been there and done that’ and are able to give invaluable advice by sharing their experiences working in a particular role or sector.",
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
						
					>
						<img src={img} alt="" className="max-w-full w-full h-auto rounded-2xl" />
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
								I Am Interested
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

const MentorAndGuidance = () => {
	return (

<div className="z-30">
    
<div className="items-center text-center mx-auto mt-4 lg:mt-10">
						<h2 className="text-2xl text-center  md:text-[32px] font-bold text-blue-500">
                        Giving Back To School
						</h2>
					</div>
<div className=" py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
        
          <h2 className="text-[10px] md:text-lg md:mx-36 font-normal text-gray-500 mb-2">
          Your relationship with Goal International Public School doesn't end once you graduate. You can stay
          involved by giving back in a variety of ways.
          </h2>
         
       
       
        </div>
        
      </div>

       
		<section className="ezy__portfolio16 light py-14 md:py-12 text-zinc-900 ">
        
			<div className="container px-4 mx-auto">
				<div className="flex justify-between items-center max-w-7xl mx-auto">


              
				</div>
				{portfolios.map((item, i) => (
					<PortfolioItem item={item} index={i + 1} key={i} />
				))}
			</div>
		</section>
</div>
	);
};
export default MentorAndGuidance;

