import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, TrendingUp, Users } from 'lucide-react';
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';

const impactData = [
  { metric: 'Activation Rate', Control: 42, Redesign: 58 },
  { metric: 'W1 Retention', Control: 21, Redesign: 29 },
];

const dropoffData = [
  { metric: 'Setup Drop-off', Control: 38, Redesign: 22 },
];

function SelectionCard({ title, subtitle, id, selectedOptions, toggleOption }) {
  const selected = selectedOptions.includes(id);
  return (
    <div 
      onClick={() => toggleOption(id)}
      className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-start gap-3 cursor-pointer ${selected ? 'border-[#15C39A] bg-[#f0fcf9] shadow-sm transform scale-[1.02]' : 'border-slate-200 hover:border-[#15C39A]/40 bg-white hover:bg-slate-50'}`}>
      <div className={`w-5 h-5 mt-0.5 rounded border flex items-center justify-center shrink-0 transition-colors ${selected ? 'bg-[#15C39A] border-[#15C39A]' : 'border-slate-300 bg-white'}`}>
        <AnimatePresence>
          {selected && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
            </motion.div>
          )}
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
  const [activeChartTab, setActiveChartTab] = useState('activation');

  const toggleOption = (id) => {
    setSelectedOptions(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
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
          viewport={{ once: true }} className="bg-[#ebffef] mb-16 p-8 rounded-3xl grid md:grid-cols-3 gap-8 border border-slate-200 shadow-sm max-w-3xl mx-auto">
          
          
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
          className="mb-24 text-[1.125rem] text-slate-600 leading-[1.8] space-y-8 max-w-3xl mx-auto">
          
          <p className="text-xl md:text-2xl text-slate-800 leading-snug font-medium mb-8">
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

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 max-w-3xl mx-auto">
          
            <h3 className="text-slate-900 mb-6 text-2xl font-bold">For the setup flow</h3>
            
            <div className="text-left text-[1.125rem] text-slate-600 leading-[1.8] space-y-8">
              <p>
                I focused on reducing friction during keyboard and extension installation. These were high-abandonment steps because they required users to leave the Grammarly environment, navigate system settings, and grant permissions. I simplified the prompts, added clear progress indicators, and introduced encouragement moments at friction points. The screens with the plant illustrations and messages like "We're rooting for you" and "Looks good" were part of a test to see whether emotional reinforcement at technical steps would keep users moving. It did. These small warmth moments reduced drop-off measurably.
              </p>

              <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/ef37lPoFoKo?si=ILtt76YUlLujHVay" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
                </iframe>
              </div>
              <p>
                For the first writing session, I worked on making sure users encountered a meaningful suggestion early rather than just getting a clean score on a two-word test message. A perfect 100 score on "hello there" felt good but demonstrated nothing. I collaborated with product and content to design guided entry points that surfaced real corrections and rewrites, so the user's first interaction showed them what Grammarly could actually do.
              </p>
            </div>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/e5EWQ-o7VWA?si=Q4RXiTZZhEar0nnL" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <img 
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/f144a5b5c_Screenshot2026-03-25at82845PM.png" 
            alt="Grammarly setup flow screens" 
            className="w-full h-auto rounded-3xl border border-slate-200 shadow-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 max-w-3xl mx-auto">
          
            <h3 className="text-slate-900 mb-6 text-2xl font-bold">Content Design as a Growth Lever</h3>
            
            <div className="text-left text-[1.125rem] text-slate-600 leading-[1.8] space-y-8">
              <p>
                A consistent thread across all of this work was how much activation depended on copy, not just layout. Grammarly's brand voice was warm and encouraging, but in an activation context the tone had to be carefully calibrated. Too cheerful and it felt patronizing. Too neutral and the experience felt transactional. I tested microcopy variations across every experiment and paid close attention to how small word changes moved completion rates. A single line of copy at a friction point often outperformed a full UI redesign.
              </p>
              <div className="w-full my-12">
                <img 
                  src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/1b39ff471_popup.png" 
                  alt="Grammarly onboarding personalization prompt" 
                  className="w-full h-auto rounded-3xl border border-slate-200 shadow-sm"
                />
              </div>
              <p>
                I also pushed on the problem of context. Users arrived from very different channels with very different expectations. Someone who signed up from an AI writing ad had a different mental model than someone referred by a coworker for grammar checking. The onboarding had to work for both without being so generic it resonated with neither. I advocated for more adaptive paths based on acquisition source and writing-type selection, and tested early versions of that segmentation.
              </p>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <img 
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/82a5bc136_Screenshot2026-03-25at83700PM.png" 
            alt="Grammarly landing page showing AI features" 
            className="w-full h-auto rounded-3xl border border-slate-200 shadow-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 max-w-3xl mx-auto">
          
            <h3 className="text-slate-900 mb-6 text-2xl font-bold">Impact</h3>
            
            <div className="text-left text-[1.125rem] text-slate-600 leading-[1.8] space-y-8 mb-12">
              <p>
                The experiments I designed improved activation rates and reduced time-to-value across the funnel. The onboarding redesign increased step completion. The setup encouragement patterns lowered abandonment during keyboard and extension installation. The first-session work correlated with stronger day-one and week-one retention among users in the test cohorts compared to control.
              </p>
            </div>

            {/* Interactive Data Visualization */}
            <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm">
              <div className="flex flex-wrap items-center justify-between mb-8 gap-4 border-b border-slate-100 pb-6">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 text-left">Experiment Results</h4>
                  <p className="text-sm text-slate-500 text-left mt-1">Comparing control vs. redesign variations</p>
                </div>
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button 
                    onClick={() => setActiveChartTab('activation')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeChartTab === 'activation' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
                    <TrendingUp className="w-4 h-4" /> Growth
                  </button>
                  <button 
                    onClick={() => setActiveChartTab('dropoff')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeChartTab === 'dropoff' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
                    <Users className="w-4 h-4" /> Friction
                  </button>
                </div>
              </div>
              
              <div className="h-[300px] w-full">
                <AnimatePresence mode="wait">
                  {activeChartTab === 'activation' ? (
                    <motion.div 
                      key="activation"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="h-full w-full"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={impactData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="metric" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13}} dy={10} />
                          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13}} tickFormatter={(val) => `${val}%`} />
                          <RechartsTooltip 
                            cursor={{fill: '#f8fafc'}}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px 16px', fontWeight: '500' }}
                            formatter={(value) => [`${value}%`, undefined]}
                          />
                          <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '13px' }} />
                          <Bar dataKey="Control" fill="#cbd5e1" radius={[4, 4, 0, 0]} maxBarSize={60} />
                          <Bar dataKey="Redesign" fill="#15C39A" radius={[4, 4, 0, 0]} maxBarSize={60} />
                        </BarChart>
                      </ResponsiveContainer>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="dropoff"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="h-full w-full"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={dropoffData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="metric" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13}} dy={10} />
                          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13}} tickFormatter={(val) => `${val}%`} />
                          <RechartsTooltip 
                            cursor={{fill: '#f8fafc'}}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px 16px', fontWeight: '500' }}
                            formatter={(value) => [`${value}%`, undefined]}
                          />
                          <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '13px' }} />
                          <Bar dataKey="Control" fill="#cbd5e1" radius={[4, 4, 0, 0]} maxBarSize={60} />
                          <Bar dataKey="Redesign" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={60} />
                        </BarChart>
                      </ResponsiveContainer>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 max-w-3xl mx-auto">
          
            <h3 className="text-slate-900 mb-6 text-2xl font-bold">What I Took Away</h3>
            
            <div className="text-left text-[1.125rem] text-slate-600 leading-[1.8] space-y-8">
              <p>
                This work shaped how I think about growth design broadly. Activation is not a funnel optimization problem, it is a communication design problem. Every screen in an onboarding sequence is making an argument for why the user should keep going, and the quality of that argument matters more than the visual polish. The most impactful changes I shipped at Grammarly were often the smallest, a rewritten line, a reordered step, a moment of encouragement where the flow previously went cold. They worked because they were grounded in understanding what the user needed to feel and know at that specific moment to take the next action.
              </p>
            </div>
        </motion.div>
      </div>
    </div>);

}