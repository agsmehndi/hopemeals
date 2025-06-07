import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee } from 'lucide-react';
import { currencies, formatCurrency } from '../utils/currencyConverter';

const DonateSection: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('INR');

  // Base amounts in INR (₹3000 per meal)
  const baseDonationOptions = [
    {
      amount: 3000,
      impact: "Provides 1 nutritious meal",
      recommended: false
    },
    {
      amount: 6000,
      impact: "Provides 2 nutritious meals",
      recommended: true
    },
    {
      amount: 15000,
      impact: "Provides 5 nutritious meals",
      recommended: false
    },
    {
      amount: 30000,
      impact: "Provides 10 nutritious meals",
      recommended: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Make a Difference Today</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Your contribution, no matter the size, helps us provide nutritious meals to students in need. Choose an amount below or customize your donation.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-10">
              {/* Currency Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-center">Select Currency</h3>
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-md">
                    {currencies.map((currency) => (
                      <button
                        key={currency.code}
                        className={`p-3 rounded-lg border-2 text-center transition-colors ${
                          selectedCurrency === currency.code
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                        onClick={() => setSelectedCurrency(currency.code)}
                      >
                        <div className="font-bold">{currency.symbol}</div>
                        <div className="text-sm">{currency.code}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {baseDonationOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative border-2 rounded-xl p-4 text-center cursor-pointer transition-all hover:shadow-md ${
                      option.recommended 
                        ? 'border-primary-500 bg-primary-50' 
                        : 'border-neutral-200 hover:border-primary-300'
                    }`}
                  >
                    {option.recommended && (
                      <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white text-xs py-1 px-2 rounded-full">
                        Popular
                      </span>
                    )}
                    <p className="text-2xl font-bold text-neutral-800">
                      {formatCurrency(option.amount, selectedCurrency)}
                    </p>
                    <p className="text-sm text-neutral-600 mt-1">{option.impact}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mb-8">
                <label htmlFor="custom-amount" className="block text-sm font-medium text-neutral-700 mb-2">
                  Custom Amount ({currencies.find(c => c.code === selectedCurrency)?.symbol})
                </label>
                <input
                  type="number"
                  id="custom-amount"
                  placeholder="Enter custom amount"
                  step="0.01"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/donate" 
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <Coffee size={18} />
                  Donate Now
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  Learn About Other Ways to Help
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="mt-8 text-center text-neutral-600 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p>All donations are tax-deductible under Section 80G of the Income Tax Act, India.</p>
            <p className="mt-2">100% of your donation goes directly to providing meals for students.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;