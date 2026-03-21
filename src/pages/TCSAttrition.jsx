import React from 'react';
import { motion } from 'framer-motion';

export default function TCSAttrition() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">UX STRATEGY</p>
          <h1 className="text-4xl md:text-5xl font-light mb-12">Using Design to lower Attrition Rates at TCS</h1>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50 flex justify-center p-8">
            <img 
              src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/3da751d03_Screenshot2026-03-21at30849PM.png" 
              alt="Using Design to lower Attrition Rates at TCS"
              className="max-w-full h-auto object-contain shadow-sm rounded-md bg-white"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}