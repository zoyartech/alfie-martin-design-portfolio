import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import MobileNav from "@/components/MobileNav";

const galleryImages = [
{ src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/4f158f252_msft.png", caption: "Microsoft — Design Systems" },
{ src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/232dbcf99_1ee9e8c17cb91a48c23de9dfea5ce431.png", caption: "Brand Identity Work" },
{ src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/abc94bcb0_263737c32d0e1e076ac84aed6761a15d.png", caption: "Visual Direction" },
{ src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/c72dd3896_EGP-STKRS.png", caption: "Visual Identity" }];


export default function Home() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openModal = (i) => setSelectedImage(i);
  const closeModal = () => setSelectedImage(null);
  const prev = () => setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setSelectedImage((selectedImage + 1) % galleryImages.length);

  const scrollToSection = () => {
    document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link
              to={createPageUrl("Home")}
              className="text-sm tracking-[0.3em] font-semibold hover:text-[#8B7355] transition-colors duration-300">

              ALFIE MARTIN
            </Link>
            <div className="hidden md:flex items-center gap-10">
              <Link
                to={createPageUrl("Home")}
                className="relative text-xs tracking-[0.15em] font-medium text-black group">

                HOME
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></span>
              </Link>
              <Link
                to={createPageUrl("About")}
                className="relative text-xs tracking-[0.15em] font-medium text-gray-600 hover:text-black transition-colors group">

                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to={createPageUrl("CaseStudies")}
                className="relative text-xs tracking-[0.15em] font-medium text-gray-600 hover:text-black transition-colors group">

                CASE STUDIES
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to={createPageUrl("Gallery")}
                className="relative text-xs tracking-[0.15em] font-medium text-gray-600 hover:text-black transition-colors group">

                VISUALS
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to={createPageUrl("Contact")}
                className="relative text-xs tracking-[0.15em] font-medium px-6 py-2 border border-black hover:bg-black hover:text-white transition-all duration-300">

                CONTACT
              </Link>
            </div>
            <MobileNav activePage="Home" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-start px-6 lg:px-12 pt-28 md:pt-32 relative">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left: Text Content */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }} className="text-rose-600 mb-8 text-xs tracking-[0.3em]">

              CREATIVE DESIGNER
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight max-w-4xl">
              Building at the
              <br />
              intersection of business,
              <br />
              <span className="text-[#a06bfa]">design & vision.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-500 mt-12 max-w-md text-sm leading-relaxed">
              Multi-disciplinary designer working across Product, digital experiences, building products and making and data informed decisions.. Based in New York City. Focused on creating things that matter. Also I am an artist. I have a point of view. I can draw while working on a brand design book. Create content strategies, and speak developer concerning technical constraints.
            </motion.p>

            







          </div>

          {/* Right: Carnation Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex flex-shrink-0 w-72 xl:w-96 items-start justify-center lg:ml-[21%]">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/47aaf6d92_Screenshot2026-02-22at100530AM.png"
              alt="Floral figure artwork"
              className="w-full" />

          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto w-full mt-24">
          {/* Logo Wall */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-24 pt-12 border-t border-gray-100">
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-8">PREVIOUSLY </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {[
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/1190401ad_grammarlylogo.png", alt: "Grammarly" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/df08903cb_Group1.png", alt: "Polaroid" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/a8abeb8cd_microsoftlogo.png", alt: "Microsoft" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/6153e0dca_McKinsey_and_Company_Logo_1logo.png", alt: "McKinsey & Company" },
              { src: null, alt: "Rockefeller Capital" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/d491508f1_Logo_of_Deloittelogo.png", alt: "Deloitte" }].
              map((logo, i) =>
              <div key={i} className="flex items-center justify-center opacity-40 hover:opacity-80 transition-all duration-300">
                  {logo.src ?
                <img src={logo.src} alt={logo.alt} className="h-8 w-auto object-contain grayscale" /> :

                <span className="text-sm font-semibold tracking-wide text-gray-800 whitespace-nowrap">{logo.alt}</span>
                }
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-gray-400 mb-12">DESIGN PROCESS</motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
            {
              step: "01",
              title: "Discovery",
              description: "Understanding business goals, user needs, and market landscape"
            },
            {
              step: "02",
              title: "Strategy",
              description: "Defining design principles, positioning, and visual direction"
            },
            {
              step: "03",
              title: "Execution",
              description: "Creating comprehensive design systems and assets"
            },
            {
              step: "04",
              title: "Refinement",
              description: "Testing, iterating, and optimizing based on feedback"
            }].
            map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-gray-300 pt-6">

                <span className="text-xs text-gray-400 tracking-wider">{item.step}</span>
                <h3 className="text-xl font-medium mt-4 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-left">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800">

            "We need to stop worrying about proving the value of design & just focus on outcomes that provide value." – Denis Weil
          </motion.blockquote>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">VISUALS</p>
              <h2 className="text-3xl md:text-4xl font-light">Gallery</h2>
            </motion.div>
            <Link
              to={createPageUrl("Gallery")}
              className="hidden md:flex items-center gap-2 text-sm hover:text-[#8B7355] transition-colors">

              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-square overflow-hidden cursor-pointer group relative"
              onClick={() => openModal(i)}>
                <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                  <p className="text-white text-xs tracking-wider px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.caption}</p>
                </div>
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
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
              onClick={closeModal}>
                <button onClick={closeModal} className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors">
                  <X className="w-6 h-6" />
                </button>
                <button onClick={(e) => {e.stopPropagation();prev();}} className="absolute left-4 md:left-8 text-white hover:text-gray-300 transition-colors p-2">
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}>
                  <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].caption}
                  className="w-full max-h-[75vh] object-contain" />
                  <div className="mt-4 text-center">
                    <p className="text-white text-sm tracking-wider">{galleryImages[selectedImage].caption}</p>
                    <p className="text-gray-500 text-xs mt-1">{selectedImage + 1} / {galleryImages.length}</p>
                  </div>
                </motion.div>
                <button onClick={(e) => {e.stopPropagation();next();}} className="absolute right-4 md:right-8 text-white hover:text-gray-300 transition-colors p-2">
                  <ChevronRight className="w-8 h-8" />
                </button>
              </motion.div>
            }
          </AnimatePresence>

          <Link
            to={createPageUrl("Gallery")}
            className="md:hidden flex items-center justify-center gap-2 text-sm mt-8 hover:text-[#8B7355] transition-colors">

            View All Works <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-32 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">READY TO CONNECT?</p>
            <h2 className="text-4xl md:text-5xl font-light mb-12">Let's create something.</h2>
            <a
              href="mailto:hello@alfiemartin.com"
              className="inline-flex items-center gap-3 text-sm tracking-[0.15em] border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300">
              GET IN TOUCH <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-8 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">Instagram</a>
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">Dribbble</a>
          </div>
        </div>
      </motion.footer>
    </div>);

}