import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import {
  School,
  User,
  Mail,
  Phone,
  FileText,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    college: '',
    year: '',
    familyIncome: '',
    reason: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        dob: formData.dob,
        stemail: formData.email,
        phone: formData.phone,
        college: formData.college,
        year: formData.year,
        income: formData.familyIncome,
        reason: formData.reason,
      };

      await emailjs.send(
        'service_p1z9xlj',
        'template_wkqwy6f',
        templateParams,
        'NIc3_x6uhH7aR7ehX'
      );

      setSubmitted(true);
      toast.success('Application submitted successfully!');
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-neutral-800 mb-6">
              Student <span className="text-primary-600">Application</span>
            </h1>
            <p className="text-xl text-neutral-700 mb-8">
              Apply for the HopeMeals program to receive support for your daily meals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {!submitted ? (
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-8">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Full Name*
                        </label>
                        <div className="relative">
                          <User
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"
                            size={18}
                          />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="dob"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Date of Birth*
                        </label>
                        <div className="relative">
                          <Calendar
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"
                            size={18}
                          />
                          <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Email Address*
                        </label>
                        <div className="relative">
                          <Mail
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"
                            size={18}
                          />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Phone Number*
                        </label>
                        <div className="relative">
                          <Phone
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"
                            size={18}
                          />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="college"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Medical College*
                        </label>
                        <div className="relative">
                          <School
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"
                            size={18}
                          />
                          <input
                            type="text"
                            id="college"
                            name="college"
                            value={formData.college}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="year"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Year of Study*
                        </label>
                        <select
                          id="year"
                          name="year"
                          value={formData.year}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        >
                          <option value="">Select year</option>
                          <option value="First Year">First Year</option>
                          <option value="Second Year">Second Year</option>
                          <option value="Third Year">Third Year</option>
                          <option value="Fourth Year">Fourth Year</option>
                          <option value="Intern">Intern</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="familyIncome"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Annual Family Income*
                        </label>
                        <input
                          type="text"
                          id="familyIncome"
                          name="familyIncome"
                          value={formData.familyIncome}
                          onChange={handleInputChange}
                          placeholder="e.g., ₹200,000"
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="reason"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Why do you need this support?*
                        </label>
                        <div className="relative">
                          <FileText
                            className="absolute left-3 top-3 text-neutral-400"
                            size={18}
                          />
                          <textarea
                            id="reason"
                            name="reason"
                            rows={4}
                            value={formData.reason}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full mt-8 btn-primary flex items-center justify-center gap-2 ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
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
                <h2 className="text-2xl font-bold text-neutral-800 mb-4">
                  Application Submitted!
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Thank you for applying to the HopeMeals program. We will
                  review your application and contact you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                >
                  Submit Another Application
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;