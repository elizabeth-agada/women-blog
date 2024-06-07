import React from 'react';

function FeaturedPost({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded">
          Read More content
        </button>
      </div>
    </div>
  );
}

export default FeaturedPost;