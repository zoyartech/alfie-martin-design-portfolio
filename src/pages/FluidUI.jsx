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
            <div className="w-full block hidden">
              <div
                className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full cursor-pointer shadow-lg flex items-center justify-center overflow-hidden group">
                 <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Fluid Size</span>
              </div>
              <p className="mt-12 text-sm font-sans text-slate-500 text-center">Static layout element</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-12 flex flex-col items-center justify-center min-h-[400px] shadow-sm">
              <div
                className="w-32 h-32 bg-gradient-to-tr from-pink-500 to-violet-500 rounded-2xl shadow-lg cursor-pointer" />
              
              <p className="mt-8 text-sm font-sans text-slate-500 text-center">Static visual element</p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm overflow-hidden">
            <iframe
              src="https://claude.site/public/artifacts/fa518e5a-0cdf-440e-9036-1312b85888f9/embed"
              title="vui-onboarding.jsx"
              width="100%"
              height="600"
              frameBorder="0"
              allow="clipboard-write"
              allowFullScreen />
            
          </div>
        </div>
      </div>
    </div>);

}