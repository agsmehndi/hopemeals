import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, School, Coffee, Award, Heart, ChevronRight } from 'lucide-react';

const ImpactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Impact | HopeMeals';
    window.scrollTo(0, 0);
  }, []);

  const impactStats = [
    {
      icon: <Coffee className="text-primary-500" size={32} />,
      count: '12,000+',
      label: 'Meals Served',
    },
    {
      icon: <Users className="text-primary-500\" size={32} />,
      count: '500+',
      label: 'Students Helped',
    },
    {
      icon: <School className="text-primary-500" size={32} />,
      count: '5',
      label: 'Partner Colleges',
    },
    {
      icon: <Award className="text-primary-500\" size={32} />,
      count: '85%',
      label: 'Academic Improvement',
    }
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      college: "Government College of Engineering, Pune",
      story: "Before HopeMeals, I often skipped lunch to save money for books. My grades were suffering because I couldn't concentrate in afternoon classes. Now with the meal card, I get nutritious lunches that keep me energized throughout the day. My GPA has improved from 6.2 to 8.5 in just one semester.",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Rajesh Kumar",
      college: "Fergusson College",
      story: "Coming from a rural area, my family struggled to support my education in the city. Often I had to choose between buying study materials or having proper meals. HopeMeals changed that. Now I can focus on my studies without worrying about my next meal. I've even been able to join extracurricular activities since I have more energy.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Ananya Desai",
      college: "SNDT Women's University",
      story: "As a part-time student who also works to support my family, finding time to prepare meals was challenging. I often resorted to unhealthy fast food or skipped meals altogether. The HopeMeals card has been a lifesaver, providing me with balanced nutrition that has improved my health and academic performance.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const colleges = [
    "Government College of Engineering, Pune",
    "Fergusson College",
    "SNDT Women's University",
    "College of Agriculture, Pune",
    "Savitribai Phule Pune University"
  ];

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
              Our <span className="text-primary-600">Impact</span>
            </h1>
            <p className="text-xl text-neutral-700 mb-8">
              See how your support is making a difference in the lives of students across Pune's government colleges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">The Numbers That Matter</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Since our inception in 2024, we've made significant strides in combating student hunger.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {impactStats.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-neutral-50 rounded-xl p-6 text-center border border-neutral-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary-50 rounded-full mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-neutral-800 mb-1">{stat.count}</h3>
                <p className="font-medium text-primary-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Success Stories</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Behind every statistic is a student whose life has been positively impacted by HopeMeals.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {successStories.map((story, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="md:grid md:grid-cols-3">
                  <div className="md:col-span-1 aspect-square md:aspect-auto">
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:col-span-2">
                    <div className="flex items-start mb-4">
                      <Heart className="text-primary-500 mr-2 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h3 className="text-xl font-bold text-neutral-800">{story.name}</h3>
                        <p className="text-primary-600">{story.college}</p>
                      </div>
                    </div>
                    <p className="text-neutral-600 italic mb-6">"{story.story}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Colleges */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Our Partner Colleges</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We're proud to work with these institutions to ensure their students have access to nutritious meals.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.ul 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {colleges.map((college, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center bg-neutral-50 p-4 rounded-lg border border-neutral-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ChevronRight className="text-primary-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-neutral-800 font-medium">{college}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Impact Reports */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Impact Reports</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We believe in transparency and regularly publish reports on our impact and fund allocation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-md border border-neutral-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-neutral-800 mb-4">Annual Report 2024</h3>
              <p className="text-neutral-600 mb-4">A comprehensive overview of our activities, impact, and financial allocation for the year 2024.</p>
              <a 
                href="#" 
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Download PDF
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-md border border-neutral-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-neutral-800 mb-4">Academic Impact Study</h3>
              <p className="text-neutral-600 mb-4">Research findings on how the HopeMeals program has affected academic performance among beneficiaries.</p>
              <a 
                href="#" 
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Download PDF
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;