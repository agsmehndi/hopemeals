import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, UserCheck, Building, Clock, CheckCircle2 } from 'lucide-react';

const GetInvolvedPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Get Involved | HopeMeals';
    window.scrollTo(0, 0);
    
    // Check if there's a hash in the URL and scroll to that section
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    experience: '',
    availability: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    setFormSubmitted(true);
  };

  const volunteerOptions = [
    {
      title: "Food Distribution",
      description: "Help distribute meals at college canteens and ensure students receive their nutritious food.",
      commitment: "2-3 hours per week",
      skills: "Reliability, organization"
    },
    {
      title: "Awareness Campaigns",
      description: "Participate in awareness drives to educate students about the program and nutritional health.",
      commitment: "4-5 hours per week",
      skills: "Communication, creativity"
    },
    {
      title: "Fundraising",
      description: "Assist with organizing fundraising events and reaching out to potential donors.",
      commitment: "3-4 hours per week",
      skills: "Networking, persuasion"
    },
    {
      title: "Technical Support",
      description: "Help maintain the NFC card system and troubleshoot any technical issues.",
      commitment: "2-3 hours per week",
      skills: "Technical knowledge, problem-solving"
    }
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
              Get <span className="text-primary-600">Involved</span>
            </h1>
            <p className="text-xl text-neutral-700 mb-8">
              Join our mission to combat student hunger. There are many ways you can contribute to making a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Ways to Make an Impact</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Whether you have time, skills, or resources to share, there's a place for you in our mission.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Volunteer */}
            <motion.div 
              id="volunteer"
              className="bg-neutral-50 rounded-xl p-8 border border-neutral-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Users size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">Volunteer</h3>
              <p className="text-neutral-600 mb-6">
                Join our team of dedicated volunteers who help with food distribution, awareness campaigns, and event organization.
              </p>
              <a href="#volunteer-form" className="btn-primary inline-block">
                Apply as Volunteer
              </a>
            </motion.div>
            
            {/* Partner */}
            <motion.div 
              id="partner"
              className="bg-neutral-50 rounded-xl p-8 border border-neutral-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Building size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">College Partnership</h3>
              <p className="text-neutral-600 mb-6">
                If you're from a college administration, partner with us to bring HopeMeals to your campus and support your students.
              </p>
              <a href="mailto:muthasafal@gmail.com" className="btn-primary inline-block">
                Contact for Partnership
              </a>
            </motion.div>
            
            {/* Corporate */}
            <motion.div 
              id="corporate"
              className="bg-neutral-50 rounded-xl p-8 border border-neutral-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <UserCheck size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">Corporate Collaboration</h3>
              <p className="text-neutral-600 mb-6">
                We welcome corporate partnerships for CSR initiatives, sponsorships, and employee volunteer programs.
              </p>
              <a href="mailto:muthasafal@gmail.com" className="btn-primary inline-block">
                Explore Collaboration
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Volunteer Opportunities</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We have various volunteer roles that cater to different skills, interests, and time commitments.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {volunteerOptions.map((option, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-neutral-800 mb-3">{option.title}</h3>
                <p className="text-neutral-600 mb-4">{option.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2 text-neutral-700">
                    <Clock size={18} className="text-primary-500" />
                    <span>{option.commitment}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-700">
                    <CheckCircle2 size={18} className="text-primary-500" />
                    <span>Skills: {option.skills}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section id="volunteer-form" className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Volunteer Application</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Fill out the form below to express your interest in volunteering with HopeMeals.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {!formSubmitted ? (
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-8">
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="interest" className="block text-sm font-medium text-neutral-700 mb-2">
                          Area of Interest*
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        >
                          <option value="">Select an option</option>
                          <option value="Food Distribution">Food Distribution</option>
                          <option value="Awareness Campaigns">Awareness Campaigns</option>
                          <option value="Fundraising">Fundraising</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-neutral-700 mb-2">
                          Relevant Experience
                        </label>
                        <input
                          type="text"
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="availability" className="block text-sm font-medium text-neutral-700 mb-2">
                          Availability*
                        </label>
                        <select
                          id="availability"
                          name="availability"
                          value={formData.availability}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        >
                          <option value="">Select an option</option>
                          <option value="Weekdays">Weekdays</option>
                          <option value="Weekends">Weekends</option>
                          <option value="Both">Both</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Why do you want to volunteer with HopeMeals?*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100 p-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-6">
                  <CheckCircle2 size={64} className="text-success-500" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-800 mb-4">Thank You for Your Interest!</h2>
                <p className="text-lg text-neutral-600 mb-6">
                  We've received your application. Our team will review it and get back to you within 48 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-primary"
                >
                  Submit Another Application
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Corporate Partnership */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Corporate Partnerships</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Partner with HopeMeals as part of your corporate social responsibility initiatives.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">Partner Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">Align your brand with a cause that resonates with the community</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">Engage employees in meaningful volunteer opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">Receive recognition in our marketing materials and annual reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">Make a measurable impact on student welfare and education</span>
                </li>
              </ul>
              <div className="mt-8">
                <a href="mailto:muthasafal@gmail.com" className="btn-primary inline-block">
                  Contact for Partnership
                </a>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Corporate partners discussing collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;