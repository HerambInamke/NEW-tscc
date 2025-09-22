import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, ExternalLink } from 'lucide-react';

const Feedback: React.FC = () => {
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
              Feedback
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-olive to-muted-gold mx-auto mb-8"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans-body text-xl text-ink max-w-4xl mx-auto leading-relaxed"
          >
            Help us improve by sharing your thoughts and experiences with TSC. 
            Your feedback is invaluable in shaping our community and initiatives.
          </motion.p>
        </div>
      </motion.section>

      {/* Feedback Form Section */}
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
                Share Your Feedback
              </h2>
              <p className="font-sans-body text-ink mb-6 leading-relaxed">
                Your feedback is valuable to us! Please take a moment to fill out our feedback form 
                and help us improve our community and initiatives.
              </p>
              
              {/* Google Form Link */}
              <motion.a 
                href="https://forms.google.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="claymorphic-button inline-flex items-center justify-center px-8 py-4 font-serif-heading font-bold rounded-full hover:from-brown hover:to-olive transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Open Feedback Form
              </motion.a>
            </div>

            {/* Recruitment Timeline */}
            <div className="mt-12 vintage-card rounded-lg shadow-vintage p-6">
              <h3 className="font-serif-heading font-bold text-xl text-forest mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-vintage-blue" />
                Recruitment Timeline
              </h3>
              <p className="font-sans-body text-ink mb-6 leading-relaxed">
                Interested in joining our team? Our next recruitment period is coming soon! 
                Stay updated with our latest opportunities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-olive mt-1.5 mr-3"></div>
                  <div>
                    <h4 className="font-serif-heading font-semibold text-forest">Applications Open</h4>
                    <p className="font-sans-body text-technical-gray">Coming Soon - Stay Tuned!</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-vintage-blue mt-1.5 mr-3"></div>
                  <div>
                    <h4 className="font-serif-heading font-semibold text-forest">Interview Process</h4>
                    <p className="font-sans-body text-technical-gray">To be announced</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-brown mt-1.5 mr-3"></div>
                  <div>
                    <h4 className="font-serif-heading font-semibold text-forest">Final Selection</h4>
                    <p className="font-sans-body text-technical-gray">To be announced</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-paper rounded-lg border border-vintage-blue/20">
                <p className="font-sans-body text-ink text-sm leading-relaxed">
                  <span className="text-vintage-blue font-semibold">Note:</span> Follow our social media channels and website for the latest updates on recruitment dates and application process.
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