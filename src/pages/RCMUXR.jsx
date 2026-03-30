import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { createPageUrl } from '@/utils';
import {
  ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ZAxis,
  BarChart, Bar, Cell } from
'recharts';
import {
  ArrowLeft, Eye, Folder, Layers, Target, Bell, Briefcase, MessageSquare,
  ChevronDown, ChevronRight, Users, Activity, FileSearch, Shield } from
'lucide-react';

const FadeIn = ({ children, delay = 0 }) =>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.6, delay }}>
  
        {children}
    </motion.div>;


export default function RCMUXR() {
  const [activeTheme, setActiveTheme] = useState(0);

  const participants = [
  { id: 1, name: "Member 1", age: 68, aum: 12, focus: "Estate / multi-gen planning" },
  { id: 2, name: "Member 2", age: 51, aum: 6, focus: "Concentrated stock / tax" },
  { id: 3, name: "Member 3", age: 44, aum: 3.5, focus: "Accumulation / goals" },
  { id: 4, name: "Member 4", age: 37, aum: 8, focus: "Financial literacy" },
  { id: 5, name: "Member 5", age: 59, aum: 15, focus: "Multi-entity structure" },
  { id: 6, name: "Member 6", age: 46, aum: 5, focus: "ESG / alternatives" }];


  const themes = [
  {
    icon: <Eye className="w-6 h-6 text-emerald-600" />,
    title: "Clarity Over Density",
    insight: "Members want contextual signals (on track, needs attention, changed) rather than raw position data on first open.",
    members: [1, 2, 3, 4],
    decision: "Redesigned the home screen around a single consolidated net worth figure, a trend indicator, and a short prioritized action list. Detailed position data moved to a dedicated Portfolio tab.",
    impact: "Reduces cognitive load on first open. Serves both the two-minute check-in and the monthly reassurance visit without requiring either to navigate."
  },
  {
    icon: <Folder className="w-6 h-6 text-blue-600" />,
    title: "Unified Document Vault",
    insight: "Universal pain point. Documents are scattered across email, advisor handoffs, and portal with no organizational logic.",
    members: [1, 2, 3, 4, 5, 6],
    decision: "Designed a centralized Document Vault organized by document type (statements, tax, legal) with secondary filters for entity, account, and tax year. Added direct share-to-contact functionality.",
    impact: "Addresses the tax-season pain point directly. Entity-level document filtering also supports the multi-entity hierarchy work."
  },
  {
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    title: "Entity-Aware Hierarchy",
    insight: "Members with trusts, LLCs, or foundations cannot map their financial structure to the flat account list.",
    members: [1, 5],
    decision: "Implemented a nested account architecture that groups accounts under their parent entity. The top level shows aggregated totals per entity with expand/collapse to drill into individual accounts.",
    impact: "Eliminates the parallel spreadsheet problem. Also creates the structural foundation for the holistic estate view requested."
  },
  {
    icon: <Target className="w-6 h-6 text-rose-600" />,
    title: "Goal-Based Progress",
    insight: "Accumulation-phase and newer members want outcome signals, not return percentages.",
    members: [3, 4],
    decision: "Added a Goals view to the home screen that displays advisor-defined goals as visual progress indicators showing percentage funded, projected timeline, and probability of success.",
    impact: "Shifts the app from a reporting tool to a planning companion. Also serves an educational function for newer members."
  },
  {
    icon: <Bell className="w-6 h-6 text-amber-600" />,
    title: "Advisor-Voiced Notifications",
    insight: "Universal interest in notifications, but only if actionable, entity-aware, and framed in advisor tone.",
    members: [1, 2, 3, 4, 5, 6],
    decision: "Redesigned notification framework around three tiers: Action Required, Advisor Update, and Milestone. Copy uses first-person advisor language rather than system-speak.",
    impact: "Transforms notifications from a source of noise into an extension of the advisory relationship."
  },
  {
    icon: <Briefcase className="w-6 h-6 text-cyan-600" />,
    title: "Alternatives as First-Class",
    insight: "Growing allocation to private/alternative investments not reflected in app. Will become more prevalent.",
    members: [6],
    decision: "Extended portfolio data model to surface private holdings alongside public positions with their own reporting cadence. Added an Impact tab for ESG-aligned holdings.",
    impact: "Aligns the digital experience with how advisors are actually building portfolios. Prevents the app from becoming irrelevant."
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-violet-600" />,
    title: "Secure In-App Messaging",
    insight: "Current advisor communication via personal text is non-compliant and fragmented.",
    members: [2],
    decision: "Added a secure messaging channel within the app that supports text, document attachment, and read receipts. Messages are threaded by topic.",
    impact: "Consolidates advisor-member communication into a compliant, auditable channel while preserving the conversational tone."
  }];


  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 text-white p-4 rounded-xl shadow-xl border border-slate-700">
                    <p className="font-bold mb-1">{data.name}</p>
                    <p className="text-sm text-slate-300">Age: {data.age}</p>
                    <p className="text-sm text-slate-300">AUM: ${data.aum}M</p>
                    <p className="text-sm text-blue-300 mt-2">{data.focus}</p>
                </div>);

    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans pb-24">
            {/* Header */}
            <div className="pt-24 pb-8 px-6 lg:px-12 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <Link to={createPageUrl("UXResearchStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-slate-900 transition-colors uppercase mb-8">
                        <ArrowLeft className="w-4 h-4" /> Back to UX Studies
                    </Link>
                    <FadeIn>
                        <p className="text-[#000000] mb-4 text-xs font-bold uppercase tracking-[0.3em]">ROCKEFELLER CAPITAL MANAGEMENT</p>
                        <h1 className="text-slate-900 mb-6 text-base font-semibold leading-tight md:text-6xl">Member Experience : Mobile

            </h1>
                        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
                            Redesigning the Member-Facing Mobile App through proxy-facilitated ethnographic interviews.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* Context & Methodology */}
            <div className="max-w-5xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12">
                    <FadeIn>
                        <h2 className="text-2xl font-serif font-bold mb-6 text-slate-900 flex items-center gap-3">
                            <FileSearch className="text-[#030303] lucide lucide-file-search w-6 h-6" /> Research Context
                        </h2>
                        <div className="prose prose-slate text-slate-600">
                            <p className="font-normal">I faced a core constraint: I could not conduct member interviews directly. RCM's member relationships are deeply private. The advisory team was protective of the client experience and understandably cautious about introducing an outside-facing designer.

              </p>
                            <p>
                                The solution: a collaboration with RCM's quantitative analytics team. They had existing rapport with members. I designed the interview guide and analytical framework, and the quants facilitated the conversations during scheduled touchpoints.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <h2 className="text-2xl font-serif font-bold mb-6 text-slate-900 flex items-center gap-3">
                            <Activity className="text-[#0f0f0f] lucide lucide-activity w-6 h-6" /> Methodology
                        </h2>
                        <div className="bg-[#be9e74] text-[#000000] p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#bba986] mt-2 flex-shrink-0" />
                                    <span className="text-[#000000]">Proxy-Facilitated Interviews: 6 interviews conducted by quants.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#bba986] mt-2 flex-shrink-0" />
                                    <span className="text-[#000000]">Duration: 20–30 minutes per session.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#bba986] mt-2 flex-shrink-0" />
                                    <span className="text-[#000000]">Focus: Surface current behavior, entry points, pain points, and mental models around portfolio interaction.</span>
                                </li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Participants Data Visual */}
            <div className="bg-[#002938] py-24 text-white">
                <div className="max-w-5xl mx-auto px-6">
                    <FadeIn>
                        <h2 className="text-3xl font-serif font-bold mb-4 text-white text-center">Participant Overview</h2>
                        <p className="text-blue-200 text-center max-w-2xl mx-auto mb-16">
                            Six members participated across a range of wealth tiers, life stages, and relationship tenures. All had assets under management of $3M or more.
                        </p>

                        <div className="h-[400px] w-full bg-white/5 p-6 rounded-3xl backdrop-blur-sm border border-white/10">
                            <ResponsiveContainer width="100%" height="100%">
                                <ScatterChart margin={{ top: 20, right: 40, bottom: 20, left: 20 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                    <XAxis
                    type="number"
                    dataKey="age"
                    name="Age"
                    stroke="rgba(255,255,255,0.5)"
                    domain={[30, 75]}
                    tick={{ fill: 'rgba(255,255,255,0.7)' }}
                    label={{ value: 'Age', position: 'insideBottomRight', offset: -10, fill: 'rgba(255,255,255,0.5)' }} />
                  
                                    <YAxis
                    type="number"
                    dataKey="aum"
                    name="AUM"
                    stroke="rgba(255,255,255,0.5)"
                    tickFormatter={(val) => `$${val}M`}
                    tick={{ fill: 'rgba(255,255,255,0.7)' }}
                    label={{ value: 'AUM ($M)', angle: -90, position: 'insideLeft', fill: 'rgba(255,255,255,0.5)' }} />
                  
                                    <ZAxis type="number" range={[400, 400]} />
                                    <RechartsTooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3', stroke: 'rgba(255,255,255,0.2)' }} />
                                    <Scatter name="Members" data={participants} fill="#bba986">
                                        {participants.map((entry, index) =>
                    <Cell key={`cell-${index}`} fill={['#bba986', '#60a5fa', '#34d399', '#f472b6', '#a78bfa', '#fbbf24'][index % 6]} />
                    )}
                                    </Scatter>
                                </ScatterChart>
                            </ResponsiveContainer>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Thematic Synthesis & Design Decisions */}
            <div className="max-w-5xl mx-auto px-6 py-24">
                <FadeIn>
                    <h2 className="text-3xl font-serif font-bold mb-4 text-slate-900 text-center">From Insight to Design Decision</h2>
                    <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">I organized the findings into seven design-actionable themes. Each theme was pressure-tested against at least two member interviews.

          </p>

                    <div className="grid md:grid-cols-12 gap-8">
                        {/* Tabs */}
                        <div className="md:col-span-4 space-y-2">
                            {themes.map((theme, idx) =>
              <button
                key={idx}
                onClick={() => setActiveTheme(idx)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between ${
                activeTheme === idx ?
                'bg-white shadow-md border border-slate-200 text-slate-900' :
                'hover:bg-slate-100 text-slate-600 border border-transparent'}`
                }>
                
                                    <span className="font-medium">{theme.title}</span>
                                    <ChevronRight className="text-slate-950 lucide lucide-chevron-right w-4 h-4 transition-transform" />
                                </button>
              )}
                        </div>

                        {/* Content */}
                        <div className="md:col-span-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                  key={activeTheme}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }} className="bg-slate-300 p-8 rounded-2xl shadow-sm border border-slate-200">
                  
                  
                                    <div className="bg-slate-300 mb-8 pb-6 flex items-center gap-4 border-b border-slate-100">
                                        

                    
                                        <div>
                                            <h3 className="text-slate-900 text-sm font-bold">{themes[activeTheme].title}</h3>
                                            <div className="text-slate-950 mt-2 text-sm font-medium flex items-center gap-2">
                                                 Mentioned by Members: {themes[activeTheme].members.join(', ')}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-slate-950 mb-3 text-xs font-bold uppercase tracking-wider">RESEARCH INSIGHT</h4>
                                            <p className="bg-slate-200 text-slate-700 p-5 text-lg leading-relaxed rounded-xl border-l-4 border-slate-300">
                                                {themes[activeTheme].insight}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-[#000000] mb-3 text-xs font-bold uppercase tracking-wider">DESIGN DECISION</h4>
                                            <p className="text-gray-950 text-sm leading-relaxed">
                                                {themes[activeTheme].decision}
                                            </p>
                                        </div>

                                        <div className="bg-[#bdac89] text-white p-6 rounded-xl">
                                            <h4 className="text-gray-950 mb-2 text-xs font-bold uppercase tracking-wider">EXPECTED IMPACT</h4>
                                            <p className="text-gray-950">
                                                {themes[activeTheme].impact}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* New User Journey */}
            <div className="max-w-5xl mx-auto px-6 pt-12">
                <FadeIn>
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
                      <div className="mb-8">
                        
                        <h3 className="text-slate-900 mb-4 text-lg font-bold">New User Journey with Added Security</h3>
                        <p className="text-slate-600 text-base font-sans max-w-3xl">We added extra security measures. In addition to these new features, if the app was dormant for more than 2 minutes it would lock again. In order to change a passcode, a client would have to call their advisor. And in order to register, the same was applicable.

              </p>
                      </div>
                      <img
              src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/3484767bf_Screenshot2026-03-29at63055PM.png"
              alt="User Journey Flow"
              className="w-full h-auto rounded-xl shadow-sm border border-slate-200" />
                    </div>
                </FadeIn>
            </div>

            {/* App Visuals */}
            <div className="max-w-5xl mx-auto px-6 pt-12">
                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-8">
                        <img 
                            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/177df8908_Screenshot2026-03-29at35314PM.png" 
                            alt="Rockefeller Mobile App Details"
                            className="w-full h-auto rounded-2xl shadow-sm border border-slate-200 object-cover"
                        />
                        <img 
                            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/b7512c7e2_top-view-iphone-13-pro-with-an-app-logo-detail-mockup-template-69c98c7c882c70c8e3d349c4-2x.png" 
                            alt="Rockefeller App Icon on Home Screen"
                            className="w-full h-auto rounded-2xl shadow-sm border border-slate-200 object-cover"
                        />
                    </div>
                </FadeIn>
            </div>

            {/* Reflection */}
            <div className="max-w-5xl mx-auto px-6 pt-12 mt-12 border-t border-slate-200">
                <FadeIn>
                    <h2 className="text-2xl font-serif font-bold mb-8 text-slate-900 text-center">Reflection on the Proxy Facilitation Method</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-3">Trust transferred faster</h3>
                            <p className="text-sm text-slate-600">Members already had a working relationship with the quants. There was no warm-up period; they spoke candidly from the first question.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-3">Fluency enabled probing</h3>
                            <p className="text-sm text-slate-600">The quants understood the underlying portfolio structure immediately and could ask follow-up questions without signaling unfamiliarity.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-3">Tradeoff: Observational depth</h3>
                            <p className="text-sm text-slate-600">Lost access to body language, tone shifts, and nonverbal cues. The paraphrased notes filtered out emotional texture.</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>);

}