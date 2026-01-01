import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { imagePaths, fallbackImages } from '../config/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faUser, 
  faTag, 
  faArrowRight,
  faClock,
  faEye,

  faSearch,
  faFilter
} from '@fortawesome/free-solid-svg-icons';

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Articles data
  const articles = [
    {
      id: 1,
      title: 'The Future of AI in Business: AI Solution 2025 Insights',
      excerpt: 'Discover how AI Solition plan to use artificial intelligence to transform business operations in the coming year and what you need to know to stay ahead.',
      category: 'AI Trends',
      author: 'Dr. Sarah Chen',
      date: 'Jan 15, 2025',
      readTime: '8 min read',
      views: '2.4k',
      image: imagePaths.articles.one,
            fallback: fallbackImages.articles,
      tags: ['AI', 'Business', 'Future', 'Predictions']
    },
    {
      id: 2,
      title: 'Machine Learning vs. Deep Learning: What\'s the Difference?',
      excerpt: 'A comprehensive guide understanding the key differences between machine learning and deep learning technologies.',
      category: 'Technology',
      author: 'Michael Rodriguez',
      date: 'Jan 10, 2025',
      readTime: '12 min read',
      views: '3.1k',
      image: imagePaths.articles.two,
            fallback: fallbackImages.articles,
      tags: ['Machine Learning', 'Deep Learning', 'Technology']
    },
    {
      id: 3,
      title: 'Ai-Solution: Guiding Towards More Ethical Products',
      excerpt: 'Exploring the ethical considerations in AI development and how to create responsible AI systems with AI-Solution.',
      category: 'Ethics',
      author: 'Dr. James Wilson',
      date: 'Jan 5, 2025',
      readTime: '10 min read',
      views: '1.8k',
      image: imagePaths.articles.three,
            fallback: fallbackImages.articles,
      tags: ['Ethics', 'Responsible AI', 'Governance']
    },
    {
      id: 4,
      title: 'Natural Language Processing: Revolutionizing Human-Computer Interaction',
      excerpt: 'How NLP is changing the way we interact with computers and what it means for the future of technology.',
      category: 'NLP',
      author: 'Emma Watson',
      date: 'Dec 28, 2025',
      readTime: '15 min read',
      views: '2.7k',
      image: imagePaths.articles.four,
            fallback: fallbackImages.articles,
      tags: ['NLP', 'Chatbots', 'AI Interaction']
    },
    {
      id: 5,
      title: 'AI-Solution in Healthcare: Saving Lives with Smart Technology',
      excerpt: 'Exploring the groundbreaking applications of AI in healthcare and medical diagnostics.',
      category: 'Healthcare',
      author: 'Dr. Sarah Chen',
      date: 'Dec 20, 2025',
      readTime: '11 min read',
      views: '3.5k',
      image: imagePaths.articles.five,
            fallback: fallbackImages.articles,
      tags: ['Healthcare', 'Medical AI', 'Diagnostics']
    },
    {
      id: 6,
      title: 'Computer Vision: Teaching Your Machine to See with AI-Solution',
      excerpt: 'Understanding how computer vision works and its applications in various industries.',
      category: 'Computer Vision',
      author: 'David Kim',
      date: 'Dec 15, 2025',
      readTime: '9 min read',
      views: '2.1k',
     image: imagePaths.articles.six,
            fallback: fallbackImages.articles,
      tags: ['Computer Vision', 'Image Recognition', 'AI']
    },
    {
      id: 7,
      title: 'CyberSecurity with AI-Solution',
      excerpt: 'How artificial intelligence is revolutionizing cybersecurity and threat detection.',
      category: 'Security',
      author: 'Michael Rodriguez',
      date: 'Dec 10, 2025',
      readTime: '14 min read',
      views: '2.9k',
     image: imagePaths.articles.seven,
            fallback: fallbackImages.articles,
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection']
    },
    {
      id: 8,
      title: 'Job Markets and Skills with AI-Solution',
      excerpt: 'Collaborate with AI-Solution to improve job markets and the skills needed for the future workforce.',
      category: 'Career',
      author: 'Lisa Thompson',
      date: 'Dec 5, 2025',
      readTime: '7 min read',
      views: '4.2k',
      image: imagePaths.articles.eight,
            fallback: fallbackImages.articles,
      tags: ['Career', 'Future Jobs', 'Skills']
    },
    {
      id: 9,
      title: 'Building Scalable AI Systems with AI-Solution: Best Practices',
      excerpt: 'Essential strategies for creating AI systems that can scale with your business growth.',
      category: 'Development',
      author: 'Michael Rodriguez',
      date: 'Nov 30, 2025',
      readTime: '13 min read',
      views: '1.9k',
     image: imagePaths.articles.nine,
            fallback: fallbackImages.articles,
      tags: ['Scalability', 'AI Development', 'Best Practices']
    },
    {
      id: 10,
      title: 'Personalized Learning Experiences with AI-Solution',
      excerpt: 'How AI-Solution is creating personalized learning paths for students worldwide.',
      category: 'Education',
      author: 'Emma Watson',
      date: 'Nov 25, 2025',
      readTime: '8 min read',
      views: '2.3k',
      image: imagePaths.articles.ten,
            fallback: fallbackImages.articles,
      tags: ['Education', 'EdTech', 'Personalized Learning']
    },
    {
      id: 11,
      title: 'The Economics of AI: Cost vs. Value Analysis',
      excerpt: 'Understanding the economic implications of AI implementation and ROI considerations.',
      category: 'Business',
      author: 'Lisa Thompson',
      date: 'Nov 20, 2025',
      readTime: '10 min read',
      views: '1.7k',
      image: imagePaths.articles.eleven,
            fallback: fallbackImages.articles,
      tags: ['Economics', 'ROI', 'Business Strategy']
    },
    {
      id: 12,
      title: 'Quantum Computing and AI: The Perfect Partnership',
      excerpt: 'Exploring how quantum computing will accelerate AI capabilities in the coming decades.',
      category: 'Emerging Tech',
      author: 'Dr. Sarah Chen',
      date: 'Nov 15, 2025',
      readTime: '16 min read',
      views: '3.8k',
      image: imagePaths.articles.twelve,
            fallback: fallbackImages.articles,
      tags: ['Quantum Computing', 'Future Tech', 'AI Acceleration']
    }
  ];

  // Categories
  const categories = ['all', 'AI Trends', 'Technology', 'Ethics', 'NLP', 'Healthcare', 'Computer Vision', 'Security', 'Career', 'Development', 'Education', 'Business', 'Emerging Tech'];

  // Filter articles based on search and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || article.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Featured article (first one)
  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-royal-blue to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Solution Articles & Insights</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest trends, research, and insights in artificial intelligence
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faFilter} className="text-gray-600" />
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Popular Tags */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {['AI', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Ethics', 'Healthcare', 'Business'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-royal-blue hover:text-white transition duration-300"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              {/* Image/Illustration */}
             <img
  src={featuredArticle.image}
  alt={featuredArticle.title}
  className="w-full h-full object-cover"
  onError={(e) => e.target.src = featuredArticle.fallback}
/>

              
              {/* Content */}
              <div className="p-8 md:p-12 text-white">
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full mb-6">
                  <span className="text-sm">Featured</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">{featuredArticle.title}</h2>
                <p className="text-gray-300 mb-6">{featuredArticle.excerpt}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-300">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <FontAwesomeIcon icon={faClock} className="mr-2" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredArticle.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={`/articles/${featuredArticle.id}`}
                  className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                >
                  <span>Read Full Article</span>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid - 3 per row */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
              <p className="text-gray-600 mt-2">Browse our collection of AI insights and research</p>
            </div>
            <div className="text-gray-600">
              Showing <span className="font-bold">{filteredArticles.length}</span> articles
            </div>
          </div>
          
          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div 
                  key={article.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-200"
                >
                  {/* Article Image/Icon */}
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 flex items-center justify-center">
                   <img
  src={article.image}
  alt={article.title}
  className="w-full h-48 object-cover rounded-lg"
  onError={(e) => e.target.src = article.fallback}
/>

                  </div>
                  
                  {/* Article Content */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-royal-blue rounded-full text-sm font-semibold">
                        <FontAwesomeIcon icon={faTag} className="mr-1" />
                        {article.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-royal-blue transition duration-300">
                      {article.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faUser} className="mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faClock} className="mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faEye} className="mr-1" />
                        <span>{article.views} views</span>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200 transition duration-300 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          +{article.tags.length - 2}
                        </span>
                      )}
                    </div>
                    
                    {/* Read More */}
                    <Link
                      to={`/articles/${article.id}`}
                      className="inline-flex items-center text-royal-blue hover:text-blue-700 font-medium group"
                    >
                      <span>Read Article</span>
                      <FontAwesomeIcon 
                        icon={faArrowRight} 
                        className="ml-2 transform group-hover:translate-x-1 transition duration-300" 
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

      

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-royal-blue to-blue-600 rounded-2xl p-8 text-white text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter and get the latest AI insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-royal-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Articles;