import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function RCM2() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/df332dcad_1.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/6057ab5d5_2.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/a1b26db8c_3.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/56a998723_4.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/6473632f7_5.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/fc6de0d2e_6.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/4ce8d50ab_Screenshot2026-03-29at34750PM.png"
  ];

  const openModal = (i) => setSelectedImage(i);
  const closeModal = () => setSelectedImage(null);
  const prev = () => setSelectedImage((selectedImage - 1 + images.length) % images.length);
  const next = () => setSelectedImage((selectedImage + 1) % images.length);

  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };
  const handleDotClick = (i) => {
    setDirection(i > currentSlide ? 1 : -1);
    setCurrentSlide(i);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="min-h-screen bg-[#e4e3dc] pt-24 pb-12 flex flex-col items-center gap-12 px-4 md:px-8">
      <img 
        src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/ea6a25825_VisualIdentityforLuxuryBrands.png" 
        alt="Visual Identity for Luxury Brands Hero" 
        className="w-full max-w-5xl h-auto shadow-2xl mb-4"
      />
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="relative w-full flex items-center justify-center group overflow-hidden py-4">
          <button onClick={prevSlide} className="absolute left-4 md:left-12 p-3 bg-white/50 hover:bg-white text-black rounded-full shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-all">
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="relative w-[66%] flex items-center justify-center">
            {/* Invisible spacer to maintain container height */}
            <img src={images[0]} alt="spacer" className="w-full h-auto opacity-0 pointer-events-none" />
            
            <AnimatePresence initial={false} custom={direction}>
              <motion.img 
                key={currentSlide}
                src={images[currentSlide]}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                alt={`Rockefeller Capital Management Presentation Slide ${currentSlide + 1}`} 
                onClick={() => openModal(currentSlide)}
                className="absolute top-0 left-0 w-full h-auto shadow-2xl cursor-pointer hover:opacity-95 transition-opacity"
              />
            </AnimatePresence>
          </div>

          <button onClick={nextSlide} className="absolute right-4 md:right-12 p-3 bg-white/50 hover:bg-white text-black rounded-full shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-all">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
        <div className="flex gap-3 mt-4">
          {images.map((_, i) => (
            <button key={i} onClick={() => handleDotClick(i)} className={`w-3 h-3 rounded-full transition-colors ${currentSlide === i ? 'bg-black' : 'bg-black/30 hover:bg-black/50'}`} />
          ))}
        </div>
      </div>

      <img 
        src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/5f12ad8bf_top-view-iphone-13-pro-with-an-app-logo-detail-mockup-template-69c98c7c882c70c8e3d349c4-2x.png" 
        alt="Rockefeller App on iPhone" 
        className="w-full max-w-5xl h-auto shadow-2xl mt-8"
      />
      
      <img 
        src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/43d04749d_Screenshot2026-03-29at35314PM.png" 
        alt="Rockefeller App Details" 
        className="w-[63%] max-w-[645px] h-auto shadow-2xl mt-8"
      />

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button onClick={closeModal} className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50">
              <X className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 text-white hover:text-gray-300 transition-colors p-2 z-50">
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage]}
                alt={`Slide ${selectedImage + 1}`}
                className="w-full max-h-[85vh] object-contain"
              />
              <p className="text-gray-400 text-sm mt-4">
                {selectedImage + 1} / {images.length}
              </p>
            </motion.div>

            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 text-white hover:text-gray-300 transition-colors p-2 z-50">
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}