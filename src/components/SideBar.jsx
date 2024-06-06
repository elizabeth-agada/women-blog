import React from 'react';

function Sidebar() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 divide-y">
      <div className="divide-y"> {/* Add inner div for scrolling */}
        <h3 className="text-xl font-bold mb-4">Jump To Section</h3>
        
        {/* Sample content */}
        <ul className="h-32 overflow-y-auto">
          <li className="mb-2">
            <a href="#section1" className="text-blue-600 hover:underline">Section 1</a>
          </li>
          <li className="mb-2">
            <a href="#section2" className="text-blue-600 hover:underline">Section 2</a>
          </li>
          <li className="mb-2">
            <a href="#section3" className="text-blue-600 hover:underline">Section 3</a>
          </li>
          <li className="mb-2">
            <a href="#section4" className="text-blue-600 hover:underline">Section 4</a>
          </li>
          <li className="mb-2">
            <a href="#section5" className="text-blue-600 hover:underline">Section 5</a>
          </li>
        </ul>
      </div>
      
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">Featured Stories</h3>
        <div className="px-4 py-2 rounded-lg shadow-sm bg-gray-100 mb-4">
          <a href="#interest" className="text-blue-600 hover:underline">
            <h2 className="text-lg font-semibold mb-2">10 Inspiring Women Who Changed the World</h2>
            <p className="text-sm text-gray-600">Learn about remarkable women who made history.</p>
          </a>
        </div>
        <div className="px-4 py-2 rounded-lg shadow-sm bg-gray-100">
          <a href="#interest" className="text-blue-600 hover:underline">
            <h2 className="text-lg font-semibold mb-2">Breaking Stereotypes: Women in STEM</h2>
            <p className="text-sm text-gray-600">Explore the contributions of women in science, technology, engineering, and mathematics.</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
