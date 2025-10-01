import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, BookOpen } from 'lucide-react';

interface NavbarProps {
  isScrolled?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalScrollState, setInternalScrollState] = useState(false);
  const location = useLocation();

  // Handle scroll detection if no external scroll state is provided
  useEffect(() => {
    if (isScrolled !== undefined) return; // Use external state if provided

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 100;
      setInternalScrollState(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const isNavbarScrolled = isScrolled !== undefined ? isScrolled : internalScrollState;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Members', path: '/members' },
    { name: 'Events', path: '/events' },
    { name: 'Articles', path: '/articles' },
    { name: 'Memories', path: '/memories' },
    { name: 'Recruitment', path: '/recruitment' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isNavbarScrolled ? 0 : -100, 
        opacity: isNavbarScrolled ? 1 : 0 
      }}
      transition={{ 
        duration: 0.4, 
        ease: [0.4, 0, 0.2, 1],
        opacity: { duration: 0.3 },
        y: { duration: 0.4 }
      }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isNavbarScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent pointer-events-none'
      }`}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        animate={{ 
          opacity: isNavbarScrolled ? 1 : 0,
          y: isNavbarScrolled ? 0 : -10
        }}
        transition={{ duration: 0.3, delay: isNavbarScrolled ? 0.1 : 0 }}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r from-olive to-muted-gold rounded-full opacity-30 group-hover:opacity-60 transition-opacity blur-sm ${
                isNavbarScrolled ? 'opacity-20' : 'opacity-30'
              }`}></div>
              <div className={`relative w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                isNavbarScrolled 
                  ? 'glassmorphism-logo border-white/20 group-hover:border-white/40' 
                  : 'glassmorphism-logo border-white/20 group-hover:border-white/40'
              }`}>
                <BookOpen className={`w-7 h-7 transition-colors ${
                  isNavbarScrolled 
                    ? 'text-forest group-hover:text-olive' 
                    : 'text-white group-hover:text-yellow-300'
                }`} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif-heading font-bold text-xl transition-colors ${
                isNavbarScrolled 
                  ? 'text-forest group-hover:text-olive' 
                  : 'text-white group-hover:text-yellow-300'
              }`}>
                TSCC
              </span>
              <span className={`font-sans-body text-xs -mt-1 transition-colors ${
                isNavbarScrolled 
                  ? 'text-technical-gray/80' 
                  : 'text-white/80'
              }`}>
                Techno Smart Campus Club
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-sans-body font-medium transition-all duration-300 relative group ${
                    isNavbarScrolled
                      ? `glassmorphism-nav-item ${
                          location.pathname === item.path
                            ? 'text-forest bg-white/20 border border-white/30'
                            : 'text-forest/80 hover:text-forest hover:bg-white/10 hover:border-white/20'
                        }`
                      : `${
                          location.pathname === item.path
                            ? 'text-white bg-white/20 border border-white/30'
                            : 'text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20'
                        }`
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        isNavbarScrolled
                          ? 'bg-gradient-to-r from-olive to-muted-gold'
                          : 'bg-gradient-to-r from-yellow-400 to-orange-400'
                      }`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                isNavbarScrolled
                  ? 'text-forest/80 hover:text-forest hover:bg-white/10 border border-white/20 hover:border-white/30 glassmorphism-nav-item'
                  : 'text-white/80 hover:text-white hover:bg-white/10 border border-white/20 hover:border-white/30'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isNavbarScrolled 
              ? 'glassmorphism-mobile-nav' 
              : 'bg-black/20 backdrop-blur-md'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-sans-body font-medium transition-all duration-300 ${
                  isNavbarScrolled
                    ? `glassmorphism-nav-item ${
                        location.pathname === item.path
                          ? 'text-forest bg-white/20 border border-white/30'
                          : 'text-forest/80 hover:text-forest hover:bg-white/10 hover:border-white/20'
                      }`
                    : `${
                        location.pathname === item.path
                          ? 'text-white bg-white/20 border border-white/30'
                          : 'text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20'
                      }`
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;