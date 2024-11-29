import React from "react";
import one from '../assets/About/Kids Section/1.jpeg'
import two from '../assets/About/Kids Section/2.jpg'
import three from '../assets/About/Kids Section/3.jpg'
import four from '../assets/About/Kids Section/4.jpg'
import five from '../assets/About/Kids Section/5.jpg'
import six from '../assets/About/Kids Section/6.jpg'

const teamMembers = [
  {
    picture: five,
  },
  {
    picture: two,
  },
  {
    picture: three,
  },
  {
    picture: four,
  },
  {
    picture: one,
  },
  {
    picture: six,
  },
];

const TeamMemberItem = ({ member }) => (
  <div className="rounded-xl overflow-hidden cursor-pointer">
    <img
      src={member.picture}
      alt="Team Member"
      className="h-80 w-96 object-cover mx-auto" // Reduced height and width
    />
  </div>
);

const KidsGallery = () => {
  return (
    <section className="py-10 md:py-16 bg-white"> {/* Reduced top/bottom padding */}
      <div className="container px-4 mx-auto">
        <div className="flex justify-center mb-6 md:mb-10">
          <div className="max-w-lg text-center">
            <h2 className="text-2xl leading-none text-blue-500 font-bold md:text-3xl mb-4">
            Growing With Activities
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-4"> {/* Reduced gap between items */}
          {teamMembers.map((member, i) => (
            <div
              className="col-span-6 sm:col-span-3 lg:col-span-2 flex justify-center"
              key={i}
            >
              <TeamMemberItem member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KidsGallery;
