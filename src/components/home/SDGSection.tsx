import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SDGSection: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const sdgGoals = [
    { 
      id: 1, 
      title: 'No Poverty', 
      color: 'bg-red-500', 
      icon: '🏠',
      description: 'End poverty in all its forms everywhere by 2030, ensuring social protection and equal rights to economic resources.',
      hexColor: '#E5243B'
    },
    { 
      id: 2, 
      title: 'Zero Hunger', 
      color: 'bg-yellow-600', 
      icon: '🌾',
      description: 'End hunger, achieve food security and improved nutrition, and promote sustainable agriculture.',
      hexColor: '#DDA63A'
    },
    { 
      id: 3, 
      title: 'Good Health', 
      color: 'bg-green-500', 
      icon: '🏥',
      description: 'Ensure healthy lives and promote well-being for all at all ages through universal health coverage.',
      hexColor: '#4C9F38'
    },
    { 
      id: 4, 
      title: 'Quality Education', 
      color: 'bg-red-600', 
      icon: '📚',
      description: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.',
      hexColor: '#C5192D'
    },
    { 
      id: 5, 
      title: 'Gender Equality', 
      color: 'bg-orange-500', 
      icon: '⚖️',
      description: 'Achieve gender equality and empower all women and girls through equal rights and opportunities.',
      hexColor: '#FF3A21'
    },
    { 
      id: 6, 
      title: 'Clean Water', 
      color: 'bg-cyan-500', 
      icon: '💧',
      description: 'Ensure availability and sustainable management of water and sanitation for all.',
      hexColor: '#26BDE2'
    },
    { 
      id: 7, 
      title: 'Clean Energy', 
      color: 'bg-yellow-500', 
      icon: '⚡',
      description: 'Ensure access to affordable, reliable, sustainable and modern energy for all.',
      hexColor: '#FCC30B'
    },
    { 
      id: 8, 
      title: 'Economic Growth', 
      color: 'bg-red-700', 
      icon: '📈',
      description: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment.',
      hexColor: '#A21942'
    },
    { 
      id: 9, 
      title: 'Innovation', 
      color: 'bg-orange-600', 
      icon: '🏭',
      description: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.',
      hexColor: '#FD6925'
    },
    { 
      id: 10, 
      title: 'Reduced Inequalities', 
      color: 'bg-pink-500', 
      icon: '🤝',
      description: 'Reduce inequality within and among countries through progressive policies and fair trade.',
      hexColor: '#DD1367'
    },
    { 
      id: 11, 
      title: 'Sustainable Cities', 
      color: 'bg-orange-400', 
      icon: '🏙️',
      description: 'Make cities and human settlements inclusive, safe, resilient and sustainable.',
      hexColor: '#FD9D24'
    },
    { 
      id: 12, 
      title: 'Responsible Consumption', 
      color: 'bg-yellow-700', 
      icon: '♻️',
      description: 'Ensure sustainable consumption and production patterns through resource efficiency.',
      hexColor: '#BF8B2E'
    },
    { 
      id: 13, 
      title: 'Climate Action', 
      color: 'bg-green-600', 
      icon: '🌍',
      description: 'Take urgent action to combat climate change and its impacts through mitigation and adaptation.',
      hexColor: '#3F7E44'
    },
    { 
      id: 14, 
      title: 'Life Below Water', 
      color: 'bg-blue-500', 
      icon: '🐟',
      description: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development.',
      hexColor: '#0A97D9'
    },
    { 
      id: 15, 
      title: 'Life on Land', 
      color: 'bg-green-700', 
      icon: '🌳',
      description: 'Protect, restore and promote sustainable use of terrestrial ecosystems and halt biodiversity loss.',
      hexColor: '#56C02B'
    },
    { 
      id: 16, 
      title: 'Peace & Justice', 
      color: 'bg-blue-600', 
      icon: '⚖️',
      description: 'Promote peaceful and inclusive societies for sustainable development and provide access to justice.',
      hexColor: '#00689D'
    },
    { 
      id: 17, 
      title: 'Partnerships', 
      color: 'bg-blue-700', 
      icon: '🤝',
      description: 'Strengthen the means of implementation and revitalize the global partnership for sustainable development.',
      hexColor: '#19486A'
    }
  ];

  const handleCardClick = (cardId: number) => {
    setFlippedCard(flippedCard === cardId ? null : cardId);
  };

  // Performance optimization: memoize card data
  const memoizedCards = React.useMemo(() => sdgGoals, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-electric-green to-tech-purple bg-clip-text text-transparent">
            UN SDG Goals
          </h2>
          <p className="font-poppins text-lg text-gray-300 max-w-3xl mx-auto">
            Our commitment to achieving the United Nations Sustainable Development Goals through technology and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {memoizedCards.map((goal, index) => {
            const isFlipped = flippedCard === goal.id;
            const isHovered = hoveredCard === goal.id;
            const isBackground = flippedCard !== null && flippedCard !== goal.id;
            
            return (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer perspective-1000"
                style={{ 
                  opacity: isBackground ? 0.1 : 1,
                  pointerEvents: isBackground ? 'none' : 'auto',
                  zIndex: isFlipped ? 50 : 1
                }}
                onMouseEnter={() => setHoveredCard(goal.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(goal.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(goal.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`SDG ${goal.id}: ${goal.title}. Click to flip card for more information.`}
              >
                <motion.div
                  className="relative w-full h-32"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ 
                    rotateY: isFlipped ? 180 : 0,
                    scale: isHovered && !isFlipped ? 1.05 : 1
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                >
                  {/* Front of Card */}
                  <motion.div
                    className="absolute inset-0 w-full h-full backface-hidden"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)'
                    }}
                  >
                    <div 
                      className={`${goal.color} p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[120px] flex flex-col items-center justify-center text-center relative overflow-hidden`}
                      style={{
                        background: `linear-gradient(135deg, ${goal.hexColor} 0%, ${goal.hexColor}dd 100%)`
                      }}
                    >
                      {/* Hover Effect Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered && !isFlipped ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform relative z-10">
                  {goal.icon}
                </div>
                      <div className="text-white font-orbitron font-semibold text-xs leading-tight relative z-10">
                  <div className="bg-black/20 px-1 py-0.5 rounded text-[10px] mb-1">
                    SDG {goal.id}
                  </div>
                  {goal.title}
                </div>
              </div>
            </motion.div>

                  {/* Back of Card */}
                  <motion.div
                    className="absolute inset-0 w-full h-full backface-hidden"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div 
                      className="p-4 rounded-lg shadow-xl min-h-[120px] flex flex-col items-center justify-center text-center relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${goal.hexColor} 0%, ${goal.hexColor}dd 100%)`
                      }}
                    >
                      {/* Back Content Overlay */}
                      <div className="absolute inset-0 bg-black/20 rounded-lg" />
                      
                      <div className="text-white font-orbitron font-semibold text-xs leading-tight relative z-10 text-center">
                        <div className="bg-black/30 px-2 py-1 rounded text-[10px] mb-2">
                          SDG {goal.id}
                        </div>
                        <div className="text-[10px] leading-tight mb-2 font-medium">
                          {goal.title}
                        </div>
                        <div className="text-[8px] leading-tight opacity-90 mb-2">
                          {goal.description}
                        </div>
                        <div className="text-[8px] opacity-70">
                          Click to flip back
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="font-poppins text-gray-400 max-w-2xl mx-auto">
            Through our projects and initiatives, we actively contribute to multiple SDGs, focusing on sustainable technology solutions that create positive environmental and social impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SDGSection;