import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <i className="fas fa-comments text-blue-500 text-2xl mr-2"></i>
                <span className="font-semibold text-gray-900 text-lg">CommStyle</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`py-4 px-2 font-medium ${isActivePath('/') ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500 hover:text-blue-500'} transition duration-300`}
            >
              Home
            </Link>
            <Link
              to="/assessment"
              className={`py-4 px-2 font-medium ${isActivePath('/assessment') ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500 hover:text-blue-500'} transition duration-300`}
            >
              Assessment
            </Link>
            <Link
              to="/about"
              className={`py-4 px-2 font-medium ${isActivePath('/about') ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500 hover:text-blue-500'} transition duration-300`}
            >
              About
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button px-4 py-4 -mr-4 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <i className="fas fa-bars text-gray-500 text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${mobileOpen ? '' : 'hidden'} mobile-menu md:hidden`}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={`block text-sm px-2 py-4 ${isActivePath('/') ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'} transition duration-300`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/assessment"
              onClick={() => setMobileOpen(false)}
              className={`block text-sm px-2 py-4 ${isActivePath('/assessment') ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'} transition duration-300`}
            >
              Assessment
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className={`block text-sm px-2 py-4 ${isActivePath('/about') ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'} transition duration-300`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
