import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, ExternalLink } from 'lucide-react';

const Feedback: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-parchment">
      {/* Recruitment Hero Section */}
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
              Recruitment 2025–2026
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-olive to-muted-gold mx-auto mb-8"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans-body text-xl text-ink max-w-4xl mx-auto leading-relaxed"
          >
            Join Techno Smart Campus Club and help drive innovation, sustainability, and tech-enabled impact on campus.
            We welcome applicants across content, promotion & sponsorship, social media (Photography, Video, Editor), and management.
          </motion.p>
        </div>
      </motion.section>

      {/* Recruitment Form Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-paper">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="vintage-card rounded-lg shadow-vintage p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h2 className="font-serif-heading font-bold text-2xl text-forest mb-4 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 mr-3 text-olive" />
                Apply Now
              </h2>
              <p className="font-sans-body text-ink mb-6 leading-relaxed">
                Fill out the recruitment form to express your interest. Tell us why you’d like to join and the role you’re most excited about.
              </p>
              
              {/* Recruitment Google Form Link */}
              <motion.a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSd77ZUOH5Xp3yRpF96H-ZxYjG35aCWWEF3I0Ie0nRSn3X5ynw/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="claymorphic-button inline-flex items-center justify-center px-8 py-4 font-serif-heading font-bold rounded-full hover:from-brown hover:to-olive transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Open Recruitment Form
              </motion.a>
            </div>

            {/* Recruitment Details */}
            <div className="mt-12 vintage-card rounded-lg shadow-vintage p-6">
              <h3 className="font-serif-heading font-bold text-xl text-forest mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-vintage-blue" />
                Roles Available
              </h3>
              <p className="font-sans-body text-ink mb-6 leading-relaxed">
                We’re looking for passionate members across the following teams: Content, Promotion & Sponsorship, Social Media (Photography, Video, Editor), and Management.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-olive mt-1.5 mr-3"></div>
                  <div>
                    <h4 className="font-serif-heading font-semibold text-forest">Content Team</h4>
                    <p className="font-sans-body text-technical-gray">Craft write-ups, scripts, and captions for events and initiatives.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-vintage-blue mt-1.5 mr-3"></div>
                  <div>
                    <h4 className="font-serif-heading font-semibold text-forest">Promotion & Outreach</h4>
                    <p className="font-sans-body text-technical-gray">Drive awareness and participation through on-ground and digital strategies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-brown mt-1.5 mr-3"></div>
                  <div>
                    <h4 className="font-serif-heading font-semibold text-forest">Social Media (Photography, Video, Editor)</h4>
                    <p className="font-sans-body text-technical-gray">Capture moments, edit visuals, and build our storytelling across platforms.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-forest mt-1.5 mr-3"></div>
                  <div>
                    <h4 className="font-serif-heading font-semibold text-forest">Management</h4>
                    <p className="font-sans-body text-technical-gray">Plan, coordinate, and ensure smooth execution of club activities.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-paper rounded-lg border border-vintage-blue/20">
                <p className="font-sans-body text-ink text-sm leading-relaxed">
                  <span className="text-vintage-blue font-semibold">Note:</span> Submit the form and join our WhatsApp group from the link in the form to stay updated.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;