import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { createPageUrl } from "@/utils";
import MobileNav from "@/components/MobileNav";

export default function DesignStrategyAI() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const carouselImages = [
  { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/44f689f48_Screenshot2026-03-01at33011AM.png", caption: "Lyra AI — Conversational Interface" },
  { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/392a37719_Screenshot2026-03-01at33056AM.png", caption: "Before & After: Rewriting the Dialogue" },
  { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/9e941d290_Screenshot2026-03-01at33101AM.png", caption: "A UI Built Around the Conversation" },
  { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/88b73509d_Screenshot2026-03-01at33109AM.png", caption: "What Changed After the Redesign" },
  { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/2c12bf53d_Screenshot2026-03-01at33116AM.png", caption: "Key Takeaways — Conversation Design of Chatbots" }];


  const prev = () => setActiveIndex((i) => (i - 1 + carouselImages.length) % carouselImages.length);
  const next = () => setActiveIndex((i) => (i + 1) % carouselImages.length);

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
              <Link to={createPageUrl("Home")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                HOME
              </Link>
              <Link to={createPageUrl("About")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                ABOUT
              </Link>
              <Link to={createPageUrl("CaseStudies")} className="text-xs tracking-[0.2em] text-black border-b border-black pb-1">
                CASE STUDIES
              </Link>
              <Link to={createPageUrl("Gallery")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                VISUALS
              </Link>
              <Link to={createPageUrl("Contact")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                CONTACT
              </Link>
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
              <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">BRAND IDENTITY & AI STRATEGY</p>
              <h2 className="text-4xl md:text-5xl font-light mb-6 max-w-4xl">Design and Strategy for AI Systems</h2>
              <p className="text-gray-500 max-w-3xl text-lg leading-relaxed">
                Bridging the gap between artificial intelligence and human experience — building design frameworks, visual systems, and strategic direction for AI-driven products that people actually trust and want to use.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">ROLE</p><p className="text-gray-700">User Experience, UXR</p></div>
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">FOCUS</p><p className="text-gray-700">AI Product Design, Brand Systems</p></div>
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">YEAR</p><p className="text-gray-700">2024 — Ongoing</p></div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-6 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">THE PROCESS</p>
            <h2 className="text-3xl font-light mb-10">How I approach AI design work</h2>
            <div className="space-y-8">
              {[
              { title: "Capability Mapping", body: "Translating the technical capabilities of an AI system into meaningful user benefits — understanding what's genuinely possible vs. what's being overpromised." },
              { title: "Failure Mode Design", body: "Designing for when things go wrong. AI systems fail in unpredictable ways. Building graceful, honest error states is as important as the ideal flow." },
              { title: "Brand Voice for AI", body: "Defining how an AI product speaks — the tone, language patterns, and personality — so interactions feel consistent, human, and on-brand." },
              { title: "Iterative Prototyping", body: "Rapidly testing interactions with real users to validate assumptions early, before the model is trained or the system is built." }].
              map((item, i) =>
              <div key={i} className="border-l-2 border-gray-300 pl-6">
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Context */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">THE CONTEXT</p>
            <h2 className="text-3xl font-light mb-6">AI is moving fast. Design is lagging behind.</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Most AI products today suffer from the same problems: opaque interfaces, broken trust, and experiences that feel cold or mechanical. The technology is extraordinary — but without thoughtful design and clear strategy, it fails to connect with the humans it's meant to serve.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              This body of work explores how design strategy can shape AI systems that feel intuitive, transparent, and genuinely valuable — from visual identity through to interaction patterns and communication frameworks.
            </p>
          </div>
        </section>

        {/* Two Column */}
        <section className="py-16 px-6 lg:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="overflow-hidden bg-gray-100">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/2c1d3af52_Anti-design-poster-by-Ekaterina-Muratova-2726375191.jpg" alt="AI Product Strategy Framework" className="w-full h-auto object-contain" />
            </div>
            <div className="flex flex-col justify-center pl-0 md:pl-8">
              <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">APPROACH</p>
              <h2 className="text-3xl font-light mb-6">Strategy before pixels</h2>
              <p className="text-gray-600 leading-relaxed mb-6">Every great AI product starts with a clear answer to one question: <em>what does this actually do for a person?</em> Strategy defines the positioning, the voice, and the design principles before a single screen is ever drawn.</p>
              <p className="text-gray-600 leading-relaxed">From there, the visual and interaction design work flows naturally — grounded in purpose rather than aesthetic trend.</p>
            </div>
          </div>
        </section>

        {/* Carousel */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-8">VISUAL WORK</p>
            <div className="relative overflow-hidden bg-gray-100 cursor-zoom-in group" onClick={() => setLightbox(true)}>
              <motion.img
                key={activeIndex}
                src={carouselImages[activeIndex].src}
                alt={carouselImages[activeIndex].caption}
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
                className="w-full h-auto object-contain" />

              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                <button onClick={prev} className="bg-white/80 hover:bg-white p-2 transition-all rounded-full"><span className="text-xl px-1">‹</span></button>
                <button onClick={next} className="bg-white/80 hover:bg-white p-2 transition-all rounded-full"><span className="text-xl px-1">›</span></button>
              </div>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {carouselImages.map((_, i) =>
                <button key={i} onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }} className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? "bg-white scale-125" : "bg-white/50"}`} />
                )}
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4 tracking-wide text-center">{carouselImages[activeIndex].caption}</p>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-16 px-6 lg:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-12">DESIGN PILLARS</p>
            <div className="grid md:grid-cols-3 gap-12">
              {[
              { number: "01", title: "Trust by Design", body: "Designing AI outputs and interactions that are legible, honest, and predictable. Users need to understand what the system is doing and why." },
              { number: "02", title: "Visual Systems", body: "Building cohesive brand and UI systems that scale across AI touchpoints — from onboarding flows to error states to generative outputs." },
              { number: "03", title: "Human-Centered Strategy", body: "Embedding user research and behavioral insight into the product strategy from day one, ensuring the AI solves real problems in real contexts." }].
              map((pillar, i) =>
              <div key={i} className="border-t border-gray-300 pt-6">
                  <span className="text-xs text-gray-400 tracking-wider">{pillar.number}</span>
                  <h3 className="text-xl font-medium mt-4 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pillar.body}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">OUTCOMES</p>
            <h2 className="text-3xl font-light mb-12">What good AI design delivers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
              { stat: "3×", label: "Faster user onboarding with clear AI explainability patterns" },
              { stat: "60%", label: "Reduction in support tickets through better AI error communication" },
              { stat: "88%", label: "User trust scores after redesigning AI output presentation" },
              { stat: "2×", label: "Increase in feature adoption with intent-driven UI flows" }].
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

      {/* Lightbox */}
      {lightbox &&
      <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setLightbox(false)}>
          <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors" onClick={() => setLightbox(false)}>
            <X className="w-8 h-8" />
          </button>
          
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 text-white hover:text-gray-300 transition-colors p-4">
            <span className="text-4xl font-light">‹</span>
          </button>

          <img src={carouselImages[activeIndex].src} alt={carouselImages[activeIndex].caption} className="max-w-[90vw] max-h-[85vh] object-contain" onClick={(e) => e.stopPropagation()} />
          
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 text-white hover:text-gray-300 transition-colors p-4">
            <span className="text-4xl font-light">›</span>
          </button>
        </div>
      }

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}