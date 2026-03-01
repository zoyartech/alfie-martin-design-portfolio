import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { caseStudies } from "@/components/caseStudies/caseStudiesData";
import MobileNav from "@/components/MobileNav";

export default function CaseStudyDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Case study not found.</p>
          <Link to={createPageUrl("Design")} className="text-sm underline">Back to Design</Link>
        </div>
      </div>
    );
  }

  const currentIndex = caseStudies.findIndex((s) => s.id === id);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="text-sm tracking-[0.3em] font-semibold hover:text-[#8B7355] transition-colors">
              ALFIE MARTIN
            </Link>
            <div className="hidden md:flex items-center gap-10">
              <Link to={createPageUrl("Home")} className="text-xs tracking-[0.15em] text-gray-600 hover:text-black transition-colors">HOME</Link>
              <Link to={createPageUrl("About")} className="text-xs tracking-[0.15em] text-gray-600 hover:text-black transition-colors">ABOUT</Link>
              <Link to={createPageUrl("Design")} className="text-xs tracking-[0.15em] text-black border-b border-black pb-0.5">DESIGN</Link>
              <Link to={createPageUrl("Contact")} className="text-xs tracking-[0.15em] border border-black px-5 py-2 hover:bg-black hover:text-white transition-all">CONTACT</Link>
            </div>
            <MobileNav activePage="Design" />
          </div>
        </div>
      </nav>

      {/* Back */}
      <section className="pt-32 pb-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            to={createPageUrl("Design")}
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO DESIGN
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-6 mb-6">
              <img src={study.logo} alt={study.client} className="h-8 w-auto object-contain grayscale" />
              <span className="text-xs tracking-[0.2em] text-gray-400">{study.category.toUpperCase()}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light mb-6 max-w-4xl">{study.title}</h1>
            <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">{study.description}</p>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-100 max-w-xl">
              <div>
                <p className="text-xs tracking-[0.2em] text-gray-400 mb-1">CLIENT</p>
                <p className="text-gray-700 text-sm">{study.client}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-gray-400 mb-1">CATEGORY</p>
                <p className="text-gray-700 text-sm">{study.category}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-gray-400 mb-1">YEAR</p>
                <p className="text-gray-700 text-sm">{study.year}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden bg-gray-100"
          >
            <img src={study.heroImage} alt={study.title} className="w-full h-[50vh] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">OVERVIEW</p>
            <p className="text-lg text-gray-700 leading-relaxed">{study.overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Problem / Approach / Solution */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {[
            { label: "THE PROBLEM", text: study.problem },
            { label: "THE APPROACH", text: study.approach },
            { label: "THE SOLUTION", text: study.solution },
          ].map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-l-2 border-gray-200 pl-8"
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">{block.label}</p>
              <p className="text-gray-700 leading-relaxed text-lg">{block.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-10">RESULTS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {study.results.map((r, i) => (
                <div key={i} className="border-t-2 border-black pt-6">
                  <p className="text-4xl font-light mb-2">{r.stat}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="py-16 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">NEXT CASE STUDY</p>
          <Link
            to={createPageUrl(`CaseStudyDetail?id=${nextStudy.id}`)}
            className="group flex items-center justify-between py-8 border-t border-gray-100 hover:bg-gray-50 -mx-6 lg:-mx-12 px-6 lg:px-12 transition-colors"
          >
            <div>
              <p className="text-gray-400 text-sm mb-2">{nextStudy.client}</p>
              <h3 className="text-2xl md:text-3xl font-light group-hover:text-[#8B7355] transition-colors">{nextStudy.title}</h3>
            </div>
            <ArrowLeft className="w-6 h-6 rotate-180 text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}