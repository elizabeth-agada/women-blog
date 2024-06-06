import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-pink-500 text-white p-6 shadow-md"> {/* Add background shadow */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className=''>
          <h4 className="text-lg font-bold mb-2">Menu</h4>
          <ul className="space-y-2">
            <li><a href="#start" className="hover:text-pink-200">Start Here</a></li>
            <li><a href="#guides" className="hover:text-pink-200">Guides</a></li>
            <li><a href="#tools" className="hover:text-pink-200">Tools & Resources</a></li>
            <li><a href="#about" className="hover:text-pink-200">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Contact</h4>
          <p className="text-white">Contact us at womenblog@example.com</p> {/* Fix the contact email */}
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com/" className="hover:text-pink-200"><FaFacebook /></a>
            <a href="https://x.com/" className="hover:text-pink-200"><FaTwitter /></a>
            <a href="https://instagram.com/" className="hover:text-pink-200"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-white pt-4">
        <p>&copy; {new Date().getFullYear()} WomenBlog. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
