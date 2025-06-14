import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PreferencesModal from './Preferences/PreferencesModal';
import useAuthentication from '../hooks/useAuthentication'; 

const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isPreferencesModalOpen, setPreferencesModalOpen] = useState(false);
  const isLoggedIn = useAuthentication();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const togglePreferencesModal = () => {
    setPreferencesModalOpen(!isPreferencesModalOpen);
  };

  return (
    <nav className="bg-blue-950 px-2 py-2">
      <div className="flex justify-between items-center">
        <div className='flex flex-wrap justify-center items-center'>
          <Link to="/" className="flex items-center text-white text-3xl font-bold px-2">
            Sports center
          </Link>
        </div>
        <div className="flex flex-wrap space-x-4 text-white text-lg items-center">
          {isLoggedIn && (
            <button
              onClick={togglePreferencesModal}
              className="text-white hover:bg-red-600 px-3 py-2 rounded-md focus:outline-none group-hover:bg-red-600"
            >
              Preferences
            </button>
          )}
          <Link to="/home">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/matches">Matches</Link>
          {isLoggedIn ? (
            <div className="relative inline-block group" tabIndex={0}>
              <button
                onClick={toggleDropdown}
                onBlur={() => setDropdownOpen(false)}
                className={`text-white hover:bg-red-600 px-3 py-2 rounded-md focus:outline-none group-hover:bg-red-600 ${isDropdownOpen ? 'focus:ring focus:ring-gray-400' : ''}`}
              >
                <span>⌔</span>
              </button>
              <div
                className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-red-50 ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300 ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              >
                <div className="py-1 font-semibold">
                  <Link
                    to="/user"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-100"
                  >
                    My Profile
                  </Link>
                  <hr/>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-100 focus:outline-none"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link to="/signup" className="text-white hover:bg-red-600 px-3 py-2 rounded-md focus:outline-none group-hover:bg-red-600">
                Sign Up
              </Link>
              <Link to="/signin" className="text-white hover:bg-red-600 px-3 py-2 rounded-md focus:outline-none group-hover:bg-red-600">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
      {isPreferencesModalOpen && <PreferencesModal />}
    </nav>
  );
};

export default Navbar;
