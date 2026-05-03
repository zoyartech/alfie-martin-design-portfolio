import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Loader2, Square, Maximize } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';

function GalleryVideoCard({ project, index }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleFullscreen = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
        {project.poster_url && !isPlaying ? (
          <img 
            src={project.poster_url} 
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          />
        ) : !isPlaying ? (
          <div className="absolute inset-0 w-full h-full bg-slate-200 transition-opacity duration-300" />
        ) : null}
        
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
          muted
          loop
          playsInline
          src={project.video_url}
        />
        
        {!isPlaying && (
          <>
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={handlePlay}
                className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl hover:scale-105 transition-transform"
              >
                <Play className="w-6 h-6 text-slate-900 ml-1" />
              </button>
            </div>
          </>
        )}
        
        {isPlaying && (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
            <button 
              onClick={handleFullscreen}
              className="bg-white/90 rounded-full w-9 h-9 flex items-center justify-center backdrop-blur-sm shadow-lg hover:scale-105 transition-transform text-slate-900"
              title="Fullscreen"
            >
              <Maximize className="w-4 h-4" />
            </button>
            <button 
              onClick={handleStop}
              className="bg-white/90 rounded-full px-4 py-2 flex items-center gap-2 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform text-sm font-medium text-slate-900"
            >
              <Square className="w-4 h-4 fill-current" />
              Stop
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function MultiMedia() {
  const videoRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const { data: videos = [], isLoading } = useQuery({
    queryKey: ['videoProjects'],
    queryFn: () => base44.entities.VideoProject.list('-created_date')
  });

  const heroVideo = videos.find(v => v.role === 'hero');
  const galleryVideos = videos.filter(v => v.role === 'gallery');
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
  }, [prefersReducedMotion, heroVideo?.video_url]);

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
        <div className="absolute inset-0 bg-white/33" />
        <div className="absolute bottom-12 left-6 lg:left-12">
          <p className="text-xs tracking-[0.3em] text-white/70 mb-3 font-sans uppercase">MEDIA</p>
          <h1 className="text-4xl md:text-6xl font-light font-serif text-white">Multi Media</h1>
        </div>
      </div>

      <div className="pt-16 pb-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
        {/* Gallery Grid */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-serif text-slate-900">Additional Projects</h2>
            <Button variant="outline" onClick={() => window.open('/AdminVideos', '_blank')}>Manage Videos</Button>
          </div>
          {isLoading ? (
            <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-slate-400" /></div>
          ) : galleryVideos.length === 0 ? (
            <p className="text-slate-500">No gallery videos added yet. Click Manage Videos to add some.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryVideos.map((project, index) => (
                <GalleryVideoCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>

        </div>
      </div>
    </div>
  );
}