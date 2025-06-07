import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "HopeMeals has changed my college experience. I no longer have to choose between buying textbooks and having a proper meal. I can focus on my studies without worrying about hunger.",
    name: "Priya Sharma",
    role: "Engineering Student, Government College of Engineering, Pune",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    quote: "As a student from a rural area, the financial burden of education was already high. HopeMeals provides me with nutritious food that helps me stay energized throughout my busy college day.",
    name: "Rahul Patil",
    role: "Science Student, Fergusson College",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    quote: "The NFC card system is convenient and discreet. It preserves our dignity while ensuring we get the nutrition we need to succeed academically. I'm grateful for this initiative.",
    name: "Ananya Desai",
    role: "Arts Student, SNDT Women's University",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
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
          <h2 className="section-title">Student Voices</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Hear from the students whose lives have been positively impacted by the HopeMeals initiative.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                x: `${-currentIndex * 100}%`,
                transition: { duration: 0.5 }
              }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-2/5 relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                      <Quote size={42} className="text-primary-200 mb-4" />
                      <p className="text-lg md:text-xl text-neutral-700 mb-6 italic">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h4 className="font-semibold text-xl text-neutral-800">{testimonial.name}</h4>
                        <p className="text-neutral-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-neutral-600 hover:text-primary-600 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index 
                      ? 'bg-primary-600' 
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-neutral-600 hover:text-primary-600 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;