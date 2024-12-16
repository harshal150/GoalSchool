import React from 'react';

const ClubsAndOrganizations = () => {
  const clubs = [
    {
      name: 'Debate Club',
      description:
        'Sharpen your critical thinking and public speaking skills by debating on contemporary issues.',
      icon: '🎤',
    },
    {
      name: 'Music Club',
      description:
        'Join fellow musicians to create, perform, and appreciate diverse musical styles.',
      icon: '🎵',
    },
    {
      name: 'Sports Club',
      description:
        'Engage in competitive and recreational sports to stay active and healthy.',
      icon: '⚽',
    },
    {
      name: 'Art Club',
      description:
        'Explore your creativity and express yourself through painting, drawing, and crafts.',
      icon: '🎨',
    },
    {
      name: 'Drama Club',
      description:
        'Discover the joy of acting and storytelling in our vibrant drama club.',
      icon: '🎭',
    },
    {
      name: 'Photography Club',
      description:
        'Capture memorable moments and develop your photography skills.',
      icon: '📸',
    },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Explore Our Clubs & Organizations
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
        Discover a wide range of clubs and organizations tailored to different
        interests. From creativity to competition, there’s something for
        everyone!
      </p>

      {/* Clubs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {clubs.map((club, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600 text-3xl">
              {club.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              {club.name}
            </h3>
            <p className="text-gray-600 text-center">{club.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-700 text-white p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-3xl font-extrabold mb-4">Start Your Journey!</h3>
        <p className="text-lg mb-6">
          Join a club today and experience the joy of learning, teamwork, and
          friendship.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold shadow-md hover:bg-gray-100 transition duration-300">
          Join a Club
        </button>
      </div>
    </div>
  );
};

export default ClubsAndOrganizations;
