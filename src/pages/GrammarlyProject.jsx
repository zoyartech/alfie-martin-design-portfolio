import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function GrammarlyProject() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="text-sm tracking-[0.3em] font-medium">
              ALFIE MARTIN
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <Link to={createPageUrl("Home")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                HOME
              </Link>
              <Link to={createPageUrl("CaseStudies")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                CASE STUDIES
              </Link>
              <Link to={createPageUrl("Gallery")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                GALLERY
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12" style={{ backgroundColor: '#edfdf4' }}>
        <div className="max-w-4xl mx-auto">
          <Link 
            to={createPageUrl("Home")}
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO HOME
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.2em] text-gray-400">PRODUCT DESIGN</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="text-xs text-gray-400">Lead Product Designer</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light mb-6">Grammarly</h1>
            <p className="text-2xl text-gray-400 mb-12">
              Product Design & Growth Experiments for DTC Mobile & Web
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video overflow-hidden bg-gray-100 mb-16"
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/bb85e69a3_67544f22504122347b62847a1332262d-1.png"
              alt="Grammarly Product Design"
              className="w-full h-full object-cover shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs tracking-[0.3em] text-gray-400 mb-4">PROJECT OVERVIEW</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              I worked on Grammarly's product growth design team, working in growth experimentation 
              initiatives for Grammarly's direct-to-consumer applications, focusing on improving user 
              activation, engagement, and long-term retention across mobile and web platforms. I focused 
              on market segments that weren't addressed by Grammarly's positioning. Predominantly people 
              that could benefit from using Grammarly but were using it in lower numbers. Writers who 
              worked as writers on the creative side of business, and student writers who wrote in more 
              creative, less research and academia related types of writing.
            </p>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium mb-3">User Activation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Designed onboarding flows and first-time user experiences to reduce time-to-value 
                and increase feature adoption.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium mb-3">Growth Experiments</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Conducted A/B tests and multivariate experiments to optimize conversion funnels 
                and user engagement metrics.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium mb-3">Retention Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Developed features and experiences to improve long-term user retention and 
                reduce churn rates.
              </p>
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs tracking-[0.3em] text-gray-400 mb-8">KEY ACHIEVEMENTS</h2>
            <div className="bg-gray-50 p-8 md:p-12 space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-2">Improved User Activation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Redesigned onboarding experience resulted in <span className="font-medium">23% increase</span> in 
                  user activation within first 7 days.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2">Enhanced Feature Discovery</h3>
                <p className="text-gray-700 leading-relaxed">
                  New UI patterns increased feature adoption rates by <span className="font-medium">35%</span> across 
                  premium features.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2">Reduced Churn Rate</h3>
                <p className="text-gray-700 leading-relaxed">
                  Retention-focused design improvements led to <span className="font-medium">18% reduction</span> in 
                  monthly churn.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-video overflow-hidden bg-gray-100"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
              alt="Grammarly Mobile Interface"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Design Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs tracking-[0.3em] text-gray-400 mb-4">DESIGN PROCESS</h2>
            <p className="text-lg text-gray-700 mb-8">
              Data-driven approach to product design and experimentation
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-6">
                <h3 className="text-lg font-medium mb-3">Research</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  User interviews, analytics analysis, and competitive research to identify opportunities.
                </p>
              </div>
              <div className="border border-gray-200 p-6">
                <h3 className="text-lg font-medium mb-3">Ideation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Collaborative workshops and design sprints to generate and validate solution concepts.
                </p>
              </div>
              <div className="border border-gray-200 p-6">
                <h3 className="text-lg font-medium mb-3">Prototyping</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Rapid prototyping and user testing to refine designs before development.
                </p>
              </div>
              <div className="border border-gray-200 p-6">
                <h3 className="text-lg font-medium mb-3">Testing</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A/B testing and performance monitoring to measure impact and iterate.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-4"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
                alt="Grammarly Design Process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=800&q=80"
                alt="Grammarly Interface Details"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs tracking-[0.3em] text-gray-400 mb-8">TOOLS & TECHNOLOGIES</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Design Tools</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h4 className="font-medium mb-1">Figma</h4>
                    <p className="text-sm text-gray-600">Design systems and collaborative prototyping</p>
                  </div>
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h4 className="font-medium mb-1">Principle</h4>
                    <p className="text-sm text-gray-600">Interactive prototypes and animations</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Analytics & Testing</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h4 className="font-medium mb-1">Amplitude</h4>
                    <p className="text-sm text-gray-600">User behavior analytics and cohort analysis</p>
                  </div>
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h4 className="font-medium mb-1">Optimizely</h4>
                    <p className="text-sm text-gray-600">A/B testing and feature flagging</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Learn More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-gray-200 pt-12"
          >
            <h2 className="text-xs tracking-[0.3em] text-gray-400 mb-4">LEARN MORE</h2>
            <p className="text-gray-700 mb-6">
              Explore Grammarly's current product and see the impact of design improvements
            </p>
            <a 
              href="https://www.grammarly.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-300"
            >
              Visit Grammarly <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">Instagram</a>
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}