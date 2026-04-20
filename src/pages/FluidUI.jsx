import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X, Info } from "lucide-react";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import FlowDiagram from "@/components/FlowDiagram";

const annotationsData = {
  multimodal: [
    { id: 1, x: 25, y: 25, title: "Input Processing", desc: "Handles incoming voice and text streams concurrently.", reqs: "Low-latency streaming API (<200ms)", logic: "Prioritize voice if dual input detected." },
    { id: 2, x: 75, y: 50, title: "Action Router", desc: "Routes the parsed intent to the appropriate system action.", reqs: "Secure internal webhook validation", logic: "Must hold action if confidence < 0.90" }
  ],
  stateMachine: [
    { id: 1, x: 30, y: 35, title: "Listening State", desc: "System is actively recording user voice.", reqs: "Visual feedback indicator required", logic: "Auto-timeout after 7 seconds of silence." },
    { id: 2, x: 60, y: 65, title: "Processing State", desc: "Audio is being sent to NLU engine.", reqs: "WebSocket connection for stream", logic: "Display loading state if >500ms" }
  ],
  degradation: [
    { id: 1, x: 40, y: 40, title: "Voice Degraded", desc: "Noisy environment detected.", reqs: "SNR monitoring service", logic: "Switch to visual confirmation mode." },
    { id: 2, x: 70, y: 80, title: "Screen Degraded", desc: "User is not looking at the screen.", reqs: "Camera attention tracking (optional)", logic: "Force vocal read-back of actions." }
  ],
  confidence: [
    { id: 1, x: 45, y: 30, title: "Threshold Check", desc: "Evaluates if intent confidence is high enough to execute directly.", reqs: "Real-time rule engine evaluation", logic: "If > 0.95 -> Execute. If > 0.80 -> Confirm. Else -> Fallback." },
    { id: 2, x: 50, y: 75, title: "Manual Fallback", desc: "Drops the user back to standard GUI input.", reqs: "Preserve context of failed command", logic: "Log failure reason for analytics." }
  ],
  interaction: [
    { id: 1, x: 20, y: 40, title: "Voice Activation", desc: "User initiates interaction via wake word or button.", reqs: "Always-on local listener", logic: "Disable if privacy mode is ON." },
    { id: 2, x: 80, y: 60, title: "System Response", desc: "Synthesized audio feedback provided to user.", reqs: "High-quality TTS engine", logic: "Match tone and speed to user preference." }
  ]
};

