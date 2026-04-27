import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, PenTool, Search, CheckCircle2, Loader2 } from 'lucide-react';

const states = [
  { id: 'thinking', label: 'Thinking', icon: BrainCircuit, textColor: 'text-blue-500', lightBg: 'bg-blue-50', solidBg: 'bg-blue-500' },
  { id: 'drafting', label: 'Drafting response', icon: PenTool, textColor: 'text-purple-500', lightBg: 'bg-purple-50', solidBg: 'bg-purple-500' },
  { id: 'checking', label: 'Checking sources', icon: Search, textColor: 'text-amber-500', lightBg: 'bg-amber-50', solidBg: 'bg-amber-500' },
  { id: 'complete', label: 'Complete', icon: CheckCircle2, textColor: 'text-emerald-500', lightBg: 'bg-emerald-50', solidBg: 'bg-emerald-500' }
];

export default function SystemStatusDemo() {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentState((prev) => (prev + 1) % states.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const progress = ((currentState + 1) / states.length) * 100;
  const activeState = states[currentState];
  const Icon = activeState.icon;

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden flex flex-col">
      <div className="p-5 flex items-center gap-4">
        <div className={`p-3 rounded-full ${activeState.lightBg} ${activeState.textColor} transition-colors duration-500`}>
          <Icon className={`w-6 h-6 ${currentState !== 3 ? 'animate-pulse' : ''}`} />
        </div>
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeState.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <span className="font-sans font-medium text-slate-900">{activeState.label}</span>
              {currentState !== 3 && <Loader2 className="w-3 h-3 animate-spin text-slate-400" />}
            </motion.div>
          </AnimatePresence>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
            <motion.div 
              className={`h-full ${activeState.solidBg}`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500 font-sans uppercase tracking-wider font-semibold">
        <span>System Status</span>
        <span>{currentState === 3 ? '100%' : `${Math.round(progress)}%`}</span>
      </div>
    </div>
  );
}