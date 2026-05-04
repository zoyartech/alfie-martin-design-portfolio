import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Loader2, Square, Maximize, X, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/a162ec94b_shapes.png", caption: "Abstract Shapes" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/dae16c46b_illustration.png", caption: "Office Characters" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/44266cad4_flowers-illustration.png", caption: "Botanical Illustration" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/44a771c35_bnn.png", caption: "Bad Nymph Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/a71fe480f_IMG_7391.png", caption: "After Hours Packaging Design" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d9eb72bd8_IMG_7230.JPG", caption: "3D Abstract Composition" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/088fbd338_IMG_30362.jpg", caption: "Digital Illustration: Mask" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/6fa478f50_IMG_3035.jpg", caption: "Digital Illustration: Portrait" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/273a4f491_IMG_0068.png", caption: "Mixed Media: Painted Hands" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/27cf6047e_IMG_0068.png", caption: "Illustration" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/e67bd1e01_IMG_5941.jpg", caption: "Illustration" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/a9be4d8e4_IMG_6368.png", caption: "Illustration" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/053f35cc5_IMG_6377.png", caption: "Illustration" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/e7c57caf1_IMG_7391.png", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/cdd59cbf0_IMG_9682.PNG", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/b47cab45b_IMG_8274.png", caption: "Illustration" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/7fd5ca4eb_Press.png", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/404f587ff_1.JPG", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/35b1bfef1_2.JPG", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/cc3a1207e_3.jpg", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/b99904fe1_IMG_1078.jpg", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/f84aedc1b_IMG_3235.png", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/741047eb9_IMG_4340.jpg", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/7e497d297_IMG_5998.JPG", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/571e0efd5_IMG_6149.jpg", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/1340188fd_IMG_3574.png", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/052990856_IMG_9346.jpg", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/297c8305b_interior-wooden-poster-frame-on-the-table-mockup-template-65f9b6afcdeb4752da6fcd74-2x.jpg", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/87bcdef28_outdoor-sidewalk-street-billboard-poster-mockup-template-65f9b64a492bc9abac15d4e8-2x.jpg", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/bc38fc16d_Untitled620x1024px-1.PNG", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/9f42b6529_Untitled620x1024px-2.PNG", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d3ea16a1f_Untitled-October820250855.jpg", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/6c4a05b60_Untitled620x1024px-16.PNG", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/2e0350ed7_Untitled620x1024px-19.PNG", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/f0b4739b3_Untitleddesign-1-2.png", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/33b7abacd_Untitleddesign-6.png", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/a3132b5ba_Yourparagraphtext-4.png", caption: "Brand Visual" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/acf9005d1_fc60ee56-cd94-4472-b179-4cfb74829b6f_kCJHkDGiU.png", caption: "Floral Bodysuit" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/031e6786e_Screenshot2026-05-02at105637PM.png", caption: "Cocktail Illustration" }
  ];

  const openModal = (i) => setSelectedImage(i);
  const closeModal = () => setSelectedImage(null);
  const prev = () => setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setSelectedImage((selectedImage + 1) % galleryImages.length);

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
      <div className="relative w-full h-[70vh] overflow-hidden bg-black/5">
        {heroVideo ? (
          <video
            ref={videoRef}
            src={heroVideo.video_url}
            poster={heroVideo.poster_url || "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d9c3febed_herooo00.png"}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            autoPlay
          />
        ) : (
          <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d9c3febed_herooo00.png"
            alt="Fashion runway hero"
            className="w-full h-full object-cover object-top"
          />
        )}
        <div className="absolute inset-0 bg-white/33 pointer-events-none" />
      </div>

      <div className="pt-16 pb-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
        {/* Gallery Grid */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-serif text-slate-900">Video Projects & Animations</h2>
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

        {/* Brand Visuals */}
        <div className="mt-32">
          <div className="mb-10">
            <h2 className="text-3xl font-serif text-slate-900">Brand Visuals</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                className="aspect-square overflow-hidden cursor-pointer group relative bg-white rounded-xl shadow-sm border border-gray-100"
                onClick={() => openModal(i)}>
                <img
                  loading="lazy"
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                />
              </motion.div>
            )}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage !== null &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeModal}>
              
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-slate-800 hover:text-slate-500 transition-colors bg-white/50 rounded-full p-2">
                <X className="w-6 h-6" />
              </button>
              
              <button
                onClick={(e) => {e.stopPropagation();prev();}}
                className="absolute left-4 md:left-8 text-slate-800 hover:text-slate-500 transition-colors p-3 bg-white/80 rounded-full shadow-sm">
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
                className="max-w-5xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}>
                
                <img
                  loading="lazy"
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].caption}
                  className="w-full max-h-[80vh] object-contain rounded-sm shadow-md" />
                
                <div className="mt-6 text-center">
                  <p className="text-slate-900 font-medium font-sans text-lg">{galleryImages[selectedImage].caption}</p>
                  <p className="text-slate-500 text-sm mt-1 font-sans">{selectedImage + 1} / {galleryImages.length}</p>
                </div>
              </motion.div>
              
              <button
                onClick={(e) => {e.stopPropagation();next();}}
                className="absolute right-4 md:right-8 text-slate-800 hover:text-slate-500 transition-colors p-3 bg-white/80 rounded-full shadow-sm">
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          }
        </AnimatePresence>

        </div>
      </div>
    </div>
  );
}