import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Impact', path: '/impact' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Heart size={28} className="text-primary-600 fill-primary-500" />
          <span className={`font-heading transition-colors duration-300 ${isScrolled ? 'text-primary-600' : 'text-primary-600'}`}>
            Hope<span className="text-secondary-600">Meals</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors hover:text-primary-600 ${
                location.pathname === link.path 
                  ? 'text-primary-600' 
                  : isScrolled ? 'text-gray-700' : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/signup" className="btn-primary">
            Student Sign Up
          </Link>
          <Link to="/donate" className="btn-outline">
            Donate Now
          </Link>
        </nav>
        
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } bg-white shadow-lg`}>
        <div className="container-custom py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium py-2 px-4 rounded-lg transition-colors ${
                location.pathname === link.path 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/signup" 
            className="btn-primary text-center"
          >
            Student Sign Up
          </Link>
          <Link 
            to="/donate" 
            className="btn-outline text-center"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;