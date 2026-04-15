import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, AlertCircle, Volume2, ChevronUp, ChevronDown, Sparkles, Mic, Activity, BrainCircuit, ShieldCheck, UserCog, History } from "lucide-react";
import { createPageUrl } from "@/utils";

const VUIPrototype = () => {
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
      <div className="bg-slate-950 border-t border-slate-800 p-4 md:px-6 flex items-center gap-4 md:gap-6 shrink-0">
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

        <div className="flex items-center gap-3 shrink-0">
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
    </div>);

};

export default function VoiceUserInterface() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 pb-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <Link to={createPageUrl("b6")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Breakthrough 6 Project
            </Link>
          </div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 bg-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-widest rounded-sm">PRD / Concept</span>
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-widest rounded-sm">Voice UI</span>
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-widest rounded-sm">Clinical Tech</span>
            </div>
            <h1 className="text-slate-900 mb-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
              Voice User Interface for Impact TMS
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed mb-8 font-light">
              Reducing workflow friction during transcranial magnetic stimulation (TMS) sessions by allowing clinicians to issue commands and log data without breaking physical engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary & The Problem */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="sticky top-24">
              <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">The Context</h2>
              <h3 className="text-3xl font-semibold text-slate-900 leading-tight">Hands-busy, eyes-on-patient.</h3>
            </div>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-light">
              <p>
                The VUI operates as a multimodal input layer on top of the existing visual dashboard. It does not replace the screen interface. Voice handles speed of input; the screen remains the source of truth, the confirmation surface, and the primary interface for browsing, comparison, and complex decision-making.
              </p>
              <p>
                TMS administration is a demanding procedure. The clinician is simultaneously positioning the magnetic coil, monitoring the patient for adverse reactions, adjusting stimulation parameters, and tracking session progress. The current dashboard requires the clinician to break physical engagement with the patient and device to interact with the screen, creating workflow disruption at precisely the moments when clinical attention is most critical.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-100">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg mb-4">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Real-time Logging</h4>
                  <p className="text-sm text-slate-600">Recording patient responses during stimulation requires one hand on the coil and the other on a keyboard.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg mb-4 hidden">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Cognitive Load</h4>
                  <p className="text-sm text-slate-600">Context-switching between patient observation and screen interaction fragments clinical attention.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Prototype Section */}
      <section className="py-24 px-6 lg:px-12 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">Interactive Concept</h2>
            <h3 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">The VUI Feedback Strip</h3>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Try simulating different tiers of voice commands below to see how the system handles confidence, intent, and risk-proportional confirmations.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <VUIPrototype />
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 w-full flex justify-center">
            <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/00df9af9a_Screenshot2026-04-14at72315PM.png" alt="Visualized decision tree structure" className="w-full max-w-4xl rounded-2xl shadow-sm border border-slate-200 object-contain" />
          </div>

          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Under The Hood</h2>
            <h3 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">Six-Layer Architecture</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">1</div>
                <h4 className="text-xl font-semibold text-slate-900">Context Engine</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Runs persistently to feed information downstream. Maintains session state (determines available command set), patient context (surfaces protocols and medical history), and clinician profile (preferences and vocabulary).
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">2</div>
                <h4 className="text-xl font-semibold text-slate-900">Input Processing</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Uses a push-to-talk activation model to avoid false positives. Features a <strong className="text-slate-900 font-medium">TMS Noise Gate</strong> synchronized with magnetic pulse timing to buffer voice input during loud clicks rather than attempting flawed acoustic filtering.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">3</div>
                <h4 className="text-xl font-semibold text-slate-900">Intent Resolution</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Routes commands based on confidence scores. Medium confidence triggers a strict A/B disambiguation flow. The system also generates context-aware predictive suggestions based on clinician history.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">4</div>
                <h4 className="text-xl font-semibold text-slate-900">Tiered Execution</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Commands are classified into three risk tiers. Voice-eligible commands are single-shot tasks with predictable structures, while multi-step workflows stay screen-only.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">5</div>
                <h4 className="text-xl font-semibold text-slate-900">Failure Handling</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Five distinct failure modes ensure a graceful degradation. If a value is out of range, the system suggests the nearest valid alternative. If interrupted, the system buffers partial input and asks to complete it.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">6</div>
                <h4 className="text-xl font-semibold text-slate-900">Personalization</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Adapts to individual workflows over time. Tracks command frequencies to suggest shortcuts, learns custom vocabulary mappings (e.g., "MT" vs "threshold"), and dynamically tunes confirmation verbosity based on the user's error rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Tiers */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Risk-Proportional Execution</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Confirmation friction is strictly proportional to the clinical consequence of a misrecognized command.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <div className="bg-slate-100 text-slate-700 font-bold uppercase tracking-widest text-[10px] px-3 py-1 rounded-full w-fit mb-6">Tier 1</div>
              <h4 className="text-2xl font-semibold text-slate-900 mb-3">Reversible & Low Risk</h4>
              <p className="text-slate-600 mb-8 flex-1">Session notes, timestamp markers, and quick data retrieval. Executes immediately with a brief confirmation chime.</p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <p className="text-sm font-medium text-slate-900">"Log patient reported mild headache"</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <div className="bg-amber-100 text-amber-700 font-bold uppercase tracking-widest text-[10px] px-3 py-1 rounded-full w-fit mb-6">Tier 2</div>
              <h4 className="text-2xl font-semibold text-slate-900 mb-3">Clinical Data Entry</h4>
              <p className="text-slate-600 mb-8 flex-1">Values entering the patient record. Requires voice confirmation via read-back before committing the data.</p>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <p className="text-sm font-medium text-slate-900">"Set motor threshold to 62"</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-slate-200 border shadow-sm flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full -mr-8 -mt-8"></div>
              <div className="bg-blue-100 text-blue-700 font-bold uppercase tracking-widest text-[10px] px-3 py-1 rounded-full w-fit mb-6 relative z-10">Tier 3</div>
              <h4 className="text-2xl font-semibold text-slate-900 mb-3 relative z-10">Safety Critical</h4>
              <p className="text-slate-600 mb-8 flex-1 relative z-10">Treatment parameters that affect stimulation. Requires explicit physical screen confirmation. Zero error tolerance.</p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 relative z-10">
                <p className="text-sm font-medium text-slate-900">"Update intensity to 120%"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-slate-100 bg-white mt-12">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm text-slate-500">
          <p>© 2026 Alfie Martin. Impact TMS PRD.</p>
          <Link to={createPageUrl("Home")} className="hover:text-slate-900 transition-colors">Return to Home</Link>
        </div>
      </footer>
    </div>);

}