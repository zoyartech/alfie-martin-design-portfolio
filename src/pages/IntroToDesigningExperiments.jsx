import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Component, Search, Lightbulb, PenTool, FileText, ClipboardCheck, Activity, Presentation, AlertTriangle } from 'lucide-react';
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function IntroToDesigningExperiments() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 pb-24 selection:bg-purple-200">
      {/* Back button */}
      <div className="fixed top-24 left-6 z-50">
        <Link to={createPageUrl("CaseStudies")} className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] text-slate-600 hover:text-slate-900 transition-all uppercase font-bold bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm hover:shadow-md border border-slate-200">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Case Studies
        </Link>
      </div>

      <div className="pt-32 max-w-5xl mx-auto px-6">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-16">
          
          {/* Hero Section */}
          <motion.section variants={fadeUp} className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              The DTC SaaS Growth Design <span className="text-purple-600">Experimentation Playbook</span>
            </h1>
            <p className="text-2xl font-light text-slate-600">
              A guide for designers interested in roles on growth teams by: <span className="font-medium text-slate-800">Alfie Martin</span>
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-purple-500 mt-8">
              <h3 className="text-sm font-bold text-slate-500 tracking-widest uppercase mb-2">Mission</h3>
              <p className="text-xl text-slate-800 font-medium">
                To transition the design team from "shipping beautiful layouts" to <span className="text-purple-700">"shipping behavioral changes that drive retention and revenue."</span>
              </p>
            </div>
          </motion.section>

          {/* Part 1 */}
          <motion.section variants={fadeUp} className="space-y-8 pt-8 border-t border-slate-200">
            <h2 className="text-3xl font-bold">Part 1: The Growth Designer Mindset & Foundation</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><Target className="w-5 h-5 text-purple-600"/> 1.1 The Shift</h3>
                <p className="text-lg bg-purple-50 p-6 rounded-xl border border-purple-100 italic">
                  <strong>Growth Designer:</strong> "How do we architect this page to reduce cognitive load and increase the click-through rate to the pricing page by 5%?"
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Component className="w-5 h-5 text-purple-600"/> 1.3 The Design System as a Hypothesis Tool</h3>
                <p className="text-lg text-slate-700 mb-6">In a DTC SaaS model, speed is king. You cannot hand off "pixel-perfect redlines" for every experiment.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h4 className="font-bold text-lg mb-2 text-slate-900">Componentize Everything</h4>
                    <p className="text-slate-600">Work with engineering to ensure your design system (buttons, modals, cards, input fields) is pre-coded and pre-styled.</p>
                  </div>
                  <div className="bg-purple-100 p-6 rounded-xl shadow-sm border border-purple-200">
                    <h4 className="font-bold text-lg mb-2 text-purple-900">The Benefit</h4>
                    <p className="text-purple-800">This allows you to spin up experiment variants in hours by simply rearranging pre-built Lego blocks, rather than designing custom CSS for every test.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Part 2: Step by Step */}
          <motion.section variants={fadeUp} className="space-y-8 pt-8 border-t border-slate-200">
            <h2 className="text-3xl font-bold">The Design Experiment Lifecycle (Step-by-Step)</h2>
            
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  icon: <Search className="w-6 h-6 text-purple-600"/>,
                  title: "Problem Deep-Dive (Heuristic Analysis)",
                  content: (
                    <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700 mt-3">
                      <li><strong>Review the Data:</strong> Where is the drop-off? (e.g., 70% drop-off between "Add Payment Info" and "Subscription Active").</li>
                      <li><strong>Review Session Recordings:</strong> Watch 10 users hit that specific screen.</li>
                      <li><strong>Look for:</strong> Hesitation, Rage clicks, or Scrolling past the CTA.</li>
                      <li><strong>Heuristic Violations:</strong> Identify which UX principle is broken.</li>
                    </ul>
                  )
                },
                {
                  step: 2,
                  icon: <Lightbulb className="w-6 h-6 text-purple-600"/>,
                  title: "Hypothesis Framing (Designer's Lens)",
                  content: (
                    <div className="mt-3 space-y-3 text-slate-700">
                      <p>The PM writes the business hypothesis. The Designer writes the behavioral hypothesis.</p>
                      <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm">
                        "By reducing [Cognitive Load / Visual Clutter] and increasing [Perceived Value / Urgency], we will increase [Target Metric]."
                      </div>
                    </div>
                  )
                },
                {
                  step: 3,
                  icon: <PenTool className="w-6 h-6 text-purple-600"/>,
                  title: "Ideation & Variant Generation",
                  content: (
                    <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700 mt-3">
                      <li><strong>Variant A (The Clarity Play):</strong> Simplify the copy. Use bullet points. Reduce jargon.</li>
                      <li><strong>Variant B (The Urgency/Social Proof Play):</strong> Add scarcity elements or testimonials.</li>
                      <li><strong>Variant C (The Friction Reduction Play):</strong> Reduce the number of form fields.</li>
                      <li><strong>Control:</strong> The existing live version.</li>
                    </ul>
                  )
                },
                {
                  step: 4,
                  icon: <FileText className="w-6 h-6 text-purple-600"/>,
                  title: "Annotated Mockups (The \"Spec\")",
                  content: (
                    <p className="mt-3 text-slate-700">When handing off to engineering, your mockups must be annotated with the experiment logic. (e.g., "Element B is the Variant. Rationale: Fitts Law...")</p>
                  )
                },
                {
                  step: 5,
                  icon: <ClipboardCheck className="w-6 h-6 text-purple-600"/>,
                  title: "The \"Thin-Slice\" QA",
                  content: (
                    <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700 mt-3">
                      <li><strong>The "Pixel to Pixel" Check:</strong> Render correctly on all devices?</li>
                      <li><strong>The "Flicker" Check:</strong> Does the page load the control first and then "flicker"?</li>
                      <li><strong>The "Null State" Check:</strong> Does the design hold up if copy is longer?</li>
                    </ul>
                  )
                },
                {
                  step: 6,
                  icon: <Activity className="w-6 h-6 text-purple-600"/>,
                  title: "Monitoring & Qualitative Feedback",
                  content: (
                    <p className="mt-3 text-slate-700">While the PM watches the numbers, the Designer watches the users. Book 30 minutes 2 days after launch to watch session recordings of the variant.</p>
                  )
                },
                {
                  step: 7,
                  icon: <Presentation className="w-6 h-6 text-purple-600"/>,
                  title: "The \"Designer's Debrief\"",
                  content: (
                    <p className="mt-3 text-slate-700">Present a visual summary: Metrics, Heatmap Comparison, and The "Why".</p>
                  )
                }
              ].map((item) => (
                <div key={item.step} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex gap-6">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-700 text-xl mb-2">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      {item.title}
                    </h3>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Part 3: Plays */}
          <motion.section variants={fadeUp} className="space-y-8 pt-8 border-t border-slate-200">
            <h2 className="text-3xl font-bold">The DTC SaaS Design Playbook (Specific Plays)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
                <h3 className="font-bold text-xl mb-2 text-purple-900">Play 1: The "First Impression"</h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 mb-4">Landing Page / Sign-up</p>
                <ul className="space-y-3 text-purple-800 list-disc ml-5">
                  <li><strong>The Hero Shot:</strong> Test lifestyle imagery vs. UI screenshots.</li>
                  <li><strong>The CTA Color:</strong> Test brand colors vs. high-contrast.</li>
                  <li><strong>The Fold:</strong> Test "Above the Fold" content density.</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
                <h3 className="font-bold text-xl mb-2 text-purple-900">Play 2: The "Aha! Moment"</h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 mb-4">Onboarding</p>
                <ul className="space-y-3 text-purple-800 list-disc ml-5">
                  <li><strong>Checklist vs. Tour:</strong> Guided checklist vs. passive carousel.</li>
                  <li><strong>Blank Slate Design:</strong> Is your empty state helpful?</li>
                  <li><strong>Progress Indicators:</strong> "Setup Progress Bar"</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
                <h3 className="font-bold text-xl mb-2 text-purple-900">Play 3: The "Wallet Open"</h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 mb-4">Pricing Page</p>
                <ul className="space-y-3 text-purple-800 list-disc ml-5">
                  <li><strong>Decoy Effect:</strong> Introduce a slightly worse "Decoy" plan.</li>
                  <li><strong>Annual vs. Monthly:</strong> Visually compare savings (strike-through).</li>
                  <li><strong>Trust Badges:</strong> Placement near credit card fields.</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
                <h3 className="font-bold text-xl mb-2 text-purple-900">Play 4: The "Save the User"</h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-purple-600 mb-4">Exit Intent / Retention</p>
                <ul className="space-y-3 text-purple-800 list-disc ml-5">
                  <li><strong>The "Loss Aversion" Modal:</strong> Show what they will lose.</li>
                  <li><strong>The "Pause" Option:</strong> Softer exit vs. hard cancel.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Part 4: Templates */}
          <motion.section variants={fadeUp} className="space-y-8 pt-8 border-t border-slate-200">
            <h2 className="text-3xl font-bold">Growth Design Templates</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 overflow-x-auto">
                <h3 className="font-bold text-xl mb-6">The "Behavioral Map" Template</h3>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="py-3 pr-6 font-semibold">Funnel Stage</th>
                      <th className="py-3 pr-6 font-semibold">User Goal</th>
                      <th className="py-3 pr-6 font-semibold">Emotional State</th>
                      <th className="py-3 font-semibold">Design Opportunity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-4 pr-6">Pricing Page</td>
                      <td className="py-4 pr-6">"Find the best value"</td>
                      <td className="py-4 pr-6 text-orange-600">Anxious (might overpay)</td>
                      <td className="py-4">Use the "Decoy Effect" & Visual Comparison Tables.</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-6">Cancellation Flow</td>
                      <td className="py-4 pr-6">"Stop paying"</td>
                      <td className="py-4 pr-6 text-red-600">Frustrated</td>
                      <td className="py-4">Reduce friction? Or add Loss Aversion imagery?</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-8 bg-slate-900 text-white p-8 rounded-2xl">
                <div>
                  <h3 className="font-bold text-xl mb-6 text-purple-400">The "Variant Rationale" Template</h3>
                  <div className="space-y-4 text-slate-300">
                    <p><strong>Experiment ID:</strong> EXP-042</p>
                    <p><strong>Element Changed:</strong> Primary CTA Button</p>
                    <p><strong>Control:</strong> Blue, Rectangle, "Get Started"</p>
                    <p><strong>Variant:</strong> Green, Rounded Pill, "Start My Free Trial Now"</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-4 text-white">Design Rationale</h4>
                  <ul className="space-y-3 text-slate-300 list-decimal ml-5">
                    <li><strong>Color Psychology:</strong> Green implies "Go" and financial growth, reducing risk perception.</li>
                    <li><strong>Shape:</strong> Rounded corners are perceived as more friendly and approachable.</li>
                    <li><strong>Copy:</strong> Specific action ("Start My Free Trial") sets clear expectations vs. vague "Get Started."</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Part 5: Traps */}
          <motion.section variants={fadeUp} className="space-y-8 pt-8 border-t border-slate-200">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <AlertTriangle className="text-red-500 w-8 h-8"/> Avoiding Common Growth Design Traps
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-t-4 border-t-red-400">
                <h3 className="font-bold text-lg mb-3">1. The "My Baby" Syndrome</h3>
                <p className="text-slate-600">If the data says it loses, you must kill it. Do not argue with the data. <strong>A Growth Designer falls in love with the problem, not the solution.</strong></p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-t-4 border-t-orange-400">
                <h3 className="font-bold text-lg mb-3">2. Dark Patterns</h3>
                <p className="text-slate-600">Never design a flow that tricks the user. It might win in the short term, but it <strong>kills LTV (Lifetime Value) and brand trust.</strong></p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-t-4 border-t-yellow-400">
                <h3 className="font-bold text-lg mb-3">3. Vanity Metrics</h3>
                <p className="text-slate-600">Don't celebrate "more clicks" if those clicks don't lead to retention. <strong>Design for the entire journey, not just the click.</strong></p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 p-8 md:p-12 rounded-2xl text-white shadow-xl text-center">
              <p className="text-sm font-bold mb-4 text-purple-200 uppercase tracking-widest">The Growth Designer's Creed</p>
              <p className="text-2xl md:text-3xl font-light leading-relaxed">
                "Ship behavioral changes that drive retention and revenue. Fall in love with the problem. Trust the data. Design for the full journey."
              </p>
            </div>
          </motion.section>

        </motion.div>
      </div>
    </div>
  );
}