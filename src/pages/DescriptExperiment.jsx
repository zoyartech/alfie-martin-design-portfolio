import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Beaker, FileText, BarChart, Target, Shield, Rocket, CheckCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const StaggerContainer = ({ children, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
      }}
      className={className}>
      
      {children}
    </motion.div>);

};

const ItemAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

const MagazineSection = ({ title, subtitle, icon: Icon, children, align = "left", color = "bg-indigo-600" }) =>
<div className={`py-24 ${align === "center" ? "text-center" : ""}`}>
    <StaggerContainer className="max-w-6xl mx-auto px-6">
      <motion.div variants={ItemAnim} className={`inline-flex items-center gap-3 mb-6 ${align === "center" ? "mx-auto" : ""}`}>
        

      
        <span className="font-black tracking-widest uppercase text-sm text-slate-500">{subtitle}</span>
      </motion.div>
      
      <motion.h2 variants={ItemAnim} className="text-slate-900 mb-12 text-5xl font-normal tracking-tighter leading-tight md:text-7xl">
        {title}
      </motion.h2>
      
      <motion.div variants={ItemAnim} className="prose prose-lg md:prose-xl prose-slate max-w-none text-slate-600">
        {children}
      </motion.div>
    </StaggerContainer>
  </div>;


export default function DescriptExperiment() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-[#F4F4F5] font-sans selection:bg-indigo-200 selection:text-indigo-900 overflow-hidden" ref={containerRef}>
      
      {/* Navigation */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.5 }}
        className="fixed top-8 left-6 z-50 hidden lg:block">
        
        <Link to={createPageUrl("Writing")} className="group flex items-center gap-3 text-xs tracking-widest text-slate-900 hover:text-indigo-600 transition-colors uppercase font-black bg-white/90 backdrop-blur-xl px-6 py-4 rounded-[10px] shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-white/20">
          <motion.div whileHover={{ x: -4 }} transition={{ type: "spring" }}>
            <ArrowLeft className="w-4 h-4" /> 
          </motion.div>
          Back to Content
        </Link>
      </motion.div>

      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0">
          
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-slate-900/80 mix-blend-multiply z-10" />
          <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/6e8355cb9_backkkk.png"
            alt="Abstract Background"
            className="w-full h-full object-cover scale-110" />
          
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <StaggerContainer>
            <motion.div variants={ItemAnim} className="inline-block mb-8">
              <span className="bg-indigo-500 text-white text-xs font-black tracking-widest uppercase px-4 py-2 rounded-[10px] shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                Growth Experiment Proposal
              </span>
            </motion.div>
            
            <motion.h1 variants={ItemAnim} className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              REVERSE TRIAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                AI-FIRST EDIT
              </span>
            </motion.h1>
            
            <motion.p variants={ItemAnim} className="text-slate-50 mb-16 text-2xl font-medium leading-tight md:text-3xl max-w-3xl">
              A data-backed activation and conversion experiment designed to redefine the onboarding experience at Descript.
            </motion.p>

            <motion.div variants={ItemAnim} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
              { label: "Target", value: "Activation" },
              { label: "Sample", value: "10,000 Users" },
              { label: "Duration", value: "8 Weeks" },
              { label: "Expected Lift", value: "+15–25%" }].
              map((stat, idx) =>
              <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[10px] p-6 hover:bg-white/20 transition-colors">
                  <p className="text-indigo-300 text-xs font-black uppercase tracking-widest mb-2">{stat.label}</p>
                  <p className="text-white font-bold text-xl md:text-2xl">{stat.value}</p>
                </div>
              )}
            </motion.div>
          </StaggerContainer>
        </div>
      </div>

      {/* 1. Problem Definition */}
      <MagazineSection title="The Activation Gap" subtitle="01 / The Problem" icon={FileText} color="bg-rose-500">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-slate-800 mb-8 text-lg font-medium leading-relaxed">Descript's core value proposition is that editing video is as easy as editing a document. A genuinely novel paradigm, but novelty comes with a cost: the magic moment is delayed.

            </p>
            <div className="bg-white p-8 rounded-[10px] shadow-sm border border-slate-200">
              <h4 className="font-bold text-slate-900 text-xl mb-4">The 7-Step Journey</h4>
              <ul className="space-y-3 font-medium text-slate-600">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">1</div> Create an account</li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">2</div> Navigate the interface</li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">3</div> Upload or record media</li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">4</div> Wait for transcription</li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">5</div> Discover text-based editing</li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">6</div> Make a meaningful edit</li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600">7</div> Export or publish</li>
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900 text-white p-10 rounded-[10px] shadow-xl">
              
              <h3 className="mb-4 text-3xl font-normal">The Free Tier Paradox</h3>
              <p className="text-slate-300 font-medium text-lg leading-relaxed">
                1 media hour and 100 AI credits per month. Too limited to form habits, but too generous to create urgency. Users leave thinking it's "another video editor" instead of an "AI co-editor."
              </p>
            </motion.div>
            
            <div className="bg-cyan-200 p-10 rounded-[10px] border border-rose-100">
              
              <h3 className="text-gray-950 mb-2 text-2xl font-normal">The Opportunity</h3>
              <p className="text-gray-950 font-medium">At a 12% conversion rate and ~1.5M active users, a 3-percentage-point improvement yields $10.8M–$18.9M in incremental ARR.

              </p>
            </div>
          </div>
        </div>
      </MagazineSection>

      {/* 2. Data Foundation */}
      <div className="bg-white py-24 border-y border-slate-200">
        <StaggerContainer className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div variants={ItemAnim} className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-[10px] bg-cyan-500 text-white flex items-center justify-center transform -rotate-3 shadow-lg">
                <BarChart className="w-6 h-6" />
              </div>
              <span className="font-black tracking-widest uppercase text-sm text-slate-500">02 / The Data</span>
            </motion.div>
            <motion.h2 variants={ItemAnim} className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              Grounded in Evidence
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
            {
              stat: "14-21%",
              title: "Reverse Trial Conversion",
              desc: "Reverse trials consistently outperform freemium models (3-15%) because users anchor on the premium experience."
            },
            {
              stat: "40.4%",
              title: "Optimal Trial Length",
              desc: "Trials of 7 days or fewer yield significantly higher conversion compared to longer trials by creating urgency."
            },
            {
              stat: "10 min",
              title: "The Value Threshold",
              desc: "Time-to-value under 10 minutes sees conversions happen 30-40% faster than industry averages."
            }].
            map((item, idx) =>
            <motion.div
              key={idx}
              variants={ItemAnim}
              whileHover={{ y: -10 }}
              className="bg-[#F4F4F5] p-10 rounded-[10px]">
              
                <div className="text-5xl font-black text-cyan-600 mb-4 tracking-tighter">{item.stat}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            )}
          </div>
        </StaggerContainer>
      </div>

      {/* 3. Hypothesis */}
      <MagazineSection title="The Master Hypothesis" subtitle="03 / The Logic" icon={Beaker} color="bg-violet-600">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-br from-violet-600 to-indigo-700 p-12 md:p-16 rounded-[10px] shadow-2xl text-white mb-16">
          
          <h3 className="text-2xl md:text-4xl font-black leading-tight mb-8">
            "If we give new users a 7-day reverse trial combined with an AI-guided onboarding that delivers exportable video under 10 minutes..."
          </h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-[10px]">
              <span className="block text-violet-200 text-sm font-bold uppercase tracking-widest mb-1">Conversion Lift</span>
              <span className="text-3xl font-black">+15–25%</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-[10px]">
              <span className="block text-violet-200 text-sm font-bold uppercase tracking-widest mb-1">7-Day Activation</span>
              <span className="text-3xl font-black">+30–45%</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
          { title: "Compressed TTV", desc: "Automating steps 2-6 compresses time-to-value from 40 mins to under 10 mins." },
          { title: "Loss Aversion", desc: "Downgrading from 4K export and Studio Sound after 7 days triggers powerful loss aversion." },
          { title: "Feature Anchoring", desc: "Users compare full Creator tier against alternatives, not the limited Free tier." },
          { title: "Output Investment", desc: "Producing a polished output builds workflow muscle memory and switching costs." }].
          map((mech, idx) =>
          <motion.div
            key={idx}
            variants={ItemAnim}
            className="flex gap-6 items-start">
            
              <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-500 font-black text-xl flex items-center justify-center shrink-0">
                {idx + 1}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{mech.title}</h4>
                <p className="text-slate-600 font-medium text-lg leading-relaxed">{mech.desc}</p>
              </div>
            </motion.div>
          )}
        </div>
      </MagazineSection>

      {/* 4. The Intervention */}
      <div className="bg-slate-900 py-24 text-white">
        <StaggerContainer className="max-w-6xl mx-auto px-6">
          <motion.div variants={ItemAnim} className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-[10px] bg-emerald-500 text-white flex items-center justify-center transform rotate-6 shadow-lg">
              <Target className="w-6 h-6" />
            </div>
            <span className="font-black tracking-widest uppercase text-sm text-slate-400">04 / The Experience</span>
          </motion.div>
          <motion.h2 variants={ItemAnim} className="text-5xl md:text-7xl font-black tracking-tighter mb-16">
            The Treatment
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={ItemAnim} className="bg-white/10 border border-white/10 p-10 rounded-[10px]">
              <h3 className="text-3xl font-black mb-6 text-emerald-400">7-Day Reverse Trial</h3>
              <p className="text-slate-300 text-lg mb-8 font-medium">Upon account creation, the user is immediately placed on the Creator tier ($24/mo value) for 7 days.</p>
              <ul className="space-y-4">
                {["30 media hours", "800 AI credits", "4K export", "Full Underlord AI access"].map((feature, i) =>
                <li key={i} className="flex items-center gap-4 text-xl font-bold">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                    {feature}
                  </li>
                )}
              </ul>
            </motion.div>

            <motion.div variants={ItemAnim} className="bg-emerald-500 text-slate-900 p-10 rounded-[10px]">
              <h3 className="text-3xl font-black mb-6">AI-Guided First Edit</h3>
              <p className="font-medium text-lg mb-8 opacity-90">Designed to produce a publishable output in under 10 minutes before seeing the standard editor.</p>
              
              <div className="space-y-6">
                {[
                { step: "1", title: "Intent Selection", time: "30s" },
                { step: "2", title: "Media Input", time: "1-3m" },
                { step: "3", title: "AI Auto-Edit", time: "1-2m" },
                { step: "4", title: "Review & Refine", time: "2-4m" }].
                map((s, i) =>
                <div key={i} className="flex items-center gap-6 bg-white/20 p-4 rounded-[10px]">
                    <div className="w-10 h-10 bg-slate-900 text-emerald-500 font-black rounded-[10px] flex items-center justify-center">
                      {s.step}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-xl">{s.title}</div>
                    </div>
                    <div className="font-black opacity-60">{s.time}</div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </StaggerContainer>
      </div>

      {/* 5. Rollout & Risk */}
      <MagazineSection title="Execution Strategy" subtitle="05 / The Plan" icon={Rocket} color="bg-amber-500">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-black text-slate-900 mb-8">Phased Launch</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              {[
              { phase: "Phase 0", title: "Pre-Launch (W1-3)", desc: "Build & QA experiment components" },
              { phase: "Phase 1", title: "Soft Launch (W4)", desc: "10% allocation to catch edge cases" },
              { phase: "Phase 2", title: "Full Deploy (W5-8)", desc: "50/50 split, full data collection" },
              { phase: "Phase 3", title: "Analysis (W9-10)", desc: "Evaluate significance & make decision" }].
              map((phase, i) =>
              <motion.div
                key={i}
                variants={ItemAnim}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-amber-500 text-white font-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    {i}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-[10px] shadow-sm border border-slate-200 ml-4 md:ml-0">
                    <h4 className="font-black text-slate-900 text-lg mb-1">{phase.title}</h4>
                    <p className="text-slate-600 font-medium text-sm">{phase.desc}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <Shield className="w-8 h-8 text-slate-400" />
              Risk Mitigation
            </h3>
            <div className="space-y-4">
              {[
              { risk: "Low-quality conversions", mit: "D30 paid retention is guardrail metric." },
              { risk: "Compute cost spike", mit: "Monitor per-user AI credit consumption." },
              { risk: "Negative sentiment", mit: "Careful UX framing at Day 8 downgrade." }].
              map((risk, idx) =>
              <motion.div
                key={idx}
                variants={ItemAnim}
                className="bg-slate-100 p-6 rounded-[10px]">
                
                  <h4 className="font-bold text-slate-900 text-lg mb-2">{risk.risk}</h4>
                  <p className="text-slate-600 font-medium">{risk.mit}</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </MagazineSection>

      {/* Footer Section */}
      <div className="bg-slate-950 py-16 text-center">
        <p className="text-slate-500 font-bold tracking-widest uppercase text-sm">
          Prepared by Ally Martin · Wexley House
        </p>
      </div>

    </div>);

}