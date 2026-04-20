import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function FluidUI() {
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
        </div>
      </div>
    </div>);

}