// place holder for react icons ,
import React from 'react';
import { FaHome, FaUser, FaBook, FaSignOutAlt } from 'react-icons/fa';

// basic template , styling after
const Header = () => {
  return (
    <header className="flex justify-between text-white p-4">
      <a href="/" className="w-auto">
        <img
          href="/"
          src="../../images/cyberpic.png"
          alt="Cyber Script"
          width={350}
          className="object-contain"
        />
      </a>
      <nav className="mr-4 py-3 px-12 bg-opacityBlack border-2 border-cyber-yellow rounded-tl-3xl rounded-br-3xl">
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
