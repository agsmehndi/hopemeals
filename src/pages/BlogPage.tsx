import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Search, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog | HopeMeals';
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "How Student Hunger Affects Academic Performance",
      excerpt: "Research shows a direct correlation between nutrition and academic success. Learn how hunger impacts learning and what we can do about it.",
      date: "June 15, 2025",
      author: "Dr. Meera Patel",
      image: "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Research"
    },
    {
      id: 2,
      title: "Our First Year: Impact and Lessons Learned",
      excerpt: "Looking back at our first year of operations, the challenges we faced, the successes we celebrated, and the students we helped.",
      date: "May 28, 2025",
      author: "Aditya Sharma",
      image: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Impact Report"
    },
    {
      id: 3,
      title: "Meet the Student Volunteers Behind HopeMeals",
      excerpt: "Our initiative is powered by passionate student volunteers. Get to know the team that makes our mission possible.",
      date: "April 10, 2025",
      author: "Nisha Joshi",
      image: "https://images.pexels.com/photos/6168358/pexels-photo-6168358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Our Team"
    },
    {
      id: 4,
      title: "Nutritional Guidelines for Student Meals",
      excerpt: "We ensure all meals provided through HopeMeals meet specific nutritional guidelines. Learn about our approach to balanced nutrition.",
      date: "March 22, 2025",
      author: "Dr. Raj Patel",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Nutrition"
    },
    {
      id: 5,
      title: "How NFC Technology is Revolutionizing Student Meal Programs",
      excerpt: "Our NFC card system provides a discreet and efficient way for students to access meals. Learn about the technology behind it.",
      date: "February 18, 2025",
      author: "Rahul Singh",
      image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Technology"
    },
    {
      id: 6,
      title: "Partner Spotlight: Savitribai Phule Pune University",
      excerpt: "A look at our partnership with SPPU and how it has helped us reach more students in need across the campus.",
      date: "January 30, 2025",
      author: "Meera Desai",
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Partnerships"
    }
  ];

  const categories = ['All', 'Research', 'Impact Report', 'Our Team', 'Nutrition', 'Technology', 'Partnerships'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 md:py-24">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-neutral-800 mb-6">
              Our <span className="text-primary-600">Blog</span>
            </h1>
            <p className="text-xl text-neutral-700 mb-8">
              Insights, updates, and stories about student hunger, nutrition, and our impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div 
                className="sticky top-24"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Search */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 mb-8">
                  <h3 className="text-lg font-bold text-neutral-800 mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                  <h3 className="text-lg font-bold text-neutral-800 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => setActiveCategory(category)}
                          className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${
                            activeCategory === category 
                              ? 'bg-primary-50 text-primary-600' 
                              : 'text-neutral-700 hover:bg-neutral-50'
                          }`}
                        >
                          <Tag size={16} className="mr-2 flex-shrink-0" />
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
            
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.article 
                      key={post.id}
                      className="card group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="relative overflow-hidden aspect-[16/9]">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary-600 text-white text-xs font-medium py-1 px-2 rounded">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-neutral-500 mb-3">
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {post.date}
                          </span>
                          <span className="flex items-center ml-4">
                            <User size={14} className="mr-1" />
                            {post.author}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-neutral-800 group-hover:text-primary-600 transition-colors">
                          <a href={`#blog-${post.id}`}>{post.title}</a>
                        </h3>
                        <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                        <a 
                          href={`#blog-${post.id}`} 
                          className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
                        >
                          Read More
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </a>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl text-neutral-600">No posts found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('All');
                    }}
                    className="mt-4 text-primary-600 font-medium hover:text-primary-700"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
              
              {/* Pagination */}
              {filteredPosts.length > 0 && (
                <motion.div 
                  className="flex justify-center mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <nav className="flex items-center gap-2">
                    <button 
                      className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                      aria-label="Previous page"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-600 text-white">1</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50">2</button>
                    <button 
                      className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                      aria-label="Next page"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </nav>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Stay updated with our latest news, stories, and initiatives. We'll send you a monthly digest of our best content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;