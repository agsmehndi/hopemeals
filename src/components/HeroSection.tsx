import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-secondary-100 rounded-full opacity-40"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 mb-4 bg-primary-100 text-primary-600 rounded-full font-medium text-sm">Created by a Class 10 Student</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-neutral-800 mb-4 leading-tight">
              Supporting Medical Students in <span className="text-primary-600">Pune</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl mx-auto md:mx-0">
              Providing nutritious meals to low-income medical students through NFC-enabled cards, ensuring they can focus on their studies without worrying about their next meal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/signup" 
                className="btn-primary"
              >
                Apply Now
              </Link>
              <Link 
                to="/donate" 
                className="btn-outline flex items-center justify-center gap-2"
              >
                Support a Student
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img 
                src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Medical students studying together" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <motion.div 
              className="absolute -bottom-10 -left-10 bg-white rounded-xl shadow-lg p-4 z-10 hidden md:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center px-4">
                  <p className="text-3xl font-bold text-primary-600">500+</p>
                  <p className="text-sm text-neutral-600">Students Helped</p>
                </div>
                <div className="text-center px-4 border-l border-neutral-200">
                  <p className="text-3xl font-bold text-secondary-600">5</p>
                  <p className="text-sm text-neutral-600">Medical Colleges</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;