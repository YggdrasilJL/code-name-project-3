// place holder for react icons , 
import React from 'react';
import { FaHome, FaUser, FaBook, FaSignOutAlt } from 'react-icons/fa';


// basic template , styling after 
const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="flex items-center text-white">
              <FaHome className="mr-2" /> Home
            </a>
          </li>
          <li>
            <a href="/profile" className="flex items-center text-white">
              <FaUser className="mr-2" /> Profile
            </a>
          </li>
          <li>
            <a href="/lessons" className="flex items-center text-white">
              <FaBook className="mr-2" /> Lessons
            </a>
          </li>
          <li>
            <a href="/logout" className="flex items-center text-white">
              <FaSignOutAlt className="mr-2" /> Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
