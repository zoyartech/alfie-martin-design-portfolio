import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Volume2, ChevronUp, ChevronDown, Sparkles, Mic, Activity, History } from "lucide-react";

export default function VUIPrototype() {
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
    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col h-[500px] md:h-[600px] w-full font-sans">
      {/* Mock Clinical Dashboard area */}
      <div className="flex-1 p-6 md:p-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent pointer-events-none"></div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-white text-2xl font-medium mb-1 tracking-tight">Impact TMS</h3>
              <p className="text-slate-400">Patient Session: Active</p>
            </div>
            <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium border border-emerald-500/30 flex items-center">
              <Activity className="w-4 h-4 mr-2" /> Stimulation Ready
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 shadow-inner">
              <div className="text-slate-400 text-sm mb-1 font-medium uppercase tracking-wider">Motor Threshold</div>
              <div className="text-white text-3xl font-light">62%</div>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 shadow-inner">
              <div className="text-slate-400 text-sm mb-1 font-medium uppercase tracking-wider">Intensity</div>
              <div className="text-white text-3xl font-light">120%</div>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 shadow-inner col-span-2">
              <div className="text-slate-400 text-sm mb-1 font-medium uppercase tracking-wider">Current Protocol</div>
              <div className="text-white text-lg font-medium truncate">Standard Depression (Left DLPFC)</div>
            </div>
          </div>

          {/* Simulation Controls */}
          <div className="mt-auto self-end w-full max-w-sm bg-slate-800/90 backdrop-blur p-5 rounded-xl border border-slate-600 shadow-xl">
            <h4 className="text-slate-300 text-xs uppercase font-bold tracking-widest mb-4 flex items-center">
              <Mic className="w-4 h-4 mr-2 text-blue-400" /> Simulate Voice Input
            </h4>
            <div className="space-y-2.5">
              <button onClick={() => simulateCommand('tier1')} disabled={micState !== 'idle'} className="w-full text-left px-4 py-2.5 bg-slate-700/80 hover:bg-slate-600 rounded-lg text-sm text-slate-200 transition-colors disabled:opacity-50 flex items-center justify-between group">
                <span>"Log mild headache"</span> <span className="text-[10px] text-slate-400 uppercase tracking-wider group-hover:text-slate-300">Tier 1</span>
              </button>
              <button onClick={() => simulateCommand('tier2')} disabled={micState !== 'idle'} className="w-full text-left px-4 py-2.5 bg-slate-700/80 hover:bg-slate-600 rounded-lg text-sm text-slate-200 transition-colors disabled:opacity-50 flex items-center justify-between group">
                <span>"Set motor threshold to 62"</span> <span className="text-[10px] text-slate-400 uppercase tracking-wider group-hover:text-slate-300">Tier 2</span>
              </button>
              <button onClick={() => simulateCommand('tier3')} disabled={micState !== 'idle'} className="w-full text-left px-4 py-2.5 bg-slate-700/80 hover:bg-slate-600 rounded-lg text-sm text-slate-200 transition-colors disabled:opacity-50 flex items-center justify-between group">
                <span>"Update intensity to 120%"</span> <span className="text-[10px] text-slate-400 uppercase tracking-wider group-hover:text-slate-300">Tier 3</span>
              </button>
              <button onClick={() => simulateCommand('error')} disabled={micState !== 'idle'} className="w-full text-left px-4 py-2.5 bg-red-900/20 hover:bg-red-900/40 text-red-200 border border-red-800/30 rounded-lg text-sm transition-colors disabled:opacity-50 flex items-center justify-between group">
                <span>"Set threshold to 200%"</span> <span className="text-[10px] text-red-400/70 uppercase tracking-wider group-hover:text-red-300">Error</span>
              </button>
            </div>
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