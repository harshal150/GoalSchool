import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.png'
import calenderpdf from '../assets/2024-25 year plan.pdf'
import logo from '../assets/logo/logo.jpg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };


  const navigate = useNavigate()

  const handleclick=()=> {

    navigate("/")
  }




  return (
    <nav className="bg-white shadow-lg  hover:shadow-xl transition-shadow z-50 " >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={handleclick}>
            <img
              className="h-18 w-32 "
              src={logo}
              alt="Goal School Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              Home
            </Link>

            {/* About Us with Submenu */}
            <div className="relative group">
              <button className="flex items-center text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              <Link to="/about" className="">
                  About Us
                </Link>
                <span className="ml-1 text-sm">&#9662;</span>
              </button>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md font-medium py-4 px-1  w-48 z-50">
                <Link to="/motto" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:rounded-lg">
                Motto
                </Link>
                <Link to="/history" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:rounded-lg">
                 School History
                </Link>
                <Link to="/principlemessage" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:rounded-lg">
                 Principal's Message
                </Link>
                <Link to="/visionmission" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:rounded-lg">
                  Vision & Mission
                </Link>
              </div>
            </div>
        
            <div className="relative group">
              <button className="flex items-center text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              <Link to="/admission" className="">
                  Admissions
                </Link>
                <span className="ml-1 text-sm">&#9662;</span>
              </button>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md font-medium py-4 px-1  w-48 z-50">
                <Link to="/admissionprograms" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:rounded-lg">
               Admission Programs
                </Link>
                {/* <Link to="/form" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:rounded-lg">
                Admission Form
                </Link> */}
                <Link to="/enquiry" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:rounded-lg">
                Enquiry Form 
                </Link>
               
              </div>
            </div>

       
            {/* Resources with Submenu */}
            <div className="relative group">
              <button className="flex items-center text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Resources
                <span className="ml-1 text-sm">&#9662;</span>
              </button>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md font-medium py-4 px-1  w-48 z-50">
                <Link to="/gallery" className="block px-4 py-2 text-sm hover:bg-gray-100  hover:rounded-lg">
                  Gallery
                </Link>
                {/* <Link to="/counseling" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:rounded-lg">
                  Career Counseling
                </Link> */}
                {/* <Link to="/calendar" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:rounded-lg">
                  School Calendar
                </Link> */}
                <a
  href={calenderpdf}
  target="_blank"
  rel="noopener noreferrer"
  className="block px-4 py-2 text-sm hover:bg-gray-100 hover:rounded-lg"
>
  School Calendar
</a>

                <Link to="/publications" className="block px-4 py-2 text-sm hover:bg-gray-100  hover:rounded-lg">
                  Publications
                </Link>
                <Link to="/blogs" className="block px-4 py-2 text-sm hover:bg-gray-100  hover:rounded-lg">
                  Blogs
                </Link>
              </div>
            </div>
            <Link to="/faculty" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              Faculty
            </Link>

            <Link to="/facilities" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              Facilities
            </Link>
            <Link to="/alumni" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              Alumni
            </Link>
            <Link to="/student-life" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              Student Life
            </Link>
            <Link to="/contact" className="cp_rainbow_btn text-gray-900 px-3 py-2 text-sm font-medium">
              Contact Us
            </Link>
            <style>{`
                  .cp_rainbow_btn {
                    background: linear-gradient(-45deg, #FF3D77, #338AFF ,#00008B);
                    background-size: 600%;
                    animation: anime 6s linear infinite;
                   
                   
                    border-radius: 5px;
                    color: white;
                  }
                  @keyframes anime { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; }}
                `}</style>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
 {/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1">
      {/* Home */}
      <Link to="/" className="block text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
        Home
      </Link>

      {/* About Us Submenu */}
      <div>
        <button
          onClick={() => toggleSubmenu('about')}
          className="flex justify-between w-full text-left text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium"
        >
           <Link to="/about" className="">
                  About Us
                </Link>
          <span className="ml-1 text-sm">&#9662;</span>
        </button>
        {activeMenu === 'about' && (
          <div className="ml-4 space-y-1 font-semibold text-gray-700">
            <Link to="/motto" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Motto
            </Link>
            <Link to="/history" className="block px-4 py-2 text-sm hover:bg-gray-100">
              School History
            </Link>
            <Link to="/principlemessage" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Principal's Message
            </Link>
            <Link to="/visionmission" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Vision & Mission
            </Link>
          </div>
        )}
      </div>

      {/* Admissions Submenu */}
      <div>
        <button
          onClick={() => toggleSubmenu('admissions')}
          className="flex justify-between w-full text-left text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium"
        >
          Admissions
          <span className="ml-1 text-sm">&#9662;</span>
        </button>
        {activeMenu === 'admissions' && (
          <div className="ml-4 space-y-1 font-semibold text-gray-700">
            <Link to="/admissionprograms" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Admission Programs
            </Link>
            {/* <Link to="/form" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Admission Form
            </Link> */}
            <Link to="/enquiry" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Inquiry Form
            </Link>
          </div>
        )}
      </div>

      {/* Resources Submenu */}
      <div>
        <button
          onClick={() => toggleSubmenu('resources')}
          className="flex justify-between w-full text-left text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium"
        >
          Resources
          <span className="ml-1 text-sm">&#9662;</span>
        </button>
        {activeMenu === 'resources' && (
          <div className="ml-4 space-y-1">
            <Link to="/gallery" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Gallery
            </Link>
            {/* <Link to="/resources/counseling" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Career Counseling
            </Link> */}
            {/* <Link to="/resources/calendar" className="block px-4 py-2 text-sm hover:bg-gray-100">
              School Calendar
            </Link> */}
            <a
  href={calenderpdf}
  target="_blank"
  rel="noopener noreferrer"
  className="block px-4 py-2 text-sm hover:bg-gray-100 hover:rounded-lg"
>
  School Calendar
</a>
            <Link to="/publications" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Publications
            </Link>
            <Link to="/blogs" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Blogs
            </Link>
          </div>
        )}
      </div>
      <Link to="/faculty" className="block text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
        Faculty
      </Link>
      {/* Other Links */}
      <Link to="/facilities" className="block text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
        Facilities
      </Link>
      <Link to="/alumni" className="block text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
        Alumni
      </Link>
      <Link to="/student-life" className="block text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
        Student Life
      </Link>
      <Link to="/contact" className="block text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
        Contact Us
      </Link>
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
