import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";
import AISeoDashboard from "@/components/AISeoDashboard";

export default function SAO() {
  return (
    <div className="bg-sky-900 text-slate-900 pt-32 pb-24 px-6 font-sans min-h-screen lg:px-12">
      <div className="max-w-5xl mx-auto">
        <Link to={createPageUrl("Home")} className="text-slate-100 mb-12 text-sm font-medium inline-flex items-center hover:text-slate-900 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-slate-50 mb-6 text-5xl font-light tracking-tight">SAO Dashboard</h1>
          
          <p className="text-slate-100 mb-12 text-base leading-relaxed md:text-3xl max-w-4xl">I designed the end-to-end experience and retrieval architecture for an AI-powered search agent, from RAG pipeline tuning to the interaction model that made results trustworthy and actionable.

          </p>

          <div className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white mb-8">
            <AISeoDashboard />
          </div>
        </motion.div>
      </div>
    </div>);

}