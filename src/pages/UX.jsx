import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";

export default function UX() {
  useEffect(() => {
    base44.analytics.track({
      eventName: "viewed_ux_page",
      properties: { page: "UX" }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            
            <p className="text-slate-500 mb-4 text-xs font-bold tracking-[0.3em]">DISCIPLINE</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6">No Experience isnt </h1>
            


            
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Placeholder for UX projects - can be filled in later */}
            <div className="aspect-video bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
              <p className="text-slate-400 font-medium">UX Project 1</p>
            </div>
            <div className="aspect-video bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
              <p className="text-slate-400 font-medium">UX Project 2</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>);

}