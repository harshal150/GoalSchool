import React from 'react';
import { useState } from 'react';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const ProfilePage = () => {
  const [user, setUser] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
  });

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      {/* Left Sidebar */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-1/3 h-full p-6 text-white flex flex-col justify-center items-center shadow-lg">
        <div className="bg-white border-4 border-blue-400 rounded-full w-48 h-48 flex items-center justify-center shadow-md overflow-hidden">
          <span className="text-blue-800 text-2xl font-bold">JD</span>
        </div>
        <h2 className="text-4xl font-semibold mt-6">{user.name}</h2>
        <p className="text-lg mt-2">{user.email}</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg mt-6 shadow-md transition-transform transform hover:scale-105">
          Edit Profile
        </button>
      </div>

      {/* Main Content */}
      <div className="w-2/3 h-full p-8 overflow-y-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">User Details</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-semibold mb-1">Name:</label>
            <p className="text-gray-800 text-lg font-medium">{user.name}</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-semibold mb-1">Email:</label>
            <p className="text-gray-800 text-lg font-medium">{user.email}</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-semibold mb-1">Phone:</label>
            <p className="text-gray-800 text-lg font-medium">{user.phone}</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-semibold mb-1">Address:</label>
            <p className="text-gray-800 text-lg font-medium">{user.address}</p>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
