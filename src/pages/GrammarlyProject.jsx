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
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-green-100 text-green-800 text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase">
            Platform Scale
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-slate-900">Grammarly has always used AI</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="h-6 bg-[#68d391] rounded-full w-1/2"></div>
                  <span className="text-slate-900 text-lg font-bold">40M</span>
                </div>
                <p className="text-xl font-bold text-slate-800">Daily Active Users across the platform.</p>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="h-6 bg-[#276749] rounded-full w-[85%]"></div>
                  <span className="text-slate-900 text-lg font-bold">500K+</span>
                </div>
                <p className="text-xl font-bold text-slate-800">Apps integrated with Grammarly's writing layer.</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="h-6 bg-[#2b6cb0] rounded-full w-full"></div>
                  <span className="text-slate-900 text-lg font-bold">900k</span>
                </div>
                <p className="text-xl font-bold text-slate-800">Core perception problem: "the typo catcher."</p>
              </div>
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
        </div>
      </section>

      {/* The Core Challenge */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-green-200 text-green-900 text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase">
            The Core Challenge
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">From Typo Fixer to Thinking Partner</h2>
          <p className="text-lg text-slate-700 mb-12 max-w-4xl">
            The platform already had 40 million daily active users across 500,000+ apps—but it was still mostly known as the thing that caught your typos. GrammarlyGO raised the ambition: owning the entire communication process, not just the cleanup at the end.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">The Adjacent User</h3>
              <p className="text-slate-600 leading-relaxed">Someone who saw the value in a writing assistant but blanked the moment they hit an open prompt field. Understanding this user was the key to unlocking adoption.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">The Mindset Shift</h3>
              <p className="text-slate-600 leading-relaxed">Moving users from "fix my mistakes" to "help me think and create" wasn't a product problem alone—it was a behavioral design challenge that required collaborating with UXR & customer success to gain more knowledge on our users.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">The Design Role</h3>
              <p className="text-slate-600 leading-relaxed">As product growth designer, my work on this experiment revolved around improving activation, not feature-building—making sure the AI capabilities were used, tried, and adopted at scale.</p>
            </div>
          </div>
          
          <div className="text-center text-2xl font-serif text-slate-800 py-8">
            The challenge was designing for that gradual transition in a way that felt natural and easy.
          </div>
        </div>
      </section>

      {/* Behavioral Psychology */}
      <section className="py-20 px-6 lg:px-12 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-green-200 text-green-900 text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase">
            Behavioral Psychology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">The Blank Canvas Problem</h2>
          <p className="text-lg text-slate-700 mb-16">
            The biggest wall users hit was a specific flavor of paralysis—faced with an empty prompt field and no idea where to start. Most interfaces made it worse by just waiting. My focus was on flipping that dynamic entirely, as I tend to do.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 border-l-2 border-b-2 border-slate-200 p-4">
              <div className="absolute top-0 right-0 text-sm text-slate-500">Feature Use</div>
              <div className="absolute bottom-0 left-0 w-full flex justify-between transform translate-y-8 text-sm text-slate-600 font-medium px-4">
                <span>Awareness</span>
                <span>First Try</span>
                <span>Blank Canvas</span>
                <span>Nudge Added</span>
              </div>
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between transform -translate-x-6 text-sm text-slate-500 py-4">
                <span>4</span>
                <span>3</span>
                <span>2</span>
                <span>1</span>
              </div>
              
              {/* SVG Line Chart */}
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                <path d="M 0 100 L 130 50 L 250 180 L 380 0" fill="none" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 0 100 L 130 50 L 250 180 L 380 0 L 380 200 L 0 200 Z" fill="#bbf7d0" opacity="0.3" />
              </svg>
            </div>
            
            <div className="pl-0 md:pl-12">
              <div className="text-8xl font-bold text-green-700 mb-4 tracking-tighter">3×</div>
              <h3 className="text-xl font-bold text-red-700 mb-6 border-b border-slate-300 pb-4">Drop-off at the open prompt — the blank canvas effect in action</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Building proactive nudges that showed up before users even knew they needed them was the core intervention. Rather than waiting for users to engage with an empty field, I shifted to anticipating the moment of hesitation and providing structured starting points—reducing cognitive load at <span className="font-bold text-green-700">exactly the right instant.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Framework */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
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

            <div className="relative z-10">
              <div className="w-20 h-20 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
              </div>
              <h3 className="text-3xl font-bold text-green-700 mb-4 text-center md:text-left">Motivation</h3>
              <p className="text-slate-700 text-lg leading-relaxed">Perceived ROI drove motivation—things like getting to inbox zero faster or feeling like a sharper communicator. Every touchpoint was mapped against whether it reinforced this sense of personal value.</p>
            </div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="text-3xl font-bold text-green-700 mb-4 text-center md:text-left">Ability</h3>
              <p className="text-slate-700 text-lg leading-relaxed">If a feature required mental effort to start, users wouldn't start. Reducing friction at the prompt level through structured suggestions, templates, and contextual defaults made ability feel effortless.</p>
            </div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
              <h3 className="text-3xl font-bold text-green-700 mb-4 text-center md:text-left">Prompt</h3>
              <p className="text-slate-700 text-lg leading-relaxed">The trigger had to arrive at the exact right moment—proactive nudges before users hit the wall, not after. Timing the prompt to precede hesitation was the single highest-leverage design decision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Touchpoint Mapping */}
      <section className="py-20 px-6 lg:px-12 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-green-200 text-green-900 text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase">
            Touchpoint Mapping
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-slate-900">Mapping: Motivation, Ability & Prompt</h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* CSS Donut Chart */}
            <div className="relative aspect-square max-w-md mx-auto w-full">
              <div className="absolute inset-0 rounded-full" style={{
                background: `conic-gradient(
                  #16a34a 0% 33.33%, 
                  #60a5fa 33.33% 66.66%, 
                  #d8b4fe 66.66% 88.88%, 
                  #fca5a5 88.88% 100%
                )`
              }}></div>
              <div className="absolute inset-8 bg-white rounded-full"></div>
            </div>

            <div>
              <div className="space-y-4 mb-8 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#16a34a]"></div>
                  <span className="font-bold text-slate-800">Empty Prompt · 33.33%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#60a5fa]"></div>
                  <span className="font-bold text-slate-800">First Use · 33.33%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#d8b4fe]"></div>
                  <span className="font-bold text-slate-800">Repeat Use · 22.22%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#fca5a5]"></div>
                  <span className="font-bold text-slate-800">Habit Formed · 11.11%</span>
                </div>
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
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-green-200 text-green-900 text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase">
            Design Principles
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">Building Proactive Nudges</h2>
          <p className="text-lg text-slate-700 mb-12">
            The answer to the blank canvas problem wasn't more features—it was smarter timing. Proactive nudges had to show up before users even knew they needed them, turning moments of potential paralysis into moments of possibility.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#eef2f6] p-8 rounded-2xl">
              <div className="w-16 h-16 border-2 border-slate-800 rounded-full flex items-center justify-center mb-6">
                <MinusCircle className="w-8 h-8 text-slate-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Reduce Cognitive Load</h3>
              <p className="text-slate-700 text-lg">Structured starting points, contextual suggestions, and pre-filled prompts that removed the blank-page paralysis before it could take hold in the user's workflow.</p>
            </div>
            
            <div className="bg-[#eef2f6] p-8 rounded-2xl">
              <div className="w-16 h-16 border-2 border-slate-800 rounded-full flex items-center justify-center mb-6">
                <Trash2 className="w-8 h-8 text-slate-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Eliminate Unnecessary Friction</h3>
              <p className="text-slate-700 text-lg">Every extra step between a user's intent and the AI's response was a potential exit point. Stripping the flow to its minimum viable friction was non-negotiable.</p>
            </div>
            
            <div className="bg-[#eef2f6] p-8 rounded-2xl">
              <div className="w-16 h-16 border-2 border-slate-800 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-slate-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Meet the Adjacent User</h3>
              <p className="text-slate-700 text-lg">Designing for the person who saw the value but blanked at the prompt—not the power user, not the skeptic. Getting inside their head defined every nudge, every default, every moment of guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Adoption Framework */}
      <section className="py-24 px-6 lg:px-12 bg-[#1a1c1e] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-green-900/30 text-green-400 text-xs font-bold tracking-wider px-3 py-1 mb-8 uppercase border border-green-800/50 rounded-sm">
            Adoption Framework
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tight">The Dimmer Switch: <span className="text-green-400">Adoption Phases</span></h2>

          <div className="relative">
            {/* Visual wavy road */}
            <svg className="w-full h-40 hidden md:block" viewBox="0 0 1000 150" preserveAspectRatio="none">
              <path d="M 0 75 Q 250 150 500 75 T 1000 75" fill="none" stroke="#334155" strokeWidth="40" strokeLinecap="round" />
              <path d="M 0 75 Q 250 150 500 75 T 1000 75" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="15, 15" strokeLinecap="round" />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 md:-mt-32">
              
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Awareness</h3>
                  <p className="text-slate-300 text-sm">Introduce new AI<br />capabilities to users</p>
                </div>
                <div className="w-16 h-16 bg-[#a7f3d0] text-green-900 rounded-full flex items-center justify-center rounded-br-none rotate-45 transform md:translate-y-8">
                  <div className="-rotate-45">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A1 1 0 0 1 10 21H8a1 1 0 0 1-1-1v-4H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V5a1 1 0 0 1 1 1v15z"></path><path d="M14 9h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4"></path><path d="M19 11v2"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center md:translate-y-24">
                <div className="w-16 h-16 bg-[#bbf7d0] text-green-900 rounded-full flex items-center justify-center rounded-bl-none -rotate-45 transform mb-4">
                  <div className="rotate-45">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">First Prompt</h3>
                  <p className="text-slate-300 text-sm">Reduce blank-canvas<br />friction with nudges</p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Motivated Use</h3>
                  <p className="text-slate-300 text-sm">Show ROI: inbox zero<br />and sharper messages</p>
                </div>
                <div className="w-16 h-16 bg-[#86efac] text-green-900 rounded-full flex items-center justify-center rounded-br-none rotate-45 transform md:-translate-y-4">
                  <div className="-rotate-45">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center md:translate-y-16">
                <div className="w-16 h-16 bg-[#4ade80] text-green-900 rounded-full flex items-center justify-center rounded-bl-none -rotate-45 transform mb-4">
                  <div className="rotate-45">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Habitual Use</h3>
                  <p className="text-slate-300 text-sm">Behavior becomes<br />consistent and aligned</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>);

}