import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const VideoHero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  // Multiple potential source paths to maximize compatibility across deployments
  const [videoSources] = useState<string[]>([
    '/NEW-TSCC-INRTO.mp4',
    './NEW-TSCC-INRTO.mp4',
    'NEW-TSCC-INRTO.mp4',
    '/public/NEW-TSCC-INRTO.mp4'
  ]);
  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
  const currentVideoSrc = videoSources[currentSourceIndex];
  const [showPlayOverlay, setShowPlayOverlay] = useState(false);

  // Handle video loading
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  // Try to autoplay once metadata is loaded (satisfies mobile autoplay policies)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Ensure inline playback attributes are present for mobile browsers
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', '');
    v.setAttribute('x5-playsinline', '');
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = async () => {
      try {
        await v.play();
        setShowPlayOverlay(false);
      } catch (e) {
        // Autoplay blocked on some mobile browsers; show manual play overlay
        setShowPlayOverlay(true);
      }
    };
    const onLoadedMetadata = () => {
      tryPlay();
    };
    v.addEventListener('loadedmetadata', onLoadedMetadata);
    return () => v.removeEventListener('loadedmetadata', onLoadedMetadata);
  }, []);

  const handleVideoError = () => {
    // Try next source if available
    setVideoLoaded(false);
    setShowPlayOverlay(false);
    setCurrentSourceIndex((prev) => {
      const next = prev + 1;
      if (next < videoSources.length) {
        // Switch to next source
        return next;
      }
      // Exhausted all sources; show fallback
      setVideoError(true);
      return prev;
    });
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
      className="relative h-[70vh] sm:h-[85vh] md:h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full video-hero-video object-contain md:object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src={currentVideoSrc}
          poster="/TSCC-Logo.png"
          onLoadedData={handleVideoLoad}
          onCanPlayThrough={handleVideoLoad}
          onError={handleVideoError}
          aria-label="TSCC Hero Background Video"
        >
          Your browser does not support the video tag.
        </video>

        {/* Tap-to-play overlay for mobile when autoplay is blocked */}
        {showPlayOverlay && !videoError && (
          <button
            className="absolute inset-0 flex items-center justify-center z-10"
            onClick={async () => {
              const v = videoRef.current;
              if (!v) return;
              try {
                await v.play();
                setShowPlayOverlay(false);
              } catch {}
            }}
            aria-label="Tap to play video"
          >
            <span className="px-6 py-3 rounded-full bg-black/60 text-white text-sm">Tap to play</span>
          </button>
        )}
        
        {/* Fallback background if video fails or is loading */}
        {(!videoLoaded || videoError) && (
          <div className="absolute inset-0 bg-gradient-to-br from-olive via-forest to-brown flex items-center justify-center">
            <div className="text-center text-white">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif-heading">TSCC</h1>
                <p className="text-xl md:text-2xl font-sans-body mb-6">Techno Smart Campus Club</p>
                <p className="text-lg md:text-xl font-sans-body mb-8 opacity-90">
                  MIT ADT University
                </p>
                {!videoError && (
                  <div className="mt-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
                    <p className="mt-2 text-sm">Loading video...</p>
                  </div>
                )}
                {videoError && (
                  <div className="mt-4">
                    <p className="text-sm opacity-75">Welcome to our community</p>
                  </div>
                )}
              </motion.div>
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
