import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function MultiMedia() {
  const videoRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    ['/downloads/CFNetworkDownload_9HS79a.tmp.MP4', 
     '/Downloads/CFNetworkDownload_9HS79a.tmp.MP4', 
     '/downloads/CFNetworkDownload_9HS79a.tmp.mp4', 
     '/CFNetworkDownload_9HS79a.tmp.MP4'].forEach(p => {
      fetch(p, { method: 'HEAD' })
        .then(r => console.log('Check', p, r.status))
        .catch(e => console.log('Check error', p, e));
    });
  }, []);
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

    const video = videoRef.current;
    // Ensure muted is explicitly set for programmatic autoplay to work in some browsers
    video.muted = true;
    video.defaultMuted = true;

    const handleError = () => {
      setHasError(true);
    };
    video.addEventListener('error', handleError, true);

    let isPlayPending = false;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.1, 0.25]
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Play when 25% or more is visible
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          if (video.paused && !isPlayPending) {
            isPlayPending = true;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsPlaying(true);
                  isPlayPending = false;
                })
                .catch(e => {
                  console.log("Autoplay prevented or failed:", e);
                  isPlayPending = false;
                });
            } else {
              isPlayPending = false;
            }
          }
        } 
        // Pause when less than 10% is visible
        else if (entry.intersectionRatio <= 0.1) {
          if (!video.paused && !isPlayPending) {
            video.pause();
            setIsPlaying(false);
          }
        }
      });
    }, options);

    observer.observe(video);

    return () => {
      observer.unobserve(video);
      video.removeEventListener('error', handleError, true);
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
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Hero */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/6d39a590d_ChanelRickOwens-4.png"
          alt="Fashion runway hero"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-12 left-6 lg:left-12">
          <p className="text-xs tracking-[0.3em] text-white/70 mb-3 font-sans uppercase">MEDIA</p>
          <h1 className="text-4xl md:text-6xl font-light font-serif text-white">Multi Media</h1>
        </div>
      </div>

      <div className="pt-16 pb-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <div className="relative w-full max-w-full rounded-[12px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] bg-slate-900 group">
            <video
              ref={videoRef}
              className="block w-full h-auto"
              muted
              loop
              playsInline
              preload="metadata"
              poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
              aria-label="Multi media video presentation"
              onClick={handleManualPlay}
            >
              {/* Placeholder video - please upload your video using the media manager and replace this URL */}
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              <p>Your browser does not support the video tag.</p>
            </video>

            {hasError && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                <div className="bg-white/90 p-4 md:p-6 rounded-xl backdrop-blur-sm shadow-lg text-center max-w-sm">
                  <p className="text-slate-900 font-semibold mb-1">Video could not load</p>
                  <p className="text-slate-600 text-sm">Please check that the file is in the downloads folder.</p>
                </div>
              </div>
            )}

            {prefersReducedMotion && !isPlaying && !hasError && (
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
    </div>
  );
}