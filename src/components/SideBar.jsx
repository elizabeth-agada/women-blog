import React from 'react';

function Sidebar() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 divide-y space-y-6">
      <div className="pb-4 divide-y ">
        <h3 className="text-xl font-bold mb-4">Jump To Section</h3>
        <ul className="h-48 overflow-y-auto custom-scrollbar space-y-2 px-6 py-3">

        <h2 className='text-blue-500'><a href='#featured'>Featured Post</a></h2>
          <li><a href="#featured" className="text-blue-500 text-sm hover:underline px-4">The power of Motherhood</a></li>
        

          <h2 className='text-blue-500'><a href='#latest'>Latest Post</a></h2>
          <li><a href="#latest" className="text-blue-500 text-sm hover:underline px-4">The importance of self-care for Women</a></li>
          <li><a href="#latest" className="text-blue-500 text-sm hover:underline px-4">Breaking the Glass Ceiling</a></li>
          <li><a href="#latest" className="text-blue-500 text-sm hover:underline px-4">Navigating Motherhood</a></li>

          <h2 className='text-blue-500'><a href='#reads'>10 Empowering Books Every Woman Should Read</a></h2>
          <li><a href="#reads" className="text-blue-500 text-sm hover:underline px-4">Smart Money Woman</a></li>
          <li><a href="#reads" className="text-blue-500 text-sm hover:underline px-4">Public Speaking</a></li>
          <li><a href="#reads" className="text-blue-500 text-sm hover:underline px-4">Rich Dad Poor Dad</a></li>
          <li><a href="#reads" className="text-blue-500 text-sm hover:underline px-4">An Enemy called Average</a></li>
          
         

          <h2 className='text-blue-500'>Empowerment</h2>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>

          <h2 className='text-blue-500'>Self Care</h2>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>

          <h2 className='text-blue-500'>Career & Leadership</h2>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>

          <h2 className='text-blue-500'>Read more from the Blog</h2>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>
          <li><a href="#start" className="text-blue-500 text-sm hover:underline px-4">Read the hottest topics here</a></li>     
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
