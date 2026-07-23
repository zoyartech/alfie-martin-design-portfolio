import React from 'react';
import { motion } from 'framer-motion';

export default function ThreeTests() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24 rounded-xl overflow-hidden border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-xl"
    >
      <img
        src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/dc43b0145_Screenshot2026-07-23at13442PM.png"
        alt="The three tests - If you remember nothing else, run every line through these"
        className="w-full h-auto object-contain"
      />
    </motion.div>
  );
}