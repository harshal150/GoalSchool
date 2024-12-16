import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import CampusLifeDetails from './CampusLifeDetails'; // Import the new component
import ClubsAndOrganizations from './ClubsAndOrganizations';
import StudentEvents from './StudentEvents';
const StudentLife = () => {
  const [activeTab, setActiveTab] = useState('campusLife');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    {
      id: 'campusLife',
      title: 'Campus Life',
      icon: '🏫',
      content: (
        <div>
          
          <CampusLifeDetails />
        </div>
      ),
    },
    {
      id: 'clubsAndOrganizations',
      title: 'Clubs & Organizations',
      icon: '🎨',
      content: (
        <div>
      <ClubsAndOrganizations/>
        </div>
      ),
    },
    {
      id: 'studentEvents',
      title: 'Student Events',
      icon: '🎉',
      content: (
        <div>
         <StudentEvents/>
        </div>
      ),
    },
  ];

  const getFilteredContent = () => {
    const tab = tabs.find((tab) => tab.id === activeTab);
    if (!tab) return null;
    return tab.content;
  };

  const filteredContent = getFilteredContent();

  return (
    <div className="p-6">
      {/* Tabs Navigation */}
      <div className="flex items-center justify-between border-b border-gray-300 mb-6 pb-2">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-6 text-md font-semibold flex items-center gap-2 focus:outline-none transition-all ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-1 border-blue-600'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.icon}</span> {tab.title}
            </button>
          ))}
        </div>
      
      </div>

      {/* Tab Content */}
      <Transition
        show={true}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="text-gray-700">
          {filteredContent || tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </Transition>
    </div>
  );
};

export default StudentLife;
