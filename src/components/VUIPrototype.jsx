import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Volume2, ChevronUp, ChevronDown, Sparkles, Mic, Activity, History } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";

export default function VUIPrototype() {
  const [telemetryData, setTelemetryData] = useState(
    Array.from({ length: 30 }, (_, i) => ({ time: i, value: 70 + Math.random() * 5 }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryData(prev => {
        const newData = [...prev.slice(1)];
        const lastVal = prev[prev.length - 1].value;
        let nextVal = lastVal + (Math.random() - 0.5) * 4;
        if (nextVal > 100) nextVal = 100;
        if (nextVal < 60) nextVal = 60;
        
        newData.push({
          time: prev[prev.length - 1].time + 1,
          value: nextVal
        });
        return newData;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);
  const [micState, setMicState] = useState('idle'); // idle, listening, processing
  const [lastCommand, setLastCommand] = useState('');
  const [commandStatus, setCommandStatus] = useState(null); // 'confirmed', 'awaiting_voice', 'screen_confirm', 'error'
  const [history, setHistory] = useState([
  { id: 2, time: '10:45 AM', command: 'Set protocol to standard depression', status: 'screen_confirm' },
  { id: 1, time: '10:42 AM', command: 'Start session', status: 'confirmed' }]
  );
  const [showHistory, setShowHistory] = useState(false);
  const [suggestion, setSuggestion] = useState('Ready for motor threshold check?');

  const simulateCommand = (type) => {
    setMicState('listening');
    setLastCommand('...');
    setCommandStatus(null);
    setSuggestion(null);

    setTimeout(() => {
      setMicState('processing');

      setTimeout(() => {
        setMicState('idle');
        let newCmd = '';
        let newStatus = '';

        if (type === 'tier1') {
          newCmd = 'Log patient reported mild headache';
          newStatus = 'confirmed';
        } else if (type === 'tier2') {
          newCmd = 'Set motor threshold to 62';
          newStatus = 'awaiting_voice';
        } else if (type === 'tier3') {
          newCmd = 'Update stimulation intensity to 120%';
          newStatus = 'screen_confirm';
        } else if (type === 'noisy') {
          newCmd = 'Update protocol... [Audio Degraded]';
          newStatus = 'screen_confirm';
        } else if (type === 'treatment') {
          newCmd = 'Begin stimulation treatment';
          newStatus = 'screen_confirm';
        } else if (type === 'error') {
          newCmd = 'Set motor threshold to 200%';
          newStatus = 'error';
        }

        setLastCommand(newCmd);
        setCommandStatus(newStatus);

        setHistory((prev) => [{
          id: Date.now(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          command: newCmd,
          status: newStatus
        }, ...prev]);

      }, 1000);
    }, 1500);
  };

  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col h-[600px] md:h-[700px] w-full font-sans">
      {/* Mock Clinical Dashboard area */}
      <div className="flex-1 p-6 md:p-10 relative overflow-hidden bg-slate-950">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8 border-b border-slate-800/60 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 font-semibold shadow-inner">
                JS
              </div>
              <div>
                <h3 className="text-white text-xl font-medium tracking-tight mb-1">John Smith</h3>
                <div className="flex items-center text-slate-400 text-xs font-medium gap-2">
                  <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300">ID: #84920</span>
                  <span>DOB: 05/12/1980</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-800/80 backdrop-blur-sm text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700">
                Session 12 of 36
              </div>
              <div className="bg-emerald-500/10 backdrop-blur-sm text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-500/20 flex items-center shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <Activity className="w-3.5 h-3.5 mr-1.5 animate-pulse" /> Stimulation Ready
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-3xl mb-8">
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800/80 backdrop-blur-md relative overflow-hidden group hover:bg-slate-800/80 transition-all duration-300 shadow-sm">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors"></div>
              <div className="text-slate-400 text-[10px] md:text-xs mb-2 font-bold uppercase tracking-widest">Motor Threshold</div>
              <div className="flex items-baseline gap-1.5">
                <div className="text-white text-3xl md:text-4xl font-light tracking-tight">62</div>
                <div className="text-slate-500 text-sm font-medium">%</div>
              </div>
            </div>
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800/80 backdrop-blur-md relative overflow-hidden group hover:bg-slate-800/80 transition-all duration-300 shadow-sm">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors"></div>
              <div className="text-slate-400 text-[10px] md:text-xs mb-2 font-bold uppercase tracking-widest">Intensity</div>
              <div className="flex items-baseline gap-1.5">
                <div className="text-white text-3xl md:text-4xl font-light tracking-tight">120</div>
                <div className="text-slate-500 text-sm font-medium">%</div>
              </div>
            </div>
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800/80 backdrop-blur-md relative overflow-hidden col-span-2 group hover:bg-slate-800/80 transition-all duration-300 shadow-sm flex flex-col justify-center">
               <div className="absolute top-0 left-0 w-1 h-full bg-purple-500/50 group-hover:bg-purple-500 transition-colors"></div>
              <div className="text-slate-400 text-[10px] md:text-xs mb-2 font-bold uppercase tracking-widest">Current Protocol</div>
              <div className="text-white text-lg md:text-xl font-medium truncate">Standard Depression</div>
              <div className="text-slate-400 text-xs md:text-sm mt-1.5 flex items-center gap-2">
                <span className="text-slate-300">Left DLPFC</span>
                <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                <span>10Hz</span>
                <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                <span>3000 pulses</span>
              </div>
            </div>

            {/* Real-time Telemetry Visualization */}
            <div className="bg-slate-900/80 p-4 md:p-5 rounded-2xl border border-slate-800/80 backdrop-blur-md relative overflow-hidden col-span-2 md:col-span-4 group hover:bg-slate-800/80 transition-all duration-300 shadow-sm flex flex-col h-24 md:h-32">
               <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/50 group-hover:bg-cyan-500 transition-colors z-10"></div>
               <div className="flex justify-between items-end mb-2 relative z-10">
                 <div className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">Real-time Pulse Rate (BPM)</div>
                 <div className="text-cyan-400 text-[10px] md:text-xs font-medium animate-pulse flex items-center"><Activity className="w-3 h-3 mr-1"/> LIVE</div>
               </div>
               <div className="flex-1 w-full -ml-4 -mb-4">
                 <ResponsiveContainer width="105%" height="100%">
                   <LineChart data={telemetryData}>
                     <YAxis domain={['dataMin - 5', 'dataMax + 5']} hide />
                     <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2} dot={false} isAnimationActive={false} />
                   </LineChart>
                 </ResponsiveContainer>
               </div>
            </div>
          </div>

          {/* Simulation Controls */}
          <div className="mt-auto self-end w-full max-w-sm bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl border border-slate-700/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
            <h4 className="text-slate-300 text-xs uppercase font-bold tracking-widest mb-4 flex items-center">
              <Mic className="w-4 h-4 mr-2 text-blue-400" /> Simulate Voice Input
            </h4>
            <TooltipProvider delayDuration={200}>
              <div className="space-y-1.5">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button onClick={() => simulateCommand('tier1')} disabled={micState !== 'idle'} className="w-full text-left px-4 py-2 bg-slate-700/80 hover:bg-slate-600 rounded-lg text-sm text-slate-200 transition-colors disabled:opacity-50 flex items-center justify-between group">
                      <span>"Log mild headache"</span> <span className="text-[10px] text-slate-400 uppercase tracking-wider group-hover:text-slate-300">Tier 1</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="bg-slate-800 text-slate-200 border-slate-700">
                    <p className="max-w-[200px] text-center">Low-risk documentation action. Executed immediately with visual confirmation.</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button onClick={() => simulateCommand('tier2')} disabled={micState !== 'idle'} className="w-full text-left px-4 py-2 bg-slate-700/80 hover:bg-slate-600 rounded-lg text-sm text-slate-200 transition-colors disabled:opacity-50 flex items-center justify-between group">
                      <span>"Set motor threshold to 62"</span> <span className="text-[10px] text-slate-400 uppercase tracking-wider group-hover:text-slate-300">Tier 2</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="bg-slate-800 text-slate-200 border-slate-700">
                    <p className="max-w-[200px] text-center">Medium-risk action. Requires verbal confirmation or screen acknowledgment.</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button onClick={() => simulateCommand('tier3')} disabled={micState !== 'idle'} className="w-full text-left px-4 py-2 bg-slate-700/80 hover:bg-slate-600 rounded-lg text-sm text-slate-200 transition-colors disabled:opacity-50 flex items-center justify-between group">
                      <span>"Update intensity to 120%"</span> <span className="text-[10px] text-slate-400 uppercase tracking-wider group-hover:text-slate-300">Tier 3</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="bg-slate-800 text-slate-200 border-slate-700">
                    <p className="max-w-[200px] text-center">High-risk action. Requires strict manual screen confirmation to proceed.</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button onClick={() => simulateCommand('noisy')} disabled={micState !== 'idle'} className="w-full text-left px-4 py-2 bg-slate-700/80 hover:bg-slate-600 rounded-lg text-sm text-slate-200 transition-colors disabled:opacity-50 flex items-center justify-between group">
                      <span>"Update protocol..." (Noisy)</span> <span className="text-[10px] text-amber-400/70 uppercase tracking-wider group-hover:text-amber-300">Degraded</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="bg-slate-800 text-slate-200 border-slate-700">
                    <p className="max-w-[200px] text-center">Simulates noisy environment. Low confidence forces screen confirmation.</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button onClick={() => simulateCommand('treatment')} disabled={micState !== 'idle'} className="w-full text-left px-4 py-2 bg-slate-700/80 hover:bg-slate-600 rounded-lg text-sm text-slate-200 transition-colors disabled:opacity-50 flex items-center justify-between group">
                      <span>"Begin treatment"</span> <span className="text-[10px] text-blue-400/70 uppercase tracking-wider group-hover:text-blue-300">Critical</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="bg-slate-800 text-slate-200 border-slate-700">
                    <p className="max-w-[200px] text-center">High-risk action. System mandates explicit confirmation before starting.</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button onClick={() => simulateCommand('error')} disabled={micState !== 'idle'} className="w-full text-left px-4 py-2 bg-red-900/20 hover:bg-red-900/40 text-red-200 border border-red-800/30 rounded-lg text-sm transition-colors disabled:opacity-50 flex items-center justify-between group">
                      <span>"Set threshold to 200%"</span> <span className="text-[10px] text-red-400/70 uppercase tracking-wider group-hover:text-red-300">Error</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="bg-slate-800 text-slate-200 border-slate-700">
                    <p className="max-w-[200px] text-center">Out-of-bounds error state. System blocks action and throws an alert.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>

      {/* Command History Overlay */}
      <AnimatePresence>
        {showHistory &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-slate-800 border-t border-slate-700 overflow-y-auto max-h-48">
          
            <div className="p-4 space-y-3">
              <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center">
                <History className="w-3.5 h-3.5 mr-2" /> Session History
              </h4>
              {history.map((item, idx) =>
            <div key={item.id} className="flex items-start md:items-center gap-3 md:gap-4 text-sm py-1">
                  <span className="text-slate-500 w-16 text-xs whitespace-nowrap pt-0.5 md:pt-0">{item.time}</span>
                  <span className="text-slate-200 flex-1 leading-snug">"{item.command}"</span>
                  <div className="w-32 flex justify-end shrink-0 pt-0.5 md:pt-0">
                    {item.status === 'confirmed' && <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider flex items-center"><Check className="w-3 h-3 mr-1" /> Confirmed</span>}
                    {item.status === 'awaiting_voice' && <span className="text-amber-400 text-[10px] font-bold uppercase tracking-wider flex items-center"><Volume2 className="w-3 h-3 mr-1" /> Voice Confirm</span>}
                    {item.status === 'screen_confirm' && <span className="text-blue-400 text-[10px] font-bold uppercase tracking-wider flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> Screen Confirm</span>}
                    {item.status === 'error' && <span className="text-red-400 text-[10px] font-bold uppercase tracking-wider flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> Error</span>}
                  </div>
                </div>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>

      {/* VUI Feedback Strip */}
      <div className="bg-slate-950 border-t border-slate-800 p-4 md:px-6 flex items-center gap-3 md:gap-6 shrink-0 overflow-x-auto">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="p-2 -ml-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-full transition-all">
          
          {showHistory ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
        </button>

        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${
          micState === 'idle' ? 'bg-slate-600' :
          micState === 'listening' ? 'bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]' :
          'bg-blue-500 animate-bounce shadow-[0_0_10px_rgba(59,130,246,0.5)]'}`
          } />
          <span className="text-slate-400 text-xs md:text-sm font-medium w-16 md:w-20 uppercase tracking-wider">
            {micState === 'idle' ? 'Idle' : micState === 'listening' ? 'Listening' : 'Processing'}
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center min-w-0">
          {suggestion && micState === 'idle' && !lastCommand ?
          <div className="text-amber-500/80 text-sm italic flex items-center gap-2 truncate">
              <Sparkles className="w-4 h-4 shrink-0" /> <span className="truncate">Suggestion: {suggestion}</span>
            </div> :

          <div className={`text-white text-base md:text-lg font-medium truncate transition-opacity duration-300 ${micState === 'processing' ? 'opacity-50' : 'opacity-100'}`}>
              {lastCommand ? `"${lastCommand}"` : ""}
            </div>
          }
        </div>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          {commandStatus === 'confirmed' &&
          <div className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-[10px] md:text-xs font-bold tracking-wide flex items-center">
              <Check className="w-3.5 h-3.5 mr-1.5" /> <span className="hidden md:inline">CONFIRMED</span>
            </div>
          }
          {commandStatus === 'awaiting_voice' &&
          <div className="px-3 py-1.5 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-[10px] md:text-xs font-bold tracking-wide flex items-center">
              <Volume2 className="w-3.5 h-3.5 mr-1.5" /> <span className="hidden md:inline">AWAITING VOICE</span>
            </div>
          }
          {commandStatus === 'screen_confirm' &&
          <div className="px-3 py-1.5 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-[10px] md:text-xs font-bold tracking-wide flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1.5" /> <span className="hidden md:inline">SCREEN CONFIRM</span>
            </div>
          }
          {commandStatus === 'error' &&
          <div className="px-3 py-1.5 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-[10px] md:text-xs font-bold tracking-wide flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1.5" /> <span className="hidden md:inline">OUT OF RANGE</span>
            </div>
          }

          {commandStatus === 'screen_confirm' &&
          <button onClick={() => {
            setCommandStatus('confirmed');
            setHistory((h) => {const newH = [...h];newH[0].status = 'confirmed';return newH;});
          }}
          className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-xs md:text-sm font-semibold transition-colors shadow-lg">
            
              Confirm
            </button>
          }
        </div>
      </div>
    </div>
  );
}