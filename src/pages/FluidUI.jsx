import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function FluidUI() {
  const [activeTab, setActiveTab] = React.useState("confidence");

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            





            

            




            
          </div>

          <div className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <iframe src="https://clinical-voice-tms-j9d133e.gamma.site" title="Clinical Voice TMS" className="w-full block" style={{ height: "calc(100vh - 150px)", minHeight: "800px" }} frameBorder="0" allow="clipboard-write" allowFullScreen></iframe>
          </div>

          <div className="mt-16 max-w-3xl">
            <h2 className="text-slate-900 mb-6 text-3xl font-medium">VUI state machine diagram</h2>
          </div>
          
          <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <iframe src="https://embed.figma.com/design/YxIBIAxlKEA5bxNFDDEwVB/Untitled?node-id=0-1&embed-host=share" title="VUI state machine diagram" className="w-full block" style={{ height: "calc(100vh - 150px)", minHeight: "800px" }} frameBorder="0" allowFullScreen></iframe>
          </div>

          <div className="mt-16 max-w-3xl">
            <h2 className="text-slate-900 mb-6 text-3xl font-medium">degradation flow &mdash; how the system gracefully moves from voice to visual to manual based on confidence and environment.</h2>
          </div>
          
          <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <iframe src="https://embed.figma.com/design/vZHG0KaF6vsgrq7E6WMzWV/degradation?node-id=0-1&embed-host=share" title="Degradation flow" className="w-full block" style={{ height: "calc(100vh - 150px)", minHeight: "800px" }} frameBorder="0" allowFullScreen></iframe>
          </div>

          <div className="mt-16 flex items-center justify-center">
            <div className="inline-flex bg-slate-100/50 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setActiveTab("confidence")}
                className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === "confidence" 
                    ? "bg-white text-slate-900 shadow-sm" 
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Confidence Threshold
              </button>
              <button
                onClick={() => setActiveTab("interaction")}
                className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === "interaction" 
                    ? "bg-white text-slate-900 shadow-sm" 
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Interaction Model
              </button>
            </div>
          </div>

          {activeTab === "confidence" ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mt-12 max-w-3xl">
                <h2 className="text-slate-900 mb-6 text-3xl font-medium">confidence threshold decision tree.</h2>
              </div>
              
              <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <iframe src="https://embed.figma.com/design/oEHWn6XzCheTpeK9pJKZGj/confidence-threshold?node-id=1-111&embed-host=share" title="Confidence threshold decision tree" className="w-full block" style={{ height: "calc(100vh - 150px)", minHeight: "800px" }} frameBorder="0" allowFullScreen></iframe>
              </div>

              <div className="mt-16 max-w-3xl">
                <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/6eae4871b_Screenshot2026-04-20at50320AM.png" alt="Confidence Threshold Dashboard" className="w-full h-auto rounded-2xl shadow-sm border border-gray-100" />
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <iframe src="https://embed.figma.com/design/QFU40Z6gtAiW3J9xbPGWPr/interaction-model-for-voice-commands.?node-id=0-1&embed-host=share" title="Interaction model for voice commands" className="w-full block" style={{ height: "calc(100vh - 150px)", minHeight: "800px" }} frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          )}

          <div className="mt-16 max-w-3xl">
            <h2 className="text-slate-900 mb-6 text-3xl font-medium">Multimodal channel architecture.</h2>
          </div>
          
          <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <iframe src="https://embed.figma.com/design/p8qc6zlskwWiQOzCOdSyCA/Multimodal-channel-architecture-%E2%80%94-Impact-TMS?node-id=0-1&embed-host=share" title="Multimodal channel architecture" className="w-full block" style={{ height: "calc(100vh - 150px)", minHeight: "800px" }} frameBorder="0" allowFullScreen></iframe>
          </div>

          <div className="mt-16 max-w-3xl">
            <h2 className="text-slate-900 mb-6 text-3xl font-medium">Intent mapping diagram.</h2>
          </div>
          
          <div className="mt-6">
            <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/0a274e285_Screenshot2026-04-20at51059AM.png" alt="Intent mapping diagram" className="w-full h-auto rounded-2xl shadow-sm border border-gray-100" />
          </div>
        </div>
      </div>
    </div>);

}