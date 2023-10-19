import { useEffect, useState } from 'react';
import {
  FaHome,
  FaUser,
  FaBook,
  FaUserShield,
  FaSignInAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import Auth from '../../utils/auth'; // Assuming Auth is your authentication utility

const Header = () => {
  const [nav, setNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Auth.loggedIn());
  }, []);
  const logout = () => {
    if (isLoggedIn) {
      Auth.logout();
    }
    return;
  };

  const navs = [
    {
      id: 1,
      icon: <FaHome className="mx-2" />,
      text: 'DASHBOARD',
      link: '/dashboard',
    },
    {
      id: 2,
      icon: <FaUser className="mx-2" />,
      text: 'PROFILE',
      link: '/me',
    },
  ];

  return (
    <div className="flex justify-between items-center w-full p-3 mb-10 bg-gradient-to-b from-opacityBlack sticky top-0">
      <div className="flex justify-center items-center gap-3">
        <a href="/" className="avoid-particle">
          <img src="images/cyberpic.png" alt="Cyber Script" width={400} />
        </a>
      </div>
      <div className="z-50">
        <ul className="avoid-particle gap-x-5 text-2xl text-white hidden md:flex mr-5 p-4 bg-opacityBlack border-2 border-cyber-yellow rounded-tl-3xl rounded-br-3xl">
          {navs.map(({ id, icon, text, link }) => (
            <a href={link} key={id}>
              <li className="flex items-center justify-center cursor-pointer hover:text-cyber-pink duration-300">
                {icon} {text}
              </li>
            </a>
          ))}
          <a href={isLoggedIn ? '/' : '/login'} onClick={logout}>
            <li className="flex items-center justify-center cursor-pointer hover:text-cyber-pink duration-300">
              {isLoggedIn ? (
                <FaSignInAlt className="mx-2" />
              ) : (
                <FaUserShield className="mx-2" />
              )}
              {isLoggedIn ? 'LOG_OUT' : 'LOG_IN'}
            </li>
          </a>
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="text-white cursor-pointer pr-3 md:hidden"
        >
          {!nav ? <FaBars size={35} /> : <FaTimes size={35} />}
        </div>
        {nav && (
          <div className="z-50">
            <ul className="text-6xl sm:hidden gap-y-12 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-opacityBlack to-opacityLightBlack">
              {navs.map(({ id, icon, text, link }) => (
                <a href={link} key={id}>
                  <li className="text-white text-4xl flex items-center justify-center cursor-pointer hover:scale-125 duration-500">
                    {icon} {text}
                  </li>
                </a>
              ))}
              <FaTimes
                size={35}
                onClick={() => setNav(!nav)}
                className="text-white absolute top-9 right-6 cursor-pointer"
              />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
