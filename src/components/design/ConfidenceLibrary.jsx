import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, BookOpen, Info, ChevronRight } from 'lucide-react';

const Tooltip = ({ children, content, className = '' }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-slate-900 text-slate-200 text-xs leading-relaxed rounded-sm px-3 py-2.5 shadow-lg pointer-events-none"
          >
            {content}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// 1. Probability Bar
export const ProbabilityBar = ({ value = 0.78, label = "Diagnosis match" }) => {
  const pct = Math.round(value * 100);
  const color = value >= 0.9 ? 'bg-emerald-500' : value >= 0.7 ? 'bg-amber-400' : 'bg-red-400';
  const textColor = value >= 0.9 ? 'text-emerald-700' : value >= 0.7 ? 'text-amber-700' : 'text-red-700';

  return (
    <Tooltip content="A horizontal probability bar makes confidence scannable without requiring the user to decode a percentage. The fill color maps to the same three-tier system used across all patterns — consistent thresholds, consistent semantics.">
      <div className="group cursor-default w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">{label}</span>
          <span className={`text-xs font-mono font-semibold ${textColor}`}>{pct}%</span>
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full w-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className={`h-full rounded-full ${color}`}
          />
        </div>
        <p className="mt-2 text-[10px] text-slate-400 font-mono tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          HOVER FOR USAGE RATIONALE
        </p>
      </div>
    </Tooltip>
  );
};

// 2. Hedged Language Tooltip
export const HedgedTooltip = ({ text = "This pattern may indicate early-stage hypertension", confidence = 0.71 }) => {
  const [showHedge, setShowHedge] = useState(false);
  return (
    <Tooltip content="The underline signals that this specific phrase carries a confidence qualifier — not the whole sentence. Users learn to trust undecorated statements more. The hedge is embedded in the language itself and reinforced by the tooltip, not replaced by it.">
      <div className="cursor-default bg-white p-4 border border-slate-100 rounded-sm">
        <p className="text-sm text-slate-800 leading-relaxed">
          Based on the available data,{' '}
          <span
            className="relative inline cursor-help group"
            onMouseEnter={() => setShowHedge(true)}
            onMouseLeave={() => setShowHedge(false)}
          >
            <span className="border-b border-dashed border-amber-400 pb-0.5 text-slate-800 group-hover:bg-amber-50 transition-colors">
              {text}
            </span>
            <AnimatePresence>
              {showHedge && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute z-[60] bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-amber-50 border border-amber-200 text-amber-900 text-[11px] rounded-sm px-2.5 py-2 font-mono pointer-events-none shadow-sm"
                >
                  <span className="block font-semibold mb-1 tracking-wider">HEDGED STATEMENT</span>
                  Confidence: {Math.round(confidence * 100)}% — model is uncertain. Verify with a clinician.
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-amber-200" />
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-amber-50 -mt-[1px]" />
                </motion.div>
              )}
            </AnimatePresence>
          </span>
          . Further testing is recommended.
        </p>
      </div>
    </Tooltip>
  );
};

// 3. Source Citation Chip
export const SourceCitationChip = ({ sources = [{ id: 'labs/03-12', label: 'Blood Panel, Mar 12' }, { id: 'notes/dr-chen', label: 'Dr. Chen Notes' }] }) => {
  return (
    <Tooltip content="Citations ground AI responses in verifiable data. The chip form factor keeps them unobtrusive — present for the skeptical user, invisible to the trusting one. Clicking through to the source is where confidence becomes accountability.">
      <div className="cursor-default">
        <p className="text-sm text-slate-700 leading-relaxed mb-3">
          Your LDL is slightly elevated at 112 mg/dL, above the recommended 100 mg/dL threshold.
        </p>
        <div className="flex flex-wrap gap-2">
          {sources.map(src => (
            <div
              key={src.id}
              className="group inline-flex items-center gap-1.5 text-[10px] font-mono bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-700 px-2 py-1 rounded-sm transition-all duration-150 cursor-pointer"
            >
              <BookOpen className="w-2.5 h-2.5" />
              {src.label}
              <ChevronRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </Tooltip>
  );
};

// 4. Inline Low-Confidence Banner
export const LowConfidenceBanner = ({ message = "This response is based on incomplete intake data and has not been verified against your full medical history." }) => {
  return (
    <Tooltip content="A full-width banner is appropriate when the entire response — not just a phrase — is uncertain. It appears inline, not as a modal, to avoid interrupting the flow. The language is factual, not apologetic. It tells you what's missing, not how sorry the AI is.">
      <div className="cursor-default w-full">
        <div className="border border-red-200 bg-red-50 rounded-sm px-4 py-3 flex items-start gap-3">
          <AlertTriangle className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-[10px] font-mono font-semibold text-red-600 tracking-widest uppercase mb-1">
              Low Confidence — Review Needed
            </p>
            <p className="text-xs text-red-700 leading-relaxed">{message}</p>
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

// 5. Numerical Score with Explanatory Popover
export const NumericalScorePopover = ({ score = 62, breakdown = [{ label: 'Source recency', value: 40 }, { label: 'Data completeness', value: 55 }, { label: 'Model certainty', value: 91 }] }) => {
  const [open, setOpen] = useState(false);
  const color = score >= 90 ? 'text-emerald-700 bg-emerald-50 border-emerald-200' : score >= 70 ? 'text-amber-700 bg-amber-50 border-amber-200' : 'text-red-700 bg-red-50 border-red-200';
  const barColor = score >= 90 ? 'bg-emerald-400' : score >= 70 ? 'bg-amber-400' : 'bg-red-400';

  return (
    <Tooltip content="The number alone is opaque — 62% means nothing without context. The popover decomposes the score into its contributing factors, teaching users what the model is actually uncertain about. Transparency here is a product differentiator, not just a nice-to-have.">
      <div className="cursor-default relative inline-block">
        <button
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border text-xs font-mono font-semibold tracking-wider transition-all ${color} hover:shadow-sm`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onClick={() => setOpen(!open)}
        >
          <Info className="w-3 h-3" />
          CONF SCORE: {score}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-sm shadow-lg p-4 pointer-events-none"
            >
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3">Score Breakdown</p>
              <div className="space-y-3">
                {breakdown.map(item => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[11px] text-slate-600">{item.label}</span>
                      <span className="text-[11px] font-mono font-semibold text-slate-700">{item.value}</span>
                    </div>
                    <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.value >= 90 ? 'bg-emerald-400' : item.value >= 70 ? 'bg-amber-400' : 'bg-red-400'}`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 mt-3 pt-3 border-t border-slate-100">
                Overall score is weighted average. Source recency has highest weight in clinical contexts.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Tooltip>
  );
};