const AnnotationOverlay = ({ annotations }) => {
  const [activeId, setActiveId] = useState(null);

  if (!annotations || annotations.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {annotations.map((ann) => (
        <div key={ann.id} className="absolute" style={{ left: `${ann.x}%`, top: `${ann.y}%` }}>
          <button 
            onClick={(e) => {
              e.preventDefault();
              setActiveId(activeId === ann.id ? null : ann.id);
            }}
            className={`w-8 h-8 -ml-4 -mt-4 rounded-full flex items-center justify-center shadow-lg transition-all pointer-events-auto border-2 border-white cursor-pointer relative z-20 ${activeId === ann.id ? 'bg-blue-600 text-white scale-110' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            <span className="text-sm font-bold">{ann.id}</span>
          </button>

          <AnimatePresence>
            {activeId === ann.id && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-12 left-1/2 -translate-x-1/2 w-80 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-slate-200 p-5 pointer-events-auto z-30 text-left"
              >
                <div className="flex justify-between items-start mb-4 border-b border-slate-100 pb-3">
                  <h4 className="font-semibold text-slate-900 text-lg leading-tight">{ann.title}</h4>
                  <button onClick={() => setActiveId(null)} className="text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full p-1">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-4">
                  {ann.desc && (
                    <div>
                      <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Description</div>
                      <p className="text-sm text-slate-700 leading-relaxed">{ann.desc}</p>
                    </div>
                  )}
                  {ann.reqs && (
                    <div>
                      <div className="text-[10px] uppercase tracking-widest font-bold text-blue-500 mb-1">Technical Reqs</div>
                      <p className="text-sm text-slate-700 leading-relaxed">{ann.reqs}</p>
                    </div>
                  )}
                  {ann.logic && (
                    <div>
                      <div className="text-[10px] uppercase tracking-widest font-bold text-purple-500 mb-1">Logic Constraints</div>
                      <p className="text-sm text-slate-700 leading-relaxed">{ann.logic}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default function FluidUI() {
  const [activeTab, setActiveTab] = useState("core");
  const [simEnv, setSimEnv] = useState("quiet");
  const [simAttention, setSimAttention] = useState("looking");

  const dynamicDegradationAnnotations = [];
  if (simEnv === "noisy") {
    dynamicDegradationAnnotations.push({ id: 1, x: 40, y: 40, title: "Voice Degraded", desc: "Noisy environment detected.", reqs: "SNR monitoring service", logic: "Switch to visual confirmation mode." });
  }
  if (simAttention === "distracted") {
    dynamicDegradationAnnotations.push({ id: 2, x: 70, y: 80, title: "Screen Degraded", desc: "User is not looking at the screen.", reqs: "Camera attention tracking (optional)", logic: "Force vocal read-back of actions." });
  }
  if (simEnv === "quiet" && simAttention === "looking") {
    dynamicDegradationAnnotations.push({ id: 3, x: 50, y: 50, title: "Optimal State", desc: "Clear audio and user attention detected.", reqs: "Standard thresholds met", logic: "Execute standard multimodal flow." });
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 pt-32 pb-24 px-6 lg:px-12 font-sans flex flex-col xl:flex-row xl:justify-center items-start">
      <div className="w-full max-w-5xl mx-auto xl:mx-0">
        <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <div className="mb-12 flex flex-wrap items-center gap-2">
          <div className="inline-flex bg-slate-100/50 p-1 rounded-xl border border-slate-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab("core")}
              className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                activeTab === "core" 
                  ? "bg-white text-slate-900 shadow-sm" 
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Core Architecture
            </button>
            <button
              onClick={() => setActiveTab("state")}
              className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                activeTab === "state" 
                  ? "bg-white text-slate-900 shadow-sm" 
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              State Machines
            </button>
            <button
              onClick={() => setActiveTab("logic")}
              className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                activeTab === "logic" 
                  ? "bg-white text-slate-900 shadow-sm" 
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Decision Logic
            </button>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-8 mb-12">
            <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/c5bd2baed_handbphone.png" alt="Hand holding phone" className="w-full h-auto object-contain max-h-[600px] object-center" />
            <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/871318030_handsvui.png" alt="Hand interacting with VUI" className="w-full h-auto object-contain max-h-[600px] object-center" />
          </div>

          <h1 className="text-5xl font-light tracking-tight mb-6 font-serif text-slate-900">Designing VUI</h1>
          
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed max-w-4xl mb-12">
            Exploring fluid interfaces.
          </p>

          <div className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mb-12 font-light space-y-6">
            <p>
              In my opinion, conversational design is similar to choreography. You're designing a dance between a human and a machine, where neither one fully controls the music. My job is to make the machine a good enough dance partner that the human never feels stepped on.
            </p>
            <p>
              Every conversational experience, regardless of modality, has the same underlying structure in simple terms:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The user has intent — they want something done, answered</li>
              <li>The system must recognize that intent — through voice, text, gesture, or context.</li>
              <li>The system responds — with words, actions, visuals, or silence.</li>
              <li>The conversation advances or repairs — the dance continues, or someone stumbles and recovers.</li>
            </ul>
            <p>
              My job is to juxtapose all four of these moments across every path a conversation can take, the happy paths, the confused paths, the frustrated paths, and the paths nobody predicted.
            </p>
          </div>

          <div className="w-full mb-12 rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-white">
            <iframe src="https://beam-pear-41561282.figma.site" className="w-full" style={{ height: "600px" }} title="Fluid UI Prototype" allowFullScreen></iframe>
          </div>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mb-12 font-light">
            My approach is to design for error states first. In conversation, misunderstanding is the norm. Around 30-40% of conversational turns involve some form of repair, clarification, or renegotiation. Designing "The happy path" dialogue is roughly a third of the work. The rest, and most important, is figuring out what happens when the system doesn't understand, when the user changes their mind mid-task, when context shifts, or when confidence is low.
          </p>



          {activeTab === "core" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-16">
              <div className="flex justify-center w-full">
                <iframe src="https://media.base44.com/files/public/6974e154f708f4918a2b8d02/6339793b4_AI-conversational-design.pdf" style={{ width: "100%", height: "700px" }} title="AI conversational design" className="rounded-2xl border border-gray-100 shadow-sm"></iframe>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/52f3df93e_Screenshot2026-04-20at50320AM.png" alt="Session View Dashboard" className="w-full h-auto rounded-2xl shadow-sm border border-gray-100" />
                <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/9d347bfd1_Screenshot2026-04-20at51059AM.png" alt="System Actions Table" className="w-full h-auto rounded-2xl shadow-sm border border-gray-100" />
              </div>

              <div>
                <h2 className="text-slate-900 mb-6 text-3xl font-medium">Multimodal channel architecture.</h2>
                <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-[800px]">
                  <FlowDiagram 
                    defaultNodes={[
                      { id: '1', type: 'input', data: { label: 'Voice Input' }, position: { x: 150, y: 50 } },
                      { id: '2', type: 'input', data: { label: 'Text/GUI Input' }, position: { x: 450, y: 50 } },
                      { id: '3', data: { label: 'Input Processing' }, position: { x: 300, y: 150 } },
                      { id: '4', data: { label: 'Action Router' }, position: { x: 300, y: 250 } },
                      { id: '5', type: 'output', data: { label: 'System Action' }, position: { x: 300, y: 350 } },
                    ]}
                    defaultEdges={[
                      { id: 'e1-3', source: '1', target: '3', animated: true },
                      { id: 'e2-3', source: '2', target: '3' },
                      { id: 'e3-4', source: '3', target: '4' },
                      { id: 'e4-5', source: '4', target: '5' },
                    ]}
                  />
                  <AnnotationOverlay annotations={annotationsData.multimodal} />
                </div>
              </div>

              <div>
                <h2 className="text-slate-900 mb-6 text-3xl font-medium">Intent mapping diagram.</h2>
                <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-[600px]">
                  <FlowDiagram 
                    defaultNodes={[
                      { id: '1', type: 'input', data: { label: 'Raw Input String' }, position: { x: 300, y: 50 } },
                      { id: '2', data: { label: 'NLP Parsing' }, position: { x: 300, y: 150 } },
                      { id: '3', data: { label: 'Entity Extraction' }, position: { x: 150, y: 250 } },
                      { id: '4', data: { label: 'Intent Classification' }, position: { x: 450, y: 250 } },
                      { id: '5', type: 'output', data: { label: 'Structured Payload' }, position: { x: 300, y: 350 } },
                    ]}
                    defaultEdges={[
                      { id: 'e1-2', source: '1', target: '2' },
                      { id: 'e2-3', source: '2', target: '3' },
                      { id: 'e2-4', source: '2', target: '4' },
                      { id: 'e3-5', source: '3', target: '5' },
                      { id: 'e4-5', source: '4', target: '5' },
                    ]}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "state" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-16">
              <div>
                <h2 className="text-slate-900 mb-6 text-3xl font-medium">VUI state machine diagram</h2>
                <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-[800px]">
                  <FlowDiagram 
                    defaultNodes={[
                      { id: '1', type: 'input', data: { label: 'Idle / Standby' }, position: { x: 300, y: 50 } },
                      { id: '2', data: { label: 'Listening (Voice Wake)' }, position: { x: 300, y: 150 } },
                      { id: '3', data: { label: 'Processing (ASR & NLU)' }, position: { x: 300, y: 250 } },
                      { id: '4', data: { label: 'Action Router' }, position: { x: 300, y: 350 } },
                      { id: '5', type: 'output', data: { label: 'Execute Command' }, position: { x: 100, y: 450 } },
                      { id: '6', type: 'output', data: { label: 'Clarification Prompt' }, position: { x: 500, y: 450 } },
                    ]}
                    defaultEdges={[
                      { id: 'e1-2', source: '1', target: '2' },
                      { id: 'e2-3', source: '2', target: '3', animated: true },
                      { id: 'e3-4', source: '3', target: '4' },
                      { id: 'e4-5', source: '4', target: '5', label: 'Confidence > 90%' },
                      { id: 'e4-6', source: '4', target: '6', label: 'Confidence < 90%' },
                      { id: 'e6-2', source: '6', target: '2' },
                    ]}
                  />
                  <AnnotationOverlay annotations={annotationsData.stateMachine} />
                </div>
              </div>

              <div>
                <h2 className="text-slate-900 mb-6 text-3xl font-medium">degradation flow &mdash; how the system gracefully moves from voice to visual to manual based on confidence and environment.</h2>
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
                  <h3 className="font-semibold text-slate-900 mb-4">Environment Simulator</h3>
                  <div className="flex flex-wrap gap-6">
                    <div>
                      <label className="text-xs font-medium text-slate-500 uppercase tracking-wider block mb-2">Environment Noise</label>
                      <div className="flex bg-white border border-slate-200 rounded-lg p-1">
                        <button onClick={() => setSimEnv("quiet")} className={`px-4 py-1.5 text-sm rounded-md transition-colors ${simEnv === 'quiet' ? 'bg-blue-500 text-white' : 'text-slate-600 hover:bg-slate-50'}`}>Quiet</button>
                        <button onClick={() => setSimEnv("noisy")} className={`px-4 py-1.5 text-sm rounded-md transition-colors ${simEnv === 'noisy' ? 'bg-blue-500 text-white' : 'text-slate-600 hover:bg-slate-50'}`}>Noisy</button>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-500 uppercase tracking-wider block mb-2">User Attention</label>
                      <div className="flex bg-white border border-slate-200 rounded-lg p-1">
                        <button onClick={() => setSimAttention("looking")} className={`px-4 py-1.5 text-sm rounded-md transition-colors ${simAttention === 'looking' ? 'bg-blue-500 text-white' : 'text-slate-600 hover:bg-slate-50'}`}>On Screen</button>
                        <button onClick={() => setSimAttention("distracted")} className={`px-4 py-1.5 text-sm rounded-md transition-colors ${simAttention === 'distracted' ? 'bg-blue-500 text-white' : 'text-slate-600 hover:bg-slate-50'}`}>Distracted</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Active Degradation State:</h4>
                    {simEnv === 'quiet' && simAttention === 'looking' && (
                      <p className="text-slate-600 text-sm flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Optimal Flow: Voice input with visual confirmation.</p>
                    )}
                    {simEnv === 'noisy' && simAttention === 'looking' && (
                      <p className="text-slate-600 text-sm flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> Voice Degraded: Switching to tap-to-select GUI inputs.</p>
                    )}
                    {simEnv === 'quiet' && simAttention === 'distracted' && (
                      <p className="text-slate-600 text-sm flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> Screen Degraded: Forcing vocal read-back of actions for confirmation.</p>
                    )}
                    {simEnv === 'noisy' && simAttention === 'distracted' && (
                      <p className="text-slate-600 text-sm flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span> Full Degradation: Pausing execution. Asking user to look at screen or move to a quiet area.</p>
                    )}
                  </div>
                </div>

                <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-[800px]">
                  <FlowDiagram 
                    defaultNodes={[
                      { id: '1', type: 'input', data: { label: 'Input Detected' }, position: { x: 300, y: 50 } },
                      { id: '2', data: { label: 'Environmental SNR Check' }, position: { x: 300, y: 150 } },
                      { id: '3', data: { label: 'Attention Tracker' }, position: { x: 300, y: 250 } },
                      { id: '4', type: 'output', data: { label: 'Standard Voice/Visual Flow' }, position: { x: 100, y: 350 } },
                      { id: '5', type: 'output', data: { label: 'Visual Fallback (No Voice)' }, position: { x: 300, y: 350 } },
                      { id: '6', type: 'output', data: { label: 'Voice Fallback (No Screen)' }, position: { x: 500, y: 350 } },
                    ]}
                    defaultEdges={[
                      { id: 'e1-2', source: '1', target: '2' },
                      { id: 'e2-3', source: '2', target: '3' },
                      { id: 'e3-4', source: '3', target: '4', label: 'Good SNR & Attn' },
                      { id: 'e3-5', source: '3', target: '5', label: 'Poor SNR' },
                      { id: 'e3-6', source: '3', target: '6', label: 'No Attention' },
                    ]}
                  />
                  <AnnotationOverlay annotations={dynamicDegradationAnnotations} />
                </div>
              </div>
            </div>
          )}

          {activeTab === "logic" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-16">
              <div>
                <h2 className="text-slate-900 mb-6 text-3xl font-medium">confidence threshold decision tree.</h2>
                <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-[800px]">
                  <FlowDiagram 
                    defaultNodes={[
                      { id: '1', type: 'input', data: { label: 'Intent Parsed' }, position: { x: 300, y: 50 } },
                      { id: '2', data: { label: 'Threshold Check' }, position: { x: 300, y: 150 } },
                      { id: '3', type: 'output', data: { label: 'Direct Execution' }, position: { x: 100, y: 250 } },
                      { id: '4', data: { label: 'Confirmation Required' }, position: { x: 300, y: 250 } },
                      { id: '5', type: 'output', data: { label: 'Manual Fallback' }, position: { x: 500, y: 250 } },
                    ]}
                    defaultEdges={[
                      { id: 'e1-2', source: '1', target: '2' },
                      { id: 'e2-3', source: '2', target: '3', label: '> 0.95' },
                      { id: 'e2-4', source: '2', target: '4', label: '0.80 - 0.95' },
                      { id: 'e2-5', source: '2', target: '5', label: '< 0.80' },
                    ]}
                  />
                  <AnnotationOverlay annotations={annotationsData.confidence} />
                </div>
                <div className="mt-8">
                  <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/6eae4871b_Screenshot2026-04-20at50320AM.png" alt="Confidence Threshold Dashboard" className="w-full h-auto rounded-2xl shadow-sm border border-gray-100" />
                </div>
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/5375f828d_hand3.png" alt="Hand holding phone 1" className="w-full h-auto object-contain max-h-[600px] object-center" />
                  <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/02a1fb40b_hand5.png" alt="Hand holding phone 2" className="w-full h-auto object-contain max-h-[600px] object-center" />
                </div>
              </div>

              <div>
                <h2 className="text-slate-900 mb-6 text-3xl font-medium">Interaction model for voice commands</h2>
                <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-[800px]">
                  <FlowDiagram 
                    defaultNodes={[
                      { id: '1', type: 'input', data: { label: 'User Command' }, position: { x: 300, y: 50 } },
                      { id: '2', data: { label: 'System Listener' }, position: { x: 300, y: 150 } },
                      { id: '3', data: { label: 'TTS Generator' }, position: { x: 150, y: 250 } },
                      { id: '4', data: { label: 'GUI Updater' }, position: { x: 450, y: 250 } },
                    ]}
                    defaultEdges={[
                      { id: 'e1-2', source: '1', target: '2' },
                      { id: 'e2-3', source: '2', target: '3' },
                      { id: 'e2-4', source: '2', target: '4' },
                    ]}
                  />
                  <AnnotationOverlay annotations={annotationsData.interaction} />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Floating Glossary Sidebar */}
      <div className="w-full xl:w-80 shrink-0 mt-16 xl:mt-0 xl:ml-12 xl:sticky xl:top-32 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 overflow-y-auto xl:max-h-[calc(100vh-160px)] self-start">
        <h3 className="font-semibold text-slate-900 mb-6 flex items-center gap-2 text-lg">
          <Info className="w-5 h-5 text-blue-500" />
          Glossary
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Entity</h4>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">A recognized real-world object or concept within user input (e.g., dates, locations, names).</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Confidence Score</h4>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">A probabilistic measure indicating how certain a model is about its classification or generated output.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Latency</h4>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">The time delay between a user's input and the system's response. Critical for conversational interfaces.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Guardrails</h4>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">Hardcoded rules or secondary models designed to constrain AI behavior, preventing unsafe or off-topic outputs.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">RAG (Retrieval-Augmented Generation)</h4>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">Enhancing LLM responses by dynamically retrieving relevant facts from an external knowledge base before generating text.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Recall</h4>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">The fraction of relevant instances that were actually retrieved or identified by the model.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Precision / Recall Tradeoff</h4>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">The balance between being strictly accurate (precision) and capturing all possible positive matches (recall).</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">F1 Score</h4>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">The harmonic mean of precision and recall, often used as a single metric to evaluate overall classification accuracy.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Multimodal</h4>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">Systems capable of processing and understanding multiple types of input concurrently, such as text, voice, vision, and touch.</p>
          </div>
        </div>
      </div>

    </div>
  );
}