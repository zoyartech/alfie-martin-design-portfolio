import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';

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
        <div className="absolute inset-0 bg-white/33" />
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
              key={heroVideo?.video_url || 'default'}
              ref={videoRef}
              className="block w-full h-auto bg-slate-900"
              muted
              loop
              playsInline
              preload="metadata"
              poster={heroVideo?.poster_url || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"}
              aria-label="Multi media video presentation"
              onClick={handleManualPlay}
            >
              {heroVideo ? (
                <source src={heroVideo.video_url} />
              ) : (
                <>
                  <source src="/downloads/7f072b66-b84c-4fc6-8929-60353a9ca0f0_U5ZXq2aNZ.mov" type="video/quicktime" />
                  <source src="/Downloads/7f072b66-b84c-4fc6-8929-60353a9ca0f0_U5ZXq2aNZ.mov" type="video/quicktime" />
                </>
              )}
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
                <motion.div
                  key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
                  {project.poster_url ? (
                    <img 
                      src={project.poster_url} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-slate-200 transition-opacity duration-700 group-hover:opacity-0" />
                  )}
                  <video
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${project.poster_url ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
                    muted
                    loop
                    playsInline
                    onMouseOver={(e) => {
                      const playPromise = e.target.play();
                      if (playPromise !== undefined) {
                        playPromise.catch(() => {});
                      }
                    }}
                    onMouseOut={(e) => { 
                      e.target.pause(); 
                      e.target.currentTime = 0; 
                    }}
                  >
                    <source src={project.video_url} />
                  </video>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl">
                      <Play className="w-6 h-6 text-slate-900 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                </div>
              </motion.div>
              ))}
            </div>
          )}
        </div>

        </div>
      </div>
    </div>
  );
}