import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

function SelectionCard({ title, subtitle, selected }) {
  return (
    <div className={`p-4 rounded-xl border-2 transition-all flex items-start gap-3 cursor-pointer ${selected ? 'border-[#15C39A] bg-[#f0fcf9]' : 'border-slate-200 hover:border-slate-300'}`}>
      <div className={`w-5 h-5 mt-0.5 rounded border flex items-center justify-center shrink-0 transition-colors ${selected ? 'bg-[#15C39A] border-[#15C39A]' : 'border-slate-300 bg-white'}`}>
        {selected && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-sm text-left">{title}</h4>
        {subtitle && <p className="text-slate-500 text-xs mt-0.5 text-left">{subtitle}</p>}
      </div>
    </div>);

}

export default function ActivationGrammarly() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 pb-32">
      {/* Navigation */}
      <div className="fixed top-24 left-6 z-50">
        <Link to={createPageUrl("CaseStudies")} className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] text-slate-500 hover:text-slate-900 transition-all uppercase font-bold bg-white/80 backdrop-blur-md px-5 py-3 rounded-full shadow-sm hover:shadow-md border border-slate-200">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Case Studies
        </Link>
      </div>

      <div className="max-w-4xl mx-auto pt-40 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center">
          
          <div className="w-16 h-16 bg-[#15C39A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
             <span className="text-white font-bold text-3xl">G</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Activation @ Grammarly</h1>
          

          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="bg-[#ebffef] mb-10 p-8 rounded-3xl grid md:grid-cols-3 gap-8 border border-slate-200 shadow-sm">
          
          
          <div>
            <h3 className="font-bold mb-3 text-lg text-slate-900">Problem</h3>
            <p className="text-slate-950 leading-relaxed">Improve user activation and time-to-value while maintaining the quality writing experience users expect.</p>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-lg text-slate-900">Solution</h3>
            <p className="text-slate-950 leading-relaxed">Growth experiments focusing on onboarding optimization, feature discovery, & retention mechanics.</p>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-lg text-slate-900">Impact</h3>
            <p className="text-slate-600 leading-relaxed">Improved user activation rates and reduced time-to-value.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-lg text-slate-700 leading-relaxed space-y-6">
          
          <p>
            I mapped the full activation funnel against behavioral data to isolate the highest-leverage moments and then ran experiments against each one.
          </p>
          <p>
            For the onboarding questionnaire, I redesigned the multi-select step where users told us what they mostly write. The original version functioned like a survey. Users filled it out dutifully but it felt disconnected from what happened next. I tested variations that reframed the step as personalization, making it feel like the product was shaping itself around the user rather than collecting data. I iterated on copy, visual weight, the number of options, and how selections carried forward into the first session. The goal was to make users feel like their answers mattered immediately.
          </p>
        </motion.div>

        {/* UI Recreation: Onboarding Step */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-16 mb-20 overflow-hidden relative">
          
          <div className="absolute top-0 left-0 w-full h-2 bg-[#15C39A]"></div>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">I mostly write:</h2>
            <p className="text-slate-500 font-medium">Select all that apply.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            <SelectionCard title="Personal communications" subtitle="(emails, messages, invitations)" selected={true} />
            <SelectionCard title="Public posts" subtitle="(social media, blog posts)" selected={true} />
            <SelectionCard title="Creative content" subtitle="(stories, poetry)" selected={true} />
            <SelectionCard title="Career documents" subtitle="(résumés, portfolios)" selected={true} />
            <SelectionCard title="Outreach materials" subtitle="(flyers, newsletters)" selected={false} />
            <SelectionCard title="Educational materials" subtitle="(notes, worksheets, exercises)" selected={true} />
            <div className="md:col-span-2 flex justify-center mt-2">
                <div className="w-full md:w-1/2">
                    <SelectionCard title="Other" subtitle="" selected={true} />
                </div>
            </div>
          </div>

          <div className="max-w-xs mx-auto text-center">
            <p className="text-sm font-medium text-slate-500 mb-3">Step 3 of 4</p>
            <div className="w-full bg-slate-100 rounded-full h-2.5 mb-4 overflow-hidden">
              <div className="bg-[#15C39A] h-full rounded-full w-3/4"></div>
            </div>
            <button className="text-sm text-slate-400 hover:text-slate-600 font-medium">Skip step</button>
          </div>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center">
          
            <h3 className="text-slate-800 mb-6 text-sm font-bold uppercase tracking-widest">For the setup flow</h3>
            
            <div className="text-left text-lg text-slate-700 leading-relaxed space-y-6 mb-20">
              <p>
                I focused on reducing friction during keyboard and extension installation. These were high-abandonment steps because they required users to leave the Grammarly environment, navigate system settings, and grant permissions. I simplified the prompts, added clear progress indicators, and introduced encouragement moments at friction points. The screens with the plant illustrations and messages like "We're rooting for you" and "Looks good" were part of a test to see whether emotional reinforcement at technical steps would keep users moving. It did. These small warmth moments reduced drop-off measurably.
              </p>
              <p>
                For the first writing session, I worked on making sure users encountered a meaningful suggestion early rather than just getting a clean score on a two-word test message. A perfect 100 score on "hello there" felt good but demonstrated nothing. I collaborated with product and content to design guided entry points that surfaced real corrections and rewrites, so the user's first interaction showed them what Grammarly could actually do.
              </p>
            </div>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center">
          
            <h3 className="text-slate-800 mb-6 text-sm font-bold uppercase tracking-widest">Content Design as a Growth Lever</h3>
            
            <div className="text-left text-lg text-slate-700 leading-relaxed space-y-6 mb-20">
              <p>
                A consistent thread across all of this work was how much activation depended on copy, not just layout. Grammarly's brand voice was warm and encouraging, but in an activation context the tone had to be carefully calibrated. Too cheerful and it felt patronizing. Too neutral and the experience felt transactional. I tested microcopy variations across every experiment and paid close attention to how small word changes moved completion rates. A single line of copy at a friction point often outperformed a full UI redesign.
              </p>
              <p>
                I also pushed on the problem of context. Users arrived from very different channels with very different expectations. Someone who signed up from an AI writing ad had a different mental model than someone referred by a coworker for grammar checking. The onboarding had to work for both without being so generic it resonated with neither. I advocated for more adaptive paths based on acquisition source and writing-type selection, and tested early versions of that segmentation.
              </p>
            </div>
        </motion.div>
      </div>
    </div>);

}