import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";
import AISeoDashboard from "@/components/AISeoDashboard";
import JsonLdGenerator from "@/components/JsonLdGenerator";

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

          <div className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white mb-16">
            <AISeoDashboard />
          </div>

          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl font-bold mb-4">SEO vs SAO: What's the difference?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The core difference is who you're optimizing for.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>SEO</strong> is about making content rank on search engines like Google. It's built around keywords, backlinks, page speed, mobile usability, and technical health signals. The audience is a crawler that indexes pages and ranks them in a list of blue links. Success means appearing on page one.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>SAO</strong> is about making content understandable and citable by AI agents. Instead of focusing on keywords and backlinks, SAO emphasizes semantic context, natural language patterns, structured data, and direct AI consumption so that AI-powered search systems can accurately interpret and surface your content in synthesized answers.
            </p>
          </div>

          <div className="w-full mb-8">
            <h2 className="text-3xl font-light tracking-tight mb-6">Semantic Schema Generator</h2>
            <JsonLdGenerator />
          </div>
        </motion.div>
      </div>
    </div>
  );
}