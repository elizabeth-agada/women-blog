import React from 'react';

const PostCard = ({ title, content }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700">{content}</p>
        </div>
    );
}

export default PostCard;
