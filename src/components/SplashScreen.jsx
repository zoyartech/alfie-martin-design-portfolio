import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // loading, hanging, kidding, done

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Progress simulation - slows down as it approaches 99%
      const remaining = 99 - currentProgress;
      currentProgress += Math.max(0.5, remaining * 0.15 * Math.random());
      
      if (currentProgress >= 99) {
        currentProgress = 99;
        clearInterval(interval);
        setPhase('hanging');
        
        // Hang at 99%, then switch to the "just kidding" message
        setTimeout(() => {
          setPhase('kidding');
          
          // Wait to read the message, then finish
          setTimeout(() => {
            setPhase('done');
            setTimeout(onComplete, 800);
          }, 2500);
        }, 1800);
      }
      setProgress(Math.min(currentProgress, 99));
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100000] bg-[#faf9f6] flex flex-col items-center justify-center p-6"
        >
          <div className="w-full max-w-sm">
            <AnimatePresence mode="wait">
              {phase === 'loading' || phase === 'hanging' ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col"
                >
                  <div className="flex justify-between items-end mb-3">
                    <p className="text-slate-500 font-mono text-[10px] sm:text-xs uppercase tracking-wider">
                      Generating portfolio for Alfie Martin...
                    </p>
                    <p className="text-slate-900 font-mono text-xs font-bold pl-4">
                      {Math.floor(progress)}%
                    </p>
                  </div>
                  <div className="w-full h-[2px] bg-slate-200 overflow-hidden">
                    <div 
                      className="h-full bg-slate-900 transition-all duration-75 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="kidding"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <p className="text-slate-900 font-serif text-2xl md:text-3xl italic font-light">
                    Just kidding, a human designed this.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}