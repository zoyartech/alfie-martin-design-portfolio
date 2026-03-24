import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function BrandGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
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
  { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/a3132b5ba_Yourparagraphtext-4.png", caption: "Brand Visual" }];


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
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-12">
          
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Side Quests
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16">
          
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-6 font-sans uppercase">Visual Design</p>
          <h1 className="text-4xl md:text-6xl font-light mb-6 font-serif text-slate-900">Brand Identities & Illustrations

          </h1>
          <p className="text-lg text-slate-600 max-w-2xl font-sans">
            A collection of visual identities, design systems, and art direction projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((item, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="aspect-square overflow-hidden cursor-pointer group relative bg-white rounded-xl shadow-sm border border-gray-100"
            onClick={() => openModal(i)}>
            
              <img
              loading="lazy"
              src={item.src}
              alt={item.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
            
              
            </motion.div>
          )}
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
    </div>);

}