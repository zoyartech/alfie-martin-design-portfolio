import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, TrendingUp, Users } from 'lucide-react';
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";



function SelectionCard({ title, subtitle, id, selectedOptions, toggleOption }) {
  const selected = selectedOptions.includes(id);
  return (
    <div
      onClick={() => toggleOption(id)}
      className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-start gap-3 cursor-pointer ${selected ? 'border-[#15C39A] bg-[#f0fcf9] shadow-sm transform scale-[1.02]' : 'border-slate-200 hover:border-[#15C39A]/40 bg-white hover:bg-slate-50'}`}>
      <div className={`w-5 h-5 mt-0.5 rounded border flex items-center justify-center shrink-0 transition-colors ${selected ? 'bg-[#15C39A] border-[#15C39A]' : 'border-slate-300 bg-white'}`}>
        <AnimatePresence>
          {selected &&
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
            </motion.div>
          }
        </AnimatePresence>
      </div>
      <div>
        <h4 className={`font-bold text-sm text-left transition-colors ${selected ? 'text-slate-900' : 'text-slate-700'}`}>{title}</h4>
        {subtitle && <p className="text-slate-500 text-xs mt-0.5 text-left">{subtitle}</p>}
      </div>
    </div>);
}

export default function ActivationGrammarly() {
  const [selectedOptions, setSelectedOptions] = useState([1, 2, 3, 4, 6, 7]);

  const toggleOption = (id) => {
    setSelectedOptions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 pb-32">
      {/* Navigation */}
      <div className="fixed top-24 left-6 z-50">
        <Link to={createPageUrl("CaseStudies")} className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] text-slate-500 hover:text-slate-900 transition-all uppercase font-bold bg-white/80 backdrop-blur-md px-5 py-3 rounded-full shadow-sm hover:shadow-md border border-slate-200">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Case Studies
        </Link>
      </div>

      <div className="max-w-5xl mx-auto pt-40 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-12">Activation @ Grammarly</h1>
          
          <div className="w-16 h-16 bg-[#15C39A] rounded-full flex items-center justify-center mx-auto mb-12 shadow-lg">
             <span className="text-white font-bold text-3xl">G</span>
          </div>

          <p className="text-xl md:text-2xl text-slate-800 leading-snug font-medium max-w-3xl mx-auto">
            Content Strategy/Design is a really important skill I continue to improve on beyond my experience, especially in the age of AI, conversational design, and a lack of context as a recurring problem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center flex gap-8 justify-center">
          
          <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/f144a5b5c_Screenshot2026-03-25at82845PM.png"
            alt="Grammarly setup flow screens"
            className="w-full max-w-3xl h-auto rounded-3xl border border-slate-200 shadow-sm object-cover" />
          
        </motion.div>

        {/* UI Recreation: Onboarding Step */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-16 mb-16 overflow-hidden relative max-w-4xl mx-auto">
          
          <div className="absolute top-0 left-0 w-full h-2 bg-[#15C39A]"></div>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">I mostly write:</h2>
            <p className="text-slate-500 font-medium">Select all that apply.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            <SelectionCard id={1} selectedOptions={selectedOptions} toggleOption={toggleOption} title="Personal communications" subtitle="(emails, messages, invitations)" />
            <SelectionCard id={2} selectedOptions={selectedOptions} toggleOption={toggleOption} title="Public posts" subtitle="(social media, blog posts)" />
            <SelectionCard id={3} selectedOptions={selectedOptions} toggleOption={toggleOption} title="Creative content" subtitle="(stories, poetry)" />
            <SelectionCard id={4} selectedOptions={selectedOptions} toggleOption={toggleOption} title="Career documents" subtitle="(résumés, portfolios)" />
            <SelectionCard id={5} selectedOptions={selectedOptions} toggleOption={toggleOption} title="Outreach materials" subtitle="(flyers, newsletters)" />
            <SelectionCard id={6} selectedOptions={selectedOptions} toggleOption={toggleOption} title="Educational materials" subtitle="(notes, worksheets, exercises)" />
            <div className="md:col-span-2 flex justify-center mt-2">
                <div className="w-full md:w-1/2">
                    <SelectionCard id={7} selectedOptions={selectedOptions} toggleOption={toggleOption} title="Other" subtitle="" />
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="bg-transparent mb-24 p-0 grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          
          <div>
            <h3 className="font-bold mb-3 text-lg text-slate-900">Problem</h3>
            <p className="text-slate-700 leading-relaxed">Improve user activation and time-to-value while maintaining the quality writing experience users expect.</p>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-lg text-slate-900">Solution</h3>
            <p className="text-slate-700 leading-relaxed">growth experiments focusing on onboarding optimization, feature discovery, & retention mechanics</p>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-lg text-slate-900">Impact</h3>
            <p className="text-slate-700 leading-relaxed">Improved user activation rates and reduced time-to-value</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center">
          
          <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/82a5bc136_Screenshot2026-03-25at83700PM.png"
            alt="Grammarly landing page showing AI features"
            className="w-full max-w-5xl mx-auto h-auto rounded-3xl border border-slate-200 shadow-sm" />
          
        </motion.div>

        {/* Video Walkthrough */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Descript Video Walkthrough</h2>
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
                <iframe src="https://share.descript.com/embed/6TxQpSN3WLn" width="100%" height="100%" frameBorder="0" allowFullScreen title="Grammarly Activation Case Study"></iframe>
            </div>
        </motion.div>

      </div>
    </div>
  );
}