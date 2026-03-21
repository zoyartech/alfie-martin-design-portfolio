import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import MobileNav from "@/components/MobileNav";
import FilterableGallery from "@/components/design/FilterableGallery";
import DesignTestimonials from "@/components/design/DesignTestimonials";
import ConsultationForm from "@/components/design/ConsultationForm";

const galleryItems = [
{ id: 1, title: "Ethereal Brand Identity", category: "Branding", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", year: "2024" },
{ id: 2, title: "Minimal Packaging Design", category: "Packaging", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80", year: "2024" },
{ id: 3, title: "Architectural Photography", category: "Art Direction", image: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=1200&q=80", year: "2023" },
{ id: 4, title: "Digital Interface Design", category: "UI/UX", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80", year: "2023" },
{ id: 5, title: "Editorial Layout", category: "Print", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80", year: "2023" },
{ id: 6, title: "Abstract Compositions", category: "Art Direction", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&q=80", year: "2023" },
{ id: 7, title: "Luxury Brand Campaign", category: "Branding", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80", year: "2022" },
{ id: 8, title: "Product Photography", category: "Photography", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80", year: "2022" },
{ id: 9, title: "Web Experience Design", category: "UI/UX", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80", year: "2022" },
{ id: 10, title: "Fashion Editorial", category: "Art Direction", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80", year: "2022" },
{ id: 11, title: "Typeface Design", category: "Typography", image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=1200&q=80", year: "2021" },
{ id: 12, title: "Environmental Graphics", category: "Spatial Design", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80", year: "2021" }];


const visualCategories = ["All", "Branding", "Art Direction", "UI/UX", "Print"];

const tabs = ["Work", "AI Design", "Visuals"];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("Work");
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" ?
  galleryItems :
  galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="text-sm tracking-[0.3em] font-semibold hover:text-[#8B7355] transition-colors duration-300">
              ALFIE MARTIN
            </Link>
            <div className="hidden md:flex items-center gap-10">
              <Link to={createPageUrl("Home")} className="relative text-xs tracking-[0.15em] font-medium text-gray-600 hover:text-black transition-colors group">
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to={createPageUrl("About")} className="relative text-xs tracking-[0.15em] font-medium text-gray-600 hover:text-black transition-colors group">
                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to={createPageUrl("CaseStudies")} className="relative text-xs tracking-[0.15em] font-medium text-black group">
                CASE STUDIES
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></span>
              </Link>
              <Link to={createPageUrl("Contact")} className="relative text-xs tracking-[0.15em] font-medium px-6 py-2 border border-black hover:bg-black hover:text-white transition-all duration-300">
                CONTACT
              </Link>
            </div>
            <MobileNav activePage="CaseStudies" />
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">PORTFOLIO</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6">Case Studies</h1>
            <p className="text-gray-500 max-w-2xl">
              Selected work spanning product design, AI strategy, brand identity, and visual direction.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-0 mt-10 border-b border-gray-200">
            {tabs.map((tab) =>
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs tracking-[0.2em] px-6 py-3 transition-all duration-200 border-b-2 -mb-[2px] ${
              activeTab === tab ?
              "border-black text-black font-medium" :
              "border-transparent text-gray-400 hover:text-black"}`
              }>

                {tab.toUpperCase()}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "Work" &&
        <motion.div key="work" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <FilterableGallery />
            <DesignTestimonials />
            <ConsultationForm />
          </motion.div>
        }

        {activeTab === "AI Design" &&
        <motion.div key="ai" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <AIDesignContent />
          </motion.div>
        }

        {activeTab === "Visuals" &&
        <motion.div key="visuals" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {/* Category Filter */}
            <section className="py-10 px-6 lg:px-12">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap gap-3 mb-10">
                  {visualCategories.map((cat) =>
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs tracking-[0.15em] px-4 py-2 border transition-all duration-300 ${
                  activeCategory === cat ? "border-black bg-black text-white" : "border-gray-200 hover:border-black"}`
                  }>

                      {cat.toUpperCase()}
                    </button>
                )}
                </div>
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <AnimatePresence mode="popLayout">
                    {filteredItems.map((item, index) =>
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(item)}>

                        <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400 tracking-wider">{item.category}</span>
                            <span className="text-xs text-gray-400">{item.year}</span>
                          </div>
                          <h3 className="text-lg font-light mt-1 group-hover:text-[#8B7355] transition-colors">{item.title}</h3>
                        </div>
                      </motion.div>
                  )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </section>
          </motion.div>
        }
      </AnimatePresence>

      {/* Visuals Lightbox */}
      <AnimatePresence>
        {selectedImage &&
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImage(null)}>

            <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors">
              <X className="w-6 h-6" />
            </button>
            <motion.div
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }} className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>

              <img src={selectedImage.image} alt={selectedImage.title} className="w-full max-h-[75vh] object-contain" />
              <div className="mt-6 text-white">
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-[0.2em] text-gray-400">{selectedImage.category.toUpperCase()}</span>
                  <span className="text-xs text-gray-500">{selectedImage.year}</span>
                </div>
                <h2 className="text-2xl font-light mt-2">{selectedImage.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
          <div className="flex items-center gap-6">
            
            
            
          </div>
        </div>
      </footer>
    </div>);

}

function AIDesignContent() {
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
    <div>
      {/* Hero */}
      <section className="pb-16 px-6 lg:px-12 pt-8">
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

      {/* Lightbox */}
      {lightbox &&
      <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(false)}>
          <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors" onClick={() => setLightbox(false)}>
            <X className="w-8 h-8" />
          </button>
          <img src={carouselImages[activeIndex].src} alt={carouselImages[activeIndex].caption} className="max-w-[90vw] max-h-[85vh] object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      }
    </div>);

}