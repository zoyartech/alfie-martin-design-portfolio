import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, AlertCircle, Volume2, ChevronUp, ChevronDown, Sparkles, Mic, Activity, BrainCircuit, ShieldCheck, UserCog, History } from "lucide-react";
import { createPageUrl } from "@/utils";
import VoiceAnalyticsDashboard from "@/components/VoiceAnalyticsDashboard";
import CommandReferenceLibrary from "@/components/CommandReferenceLibrary";

import VUIPrototype from "@/components/VUIPrototype";

export default function VoiceUserInterface() {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  return (
    <div className="bg-slate-900 text-slate-100 pb-24 font-sans min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Hero Section */}
      <section className="bg-slate-900 pt-32 pb-16 px-6 lg:px-12 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <Link to={createPageUrl("b6")} className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Breakthrough 6 Project
            </Link>
          </div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 bg-slate-800 text-slate-300 border border-slate-700 text-[10px] font-bold uppercase tracking-widest rounded-sm">Med-tech</span>
              <span className="px-2.5 py-1 bg-blue-900/30 text-blue-400 border border-blue-800/50 text-[10px] font-bold uppercase tracking-widest rounded-sm">Voice UI</span>
              <span className="px-2.5 py-1 bg-emerald-900/30 text-emerald-400 border border-emerald-800/50 text-[10px] font-bold uppercase tracking-widest rounded-sm">Clinical Tech</span>
            </div>
            <h1 className="text-white mb-6 text-sm font-normal tracking-tight leading-[1.1] md:text-6xl">Voice User Interface for Impact TMS

            </h1>
            

            
          </motion.div>
        </div>
      </section>

      {/* Prototype Link Image */}
      <section className="bg-slate-800/50 px-6 py-16 lg:px-12 border-b border-slate-800">
        <div className="max-w-5xl mx-auto flex justify-center">
          <a
            href="https://beam-pear-41561282.figma.site"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-90 hover:scale-[1.01] transition-all duration-300 w-full max-w-3xl">
            
            <img
              src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/c97b24ad6_ViewInteractivePrototype.png"
              alt="View Interactive Prototype"
              className="w-full h-auto rounded-2xl shadow-2xl border border-slate-700" />
            
          </a>
        </div>
      </section>

      {/* Executive Summary & The Problem */}
      <section className="py-24 px-6 lg:px-12 bg-white hidden">
        <div className="max-w-5xl mx-auto">
          





























          
        </div>
      </section>

      {/* Interactive Prototype Section */}
      

      {/* Experience the Pipeline */}
      <section className="bg-slate-900 py-16 px-6 lg:px-12 mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Experience the Pipeline</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Try the high-fidelity interactive simulation to watch how speech is processed through ASR, NLU, and TTS in real-time.
          </p>
          <Link 
            to={createPageUrl("VoiceSimulation")} 
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105"
          >
            Launch Voice Simulation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Decision Tree & Architecture Diagrams */}
      <section className="py-24 px-6 lg:px-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 text-center">DECISION TREE & CAPABILITIES</h2>
          <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/98a2cc323_Screenshot2026-04-17at53925PM.png"
            alt="NLU Decision Tree" className="w-full max-w-4xl h-auto rounded-2xl shadow-xl border border-slate-700 bg-white" />
          <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/69bd07372_Screenshot2026-04-17at55159PM.png"
            alt="Capabilities and Confirmation Tiers" className="w-full max-w-4xl h-auto rounded-2xl shadow-xl border border-slate-700 bg-white" />
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="bg-slate-900 px-6 py-24 lg:px-12 border-y border-slate-800">
        <div className="max-w-5xl mx-auto">
          <VoiceAnalyticsDashboard />
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-24 px-6 lg:px-12 bg-slate-900 border-b border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Command Architecture</h2>
          <p className="text-lg text-slate-400 font-light mb-8">
            The Impact TMS Voice UI is powered by a robust library of clinical commands, carefully categorized by risk and required confirmation level.
          </p>
          <button
            onClick={() => setIsLibraryOpen(true)}
            className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-400 text-black rounded-full font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1">
            
            <Mic className="w-5 h-5 mr-2" />
            Open Command Reference Library
          </button>
        </div>
      </section>

      <CommandReferenceLibrary isOpen={isLibraryOpen} onClose={() => setIsLibraryOpen(false)} />

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-slate-800 bg-slate-900 mt-12">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm text-slate-500">
          <p>© 2026 Alfie Martin. Impact TMS PRD.</p>
          <Link to={createPageUrl("Home")} className="hover:text-slate-300 transition-colors">Return to Home</Link>
        </div>
      </footer>
    </div>);

}