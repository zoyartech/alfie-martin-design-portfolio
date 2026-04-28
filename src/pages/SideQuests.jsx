import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function SideQuests() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans selection:bg-pink-100 selection:text-pink-900 pb-0">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        
        .font-serif {
          font-family: "PT Serif", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }
        .font-sans {
          font-family: "DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
      `}</style>

      {/* Hero */}
      <div className="pt-32 pb-16 px-6 lg:px-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6 font-sans uppercase">Exploration</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6 max-w-4xl font-serif text-slate-900">
              Products Ive Built, Brand Visuals, & Animations
            </h1>
            

            
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to={createPageUrl("PolaroidProject")} className="group block">
                <div className="aspect-[4/3] bg-white rounded-xl border border-gray-100 overflow-hidden mb-6 flex items-center justify-center p-8 transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-200">
                    <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/7e3c8706f_ooookaroid.png" alt="Polaroid" className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#E15A85] transition-colors">Polaroid Makes a comeback</h3>
                    <p className="text-slate-600 font-sans">Rebrand and growth strategy</p>
                </div>
            </Link>

            <Link to={createPageUrl("PrincipalFinancial")} className="group block">
                <div className="aspect-[4/3] bg-white rounded-xl border border-gray-100 overflow-hidden mb-6 flex items-center justify-center p-8 transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-200">
                    <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/586e4fb43_Screenshot2026-03-28at13454PM.png" alt="Principal Financial" className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#E15A85] transition-colors">Principal Financial</h3>
                    <p className="text-slate-600 font-sans">Advisory platform for small business owners</p>
                </div>
            </Link>

            <Link to={createPageUrl("RockefellerCapital")} className="group block">
                <div className="aspect-[4/3] bg-white rounded-xl border border-gray-100 overflow-hidden mb-6 flex items-center justify-center p-8 transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-200">
                    <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/5b2be1488_Screenshot2026-03-25at92734PM.png" alt="Rockefeller Capital Management" className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#E15A85] transition-colors">Rockefeller Capital Management</h3>
                    <p className="text-slate-600 font-sans">Improving the User Experience</p>
                </div>
            </Link>

            <Link to={createPageUrl("TCSMarathon")} className="group block">
                <div className="aspect-[4/3] bg-white rounded-xl border border-gray-100 overflow-hidden mb-6 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-200">
                    <img src="https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=1200&q=80" alt="TCS NYC Marathon App" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#E15A85] transition-colors">TCS NYC Marathon App</h3>
                    <p className="text-slate-600 font-sans">Real-time runner tracking experience</p>
                </div>
            </Link>

            <Link to={createPageUrl("ActivationGrammarly")} className="group block">
                <div className="aspect-[4/3] bg-white rounded-xl border border-gray-100 overflow-hidden mb-6 flex items-center justify-center p-8 transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-200">
                    <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/0e719488f_growthlever.png" alt="Activation at Grammarly" className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#E15A85] transition-colors">Activation at Grammarly</h3>
                    <p className="text-slate-600 font-sans">Improve user activation and time-to-value</p>
                </div>
            </Link>

            <Link to={createPageUrl("AdinaProject")} className="group block">
                <div className="aspect-[4/3] bg-white rounded-xl border border-gray-100 overflow-hidden mb-6 flex items-center justify-center p-8 transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-200">
                    <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/acd037aeb_Screenshot2026-03-21at124006PM.png" alt="Adina" className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#E15A85] transition-colors">Adina</h3>
                    <p className="text-slate-600 font-sans">A community-powered mobile safety app.</p>
                </div>
            </Link>
            
            <Link to={createPageUrl("BrandGallery")} className="group block">
                <div className="aspect-[4/3] bg-white rounded-xl border border-gray-100 overflow-hidden mb-6 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-200">
                    <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/93f20ac27_IMG_3318.png" alt="Brand visual identities" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#E15A85] transition-colors">Brand and Visuals</h3>
                    <p className="text-slate-600 font-sans">creating visual identities</p>
                </div>
            </Link>



            <Link to={createPageUrl("ConfidenceLab")} className="group block">
                <div className="aspect-[4/3] bg-white rounded-xl border border-gray-100 overflow-hidden mb-6 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-200">
                    <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/675789d5f_IMG_3600.jpg" alt="Confidence Lab" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#E15A85] transition-colors">Confidence Lab</h3>
                    <p className="text-slate-600 font-sans">Interactive AI transparency tool</p>
                </div>
            </Link>

            <a href="https://creative-lab-copy-7f0d595e.base44.app" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="aspect-[4/3] bg-white rounded-xl border border-gray-100 overflow-hidden mb-6 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-200">
                    <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/eef9125f6_Screenshot2026-04-05at91457AM.png" alt="Alfies Idea Factory" className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#E15A85] transition-colors">Alfies Idea Factory</h3>
                    <p className="text-slate-600 font-sans">A collaborative space for new ideas</p>
                </div>
            </a>

            <Link to={createPageUrl("ConversationCraft")} className="group block">
                <div className="aspect-[4/3] bg-[#0f172a] rounded-xl border border-gray-100 overflow-hidden mb-6 flex flex-col items-center justify-center p-8 transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
                    <div className="relative z-10 w-full space-y-3 opacity-80 group-hover:opacity-100 transition-opacity">
                        <div className="w-3/4 h-6 bg-slate-800 rounded-lg rounded-tl-sm border border-slate-700/50" />
                        <div className="w-1/2 h-6 bg-emerald-900/30 rounded-lg rounded-tr-sm ml-auto border border-emerald-800/30" />
                        <div className="w-full h-10 bg-slate-800 rounded-lg rounded-tl-sm border border-slate-700/50" />
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#E15A85] transition-colors">Conversational Craft</h3>
                    <p className="text-slate-600 font-sans">Designing trust into AI agents</p>
                </div>
            </Link>
        </div>



        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12">
            
            <h2 className="text-slate-900 mb-4 text-4xl font-extrabold md:text-4xl">Motion & Animations</h2>
            <p className="text-slate-600 font-sans max-w-2xl">Exploring UI interactions, micro-interactions, and physics-based animations using Framer Motion.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-12 flex flex-col items-center justify-center min-h-[400px] shadow-sm">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                className="w-32 h-32 bg-gradient-to-tr from-pink-500 to-violet-500 rounded-2xl shadow-lg cursor-pointer" />
              
              <p className="mt-8 text-sm font-sans text-slate-500 text-center">Hover and Tap<br />Spring physics & border-radius morphing</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-12 flex flex-col items-center justify-center min-h-[400px] shadow-sm overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="w-24 h-24 bg-gradient-to-tr from-cyan-500 to-blue-500 shadow-lg" />
              
              <p className="mt-16 text-sm font-sans text-slate-500 text-center">Keyframes<br />Continuous looping animation</p>
            </div>
            
            <div className="bg-white rounded-2xl border border-gray-100 p-12 flex flex-col items-center justify-center min-h-[400px] shadow-sm">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-sans font-medium text-lg tracking-wide shadow-xl shadow-slate-900/20">
                
                Press Me
              </motion.button>
              <p className="mt-8 text-sm font-sans text-slate-500 text-center">Button Interactions<br />Scale and shadow transitions</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-12 flex flex-col items-center justify-center min-h-[400px] shadow-sm relative overflow-hidden">
               <motion.div
                drag
                dragConstraints={{
                  top: -80,
                  left: -80,
                  right: 80,
                  bottom: 80
                }}
                className="w-24 h-24 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-full shadow-lg cursor-grab active:cursor-grabbing z-10" />
              
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-[160px] h-[160px] border-2 border-dashed border-slate-900 rounded-2xl" />
                </div>
              <p className="mt-auto pt-8 text-sm font-sans text-slate-500 text-center">Drag Constraints<br />Physics-based dragging within bounds</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-12 flex flex-col items-center justify-center min-h-[400px] shadow-sm">
              <motion.div
                className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full cursor-pointer shadow-lg flex items-center justify-center overflow-hidden group"
                whileHover={{ width: 240, borderRadius: "24px" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                
                 <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Fluid Size</span>
              </motion.div>
              <p className="mt-12 text-sm font-sans text-slate-500 text-center">Layout Morphing<br />Fluid width and radius transition</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-12 flex flex-col items-center justify-center min-h-[400px] shadow-sm">
              <motion.div
                className="flex gap-3"
                initial="hidden"
                whileHover="visible"
                variants={{
                  hidden: { opacity: 1 },
                  visible: { transition: { staggerChildren: 0.1 } }
                }}>
                
                {[1, 2, 3, 4].map((i) =>
                <motion.div
                  key={i}
                  className="w-12 h-12 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full shadow-md"
                  variants={{
                    hidden: { y: 0, opacity: 0.5 },
                    visible: { y: -20, opacity: 1, transition: { repeat: Infinity, repeatType: "mirror", duration: 0.4 } }
                  }} />

                )}
              </motion.div>
              <p className="mt-16 text-sm font-sans text-slate-500 text-center">Staggered Variants<br />Hover to trigger sequenced children</p>
            </div>
          </div>

          <div className="mt-24 flex justify-center w-full">
            <iframe className="rounded-2xl shadow-sm border border-gray-100 max-w-full" width="560" height="315" src="https://www.youtube.com/embed/mwp39rSvJ8w?si=A_OgApHHkWvKmvt9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      
    </div>);

}