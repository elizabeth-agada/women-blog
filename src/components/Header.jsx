import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { Transition } from '@headlessui/react'; // For smooth animations

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {  // Define the toggleMenu function
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className="bg-white text-gray-800 p-4 fixed top-0 left-0 right-0 shadow-md z-10"> {/* z-10 for stacking order */}
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <Link to="/" className="text-2xl font-bold">WomenBlog</Link>
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
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} // X mark or hamburger
            />
          </svg>
        </button>

        {/* Menu items (desktop and open mobile) */}
        <Transition
          show={isMenuOpen || windowWidth >= 768}  // Show on desktop or when menu is open
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <nav className="md:flex space-x-4"> 
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <li>
              <a href="#start" className="hover:text-pink-200">Start Here</a>
            </li>
            <li>
              <a href="#guides" className="hover:text-pink-200">Guides</a>
            </li>
            <li>
              <a href="#tools" className="hover:text-pink-200">Tools & Resources</a>
            </li>
            <li>
              <a href="#about" className="hover:text-pink-200">About</a>
            </li>
            </ul>
          </nav>
        </Transition>
      </div>
    </header>
  );
}

export default Header;
