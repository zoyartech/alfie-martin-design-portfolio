import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X, Info } from "lucide-react";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 pt-32 pb-24 px-6 lg:px-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <div>
          <h1 className="text-5xl font-light tracking-tight mb-6 font-serif text-slate-900">Fluid UI</h1>
          
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed max-w-4xl mb-12">
            Exploring fluid interfaces.
          </p>

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          </div>

          {activeTab === "core" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-16">
              <div className="flex justify-center w-full">
                <iframe src="https://media.base44.com/files/public/6974e154f708f4918a2b8d02/6339793b4_AI-conversational-design.pdf" style={{ width: "100%", height: "700px" }} title="AI conversational design" className="rounded-2xl border border-gray-100 shadow-sm"></iframe>
              </div>

              <div>
                <h2 className="text-slate-900 mb-6 text-3xl font-medium">Multimodal channel architecture.</h2>
                <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <iframe src="https://embed.figma.com/design/p8qc6zlskwWiQOzCOdSyCA/Multimodal-channel-architecture-%E2%80%94-Impact-TMS?node-id=0-1&embed-host=share" title="Multimodal channel architecture" className="w-full block" style={{ height: "calc(100vh - 150px)", minHeight: "800px" }} frameBorder="0" allowFullScreen></iframe>
                  <AnnotationOverlay annotations={annotationsData.multimodal} />
                </div>
              </div>

              <div>
                <h2 className="text-slate-900 mb-6 text-3xl font-medium">Intent mapping diagram.</h2>
                <div className="">
                  <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/0a274e285_Screenshot2026-04-20at51059AM.png" alt="Intent mapping diagram" className="w-full h-auto rounded-2xl shadow-sm border border-gray-100" />
                </div>
              </div>
            </div>
          )}

          {activeTab === "state" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-16">
              <div>
                <h2 className="text-slate-900 mb-6 text-3xl font-medium">VUI state machine diagram</h2>
                <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <iframe src="https://embed.figma.com/design/YxIBIAxlKEA5bxNFDDEwVB/Untitled?node-id=0-1&embed-host=share" title="VUI state machine diagram" className="w-full block" style={{ height: "calc(100vh - 150px)", minHeight: "800px" }} frameBorder="0" allowFullScreen></iframe>
                  <AnnotationOverlay annotations={annotationsData.stateMachine} />
                </div>
              </div>

              <div>
                <h2 className="text-slate-900 mb-6 text-3xl font-medium">degradation flow &mdash; how the system gracefully moves from voice to visual to manual based on confidence and environment.</h2>
                <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <iframe src="https://embed.figma.com/design/vZHG0KaF6vsgrq7E6WMzWV/degradation?node-id=0-1&embed-host=share" title="Degradation flow" className="w-full block" style={{ height: "calc(100vh - 150px)", minHeight: "800px" }} frameBorder="0" allowFullScreen></iframe>
                  <AnnotationOverlay annotations={annotationsData.degradation} />
                </div>
              </div>
            </div>
          )}

          {activeTab === "logic" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-16">
              <div>
                <h2 className="text-slate-900 mb-6 text-3xl font-medium">confidence threshold decision tree.</h2>
                <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <iframe src="https://embed.figma.com/design/oEHWn6XzCheTpeK9pJKZGj/confidence-threshold?node-id=1-111&embed-host=share" title="Confidence threshold decision tree" className="w-full block" style={{ height: "calc(100vh - 150px)", minHeight: "800px" }} frameBorder="0" allowFullScreen></iframe>
                  <AnnotationOverlay annotations={annotationsData.confidence} />
                </div>
                <div className="mt-8">
                  <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/6eae4871b_Screenshot2026-04-20at50320AM.png" alt="Confidence Threshold Dashboard" className="w-full h-auto rounded-2xl shadow-sm border border-gray-100" />
                </div>
              </div>

              <div>
                <h2 className="text-slate-900 mb-6 text-3xl font-medium">Interaction model for voice commands</h2>
                <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <iframe src="https://embed.figma.com/design/QFU40Z6gtAiW3J9xbPGWPr/interaction-model-for-voice-commands.?node-id=0-1&embed-host=share" title="Interaction model for voice commands" className="w-full block" style={{ height: "calc(100vh - 150px)", minHeight: "800px" }} frameBorder="0" allowFullScreen></iframe>
                  <AnnotationOverlay annotations={annotationsData.interaction} />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}