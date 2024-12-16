import React from "react";
import arts from '../../assets/studentlife/arts.JPG'
import annual from '../../assets/studentlife/AnnualDay2023.JPG'
import cultural from '../../assets/studentlife/culturalfets.JPG'
import science from '../../assets/studentlife/Scienceexhibition.JPG'
import Sports from '../../assets/studentlife/sports.JPG'

const StudentEvents = () => {
  const upcomingEvents = [
    {
      title: "Cultural Fest 2024",
      date: "March 15, 2024",
      description:
        "Join us for a day of music, dance, and cultural performances celebrating diversity and creativity.",
      image: cultural, // Replace with real image URLs
    },
    {
      title: "Science Exhibition",
      date: "April 20, 2024",
      description:
        "Explore innovative projects and experiments created by our talented students.",
      image:science,
    },
    {
      title: "Sports Day",
      date: "May 10, 2024",
      description:
        "A thrilling day of competitions and athletic events showcasing school spirit.",
      image: Sports,
    },
  ];

  const pastEvents = [
    {
      title: "Annual Day 2023",
      date: "November 12, 2023",
      description:
        "A night of celebration, awards, and unforgettable performances by our students.",
      image: annual,
    },
    {
      title: "Art Carnival",
      date: "October 5, 2023",
      description:
        "A vibrant showcase of artistic talent, featuring exhibitions and workshops.",
      image:arts,
    },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Upcoming Student Events
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
        Stay updated with the latest events on our campus. Join us and make
        every moment memorable!
      </p>

      {/* Upcoming Events Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {upcomingEvents.map((event, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{event.date}</p>
            <p className="text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>

      {/* Past Events Section */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Past Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {pastEvents.map((event, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{event.date}</p>
            <p className="text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-indigo-700 text-white p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-3xl font-extrabold mb-4">Be Part of the Action!</h3>
        <p className="text-lg mb-6">
          Join us in making these events memorable. Whether as a participant,
          volunteer, or guest, your presence makes a difference.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold shadow-md hover:bg-gray-100 transition duration-300">
          View All Events
        </button>
      </div>
    </div>
  );
};

export default StudentEvents;
