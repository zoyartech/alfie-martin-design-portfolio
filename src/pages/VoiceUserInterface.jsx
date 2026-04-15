import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, AlertCircle, Volume2, ChevronUp, ChevronDown, Sparkles, Mic, Activity, BrainCircuit, ShieldCheck, UserCog, History } from "lucide-react";
import { createPageUrl } from "@/utils";
import VoiceAnalyticsDashboard from "@/components/VoiceAnalyticsDashboard";

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
            

            
          </motion.div>
        </div>
      </section>

      {/* Prototype Link Image */}
      <section className="py-16 px-6 lg:px-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto flex justify-center">
          <a
            href="https://salty-rival-46904041.figma.site"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-90 hover:scale-[1.01] transition-all duration-300 w-full max-w-3xl">
            
            <img
              src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/c97b24ad6_ViewInteractivePrototype.png"
              alt="View Interactive Prototype"
              className="w-full h-auto rounded-2xl shadow-lg border border-slate-200" />
            
          </a>
        </div>
      </section>

      {/* Executive Summary & The Problem */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto h-[700px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 mb-24">
          <iframe
            src="https://salty-rival-46904041.figma.site"
            className="w-full h-full border-0"
            title="Figma Prototype"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl text-slate-800 font-light leading-relaxed mb-20 tracking-wide">
            I designed a voice user interface layer for Breakthrough 6's Impact TMS™ clinical system to let clinicians control key dashboard functions hands-free during active treatment sessions.
          </p>
          
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-8">Context and Problem</h2>
            <p className="text-lg md:text-xl text-slate-600 font-light leading-loose max-w-3xl text-center">
              Transcranial magnetic stimulation requires a clinician's sustained physical attention. During a treatment session, the operator is positioning and holding a coil against the patient's head, monitoring patient response, and adjusting placement based on real-time feedback. Their hands are occupied for the duration of the session, which can run from 20-35 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Prototype Section */}
      














      

      {/* Workflow Process Visuals */}
      <section className="py-24 px-6 lg:px-12 bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto space-y-16">
          <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/f35694c62_Screenshot2026-04-14at113540PM.png"
            alt="Workflow Timeline"
            className="w-full h-auto rounded-2xl shadow-2xl border border-slate-800/50"
          />
          <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/07b32ba73_Screenshot2026-04-14at114134PM.png"
            alt="Signal Processing"
            className="w-full h-auto rounded-2xl shadow-2xl border border-slate-800/50"
          />
          <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/5132297cd_Screenshot2026-04-14at114621PM.png"
            alt="Workflow Comparison"
            className="w-full h-auto rounded-2xl shadow-2xl border border-slate-800/50"
          />
        </div>
      </section>

      {/* The Core Problem Continued */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <p className="text-lg md:text-xl text-slate-600 font-light leading-loose max-w-3xl text-center mb-8">
            The clinical dashboard I had designed for Breakthrough 6 gave clinicians access to treatment protocols, neuronavigation data, session documentation, and outcome tracking. It was a significant improvement over the fragmented tools they had been using. But during active treatment, all of that information lived behind a touchscreen that clinicians couldn't reach. The workaround was predictable: clinicians would either pause treatment to tap through the interface, or they would try to remember observations and document everything after the session ended. Both options introduced friction. Pausing disrupted treatment flow and extended session time. Documenting from memory after the fact introduced gaps and errors, especially for clinicians running back-to-back sessions.
          </p>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-loose max-w-3xl text-center">
            The core problem was straightforward. The interface worked well before and after treatment, but it went dark during the most clinically important window.
          </p>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <VoiceAnalyticsDashboard />
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-24 px-6 lg:px-12 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 w-full flex justify-center">
            
          </div>

        </div>
      </section>

      {/* Research and Approach */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-8">Research and Approach</h2>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-loose max-w-3xl text-center mb-8">
            I spent time observing a dozen treatment sessions to map the specific moments clinicians needed to interact with the system mid-session. The interactions fell into a narrow set of categories: logging a clinical observation, adjusting a protocol parameter, confirming a neuronavigation target, and marking timestamps for notable patient responses. These were short, discrete actions, not complex navigation tasks. That distinction mattered because it meant I wasn't designing a conversational AI interface. I was designing a command layer.
          </p>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-loose max-w-3xl text-center">
            I also documented the acoustic environment. TMS devices produce a repetitive clicking sound during pulse delivery, and clinicians often talk to patients throughout the session to check comfort and provide reassurance. Any voice system would need to distinguish intentional commands from ambient speech and conversation, in a room with consistent mechanical noise.
          </p>
        </div>
      </section>

      {/* Execution Tiers */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50 border-t border-slate-100">
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

      {/* Design Decisions */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-8">Design Decisions</h2>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-loose max-w-3xl text-center mb-8">
            I landed on a wake-word-activated command structure rather than continuous listening. Clinicians triggered the system with a short activation phrase, then issued a command from a constrained vocabulary mapped to the actions I had identified in observation. The system confirmed each command with brief audible and visual feedback on the dashboard screen, so the clinician could catch errors without stopping what they were doing.
          </p>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-loose max-w-3xl text-center mb-8">
            The constrained vocabulary was a deliberate choice over natural language processing. In a clinical setting, I prioritized reliability over flexibility. A clinician saying "mark response at left prefrontal" needed to work every time, and the cost of a misinterpretation was higher than the cost of learning a small set of specific phrases. I designed a quick-reference card for the command set and built a brief onboarding walkthrough into the first session setup flow.
          </p>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-loose max-w-3xl text-center">
            For the visual feedback layer, I kept it minimal. A small persistent status indicator showed whether voice input was active, and confirmations appeared as transient overlays that didn't obscure the neuronavigation display. The clinician's primary visual attention needed to stay on the patient and the coil positioning, not the screen.
          </p>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-8">Outcome</h2>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-loose max-w-3xl text-center mb-8">
            The voice layer shipped as part of the [confirm: version/phase] of the Impact TMS™ system. Early feedback from clinicians indicated that mid-session documentation improved noticeably, and several clinicians reported that sessions felt less interrupted. 54.02%
          </p>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-loose max-w-3xl text-center">
            This project reinforced something I think about a lot when designing for specialized professional environments: the best interface is sometimes the one that gets out of the way of the real work. The VUI wasn't flashy. It handled a narrow set of tasks with high reliability in a constrained context. But that narrowness was the design, not a limitation of it. Clinicians didn't need a voice assistant. They needed their hands back.
          </p>
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