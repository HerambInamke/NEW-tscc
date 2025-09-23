import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, Target, Users, Award, Globe, TrendingUp, Users2, Handshake } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability First',
      description: 'We prioritize environmental consciousness in every project and initiative we undertake, ensuring that our technological solutions contribute to a greener future.',
      color: 'text-olive',
      bgColor: 'bg-olive/5'
    },
    {
      icon: Zap,
      title: 'Innovation Drive',
      description: 'Pushing boundaries with cutting-edge technology solutions that make a real difference in addressing environmental challenges and creating sustainable alternatives.',
      color: 'text-forest',
      bgColor: 'bg-forest/5'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'Building strong partnerships and fostering teamwork across disciplines and backgrounds to create comprehensive solutions that benefit our entire community.',
      color: 'text-muted-gold',
      bgColor: 'bg-muted-gold/5'
    },
    {
      icon: Target,
      title: 'Impact Focused',
      description: 'Every project is designed to create measurable positive impact on our community and environment, with clear goals and measurable outcomes.',
      color: 'text-brown',
      bgColor: 'bg-brown/5'
    }
  ];

  const milestones = [
    { 
      year: '2022', 
      event: 'Club Foundation', 
      description: 'Techno Smart Campus Club was established with 15 founding members, marking the beginning of our journey towards sustainable technology innovation.',
      icon: Users2,
      color: 'text-olive'
    },
    { 
      year: '2022', 
      event: 'First Major Project', 
      description: 'Launched our first smart energy monitoring system across campus, reducing energy consumption by 15% in the first semester.',
      icon: TrendingUp,
      color: 'text-forest'
    },
    { 
      year: '2023', 
      event: 'National Recognition', 
      description: 'Won the National Green Tech Innovation Award for our innovative approach to sustainable campus management and student engagement.',
      icon: Award,
      color: 'text-muted-gold'
    },
    { 
      year: '2023', 
      event: 'Rapid Growth', 
      description: 'Expanded to 150+ active members across multiple departments, creating a diverse community of passionate environmental advocates.',
      icon: Users,
      color: 'text-brown'
    },
    { 
      year: '2024', 
      event: 'Industry Partnerships', 
      description: 'Established collaborations with 5+ leading technology companies and environmental organizations to scale our impact beyond campus.',
      icon: Handshake,
      color: 'text-olive'
    },
    { 
      year: '2024', 
      event: 'Impact Milestone', 
      description: 'Achieved 50% reduction in campus energy consumption through our comprehensive smart technology implementation and awareness programs.',
      icon: Target,
      color: 'text-forest'
    }
  ];

  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif-heading font-bold text-5xl md:text-6xl lg:text-7xl text-forest mb-8"
            >
              About Us
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans-body text-xl md:text-2xl text-technical-gray mb-12 leading-relaxed"
            >
              The Techno Smart Campus Club is more than just a student organization—we're a movement of passionate innovators dedicated to creating a sustainable future through technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-paper p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-olive to-forest rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-paper" />
                </div>
                <h2 className="font-serif-heading font-bold text-3xl text-forest">Our Mission</h2>
              </div>
              <p className="font-sans-body text-lg text-technical-gray leading-relaxed">
                To foster a community of innovative thinkers who leverage cutting-edge technology to address environmental challenges and create sustainable solutions for a better tomorrow. We believe that the fusion of technology and environmental consciousness is key to solving the world's most pressing problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-paper p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-forest to-olive rounded-2xl flex items-center justify-center mr-4">
                  <Globe className="w-8 h-8 text-paper" />
                </div>
                <h2 className="font-serif-heading font-bold text-3xl text-forest">Our Vision</h2>
              </div>
              <p className="font-sans-body text-lg text-technical-gray leading-relaxed">
                To become the leading force in sustainable technology innovation at MIT ADT University and beyond. We envision a future where every technological advancement contributes to environmental preservation and social good, creating a lasting positive impact on our planet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif-heading font-bold text-4xl md:text-5xl text-forest mb-6">
              Our Core Values
            </h2>
            <p className="font-sans-body text-lg text-technical-gray max-w-3xl mx-auto">
              The principles that guide every decision, project, and interaction within our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`${value.bgColor} p-8 rounded-3xl h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                  <div className={`${value.color} mb-6`}>
                    <value.icon className="w-12 h-12" />
                  </div>
                  <h3 className="font-serif-heading font-bold text-2xl text-forest mb-4">
                    {value.title}
                  </h3>
                  <p className="font-sans-body text-technical-gray leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif-heading font-bold text-4xl md:text-5xl text-forest mb-6">
              Our Journey
            </h2>
            <p className="font-sans-body text-lg text-technical-gray max-w-3xl mx-auto">
              Key milestones and achievements that have shaped TSCC into what it is today
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-olive via-muted-gold to-forest rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-olive to-forest rounded-full border-4 border-paper shadow-lg flex items-center justify-center z-10">
                    <milestone.icon className="w-4 h-4 text-paper" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="bg-paper p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center mb-4">
                        <span className={`font-serif-heading font-bold text-sm ${milestone.color} bg-forest text-paper px-4 py-2 rounded-full`}>
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="font-serif-heading font-bold text-2xl text-forest mb-4">
                        {milestone.event}
                      </h3>
                      <p className="font-sans-body text-technical-gray leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif-heading font-bold text-4xl md:text-5xl text-forest mb-6">
              Join Our Mission
            </h2>
            <p className="font-sans-body text-lg text-technical-gray mb-12 max-w-2xl mx-auto">
              Be part of a community that's making a real difference in creating a sustainable future through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-olive to-forest text-paper font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Become a Member
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-olive text-olive font-semibold rounded-full hover:bg-olive hover:text-paper transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;