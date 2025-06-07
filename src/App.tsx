import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ImpactPage from './pages/ImpactPage';
import DonatePage from './pages/DonatePage';
import SignupPage from './pages/SignupPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;