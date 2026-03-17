import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";
import MobileNav from "@/components/MobileNav";

export default function TCSMarathon() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="text-sm tracking-[0.3em] font-medium">
              ALFIE MARTIN
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <Link to={createPageUrl("Home")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">HOME</Link>
              <Link to={createPageUrl("About")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">ABOUT</Link>
              <Link to={createPageUrl("CaseStudies")} className="text-xs tracking-[0.2em] text-black border-b border-black pb-1">CASE STUDIES</Link>
              <Link to={createPageUrl("Contact")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">CONTACT</Link>
            </div>
            <MobileNav activePage="CaseStudies" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
            <Link to={createPageUrl("CaseStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                <ArrowLeft className="w-4 h-4" /> BACK TO CASE STUDIES
            </Link>
        </div>

        {/* Hero */}
        <section className="pb-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">PRODUCT DESIGN</p>
              <h2 className="text-4xl md:text-5xl font-light mb-6 max-w-4xl">TCS NYC Marathon App</h2>
              <p className="text-gray-500 max-w-3xl text-lg leading-relaxed">
                Redesigned the official TCS NYC Marathon tracking app, improving the real-time runner tracking experience for over 1M spectators and participants.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">ROLE</p><p className="text-gray-700">Lead Product Designer</p></div>
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">CLIENT</p><p className="text-gray-700">TCS / NYRR</p></div>
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">YEAR</p><p className="text-gray-700">2023</p></div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-8 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/4ddd293aa_BLUEMAP.png" alt="TCS Marathon App" className="w-full h-auto object-cover rounded-lg aspect-[21/9]" />
            </div>
        </section>

        {/* Process */}
        <section className="py-16 px-6 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">THE CHALLENGE</p>
            <h2 className="text-3xl font-light mb-6">Real-time data at massive scale</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Traditional marathon tracking relied on scattered timing mats and static checkpoints. Families missed their runners and the experience felt fragmented. The goal was to build a system that brought people closer together through better tracking.
            </p>
            <h2 className="text-2xl font-light mt-12 mb-6">The Solution</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We focused on intelligent map zoom, multi-runner color coding, live camera feeds, and personalized spectator itineraries to ensure no one missed their loved ones crossing the finish line.
            </p>
          </div>
        </section>

        {/* Gallery Images */}
        <section className="py-16 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/a23ccbea0_Screenshot2026-02-13at114049AM.png" alt="App Overview" className="w-full h-auto rounded-xl shadow-sm object-cover" />
              <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/c303508d6_2screens.png" alt="App Screens" className="w-full h-auto rounded-xl shadow-sm object-cover" />
              
              <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/3f043b281_BLUEMAP.png" alt="Map View" className="w-full h-auto rounded-xl shadow-sm object-cover" />
              <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/28b3bc06e_COIRUCJ.png" alt="TCS Logo" className="w-full h-auto rounded-xl shadow-sm object-cover" />
              
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 px-6 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">OUTCOMES</p>
            <h2 className="text-3xl font-light mb-12">Impact & Metrics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
              { stat: "1M+", label: "App Downloads" },
              { stat: "+0.8★", label: "Rating Increase in App Store" },
              { stat: "42%", label: "Engagement Lift" },
              { stat: "★", label: "Webby Award Winner" }].
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

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>);

}