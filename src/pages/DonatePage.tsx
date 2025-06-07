import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Heart, Coffee, AlertCircle, CheckCircle2 } from 'lucide-react';
import { currencies, formatCurrency, convertToINR } from '../utils/currencyConverter';

const DonatePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Donate | HopeMeals';
    window.scrollTo(0, 0);
  }, []);

  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [donationAmount, setDonationAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Base amounts in INR (₹3000 per meal)
  const baseDonationOptions = [
    { amount: 3000, meals: 1 },
    { amount: 6000, meals: 2 },
    { amount: 15000, meals: 5 },
    { amount: 30000, meals: 10 }
  ];

  const handleDonationSelect = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalAmountInSelectedCurrency = donationAmount || (customAmount ? parseFloat(customAmount) : 0);
    const finalAmountInINR = convertToINR(finalAmountInSelectedCurrency, selectedCurrency);
    
    if (finalAmountInINR >= 300) { // Minimum ₹300 in INR
      if (isMonthly) {
        // For monthly subscriptions, redirect to PayPal subscription
        if (finalAmountInINR >= 3000) {
          // Multiple meals subscription
          window.open('https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-88P406032S818564LNBB6X6Q', '_blank');
        } else {
          // Single meal subscription
          window.open('https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8UA43945A0270800MNBB6VJI', '_blank');
        }
      } else {
        // For one-time donations, redirect to PayPal.me
        window.open('https://paypal.me/hopemeals', '_blank');
      }
      setFormSubmitted(true);
    }
  };

  const finalAmountInSelectedCurrency = donationAmount || (customAmount ? parseFloat(customAmount) : 0);
  const finalAmountInINR = convertToINR(finalAmountInSelectedCurrency, selectedCurrency);
  const mealsCount = Math.floor(finalAmountInINR / 3000);

  const currentCurrency = currencies.find(c => c.code === selectedCurrency);

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
              Make a <span className="text-primary-600">Difference</span>
            </h1>
            <p className="text-xl text-neutral-700 mb-8">
              Your donation helps provide nutritious meals to underprivileged students, allowing them to focus on their education rather than hunger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Donation Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {!formSubmitted ? (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-neutral-800 mb-6">Make Your Contribution</h2>
                    
                    <form onSubmit={handleSubmit}>
                      {/* Currency Selection */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Select Currency</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {currencies.map((currency) => (
                            <button
                              key={currency.code}
                              type="button"
                              className={`p-3 rounded-lg border-2 text-center transition-colors ${
                                selectedCurrency === currency.code
                                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                                  : 'border-neutral-200 hover:border-primary-300'
                              }`}
                              onClick={() => {
                                setSelectedCurrency(currency.code);
                                setDonationAmount(null);
                                setCustomAmount('');
                              }}
                            >
                              <div className="font-bold">{currency.symbol}</div>
                              <div className="text-sm">{currency.code}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Donation Type */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Donation Type</h3>
                        <div className="flex items-center bg-neutral-50 rounded-lg p-2">
                          <button
                            type="button"
                            className={`flex-1 py-2 rounded-md transition-colors ${
                              !isMonthly ? 'bg-white shadow-sm text-primary-600' : 'text-neutral-600'
                            }`}
                            onClick={() => setIsMonthly(false)}
                          >
                            One-time
                          </button>
                          <button
                            type="button"
                            className={`flex-1 py-2 rounded-md transition-colors ${
                              isMonthly ? 'bg-white shadow-sm text-primary-600' : 'text-neutral-600'
                            }`}
                            onClick={() => setIsMonthly(true)}
                          >
                            Monthly
                          </button>
                        </div>
                      </div>
                      
                      {/* Donation Amount */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Donation Amount</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          {baseDonationOptions.map((option) => (
                            <button
                              key={option.amount}
                              type="button"
                              className={`relative border-2 rounded-xl p-4 text-center transition-colors ${
                                donationAmount === option.amount 
                                  ? 'border-primary-500 bg-primary-50' 
                                  : 'border-neutral-200 hover:border-primary-300'
                              }`}
                              onClick={() => handleDonationSelect(option.amount)}
                            >
                              <p className="text-xl font-bold text-neutral-800">
                                {formatCurrency(option.amount, selectedCurrency)}
                              </p>
                              <p className="text-sm text-neutral-600">= {option.meals} meal{option.meals > 1 ? 's' : ''}</p>
                            </button>
                          ))}
                        </div>
                        <div className="mb-4">
                          <label htmlFor="custom-amount" className="block text-sm font-medium text-neutral-700 mb-2">
                            Or enter custom amount (Minimum {formatCurrency(300, selectedCurrency)})
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
                              {currentCurrency?.symbol}
                            </span>
                            <input
                              type="number"
                              id="custom-amount"
                              placeholder="Enter amount"
                              step="0.01"
                              value={customAmount}
                              onChange={handleCustomAmountChange}
                              className="w-full pl-8 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                          </div>
                          {finalAmountInSelectedCurrency > 0 && (
                            <p className="text-sm text-neutral-600 mt-2">
                              This will provide {mealsCount} meal{mealsCount !== 1 ? 's' : ''} to students in need
                            </p>
                          )}
                        </div>
                      </div>
                      
                      {/* Personal Information */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Your Information</h3>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                              Message (Optional)
                            </label>
                            <textarea
                              id="message"
                              rows={3}
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Payment Button */}
                      <button
                        type="submit"
                        disabled={!finalAmountInSelectedCurrency || finalAmountInINR < 300}
                        className={`w-full flex items-center justify-center gap-2 py-4 rounded-lg font-semibold text-white transition-colors ${
                          finalAmountInSelectedCurrency && finalAmountInINR >= 300
                            ? 'bg-primary-600 hover:bg-primary-700'
                            : 'bg-neutral-300 cursor-not-allowed'
                        }`}
                      >
                        <CreditCard size={20} />
                        Proceed to PayPal
                      </button>
                      
                      <div className="mt-4 flex items-start gap-2 text-neutral-600 text-sm">
                        <AlertCircle size={16} className="flex-shrink-0 mt-1" />
                        <p>
                          By proceeding, you'll be redirected to PayPal for secure payment processing. All donations are tax-deductible under Section 80G of the Income Tax Act, India.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100 p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <CheckCircle2 size={64} className="text-success-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-800 mb-4">Thank You for Your Donation!</h2>
                  <p className="text-lg text-neutral-600 mb-6">
                    You've been redirected to PayPal to complete your donation. Your contribution will help provide nutritious meals to students in need.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="btn-primary"
                  >
                    Make Another Donation
                  </button>
                </div>
              )}
            </motion.div>
            
            {/* Sidebar */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Impact Card */}
              <div className="bg-primary-50 rounded-2xl p-6 mb-8 border border-primary-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-500 rounded-full p-3 text-white">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800">Your Impact</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Your donation directly funds our meal program, providing nutritious food to underprivileged students across Pune's government colleges.
                </p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Coffee size={20} className="text-primary-600" />
                    <p className="font-semibold">{formatCurrency(3000, selectedCurrency)} = 1 nutritious meal</p>
                  </div>
                  <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-500 rounded-full" style={{ width: `${Math.min((finalAmountInINR || 0) / 150, 100)}%` }}></div>
                  </div>
                  <p className="text-sm text-neutral-600 mt-2">
                    Your donation of {formatCurrency(finalAmountInINR || 0, selectedCurrency)} will provide {mealsCount} meal{mealsCount !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              
              {/* Tax Info */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <h3 className="text-lg font-bold text-neutral-800 mb-3">Tax Benefits</h3>
                <p className="text-neutral-600 mb-4">
                  All donations to HopeMeals are eligible for tax deduction under Section 80G of the Income Tax Act, India. You will receive an official receipt via email.
                </p>
                <hr className="border-neutral-200 my-4" />
                <h3 className="text-lg font-bold text-neutral-800 mb-3">Have Questions?</h3>
                <p className="text-neutral-600 mb-4">
                  For any queries regarding donations or tax receipts, please contact our team:
                </p>
                <p className="text-primary-600 font-medium">muthasafal@gmail.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Giving */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">Corporate Partnerships</h2>
              <p className="text-lg text-neutral-600 mb-8">
                We welcome corporate partnerships and CSR initiatives. Your organization can make a significant impact on student welfare and education.
              </p>
              <a href="mailto:muthasafal@gmail.com" className="btn-primary">
                Contact Us for Corporate Giving
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;