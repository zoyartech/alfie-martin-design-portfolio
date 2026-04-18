import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";
import AISeoDashboard from "@/components/AISeoDashboard";
import JsonLdGenerator from "@/components/JsonLdGenerator";
import SemanticHealthAnalyzer from "@/components/SemanticHealthAnalyzer";

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

          <div className="w-full mb-16">
            <h2 className="text-3xl font-light tracking-tight mb-6">Semantic Schema Generator</h2>
            <JsonLdGenerator />
          </div>

          <div className="max-w-3xl mb-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Content designers and strategists should focus on writing for extraction, not just engagement. That means structuring content in modular, self-contained chunks where each section answers one question completely, leading with definitions and direct answers rather than building to a conclusion, and thinking in entities (brands, people, products, relationships) rather than keywords.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              AI systems respond better to content that explains concepts clearly, connects related ideas, and follows a logical structure. If you want to appear in the answer, not just under it, your content needs to be reference-worthy, not just keyword-optimized. That means citing sources, including original data, and writing with enough specificity that an agent would trust the content enough to surface it.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              On the technical side, developers should prioritize three layers:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-lg text-slate-700 leading-relaxed">
              <li>
                <strong>First, Schema markup:</strong> Semrush found that the accuracy of information extraction by GPT-4 jumped from 16% to 54% when proper Schema was implemented, with Organization, Article, and FAQPage schemas in JSON-LD format being the highest priority.
              </li>
              <li>
                <strong>Second, llms.txt:</strong> a Markdown file at your site root that gives AI agents a clean, low-token path to your most important content instead of forcing them to parse JavaScript-heavy layouts and cookie banners.
              </li>
              <li>
                <strong>Third, provenance metadata:</strong> timestamps, attributed authors, and version references on every public-facing fact, because AI agents cross-reference sources and content with clear attribution gets treated as more authoritative.
              </li>
            </ol>
          </div>

          <div className="w-full mb-16">
            <SemanticHealthAnalyzer />
          </div>
        </motion.div>
      </div>
    </div>
  );
}