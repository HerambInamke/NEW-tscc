import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashProps {
  onEnterSite: () => void;
}

const Splash: React.FC<SplashProps> = ({ onEnterSite }) => {
  const [showButton, setShowButton] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState('/NEW-TSCC-INRTO.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);

  // 9-second video duration with proper timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 9000);

    // Auto-redirect after 9 seconds
    const redirectTimer = setTimeout(() => {
      onEnterSite();
    }, 10000);

    // Show skip option after 3 seconds if video hasn't loaded
    const skipTimer = setTimeout(() => {
      if (!videoLoaded) {
        setShowSkip(true);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
      clearTimeout(skipTimer);
    };
  }, [videoLoaded, onEnterSite]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setShowSkip(false);
  };

  const handleVideoEnd = () => {
    // If video ends before 9 seconds, show button immediately
    setShowButton(true);
  };

  // Control video duration to exactly 9 seconds
  useEffect(() => {
    if (videoRef.current && videoLoaded) {
      const video = videoRef.current;
      
      // Set video to loop if it's shorter than 9 seconds
      if (video.duration < 9) {
        video.loop = true;
      }
    }
  }, [videoLoaded]);

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
    if (currentVideoSrc === '/NEW-TSCC-INRTO.mp4') {
      console.log('Trying alternative video source...');
      setCurrentVideoSrc('./NEW-TSCC-INRTO.mp4');
      setVideoError(false);
      setVideoLoaded(false);
    } else {
      setVideoError(true);
      setShowSkip(true);
      setShowButton(true);
    }
  };

  const handleSkip = () => {
    setShowButton(true);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showSkip) {
        handleSkip();
      } else if (event.key === 'Enter' && showButton) {
        onEnterSite();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSkip, showButton, onEnterSite]);


  return (
    <motion.div
      className="video-splash-container fixed inset-0 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {!videoError ? (
          <video
            ref={videoRef}
            className="video-splash-video"
            autoPlay
            muted
            playsInline
            preload="metadata"
            crossOrigin="anonymous"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            onCanPlayThrough={handleVideoLoad}
            onEnded={handleVideoEnd}
            onTimeUpdate={(e) => {
              const video = e.target as HTMLVideoElement;
              // Stop video at exactly 9 seconds
              if (video.currentTime >= 9) {
                video.pause();
                setShowButton(true);
              }
            }}
            aria-label="TSCC Splash Video - Techno Smart Campus Club Introduction"
          >
            <source src={currentVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          /* Fallback content when video fails to load */
          <div className="w-full h-full bg-gradient-to-br from-olive to-forest flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">TSCC</h1>
              <p className="text-xl md:text-2xl">Techno Smart Campus Club</p>
      </div>
                  </div>
        )}
                    </div>

      {/* Loading Overlay */}
      {!videoLoaded && !videoError && (
                    <motion.div
          className="video-splash-loading"
          initial={{ opacity: 1 }}
          animate={{ opacity: videoLoaded ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center text-white">
            <div className="video-splash-spinner mx-auto mb-4"></div>
            <p className="text-lg">Loading...</p>
                      </div>
              </motion.div>
            )}

      {/* Skip Button */}
      <AnimatePresence>
        {showSkip && !showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
            onClick={handleSkip}
            className="video-splash-skip"
            aria-label="Skip video and enter site"
          >
            Skip
          </motion.button>
            )}
          </AnimatePresence>

      {/* Enter Site Button */}
      <AnimatePresence>
        {showButton && (
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.8 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          >
            <motion.button
          onClick={onEnterSite}
              className="video-splash-button"
              aria-label="Enter the TSCC website"
          whileHover={{ 
            boxShadow: "0 0 30px rgba(107, 142, 35, 0.4)",
            y: -2
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Enter Site</span>
          <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for better text readability */}
      <div className="video-splash-overlay" />
    </motion.div>
  );
};

export default Splash;