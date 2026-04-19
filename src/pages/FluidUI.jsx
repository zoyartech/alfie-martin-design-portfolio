import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function FluidUI() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 pt-32 pb-24 px-6 lg:px-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-light tracking-tight mb-6 font-serif text-slate-900">Fluid UI</h1>
          
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed max-w-4xl mb-12">
            Exploring fluid interfaces, micro-interactions, and physics-based animations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                className="w-32 h-32 bg-gradient-to-tr from-pink-500 to-violet-500 rounded-2xl shadow-lg cursor-pointer" />
              
              <p className="mt-8 text-sm font-sans text-slate-500 text-center">Hover and Tap<br />Spring physics & border-radius morphing</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}