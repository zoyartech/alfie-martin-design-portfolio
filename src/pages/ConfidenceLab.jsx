import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw, Info, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function ConfidenceLab() {
  const [query, setQuery] = useState("What's the maximum contribution limit for a Roth IRA in 2025?");
  
  const [answers, setAnswers] = useState([
    {
      id: 1,
      text: "The maximum contribution limit for a Roth IRA in 2025 is $7,000 for individuals under 50, and $8,000 for individuals 50 and older (with the $1,000 catch-up provision).",
      confidence: 94,
      source: "IRS.gov",
      sourceUrl: "https://www.irs.gov",
      sourceTier: "Tier 1 (Official)"
    },
    {
      id: 2,
      text: "The 2025 Roth IRA contribution limit is $7,000, though eligibility may phase out for single filers earning above $150,000 (MAGI).",
      confidence: 72,
      source: "NerdWallet",
      sourceUrl: "https://www.nerdwallet.com",
      sourceTier: "Tier 2 (Publication)"
    },
    {
      id: 3,
      text: "The contribution limit may remain at $6,500 for 2025, consistent with the 2023 limit, pending further IRS guidance.",
      confidence: 41,
      source: "Investopedia (Archive)",
      sourceUrl: "https://www.investopedia.com",
      sourceTier: "Tier 3 (Unofficial)"
    }
  ]);

  const [metadata, setMetadata] = useState({
    ambiguity: "Low",
    sentiment: "Neutral",
    intent: "Factual Query"
  });

  // Sort answers by confidence for the display
  const sortedAnswers = [...answers].sort((a, b) => b.confidence - a.confidence);

  const handleAnswerChange = (id, field, value) => {
    setAnswers(answers.map(a => a.id === id ? { ...a, [field]: value } : a));
  };

  const getConfidenceStyle = (score) => {
    if (score >= 90) return { bg: "bg-[#c2e7ff]", border: "border-blue-200", text: "text-blue-900", bar: "bg-blue-600" };
    if (score >= 70) return { bg: "bg-[#b8d4ff]", border: "border-indigo-200", text: "text-indigo-900", bar: "bg-indigo-500" };
    if (score >= 50) return { bg: "bg-[#e0e7ff]", border: "border-slate-200", text: "text-slate-800", bar: "bg-slate-500" };
    return { bg: "bg-[#fcbdff]", border: "border-pink-200", text: "text-pink-900", bar: "bg-pink-500" };
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        .font-serif { font-family: "PT Serif", serif; }
        .font-sans { font-family: "DM Sans", sans-serif; }
      `}</style>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to={createPageUrl("DesignStrategyAI")} className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Case Study
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded uppercase tracking-wider">Prototype</span>
            <h1 className="text-lg font-bold text-slate-900">Confidence LAB</h1>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-2">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">CONFIDENCE LAB</h1>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-[1fr_1.2fr] gap-8">
        
        {/* Controls Panel */}
        <div className="space-y-8">
          
          {/* Query Input */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Input Metadata</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">User Query</label>
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-800"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Ambiguity</label>
                  <select 
                    value={metadata.ambiguity}
                    onChange={(e) => setMetadata({...metadata, ambiguity: e.target.value})}
                    className="w-full p-2 text-sm border border-slate-300 rounded focus:ring-blue-500"
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Sentiment</label>
                  <select 
                    value={metadata.sentiment}
                    onChange={(e) => setMetadata({...metadata, sentiment: e.target.value})}
                    className="w-full p-2 text-sm border border-slate-300 rounded focus:ring-blue-500"
                  >
                    <option>Neutral</option>
                    <option>Frustrated</option>
                    <option>Confused</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Intent Class</label>
                  <select 
                    value={metadata.intent}
                    onChange={(e) => setMetadata({...metadata, intent: e.target.value})}
                    className="w-full p-2 text-sm border border-slate-300 rounded focus:ring-blue-500"
                  >
                    <option>Factual Query</option>
                    <option>Troubleshooting</option>
                    <option>Opinion/Subjective</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Answer Inputs */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Candidate Answers</h2>
              <button 
                onClick={() => setAnswers(answers.map(a => ({...a, confidence: Math.floor(Math.random() * 100)})))}
                className="text-xs flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
              >
                <RefreshCw className="w-3 h-3" /> Randomize Scores
              </button>
            </div>

            <div className="space-y-6">
              {answers.map((answer, index) => (
                <div key={answer.id} className="p-4 bg-slate-50 rounded border border-slate-200 relative">
                  <span className="absolute top-2 right-2 text-xs font-bold text-slate-300">#{index + 1}</span>
                  
                  <div className="mb-3">
                    <label className="flex items-center justify-between text-xs font-medium text-slate-600 mb-1">
                      Confidence Score
                      <span className={`font-bold ${getConfidenceStyle(answer.confidence).text.replace('900', '600')}`}>{answer.confidence}%</span>
                    </label>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={answer.confidence} 
                      onChange={(e) => handleAnswerChange(answer.id, 'confidence', parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="block text-xs font-medium text-slate-600 mb-1">Answer Text</label>
                    <textarea 
                      value={answer.text}
                      onChange={(e) => handleAnswerChange(answer.id, 'text', e.target.value)}
                      rows={3}
                      className="w-full p-2 text-sm border border-slate-300 rounded focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Source</label>
                      <input 
                        type="text" 
                        value={answer.source}
                        onChange={(e) => handleAnswerChange(answer.id, 'source', e.target.value)}
                        className="w-full p-1.5 text-xs border border-slate-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Source Tier</label>
                      <select 
                        value={answer.sourceTier}
                        onChange={(e) => handleAnswerChange(answer.id, 'sourceTier', e.target.value)}
                        className="w-full p-1.5 text-xs border border-slate-300 rounded"
                      >
                        <option>Tier 1 (Official)</option>
                        <option>Tier 2 (Publication)</option>
                        <option>Tier 3 (Unofficial)</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Preview Panel */}
        <div className="sticky top-24 self-start">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden min-h-[600px] flex flex-col">
            <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-500">SYSTEM PREVIEW</h2>
              <div className="flex gap-2 text-xs">
                 <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">
                    Ambiguity: <span className={metadata.ambiguity === 'High' ? 'text-red-600 font-bold' : 'font-medium'}>{metadata.ambiguity}</span>
                 </span>
              </div>
            </div>

            <div className="flex-1 p-6 md:p-8 bg-white flex flex-col">
              {/* Chat Bubble - User */}
              <div className="self-end bg-slate-100 text-slate-800 px-5 py-3 rounded-2xl rounded-tr-sm max-w-[80%] mb-8 text-lg font-sans shadow-sm">
                {query}
              </div>

              {/* System Response */}
              <div className="w-full space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600"></div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI System Response</span>
                </div>

                <AnimatePresence>
                  {sortedAnswers.map((answer, index) => {
                    const styles = getConfidenceStyle(answer.confidence);
                    return (
                      <motion.div 
                        layout
                        key={answer.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className={`${styles.bg} rounded-lg p-5 md:p-6 border ${styles.border} relative overflow-hidden group`}
                      >
                        {/* Rank Badge */}
                        <div className="absolute top-0 left-0 bg-white/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-r border-slate-100/50 rounded-br-lg">
                          Option {index + 1}
                        </div>

                        {/* Header */}
                        <div className="flex items-center justify-between mb-3 mt-4">
                          <div className="flex items-center gap-3">
                            <div className="h-2 w-24 bg-white/50 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${styles.bar}`} 
                                style={{ width: `${answer.confidence}%` }}
                              />
                            </div>
                            <span className={`text-sm font-bold ${styles.text}`}>
                              {answer.confidence}% Confidence
                            </span>
                          </div>
                          {answer.confidence > 90 && (
                            <CheckCircle className="w-5 h-5 text-blue-600 opacity-50" />
                          )}
                          {answer.confidence < 50 && (
                            <AlertTriangle className="w-5 h-5 text-amber-600 opacity-50" />
                          )}
                        </div>

                        {/* Text */}
                        <p className={`font-serif text-lg md:text-xl leading-relaxed text-slate-800 mb-4`}>
                          {answer.text}
                        </p>

                        {/* Source */}
                        <div className="flex items-center gap-2 pt-4 border-t border-slate-900/5">
                           <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Source:</span>
                           <a href={answer.sourceUrl} target="_blank" rel="noreferrer" className="text-sm text-slate-700 hover:underline flex items-center gap-1 font-medium">
                             {answer.source} <ExternalLink className="w-3 h-3 opacity-50" />
                           </a>
                           <span className="ml-auto text-[10px] bg-white/60 px-2 py-0.5 rounded text-slate-500 font-mono border border-slate-900/5">
                             {answer.sourceTier}
                           </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {metadata.ambiguity === "High" && (
                   <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     className="mt-4 p-4 border border-amber-200 bg-amber-50 rounded-lg flex items-start gap-3"
                   >
                     <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                     <div>
                       <h4 className="text-sm font-bold text-amber-800">High Ambiguity Detected</h4>
                       <p className="text-xs text-amber-700 mt-1">The system has flagged this query as ambiguous. In a production environment, a clarifying question would be triggered instead of or alongside these results.</p>
                     </div>
                   </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}