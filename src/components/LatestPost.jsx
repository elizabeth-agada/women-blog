import React from 'react';

function LatestPosts({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatestPosts;