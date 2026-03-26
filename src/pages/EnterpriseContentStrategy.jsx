import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

export default function EnterpriseContentStrategy() {
  const images = [
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
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 pb-32">
      {/* Navigation */}
      <div className="fixed top-24 left-6 z-50">
        <Link to={createPageUrl("Writing")} className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] text-slate-500 hover:text-slate-900 transition-all uppercase font-bold bg-white/80 backdrop-blur-md px-5 py-3 rounded-full shadow-sm hover:shadow-md border border-slate-200">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Writing
        </Link>
      </div>

      <div className="max-w-4xl mx-auto pt-40 px-6">
        <div className="space-y-8 flex flex-col items-center">
          {images.map((img, idx) => (
            <motion.img 
              key={idx}
              src={img} 
              alt={`Slide ${idx + 2}`} 
              className="w-full h-auto shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}