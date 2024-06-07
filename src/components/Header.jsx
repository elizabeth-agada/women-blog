import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth < 768) {
        setIsSubMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  return (
    <header className="bg-white text-gray-800 p-4 fixed top-0 left-0 right-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <Link to="/" className="text-2xl font-bold">Yamba</Link>

        {/* Mobile menu button */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} 
            />
          </svg>
        </button>

        {/* Menu items (desktop and open mobile) */}
        <Transition
          show={isMenuOpen || windowWidth >= 768}
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <nav className="md:flex space-x-4 relative">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <li>
                <Link to="/" className="hover:text-pink-500">Start Here</Link>
              </li>
              <li>
                <Link to="/guides" className="hover:text-pink-500">Guides</Link>
              </li>
              {/* Tools & Resources with submenu */}
              <li
                className="relative group"
                onMouseEnter={() => windowWidth >= 768 && setIsSubMenuOpen(true)}
                onMouseLeave={() => windowWidth >= 768 && setIsSubMenuOpen(false)}
              >
                <button
                  className="hover:text-pink-500 focus:outline-none flex items-center"
                  onClick={toggleSubMenu}
                >
                  Tools & Resources
                  <svg
                    className={`h-4 w-4 ml-1 transition-transform ${isSubMenuOpen ? 'transform rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Submenu transition */}
                <Transition
                  show={isSubMenuOpen}
                  enter="transition duration-150 ease-out"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition duration-100 ease-in"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                    <li>
                      <Link to="/articles" className="block px-4 py-2 hover:bg-gray-100">Articles</Link>
                    </li>
                    <li>
                      <Link to="/checklists" className="block px-4 py-2 hover:bg-gray-100">Checklists</Link>
                    </li>
                  </ul>
                </Transition>
              </li>
              <li>
                <Link to="/about" className="hover:text-pink-500">About</Link>
              </li>
            </ul>
          </nav>
        </Transition>
      </div>
    </header>
  );
}

export default Header;
