import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function ArtDirection() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 pt-32 pb-24 px-6 lg:px-12 font-sans">
      <div className="w-full max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center mb-12">
          <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-light tracking-tight mb-2">Art Direction</h1>
          <p className="text-slate-500 text-lg mb-6">Click to enlarge</p>
          
          <div className="w-full mt-12 flex justify-center h-[80vh]">
            <iframe 
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "100%", height: "100%" }} 
              src="https://embed.figma.com/proto/vNCIoHjPhuEFvQVgWBJEtJ/donuts?page-id=0%3A1&node-id=40-29&p=f&viewport=1092%2C686%2C0.25&scaling=min-zoom&content-scaling=fixed&embed-host=share" 
              allowFullScreen
              title="Figma Prototype"
              className="rounded-xl shadow-lg bg-[#faf9f6]"
            ></iframe>
          </div>

          <div className="w-full mt-16 flex justify-center">
            <iframe 
              src="https://media.base44.com/files/public/6974e154f708f4918a2b8d02/8787c7343_AlfieMartin-food-designpdfpdf.pdf" 
              className="w-full aspect-[4/3] rounded-xl shadow-lg bg-[#faf9f6]"
              title="Art Direction Design Illustration PDF"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}