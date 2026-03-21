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
              Side Quests
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl font-sans">More coming soon!

            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to={createPageUrl("AdinaProject")} className="group block">
                <div className="aspect-[4/3] bg-white rounded-xl border border-gray-100 overflow-hidden mb-6 flex items-center justify-center p-8 transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-200">
                    <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/acd037aeb_Screenshot2026-03-21at124006PM.png" alt="Adina" className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#E15A85] transition-colors">Adina</h3>
                    <p className="text-slate-600 font-sans">A community-powered mobile safety app.</p>
                </div>
            </Link>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-gray-200 bg-white mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-sans">
          <p className="text-sm text-gray-500">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>);

}