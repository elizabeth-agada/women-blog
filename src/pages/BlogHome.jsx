import React, { useState, useEffect } from 'react';
import FeaturedPost from '../components/FeaturedPost'; // Your component for featured posts
import LatestPost from '../components/LatestPost';  // Your component for latest posts grid
import SideBar from '../components/SideBar';       // Your component for sidebar content
import Header from '../components/Header';
import Footer from '../components/Footer';

function BlogHome() {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    // Mock data for featured post
    const mockFeaturedPost = {
      id: 1,
      title: "10 Empowering Books Every Woman Should Read",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu massa odio. Nulla nec blandit purus. Fusce lacinia felis a felis volutpat malesuada.",
      image: "https://via.placeholder.com/600x400",
      author: "Jane Doe",
      date: "June 1, 2024"
    };

    // Mock data for latest posts
    const mockLatestPosts = [
      { id: 1, title: "The Importance of Self-Care for Women", date: "June 3, 2024" },
      { id: 2, title: "Breaking the Glass Ceiling: Stories of Success", date: "June 2, 2024" },
      { id: 3, title: "Navigating Motherhood: Tips for New Moms", date: "June 1, 2024" },
    ];

    setFeaturedPost(mockFeaturedPost);
    setLatestPosts(mockLatestPosts);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 pt-16 pb-8 md:mt-10 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="md:col-span-2">
            {/* Hero section */}
            <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md py-12 px-6 flex flex-col items-center text-center md:py-24 md:px-12 md:text-left">
              <div className="max-w-2xl mx-auto text-center md:p-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Women's Blog</h1>
                <p className="text-lg md:text-xl">Empowering women through knowledge and inspiration.</p>
              </div>
            </section>

            {/* Featured post */}
            <div className="container mx-auto mt-8">
              {featuredPost && <FeaturedPost post={featuredPost} />}
            </div>

            {/* Latest posts */}
            <section className="container mx-auto mt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Latest Posts</h2>
              <LatestPost posts={latestPosts} />
            </section>

            {/* Additional sections */}
            <section className="container mx-auto mt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Empowerment</h2>
              <p className="text-lg">Explore stories of women breaking barriers and achieving their dreams.</p>
            </section>

            <section className="container mx-auto mt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Self-Care</h2>
              <p className="text-lg">Discover tips and advice for prioritizing self-care and mental well-being.</p>
            </section>

            <section className="container mx-auto mt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Career & Leadership</h2>
              <p className="text-lg">Learn strategies for advancing your career and becoming a leader in your field.</p>
            </section>
          </div>

          <div className="md:col-span-1">
            {/* Sidebar */}
            <SideBar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default BlogHome;
