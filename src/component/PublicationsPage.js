import React from "react";
import annual from '../assets/publications/annual.JPG'
import science from '../assets/publications/scienceExhibition.JPG'
import newsletter from '../assets/publications/newsletter.JPG'
import Navbar from "./Navbar";
import Footer from "./Footer";
const PublicationsPage = () => {
  const publications = [
    {
      id: 1,
      title: "Annual School Magazine 2024",
      description: "A collection of essays, poems, and artwork by students.",
      image: annual,
      link: "#",
    },
    {
      id: 2,
      title: "Science Fair Research 2023",
      description: "Compilation of projects and findings from our science fair.",
      image: science,
      link: "#",
    },
    {
      id: 3,
      title: "Monthly Newsletter - December 2024",
      description: "Updates, events, and announcements for the month.",
      image: newsletter,
      link: "#",
    },
  ];

  return (
    <>
<Navbar/>
<div className="min-h-screen p-6 md:mt-5">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Our Publications</h1>
        <p className="text-gray-600 mt-2">
          Explore our school's latest magazines, newsletters, and research work.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {publications.map((publication) => (
          <div
            key={publication.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={publication.image}
              alt={publication.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {publication.title}
              </h2>
              <p className="text-gray-600 mt-2">{publication.description}</p>
              <a
                href={publication.link}
                className="block mt-4 text-indigo-600 font-bold hover:text-indigo-800"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
<Footer/>

    </>

  );
};

export default PublicationsPage;
