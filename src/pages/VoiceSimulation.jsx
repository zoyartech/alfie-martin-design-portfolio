import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Mic, Activity, BrainCircuit, Volume2, CheckCircle2, ChevronRight, Play, SquareTerminal } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function VoiceSimulation() {
  const [phase, setPhase] = useState('idle'); // idle, asr, nlu, tts, completed
  const [asrText, setAsrText] = useState('');
  const [nluData, setNluData] = useState(null);
  const [ttsText, setTtsText] = useState('');

  const targetPhrase = "Impact, set motor threshold to sixty two";
  const words = targetPhrase.split(' ');

  const runSimulation = () => {
    if (phase !== 'idle' && phase !== 'completed') return;
    
    setPhase('asr');
    setAsrText('');
    setNluData(null);
    setTtsText('');

    let currentWord = 0;
    const asrInterval = setInterval(() => {
      setAsrText(prev => prev + (prev ? ' ' : '') + words[currentWord]);
      currentWord++;
      
      if (currentWord >= words.length) {
        clearInterval(asrInterval);
        setTimeout(() => startNLU(), 800);
      }
    }, 250); // Speed of speaking
  };

  const startNLU = () => {
    setPhase('nlu');
    setTimeout(() => {
      setNluData({
        intent: "SET_PARAMETER",
        confidence: 0.987,
        entities: {
          target: "motor_threshold",
          value: 62,
          unit: "percent"
        },
        action_tier: 2,
        requires_voice_readback: true
      });
      setTimeout(() => startTTS(), 2000);
    }, 1500); // Simulate processing time
  };

  const startTTS = () => {
    setPhase('tts');
    setTimeout(() => {
      setTtsText("Setting motor threshold to 62%. Please confirm.");
      setTimeout(() => setPhase('completed'), 2000);
    }, 1000);
  };

  const reset = () => {
    setPhase('idle');
    setAsrText('');
    setNluData(null);
    setTtsText('');
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 pb-24">
      {/* Header */}
      <section className="pt-24 pb-8 px-6 lg:px-12 border-b border-slate-800 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <Link to={createPageUrl("VoiceUserInterface")} className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to VUI Case Study
          </Link>
          <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Voice Pipeline Simulation</h1>
          <p className="text-lg text-slate-400 font-light max-w-2xl">
            Experience the real-time translation of speech to action. Watch how a single phrase moves through ASR, NLU, and TTS systems in the Impact TMS architecture.
          </p>
        </div>
      </section>

      {/* Main Simulation Area */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Left Column: Visual Pipeline */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Controls */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={runSimulation}
                    disabled={phase !== 'idle' && phase !== 'completed'}
                    className={`flex items-center justify-center w-14 h-14 rounded-full transition-all ${
                      phase === 'idle' || phase === 'completed' 
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    {phase === 'asr' ? <Mic className="w-6 h-6 animate-pulse" /> : <Play className="w-6 h-6 ml-1" />}
                  </button>
                  <div>
                    <h3 className="text-white font-medium">Trigger Test Phrase</h3>
                    <p className="text-sm text-slate-500">"Impact, set motor threshold to sixty two"</p>
                  </div>
                </div>
                
                {(phase === 'completed') && (
                  <button onClick={reset} className="text-sm text-slate-400 hover:text-white transition-colors">
                    Reset
                  </button>
                )}
              </div>

              {/* 1. ASR Block */}
              <motion.div 
                animate={{ opacity: phase === 'idle' ? 0.4 : 1 }}
                className={`bg-slate-900 border rounded-2xl p-6 transition-colors duration-500 ${phase === 'asr' ? 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]' : 'border-slate-800'}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${phase === 'asr' ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-500'}`}>
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300">1. ASR (Speech to Text)</h2>
                    <p className="text-xs text-slate-500">Transcribing audio waveform to raw string</p>
                  </div>
                  {phase === 'asr' && <span className="ml-auto flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span></span>}
                </div>
                
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 min-h-[100px] flex items-center">
                  <p className="text-xl md:text-2xl font-light text-white leading-relaxed">
                    {asrText}
                    {phase === 'asr' && <span className="inline-block w-2 h-6 bg-blue-500 ml-1 animate-pulse align-middle"></span>}
                  </p>
                  {!asrText && phase !== 'asr' && <span className="text-slate-600 italic">Waiting for audio input...</span>}
                </div>
              </motion.div>

              {/* 2. NLU Block */}
              <motion.div 
                animate={{ opacity: phase === 'idle' || phase === 'asr' ? 0.4 : 1 }}
                className={`bg-slate-900 border rounded-2xl p-6 transition-colors duration-500 ${phase === 'nlu' ? 'border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]' : 'border-slate-800'}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${phase === 'nlu' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}>
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300">2. NLU (Natural Language Understanding)</h2>
                    <p className="text-xs text-slate-500">Extracting intent and entities from raw string</p>
                  </div>
                  {phase === 'nlu' && <span className="ml-auto flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span></span>}
                </div>
                
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 min-h-[200px] overflow-hidden relative">
                  <AnimatePresence>
                    {phase === 'nlu' && !nluData && (
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm z-10"
                      >
                        <div className="flex items-center gap-3 text-emerald-500">
                          <BrainCircuit className="w-5 h-5 animate-pulse" />
                          <span className="text-sm font-medium uppercase tracking-wider animate-pulse">Running Inference...</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {nluData ? (
                    <motion.pre 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      className="text-xs md:text-sm font-mono text-emerald-400 whitespace-pre-wrap"
                    >
                      {JSON.stringify(nluData, null, 2)}
                    </motion.pre>
                  ) : (
                    <span className="text-slate-600 italic">Awaiting ASR completion...</span>
                  )}
                </div>
              </motion.div>

              {/* 3. TTS Block */}
              <motion.div 
                animate={{ opacity: phase === 'completed' || phase === 'tts' ? 1 : 0.4 }}
                className={`bg-slate-900 border rounded-2xl p-6 transition-colors duration-500 ${phase === 'tts' ? 'border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.1)]' : 'border-slate-800'}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${phase === 'tts' ? 'bg-purple-500/20 text-purple-400' : 'bg-slate-800 text-slate-500'}`}>
                    <Volume2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300">3. TTS (Text to Speech)</h2>
                    <p className="text-xs text-slate-500">Generating audio feedback for user confirmation</p>
                  </div>
                  {phase === 'tts' && <span className="ml-auto flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span></span>}
                </div>
                
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 min-h-[100px] flex items-center relative overflow-hidden">
                  <AnimatePresence>
                    {phase === 'tts' && !ttsText && (
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm z-10"
                      >
                        <div className="flex items-center gap-3 text-purple-500">
                          <Volume2 className="w-5 h-5 animate-pulse" />
                          <span className="text-sm font-medium uppercase tracking-wider animate-pulse">Synthesizing Audio...</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <p className="text-xl font-light text-white leading-relaxed">
                    {ttsText}
                  </p>
                  {!ttsText && phase !== 'tts' && <span className="text-slate-600 italic">Awaiting intent resolution...</span>}
                </div>
              </motion.div>

            </div>

            {/* Right Column: Status Log */}
            <div className="lg:col-span-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-24 h-[600px] flex flex-col">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-800">
                  <SquareTerminal className="w-5 h-5 text-slate-400" />
                  <h3 className="font-semibold text-slate-200">System State</h3>
                </div>
                
                <div className="flex-1 overflow-y-auto space-y-4 pr-2 font-mono text-xs">
                  <div className="text-slate-500">
                    <span className="text-slate-400">[SYSTEM]</span> Initialized Impact TMS Voice Core v2.1
                  </div>
                  <div className="text-slate-500">
                    <span className="text-slate-400">[SYSTEM]</span> Awaiting microphone trigger...
                  </div>
                  
                  {phase !== 'idle' && (
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-blue-400">
                      <span>[ASR]</span> Microphone opened. Listening stream active.
                    </motion.div>
                  )}
                  
                  {phase === 'nlu' || phase === 'tts' || phase === 'completed' ? (
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-emerald-400">
                      <span>[NLU]</span> Received string: "{targetPhrase}"
                    </motion.div>
                  ) : null}

                  {phase === 'nlu' || phase === 'tts' || phase === 'completed' ? (
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-emerald-400" transition={{ delay: 1 }}>
                      <span>[NLU]</span> Intent resolved: SET_PARAMETER (Confidence: 0.987)
                    </motion.div>
                  ) : null}

                  {phase === 'tts' || phase === 'completed' ? (
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-purple-400">
                      <span>[TTS]</span> Action tier 2 detected. Generating readback confirmation.
                    </motion.div>
                  ) : null}

                  {phase === 'completed' ? (
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-white mt-4 flex items-center gap-2 p-3 bg-slate-800 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      Pipeline execution successful. 2480ms elapsed.
                    </motion.div>
                  ) : null}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}