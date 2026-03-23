import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, User, Lightbulb, TrendingUp, MinusCircle, Trash2, Users } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function GrammarlyProject() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-green-200 selection:text-green-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        .font-serif { font-family: "PT Serif", serif; }
        .font-sans { font-family: "DM Sans", sans-serif; }
      `}</style>

      {/* Hero */}
      <section className="bg-[#111111] text-white pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Link to={createPageUrl("CaseStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-400 hover:text-white transition-colors mb-16 uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 font-sans">
              Approaching AI Adoption at <span className="text-[#10a368]">Grammarly</span>
            </h1>
            <div className="border-l-4 border-[#10a368] pl-6 mt-12">
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-6 font-sans">
                A product growth designer's perspective on shifting 40 million daily active users from "fix my mistakes" mode to "help me think and create" mode.
              </p>
              <p className="text-[#10a368] font-bold text-lg font-sans">A Growth Design Case Study by Alfie Martin</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Scale */}
      <section className="py-20 px-6 lg:px-12 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-block bg-green-100 text-green-800 text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase">
            Platform Scale
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-slate-900">Grammarly has always used AI</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <motion.div whileHover={{ x: 8 }} className="group cursor-default">
                <div className="flex items-center justify-between mb-2">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: "50%" }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    className="h-6 bg-[#68d391] rounded-full group-hover:brightness-110"
                  ></motion.div>
                  <span className="text-slate-900 text-lg font-bold">40M</span>
                </div>
                <p className="text-xl font-bold text-slate-800 group-hover:text-[#68d391] transition-colors duration-300">Daily Active Users across the platform.</p>
              </motion.div>
              
              <motion.div whileHover={{ x: 8 }} className="group cursor-default">
                <div className="flex items-center justify-between mb-2">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: "85%" }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="h-6 bg-[#276749] rounded-full group-hover:brightness-110"
                  ></motion.div>
                  <span className="text-slate-900 text-lg font-bold">500K+</span>
                </div>
                <p className="text-xl font-bold text-slate-800 group-hover:text-[#276749] transition-colors duration-300">Apps integrated with Grammarly's writing layer.</p>
              </motion.div>

              <motion.div whileHover={{ x: 8 }} className="group cursor-default">
                <div className="flex items-center justify-between mb-2">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: "100%" }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="h-6 bg-[#2b6cb0] rounded-full group-hover:brightness-110"
                  ></motion.div>
                  <span className="text-slate-900 text-lg font-bold">900k</span>
                </div>
                <p className="text-xl font-bold text-slate-800 group-hover:text-[#2b6cb0] transition-colors duration-300">Core perception problem: "the typo catcher."</p>
              </motion.div>
            </div>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">The Opportunity:</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  When GrammarlyGO and a new suite of AI agents came into the picture, the product's ambition got a lot bigger—owning the entire communication process, not just the cleanup at the end. This was the moment to redefine what Grammarly could mean to its users.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">The Design Challenge:</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  My challenge as a product growth designer wasn't building the features—it was getting people to actually use them. Shifting users from passive correction to active AI collaboration required a fundamentally different approach to onboarding and activation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* The Core Challenge */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-block bg-green-200 text-green-900 text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase">
            The Core Challenge
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">From Typo Fixer to Thinking Partner</h2>
          <p className="text-lg text-slate-700 mb-12 max-w-4xl">
            The platform already had 40 million daily active users across 500,000+ apps—but it was still mostly known as the thing that caught your typos. GrammarlyGO raised the ambition: owning the entire communication process, not just the cleanup at the end.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">The Adjacent User</h3>
              <p className="text-slate-600 leading-relaxed">Someone who saw the value in a writing assistant but blanked the moment they hit an open prompt field. Understanding this user was the key to unlocking adoption.</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">The Mindset Shift</h3>
              <p className="text-slate-600 leading-relaxed">Moving users from "fix my mistakes" to "help me think and create" wasn't a product problem alone—it was a behavioral design challenge that required collaborating with UXR & customer success to gain more knowledge on our users.</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">The Design Role</h3>
              <p className="text-slate-600 leading-relaxed">As product growth designer, my work on this experiment revolved around improving activation, not feature-building—making sure the AI capabilities were used, tried, and adopted at scale.</p>
            </motion.div>
          </div>
          
          <div className="text-center text-2xl font-serif text-slate-800 py-8">
            The challenge was designing for that gradual transition in a way that felt natural and easy.
          </div>
        </motion.div>
      </section>

      {/* Behavioral Psychology */}
      <section className="py-20 px-6 lg:px-12 bg-white border-t border-slate-200 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-block bg-green-200 text-green-900 text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase">
            Behavioral Psychology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">The Blank Canvas Problem</h2>
          <p className="text-lg text-slate-700 mb-16">
            The biggest wall users hit was a specific flavor of paralysis—faced with an empty prompt field and no idea where to start. Most interfaces made it worse by just waiting. My focus was on flipping that dynamic entirely, as I tend to do.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 border-l-2 border-b-2 border-slate-200 p-4 group">
              <div className="absolute top-0 right-0 text-sm text-slate-500 transition-colors group-hover:text-slate-900">Feature Use</div>
              <div className="absolute bottom-0 left-0 w-full flex justify-between transform translate-y-8 text-sm text-slate-600 font-medium px-4">
                <span className="hover:text-green-700 cursor-default transition-colors">Awareness</span>
                <span className="hover:text-green-700 cursor-default transition-colors">First Try</span>
                <span className="text-red-600 font-bold">Blank Canvas</span>
                <span className="hover:text-green-700 cursor-default transition-colors">Nudge Added</span>
              </div>
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between transform -translate-x-6 text-sm text-slate-500 py-4">
                <span>4</span>
                <span>3</span>
                <span>2</span>
                <span>1</span>
              </div>
              
              {/* SVG Line Chart */}
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none">
                {/* Data Points */}
                <motion.circle cx="0" cy="100" r="4" fill="#16a34a" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} />
                <motion.circle cx="130" cy="50" r="4" fill="#16a34a" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} />
                <motion.circle cx="250" cy="180" r="6" fill="#dc2626" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} />
                <motion.circle cx="380" cy="0" r="4" fill="#16a34a" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.1 }} />
                
                {/* The Path */}
                <motion.path 
                  d="M 0 100 L 130 50 L 250 180 L 380 0" 
                  fill="none" 
                  stroke="#16a34a" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path 
                  d="M 0 100 L 130 50 L 250 180 L 380 0 L 380 200 L 0 200 Z" 
                  fill="#bbf7d0" 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                  className="transition-opacity duration-300 group-hover:opacity-50"
                />
              </svg>
              
              {/* Pulse effect on the "drop off" point */}
              <div className="absolute left-[62.5%] top-[90%] -translate-x-1/2 -translate-y-1/2">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                </span>
              </div>
            </div>
            
            <div className="pl-0 md:pl-12">
              <div className="text-8xl font-bold text-green-700 mb-4 tracking-tighter">3×</div>
              <h3 className="text-xl font-bold text-red-700 mb-6 border-b border-slate-300 pb-4">Drop-off at the open prompt — the blank canvas effect in action</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Building proactive nudges that showed up before users even knew they needed them was the core intervention. Rather than waiting for users to engage with an empty field, I shifted to anticipating the moment of hesitation and providing structured starting points—reducing cognitive load at <span className="font-bold text-green-700">exactly the right instant.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Diagnostic Framework */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-block bg-green-200 text-green-900 text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase">
            Diagnostic Framework
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">The Fogg Behavior Model as a Design Tool</h2>
          <p className="text-lg text-slate-700 mb-16">
            Almost annoyingly simple: behavior only happens when motivation, ability, and a prompt land at the same time. Pull any one of them and users default back to their old habits, even when the new way is objectively better.
          </p>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Visual connecting line */}
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-slate-300"></div>

            <motion.div whileHover={{ y: -5 }} className="relative z-10 p-6 -mx-6 bg-white/0 hover:bg-white rounded-2xl transition-colors hover:shadow-sm">
              <div className="w-20 h-20 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
              </div>
              <h3 className="text-3xl font-bold text-green-700 mb-4 text-center md:text-left">Motivation</h3>
              <p className="text-slate-700 text-lg leading-relaxed">Perceived ROI drove motivation—things like getting to inbox zero faster or feeling like a sharper communicator. Every touchpoint was mapped against whether it reinforced this sense of personal value.</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="relative z-10 p-6 -mx-6 bg-white/0 hover:bg-white rounded-2xl transition-colors hover:shadow-sm">
              <div className="w-20 h-20 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="text-3xl font-bold text-green-700 mb-4 text-center md:text-left">Ability</h3>
              <p className="text-slate-700 text-lg leading-relaxed">If a feature required mental effort to start, users wouldn't start. Reducing friction at the prompt level through structured suggestions, templates, and contextual defaults made ability feel effortless.</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="relative z-10 p-6 -mx-6 bg-white/0 hover:bg-white rounded-2xl transition-colors hover:shadow-sm">
              <div className="w-20 h-20 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
              <h3 className="text-3xl font-bold text-green-700 mb-4 text-center md:text-left">Prompt</h3>
              <p className="text-slate-700 text-lg leading-relaxed">The trigger had to arrive at the exact right moment—proactive nudges before users hit the wall, not after. Timing the prompt to precede hesitation was the single highest-leverage design decision.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Touchpoint Mapping */}
      <section className="py-20 px-6 lg:px-12 bg-white border-t border-slate-200 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-block bg-green-200 text-green-900 text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase">
            Touchpoint Mapping
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-slate-900">Mapping: Motivation, Ability & Prompt</h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* CSS Donut Chart */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative aspect-square max-w-md mx-auto w-full cursor-pointer group"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 rounded-full" style={{
                background: `conic-gradient(
                  #16a34a 0% 33.33%, 
                  #60a5fa 33.33% 66.66%, 
                  #d8b4fe 66.66% 88.88%, 
                  #fca5a5 88.88% 100%
                )`
              }}></motion.div>
              <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center shadow-inner transition-colors duration-300 group-hover:bg-slate-50">
                <span className="text-slate-400 font-bold tracking-widest uppercase text-sm group-hover:text-slate-600 transition-colors">Fogg Model</span>
              </div>
            </motion.div>

            <div>
              <div className="space-y-2 mb-8 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-3 cursor-default p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                  <div className="w-4 h-4 rounded-full bg-[#16a34a] shadow-sm"></div>
                  <span className="font-bold text-slate-800">Empty Prompt · 33.33%</span>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-3 cursor-default p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                  <div className="w-4 h-4 rounded-full bg-[#60a5fa] shadow-sm"></div>
                  <span className="font-bold text-slate-800">First Use · 33.33%</span>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-3 cursor-default p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                  <div className="w-4 h-4 rounded-full bg-[#d8b4fe] shadow-sm"></div>
                  <span className="font-bold text-slate-800">Repeat Use · 22.22%</span>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-3 cursor-default p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                  <div className="w-4 h-4 rounded-full bg-[#fca5a5] shadow-sm"></div>
                  <span className="font-bold text-slate-800">Habit Formed · 11.11%</span>
                </motion.div>
              </div>

              <div className="space-y-6 text-lg text-slate-700">
                <p>
                  <span className="font-bold text-slate-900">The Fogg model</span> became a diagnostic tool applied to every touchpoint in the GrammarlyGO onboarding and activation flow. The goal was to reduce friction at the exact moments when users were most likely to revert to old habits.
                </p>
                <p>
                  When all three elements—motivation, ability, and prompt—converged at the right moment, adoption followed. When even one was missing, users defaulted back to passive spell-checking mode, even when the new capability was right in front of them.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Design Principles */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-block bg-green-200 text-green-900 text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase">
            Design Principles
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">Building Proactive Nudges</h2>
          <p className="text-lg text-slate-700 mb-12">
            The answer to the blank canvas problem wasn't more features—it was smarter timing. Proactive nudges had to show up before users even knew they needed them, turning moments of potential paralysis into moments of possibility.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-[#eef2f6] p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 border-2 border-slate-800 rounded-full flex items-center justify-center mb-6">
                <MinusCircle className="w-8 h-8 text-slate-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Reduce Cognitive Load</h3>
              <p className="text-slate-700 text-lg">Structured starting points, contextual suggestions, and pre-filled prompts that removed the blank-page paralysis before it could take hold in the user's workflow.</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} className="bg-[#eef2f6] p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 border-2 border-slate-800 rounded-full flex items-center justify-center mb-6">
                <Trash2 className="w-8 h-8 text-slate-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Eliminate Unnecessary Friction</h3>
              <p className="text-slate-700 text-lg">Every extra step between a user's intent and the AI's response was a potential exit point. Stripping the flow to its minimum viable friction was non-negotiable.</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} className="bg-[#eef2f6] p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 border-2 border-slate-800 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-slate-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Meet the Adjacent User</h3>
              <p className="text-slate-700 text-lg">Designing for the person who saw the value but blanked at the prompt—not the power user, not the skeptic. Getting inside their head defined every nudge, every default, every moment of guidance.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Adoption Framework */}
      <section className="py-24 px-6 lg:px-12 bg-[#0f172a] text-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-24">
            <div className="inline-block bg-[#16a34a]/20 text-[#4ade80] text-xs font-bold tracking-wider px-4 py-1.5 mb-6 uppercase border border-[#16a34a]/30 rounded-full">
              Adoption Framework
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The Dimmer Switch: <span className="text-[#4ade80]">Adoption Phases</span></h2>
          </div>

          <div className="relative pt-12 pb-16">
            {/* Horizontal connection line */}
            <div className="hidden md:block absolute top-[88px] left-0 right-0 h-1 bg-slate-800 rounded-full">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#16a34a] via-[#4ade80] to-[#bbf7d0] rounded-full relative"
              >
                {/* Moving light pulse on the line */}
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "1000%" }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 1 }}
                  className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
              
              {/* Phase 1 */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ rotate: 15 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 bg-slate-900 border-4 border-slate-800 group-hover:border-[#16a34a] rounded-full flex items-center justify-center mb-8 transition-all duration-300 shadow-[0_0_30px_rgba(22,163,74,0)] group-hover:shadow-[0_0_40px_rgba(22,163,74,0.6)] z-10"
                >
                  <svg className="transition-transform group-hover:scale-110" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A1 1 0 0 1 10 21H8a1 1 0 0 1-1-1v-4H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V5a1 1 0 0 1 1 1v15z"></path><path d="M14 9h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4"></path><path d="M19 11v2"></path></svg>
                </motion.div>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 text-center w-full group-hover:bg-slate-800 group-hover:border-[#16a34a]/50 transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="text-[#4ade80] font-mono text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity">01</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4ade80] transition-colors">Awareness</h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">Introduce new AI capabilities to users contextually.</p>
                </div>
              </motion.div>

              {/* Phase 2 */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center group cursor-pointer md:mt-16"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ rotate: -15 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="w-20 h-20 bg-slate-900 border-4 border-slate-800 group-hover:border-[#4ade80] rounded-full flex items-center justify-center mb-8 transition-all duration-300 shadow-[0_0_30px_rgba(74,222,128,0)] group-hover:shadow-[0_0_40px_rgba(74,222,128,0.6)] z-10"
                >
                  <Lightbulb className="w-7 h-7 text-[#4ade80] transition-transform group-hover:scale-110 group-hover:fill-[#4ade80]/20" />
                </motion.div>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 text-center w-full group-hover:bg-slate-800 group-hover:border-[#4ade80]/50 transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="text-[#4ade80] font-mono text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity">02</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4ade80] transition-colors">First Prompt</h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">Reduce blank-canvas friction with proactive nudges.</p>
                </div>
              </motion.div>

              {/* Phase 3 */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ rotate: 15 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="w-20 h-20 bg-slate-900 border-4 border-slate-800 group-hover:border-[#86efac] rounded-full flex items-center justify-center mb-8 transition-all duration-300 shadow-[0_0_30px_rgba(134,239,172,0)] group-hover:shadow-[0_0_40px_rgba(134,239,172,0.6)] z-10"
                >
                  <svg className="transition-transform group-hover:scale-110" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                </motion.div>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 text-center w-full group-hover:bg-slate-800 group-hover:border-[#86efac]/50 transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="text-[#86efac] font-mono text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity">03</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#86efac] transition-colors">Motivated Use</h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">Show ROI immediately: inbox zero & sharper writing.</p>
                </div>
              </motion.div>

              {/* Phase 4 */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center group cursor-pointer md:mt-16"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ rotate: -15 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, type: "spring" }}
                  className="w-20 h-20 bg-slate-900 border-4 border-slate-800 group-hover:border-[#bbf7d0] rounded-full flex items-center justify-center mb-8 transition-all duration-300 shadow-[0_0_30px_rgba(187,247,208,0)] group-hover:shadow-[0_0_40px_rgba(187,247,208,0.6)] z-10"
                >
                  <svg className="transition-transform group-hover:scale-110" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#bbf7d0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
                </motion.div>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 text-center w-full group-hover:bg-slate-800 group-hover:border-[#bbf7d0]/50 transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="text-[#bbf7d0] font-mono text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity">04</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#bbf7d0] transition-colors">Habitual Use</h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">Behavior becomes consistent, effortless and aligned.</p>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>);

}