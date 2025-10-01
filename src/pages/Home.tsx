import { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowRight, Target, Users, Lightbulb, Globe, Calendar } from 'lucide-react';
import VideoHero from '../components/VideoHero';
import "../index.css";

function Home() {
  // State for SDG showcase
  const [currentSet, setCurrentSet] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sdgSectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: sdgSectionRef,
    offset: ["start end", "end start"]
  });

  // SDG Goals data with detailed information
  const sdgGoals = [
    { 
      number: '01', 
      title: 'No Poverty', 
      color: '#E5243B',
      summary: 'End poverty in all its forms everywhere',
      description: 'Focus on vulnerable populations and implement social protection systems',
      icon: '🏠'
    },
    { 
      number: '02', 
      title: 'Zero Hunger', 
      color: '#DDA63A',
      summary: 'End hunger, achieve food security and improved nutrition',
      description: 'Promote sustainable agriculture and ensure access to safe food',
      icon: '🌾'
    },
    { 
      number: '03', 
      title: 'Good Health', 
      color: '#4C9F38',
      summary: 'Ensure healthy lives and promote well-being for all',
      description: 'Achieve universal health coverage and reduce maternal mortality',
      icon: '🏥'
    },
    { 
      number: '04', 
      title: 'Quality Education', 
      color: '#C5192D',
      summary: 'Ensure inclusive and equitable quality education',
      description: 'Promote lifelong learning opportunities for all',
      icon: '📚'
    },
    { 
      number: '05', 
      title: 'Gender Equality', 
      color: '#FF3A21',
      summary: 'Achieve gender equality and empower all women and girls',
      description: 'End all forms of discrimination and violence against women',
      icon: '⚖️'
    },
    { 
      number: '06', 
      title: 'Clean Water', 
      color: '#26BDE2',
      summary: 'Ensure availability and sustainable management of water',
      description: 'Achieve universal access to safe drinking water and sanitation',
      icon: '💧'
    },
    { 
      number: '07', 
      title: 'Clean Energy', 
      color: '#FCC30B',
      summary: 'Ensure access to affordable, reliable, sustainable energy',
      description: 'Increase renewable energy share and improve energy efficiency',
      icon: '⚡'
    },
    { 
      number: '08', 
      title: 'Decent Work', 
      color: '#A21942',
      summary: 'Promote sustained, inclusive economic growth and employment',
      description: 'Create productive employment and decent work for all',
      icon: '💼'
    },
    { 
      number: '09', 
      title: 'Industry & Innovation', 
      color: '#FD6925',
      summary: 'Build resilient infrastructure and promote innovation',
      description: 'Foster innovation and sustainable industrialization',
      icon: '🏭'
    },
    { 
      number: '10', 
      title: 'Reduced Inequalities', 
      color: '#DD1367',
      summary: 'Reduce inequality within and among countries',
      description: 'Empower and promote social, economic and political inclusion',
      icon: '📊'
    },
    { 
      number: '11', 
      title: 'Sustainable Cities', 
      color: '#FD9D24',
      summary: 'Make cities and human settlements inclusive and sustainable',
      description: 'Ensure access to safe, affordable housing and basic services',
      icon: '🏙️'
    },
    { 
      number: '12', 
      title: 'Responsible Consumption', 
      color: '#BF8B2E',
      summary: 'Ensure sustainable consumption and production patterns',
      description: 'Achieve sustainable management and efficient use of resources',
      icon: '♻️'
    },
    { 
      number: '13', 
      title: 'Climate Action', 
      color: '#3F7E44',
      summary: 'Take urgent action to combat climate change',
      description: 'Strengthen resilience and adaptive capacity to climate hazards',
      icon: '🌍'
    },
    { 
      number: '14', 
      title: 'Life Below Water', 
      color: '#0A97D9',
      summary: 'Conserve and sustainably use oceans and marine resources',
      description: 'Prevent and reduce marine pollution and ocean acidification',
      icon: '🐠'
    },
    { 
      number: '15', 
      title: 'Life on Land', 
      color: '#56C02B',
      summary: 'Protect, restore and promote sustainable use of ecosystems',
      description: 'Combat desertification and halt biodiversity loss',
      icon: '🌳'
    },
    { 
      number: '16', 
      title: 'Peace & Justice', 
      color: '#00689D',
      summary: 'Promote peaceful and inclusive societies for sustainable development',
      description: 'Reduce violence and ensure equal access to justice for all',
      icon: '⚖️'
    },
    { 
      number: '17', 
      title: 'Partnerships', 
      color: '#19486A',
      summary: 'Strengthen the means of implementation and revitalize partnerships',
      description: 'Enhance global partnership for sustainable development',
      icon: '🤝'
    }
  ];

  // Group SDGs into sets of 3
  const sdgSets = [];
  for (let i = 0; i < sdgGoals.length; i += 3) {
    sdgSets.push(sdgGoals.slice(i, i + 3));
  }


  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const initLenis = async () => {
      try {
        const Lenis = (await import('@studio-freight/lenis')).default;
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      } catch (error) {
        console.log('Lenis not available, using default scrolling');
      }
    };

    initLenis();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSet((prev) => (prev + 1) % sdgSets.length);
      }, 4000); // Change every 4 seconds
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [isAutoPlaying, sdgSets.length]);

  // Calculate current set based on scroll progress (only when not auto-playing)
  useEffect(() => {
    if (!isAutoPlaying) {
      const unsubscribe = scrollYProgress.onChange((latest) => {
        const setIndex = Math.floor(latest * sdgSets.length);
        setCurrentSet(Math.min(setIndex, sdgSets.length - 1));
      });
      return unsubscribe;
    }
  }, [scrollYProgress, sdgSets.length, isAutoPlaying]);

  // Core values
  const coreValues = [
    {
      icon: Target,
      title: "Mission",
      description: "Fostering innovative thinking and sustainable technological solutions for global environmental challenges.",
      color: "text-olive",
      bgColor: "bg-olive/5"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a diverse community of tech enthusiasts, environmental advocates, and future innovators.",
      color: "text-forest",
      bgColor: "bg-forest/5"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Developing cutting-edge solutions that merge technology with environmental consciousness.",
      color: "text-muted-gold",
      bgColor: "bg-muted-gold/5"
    },
    {
      icon: Globe,
      title: "Impact",
      description: "Creating meaningful change through technology-driven environmental initiatives and awareness programs.",
      color: "text-brown",
      bgColor: "bg-brown/5"
    }
  ];

  // Recent activities
  const activities = [
    {
      title:"ISRO Visit",
      date:'2025-01-08',
      description:'A guided tour of ISRO\'s facilities, showcasing India\'s advancements in space technology and sustainable innovations.',
      color: "text-forest"
    },
    {
      title:'Orphanage Visit',
      date: '2025-03-29',
      description: 'Spending quality time with children at a local orphanage, providing support and sharing knowledge on sustainable practices.',
      color: "text-forest"
    },
    {
      title: 'Ewaste Collection Drive',
      date: '2025-03-28',
      description:'Collecting E-waste from our campus and having an interactive session on E-waste with external mentor',
      color: "text-forest"
    }
  ];
  
  return (
    <div className="min-h-screen bg-parchment">
      {/* Video Hero Section */}
      <VideoHero />

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glassmorphism-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif-heading font-bold text-4xl md:text-5xl text-forest mb-6">
              Our Core Values
            </h2>
            <p className="font-sans-body text-lg text-technical-gray max-w-3xl mx-auto">
              Driving innovation through technology and environmental consciousness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`${value.bgColor} p-8 rounded-3xl h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                  <div className={`${value.color} mb-6`}>
                    <value.icon className="w-12 h-12" />
          </div>
                  <h3 className="font-serif-heading font-bold text-xl text-forest mb-4">
                    {value.title}
                  </h3>
                  <p className="font-sans-body text-technical-gray leading-relaxed">
                    {value.description}
                  </p>
          </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glassmorphism-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif-heading font-bold text-4xl md:text-5xl text-forest mb-6">
              Recent Activities
            </h2>
            <p className="font-sans-body text-lg text-technical-gray max-w-3xl mx-auto">
              Our latest initiatives and achievements in sustainable technology
            </p>
          </motion.div>

          <div className="space-y-8">
            {activities.map((activity, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glassmorphism-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-olive to-forest rounded-2xl flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-paper" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="font-serif-heading font-bold text-xl text-forest mb-2 md:mb-0">
                          {activity.title}
                        </h3>
                        <span className={`font-sans-body font-medium text-sm ${activity.color}`}>
                          {activity.date}
                    </span>
                      </div>
                      <p className="font-sans-body text-technical-gray leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive SDG Goals Showcase */}
      <section ref={sdgSectionRef} className="py-32 px-4 sm:px-6 lg:px-8 glassmorphism-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif-heading font-bold text-4xl md:text-5xl text-forest mb-6">
              Our Work is Based on the 17 SDGs
            </h2>
            <p className="font-sans-body text-lg text-technical-gray max-w-4xl mx-auto leading-relaxed mb-8">
              The Sustainable Development Goals are the blueprint to achieve a better and more sustainable future for all.
              Our club's initiatives align with these global objectives.
            </p>
            
            {/* Progress Indicator */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2">
                <span className="font-serif-heading font-bold text-2xl text-forest">
                  {currentSet + 1}
                </span>
                <span className="font-sans-body text-technical-gray text-lg">
                  / {sdgSets.length}
                </span>
              </div>
              <div className="w-32 h-2 bg-paper rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-olive to-forest rounded-full"
                  style={{ width: `${((currentSet + 1) / sdgSets.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
          </div>
          </motion.div>

          {/* SDG Cards Container */}
          <div 
            className="relative h-[600px] flex items-center justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {sdgSets.map((set, setIndex) => (
              <motion.div
                key={setIndex}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8, zIndex: 0 }}
                animate={{
                  opacity: setIndex === currentSet ? 1 : 0.2,
                  scale: setIndex === currentSet ? 1 : 0.6,
                  zIndex: setIndex === currentSet ? 10 : (setIndex < currentSet ? 5 : 1),
                  y: setIndex === currentSet ? 0 : (setIndex < currentSet ? -80 : 80),
                  rotateY: setIndex === currentSet ? 0 : (setIndex < currentSet ? -15 : 15),
                  rotateX: setIndex === currentSet ? 0 : (setIndex < currentSet ? -5 : 5)
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.4, 0, 0.2, 1],
                  scale: { duration: 0.6 },
                  opacity: { duration: 0.4 }
                }}
                style={{ 
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                  {set.map((goal, goalIndex) => (
                    <motion.div
                      key={goal.number}
                      className="group cursor-pointer"
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { 
                          delay: goalIndex * 0.1,
                          duration: 0.6,
                          ease: "easeOut"
                        }
                      }}
                      whileHover={{ 
                        scale: 1.08,
                        rotateY: 8,
                        rotateX: 5,
                        z: 30,
                        y: -10
                      }}
                      transition={{ 
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      style={{
                        transformStyle: "preserve-3d"
                      }}
                    >
                      <div className="glassmorphism-card p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 h-full flex flex-col">
                        {/* Goal Number and Icon */}
                        <div className="flex items-center justify-between mb-6">
                          <div 
                            className="text-4xl font-bold"
                            style={{ color: goal.color }}
                          >
                            {goal.number}
                          </div>
                          <div className="text-3xl">
                            {goal.icon}
                          </div>
                        </div>

                        {/* Goal Title */}
                        <h3 className="font-serif-heading font-bold text-xl text-forest mb-4 leading-tight">
                          {goal.title}
                        </h3>

                        {/* Goal Summary */}
                        <p className="font-sans-body text-technical-gray text-sm leading-relaxed mb-4 flex-1">
                          {goal.summary}
                        </p>

                        {/* Goal Description */}
                        <p className="font-sans-body text-technical-gray text-xs leading-relaxed mb-4">
                          {goal.description}
                        </p>

                        {/* Color Bar */}
                        <div 
                          className="w-full h-2 rounded-full"
                          style={{ backgroundColor: goal.color }}
                        />
                </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Auto-play Controls */}
          <div className="flex justify-center items-center gap-6 mt-12 auto-play-controls">
            {/* Play/Pause Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-4 py-2 bg-forest text-paper rounded-full hover:bg-olive transition-colors duration-300 auto-play-button"
            >
              {isAutoPlaying ? (
                <>
                  <div className="w-4 h-4 flex items-center justify-center">
                    <div className="w-1 h-4 bg-paper rounded-sm"></div>
                    <div className="w-1 h-4 bg-paper rounded-sm ml-1"></div>
                  </div>
                  <span className="text-sm font-medium">Pause</span>
                </>
              ) : (
                <>
                  <div className="w-0 h-0 border-l-[6px] border-l-paper border-y-[4px] border-y-transparent ml-1"></div>
                  <span className="text-sm font-medium">Play</span>
                </>
              )}
            </motion.button>

            {/* Navigation Dots */}
            <div className="flex gap-3">
              {sdgSets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSet(index);
                    setIsAutoPlaying(false); // Stop auto-play when manually selecting
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSet 
                      ? 'bg-forest scale-125' 
                      : 'bg-olive/30 hover:bg-olive/60'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play Indicator */}
            <div className="flex items-center gap-2 text-technical-gray text-sm">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-forest auto-play-indicator' : 'bg-gray-400'}`}></div>
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>

          {/* Auto-play Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16"
          >
            <div className="flex flex-col items-center gap-2 text-technical-gray">
              <span className="font-sans-body text-sm">
                {isAutoPlaying ? 'Cards auto-advance every 4 seconds' : 'Hover over cards to pause auto-play'}
              </span>
            </div>
          </motion.div>

          {/* Impact Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-20"
          >
            <div className="glassmorphism-card p-12 rounded-3xl shadow-lg max-w-4xl mx-auto">
              <h3 className="font-serif-heading font-bold text-2xl text-forest mb-6">
                Driving Change Through Technology
              </h3>
              <p className="font-sans-body text-technical-gray leading-relaxed text-lg">
                Each SDG represents a critical challenge that technology can help address. Through innovative projects, 
                research initiatives, and community engagement, TSCC members work collaboratively to develop sustainable 
                solutions that contribute to these global goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glassmorphism-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif-heading font-bold text-4xl md:text-5xl text-forest mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="font-sans-body text-lg text-technical-gray mb-12 max-w-2xl mx-auto">
              Join our community of innovators and help create a more sustainable future through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd77ZUOH5Xp3yRpF96H-ZxYjG35aCWWEF3I0Ie0nRSn3X5ynw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-olive to-forest text-paper font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Join TSCC Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-olive text-olive font-semibold rounded-full hover:bg-olive hover:text-paper transition-all duration-300"
              >
                View Our Projects
              </motion.button>
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;