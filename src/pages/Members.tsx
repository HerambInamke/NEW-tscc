import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, Mail, Linkedin, Github, BookOpen, GraduationCap, History, Crown } from 'lucide-react';

const Members: React.FC = () => {
  const leadership = [
    {
      name: 'Alex Chen',
      role: 'President',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'AI & Sustainability',
      bio: 'Leading TSC with a vision for sustainable tech innovation. Expert in machine learning applications for environmental solutions.',
      achievements: ['National Green Tech Award Winner', 'Published 3 research papers', 'Led 15+ successful projects'],
      social: { email: 'alex.chen@mitadt.edu', linkedin: '#', github: '#' }
    },
    {
      name: 'Maya Rodriguez',
      role: 'Vice President',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'IoT & Green Tech',
      bio: 'Passionate about IoT solutions for smart cities. Specializes in sensor networks and data analytics for environmental monitoring.',
      achievements: ['Smart Campus Project Lead', 'IoT Innovation Certificate', 'Mentored 25+ students'],
      social: { email: 'maya.rodriguez@mitadt.edu', linkedin: '#', github: '#' }
    }
  ];

  const coreTeam = [
    {
      name: 'David Kim',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Robotics & Automation',
      department: 'Computer Science Engineering'
    },
    {
      name: 'Sarah Johnson',
      role: 'Environmental Officer',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Climate Tech',
      department: 'Environmental Engineering'
    },
    {
      name: 'Raj Patel',
      role: 'Events Coordinator',
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Community Building',
      department: 'Management Studies'
    },
    {
      name: 'Emma Wilson',
      role: 'Research Head',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Data Science',
      department: 'Data Science & Analytics'
    },
    {
      name: 'Arjun Sharma',
      role: 'Technology Officer',
      image: 'https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Software Development',
      department: 'Information Technology'
    },
    {
      name: 'Lisa Wang',
      role: 'Marketing Head',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Digital Marketing',
      department: 'Communication Design'
    }
  ];

  const exMembers = [
    {
      name: 'James Wilson',
      role: 'Former President',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Renewable Energy',
      achievements: ['Founded TSC in 2018', 'Secured initial funding', 'Established university partnerships'],
      currentPosition: 'Senior Engineer at GreenTech Solutions'
    },
    {
      name: 'Priya Mehta',
      role: 'Former Technical Lead',
      image: 'https://images.pexels.com/photos/3760089/pexels-photo-3760089.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Full Stack Development',
      achievements: ['Developed TSC web platform', 'Led 3 hackathons', 'Mentored 10+ junior developers'],
      currentPosition: 'Software Architect at Microsoft'
    }
  ];

  const faculty = [
    {
      name: 'Dr. Robert Chen',
      role: 'Faculty Advisor',
      image: 'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'Sustainable Computing',
      department: 'Computer Science',
      bio: 'Guiding TSC with 15+ years of experience in sustainable computing research and industry collaborations.',
      achievements: ['Published 30+ research papers', 'Received Excellence in Teaching Award', 'Industry consultant for green tech initiatives']
    },
    {
      name: 'Prof. Anita Desai',
      role: 'Technical Mentor',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      expertise: 'IoT Systems',
      department: 'Electronics Engineering',
      bio: 'Specializes in IoT systems design with a focus on energy efficiency and environmental applications.',
      achievements: ['IEEE Senior Member', 'Smart City Project Lead', 'Developed 5 patented IoT solutions']
    }
  ];

  const hod = {
    name: 'Dr. Vikram Sharma',
    role: 'Head of Department',
    image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    expertise: 'Computer Science & Sustainability',
    department: 'School of Technology',
    bio: 'Leading the School of Technology with a vision to integrate sustainability across all technical disciplines and research initiatives.',
    achievements: ['Ph.D. from MIT', 'Author of "Sustainable Computing in the 21st Century"', 'Recipient of National Science Award'],
    social: { email: 'vikram.sharma@mitadt.edu', linkedin: '#' }
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
              Our Team
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-olive to-muted-gold mx-auto mb-8"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans-body text-xl text-ink max-w-4xl mx-auto leading-relaxed"
          >
            Meet the brilliant minds driving innovation and sustainability at TSC. 
            Our diverse team of students, faculty, and alumni work together to create 
            meaningful impact through technology.
          </motion.p>
        </div>
      </motion.section>

      {/* Head of Department */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-paper">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif-heading font-bold text-3xl md:text-4xl mb-4 text-forest">
              Head of Department
            </h2>
            <div className="w-16 h-0.5 bg-olive mx-auto"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="vintage-card p-8 rounded-lg shadow-vintage hover:shadow-ink-stamp transition-all duration-300">
                <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8">
                  <div className="relative mb-6 lg:mb-0 lg:mr-8">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-olive/30 group-hover:border-olive transition-colors shadow-lg">
                      <img
                        src={hod.image}
                        alt={hod.name}
                        className="w-full h-full object-cover member-image"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-olive to-muted-gold p-3 rounded-full shadow-lg">
                      <Crown className="w-5 h-5 text-paper" />
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left flex-1">
                    <h3 className="font-serif-heading font-bold text-3xl text-forest mb-3 group-hover:text-olive transition-colors">
                      {hod.name}
                    </h3>
                    <p className="font-sans-body font-semibold text-olive mb-3 text-xl">
                      {hod.role}
                    </p>
                    <p className="font-sans-body text-technical-gray mb-4 text-lg">
                      {hod.department}
                    </p>
                    <span className="inline-block px-4 py-2 bg-olive/10 text-forest text-sm font-medium rounded-full border border-olive/30 mb-6">
                      {hod.expertise}
                    </span>
                  </div>
                </div>

                {hod.bio && (
                  <div className="mb-8">
                    <p className="font-sans-body text-ink leading-relaxed text-lg">
                      {hod.bio}
                    </p>
                  </div>
                )}

                {hod.achievements && (
                  <div className="mb-8">
                    <h4 className="font-serif-heading font-semibold text-xl text-forest mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {hod.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-ink">
                          <Award className="w-5 h-5 text-olive mr-3 flex-shrink-0 mt-0.5" />
                          <span className="font-sans-body text-base leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {hod.social && (
                  <div className="flex space-x-4">
                    {hod.social.email && (
                      <a href={`mailto:${hod.social.email}`} className="p-3 bg-olive/10 rounded-lg hover:bg-olive/20 transition-colors group">
                        <Mail className="w-5 h-5 text-olive group-hover:text-forest" />
                      </a>
                    )}
                    {hod.social.linkedin && (
                      <a href={hod.social.linkedin} className="p-3 bg-vintage-blue/10 rounded-lg hover:bg-vintage-blue/20 transition-colors group">
                        <Linkedin className="w-5 h-5 text-vintage-blue group-hover:text-forest" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faculty Advisors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-parchment">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif-heading font-bold text-3xl md:text-4xl mb-4 text-forest">
              Faculty Advisors
            </h2>
            <div className="w-16 h-0.5 bg-muted-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="vintage-card p-8 rounded-lg shadow-vintage hover:shadow-ink-stamp transition-all duration-300 h-full">
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                    <div className="relative mb-4 md:mb-0 md:mr-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-muted-gold/30 group-hover:border-muted-gold transition-colors shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover member-image"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-muted-gold to-olive p-2 rounded-full shadow-lg">
                        <BookOpen className="w-4 h-4 text-paper" />
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                      <h3 className="font-serif-heading font-bold text-2xl text-forest mb-2 group-hover:text-muted-gold transition-colors">
                        {member.name}
                      </h3>
                      <p className="font-sans-body font-semibold text-muted-gold mb-2 text-lg">
                        {member.role}
                      </p>
                      <span className="inline-block px-3 py-1 bg-muted-gold/10 text-forest text-sm font-medium rounded-full border border-muted-gold/30 mb-4">
                        {member.expertise}
                      </span>
                    </div>
                  </div>

                  {member.bio && (
                    <p className="font-sans-body text-ink mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                  )}

                  <div className="mb-4">
                    <h4 className="font-serif-heading font-semibold text-lg text-forest mb-3">Department</h4>
                    <p className="font-sans-body text-technical-gray flex items-center">
                      <GraduationCap className="w-4 h-4 text-muted-gold mr-2" />
                      {member.department}
                    </p>
                  </div>

                  {member.achievements && (
                    <div className="mb-6">
                      <h4 className="font-serif-heading font-semibold text-lg text-forest mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-ink">
                            <Award className="w-4 h-4 text-muted-gold mr-3 flex-shrink-0 mt-0.5" />
                            <span className="font-sans-body text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-paper">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif-heading font-bold text-3xl md:text-4xl mb-4 text-forest">
              Leadership Team
            </h2>
            <div className="w-16 h-0.5 bg-vintage-blue mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="vintage-card p-8 rounded-lg shadow-vintage hover:shadow-ink-stamp transition-all duration-300 h-full">
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                    <div className="relative mb-4 md:mb-0 md:mr-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-vintage-blue/30 group-hover:border-vintage-blue transition-colors shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover member-image"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-vintage-blue to-olive p-2 rounded-full shadow-lg">
                        <Star className="w-4 h-4 text-paper" />
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                      <h3 className="font-serif-heading font-bold text-2xl text-forest mb-2 group-hover:text-vintage-blue transition-colors">
                        {member.name}
                      </h3>
                      <p className="font-sans-body font-semibold text-vintage-blue mb-2 text-lg">
                        {member.role}
                      </p>
                      <span className="inline-block px-3 py-1 bg-vintage-blue/10 text-forest text-sm font-medium rounded-full border border-vintage-blue/30 mb-4">
                        {member.expertise}
                      </span>
                    </div>
                  </div>

                  {member.bio && (
                    <p className="font-sans-body text-ink mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                  )}

                  {member.achievements && (
                    <div className="mb-6">
                      <h4 className="font-serif-heading font-semibold text-lg text-forest mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-ink">
                            <Award className="w-4 h-4 text-vintage-blue mr-3 flex-shrink-0 mt-0.5" />
                            <span className="font-sans-body text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.social && (
                    <div className="flex space-x-4">
                      {member.social.email && (
                        <a href={`mailto:${member.social.email}`} className="p-3 bg-vintage-blue/10 rounded-lg hover:bg-vintage-blue/20 transition-colors group">
                          <Mail className="w-5 h-5 text-vintage-blue group-hover:text-forest" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="p-3 bg-olive/10 rounded-lg hover:bg-olive/20 transition-colors group">
                          <Linkedin className="w-5 h-5 text-olive group-hover:text-forest" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="p-3 bg-sepia/10 rounded-lg hover:bg-sepia/20 transition-colors group">
                          <Github className="w-5 h-5 text-sepia group-hover:text-forest" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-parchment">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif-heading font-bold text-3xl md:text-4xl mb-4 text-forest">
              Core Team
            </h2>
            <div className="w-16 h-0.5 bg-brown mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="vintage-card p-6 rounded-lg shadow-vintage hover:shadow-ink-stamp transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-3 border-brown/30 group-hover:border-brown transition-colors mb-4 shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover member-image"
                      />
                    </div>
                    
                    <h3 className="font-serif-heading font-semibold text-xl text-forest mb-2 group-hover:text-brown transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-sans-body font-medium text-brown mb-2 text-lg">
                      {member.role}
                    </p>
                    <p className="font-sans-body text-technical-gray mb-3 text-sm">
                      {member.department}
                    </p>
                    <span className="inline-block px-3 py-1 bg-brown/10 text-forest text-xs font-medium rounded-full border border-brown/30">
                      {member.expertise}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Members */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-paper">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif-heading font-bold text-3xl md:text-4xl mb-4 text-forest">
              Alumni Members
            </h2>
            <div className="w-16 h-0.5 bg-sepia mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {exMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="vintage-card p-8 rounded-lg shadow-vintage hover:shadow-ink-stamp transition-all duration-300 h-full">
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                    <div className="relative mb-4 md:mb-0 md:mr-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-sepia/30 group-hover:border-sepia transition-colors shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover member-image"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-sepia to-brown p-2 rounded-full shadow-lg">
                        <History className="w-4 h-4 text-paper" />
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                      <h3 className="font-serif-heading font-bold text-2xl text-forest mb-2 group-hover:text-sepia transition-colors">
                        {member.name}
                      </h3>
                      <p className="font-sans-body font-semibold text-sepia mb-2 text-lg">
                        {member.role}
                      </p>
                      <span className="inline-block px-3 py-1 bg-sepia/10 text-forest text-sm font-medium rounded-full border border-sepia/30 mb-4">
                        {member.expertise}
                      </span>
                    </div>
                  </div>

                  {member.achievements && (
                    <div className="mb-6">
                      <h4 className="font-serif-heading font-semibold text-lg text-forest mb-3">Key Contributions</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-ink">
                            <Award className="w-4 h-4 text-sepia mr-3 flex-shrink-0 mt-0.5" />
                            <span className="font-sans-body text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className="font-serif-heading font-semibold text-lg text-forest mb-3">Current Position</h4>
                    <p className="flex items-center text-ink">
                      <BookOpen className="w-4 h-4 text-sepia mr-3 flex-shrink-0" />
                      <span className="font-sans-body text-sm leading-relaxed">{member.currentPosition}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-parchment">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="vintage-card p-12 rounded-lg shadow-vintage">
            <Users className="w-16 h-16 text-olive mx-auto mb-8" />
            <h2 className="font-serif-heading font-bold text-3xl md:text-4xl mb-6 text-forest">
              Ready to Join Our Mission?
            </h2>
            <p className="font-sans-body text-lg text-ink mb-8 max-w-3xl mx-auto leading-relaxed">
              Be part of a community that's shaping the future through sustainable technology innovation. 
              Your skills and passion can make a real difference in creating a more sustainable world.
            </p>
            <motion.a
              href="/apply"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="claymorphic-button inline-block text-lg px-8 py-4 rounded-full hover:from-brown hover:to-olive transition-all duration-300"
            >
              Apply Now
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Members;