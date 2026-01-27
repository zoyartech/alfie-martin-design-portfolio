import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function MixedMedia() {
  const [selectedWork, setSelectedWork] = useState(null);

  const mediaWorks = [
    {
      id: 1,
      title: "Urban Textures",
      medium: "Photography & Digital Collage",
      image: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=1200&q=80",
      year: "2024"
    },
    {
      id: 2,
      title: "Abstract Forms",
      medium: "Mixed Media",
      image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&q=80",
      year: "2024"
    },
    {
      id: 3,
      title: "Color Studies",
      medium: "Digital Art",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      year: "2023"
    },
    {
      id: 4,
      title: "Motion Experiments",
      medium: "Animation",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
      year: "2023"
    },
    {
      id: 5,
      title: "Geometric Patterns",
      medium: "Illustration",
      image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=1200&q=80",
      year: "2023"
    },
    {
      id: 6,
      title: "Light & Shadow",
      medium: "Photography",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
      year: "2022"
    },
    {
      id: 7,
      title: "Typographic Explorations",
      medium: "Experimental Typography",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80",
      year: "2022"
    },
    {
      id: 8,
      title: "Material Studies",
      medium: "3D Rendering",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
      year: "2022"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="text-sm tracking-[0.3em] font-medium">
              ALFIE MARTIN
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <Link to={createPageUrl("Home")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                HOME
              </Link>
              <Link to={createPageUrl("About")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                ABOUT
              </Link>
              <Link to={createPageUrl("Design")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                DESIGN
              </Link>
              <Link to={createPageUrl("MixedMedia")} className="text-xs tracking-[0.2em] text-black border-b border-black pb-1">
                MIXED MEDIA
              </Link>
              <Link to={createPageUrl("PassionProjects")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                PASSION PROJECTS
              </Link>
              <Link to={createPageUrl("Gallery")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                VISUALS
              </Link>
              <Link to={createPageUrl("Contact")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">EXPERIMENTAL WORK</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6">Mixed Media</h1>
            <p className="text-gray-500 max-w-2xl">
              A space for creative exploration and experimentation across photography, 
              digital art, illustration, and motion design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaWorks.map((work, i) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedWork(work)}
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-400 tracking-wider">{work.medium}</span>
                    <span className="text-xs text-gray-400">{work.year}</span>
                  </div>
                  <h3 className="text-lg font-light group-hover:text-[#8B7355] transition-colors">
                    {work.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedWork(null)}
          >
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                className="w-full max-h-[75vh] object-contain"
              />
              <div className="mt-6 text-white">
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-[0.2em] text-gray-400">
                    {selectedWork.medium.toUpperCase()}
                  </span>
                  <span className="text-xs text-gray-500">{selectedWork.year}</span>
                </div>
                <h2 className="text-2xl font-light mt-2">{selectedWork.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Mixed Media Section */}
      <section className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">CREATIVE PHILOSOPHY</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Experimentation as practice
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mixed media work allows me to push creative boundaries and explore new techniques 
              without the constraints of client projects. This experimental space feeds into my 
              commercial work, bringing fresh perspectives and innovative solutions to design challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">Instagram</a>
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}