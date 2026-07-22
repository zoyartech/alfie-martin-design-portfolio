import React from 'react';
import { motion } from 'framer-motion';

export default function DesignSystemsAIGovernance() {
  return (
    <div className="pt-24 pb-16 px-6 lg:px-12 max-w-5xl mx-auto min-h-screen">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-slate-500 mb-4 text-xs font-bold tracking-[0.3em] uppercase">Case Study</p>
        <h1 className="mb-6 text-slate-900 [font-family:'Playfair_Display',_serif] font-normal text-3xl md:text-3xl">Design Systems for AI Governance</h1>
        <p className="text-xl text-slate-600 mb-12 max-w-3xl leading-relaxed">
          Establishing a structured approach and component library to ensure AI products remain ethical, transparent, and user-friendly.
        </p>

        <div className="w-full aspect-[9/16] md:aspect-video bg-slate-100 rounded-xl mb-12 overflow-hidden border border-slate-200 mx-auto">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "100%", height: "100%" }}
            src="https://embed.figma.com/design/LuiwuEm6copfLQMcSSmayr/EtherOS-Design-System?embed-host=share"
            allowFullScreen
            title="EtherOS Design System">
          </iframe>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16">
          
          <h2 className="text-3xl font-wexley text-slate-900 mb-8">Designing Brand visuals</h2>
          <div className="w-full rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white flex justify-center">
            <img
              src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/ecd4391cf_aetheros-brand-identity.png"
              alt="AetherOS Brand Identity"
              className="max-w-full h-auto object-contain" />
            
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16">
          
          <h2 className="text-3xl font-wexley text-slate-900 mb-8">World Building</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white flex items-center justify-center p-4">
              <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/e3ffa39f5_aalogo11.png" alt="AetherOS Logo 1" className="w-full h-auto object-contain rounded-lg" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white flex items-center justify-center p-4">
              <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/462d6b687_aa111111circular.png" alt="AetherOS Logo Circular" className="w-full h-auto object-contain rounded-lg" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white md:col-span-2 flex items-center justify-center p-4">
              <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/03895dc3a_CIRCLES.png" alt="AetherOS Circles" className="w-full h-auto object-contain rounded-lg" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white flex items-center justify-center p-4">
              <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/16a7ab272_COOOLERS.png" alt="AetherOS Colors" className="w-full h-auto object-contain rounded-lg" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white flex items-center justify-center p-4">
              <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/7c34d84ef_TypeSpecimens.png" alt="AetherOS Type Specimens" className="w-full h-auto object-contain rounded-lg" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>);

}