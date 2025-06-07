import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | HopeMeals';
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    setFormSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-primary-600" />,
      title: "Our Location",
      details: "P-001, Rohan Mithila – 1, Viman Nagar, Pune – 411014, India",
      action: {
        text: "Get Directions",
        url: "https://maps.app.goo.gl/GxfY5eVVsMEHKnov8"
      }
    },
    {
      icon: <Phone size={24} className="text-primary-600" />,
      title: "Phone Number",
      details: "+91 8669900008",
      action: {
        text: "Call Us",
        url: "tel:+918669900008"
      }
    },
    {
      icon: <Mail size={24} className="text-primary-600" />,
      title: "Email Address",
      details: "muthasafal@gmail.com",
      action: {
        text: "Send Email",
        url: "mailto:muthasafal@gmail.com"
      }
    },
    {
      icon: <Clock size={24} className="text-primary-600" />,
      title: "Office Hours",
      details: "Monday - Friday: 9am - 5pm",
      action: {
        text: "See Hours",
        url: "#hours"
      }
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
              Get in <span className="text-primary-600">Touch</span>
            </h1>
            <p className="text-xl text-neutral-700 mb-8">
              Have questions or want to learn more about HopeMeals? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="bg-neutral-50 rounded-xl p-6 border border-neutral-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800">{info.title}</h3>
                </div>
                <p className="text-neutral-600 mb-4">{info.details}</p>
                <a 
                  href={info.action.url} 
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
                  target={info.action.url.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {info.action.text}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-neutral-800 mb-6">Send Us a Message</h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              {!formSubmitted ? (
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
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
                    </div>
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                        Subject*
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <CheckCircle2 size={64} className="text-success-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">Message Sent!</h3>
                  <p className="text-lg text-neutral-600 mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </motion.div>
            
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-neutral-800 mb-6">Find Us</h2>
              <p className="text-neutral-600 mb-8">
                Visit our office at Viman Nagar, Pune to learn more about our initiative.
              </p>
              
              <div className="rounded-xl overflow-hidden shadow-md h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.9063906!3d18.5642456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sRohan%20Mithila!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HopeMeals Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Find answers to common questions about HopeMeals.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                <h3 className="text-xl font-bold text-neutral-800 mb-3">How can I volunteer with HopeMeals?</h3>
                <p className="text-neutral-600">
                  You can volunteer by filling out the application form on our Get Involved page. We have various roles available based on your skills and availability.
                </p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                <h3 className="text-xl font-bold text-neutral-800 mb-3">How are donations used?</h3>
                <p className="text-neutral-600">
                  100% of donations go directly to providing meals for students. We maintain complete transparency in our fund allocation, which you can view in our annual reports.
                </p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                <h3 className="text-xl font-bold text-neutral-800 mb-3">How can my college partner with HopeMeals?</h3>
                <p className="text-neutral-600">
                  If you're from a college administration, you can contact us through the Corporate Partnership form or email us at muthasafal@gmail.com to discuss collaboration.
                </p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                <h3 className="text-xl font-bold text-neutral-800 mb-3">Are donations tax-deductible?</h3>
                <p className="text-neutral-600">
                  Yes, all donations to HopeMeals are eligible for tax deduction under Section 80G of the Income Tax Act, India. You will receive an official receipt for your records.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;