import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Users, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@technosmartcampus.club',
      description: 'Get in touch for any inquiries',
      color: 'text-electric-green'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 98765 43210',
      description: 'Available during office hours',
      color: 'text-neon-blue'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'MIT ADT University',
      description: 'Loni Kalbhor, Pune, Maharashtra',
      color: 'text-tech-purple'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'Saturday: 10:00 AM - 4:00 PM',
      color: 'text-yellow-400'
    }
  ];

  const socialLinks = [
    { name: 'Instagram', url: '#', color: 'hover:text-pink-400' },
    { name: 'LinkedIn', url: '#', color: 'hover:text-blue-400' },
    { name: 'WhatsApp', url: '#', color: 'hover:text-green-400' },
    { name: 'YouTube', url: '#', color: 'hover:text-red-400' }
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
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-olive to-muted-gold mx-auto mb-8"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans-body text-xl text-ink max-w-4xl mx-auto leading-relaxed"
          >
            Have questions, ideas, or want to collaborate? We'd love to hear from you! 
            Get in touch with our team and let's work together to create sustainable solutions.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-paper">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif-heading font-bold text-3xl md:text-4xl mb-4 text-forest">
              Get In Touch
            </h2>
            <div className="w-16 h-0.5 bg-olive mx-auto mb-6"></div>
            <p className="font-sans-body text-lg text-ink">
              Choose your preferred way to reach us
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="vintage-card p-6 rounded-lg shadow-vintage hover:shadow-ink-stamp transition-all duration-300 text-center h-full">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 group-hover:scale-110 transition-transform ${
                    info.title === 'Email Us' ? 'bg-olive/20 text-olive' :
                    info.title === 'Call Us' ? 'bg-vintage-blue/20 text-vintage-blue' :
                    info.title === 'Visit Us' ? 'bg-brown/20 text-brown' :
                    'bg-muted-gold/20 text-muted-gold'
                  }`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-heading font-semibold text-lg text-forest mb-2 group-hover:text-olive transition-colors">
                    {info.title}
                  </h3>
                  <p className="font-sans-body font-medium text-ink mb-1">
                    {info.value}
                  </p>
                  <p className="font-sans-body text-sm text-technical-gray">
                    {info.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="vintage-card rounded-lg shadow-vintage p-8">
                <h2 className="font-serif-heading font-bold text-2xl text-forest mb-6 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3 text-olive" />
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-olive to-muted-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-paper" />
                    </div>
                    <h3 className="font-serif-heading font-bold text-xl text-forest mb-2">
                      Message Sent!
                    </h3>
                    <p className="font-sans-body text-ink">
                      Thank you for reaching out. We'll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-sans-body text-sm font-medium text-forest mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-paper border border-olive/30 rounded-lg focus:outline-none focus:border-olive text-ink font-sans-body"
                        />
                      </div>
                      <div>
                        <label className="block font-sans-body text-sm font-medium text-forest mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-paper border border-olive/30 rounded-lg focus:outline-none focus:border-olive text-ink font-sans-body"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans-body text-sm font-medium text-forest mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-paper border border-olive/30 rounded-lg focus:outline-none focus:border-olive text-ink font-sans-body"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="membership">Club Membership</option>
                        <option value="events">Events & Workshops</option>
                        <option value="projects">Project Partnership</option>
                        <option value="media">Media & Press</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-sans-body text-sm font-medium text-forest mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        className="w-full px-4 py-3 bg-paper border border-olive/30 rounded-lg focus:outline-none focus:border-olive text-ink font-sans-body"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full py-4 rounded-lg font-serif-heading font-semibold text-lg transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-technical-gray text-paper cursor-not-allowed opacity-50'
                          : 'claymorphic-button hover:from-brown hover:to-olive'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-paper mr-3"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="w-5 h-5 mr-3" />
                          Send Message
                        </div>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Social Media */}
              <div className="vintage-card p-8 rounded-lg shadow-vintage">
                <h3 className="font-serif-heading font-bold text-2xl text-forest mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-vintage-blue" />
                  Connect With Us
                </h3>
                <p className="font-sans-body text-ink mb-6 leading-relaxed">
                  Follow us on social media for the latest updates, events, and behind-the-scenes content from TSC.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center space-x-3 p-3 bg-paper rounded-lg hover:bg-olive/10 transition-all duration-300 text-ink hover:text-olive border border-olive/20`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-sans-body font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="vintage-card p-8 rounded-lg shadow-vintage">
                <h3 className="font-serif-heading font-bold text-2xl text-forest mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-serif-heading font-semibold text-forest mb-2">
                      How can I join TSC?
                    </h4>
                    <p className="font-sans-body text-technical-gray text-sm leading-relaxed">
                      Visit our Apply page and fill out the application form. We review applications regularly and welcome passionate students from all disciplines.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif-heading font-semibold text-forest mb-2">
                      Do I need prior experience?
                    </h4>
                    <p className="font-sans-body text-technical-gray text-sm leading-relaxed">
                      No prior experience is required! We welcome beginners and provide mentorship and training opportunities to help you grow.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif-heading font-semibold text-forest mb-2">
                      What projects do you work on?
                    </h4>
                    <p className="font-sans-body text-technical-gray text-sm leading-relaxed">
                      We focus on sustainable technology projects including IoT solutions, AI for environmental monitoring, renewable energy systems, and more.
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="vintage-card p-8 rounded-lg shadow-vintage">
                <h3 className="font-serif-heading font-bold text-2xl text-forest mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-brown" />
                  Find Us
                </h3>
                <div className="aspect-video bg-paper rounded-lg flex items-center justify-center mb-4 border border-olive/20">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-brown mx-auto mb-2" />
                    <p className="font-sans-body text-technical-gray">Interactive Map</p>
                    <p className="font-sans-body text-sm text-technical-gray">MIT ADT University Campus</p>
                  </div>
                </div>
                <p className="font-sans-body text-ink text-sm leading-relaxed">
                  Located in the heart of MIT ADT University campus, Loni Kalbhor, Pune. Our club office is in the Innovation Hub building.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;