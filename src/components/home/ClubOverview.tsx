import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Globe } from 'lucide-react';

const ClubOverview: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To foster innovative thinking and sustainable technological solutions that address global environmental challenges.',
      color: 'text-olive',
      bgColor: 'bg-olive/10',
      borderColor: 'border-olive/30'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a diverse community of tech enthusiasts, environmental advocates, and future innovators.',
      color: 'text-forest',
      bgColor: 'bg-forest/10',
      borderColor: 'border-forest/30'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Developing cutting-edge solutions that merge technology with environmental consciousness.',
      color: 'text-muted-gold',
      bgColor: 'bg-muted-gold/10',
      borderColor: 'border-muted-gold/30'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Creating meaningful change through technology-driven environmental initiatives and awareness programs.',
      color: 'text-brown',
      bgColor: 'bg-brown/10',
      borderColor: 'border-brown/30'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream/30 relative">
      <div className="absolute inset-0 bg-paper-texture opacity-20"></div>
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-forest technical-heading">
            Club Overview
          </h2>
          <p className="font-sans-body text-lg text-technical-gray max-w-3xl mx-auto leading-relaxed">
            The Techno Smart Campus Club is a dynamic community of students passionate about leveraging technology for environmental sustainability and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`vintage-card p-6 ink-stamp hover:scale-105 transition-all duration-300 h-full ${feature.bgColor} ${feature.borderColor} border-2`}>
                <div className="flex items-center mb-4">
                  <div className={`p-4 rounded-lg bg-paper group-hover:bg-cream transition-colors ${feature.color} shadow-technical`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                </div>
                <h3 className="font-serif-heading font-semibold text-xl mb-3 text-forest group-hover:text-olive transition-colors">
                  {feature.title}
                </h3>
                <p className="font-sans-body text-technical-gray group-hover:text-ink transition-colors leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubOverview;