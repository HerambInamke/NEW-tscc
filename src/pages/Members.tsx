import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, Mail, Linkedin, Github, BookOpen, GraduationCap, History } from 'lucide-react';

const Members: React.FC = () => {
  const leadership = [
    {
      name: 'Raj Sharma',
      role: 'President',
      image: '/raj.jpg',
      expertise: 'Cybersecurity',
      bio: 'Leading TSCC with a vision for sustainable tech innovation. Expert in machine learning applications for environmental solutions.',
      achievements: ['NSS','Led Social Campaigns'],
      social: { email: 'rajsharma.education1@gmail.com', linkedin: 'https://www.linkedin.com/in/raj-sharma-1ba65526a/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BkHK%2B%2BNdPSreKaRA05MVTKw%3D%3D', github: '' }
    },
    {
      name: 'Gursimran Saini',
      role: 'Vice President',
      image: '/gursimran.png',
      expertise: 'Cybersecurity, Web Development',
      bio: 'I am passionate about gaming and traveling on two wheels—there is nothing like a good ride to clear the mind and spark ideas.',
      achievements: ['2 year State Level Football Champion', 'Won a Solothon in BURPSUITE'],
      social: { email: 'gursimransinghsaini81@gmail.com', linkedin: 'https://www.linkedin.com/in/gursimran-singh-saini-786b0028b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BIMnpmBu4Qt26yGB5upb1lA%3D%3D', github: '' }
    }
  ];

  const coreTeam = [
    {
      name: 'Raj Sharma',
      role: 'President',
      image: '/raj.jpg',
      expertise: 'Cybersecurity',
      department: 'CSE'
    },
    {
      name: 'Gursimran Saini',
      role: 'Vice President',
      image: '/gursimran.png',
      expertise: 'Cybersecurity and Web Development',
      department: 'IT'
    },
    {
      name: 'Yug Patel',
      role: 'Treasurer',
      image: '/yug.jpg',
      expertise: 'Community Building',
      department: 'CSE'
    },
    {
      name: 'Samarth Agarwal',
      role: 'Secretary',
      image: '/samarth.jpg',
      expertise: 'Software Development',
      department: 'CSE'
    },
    {
      name:'Sneha Sharma',
      role: 'Community Manager',
      image: '/Sneha Sharma.jpg',
      expertise: 'Proficient in C,C++',
      department: 'CSE',
    }

  ];

  const exMembers = [
    {
      name: 'Tanmay Kulkarni',
      role: 'Former Content Member',
      image: '/tanmay kulkarni.jpg',
      expertise: 'Renewable Energy',
      achievements: ['Developed TSC’s first content strategy', 'Led 2 successful campaigns on social media'],
      currentPosition: 'Advisory Board Member at TSCC'
    },
    {
      name: 'Gourav Singar',
      role: 'Former Promotions Lead',
      image: '/Gourav.jpg',
      expertise: 'DevOps and Cloud Computing',
      achievements: ['Investment and Finance ','NCC'],
      currentPosition: 'Advisory Board Member at TSCC'
    },
    {
      name: 'Reva Raspaile',
      role: 'Former Design Lead',
      image: '/reva.jpg',
      expertise: 'Software program developer',
      achievements: ['A tech-driven individual with strong skills in problem-solving'],
      currentPosition: 'Advisory Board Member at TSCC'
    }
  ];

  const faculty = [
    {
      name: 'Prof.Rajani Sajjan',
      role: 'Technical Mentor',
      image: '/rajani mam.jpg',
      expertise: 'Cloud Computing',
      department: 'CSE-Cloud Computing',
      bio: 'Associate Professor at MIT ADT University | AWS Certified | Azure Certified | Trainer | Mentor',
      achievements: ['IEEE Senior Member', 'Smart City Project Lead', 'Developed 5 patented IoT solutions']
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
            Meet the brilliant minds driving innovation and sustainability at TSCC. 
            Our diverse team of students, faculty, and alumni work together to create 
            meaningful impact through technology.
          </motion.p>
        </div>
      </motion.section>



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

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              {faculty.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="vintage-card p-8 rounded-lg shadow-vintage hover:shadow-ink-stamp transition-all duration-300">
                    <div className="text-center">
                      <div className="flex flex-col items-center mb-6">
                        <div className="relative mb-4">
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
                        
                        <div className="text-center">
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
                        <p className="font-sans-body text-ink mb-6 leading-relaxed text-center">
                          {member.bio}
                        </p>
                      )}

                      <div className="mb-4">
                        <h4 className="font-serif-heading font-semibold text-lg text-forest mb-3 text-center">Department</h4>
                        <p className="font-sans-body text-technical-gray flex items-center justify-center">
                          <GraduationCap className="w-4 h-4 text-muted-gold mr-2" />
                          {member.department}
                        </p>
                      </div>

                      {member.achievements && (
                        <div className="mb-6">
                          <h4 className="font-serif-heading font-semibold text-lg text-forest mb-3 text-center">Key Achievements</h4>
                          <ul className="space-y-2">
                            {member.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start justify-center text-ink">
                                <Award className="w-4 h-4 text-muted-gold mr-3 flex-shrink-0 mt-0.5" />
                                <span className="font-sans-body text-sm leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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

          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
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