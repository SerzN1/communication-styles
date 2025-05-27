import React, { useState } from 'react';

const NavBar = ({ onNavigate, currentPage }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <button onClick={() => handleNav('home')} className="flex items-center py-4 px-2 focus:outline-none">
                <i className="fas fa-comments text-blue-500 text-2xl mr-2"></i>
                <span className="font-semibold text-gray-900 text-lg">CommStyle</span>
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => handleNav('home')}
              className={`py-4 px-2 font-medium nav-link ${currentPage === 'home' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500 hover:text-blue-500 transition duration-300'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('quiz')}
              className={`py-4 px-2 font-medium nav-link ${currentPage === 'quiz' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500 hover:text-blue-500 transition duration-300'}`}
            >
              Quiz
            </button>
            <button
              onClick={() => handleNav('about')}
              className={`py-4 px-2 font-medium nav-link ${currentPage === 'about' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500 hover:text-blue-500 transition duration-300'}`}
            >
              About
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setMobileOpen(!mobileOpen)}>
              <i className="fas fa-bars text-gray-500 text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div className={`${mobileOpen ? '' : 'hidden'} mobile-menu md:hidden`}> 
        <ul>
          <li>
            <button
              onClick={() => handleNav('home')}
              className="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300 nav-link w-full text-left"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNav('quiz')}
              className="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300 nav-link w-full text-left"
            >
              Quiz
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNav('about')}
              className="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300 nav-link w-full text-left"
            >
              About
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar; 