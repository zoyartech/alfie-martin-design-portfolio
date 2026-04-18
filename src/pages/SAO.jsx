import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function SAO() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-6 lg:px-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-light tracking-tight mb-12">SAO Dashboard</h1>
          
          <div className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
            <iframe 
              src="https://claude.site/public/artifacts/130bb204-c81d-48b3-a22d-d6406f24ff0a/embed" 
              title="ai-seo-dashboard.jsx" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
              allow="clipboard-write; fullscreen" 
              allowFullScreen>
            </iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}