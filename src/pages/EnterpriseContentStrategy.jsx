import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

export default function EnterpriseContentStrategy() {
  const images = [
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/f429527c4_1.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/4bf49f564_2.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/37954a061_3.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/7e3929133_4.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/e2d6c76e5_5.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/8a4d7ef92_6.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/6e51c878f_7.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/faed5f556_8.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/21f9ed29e_9.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/e4bfb00ca_10.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/9eebc1bc8_11.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/6bff0d2ef_12.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/49e7372f8_13.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/7ee92b982_14.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/a6b0d3797_15.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/82b77be49_16.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/0eb1f94f0_17.png",
    "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/0140ed18e_18.png"
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-24">
      {/* Navigation Header */}
      <div className="pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto mb-6 md:mb-10">
        <Link to={createPageUrl("Writing")} className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.2em] text-slate-500 hover:text-blue-600 transition-colors uppercase font-bold bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm border border-slate-200">
          <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" /> Back to Writing
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 md:p-10 lg:p-14 rounded-2xl md:rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl">
            <p className="text-blue-600 mb-4 text-xs font-bold uppercase tracking-[0.25em] flex items-center gap-2">
              CONTENT STRATEGY
            </p>
            <h1 className="text-slate-900 mb-6 text-3xl font-normal tracking-tight leading-[1.15] md:text-5xl lg:text-6xl md:mb-8">
              Enterprise Content Strategy
            </h1>
            <p className="text-slate-600 text-base font-normal leading-relaxed md:text-xl">
              A UX content strategy case study for the Enterprise Learning Management System at Tata Consultancy Services.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Presentation Slides Viewer */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:gap-24">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-white/50 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-200/60 ring-1 ring-black/5">
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] md:text-xs font-mono text-slate-500 font-medium shadow-sm border border-slate-200">
                  {String(idx + 1).padStart(2, '0')} / {images.length}
                </div>
                <img 
                  src={img} 
                  alt={`Enterprise Content Strategy Slide ${idx + 1}`} 
                  className="w-full h-auto object-cover"
                  loading={idx < 2 ? "eager" : "lazy"}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Footer Meta */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-24 md:mt-32 pt-8 md:pt-12 border-t border-slate-200">
        <div className="bg-white p-8 md:p-12 rounded-2xl md:rounded-3xl border border-slate-200 text-center shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Thanks for reading</h3>
          <p className="text-slate-600 max-w-xl mx-auto mb-8">
            If you're interested in discussing content strategy, UX design, or how we can improve your enterprise systems, I'd love to connect.
          </p>
          <Link to={createPageUrl("Contact")} className="inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}