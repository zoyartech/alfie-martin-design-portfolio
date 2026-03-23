import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw, AlertTriangle, CheckCircle, ExternalLink, Columns, Maximize, Copy } from "lucide-react";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";

const INITIAL_STATE = {
  query: "What's the maximum contribution limit for a Roth IRA in 2025?",
  answers: [
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
  ],
  metadata: {
    ambiguity: "Low",
    sentiment: "Neutral",
    intent: "Factual Query"
  }
};

export default function ConfidenceLab() {
  const [compareMode, setCompareMode] = useState(false);
  const [activeSet, setActiveSet] = useState('A'); // 'A' or 'B'
  
  const [dataA, setDataA] = useState(INITIAL_STATE);
  const [dataB, setDataB] = useState({
    ...INITIAL_STATE,
    answers: INITIAL_STATE.answers.map(a => ({ ...a, confidence: Math.max(10, a.confidence - 20) })), // Start with slightly different data for B
    metadata: { ...INITIAL_STATE.metadata, ambiguity: "Medium" }
  });

  const currentData = activeSet === 'A' ? dataA : dataB;
  const setCurrentData = activeSet === 'A' ? setDataA : setDataB;

  const handleQueryChange = (val) => {
    setCurrentData({ ...currentData, query: val });
  };

  const handleMetadataChange = (field, val) => {
    setCurrentData({
      ...currentData,
      metadata: { ...currentData.metadata, [field]: val }
    });
  };

  const handleAnswerChange = (id, field, value) => {
    setCurrentData({
      ...currentData,
      answers: currentData.answers.map(a => a.id === id ? { ...a, [field]: value } : a)
    });
  };

  const randomizeScores = () => {
    setCurrentData({
      ...currentData,
      answers: currentData.answers.map(a => ({ ...a, confidence: Math.floor(Math.random() * 100) }))
    });
  };

  const copyAToB = () => {
    setDataB(JSON.parse(JSON.stringify(dataA)));
  };

  const getConfidenceStyle = (score) => {
    if (score >= 90) return { bg: "bg-[#c2e7ff]", border: "border-blue-200", text: "text-blue-900", bar: "bg-blue-600" };
    if (score >= 70) return { bg: "bg-[#b8d4ff]", border: "border-indigo-200", text: "text-indigo-900", bar: "bg-indigo-500" };
    if (score >= 50) return { bg: "bg-[#e0e7ff]", border: "border-slate-200", text: "text-slate-800", bar: "bg-slate-500" };
    return { bg: "bg-[#fcbdff]", border: "border-pink-200", text: "text-pink-900", bar: "bg-pink-500" };
  };

  const PreviewCard = ({ data, label, showLabel }) => {
    const sortedAnswers = [...data.answers].sort((a, b) => b.confidence - a.confidence);
    
    return (
      <div className="flex flex-col h-full">
        {showLabel && (
          <div className="bg-slate-50 border-b border-slate-200 p-3 flex items-center justify-between">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label} PREVIEW</h2>
            <div className="flex gap-2">
               <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[10px] text-slate-600">
                  Ambiguity: <span className={data.metadata.ambiguity === 'High' ? 'text-red-600 font-bold' : 'font-medium'}>{data.metadata.ambiguity}</span>
               </span>
            </div>
          </div>
        )}

        <div className="flex-1 p-6 bg-white flex flex-col overflow-y-auto max-h-[800px]">
          {/* Chat Bubble - User */}
          <div className="self-end bg-slate-100 text-slate-800 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[90%] mb-6 text-base font-sans shadow-sm">
            {data.query}
          </div>

          {/* System Response */}
          <div className="w-full space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600"></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AI System Response</span>
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
                    className={`${styles.bg} rounded-lg p-4 border ${styles.border} relative overflow-hidden group`}
                  >
                    {/* Rank Badge */}
                    <div className="absolute top-0 left-0 bg-white/50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-slate-500 border-b border-r border-slate-100/50 rounded-br-lg">
                      Option {index + 1}
                    </div>

                    {/* Header */}
                    <div className="flex items-center justify-between mb-2 mt-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 bg-white/50 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${styles.bar}`} 
                            style={{ width: `${answer.confidence}%` }}
                          />
                        </div>
                        <span className={`text-xs font-bold ${styles.text}`}>
                          {answer.confidence}% Confidence
                        </span>
                      </div>
                      {answer.confidence > 90 && <CheckCircle className="w-4 h-4 text-blue-600 opacity-50" />}
                      {answer.confidence < 50 && <AlertTriangle className="w-4 h-4 text-amber-600 opacity-50" />}
                    </div>

                    {/* Text */}
                    <p className={`font-serif text-sm md:text-base leading-relaxed text-slate-800 mb-3`}>
                      {answer.text}
                    </p>

                    {/* Source */}
                    <div className="flex items-center gap-2 pt-3 border-t border-slate-900/5">
                       <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Source:</span>
                       <div className="text-xs text-slate-700 font-medium truncate flex-1">
                         {answer.source}
                       </div>
                       <span className="text-[9px] bg-white/60 px-1.5 py-0.5 rounded text-slate-500 font-mono border border-slate-900/5 whitespace-nowrap">
                         {answer.sourceTier}
                       </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {data.metadata.ambiguity === "High" && (
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="mt-4 p-3 border border-amber-200 bg-amber-50 rounded-lg flex items-start gap-3"
               >
                 <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                 <div>
                   <h4 className="text-xs font-bold text-amber-800">High Ambiguity Detected</h4>
                   <p className="text-[10px] text-amber-700 mt-0.5">Query flagged as ambiguous. Clarifying question triggered.</p>
                 </div>
               </motion.div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        .font-serif { font-family: "PT Serif", serif; }
        .font-sans { font-family: "DM Sans", sans-serif; }
      `}</style>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link to={createPageUrl("DesignStrategyAI")} className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Case Study
          </Link>
          
          <div className="flex items-center gap-4">
             {compareMode && (
               <button 
                 onClick={copyAToB}
                 className="text-xs flex items-center gap-1.5 text-slate-500 hover:text-blue-600 font-medium px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors"
                 title="Copy Scenario A settings to Scenario B"
               >
                 <Copy className="w-3.5 h-3.5" /> Copy A to B
               </button>
             )}
             
             <button 
               onClick={() => setCompareMode(!compareMode)}
               className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${compareMode ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
             >
               {compareMode ? <Columns className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
               {compareMode ? 'Compare Mode Active' : 'Single View'}
             </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-6 py-8 grid lg:grid-cols-[400px_1fr] gap-8">
        
        {/* Controls Panel */}
        <div className="space-y-6">
          
          {/* Scenario Tabs (Compare Mode Only) */}
          {compareMode && (
            <div className="flex p-1 bg-slate-200 rounded-lg">
              <button 
                onClick={() => setActiveSet('A')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${activeSet === 'A' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Scenario A
              </button>
              <button 
                onClick={() => setActiveSet('B')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${activeSet === 'B' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Scenario B
              </button>
            </div>
          )}

          {/* Query Input */}
          <div className={`bg-white p-5 rounded-lg shadow-sm border ${activeSet === 'A' ? 'border-slate-200' : 'border-indigo-100'}`}>
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Input Metadata ({activeSet})</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">User Query</label>
                <input 
                  type="text" 
                  value={currentData.query}
                  onChange={(e) => handleQueryChange(e.target.value)}
                  className="w-full p-2.5 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-800"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase">Ambiguity</label>
                  <select 
                    value={currentData.metadata.ambiguity}
                    onChange={(e) => handleMetadataChange('ambiguity', e.target.value)}
                    className="w-full p-2 text-sm border border-slate-300 rounded focus:ring-blue-500 bg-slate-50"
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase">Sentiment</label>
                  <select 
                    value={currentData.metadata.sentiment}
                    onChange={(e) => handleMetadataChange('sentiment', e.target.value)}
                    className="w-full p-2 text-sm border border-slate-300 rounded focus:ring-blue-500 bg-slate-50"
                  >
                    <option>Neutral</option>
                    <option>Frustrated</option>
                    <option>Confused</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Answer Inputs */}
          <div className={`bg-white p-5 rounded-lg shadow-sm border ${activeSet === 'A' ? 'border-slate-200' : 'border-indigo-100'}`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Answers ({activeSet})</h2>
              <button 
                onClick={randomizeScores}
                className="text-xs flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium bg-blue-50 px-2 py-1 rounded hover:bg-blue-100 transition-colors"
              >
                <RefreshCw className="w-3 h-3" /> Randomize
              </button>
            </div>

            <div className="space-y-4">
              {currentData.answers.map((answer, index) => (
                <div key={answer.id} className="p-3 bg-slate-50 rounded border border-slate-200 relative group hover:border-blue-200 transition-colors">
                  <span className="absolute top-2 right-2 text-[10px] font-bold text-slate-300">#{index + 1}</span>
                  
                  <div className="mb-2">
                    <label className="flex items-center justify-between text-[10px] font-bold text-slate-600 mb-1 uppercase">
                      Confidence
                      <span className={`font-bold ${getConfidenceStyle(answer.confidence).text.replace('900', '600')}`}>{answer.confidence}%</span>
                    </label>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={answer.confidence} 
                      onChange={(e) => handleAnswerChange(answer.id, 'confidence', parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div className="mb-2">
                    <textarea 
                      value={answer.text}
                      onChange={(e) => handleAnswerChange(answer.id, 'text', e.target.value)}
                      rows={2}
                      placeholder="Answer text..."
                      className="w-full p-2 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 outline-none resize-none"
                    />
                  </div>

                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={answer.source}
                      onChange={(e) => handleAnswerChange(answer.id, 'source', e.target.value)}
                      className="flex-1 p-1.5 text-xs border border-slate-300 rounded"
                      placeholder="Source name"
                    />
                    <select 
                      value={answer.sourceTier}
                      onChange={(e) => handleAnswerChange(answer.id, 'sourceTier', e.target.value)}
                      className="w-24 p-1.5 text-[10px] border border-slate-300 rounded"
                    >
                      <option>Tier 1</option>
                      <option>Tier 2</option>
                      <option>Tier 3</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Preview Panel */}
        <div className="self-start">
          <div className={`bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden min-h-[700px] ${compareMode ? 'grid grid-cols-2 divide-x divide-slate-100' : ''}`}>
             
             {/* Left Column (Always A) */}
             <div className="h-full">
               <PreviewCard data={dataA} label={compareMode ? "Scenario A" : "Preview"} showLabel={true} />
             </div>

             {/* Right Column (B - Only in Compare Mode) */}
             {compareMode && (
               <div className="h-full bg-slate-50/30">
                 <PreviewCard data={dataB} label="Scenario B" showLabel={true} />
               </div>
             )}

          </div>
        </div>
      </main>
    </div>
  );
}