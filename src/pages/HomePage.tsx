import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ImpactStats from '../components/ImpactStats';
import Testimonials from '../components/Testimonials';
import DonateSection from '../components/DonateSection';
import GetInvolvedSection from '../components/GetInvolvedSection';
import BlogPreview from '../components/BlogPreview';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'HopeMeals | Fighting Student Hunger in Pune';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ImpactStats />
      <Testimonials />
      <DonateSection />
      <GetInvolvedSection />
      <BlogPreview />
    </>
  );
};

export default HomePage;