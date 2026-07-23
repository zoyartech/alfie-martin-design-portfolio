import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function ThreeTests() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24 rounded-xl overflow-hidden border border-slate-200"
    >
      {/* Header */}
      <div className="bg-[#0a256a] px-8 py-12 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-wexley text-white mb-2">The three tests</h2>
          <p className="text-white/80 text-lg">If you remember nothing else, run every line through these:</p>
        </div>
        <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
          <MessageCircle className="w-8 h-8 text-white/70" />
        </div>
      </div>

      {/* Middle row */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#e0e0e0] px-8 py-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. The out-loud test.</h3>
              <p className="text-slate-900 mb-2 leading-relaxed">Would a great human salesperson say this sentence out loud, in front of a client?</p>
              <p className="text-slate-700 leading-relaxed">If it only makes sense as something software says, cut it.</p>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/40 backdrop-blur-md border border-white/40">
              <MessageCircle className="w-6 h-6 text-slate-600" />
            </div>
          </div>
        </div>
        <div className="bg-white px-8 py-10">
          <h3 className="text-xl font-bold text-slate-900 mb-3">2. The outsider test.</h3>
          <p className="text-slate-900 mb-2 leading-relaxed">Would someone with zero technical background and zero internal context understand every word?</p>
          <p className="text-slate-700 leading-relaxed">If a term needs the company to explain it, it does not belong in front of a customer.</p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#0a256a] px-8 py-10">
          <h3 className="text-xl font-bold text-white mb-3">Person Or Machine Test</h3>
          <p className="text-white/90 mb-2 leading-relaxed">Does this sound like a person or a system?</p>
          <p className="text-white/80 leading-relaxed">"That has been processed" is a system.</p>
          <p className="text-white/80 leading-relaxed">"Got it, you're all set" is a person.</p>
        </div>
        <div className="bg-[#e0e0e0] px-8 py-10 flex items-center justify-center gap-3">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0a256a] border border-white/20">
            <MessageCircle className="w-7 h-7 text-white/70" />
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-200/60 backdrop-blur-md border border-white/40">
            <MessageCircle className="w-6 h-6 text-purple-400" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-blue-200/60 backdrop-blur-md border border-white/40">
            <MessageCircle className="w-5 h-5 text-blue-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}