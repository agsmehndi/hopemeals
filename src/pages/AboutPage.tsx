import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Users, Heart, Clock, BarChart3, ShieldCheck } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | HopeMeals';
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Riya Sharma",
      role: "Founder & Director",
      bio: "A final year engineering student who started HopeMeals after witnessing hunger among her peers.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Aditya Patel",
      role: "Operations Manager",
      bio: "Manages the day-to-day operations and ensures smooth implementation of the meal card system.",
      image: "https://images.pexels.com/photos/3785991/pexels-photo-3785991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Meera Desai",
      role: "Outreach Coordinator",
      bio: "Builds relationships with colleges, corporate partners, and donors to expand our reach.",
      image: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Rahul Singh",
      role: "Technology Lead",
      bio: "Develops and maintains the NFC card system and technological infrastructure.",
      image: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const values = [
    {
      icon: <Heart size={32} className="text-primary-600" />,
      title: "Compassion",
      description: "We act with empathy and understanding, recognizing the dignity of every student."
    },
    {
      icon: <ShieldCheck size={32} className="text-primary-600" />,
      title: "Integrity",
      description: "We operate with transparency and accountability in all our actions and decisions."
    },
    {
      icon: <Users size={32} className="text-primary-600" />,
      title: "Inclusivity",
      description: "We serve all students in need, regardless of background, gender, or discipline."
    },
    {
      icon: <BarChart3 size={32} className="text-primary-600" />,
      title: "Impact",
      description: "We measure our success by the tangible difference we make in students' lives."
    },
    {
      icon: <Utensils size={32} className="text-primary-600" />,
      title: "Nutrition",
      description: "We prioritize balanced, nutritious meals that support overall wellbeing."
    },
    {
      icon: <Clock size={32} className="text-primary-600" />,
      title: "Sustainability",
      description: "We build lasting solutions that can continue to serve students for years to come."
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
              About <span className="text-primary-600">HopeMeals</span>
            </h1>
            <p className="text-xl text-neutral-700 mb-8">
              A student-led initiative fighting hunger in Pune's government colleges, ensuring that no student has to choose between education and nutrition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg text-neutral-600 mb-6">
                HopeMeals was founded in 2024 by a Class 10 student after visiting a government medical college and witnessing several medical students skipping meals due to financial constraints.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                Disturbed by the impact of hunger on students' health and academic performance, he envisioned a solution that would ensure regular access to nutritious food without compromising the students' dignity.
              </p>
              <p className="text-lg text-neutral-600">
                This led to the creation of the HopeMeals NFC card system, which allows approved students to receive canteen meals discreetly and free of cost. Initially launched as a pilot project at one college, the initiative is steadily expanding, with the goal of reaching more government institutions and supporting hundreds of underprivileged students each day.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Students collaborating on HopeMeals initiative" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Our Values</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              These core principles guide our work and decisions as we strive to combat student hunger.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-2">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              The dedicated students behind HopeMeals who work tirelessly to make our mission a reality.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-800">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                  <p className="text-neutral-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;