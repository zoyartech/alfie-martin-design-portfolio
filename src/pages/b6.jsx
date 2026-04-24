import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BrainCircuit, ShieldCheck, Activity, LineChart, Sparkles } from "lucide-react";
import { createPageUrl } from "@/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious } from
"@/components/ui/carousel";

export default function B6() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-6 mb-12">
            <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
            </Link>
            <Link to={createPageUrl("FluidUI")} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors">
              Designing VUI <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold tracking-wider rounded-full">PRODUCT DESIGN</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold tracking-wider rounded-full">AI MED TECH</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wider rounded-full">MENTAL HEALTH</span>
            </div>
            <h1 className="text-slate-900 mb-6 text-4xl font-normal tracking-tight md:text-6xl">Breakthrough 6: AI-Driven Care in Mental Health

            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed mb-12">
              Designing an intelligent, empathetic patient experience for a nationwide network of BRAIN Centers offering FDA-approved, drug-free neurotherapy treatments.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-gray-200">
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Role</p>
                <p className="font-medium text-slate-900">Lead Product Designer</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Timeline</p>
                <p className="font-medium text-slate-900">2024</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Platform</p>
                <p className="font-medium text-slate-900">Web & Mobile App</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Client</p>
                <p className="font-medium text-slate-900">Breakthrough 6</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Image */}
      <section className="px-6 lg:px-12 -mt-12 mb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <img src="https://static.wixstatic.com/media/25473f_bffdc90eb34f477e8551dd3bc82f87f5~mv2.jpg/v1/fill/w_1905,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/25473f_bffdc90eb34f477e8551dd3bc82f87f5~mv2.jpg" alt="Breakthrough 6 Overview" className="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-xl" />
        </div>
      </section>

      {/* Live Prototype */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-medium mb-4 text-slate-900">Live Prototype</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the patient journey through our interactive Impact Neuro Flow prototype.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto mb-16">
          <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/2d9bb8294_1.png"
            alt="What if Mental Health Treatment Worked"
            className="w-full h-auto object-contain rounded-2xl shadow-xl" />
          
        </div>

        <div className="w-full h-[1000px] rounded-[9px] overflow-hidden shadow-2xl border border-gray-200">
          <iframe
            src="https://impact-neuro-flow.base44.app"
            className="w-full h-full border-0"
            allowFullScreen
            title="Impact Neuro Flow Prototype" />
          
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-medium text-slate-900 sticky top-24">The Challenge</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              What if mental health treatment actually worked? That's the question Breakthrough 6 (B6) asked when creating their nationwide network of BRAIN (Breakthroughs in Rapid Acting Interventional Neurotherapy) Centers. They offer drug-free, FDA-approved treatments for depression, PTSD, OCD, and ADHD.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              The challenge was designing a digital patient experience that felt as revolutionary as their treatments. We needed an AI-driven intake and monitoring system that didn't feel cold or robotic, but deeply empathetic and secure—guiding patients from their first inquiry to post-treatment recovery.
            </p>
            
            <div className="mb-12 flex justify-center">
              


              
              
            </div>
            
            















            
          </div>
        </div>
      </section>

      {/* Patient Journey Image */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-medium text-slate-900">Patient Journey</h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/957bb9c2d_PatientJourney.png"
            alt="Patient Journey"
            className="w-full h-auto object-contain rounded-2xl shadow-lg" />
        </div>
        
        <div className="max-w-7xl mx-auto mt-16">
          <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/8d7eefbd7_Screenshot2026-04-24at75808AM.png"
            alt="Breakthrough 6 text chatbot intent taxonomy"
            className="w-full h-auto object-contain rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Audience Segments Carousel */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-6xl mx-auto px-12 sm:px-16">
          <Carousel className="w-full">
            <CarouselContent>
              {[
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/94906b611_1.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/9c41c7ba5_2.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/b61760e8a_3.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/a2c317dbd_4.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/2f9b4a778_5.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/1c9d85991_6.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/4f8de4043_7.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/900f93d03_8.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/e3f6d1bf0_9.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/983762958_4.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/69fe50b02_5.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/38e0810f3_6.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/38e2c7adc_7.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d790eb025_8.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/87434b9f8_9.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/f77312539_10.png",
              "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/a3175dcee_11.png"].
              map((src, index) =>
              <CarouselItem key={index}>
                  <div className="p-1">
                    <img
                    src={src}
                    alt={`Audience Segment ${index + 1}`}
                    className="w-full h-auto object-contain rounded-2xl shadow-md border border-gray-200" />
                  
                  </div>
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 px-6 lg:px-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-medium mb-6">Designing for Empathy & Efficacy</h2>
            <p className="text-xl text-slate-300">
              Balancing advanced AI diagnostic tools with a warm, supportive interface for vulnerable users.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              
              <h3 className="text-2xl font-semibold mb-4">AI-Guided Intake</h3>
              <p className="text-slate-300 leading-relaxed">
                Traditional intake forms for mental health are exhausting. We designed a conversational AI interface that adapts its questions based on the user's condition (Depression, PTSD, ADHD, or OCD). The UI uses soft transitions, large tap targets, and encouraging micro-copy to reduce abandonment.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              
              <h3 className="text-2xl font-semibold mb-4">Neurotherapy Progress Dashboard</h3>
              <p className="text-slate-300 leading-relaxed">
                Patients receiving Rapid Acting Interventional Neurotherapy needed to see their progress visually. We created a dashboard that correlates their daily self-reported moods (collected via a gentle daily AI check-in) with their clinical treatment milestones, showing clear trajectories of healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Billboard Image */}
      <section className="px-6 lg:px-12 pt-24">
        <div className="max-w-7xl mx-auto">
          <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/9f6649c37_billboard.png"
            alt="Breakthrough 6 Billboard"
            className="w-full h-auto object-contain rounded-2xl shadow-lg" />
          
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-medium mb-16 text-slate-900">The Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="text-5xl font-light text-blue-600 mb-4">40%</div>
              <p className="text-xl font-medium text-slate-900 mb-2">Increase in Intake Completion</p>
              <p className="text-gray-600">Compared to the previous static PDF forms.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="text-5xl font-light text-emerald-600 mb-4">85%</div>
              <p className="text-xl font-medium text-slate-900 mb-2">Daily Check-in Rate</p>
              <p className="text-gray-600">High engagement with the AI symptom tracker.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="text-5xl font-light text-purple-600 mb-4">3x</div>
              <p className="text-xl font-medium text-slate-900 mb-2">Faster Triage</p>
              <p className="text-gray-600">Clinicians received prioritized insights before sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2024 Alfie Martin. Case study for Breakthrough 6.</p>
        </div>
      </footer>
    </div>);

}