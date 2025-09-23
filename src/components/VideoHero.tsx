import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const VideoHero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState('/NEW-TSCC-INRTO.mp4');
  const [videoSources, setVideoSources] = useState([
    '/NEW-TSCC-INRTO.mp4',
    './NEW-TSCC-INRTO.mp4',
    'NEW-TSCC-INRTO.mp4',
    '/public/NEW-TSCC-INRTO.mp4'
  ]);
  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle video loading
  const handleVideoLoad = () => {
    console.log('Video loaded successfully:', currentVideoSrc);
    setVideoLoaded(true);
  };

  // Update video source when currentVideoSrc changes
  useEffect(() => {
    if (videoRef.current && currentVideoSrc) {
      videoRef.current.load();
    }
  }, [currentVideoSrc]);

  // Check video availability on component mount
  useEffect(() => {
    const checkVideoAvailability = async () => {
      console.log('Checking video availability...');
      
      for (let i = 0; i < videoSources.length; i++) {
        try {
          console.log(`Checking video source ${i + 1}/${videoSources.length}:`, videoSources[i]);
          
          // For local files, try a simple fetch
          if (videoSources[i].startsWith('http')) {
            // For external URLs, use HEAD request
            const response = await fetch(videoSources[i], { 
              method: 'HEAD',
              mode: 'cors'
            });
            if (response.ok) {
              console.log('✅ Video found at:', videoSources[i]);
              setCurrentVideoSrc(videoSources[i]);
              setCurrentSourceIndex(i);
              return;
            }
          } else {
            // For local files, try to load the video element
            const testVideo = document.createElement('video');
            testVideo.preload = 'metadata';
            testVideo.crossOrigin = 'anonymous';
            
            const loadPromise = new Promise((resolve, reject) => {
              testVideo.onloadedmetadata = () => resolve(true);
              testVideo.onerror = () => reject(false);
              testVideo.src = videoSources[i];
            });
            
            const result = await loadPromise;
            if (result) {
              console.log('✅ Video found at:', videoSources[i]);
              setCurrentVideoSrc(videoSources[i]);
              setCurrentSourceIndex(i);
              return;
            }
          }
        } catch (error) {
          console.log('❌ Video not found at:', videoSources[i], error);
        }
      }
      
      console.log('⚠️ No working video source found, will try fallback system');
    };

    checkVideoAvailability();
  }, []);

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
    
    // Try next video source
    const nextIndex = currentSourceIndex + 1;
    if (nextIndex < videoSources.length) {
      console.log(`Trying video source ${nextIndex + 1}/${videoSources.length}:`, videoSources[nextIndex]);
      setCurrentSourceIndex(nextIndex);
      setCurrentVideoSrc(videoSources[nextIndex]);
      setVideoError(false);
      setVideoLoaded(false);
    } else {
      console.error('All video sources failed to load');
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
          preload="auto"
          onLoadedData={handleVideoLoad}
          onCanPlayThrough={handleVideoLoad}
          onError={handleVideoError}
          aria-label="TSCC Hero Background Video"
        >
          {videoSources.map((src, index) => (
            <source 
              key={src} 
              src={src} 
              type="video/mp4" 
            />
          ))}
          Your browser does not support the video tag.
        </video>
        
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
