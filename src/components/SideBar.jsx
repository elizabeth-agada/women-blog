import React from 'react';

function Sidebar() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 divide-y space-y-6">
      <div className="pb-4 divide-y ">
        <h3 className="text-xl font-bold mb-4">Jump To Section</h3>
        <ul className="h-32 overflow-y-auto custom-scrollbar space-y-2 px-6 py-3">
          {/* Your navigation links */}
          <h2 className='text-blue-500'>Blog for mental health</h2>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          {/* Add more navigation links here */}

          <h2 className='text-blue-500'>Blog for Lifestyle changes</h2>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          {/* Add more navigation links here */}
        </ul>
        
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Featured Stories</h3>
        <div className="bg-gray-100 rounded-lg shadow-sm mb-4">
          <a href="#interest" className="block px-4 py-3 text-blue-600 hover:underline">
            <h2 className="text-lg font-semibold">10 Inspiring Women Who Changed the World</h2>
            <p className="text-sm text-gray-600">Learn about remarkable women who made history.</p>
          </a>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-sm">
          <a href="#interest" className="block px-4 py-3 text-blue-600 hover:underline">
            <h2 className="text-lg font-semibold">Breaking Stereotypes: Women in STEM</h2>
            <p className="text-sm text-gray-600">Explore the contributions of women in STEM fields.</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
