import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/29039f7da_2.png", alt: "Brand Concept 1" },
  { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/fedd875bd_3.png", alt: "Brand Concept 2" },
  { src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/0b817c030_4.png", alt: "Brand Concept 3" }
];

export default function BrandConcepts() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="min-h-screen bg-[#faf9f6] pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">Brand Concepts</h1>
          <p className="text-slate-500 tracking-[0.2em] uppercase text-xs font-semibold">Visual Explorations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              layoutId={`img-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="cursor-pointer overflow-hidden bg-gray-100 shadow-sm group aspect-[3/4] rounded-lg"
              onClick={() => setSelectedId(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedId(null)}
          >
            <button
              className="absolute top-6 right-6 text-black hover:text-gray-600 transition-colors"
              onClick={() => setSelectedId(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              layoutId={`img-${selectedId}`}
              src={images[selectedId].src}
              alt={images[selectedId].alt}
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}