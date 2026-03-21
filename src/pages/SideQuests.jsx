import React from "react";
import { motion } from "framer-motion";

export default function SideQuests() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-8">EXPLORATION</p>
          <h1 className="text-4xl md:text-6xl font-light mb-12 max-w-4xl">
            Side Quests
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 mb-12 max-w-2xl">
            A collection of personal projects, experiments, and creative explorations.
          </p>
        </motion.div>
      </div>
    </div>
  );
}