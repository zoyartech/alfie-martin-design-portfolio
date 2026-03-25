import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Target, Component, Search, Lightbulb,
  PenTool, FileText, ClipboardCheck, Activity,
  Presentation, AlertTriangle, ChevronRight, CheckCircle2 } from
'lucide-react';
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function IntroToDesigningExperiments() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 pb-32 selection:bg-purple-200">
      {/* Navigation */}
      <div className="fixed top-24 left-6 z-50">
        <Link to={createPageUrl("CaseStudies")} className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] text-slate-500 hover:text-slate-900 transition-all uppercase font-bold bg-white/80 backdrop-blur-md px-5 py-3 rounded-full shadow-sm hover:shadow-md border border-slate-200">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              Growth Design Playbook
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-slate-900 text-base font-medium tracking-tight leading-[1.1] md:text-7xl max-w-4xl">
              The DTC SaaS Growth Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Experimentation Playbook</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl font-light text-slate-600 max-w-3xl leading-relaxed">
              A comprehensive guide for designers transitioning into growth roles. Written by <span className="font-medium text-slate-900">Alfie Martin</span>.
            </motion.p>
            
            <motion.div variants={scaleIn} className="mt-12 bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h3 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-400" /> Core Mission
              </h3>
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
                To transition the design team from "shipping beautiful layouts" to <span className="font-semibold text-purple-300">"shipping behavioral changes that drive retention and revenue."</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 mt-20 space-y-32">
        
        {/* Part 1: Mindset */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-12">
          <motion.div variants={fadeUp}>
            <p className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-2">Part 1</p>
            <h2 className="text-4xl font-bold text-slate-900">The Growth Designer Mindset</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-12 gap-8">
            <motion.div variants={fadeUp} className="md:col-span-5 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">The Shift</h3>
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-purple-500 rounded-r-full"></div>
                  <p className="text-xl text-slate-600 italic font-medium leading-relaxed">
                    "How do we architect this page to reduce cognitive load and increase the click-through rate to the pricing page by 5%?"
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-slate-900">
                <Component className="w-6 h-6 text-purple-600" /> 
                The Design System as a Hypothesis Tool
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                In a DTC SaaS model, speed is king. You cannot hand off "pixel-perfect redlines" for every experiment.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-lg mb-3 text-slate-900">Componentize Everything</h4>
                  <p className="text-slate-600 leading-relaxed">Work with engineering to ensure your design system (buttons, modals, cards) is pre-coded and pre-styled.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                  <h4 className="font-bold text-lg mb-3 text-purple-900">The Benefit</h4>
                  <p className="text-purple-800 leading-relaxed">Spin up experiment variants in hours by simply rearranging pre-built Lego blocks, bypassing custom CSS for every test.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Part 2: Lifecycle */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-12 relative">
          <motion.div variants={fadeUp}>
            <p className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-2">Part 2</p>
            <h2 className="text-4xl font-bold text-slate-900">The Experiment Lifecycle</h2>
            <p className="text-xl text-slate-600 mt-4 max-w-2xl">A step-by-step framework for diagnosing friction, formulating hypotheses, and shipping variants.</p>
          </motion.div>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-[39px] top-4 bottom-4 w-0.5 bg-slate-200"></div>
            
            <div className="space-y-10">
              {[
              {
                icon: Search,
                title: "Problem Deep-Dive",
                subtitle: "Heuristic Analysis",
                content:
                <ul className="space-y-3 text-slate-600">
                      <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-purple-500 shrink-0" /> <span><strong>Review Data:</strong> Identify drop-offs (e.g., 70% between Payment and Active).</span></li>
                      <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-purple-500 shrink-0" /> <span><strong>Session Recordings:</strong> Watch 10 users. Look for hesitation, rage clicks, or scrolling past CTA.</span></li>
                      <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-purple-500 shrink-0" /> <span><strong>Heuristic Violations:</strong> Identify broken UX principles (e.g., CTA below the fold).</span></li>
                    </ul>

              },
              {
                icon: Lightbulb,
                title: "Hypothesis Framing",
                subtitle: "Designer's Lens",
                content:
                <div className="space-y-4">
                      <p className="text-slate-600">The PM writes the business hypothesis. The Designer writes the behavioral hypothesis.</p>
                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 font-mono text-sm leading-relaxed text-slate-700 shadow-inner">
                        "By reducing [Cognitive Load / Visual Clutter] and increasing [Perceived Value / Urgency], we will increase [Target Metric]."
                      </div>
                    </div>

              },
              {
                icon: PenTool,
                title: "Ideation & Variant Generation",
                subtitle: "Generate 3 Concepts",
                content:
                <div className="grid gap-3">
                      <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-purple-200 transition-colors">
                        <strong className="text-slate-900 block mb-1">Variant A (The Clarity Play)</strong>
                        <span className="text-slate-600 text-sm">Simplify copy. Use bullet points. Reduce jargon.</span>
                      </div>
                      <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-purple-200 transition-colors">
                        <strong className="text-slate-900 block mb-1">Variant B (Urgency/Social Proof)</strong>
                        <span className="text-slate-600 text-sm">Add scarcity elements or testimonials.</span>
                      </div>
                      <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-purple-200 transition-colors">
                        <strong className="text-slate-900 block mb-1">Variant C (Friction Reduction)</strong>
                        <span className="text-slate-600 text-sm">Reduce form fields. Switch multi-step to single-step.</span>
                      </div>
                    </div>

              },
              {
                icon: ClipboardCheck,
                title: "The 'Thin-Slice' QA",
                subtitle: "Pre-launch Checks",
                content:
                <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-slate-50 rounded-lg text-sm font-medium text-slate-700 border border-slate-200 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Pixel-to-Pixel</span>
                      <span className="px-4 py-2 bg-slate-50 rounded-lg text-sm font-medium text-slate-700 border border-slate-200 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Flicker Check</span>
                      <span className="px-4 py-2 bg-slate-50 rounded-lg text-sm font-medium text-slate-700 border border-slate-200 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Null State Check</span>
                    </div>

              },
              {
                icon: Presentation,
                title: "The Designer's Debrief",
                subtitle: "Post-Experiment",
                content:
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                      <p className="text-purple-900 font-medium mb-2">Present a visual summary featuring:</p>
                      <ul className="text-purple-800 text-sm space-y-1 list-disc ml-4">
                        <li>Metrics (Lift/Drop)</li>
                        <li>Heatmap Comparisons</li>
                        <li>The "Why" (Behavioral rationale for the win/loss)</li>
                      </ul>
                    </div>

              }].
              map((step, index) =>
              <motion.div key={index} variants={fadeUp} className="relative flex items-start gap-6 md:gap-8 group">
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center shrink-0 z-10 group-hover:border-purple-400 group-hover:shadow-md transition-all">
                    <step.icon className="w-5 h-5 md:w-8 md:h-8 text-slate-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                  <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 flex-1 hover:shadow-md transition-shadow">
                    <div className="mb-4">
                      <span className="text-sm font-bold text-purple-500 uppercase tracking-wider block mb-1">Step 0{index + 1} • {step.subtitle}</span>
                      <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                    {step.content}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.section>

        {/* Part 3: The Plays */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-12">
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-2">Part 3</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Specific Plays</h2>
            <p className="text-xl text-slate-600">Actionable design interventions targeting specific stages of the user funnel.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
            {
              title: "The First Impression",
              stage: "Landing Page / Sign-up",
              goal: "Reduce bounce rate, increase Click to Sign-up.",
              points: [
              "Test lifestyle imagery vs. UI screenshots (users buy outcomes, not features).",
              "Test brand colors vs. high-contrast action colors.",
              "Test 'Above the Fold' content density to reduce clutter."]

            },
            {
              title: "The Aha! Moment",
              stage: "Onboarding",
              goal: "Increase activation rate (core action completion).",
              points: [
              "Test a guided checklist (progress) vs. a passive carousel tutorial.",
              "Evaluate blank slate design (is it helpful or empty?).",
              "Introduce Setup Progress Bars to increase completion."]

            },
            {
              title: "The Wallet Open",
              stage: "Pricing Page",
              goal: "Increase conversion to paid plans.",
              points: [
              "Introduce a 'Decoy' plan to make the target plan look like a steal.",
              "Visually compare Annual vs. Monthly savings (e.g. strike-through pricing).",
              "Place Trust Badges strategically near payment fields."]

            },
            {
              title: "Save the User",
              stage: "Exit Intent / Retention",
              goal: "Reduce churn during cancellation attempts.",
              points: [
              "Design a 'Loss Aversion' Modal showing what access they will lose.",
              "Offer a softer 'Pause' subscription option vs. a hard cancel."]

            }].
            map((play, i) =>
            <motion.div key={i} variants={scaleIn} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="bg-slate-50 p-8 border-b border-slate-100 group-hover:bg-purple-50 transition-colors">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2 group-hover:text-purple-500">Play 0{i + 1} • {play.stage}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{play.title}</h3>
                  <p className="text-sm font-medium text-slate-600 bg-white inline-block px-3 py-1 rounded-md border border-slate-200 shadow-sm">
                    Goal: {play.goal}
                  </p>
                </div>
                <div className="p-8 flex-1">
                  <ul className="space-y-4">
                    {play.points.map((pt, idx) =>
                  <li key={idx} className="flex gap-3 text-slate-700 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                        {pt}
                      </li>
                  )}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Part 4: Templates */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-12">
          <motion.div variants={fadeUp}>
            <p className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-2">Part 4</p>
            <h2 className="text-4xl font-bold text-slate-900">Growth Templates</h2>
          </motion.div>
          
          <motion.div variants={fadeUp} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-10 border-b border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">The "Behavioral Map"</h3>
              <p className="text-slate-600">Map the user's emotional state before designing interventions.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                  <tr>
                    <th className="p-6 font-semibold">Funnel Stage</th>
                    <th className="p-6 font-semibold">User Goal</th>
                    <th className="p-6 font-semibold">Emotional State</th>
                    <th className="p-6 font-semibold">Design Opportunity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-medium">Pricing Page</td>
                    <td className="p-6">"Find the best value"</td>
                    <td className="p-6 text-orange-600 font-medium">Anxious (might overpay)</td>
                    <td className="p-6">Use "Decoy Effect" & Visual Comparison Tables.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-medium">Cancellation Flow</td>
                    <td className="p-6">"Stop paying"</td>
                    <td className="p-6 text-red-600 font-medium">Frustrated</td>
                    <td className="p-6">Reduce friction or add Loss Aversion imagery.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl grid md:grid-cols-2">
            <div className="p-10 lg:p-12 border-b md:border-b-0 md:border-r border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-8">Variant Rationale Spec</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">Experiment ID</p>
                  <p className="text-white font-mono bg-slate-800 inline-block px-3 py-1 rounded">EXP-042</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">Element Changed</p>
                  <p className="text-white text-lg">Primary CTA Button</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <p className="text-slate-400 text-xs uppercase mb-2">Control</p>
                    <div className="w-full h-10 bg-blue-600 flex items-center justify-center text-white text-sm font-medium">Get Started</div>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)] relative">
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
                    <p className="text-slate-400 text-xs uppercase mb-2">Variant</p>
                    <div className="w-full h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">Start Free Trial</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 lg:p-12 bg-slate-800/50">
              <h4 className="text-xl font-bold text-white mb-6">Design Rationale</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-slate-300 text-xs font-bold shrink-0">1</span>
                  <p className="text-slate-300"><strong className="text-white">Color Psychology:</strong> Green implies "Go" and financial growth, reducing risk perception.</p>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-slate-300 text-xs font-bold shrink-0">2</span>
                  <p className="text-slate-300"><strong className="text-white">Shape:</strong> Rounded corners are perceived as more friendly and approachable.</p>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-slate-300 text-xs font-bold shrink-0">3</span>
                  <p className="text-slate-300"><strong className="text-white">Copy:</strong> Specific action sets clear expectations compared to a vague alternative.</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.section>

        {/* Part 5: Traps & Creed */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-12">
          <motion.div variants={fadeUp} className="text-center">
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Avoiding Common Traps</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
            {
              title: "The 'My Baby' Syndrome",
              color: "red",
              desc: "If the data says it loses, you must kill it. Do not argue with the data. A Growth Designer falls in love with the problem, not the solution."
            },
            {
              title: "Dark Patterns",
              color: "orange",
              desc: "Never design a flow that tricks the user. It might win in the short term, but it kills LTV (Lifetime Value) and brand trust completely."
            },
            {
              title: "Vanity Metrics",
              color: "yellow",
              desc: "Don't celebrate 'more clicks' if those clicks don't lead to retention. Design for the entire journey, not just the isolated click."
            }].
            map((trap, i) =>
            <motion.div key={i} variants={scaleIn} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden group hover:shadow-lg transition-shadow">
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-${trap.color}-400`}></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 pt-2">{i + 1}. {trap.title}</h3>
                <p className="text-slate-600 leading-relaxed">{trap.desc}</p>
              </motion.div>
            )}
          </div>

          <motion.div variants={fadeUp} className="mt-16 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 p-10 md:p-16 rounded-3xl text-white shadow-2xl relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <p className="text-sm font-bold mb-6 text-purple-200 uppercase tracking-widest">The Growth Designer's Creed</p>
              <p className="text-3xl md:text-5xl font-light leading-tight max-w-4xl mx-auto">
                "Ship behavioral changes that drive retention and revenue. <br className="hidden md:block" />
                <span className="font-semibold italic">Fall in love with the problem. Trust the data. Design for the full journey.</span>"
              </p>
            </div>
          </motion.div>
        </motion.section>

      </div>
    </div>);

}