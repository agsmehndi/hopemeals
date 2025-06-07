import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, UserCheck, Building, Gift } from 'lucide-react';

const GetInvolvedSection: React.FC = () => {
  const involvementOptions = [
    {
      icon: <Users size={36} className="text-primary-600" />,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers to help with food distribution, event management, and awareness campaigns.",
      link: "/get-involved#volunteer"
    },
    {
      icon: <Building size={36} className="text-primary-600" />,
      title: "College Partnership",
      description: "If you're from a college administration, partner with us to bring HopeMeals to your campus.",
      link: "/get-involved#partner"
    },
    {
      icon: <UserCheck size={36} className="text-primary-600" />,
      title: "Corporate Collaboration",
      description: "We welcome corporate partnerships for CSR initiatives, sponsorships, and employee volunteer programs.",
      link: "/get-involved#corporate"
    },
    {
      icon: <Gift size={36} className="text-primary-600" />,
      title: "Donate",
      description: "Your financial contribution helps us provide nutritious meals to more students in need.",
      link: "/donate"
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
    <section className="py-16 bg-neutral-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">How You Can Help</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            There are many ways to support our mission to combat student hunger. Find the option that best suits your interests and capacity.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {involvementOptions.map((option, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-100 hover:shadow-lg transition-shadow"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">{option.title}</h3>
                <p className="text-neutral-600 mb-6">{option.description}</p>
                <Link 
                  to={option.link} 
                  className="inline-flex items-center font-semibold text-primary-600 hover:text-primary-700"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/get-involved" className="btn-primary">
            Get Involved Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;