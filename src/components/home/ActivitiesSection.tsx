import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, Lightbulb } from 'lucide-react';

const ActivitiesSection: React.FC = () => {
  const activities = [
    {
      year: '2024',
      title: 'Green Tech Hackathon',
      description: 'Organized a 48-hour hackathon focusing on sustainable technology solutions with 200+ participants.',
      icon: Lightbulb,
      color: 'text-olive',
      bgColor: 'bg-olive/10',
      borderColor: 'border-olive/30'
    },
    {
      year: '2024',
      title: 'Solar Panel Installation Drive',
      description: 'Led campus-wide initiative to install 50 solar panels, reducing carbon footprint by 30%.',
      icon: Award,
      color: 'text-forest',
      bgColor: 'bg-forest/10',
      borderColor: 'border-forest/30'
    },
    {
      year: '2023',
      title: 'AI for Climate Workshop',
      description: 'Conducted workshops on using artificial intelligence for climate change mitigation strategies.',
      icon: Users,
      color: 'text-muted-gold',
      bgColor: 'bg-muted-gold/10',
      borderColor: 'border-muted-gold/30'
    },
    {
      year: '2023',
      title: 'Smart Campus Initiative',
      description: 'Implemented IoT-based smart systems for energy monitoring and waste management across campus.',
      icon: Calendar,
      color: 'text-brown',
      bgColor: 'bg-brown/10',
      borderColor: 'border-brown/30'
    },
    {
      year: '2023',
      title: 'Environmental Awareness Campaign',
      description: 'Launched multimedia campaign reaching 5000+ students about sustainable technology practices.',
      icon: Lightbulb,
      color: 'text-sepia',
      bgColor: 'bg-sepia/10',
      borderColor: 'border-sepia/30'
    },
    {
      year: '2022',
      title: 'Zero Waste Challenge',
      description: 'Achieved zero waste goal for club events through innovative recycling and composting programs.',
      icon: Award,
      color: 'text-vintage-blue',
      bgColor: 'bg-vintage-blue/10',
      borderColor: 'border-vintage-blue/30'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-paper/50 relative">
      <div className="absolute inset-0 bg-blueprint-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-forest technical-heading">
            Past Activities
          </h2>
          <p className="font-sans-body text-lg text-technical-gray max-w-3xl mx-auto leading-relaxed">
            A timeline of our impactful initiatives and achievements in sustainable technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-olive via-muted-gold to-forest"></div>

          <div className="space-y-12">
            {activities.map((activity, index) => (
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
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-olive to-muted-gold rounded-full border-4 border-paper shadow-technical"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className={`vintage-card p-6 ink-stamp hover:scale-105 transition-all duration-300 group ${activity.bgColor} ${activity.borderColor} border-2`}>
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-paper group-hover:bg-cream transition-colors ${activity.color} shadow-technical`}>
                        <activity.icon className="w-6 h-6" />
                      </div>
                      <span className={`ml-3 font-serif-heading font-bold text-sm ${activity.color} bg-forest text-cream px-3 py-1 rounded-full`}>
                        {activity.year}
                      </span>
                    </div>
                    <h3 className="font-serif-heading font-semibold text-xl text-forest mb-3 group-hover:text-olive transition-colors">
                      {activity.title}
                    </h3>
                    <p className="font-sans-body text-technical-gray group-hover:text-ink transition-colors leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;