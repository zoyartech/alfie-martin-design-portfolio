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
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Header */}
      <section className="pt-32 pb-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-500 mb-4 text-xs font-bold tracking-[0.3em]">PRESENTATION</p>
            <h1 className="text-4xl md:text-5xl font-light mb-6">Arbol</h1>
          </motion.div>
        </div>
      </section>

      {/* Embed Area */}
      <section className="pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex justify-center">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex justify-center"
          >
            <iframe 
              src="https://gamma.app/embed/fsva8k1j945yy79" 
              style={{ width: "700px", maxWidth: "100%", height: "450px", borderRadius: "12px", border: "1px solid #eaeaea", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }} 
              allow="fullscreen" 
              title="Arbol"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}