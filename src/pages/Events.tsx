import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, ArrowRight, Award } from 'lucide-react';

const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const scheduledEvents = [
    {
      title: 'Green Innovation Summit 2024',
      date: '2024-03-15',
      time: '09:00 AM - 06:00 PM',
      location: 'MIT ADT University Auditorium',
      description: 'Join industry leaders and innovators for a day of sustainable technology discussions and networking.',
      attendees: '500+',
      type: 'Summit',
      status: 'registration-open',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      title: 'AI for Climate Workshop',
      date: '2024-02-28',
      time: '02:00 PM - 05:00 PM',
      location: 'Tech Lab Building A',
      description: 'Hands-on workshop on using artificial intelligence to tackle climate change challenges.',
      attendees: '50',
      type: 'Workshop',
      status: 'registration-open',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    }
  ];

  const comingEvents = [
    {
      title: 'Sustainable Tech Hackathon',
      date: '2024-04-10',
      time: '48 Hours',
      location: 'Innovation Hub',
      description: '48-hour hackathon focused on creating innovative solutions for environmental challenges.',
      attendees: '200+',
      type: 'Hackathon',
      status: 'coming-soon',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      title: 'Environmental Tech Conference',
      date: '2024-05-20',
      time: '09:00 AM - 05:00 PM',
      location: 'Convention Center',
      description: 'Annual conference showcasing the latest in environmental technology and sustainable solutions.',
      attendees: '1000+',
      type: 'Conference',
      status: 'coming-soon',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    }
  ];

  const declarationEvents = [
    {
      title: 'TSC Annual General Meeting',
      date: '2024-06-15',
      time: '03:00 PM - 05:00 PM',
      location: 'Main Auditorium',
      description: 'Annual meeting to discuss club achievements, future plans, and elect new leadership.',
      attendees: '150+',
      type: 'Meeting',
      status: 'declaration',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    },
    {
      title: 'New Member Orientation',
      date: '2024-07-01',
      time: '10:00 AM - 12:00 PM',
      location: 'Club Office',
      description: 'Welcome session for new members to learn about TSC activities and opportunities.',
      attendees: '50+',
      type: 'Orientation',
      status: 'declaration',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1'
    }
  ];

  const pastEvents = [
    {
      title: 'ISRO Visit',
      date: '2025-01-08',
      attendees: '50+',
      description: 'A guided tour of ISRO\'s facilities, showcasing India\'s advancements in space technology and sustainable innovations.',
      achievements: ['Successful Tour', 'Networking with ISRO Scientists', 'Inspiration for Future Projects'],
      image: '/ISRO visit1.jpg'
    },
    {
      title: 'Ralegan Siddhi Visit',
      date: '2025-03-21',
      attendees: '50+',
      description: 'A visit to Ralegaon Siddhi, a model village in India known for its sustainable practices and community-driven development.',
      achievements: ['Learned Sustainable Practices', 'Community Engagement', 'Environmental Awareness'],
      image: '/visit3.jpeg'
    },
    {
      title: 'EWaste Drive',
      date: '2025-03-28',
      attendees: '50+',
      description: 'Collecting E-waste from our campus and having an interactive session on E-waste with external mentor',
      achievements: ['Collected 10kg+ E-waste', 'Conducted Awareness Sessions'],
      image: '/EWASTE.jpg'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-parchment">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="font-serif-heading font-bold text-5xl md:text-6xl mb-6 text-forest">
              Events
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-olive to-muted-gold mx-auto mb-8"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans-body text-xl text-ink max-w-4xl mx-auto leading-relaxed"
          >
            Join us for exciting events, workshops, and competitions that drive sustainable innovation. 
            Discover opportunities to learn, network, and make a meaningful impact.
          </motion.p>
        </div>
      </motion.section>

      {/* Event Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-paper">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {[
              { key: 'all', label: 'All Events', color: 'olive' },
              { key: 'scheduled', label: 'Scheduled', color: 'vintage-blue' },
              { key: 'coming', label: 'Coming Soon', color: 'muted-gold' },
              { key: 'declaration', label: 'Declarations', color: 'brown' }
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-full font-sans-body font-medium transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'claymorphic-button text-paper'
                    : 'bg-paper text-ink hover:bg-olive/10 hover:text-olive border border-olive/30'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Display */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-parchment">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif-heading font-bold text-3xl md:text-4xl mb-4 text-forest">
              {selectedCategory === 'all' ? 'All Events' : 
               selectedCategory === 'scheduled' ? 'Scheduled Events' :
               selectedCategory === 'coming' ? 'Coming Soon' : 'Declarations'}
            </h2>
            <div className={`w-16 h-0.5 mx-auto mb-6 ${
              selectedCategory === 'all' ? 'bg-olive' :
              selectedCategory === 'scheduled' ? 'bg-vintage-blue' :
              selectedCategory === 'coming' ? 'bg-muted-gold' : 'bg-brown'
            }`}></div>
            <p className="font-sans-body text-lg text-ink">
              {selectedCategory === 'all' ? 'Explore all our upcoming events and announcements' :
               selectedCategory === 'scheduled' ? 'Events with confirmed dates and registration open' :
               selectedCategory === 'coming' ? 'Events coming up soon - stay tuned!' : 'Important announcements and declarations'}
            </p>
          </motion.div>

          <div className="space-y-8">
            {(() => {
              let eventsToShow = [];
              switch (selectedCategory) {
                case 'scheduled':
                  eventsToShow = scheduledEvents;
                  break;
                case 'coming':
                  eventsToShow = comingEvents;
                  break;
                case 'declaration':
                  eventsToShow = declarationEvents;
                  break;
                default:
                  eventsToShow = [...scheduledEvents, ...comingEvents, ...declarationEvents];
              }
              return eventsToShow;
            })().map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="vintage-card rounded-lg shadow-vintage hover:shadow-ink-stamp transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="lg:col-span-1">
                      <div className="h-64 lg:h-full relative overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 member-image"
                        />
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.status === 'registration-open' 
                              ? 'bg-olive text-paper' 
                              : event.status === 'coming-soon'
                              ? 'bg-muted-gold text-paper'
                              : 'bg-brown text-paper'
                          }`}>
                            {event.status === 'registration-open' ? 'Registration Open' : 
                             event.status === 'coming-soon' ? 'Coming Soon' : 'Declaration'}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-center mb-4">
                        <span className="px-3 py-1 bg-vintage-blue/20 text-vintage-blue text-sm font-medium rounded-full border border-vintage-blue/30 mr-3">
                          {event.type}
                        </span>
                        <div className="flex items-center text-technical-gray text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          {event.attendees} attendees
                        </div>
                      </div>

                      <h3 className="font-serif-heading font-bold text-2xl md:text-3xl text-forest mb-4 group-hover:text-olive transition-colors">
                        {event.title}
                      </h3>

                      <p className="font-sans-body text-ink mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center text-technical-gray">
                          <Calendar className="w-5 h-5 mr-3 text-olive" />
                          <span className="font-sans-body text-sm">{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-technical-gray">
                          <Clock className="w-5 h-5 mr-3 text-vintage-blue" />
                          <span className="font-sans-body text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center text-technical-gray">
                          <MapPin className="w-5 h-5 mr-3 text-brown" />
                          <span className="font-sans-body text-sm">{event.location}</span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`claymorphic-button flex items-center space-x-2 px-6 py-3 rounded-full font-serif-heading font-semibold transition-all duration-300 ${
                          event.status === 'registration-open'
                            ? 'hover:from-brown hover:to-olive'
                            : event.status === 'coming-soon'
                            ? 'hover:from-muted-gold hover:to-olive'
                            : 'hover:from-brown hover:to-sepia'
                        }`}
                        disabled={false}
                      >
                        <span>
                          {event.status === 'registration-open' ? 'Register Now' : 
                           event.status === 'coming-soon' ? 'Learn More' : 'View Details'}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-parchment">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif-heading font-bold text-3xl md:text-4xl mb-4 text-forest">
              Past Events
            </h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="font-sans-body text-lg text-ink">
              Celebrating our successful events and their achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="vintage-card rounded-lg shadow-vintage hover:shadow-ink-stamp transition-all duration-300 overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 member-image"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center bg-paper/90 px-3 py-1 rounded-full">
                        <Users className="w-4 h-4 mr-2 text-olive" />
                        <span className="text-forest text-sm font-medium">{event.attendees}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-4 h-4 mr-2 text-vintage-blue" />
                      <span className="font-sans-body text-sm text-technical-gray">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 className="font-serif-heading font-bold text-xl text-forest mb-3 group-hover:text-brown transition-colors">
                      {event.title}
                    </h3>

                    <p className="font-sans-body text-ink text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div>
                      <h4 className="font-serif-heading font-semibold text-sm text-olive mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {event.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-ink text-xs">
                            <Award className="w-3 h-3 text-olive mr-2 flex-shrink-0 mt-0.5" />
                            <span className="font-sans-body leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;