import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

export default function Veil() {
  return (
    <div className="min-h-screen bg-[#eafcfa] text-slate-900 pt-32 pb-24 px-6 lg:px-12 font-sans flex flex-col items-center">
      <div className="max-w-5xl mx-auto w-full">
        <Link to={createPageUrl("SideQuests")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Side Quests
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
          <img 
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d6e7f0e5f_iel.png" 
            alt="Veil - Privacy First" 
            className="w-full max-w-3xl h-auto object-cover shadow-xl rounded-none mb-12 border border-slate-200" 
          />
          <h1 className="text-5xl font-light tracking-tight mb-4">Veil</h1>
          <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl text-center mb-12">
            Privacy First.
          </p>

          <div className="w-full w-[1200px] max-w-full h-[80vh] min-h-[800px] border border-slate-200 shadow-xl rounded-none bg-white mb-24">
            <iframe 
              src="https://drill-greet-57858206.figma.site" 
              className="w-full h-full border-none"
              title="Veil Figma Prototype"
            />
          </div>

          <div className="grid grid-cols-1 gap-16 w-full max-w-5xl">
            <div className="bg-white p-8 border border-slate-200 shadow-xl">
              <img 
                src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/bf4f833f8_Screenshot2026-04-18at75014PM.png" 
                alt="Chat View Interface" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            <div className="bg-white p-8 border border-slate-200 shadow-xl">
              <img 
                src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/a5ff0c011_Screenshot2026-04-18at75024PM.png" 
                alt="Contact Verification Flow" 
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white p-8 border border-slate-200 shadow-xl">
              <img 
                src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/f56eb22ca_Screenshot2026-04-18at75033PM.png" 
                alt="Privacy and Security Settings" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}