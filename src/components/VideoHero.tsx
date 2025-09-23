import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const VideoHero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState('/NEW-TSCC-INTRO.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle video loading
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const target = e.target as HTMLVideoElement;
    console.error('Video failed to load:', e);
    console.error('Video source attempted:', currentVideoSrc);
    console.error('Video error details:', {
      error: target.error,
      networkState: target.networkState,
      readyState: target.readyState,
      src: target.src,
      currentSrc: target.currentSrc
    });
    
    // Try alternative video sources
    if (currentVideoSrc === '/NEW-TSCC-INTRO.mp4') {
      console.log('Trying alternative video source...');
      setCurrentVideoSrc('./NEW-TSCC-INTRO.mp4');
      setVideoError(false);
      setVideoLoaded(false);
    } else {
      setVideoError(true);
      setVideoLoaded(false);
    }
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault();
        scrollToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          crossOrigin="anonymous"
          onLoadedData={handleVideoLoad}
          onCanPlayThrough={handleVideoLoad}
          onError={handleVideoError}
          aria-label="TSCC Hero Background Video"
        >
          <source src={currentVideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback background if video fails or is loading */}
        {(!videoLoaded || videoError) && (
          <div className="absolute inset-0 bg-gradient-to-br from-olive via-forest to-brown flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">TSCC</h1>
              <p className="text-xl md:text-2xl">Techno Smart Campus Club</p>
              {!videoError && (
                <div className="mt-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
                  <p className="mt-2 text-sm">Loading video...</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

        </motion.div>
      </div>
    </section>
  );
};

export default VideoHero;
