import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import MobileNav from "@/components/MobileNav";

const galleryItems = [
{
  id: 1,
  title: "Ethereal Brand Identity",
  category: "Branding",
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  year: "2024"
},
{
  id: 2,
  title: "Minimal Packaging Design",
  category: "Packaging",
  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
  year: "2024"
},
{
  id: 3,
  title: "Architectural Photography",
  category: "Art Direction",
  image: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=1200&q=80",
  year: "2023"
},
{
  id: 4,
  title: "Digital Interface Design",
  category: "UI/UX",
  image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80",
  year: "2023"
},
{
  id: 5,
  title: "Editorial Layout",
  category: "Print",
  image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80",
  year: "2023"
},
{
  id: 6,
  title: "Abstract Compositions",
  category: "Art Direction",
  image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&q=80",
  year: "2023"
},
{
  id: 7,
  title: "Luxury Brand Campaign",
  category: "Branding",
  image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
  year: "2022"
},
{
  id: 8,
  title: "Product Photography",
  category: "Photography",
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80",
  year: "2022"
},
{
  id: 9,
  title: "Web Experience Design",
  category: "UI/UX",
  image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
  year: "2022"
},
{
  id: 10,
  title: "Fashion Editorial",
  category: "Art Direction",
  image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
  year: "2022"
},
{
  id: 11,
  title: "Typeface Design",
  category: "Typography",
  image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=1200&q=80",
  year: "2021"
},
{
  id: 12,
  title: "Environmental Graphics",
  category: "Spatial Design",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  year: "2021"
}];


const categories = ["All", "Branding", "Art Direction", "UI/UX", "Design Systems", "Print"];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" ?
  galleryItems :
  galleryItems.filter((item) => item.category === activeCategory);

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
              <Link to={createPageUrl("CaseStudies")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                CASE STUDIES
              </Link>
              <Link to={createPageUrl("Contact")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                CONTACT
              </Link>
            </div>
            <MobileNav activePage="Gallery" />
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            to={createPageUrl("Home")}
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors mb-8">

            <ArrowLeft className="w-4 h-4" /> BACK TO HOME
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>

            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">Visuals</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6">Images</h1>
            <p className="text-gray-500 max-w-xl">A curated collection from some of my favorite projects


            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mt-12">
            {categories.map((category) =>
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs tracking-[0.15em] px-4 py-2 border transition-all duration-300 ${
              activeCategory === category ?
              "border-black bg-black text-white" :
              "border-gray-200 hover:border-black"}`
              }>

                {category.toUpperCase()}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) =>
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}>

                  <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />

                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 tracking-wider">{item.category}</span>
                      <span className="text-xs text-gray-400">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-light mt-1 group-hover:text-[#8B7355] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImage(null)}>

            <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors">

              <X className="w-6 h-6" />
            </button>

            <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}>

              




              <div className="mt-6 text-white">
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-[0.2em] text-gray-400">
                    {selectedImage.category.toUpperCase()}
                  </span>
                  <span className="text-xs text-gray-500">{selectedImage.year}</span>
                </div>
                <h2 className="text-2xl font-light mt-2">{selectedImage.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>

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
    </div>);

}