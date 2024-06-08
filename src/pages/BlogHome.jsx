import React, { useState, useEffect } from 'react';
import FeaturedPost from '../components/FeaturedPost';  
import SideBar from '../components/SideBar';       
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function BlogHome() {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    // Mock data for featured post
    const FeaturedPost = {
      id: 1,
      title: "The power of Motherhood",
      content: "Motherhood is a transformative journey that embodies boundless strength, unconditional love, and unparalleled sacrifice. It is a profound testament to the resilience and nurturing spirit of women across generations. Through the joys and challenges of raising children, mothers exhibit an extraordinary capacity for empathy, patience, and selflessness. Their unwavering dedication shapes the character and future of each child, leaving an indelible mark on the world. From the tender moments of lullabies and bedtime stories to the fierce protection and advocacy for their offspring, mothers embody the essence of unconditional love and unwavering devotion. In celebrating the power of motherhood, we honor the profound influence and invaluable contributions of mothers in shaping families, communities, and society at large.",
      image: "./mother.jpg",
      author: "Liz",
      date: "June 1, 2024"
    };

    // Mock data for latest posts
    const mockLatestPosts = [
      { id: 1, title: "The Importance of Self-Care for Women", date: "June 3, 2024", image: "./care.webp" },
      { id: 2, title: "Breaking the Glass Ceiling: Stories of Success", date: "June 2, 2024", image: "./glass.jpg" },
      { id: 3, title: "Navigating Motherhood: Tips for New Moms", date: "June 1, 2024", image: "./motherhood.jpeg" },
    ];

    setFeaturedPost(FeaturedPost);
    setLatestPosts(mockLatestPosts);
  }, []);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submitting the comment, for example, sending it to a backend server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Comment:', comment);
    // Clear the input fields after submission
    setName('');
    setEmail('');
    setComment('');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 pt-16 pb-8 md:mt-10 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="md:col-span-2">
            {/* Hero section */}
            <section id="hero" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md py-12 px-6 flex flex-col items-center text-center md:py-24 md:px-12 md:text-left">
              <div className="max-w-2xl mx-auto text-center md:p-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Yamba</h1>
                <p className="text-lg md:text-xl">Empowering women through knowledge and inspiration.</p>
              </div>
            </section>

            <div className="py-6 flex-col md:flex-row">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Nurturing Every Aspect of Womanhood</h1>
            
              <div className="md:ml-4 block md:flex justify-start gap-5">
                <img src="/liz3_prev_ui.png" alt="img" className="my-4 rounded-full h-24 w-24" />
                <div className='md:py-5 space-y-2'>
                <p className='font-medium'>By Maryam Zeera</p>
                <p className='text-gray-800 text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sit nisi in nam tenetur. Fugiat asperiores inventore porro atque laborum fuga accusamus aperiam officiis, obcaecati, eveniet nisi fugit eius exercitationem.
                </p>
                </div>
              </div>
            </div>

            <div id="featured" className="container mx-auto mt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Featured Post</h2>
              {featuredPost && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">{featuredPost.title}</h3>
                    <p className="text-gray-600">{FeaturedPost.date}</p>
                  </div>
                  <div className="mb-4">
                    <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-auto rounded-md mb-2" />
                    <p className="text-lg">{featuredPost.content}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Written by {featuredPost.author}</p>
                    <a href="#featured" className="text-blue-600 hover:underline">Read more</a>
                  </div>
                </div>
              )}
            </div>

             {/* Latest posts */}
             <section id="latest" className="container mx-auto mt-8">
              <Link to="" className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Latest Posts</Link>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {latestPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.date}</p>
                    <a href={`/post/${post.id}`} className="text-blue-600 hover:underline">Read more</a>
                  </div>
                ))}
              </div>
            </section>

            
            <section id="empowerment" className="container mx-auto mt-8 text-gray-800">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Empowerment</h2>
              <p className="text-lg mb-4">
                Empowerment is about recognizing the strength and resilience of women, celebrating their achievements, and supporting their journey towards equality and success. In this section, we delve into inspiring stories of women from all walks of life who have broken barriers, shattered stereotypes, and carved their own paths to success. From entrepreneurs and activists to artists and leaders, these women serve as role models and sources of inspiration for others.
              </p>
              <p className="text-lg mb-4">
                Explore how these remarkable individuals have overcome challenges, embraced their uniqueness, and empowered themselves and others to dream big and achieve their goals. Together, let's celebrate the diversity, strength, and limitless potential of women around the world.
              </p>
            </section>

            <section id="self-care" className="container mx-auto mt-8 text-gray-800">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Self-Care</h2>
              <p className="text-lg mb-4">
                Self-care is not selfish; it's essential. In a world where women often juggle multiple responsibilities and roles, prioritizing self-care is paramount for maintaining overall well-being. Here are some holistic self-care practices to nurture your mind, body, and soul:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Self-care tip 1 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">Mindfulness Meditation</h3>
                  <p className="text-gray-600 mb-4">
                    Engage in mindfulness meditation to cultivate present-moment awareness and reduce stress. Dedicate a few minutes each day to sit quietly, focus on your breath, and observe your thoughts without judgment.
                  </p>
                </div>
                {/* Self-care tip 2 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">Healthy Eating Habits</h3>
                  <p className="text-gray-600 mb-4">
                    Fuel your body with nutritious foods that nourish your physical and mental health. Incorporate plenty of fruits, vegetables, whole grains, lean proteins, and healthy fats into your diet to boost energy levels and enhance mood.
                  </p>
                </div>
                {/* Self-care tip 3 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">Regular Exercise Routine</h3>
                  <p className="text-gray-600 mb-4">
                    Stay active by engaging in regular exercise that you enjoy, whether it's yoga, jogging, dancing, or cycling. Physical activity releases endorphins, which can alleviate stress, improve mood, and promote better sleep.
                  </p>
                </div>
                {/* Self-care tip 4 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">Digital Detox</h3>
                  <p className="text-gray-600 mb-4">
                    Take breaks from screens and technology to reduce digital overwhelm and create space for relaxation and reflection. Unplug from devices periodically to reconnect with yourself, nature, and loved ones.
                  </p>
                </div>
              </div>
            </section>


            <section id="career-leadership" className="container mx-auto mt-8 text-gray-800">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Career & Leadership</h2>
              <p className="text-lg mb-4">
                Empower yourself to reach new heights in your career and become a leader in your field with these valuable strategies and insights:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Career tip 1 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">Set Clear Goals</h3>
                  <p className="text-gray-600 mb-4">
                    Define your career aspirations and set clear, achievable goals to guide your professional journey. Break down larger objectives into smaller milestones and create actionable plans to propel yourself forward.
                  </p>
                </div>
                {/* Career tip 2 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                  <p className="text-gray-600 mb-4">
                    Commit to lifelong learning and skill development to stay relevant and competitive in your industry. Attend workshops, pursue certifications, and seek out opportunities for professional growth and advancement.
                  </p>
                </div>
                {/* Career tip 3 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">Network Effectively</h3>
                  <p className="text-gray-600 mb-4">
                    Cultivate meaningful professional relationships and expand your network both online and offline. Attend industry events, join professional organizations, and leverage social media platforms to connect with peers, mentors, and potential collaborators.
                  </p>
                </div>
                {/* Career tip 4 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">Develop Leadership Skills</h3>
                  <p className="text-gray-600 mb-4">
                    Hone your leadership abilities by taking on leadership roles and projects that challenge you to inspire, motivate, and empower others. Practice effective communication, decision-making, and problem-solving to lead with confidence and integrity.
                  </p>
                </div>
              </div>
            </section>

            
            {/* Comment section */}
            <section id="comments" className="container mx-auto mt-8 max-w-7xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Post a Comment</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-4 border border-pink-300 rounded-md mb-2"
                    placeholder="Your name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-4 border border-pink-300 rounded-md mb-2"
                    placeholder="Your email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    className="w-full p-4 border border-pink-300 rounded-md mb-4"
                    rows="4"
                    placeholder="Write your comment here"
                    value={comment}
                    onChange={handleCommentChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded"
                >
                  Post
                </button>
              </form>
            </section>
          </div>

          <div className="md:col-span-1">
            {/* Sidebar */}
            <SideBar />
          </div>
        </div>

        {/* Read more section */}
        <section id="read-more" className="container mx-auto mt-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Read more from the blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
              <h3 className="text-xl font-bold mb-2">Empowering Women in Tech</h3>
              <p className="text-gray-600 mb-4">June 1, 2024</p>
              <p className="text-lg">Discover how women are breaking barriers and leading innovations in the technology sector. Learn about initiatives and programs supporting women in tech.</p>
              <a href="#read-more" className="text-blue-600 hover:underline">Read more</a>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
              <h3 className="text-xl font-bold mb-2">Women’s Health and Wellness</h3>
              <p className="text-gray-600 mb-4">June 2, 2024</p>
              <p className="text-lg">Explore essential health and wellness tips specifically for women. From mental health to fitness routines, find valuable advice for maintaining a healthy lifestyle.</p>
              <a href="#read-more" className="text-blue-600 hover:underline">Read more</a>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
              <h3 className="text-xl font-bold mb-2">Female Entrepreneurs to Watch</h3>
              <p className="text-gray-600 mb-4">June 3, 2024</p>
              <p className="text-lg">Get inspired by stories of successful female entrepreneurs. Learn about their journeys, challenges they overcame, and tips for aspiring women business leaders.</p>
              <a href="#read-more" className="text-blue-600 hover:underline">Read more</a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default BlogHome;
