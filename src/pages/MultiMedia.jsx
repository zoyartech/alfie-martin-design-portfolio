import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function MultiMedia() {
  const videoRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !videoRef.current) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.1, 0.25]
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Play when 25% or more is visible
        if (entry.intersectionRatio >= 0.25) {
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => setIsPlaying(true))
              .catch(e => console.log("Autoplay prevented or failed:", e));
          }
        } 
        // Pause when less than 10% is visible
        else if (entry.intersectionRatio <= 0.1) {
          if (videoRef.current) {
            videoRef.current.pause();
          }
          setIsPlaying(false);
        }
      });
    }, options);

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [prefersReducedMotion]);

  const handleManualPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] pt-32 pb-16 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-6 font-sans uppercase">MEDIA</p>
          <h1 className="text-4xl md:text-6xl font-light mb-12 font-serif text-slate-900">
            Multi Media
          </h1>

          <div className="relative w-full max-w-full rounded-[12px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] bg-slate-900 group aspect-video">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
              aria-label="Multi media video presentation"
            >
              <source src="/downloads/CFNetworkDownload_9HS79a.tmp.MP4" type="video/mp4" />
              <source src="/downloads/CFNetworkDownload_9HS79a.tmp.webm" type="video/webm" />
              
              <div className="w-full h-full bg-slate-200 flex flex-col items-center justify-center p-8 text-center relative">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                  alt="Video poster fallback" 
                  className="w-full h-full object-cover absolute inset-0 opacity-40"
                />
                <div className="relative z-10 max-w-md bg-white/90 p-6 rounded-xl backdrop-blur-sm shadow-sm border border-white/20">
                  <p className="text-slate-800 font-medium mb-2">The video could not load.</p>
                  <p className="text-slate-600 text-sm">Please make sure the video file is placed in the correct downloads folder or update the source URL.</p>
                </div>
              </div>
            </video>

            {prefersReducedMotion && !isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity">
                <button 
                  onClick={handleManualPlay}
                  className="bg-white/90 hover:bg-white text-slate-900 rounded-full p-5 transition-transform hover:scale-105 shadow-lg"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 ml-1" />
                </button>
              </div>
            )}
            
            {prefersReducedMotion && isPlaying && (
              <div 
                className="absolute inset-0 cursor-pointer"
                onClick={handleManualPlay}
                aria-label="Pause video"
              />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}