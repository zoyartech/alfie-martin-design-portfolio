import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";
import AISeoDashboard from "@/components/AISeoDashboard";

export default function SAO() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-6 lg:px-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-light tracking-tight mb-6">SAO Dashboard</h1>
          
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed max-w-4xl mb-12">
            I designed the end-to-end experience and retrieval architecture for an AI-powered search agent, from RAG pipeline tuning to the interaction model that made results trustworthy and actionable.
          </p>

          <div className="w-full mb-12 rounded-none overflow-hidden shadow-xl border border-slate-100">
            <img 
              src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d26180e28_painting.png" 
              alt="SAO Hero" 
              className="w-full h-auto object-cover max-h-[500px]" 
            />
          </div>

          <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mb-12">
            "Search agent optimization" (sometimes called Agentic Search Optimization, or grouped with Generative Engine Optimization / Answer Engine Optimization) is the practice of making your content discoverable, citable, and actionable by AI agents, ChatGPT, Perplexity, Claude, Gemini, Google's AI Mode; instead of just ranking blue links in Google. It's a distinct layer on top of classic SEO, not a replacement.
          </p>

          <div className="w-full mb-12 rounded-none overflow-hidden shadow-xl border border-slate-100 bg-white p-4 md:p-8">
            <img 
              src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d911d00aa_Screenshot2026-04-27at83140PM.png" 
              alt="SEO to AEO to ASO: The Three-Layer Model for the AI Search Era" 
              className="w-full h-auto object-contain" 
            />
          </div>

          <div className="w-full rounded-none overflow-hidden border border-slate-200 shadow-xl bg-white mb-8">
            <AISeoDashboard />
          </div>

          <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mb-12">
            The shift matters because the retrieval flow itself is different. When a user queries an AI agent, the agent interprets intent, decomposes the goal into sub-tasks, performs iterative queries across multiple sources, then synthesizes the result. So instead of "rank #1 for keyword X," you're trying to be the source the model picks up, trusts, and cites often without the user ever clicking through. That's the "zero-click" problem people in this space worry about.
          </p>

          <div className="w-full rounded-none overflow-hidden border border-slate-200 shadow-xl bg-white mb-8 flex justify-center p-8">
            <img 
              src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/b52b1c830_Screenshot2026-04-18at35633PM.png" 
              alt="Brand reputation radar chart" 
              className="w-full max-w-2xl h-auto" 
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}