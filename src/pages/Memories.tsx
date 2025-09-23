import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, Users,  Clock } from 'lucide-react';
const Memories: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const memories = [
    {
      id: 1,
      title: 'Induction Ceremony',
      date: '2024-11-18',
      category: 'Induction',
      participants: '150+',
      image: 'public/Induction Ceremony.jpg',
      description: 'Welcoming new members to the TSCC family and introducing them to our mission and values.'
    },
    {
      id:2,
      title:"ISRO Visit",
      date:'2025-01-08',
      category:'Exhibition',
      participants:'50+',
      image:'public/ISRO visit1.jpg',
      description:'A guided tour of ISRO\'s facilities, showcasing India\'s advancements in space technology and sustainable innovations.'
    },
    {
      id:3,
      title:'Amul Factory Visit',
      date:'2025-01-08',
      category:'Field Visit',
      participants:'50+',
      image:'public/Amul visit.jpg',
      description:'Exploring the operations of Amul, India\'s largest dairy cooperative, and learning about sustainable dairy practices.'
    },
    {
      id:4,
      title:'Statue of Unity Visit',
      date:'2025-01-10',
      category:'Field Visit',
      participants:'50+',
      image:'public/Statue.jpg',
      description:'A visit to the world\'s tallest statue, learning about its significance and the sustainable practices involved in its construction.'
    },
    {
      id:5,
      title: 'Einfochips Visit',
      date: '2025-01-09',
      category: 'Field Visit',
      participants: '50+',
      image: 'public/Einfochips.jpg',
      description: 'A tour of Einfochips, exploring their innovative solutions in electronics and sustainable technology practices.'
    },
    {
      id: 6,
      title:'Orphanage Visit',
      date: '2025-03-29',
      category: 'Social Service',
      participants: '30+',
      image: 'public/orphanage_visit.jpg',
      description: 'Spending quality time with children at a local orphanage, providing support and sharing knowledge on sustainable practices.'
    },
    {
      id: 7,
      title: 'Ewaste Collection Drive',
      date: '2025-03-28',
      category: 'Sustainability',
      participants: '40+',
      image:'public/EWASTE.jpg',
      description:'Collecting E-waste from our campus and having an interactive session on E-waste with external mentor'
    },
    {
      id: 8,
      title:'Ralegaon Siddhi Visit',
      date: '2025-03-21',
      category: 'Field Visit',
      participants: '50+',
      image: 'public/visit3.jpeg',
      description: 'A visit to Ralegaon Siddhi, a model village in India known for its sustainable practices and community-driven development.'
    }
  ];

  const categories = ['All', 'Hackathon', 'Project', 'Workshop', 'Seminar', 'Demo', 'Community', 'Exhibition', 'Awards'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMemories = selectedCategory === 'All' 
    ? memories 
    : memories.filter(memory => memory.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredMemories.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredMemories.length) % filteredMemories.length);
    }
  };

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
              Memories
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-olive to-muted-gold mx-auto mb-8"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans-body text-xl text-ink max-w-4xl mx-auto leading-relaxed"
          >
            Capturing the moments that define our journey in sustainable innovation. 
            Relive the experiences that shaped our community and mission.
          </motion.p>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="pb-10 px-4 sm:px-6 lg:px-8 bg-paper">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-sans-body font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'claymorphic-button text-paper'
                    : 'bg-paper text-ink hover:bg-olive/10 hover:text-olive border border-olive/30'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-parchment">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif-heading font-bold text-3xl md:text-4xl mb-4 text-forest">
              Our Journey Timeline
            </h2>
            <div className="w-16 h-0.5 bg-sepia mx-auto mb-6"></div>
            <p className="font-sans-body text-lg text-ink max-w-3xl mx-auto leading-relaxed">
              A month-by-month chronicle of our club's activities and achievements
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-olive via-muted-gold to-brown"></div>

            <div className="space-y-12">
              {memories.map((memory, index) => {
                // Extract month and year from the date
                const date = new Date(memory.date);
                const month = date.toLocaleString('default', { month: 'long' });
                const year = date.getFullYear();
                
                return (
                  <motion.div
                    key={memory.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                  >
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-olive to-muted-gold rounded-full border-4 border-paper"></div>

                    <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <div className="vintage-card p-6 rounded-lg shadow-vintage hover:shadow-ink-stamp transition-all duration-300 flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3 flex-shrink-0">
                          <img 
                            src={memory.image} 
                            alt={memory.title} 
                            className="w-full h-40 object-cover rounded-lg shadow-lg member-image"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <div className="flex items-center mb-3">
                            <Clock className="w-5 h-5 text-olive mr-3" />
                            <span className="font-serif-heading font-bold text-olive bg-paper px-3 py-1 rounded-full text-sm">
                              {month} {year}
                            </span>
                          </div>
                          <h3 className="font-serif-heading font-semibold text-xl text-forest mb-2">
                            {memory.title}
                          </h3>
                          <p className="font-sans-body text-ink mb-3">
                            {memory.description}
                          </p>
                          <div className="flex items-center text-sm text-technical-gray">
                            <Users className="w-4 h-4 mr-1" />
                            <span>{memory.participants} participants</span>
                            <span className="mx-2">•</span>
                            <span className="bg-olive/10 text-olive px-2 py-0.5 rounded-full text-xs">
                              {memory.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-paper">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredMemories.map((memory, index) => (
                <motion.div
                  key={memory.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-xl vintage-card hover:shadow-ink-stamp transition-all duration-300">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={memory.image}
                        alt={memory.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 member-image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-paper/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium mr-2 ${
                          memory.category === 'Hackathon' ? 'bg-olive/20 text-olive border border-olive/30' :
                          memory.category === 'Project' ? 'bg-vintage-blue/20 text-vintage-blue border border-vintage-blue/30' :
                          memory.category === 'Workshop' ? 'bg-brown/20 text-brown border border-brown/30' :
                          'bg-muted-gold/20 text-muted-gold border border-muted-gold/30'
                        }`}>
                          {memory.category}
                        </span>
                      </div>
                      <h3 className="font-serif-heading font-semibold text-sm text-forest mb-1 line-clamp-2">
                        {memory.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-technical-gray">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{new Date(memory.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          <span>{memory.participants}</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-olive/50 rounded-xl transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-paper/95 backdrop-blur-lg z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl mx-auto px-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-paper/80 rounded-full hover:bg-olive/10 transition-colors"
              >
                <X className="w-6 h-6 text-forest" />
              </button>

              {/* Navigation Buttons */}
              {filteredMemories.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-paper/80 rounded-full hover:bg-olive/10 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-forest" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-paper/80 rounded-full hover:bg-olive/10 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-forest" />
                  </button>
                </>
              )}

              {/* Image and Info */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="lg:col-span-2">
                  <img
                    src={filteredMemories[selectedImage].image}
                    alt={filteredMemories[selectedImage].title}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium mr-3 ${
                        filteredMemories[selectedImage].category === 'Hackathon' ? 'bg-olive/20 text-olive border border-olive/30' :
                        filteredMemories[selectedImage].category === 'Project' ? 'bg-vintage-blue/20 text-vintage-blue border border-vintage-blue/30' :
                        filteredMemories[selectedImage].category === 'Workshop' ? 'bg-brown/20 text-brown border border-brown/30' :
                        'bg-muted-gold/20 text-muted-gold border border-muted-gold/30'
                      }`}>
                        {filteredMemories[selectedImage].category}
                      </span>
                    </div>
                    <h2 className="font-serif-heading font-bold text-2xl md:text-3xl text-forest mb-4">
                      {filteredMemories[selectedImage].title}
                    </h2>
                    <p className="font-sans-body text-ink leading-relaxed">
                      {filteredMemories[selectedImage].description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-technical-gray">
                      <Calendar className="w-5 h-5 mr-3 text-olive" />
                      <div>
                        <p className="font-sans-body text-xs text-technical-gray">Date</p>
                        <p className="font-sans-body text-sm">
                          {new Date(filteredMemories[selectedImage].date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-technical-gray">
                      <Users className="w-5 h-5 mr-3 text-vintage-blue" />
                      <div>
                        <p className="font-sans-body text-xs text-technical-gray">Participants</p>
                        <p className="font-sans-body text-sm">{filteredMemories[selectedImage].participants}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Memories;