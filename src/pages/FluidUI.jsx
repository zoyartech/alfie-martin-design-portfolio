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
          
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed max-w-4xl mb-12">Exploring the possibility of fluid interfaces.

          </p>

          <div className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <iframe src="https://cinch-hue-81383772.figma.site" title="Figma Prototype" className="w-full block" style={{ height: "calc(100vh - 150px)", minHeight: "800px" }} frameBorder="0" allow="clipboard-write" allowFullScreen></iframe>
          </div>

          <div className="mt-16 max-w-3xl">
            <h2 className="text-slate-900 mb-6 text-3xl font-medium">Preliminary stages ( work in progress)</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Add your notes, findings, and project details here. This area is perfect for explaining the design process, user research, and technical decisions made during the prototyping phase.
            </p>
          </div>
        </div>
      </div>
    </div>);

}