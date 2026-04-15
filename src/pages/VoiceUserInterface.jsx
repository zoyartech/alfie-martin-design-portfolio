import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function VoiceUserInterface() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold tracking-wider rounded-full">UX RESEARCH</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold tracking-wider rounded-full">VOICE UI</span>
            </div>
            <h1 className="text-slate-900 mb-6 text-4xl font-normal tracking-tight md:text-6xl">
              Voice User Interface
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed mb-12">
              Exploring conversational interactions, audio feedback, and empathetic voice AI.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}