import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";

const writingProjects = [
  {
    title: "Examples of Growth Design Experiments",
    category: "UX Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    link: "ExamplesOfGrowthDesignExperiments",
    summary: "A comprehensive reference for product and growth designers running experiments across the user lifecycle.",
  },
  {
    title: "Intro to Designing Experiments",
    category: "UX Strategy",
    image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d99a30566_Screenshot2026-03-25at50653PM.png",
    link: "IntroToDesigningExperiments",
    summary: "The DTC SaaS Growth Design Experimentation Playbook. A guide for designers interested in roles on growth teams.",
  }
];

export default function Writing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">CONTENT</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6">Writing</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="pt-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {writingProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group"
              >
                <Link to={createPageUrl(project.link)} className="block">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-xl mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="text-xs font-mono tracking-widest text-blue-600 uppercase mb-2">{project.category}</p>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {project.summary}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}