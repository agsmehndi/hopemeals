import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Clock, Users, School } from 'lucide-react';

const ImpactStats: React.FC = () => {
  const stats = [
    {
      icon: <Coffee className="text-primary-500" size={32} />,
      count: '12,000+',
      label: 'Meals Served',
      description: 'Nutritious meals provided to students in need'
    },
    {
      icon: <Users className="text-primary-500\" size={32} />,
      count: '500+',
      label: 'Students Helped',
      description: 'Direct beneficiaries of our meal program'
    },
    {
      icon: <School className="text-primary-500" size={32} />,
      count: '5',
      label: 'Partner Colleges',
      description: 'Institutions working with us across Pune'
    },
    {
      icon: <Clock className="text-primary-500\" size={32} />,
      count: '1',
      label: 'Year Running',
      description: 'Of sustainable impact and growth'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Our Impact</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Through your generous support, we've been able to make a significant difference in the lives of underprivileged students in Pune.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-neutral-50 rounded-xl p-6 text-center transition-transform hover:transform hover:scale-105 border border-neutral-100"
            >
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary-50 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-neutral-800 mb-1">{stat.count}</h3>
              <p className="font-medium text-primary-600 mb-2">{stat.label}</p>
              <p className="text-neutral-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;