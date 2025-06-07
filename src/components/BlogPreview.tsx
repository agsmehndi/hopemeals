import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPreview: React.FC = () => {
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
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="section-title text-center md:text-left mb-2">Latest Updates</h2>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Stay informed with our latest news, stories, and insights about student hunger and our initiatives.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="mt-4 md:mt-0 flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View All Posts
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              className="card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;