import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";

export default function ArborPres() {
  useEffect(() => {
    base44.analytics.track({
      eventName: "viewed_arbor_pres",
      properties: { page: "arbor-pres" }
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col">
      <section className="pt-28 md:pt-32 pb-16 px-4 md:px-6 lg:px-12 flex-1 flex flex-col items-center">
        <div className="w-full max-w-7xl flex flex-col flex-1 h-full min-h-[75vh]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-slate-500 mb-2 text-xs font-bold tracking-[0.3em]">PRESENTATION</p>
            <h1 className="text-4xl md:text-5xl font-light">Arbol</h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex flex-col gap-16"
          >
            <div className="w-full h-[60vh] flex flex-col items-center justify-center bg-white shadow-2xl rounded-xl border border-[#eaeaea] p-8 text-center">
              <div className="w-20 h-20 bg-[#0acf83]/10 text-[#0acf83] rounded-2xl flex items-center justify-center mb-6">
                <svg width="40" height="40" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 28.5C24.2467 28.5 28.5 24.2467 28.5 19C28.5 13.7533 24.2467 9.5 19 9.5C13.7533 9.5 9.5 13.7533 9.5 19C9.5 24.2467 13.7533 28.5 19 28.5Z" fill="#1ABCFE"/>
                  <path d="M9.5 28.5C9.5 23.2533 13.7533 19 19 19H28.5V28.5C28.5 33.7467 24.2467 38 19 38H9.5V28.5Z" fill="#0ACF83"/>
                  <path d="M19 47.5C24.2467 47.5 28.5 43.2467 28.5 38H19C13.7533 38 9.5 42.2467 9.5 47.5Z" fill="#FF7262"/>
                  <path d="M9.5 9.5C9.5 4.25329 13.7533 0 19 0H28.5V9.5C28.5 14.7467 24.2467 19 19 19H9.5V9.5Z" fill="#F24E1E"/>
                  <path d="M9.5 47.5C9.5 42.2533 13.7533 38 19 38V57C13.7533 57 9.5 52.7467 9.5 47.5Z" fill="#A259FF"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Interactive Figma Prototype</h3>
              <p className="text-slate-500 max-w-md mb-8">
                Figma Make apps cannot be embedded directly due to Figma's security policies. 
                Click below to open the interactive dashboard in a new tab.
              </p>
              <a 
                href="https://www.figma.com/make/UvcMiG9PATVg0LHrn1f76L/Climate-Risk-Dashboard-Application?t=vMVdc59Qn7cFLCpy-1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Open in Figma
              </a>
            </div>

            <div className="w-full h-[85vh] shadow-2xl rounded-xl overflow-hidden border border-[#eaeaea]">
              <iframe 
                src="https://gamma.app/embed/fsva8k1j945yy79" 
                style={{ width: "100%", height: "100%", border: "none" }} 
                allowFullScreen 
                title="Arbol"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}