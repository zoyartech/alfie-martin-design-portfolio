import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import MobileNav from "@/components/MobileNav";

const galleryImages = [
{ src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/1bcfe2c17_alsharedasketchwithyou14.png", caption: "Microsoft — Design Systems" },
{ src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/e19e1242e_aaaaa.png", caption: "Brand Identity Work" },
{ src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/774fe444f_event-poster-design-template-66e0f3800fa4ecb1a1e657ce-2x.png", caption: "Visual Direction" },
{ src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/47f6fd98a_IMG_0491.jpg", caption: "Visual Identity" },
{ src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/66b2b5477_50x70cm-indoor-poster-frame-mockup-template-69b69d83064993c800576d31-2x.png", caption: "Art Direction" },
{ src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/02667b816_50x70-poster-frame-and-photo-frame-on-room-wall-mockup-template-69b69cff064993c800576cf6-2x.png", caption: "Art Direction" },
{ src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/0fa026090_IMG_34452.jpg", caption: "Editorial" },
{ src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/907f626a2_IMG_34462.JPG", caption: "Editorial" },
{ src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/232afe066_IMG_34472.jpg", caption: "Editorial" },
{ src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/2a68ce658_man-holding-a3-poster-flyer-mockup-template-69b69ded064993c800576d83-2x.png", caption: "Art Direction" },
{ src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/4939e8aea_IMG_2415.jpg", caption: "Art Direction" },
{ src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/97f7483f6_IMG_2555.png", caption: "Illustration" },
{ src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/0dffa82fe_Screenshot2024-08-25at94758AM.PNG", caption: "Illustration" },
{ src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/fc6d8a5c3_top-view-sunlight-overlay-three-business-cards-mockup-template2x.jpg", caption: "Print Design" },
{ src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/0c41596e7_three-beer-bottle-mockup-697539e94270b64fd1f22789-2x.png", caption: "Packaging" },
{ src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/4ddbc5527_54.png", caption: "Packaging" },
{ src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/daee2761e_Untitled-October8202508552.jpg", caption: "Illustration" },
{ src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/e60aead83_flowerrrr.png", caption: "Illustration" },
{ src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/7972ab4c8_IMG_61212.jpg", caption: "Illustration" },
{ src: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d1bec498d_IMG_6117.jpg", caption: "Illustration" }];


export default function Home() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const heroRef = React.useRef(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isMouseIn, setIsMouseIn] = React.useState(false);

  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const openModal = (i) => setSelectedImage(i);
  const closeModal = () => setSelectedImage(null);
  const prev = () => setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setSelectedImage((selectedImage + 1) % galleryImages.length);

  const scrollToSection = () => {
    document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section 
        ref={heroRef} 
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsMouseIn(false)}
        onMouseEnter={() => setIsMouseIn(true)}
        className="min-h-screen w-full relative overflow-hidden bg-black flex flex-col justify-between"
      >
        {/* Blurred background layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center blur-[12px] scale-110 opacity-80"
          style={{ backgroundImage: `url('https://media.base44.com/images/public/6974e154f708f4918a2b8d02/ef48a5e97_uuidF718ABC3-FB11-4E3A-B13F-479A507CD62Bcode001library1type1mode1loctruecaptrue.jpeg')` }}
        />

        {/* Unblurred square layer (Masked) */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110 opacity-100 transition-opacity duration-300"
          style={{ 
            backgroundImage: `url('https://media.base44.com/images/public/6974e154f708f4918a2b8d02/ef48a5e97_uuidF718ABC3-FB11-4E3A-B13F-479A507CD62Bcode001library1type1mode1loctruecaptrue.jpeg')`,
            clipPath: isMouseIn ? `polygon(
              ${mousePos.x - 180}px ${mousePos.y - 180}px, 
              ${mousePos.x + 180}px ${mousePos.y - 180}px, 
              ${mousePos.x + 180}px ${mousePos.y + 180}px, 
              ${mousePos.x - 180}px ${mousePos.y + 180}px
            )` : 'polygon(0 0, 0 0, 0 0, 0 0)'
          }}
        />

        {/* Square outline tracking cursor */}
        <div 
          className="absolute pointer-events-none border border-white/50 transition-opacity duration-300 z-10"
          style={{
            left: mousePos.x - 180,
            top: mousePos.y - 180,
            width: 360,
            height: 360,
            opacity: isMouseIn ? 1 : 0
          }}
        >
          {/* Center crosshair */}
          <div className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-80">
            <div className="w-[1px] h-full bg-white"></div>
            <div className="h-[1px] w-full bg-white absolute"></div>
          </div>
        </div>

        {/* Content Layer */}
        <div className="relative z-20 flex-1 flex flex-col justify-end pt-32 pointer-events-none">
          
          {/* Bottom text */}
          <div className="w-full flex justify-center pb-0 overflow-hidden translate-y-[20%]">
             <h1 
               className="text-white font-light tracking-tighter drop-shadow-lg" 
               style={{ fontSize: 'clamp(5rem, 18vw, 24rem)', lineHeight: 0.8 }}
             >
               Alfie Martin
             </h1>
          </div>
        </div>
      </section>

      {/* Logo Wall moved right below Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto w-full pt-24 pb-8 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="border-b border-gray-100 pb-16">
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-8 text-center">PREVIOUSLY</p>
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
            transition={{ duration: 0.5 }} className="text-slate-900 mb-12 text-xs tracking-[0.3em]">
            DESIGN PROCESS</motion.p>
          
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
              transition={{ duration: 0.6, delay: i * 0.1 }} className="text-zinc-900 pt-6 border-t border-gray-300">
              

                <span className="text-gray-400 text-xs font-semibold tracking-wider">{item.step}</span>
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
              transition={{ duration: 0.6 }}>

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
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
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
            transition={{ duration: 0.7 }}>

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
          




        </div>
      </motion.footer>
    </div>);

}