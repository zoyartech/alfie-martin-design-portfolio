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
            className="w-full flex-1 flex shadow-2xl rounded-xl overflow-hidden border border-[#eaeaea]"
          >
            <iframe 
              src="https://gamma.app/embed/fsva8k1j945yy79" 
              style={{ width: "100%", height: "100%", minHeight: "650px", border: "none" }} 
              allow="fullscreen" 
              title="Arbol"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}