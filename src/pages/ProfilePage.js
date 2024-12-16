import React, { useState } from 'react';

const ProfilPage = () => {
  const [user, setUser] = useState({
    name: 'Vineet Mishra',
    email: 'Vinnet@dexpert.com',
    phone: '',
    website: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* User Profile Card */}
          <div className="card bg-white shadow-lg rounded-lg p-6">
            <div className="account-settings">
              <div className="user-profile text-center items-center mx-auto">
                <div className="user-avatar mx-auto mb-4 items-center align-middle text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full border-4 border-gray-200 shadow-md"
                  />
                </div>
                <h5 className="text-2xl font-bold text-gray-800">{user.name}</h5>
                <h6 className="text-sm text-gray-500">{user.email}</h6>
              </div>
              <div className="about text-center mt-6">
                <h5 className="text-lg font-medium text-blue-600">About</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  I&#39;m Veeeenet. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.
                </p>
              </div>
            </div>
          </div>

          {/* User Details Form */}
          <div className="col-span-2 card bg-white shadow-lg rounded-lg p-6">
            <h6 className="text-xl font-semibold text-blue-600 mb-6">Personal Details</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={user.name}
                  onChange={handleInputChange}
                  className="form-control mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={user.email}
                  onChange={handleInputChange}
                  className="form-control mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter email ID"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  value={user.phone}
                  onChange={handleInputChange}
                  className="form-control mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  value={user.website}
                  onChange={handleInputChange}
                  className="form-control mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Website url"
                />
              </div>
            </div>

            <h6 className="text-xl font-semibold text-blue-600 mt-8 mb-6">Address</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="street" className="block text-sm font-medium text-gray-700">
                  Street
                </label>
                <input
                  type="text"
                  id="street"
                  value={user.street}
                  onChange={handleInputChange}
                  className="form-control mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter street"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={user.city}
                  onChange={handleInputChange}
                  className="form-control mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter city"
                />
              </div>
              <div className="form-group">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  value={user.state}
                  onChange={handleInputChange}
                  className="form-control mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter state"
                />
              </div>
              <div className="form-group">
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zip"
                  value={user.zip}
                  onChange={handleInputChange}
                  className="form-control mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Zip Code"
                />
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button className="btn btn-secondary mr-4 px-6 py-3 rounded-md text-sm font-medium bg-gray-200 hover:bg-gray-300 transition-all">Cancel</button>
              <button className="btn btn-primary px-6 py-3 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
