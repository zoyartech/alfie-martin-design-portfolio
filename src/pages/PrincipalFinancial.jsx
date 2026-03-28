import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft } from 'lucide-react';

export default function PrincipalFinancial() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-slate-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <Link to={createPageUrl("CaseStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors uppercase font-bold mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4 uppercase">CASE STUDY</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-slate-900">
              Designing Business Tools for Principal Financial
            </h1>
            <p className="text-gray-500 max-w-3xl text-lg leading-relaxed">
              Streamlining internal processes and enhancing productivity through intuitive business tool design.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
            <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">ROLE</p><p className="text-gray-700">Product Designer</p></div>
            <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">FOCUS</p><p className="text-gray-700">UX/UI, Enterprise Tools</p></div>
            <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">CLIENT</p><p className="text-gray-700">Principal Financial</p></div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">The Challenge</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Principal Financial needed a comprehensive overhaul of their internal business tools. Employees were struggling with fragmented workflows, legacy interfaces, and inefficient data entry processes that slowed down their ability to serve clients effectively.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">The Solution</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              We developed a unified suite of enterprise tools with a modernized design system, focusing on high-density data visualization, streamlined navigation, and task-oriented workflows. This reduced cognitive load and significantly improved operational efficiency.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Impact</h2>
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-4xl font-light text-blue-600 mb-2">40%</div>
                <div className="text-sm font-semibold text-slate-700">Reduction in task completion time</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-4xl font-light text-blue-600 mb-2">85%</div>
                <div className="text-sm font-semibold text-slate-700">Positive user feedback score</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}