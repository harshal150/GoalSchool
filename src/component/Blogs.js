import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import Footer from "./Footer";

import leadership from '../assets/blog/leadershipskil.jpg'
import usericon from '../assets/blog/usericonm.png'
import exampreparation from '../assets/blog/exampr.webp'
import extracurricular from '../assets/blog/extracurricular.jpg'
import stem from '../assets/blog/stemeducation.jpeg'

const blogs = [
  {
    title: "Importance of STEM Education in Schools",
    description:
      "Discover how STEM education helps students develop critical thinking, creativity, and problem-solving skills for the future.",
    author: "Mr Nandkishor Jha",
    date: "December 10, 2024",
    image:stem, // Replace with a real image
  },
  {
    title: "Benefits of Extracurricular Activities for Students",
    description:
      "Learn why extracurricular activities are essential for fostering leadership and teamwork among students.",
    author: "Mrs Savita Powar",
    date: "November 25, 2024",
    image: extracurricular, // Replace with a real image
  },
  {
    title: "Top 5 Tips for Exam Preparation",
    description:
      "Explore effective study tips to help students manage time, reduce stress, and excel during exam season.",
    author: "Mr Tejas Singh",
    date: "November 15, 2024",
    image: exampreparation, // Replace with a real image
  },
];

const BlogItem = ({ blog }) => {
  const { title, description, author, date, image } = blog;

  return (
    <article className="flex flex-col shadow-lg bg-white rounded-lg overflow-hidden pb-2 h-full">
      <img src={image} alt={title} className="h-auto w-full" />
      <div className="flex flex-col justify-between grow p-3 pb-8 lg:p-6">
        <div>
          <h4 className="font-medium text-2xl mb-1">{title}</h4>
          <p className="opacity-80 mb-2">
            <span className="mr-2 text-sm">
              By {" "}
              <a href="#!" className="text-blue-600 font-semibold text-sm">
                {author}
              </a>
            </span>
            <span>
              <FontAwesomeIcon icon={faClock} className="ml-1 " />{" "}
              <span className="text-sm">{date}</span>
            </span>
          </p>
          <p className="opacity-60 mt-3 mb-6 text-sm">{description}</p>
        </div>
        <div>
          <a
            href="#!"
            className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition"
          >
            Read More
          </a>
        </div>
      </div>
    </article>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired,
};

const FeaturedBlogItem = () => {
  return (
    <article>
      <div className="grid grid-cols-12 items-center gap-6">
        <div className="col-span-12 lg:col-span-7 lg:order-2">
          <img
            src={leadership} // Replace with a real image
            alt="Featured Blog"
            className="max-w-full h-auto rounded"
          />
        </div>
        <div className="col-span-12 lg:col-span-5 lg:order-1">
          <div className="mt-6 lg:mt-0 lg:pl-6">
            <h4 className="font-medium text-2xl md:text-[35px] md:leading-[45px] mb-2">
              Building Leadership Skills Through Student Councils
            </h4>
            <p className="md:text-lg opacity-60 mt-3 mb-6">
              Student councils play a vital role in schools, empowering students
              to lead initiatives, represent their peers, and develop leadership
              qualities that benefit their future endeavors.
            </p>
            <div className="text-base leading-5 flex items-center">
              <div className="mr-2">
                <img
                  src={usericon} // Replace with a real image
                  alt="Author"
                  className="h-auto max-w-full rounded-full border border-border"
                  width="47"
                />
              </div>
              <div className="opacity-80">
                <p>
                  By<b> Harshal Patil</b>
                </p>
                <p className="text-sm opacity-75">December 5, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const BlogPage = () => {
  return (
 <>
    <Navbar/>


    <section className="light py-14 md:py-24 text-stone-800 overflow-hidden">
      <div className="container md:px-8">
        {/* Page Heading */}
        <div className="grid grid-cols-12 justify-center">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:col-end-11 text-center">
            <h2 className="text-[32px] lg:text-[45px] leading-none font-bold mb-4">
              Explore the World of Learning
            </h2>
            <p className="text-lg font-medium opacity-80 lg:px-12 mb-9">
              From inspiring success stories to essential tips, discover
              insights that shape the future of education.
            </p>
            <a
              href="#!"
              className="bg-blue-600 hover:bg-opacity-90 text-white font-bold border border-blue-600 py-3 px-7 rounded transition"
            >
              View All Posts
            </a>
          </div>
        </div>

        {/* Featured Blog */}
        <div className="grid grid-cols-12 items-center mt-12 gap-6">
          <div className="col-span-12">
            <FeaturedBlogItem />
          </div>

          {/* Blog Posts */}
          {blogs.map((blog, i) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 h-full mt-6"
              key={i}
            >
              <BlogItem blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>



    <Footer/>
 </>
  );
};

export default BlogPage;
