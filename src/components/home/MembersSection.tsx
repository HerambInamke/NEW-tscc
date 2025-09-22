import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users } from 'lucide-react';

const MembersSection: React.FC = () => {
  const members = [
    {
      name: 'Alex Chen',
      role: 'President',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'AI & Sustainability',
      badge: 'Leadership'
    },
    {
      name: 'Maya Rodriguez',
      role: 'Vice President',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'IoT & Green Tech',
      badge: 'Innovation'
    },
    {
      name: 'David Kim',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Robotics & Automation',
      badge: 'Technical'
    },
    {
      name: 'Sarah Johnson',
      role: 'Environmental Officer',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Climate Tech',
      badge: 'Sustainability'
    },
    {
      name: 'Raj Patel',
      role: 'Events Coordinator',
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Community Building',
      badge: 'Outreach'
    },
    {
      name: 'Emma Wilson',
      role: 'Research Head',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Data Science',
      badge: 'Research'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream/20 relative">
      <div className="absolute inset-0 bg-paper-texture opacity-15"></div>
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-forest technical-heading">
            Our Team
          </h2>
          <p className="font-sans-body text-lg text-technical-gray max-w-3xl mx-auto leading-relaxed">
            Meet the brilliant minds driving innovation and sustainability at TSCC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="vintage-card p-6 ink-stamp hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-3 border-olive/50 group-hover:border-olive transition-colors shadow-technical">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-olive to-muted-gold p-2 rounded-full shadow-technical">
                    {member.badge === 'Leadership' && <Star className="w-4 h-4 text-cream" />}
                    {member.badge === 'Innovation' && <Award className="w-4 h-4 text-cream" />}
                    {member.badge === 'Technical' && <Users className="w-4 h-4 text-cream" />}
                    {member.badge === 'Sustainability' && <Star className="w-4 h-4 text-cream" />}
                    {member.badge === 'Outreach' && <Award className="w-4 h-4 text-cream" />}
                    {member.badge === 'Research' && <Users className="w-4 h-4 text-cream" />}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-serif-heading font-semibold text-xl text-forest mb-2 group-hover:text-olive transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-sans-body font-medium text-olive mb-2">
                    {member.role}
                  </p>
                  <p className="font-sans-body text-sm text-technical-gray mb-3">
                    {member.expertise}
                  </p>
                  <span className="inline-block px-3 py-1 bg-forest/20 text-forest text-xs font-sans-body font-medium rounded-full border border-forest/30">
                    {member.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;