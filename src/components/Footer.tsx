import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <Heart size={28} className="text-primary-500 fill-primary-500" />
              <span className="font-heading text-white">
                Hope<span className="text-primary-500">Meals</span>
              </span>
            </Link>
            <p className="text-neutral-300 leading-relaxed">
              A student-led initiative based in Pune, dedicated to combating student hunger in government colleges through NFC-enabled meal cards.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/impact" className="text-neutral-300 hover:text-primary-500 transition-colors">Our Impact</Link>
              </li>
              <li>
                <Link to="/donate" className="text-neutral-300 hover:text-primary-500 transition-colors">Donate</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-500 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">P-001, Rohan Mithila – 1, Viman Nagar, Pune – 411014, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-neutral-300">+91 8669900008</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-neutral-300">muthasafal@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Subscribe to Newsletter</h3>
            <p className="text-neutral-300 mb-4">Stay updated with our latest news and initiatives.</p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-neutral-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} HopeMeals. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;