import React from 'react';
import { motion } from 'framer-motion';

export default function AIDrivenEnterpriseCRM() {
  return (
    <div className="pt-24 pb-16 px-6 lg:px-12 max-w-5xl mx-auto min-h-screen">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-slate-500 mb-4 text-xs font-bold tracking-[0.3em] uppercase">Case Study</p>
        <h1 className="text-4xl md:text-6xl font-light mb-6 font-wexley text-slate-900">AI-Driven Enterprise CRM</h1>
        <p className="text-xl text-slate-600 mb-12 max-w-3xl leading-relaxed">
          Designing an intelligent customer relationship management system that leverages machine learning to predict user needs and automate routine tasks.
        </p>

        <div className="w-full aspect-[9/16] md:aspect-video bg-slate-100 rounded-xl mb-12 overflow-hidden border border-slate-200 mx-auto">
          <iframe
            style={{ width: "100%", height: "100%" }}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fmake%2FrosuOkYKAQY1HmMI5jQV2S%2Fsalesai-high-fidelity--Copy-%3Ffullscreen%3D1%26t%3DlLReT3JopPzoLF97-1%26code-node-id%3D0-9"
            allowFullScreen
            title="Figma Embed"
          ></iframe>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 mb-24 border-y border-slate-200 py-12"
      >
        <div className="col-span-1">
          <h3 className="font-bold text-sm tracking-wider uppercase text-slate-400 mb-4">Role</h3>
          <p className="text-slate-800">Lead Product Designer</p>
        </div>
        <div className="col-span-1">
          <h3 className="font-bold text-sm tracking-wider uppercase text-slate-400 mb-4">Timeline</h3>
          <p className="text-slate-800">2026</p>
        </div>
        <div className="col-span-1">
          <h3 className="font-bold text-sm tracking-wider uppercase text-slate-400 mb-4">Focus</h3>
          <p className="text-slate-800">UX/UI Design, AI Integration, Systems Thinking</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }}
        className="prose prose-slate max-w-none"
      >
        <div className="w-full aspect-[9/16] md:aspect-video bg-slate-100 rounded-xl mb-12 overflow-hidden border border-slate-200 mx-auto">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "100%", height: "100%" }}
            src="https://embed.figma.com/design/IJSWYyOj2a9BGUxVApooaO/DealDesk-%E2%80%94coponents?node-id=5003-2&embed-host=share"
            allowFullScreen
            title="DealDesk Components"
          ></iframe>
        </div>

        <h2 className="text-3xl font-wexley text-slate-900 mb-6">The Challenge</h2>
        <p className="text-slate-600 mb-12 text-lg leading-relaxed">
          Enterprise sales teams were spending hours manually logging data and trying to prioritize leads. The existing CRM was clunky, overwhelming, and lacked predictive capabilities. The goal was to reduce friction and introduce AI-driven automation without losing human oversight.
        </p>

        <h2 className="text-3xl font-wexley text-slate-900 mb-6">The Solution</h2>
        <p className="text-slate-600 mb-12 text-lg leading-relaxed">
          We redesigned the core CRM experience from the ground up, integrating AI agents that automatically summarize meeting notes, score leads based on historical conversion data, and suggest the next best actions for sales representatives. This streamlined the workflow and allowed teams to focus on relationship building rather than data entry.
        </p>
      </motion.div>
    </div>
  );
}