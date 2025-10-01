import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer4Col from './components/ui/footer-column';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Events from './pages/Events';
import Articles from './pages/Articles';
import Memories from './pages/Memories';
import Apply from './pages/Apply';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';

function App() {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  // Handle scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 50; // Reduced threshold for earlier appearance
      setIsNavbarScrolled(scrollTop > threshold);
    };

    // Set initial state based on current scroll position
    const scrollTop = window.scrollY;
    const threshold = 50;
    setIsNavbarScrolled(scrollTop > threshold);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="bg-parchment min-h-screen text-ink paper-texture">
        <Navbar isScrolled={isNavbarScrolled} />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/events" element={<Events />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/recruitment" element={<Feedback />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
        <Footer4Col />
      </div>
    </Router>
  );
}

export default App;