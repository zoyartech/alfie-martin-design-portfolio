import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Target, Sparkles, UserCheck, BarChart3, Presentation, RefreshCw, Users } from 'lucide-react';
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

export default function GlossierStrategy() {
  return (
    <div className="min-h-screen bg-[#FADCE2] font-sans text-slate-900 pb-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed top-[-20%] right-[-10%] w-[60%] h-[60%] bg-white transform rotate-12 opacity-40 mix-blend-overlay pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[40%] h-[50%] bg-black transform -rotate-6 opacity-[0.03] pointer-events-none" />

      {/* Navigation */}
      <div className="fixed top-24 left-6 z-50">
        <Link to={createPageUrl("Writing")} className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] text-slate-700 hover:text-slate-900 transition-all uppercase font-bold bg-white/50 backdrop-blur-md px-5 py-3 rounded-full shadow-sm hover:shadow-md border border-white/60">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Content
        </Link>
      </div>

      <div className="max-w-5xl mx-auto pt-40 px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center">
          
          <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/880233bb5_Screenshot2026-04-04at55431AM.png"
            alt="Glossier Strategy Cover"
            className="w-full max-w-4xl mx-auto shadow-2xl mb-12 object-cover border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 rounded-lg" />
          

          <h1 className="text-6xl md:text-8xl font-black mb-6 text-white mix-blend-difference tracking-tighter uppercase">
            Glossier
          </h1>
          <p className="text-xl md:text-3xl text-slate-800 font-medium max-w-2xl mx-auto tracking-tight">
            Market & Content Strategy
          </p>
        </motion.div>

        {/* Background & Purpose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12">
            <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/34c7a7cdb_Screenshot2026-04-04at60021AM.png"
            alt="Background and Purpose Cover"
            className="w-full max-w-4xl mx-auto shadow-xl rounded-2xl border-2 border-white object-cover" />
          
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-32">
            <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm p-10 rounded-[2rem] border border-white shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-slate-900 border-b-4 border-[#FADCE2] pb-2 inline-block">Background</h2>
                <p className="text-lg leading-relaxed text-slate-700">
                    Glossier is giving voice through beauty as a direct-to-consumer company that leverages the power of personal narrative to own the beauty conversation on the internet.
                </p>
            </motion.div>
            
            <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-10 rounded-[2rem] shadow-xl text-white transform md:translate-y-12">
                <h2 className="text-3xl font-bold mb-6 border-b-4 border-[#FADCE2]/30 pb-2 inline-block">Purpose</h2>
                <p className="text-lg leading-relaxed text-slate-300">
                    As a brand that puts skin first, Glossier is redefining the beauty industry by fusing the insights of our community with our beauty-editor expertise (rooted in Glossier's successful publication Into The Gloss) to create a line of intuitive, enjoyable products that work hard for you (not the other way around). Together, we're bringing the experience of shopping for (and talking about) beauty into the future.
                </p>
            </motion.div>
        </div>

        {/* Market & Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32">
            
            <div className="mb-12">
                <img
              src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/788fdf2bb_Screenshot2026-04-04at60032AM.png"
              alt="Market and Trends Analysis Cover"
              className="w-full max-w-4xl mx-auto shadow-xl rounded-2xl border-2 border-white object-cover mb-12" />
            
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Market & Trends Analysis</h2>
            
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border-4 border-white relative overflow-hidden">
                {/* Accent shape */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FADCE2] rounded-full filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
                
                <h3 className="text-2xl font-bold mb-6 text-slate-900 relative z-10">Product Category Expansion Trends</h3>
                <p className="text-xl leading-relaxed text-slate-600 mb-8 relative z-10 max-w-3xl">
                    Glossier has expanded beyond its initial makeup and skincare focus to include fragrance and body care products. This diversification strategy mirrors industry trends, with brands increasingly crossing category boundaries.
                </p>
                <p className="text-lg leading-relaxed text-slate-500 relative z-10 max-w-3xl">
                    Summer Fridays has successfully expanded from masks to a full skincare line, while Makeup by Mario has moved from color cosmetics to complexion products. Category fluidity has become essential for growth in the competitive beauty market.
                </p>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16">
            <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/f0a37a8ba_Screenshot2026-04-04at60054AM.png"
            alt="Brand Positioning Map"
            className="w-full max-w-4xl mx-auto shadow-xl rounded-2xl border-2 border-white object-cover" />
          
        </motion.div>

        {/* Strategic Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
            {[
          { icon: Sparkles, title: "Technological Integration" },
          { icon: Users, title: "Community Driven Product Development" },
          { icon: Presentation, title: "Omnichannel Strategy" }].
          map((trend, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 group border border-white hover:border-[#FFB6C1]">
                    <div className="w-16 h-16 bg-[#FADCE2] rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform">
                        <trend.icon className="w-8 h-8 text-[#FF6B81]" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900">{trend.title}</h3>
                </motion.div>
          )}
        </div>

        {/* Strategic Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12">
            <img
            src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/e1dfd5902_Screenshot2026-04-04at60103AM.png"
            alt="Strategic Approach Cover"
            className="w-full max-w-4xl mx-auto shadow-xl rounded-2xl border-2 border-white object-cover" />
          
        </motion.div>

        











        

        {/* Content Vision, Mission & Goals */}
        <div className="mb-32">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-16 uppercase tracking-tighter">
                Content Vision,<br />Mission, & Goals
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[2rem] shadow-lg border-t-8 border-slate-900">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-bold text-slate-900">Mission</h3>
                        <Target className="w-10 h-10 text-[#FF6B81]" />
                    </div>
                    <div className="space-y-6 text-lg text-slate-600">
                        <p>We believe in thoughtful design and cultivating conversations. It's at the core of everything we do, the starting point of all our makeup, skincare, bodycare, and fragrance products.</p>
                        <p>At Glossier, beauty is about celebrating freedom of expression, individuality, and having fun.</p>
                        <p className="font-semibold text-slate-900">Our Skin First. Makeup Second approach ensures that every product supports your skin's health, allowing your makeup to enhance rather than mask your natural beauty.</p>
                    </div>
                </motion.div>

                <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-12 rounded-[2rem] shadow-lg border-t-8 border-[#FFB6C1]">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-bold text-slate-900">Vision</h3>
                        <Eye className="w-10 h-10 text-[#FF6B81]" />
                    </div>
                    <div className="space-y-6 text-lg text-slate-600">
                        <p>Now that you're here, take a look around. Mingle with our products, and enjoy. Because no matter where you are in your beauty journey— YOU LOOK GOOD.</p>
                        <p className="font-semibold text-slate-900 italic">Discover products that prioritize your skin's wellbeing while allowing your individuality to shine through. Skin First. Makeup Second™.</p>
                    </div>
                </motion.div>
            </div>

            {/* Tactical Goals */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 text-white rounded-[3rem] p-12 shadow-2xl relative overflow-hidden">
                
                {/* Abstract graphic */}
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                   <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#FFFFFF" d="M45.7,-76.4C58.9,-69.3,69,-55.1,76.5,-40.5C84,-25.9,88.9,-10.9,88.2,3.7C87.4,18.4,80.9,32.7,71.5,44.7C62.1,56.7,49.8,66.4,36.2,74.5C22.6,82.6,7.7,89.1,-7.4,88.7C-22.5,88.3,-37.9,81.4,-51.2,71.5C-64.5,61.6,-75.7,48.8,-82.2,33.9C-88.7,19,-90.5,2,-86.6,-13.4C-82.7,-28.8,-73.1,-42.6,-60.9,-51.9C-48.7,-61.2,-33.9,-66,-19.7,-70.6C-5.5,-75.2,8.7,-79.6,22.8,-79.5C36.9,-79.4,45.7,-76.4,45.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-12 text-center text-[#FADCE2]">Tactical Objectives</h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 text-center">
                        <div>
                            <div className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Improve Messaging</div>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Widen Reach</div>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Increase Engagement</div>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Reward Loyalty</div>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Generate Leads</div>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Increase Views</div>
                        </div>
                    </div>

                    <div className="border-t border-white/20 mt-12 pt-12">
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="flex items-center gap-3 bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                                <RefreshCw className="w-5 h-5 text-[#FFB6C1]" />
                                <span className="font-semibold">Reoccurring Customers</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                                <BarChart3 className="w-5 h-5 text-[#FFB6C1]" />
                                <span className="font-semibold">Increased CLTV</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                                <UserCheck className="w-5 h-5 text-[#FFB6C1]" />
                                <span className="font-semibold">Increase Conversions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

      </div>
    </div>);

}