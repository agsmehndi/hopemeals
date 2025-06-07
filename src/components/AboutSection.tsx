import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Utensils, Users, School } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Utensils size={24} className="text-primary-600" />,
      title: 'Nutritious Meals',
      description: 'Our program ensures students receive balanced, nutritious meals that fuel their academic pursuits.'
    },
    {
      icon: <Users size={24} className="text-primary-600" />,
      title: 'Student Dignity',
      description: 'NFC-enabled cards provide a discreet way for students to access meals without stigma.'
    },
    {
      icon: <School size={24} className="text-primary-600" />,
      title: 'Educational Support',
      description: 'By addressing hunger, we help students focus on their studies rather than their next meal.'
    },
    {
      icon: <Heart size={24} className="text-primary-600" />,
      title: 'Community Building',
      description: 'We foster a sense of community and support among students, volunteers, and donors.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students working together in college" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-2xl shadow-lg hidden md:block">
              <p className="text-xl font-bold">Since 2024</p>
              <p className="text-sm">Serving Pune's students</p>
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">About HopeMeals</h2>
            <p className="text-lg text-neutral-600 mb-6">
              HopeMeals is a student-led initiative based in Pune, Maharashtra, India. We are dedicated to combating student hunger in government colleges by providing underprivileged students with NFC-enabled cards for accessing nutritious meals.
            </p>
            <p className="text-lg text-neutral-600 mb-8">
              Our mission is to ensure that no student has to choose between education and nutrition. By addressing this basic need, we empower students to focus on their academic and professional growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-neutral-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="btn-primary inline-block">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;