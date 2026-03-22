import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function BrandGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/1bcfe2c17_alsharedasketchwithyou14.png", caption: "Microsoft — Design Systems" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d5c087b60_2-ratio-1-outdoor-billboard-mockup-template-69bbedce2b60532d8c62109f-2x.png", caption: "CBS Sports HQ" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/66b2b5477_50x70cm-indoor-poster-frame-mockup-template-69b69d83064993c800576d31-2x.png", caption: "Art Direction" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/fc6d8a5c3_top-view-sunlight-overlay-three-business-cards-mockup-template2x.jpg", caption: "Print Design" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/0c41596e7_three-beer-bottle-mockup-697539e94270b64fd1f22789-2x.png", caption: "Packaging" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/93f20ac27_IMG_3318.png", caption: "Visual Identity" },
    { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/47f6fd98a_IMG_0491.jpg", caption: "Identity Framework" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/4ddbc5527_54.png", caption: "Product Packaging" }
  ];

  const openModal = (i) => setSelectedImage(i);
  const closeModal = () => setSelectedImage(null);
  const prev = () => setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setSelectedImage((selectedImage + 1) % galleryImages.length);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans selection:bg-pink-100 selection:text-pink-900 pb-20 pt-32">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        
        .font-serif {
          font-family: "PT Serif", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }
        .font-sans {
          font-family: "DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Link 
          to={createPageUrl("SideQuests")} 
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Side Quests
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-6 font-sans uppercase">Visual Design</p>
          <h1 className="text-4xl md:text-6xl font-light mb-6 font-serif text-slate-900">
            Brand Identities
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl font-sans">
            A collection of visual identities, design systems, and art direction projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="aspect-square overflow-hidden cursor-pointer group relative bg-white rounded-xl shadow-sm border border-gray-100"
              onClick={() => openModal(i)}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <button 
                onClick={closeModal} 
                className="absolute top-6 right-6 text-slate-800 hover:text-slate-500 transition-colors bg-white/50 rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); prev(); }} 
                className="absolute left-4 md:left-8 text-slate-800 hover:text-slate-500 transition-colors p-3 bg-white/80 rounded-full shadow-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
                className="max-w-5xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].caption}
                  className="w-full max-h-[80vh] object-contain rounded-sm shadow-md" 
                />
                <div className="mt-6 text-center">
                  <p className="text-slate-900 font-medium font-sans text-lg">{galleryImages[selectedImage].caption}</p>
                  <p className="text-slate-500 text-sm mt-1 font-sans">{selectedImage + 1} / {galleryImages.length}</p>
                </div>
              </motion.div>
              
              <button 
                onClick={(e) => { e.stopPropagation(); next(); }} 
                className="absolute right-4 md:right-8 text-slate-800 hover:text-slate-500 transition-colors p-3 bg-white/80 rounded-full shadow-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}