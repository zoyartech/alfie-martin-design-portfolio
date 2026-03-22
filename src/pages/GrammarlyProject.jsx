import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";
import MobileNav from "@/components/MobileNav";

export default function GrammarlyProject() {
  return (
    <div className="min-h-screen bg-white">


      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
            <Link to={createPageUrl("CaseStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                <ArrowLeft className="w-4 h-4" /> BACK TO CASE STUDIES
            </Link>
        </div>

        <section className="pb-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">UX CONTENT STRATEGY</p>
              <h2 className="text-4xl md:text-5xl font-light mb-6 max-w-4xl">Redesigning AI Writing Feedback</h2>
              <p className="text-gray-500 max-w-3xl text-lg leading-relaxed">
                Transformed how Grammarly surfaces AI-powered suggestions — increasing user trust and feature adoption through clearer explainability patterns and a cohesive visual system.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">ROLE</p><p className="text-gray-700">UX Content Strategist</p></div>
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">CLIENT</p><p className="text-gray-700">Grammarly</p></div>
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">YEAR</p><p className="text-gray-700">2023</p></div>
            </div>
          </div>
        </section>

        <section className="py-8 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80" alt="Grammarly Feedback Project" className="w-full h-auto object-cover rounded-lg aspect-[21/9]" />
            </div>
        </section>

        <section className="py-16 px-6 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">THE CHALLENGE</p>
            <h2 className="text-3xl font-light mb-6">Arbitrary suggestions limit trust</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Grammarly's AI suggestions were powerful but poorly communicated. Users didn't understand why suggestions were made, leading to low adoption. We redesigned the suggestion card system with layered explainability to focus on tone, clarity, and progressive disclosure of AI reasoning.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">OUTCOMES</p>
            <h2 className="text-3xl font-light mb-12">Impact & Metrics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
              { stat: "3×", label: "Increase in suggestion acceptance rate" },
              { stat: "60%", label: "Reduction in support tickets" },
              { stat: "88%", label: "User trust score" },
              { stat: "2×", label: "Feature adoption" }].
              map((item, i) =>
              <div key={i} className="border-t-2 border-black pt-6">
                  <p className="text-4xl font-light mb-2">{item.stat}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.label}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}