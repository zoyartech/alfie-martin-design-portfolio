import React from 'react';
import { motion } from 'framer-motion';

export default function DesignSystemsAIGovernance() {
  return (
    <div className="pt-24 pb-16 px-6 lg:px-12 max-w-5xl mx-auto min-h-screen">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-slate-500 mb-4 text-xs font-bold tracking-[0.3em] uppercase">Case Study</p>
        <h1 className="text-4xl md:text-6xl font-light mb-6 font-wexley text-slate-900">Design Systems for AI Governance</h1>
        <p className="text-xl text-slate-600 mb-12 max-w-3xl leading-relaxed">
          Establishing a structured approach and component library to ensure AI products remain ethical, transparent, and user-friendly.
        </p>

        <div className="w-full aspect-[9/16] md:aspect-video bg-slate-100 rounded-xl mb-12 overflow-hidden border border-slate-200 mx-auto">
          <iframe
            style={{ width: "100%", height: "100%", border: "none" }}
            src="https://embed.figma.com/design/oCrfClV8tlTJWCiyhy3hNd/AetherOS-Design-System?embed-host=share"
            allowFullScreen
            title="AetherOS Design System"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}