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

        






        
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 mb-24 border-y border-slate-200 py-12">
        
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
          <p className="text-slate-800"> AI Conversational design Systems </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="prose prose-slate max-w-none">
        
        <div className="w-full aspect-[9/16] md:aspect-video bg-slate-100 rounded-xl mb-12 overflow-hidden border border-slate-200 mx-auto">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "100%", height: "100%" }}
            src="https://embed.figma.com/design/IJSWYyOj2a9BGUxVApooaO/DealDesk-%E2%80%94coponents?node-id=5003-2&embed-host=share"
            allowFullScreen
            title="DealDesk Components">
          </iframe>
        </div>

        <h2 className="text-3xl font-wexley text-slate-900 mb-6">The Challenge</h2>
        <p className="text-slate-600 mb-12 text-lg leading-relaxed">
          Enterprise sales teams were spending hours manually logging data and trying to prioritize leads. The existing CRM was clunky, overwhelming, and lacked predictive capabilities. The goal was to reduce friction and introduce AI-driven automation without losing human oversight.
        </p>

        <h2 className="text-3xl font-wexley text-slate-900 mb-6">The Solution</h2>
        <p className="text-slate-600 mb-12 text-lg leading-relaxed">
          We redesigned the core CRM experience from the ground up, integrating AI agents that automatically summarize meeting notes, score leads based on historical conversion data, and suggest the next best actions for sales representatives. This streamlined the workflow and allowed teams to focus on relationship building rather than data entry.
        </p>

        <h3 className="text-2xl font-wexley text-slate-900 mb-4">Conversational Design working Notes</h3>
        <p className="text-slate-600 mb-12 text-lg italic leading-relaxed">
          From governance clarification through fallback routing, evaluation, and calibration.
        </p>

        <p className="text-slate-600 mb-6 text-lg leading-relaxed">
          <strong>1. What the underlying question was</strong>
        </p>
        <p className="text-slate-600 mb-12 text-lg leading-relaxed">
          The work started from a governance question: who knows how the AI tools we use are trained, and who controls the guardrails? The confusion turned out to come from collapsing two genuinely different questions into one.
        </p>

        <h3 className="text-2xl font-wexley text-slate-900 mb-6">The other questions that needed answers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
            <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/b22db7e2e_q1.png" alt="Question 1: Who controls guardrails" className="w-full h-auto object-contain" />
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
            <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/7f9fbae0c_q2.png" alt="Question 2: Who trained the underlying model" className="w-full h-auto object-contain" />
          </div>
        </div>
      </motion.div>
    </div>);

}