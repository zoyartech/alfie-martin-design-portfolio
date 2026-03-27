import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, PieChart, Monitor, Lightbulb, ChevronRight, CheckCircle2, Search, HelpCircle, Mail, MousePointerClick, MessageSquare } from 'lucide-react';
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function BillingUsabilityStudy() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      
      {/* Back button */}
      <div className="fixed top-24 left-6 z-50">
        <Link to={createPageUrl("CaseStudies")} className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] text-slate-600 hover:text-slate-900 transition-all uppercase font-bold bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm hover:shadow-md border border-slate-200">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Case Studies
        </Link>
      </div>

      <div className="pt-20">
        {/* Slide 1 - Hero */}
        <section className="bg-[#e7efff] min-h-[90vh] flex flex-col justify-center relative border-b border-l-8 border-l-[#fbfae1] border-b-[#fbfae1] overflow-hidden">
          <div className="absolute top-8 right-8 border border-slate-900 rounded-full px-4 py-1 text-sm font-mono bg-[#fbfae1] shadow-sm z-10">
            Alfie Martin
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-100 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none"></div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto px-6 w-full relative z-10">
            
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-semibold mb-6 tracking-tight text-slate-900">
              Billing & Payments
            </motion.h1>
            <motion.p variants={fadeUp} className="text-3xl md:text-4xl font-light text-slate-700 flex items-center gap-4">
              Usability Study
              <span className="h-px bg-slate-400 flex-1 ml-6 max-w-xs hidden md:block"></span>
            </motion.p>
          </motion.div>
        </section>

        {/* Slide 2 - Objective */}
        <section className="bg-white py-24 md:py-32 border-l border-slate-200 relative">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-cyan-300 rounded-full w-12 h-12 flex items-center justify-center">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Study Objective</h2>
              </div>
              <p className="bg-cyan-50 text-slate-700 p-8 text-2xl font-light leading-relaxed rounded-2xl md:text-3xl md:p-12 border border-slate-100 shadow-sm">Evaluate the usability of the updated
'Bill is Ready' email,
the discoverability of the
'My Bill Insights' page from the email, and
the clarity and usefulness of the information
on the 'My Bill Insights' page.

              </p>
            </motion.div>
          </div>
        </section>

        {/* Slide 3 - Details */}
        <section className="bg-[#e0f8fb] py-24 md:py-32 border-l border-slate-300">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-medium mb-16 text-slate-900">
              
              Study Details
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 md:gap-12 items-stretch mb-16">
              
              <motion.div variants={fadeUp} className="text-xl pr-8 md:border-r-4 border-slate-900 text-slate-700">
                <p className="sticky top-32">Users were given the following scenario then asked to complete seven related Tasks :</p>
              </motion.div>
              
              <motion.div variants={fadeUp} className="bg-white p-8 rounded-2xl text-lg italic leading-relaxed shadow-md border border-slate-100 relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-purple-700 text-xl font-serif">"</span>
                </div>
                Imagine you've just received your monthly utility bill in your inbox. The bill was higher than expected, so you want to check the details to understand what's driving your bill. You're going to open the email and search for more information about your usage and charges.
              </motion.div>
              
              <motion.div variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-xl mb-6 text-slate-900 flex items-center gap-2">
                  <span className="w-8 h-px bg-slate-900"></span> METHODOLOGY
                </h3>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> Unmoderated Usability Study via UserZoom</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> Eight Participants</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> Opco Mix</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> Average 12 minutes per session</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> Results include screen recordings, transcript, task success and questionnaire responses</li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl text-lg md:text-xl text-center shadow-lg">
              
              The study concluded with a five-part final reflection questionnaire designed to assess users' affinity for the designs presented.
            </motion.div>
          </div>
        </section>

        {/* Slide 4 - Summary */}
        <section className="bg-[#e7efff] py-24 md:py-32 border-l border-slate-300">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}>
              
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Executive Summary</motion.h2>
              <motion.p variants={fadeUp} className="text-xl mb-8 leading-relaxed text-slate-700 bg-white/50 p-6 rounded-xl border border-white">
                The usability study validated the appeal, clarity, and discoverability of the authenticated 'My Bill Insights' page and enhanced 'Bill is Ready' email, while also surfacing future opportunities to elevate the post-MVP experience.
              </motion.p>
              <motion.ul variants={fadeUp} className="space-y-6 text-lg text-slate-800">
                <li className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                  <span>Participants mentioned how easy, smooth and straightforward the experience was overall.</span>
                </li>
                <li className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                  <span>The amount of information or specificity of information (such as the energy use breakdown) was a pleasant surprise to participants.</span>
                </li>
                <li className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                  <span>Many participants first clicked 'View Bill' from the 'Bill is Ready' email when asked to find more information on their bill, indicating the 'My Bill Insights' page could be even more discoverable if linked from the bill itself.</span>
                </li>
                <li className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0 hidden"></div>
                  <span className="font-medium text-green-800">Six of eight participants were 'extremely likely' to use this webpage in the future to understand their bill.</span>
                </li>
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl relative">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-bl-full -z-10 rounded-tr-3xl"></div>
              <h3 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-3">
                <Lightbulb className="text-yellow-500" /> FUTURE OPPORTUNITIES
              </h3>
              <ul className="space-y-5 text-lg text-slate-700">
                <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-yellow-500 shrink-0 mt-1" /> Position link to 'My Bill Insights' page on bill itself</li>
                <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-yellow-500 shrink-0 mt-1" /> Include more support options in addition to FAQs</li>
                <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-yellow-500 shrink-0 mt-1" /> Explore feasibility of more granular usage chart for customers to see peak usage times (daily or hourly)</li>
                <li className="mt-8 pt-8 border-t border-slate-100 flex items-start gap-3"><ChevronRight className="w-5 h-5 text-yellow-500 shrink-0 mt-1" /> Separate personalized tips from Home Energy Analysis breakdown, or make more discoverable (QPower)</li>
                <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-yellow-500 shrink-0 mt-1" /> Make the Home Energy Analysis breakdown more interactive (ie. Clicking into usage)</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Slide 5 - Open Email */}
        <section className="flex flex-col md:flex-row min-h-[70vh] border-l border-slate-300">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#fbfae1] w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-300">
            
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-slate-800" />
              <h2 className="text-3xl font-bold text-slate-900">Open Email</h2>
            </div>
            <div className="bg-white/60 p-6 rounded-xl border border-yellow-200 mb-12 shadow-sm">
              <h3 className="text-sm font-bold text-slate-500 mb-2 tracking-widest uppercase">TASK</h3>
              <p className="text-xl font-medium text-slate-800">
                Please review the email as if you had just received it in your inbox.
              </p>
            </div>
            <ul className="space-y-6 text-xl text-slate-700">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm font-bold text-sm">1</div>
                <p>Two of eight participants found the 'My Bill Insights' page without prompting</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm font-bold text-sm">2</div>
                <p>Participants commented on how clean and organized the email appeared</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#f0e6ff] w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
            
            <h3 className="text-sm font-bold text-purple-500 mb-2 tracking-widest uppercase flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> QUESTIONNAIRE
            </h3>
            <p className="text-2xl font-medium text-slate-900 mb-12">
              What is your first impression of this email?<br />
              <span className="text-slate-500 font-light">Please describe what you see.</span>
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl rounded-tl-none shadow-sm border border-purple-100 hover:-translate-y-1 transition-transform">
                <p className="text-lg italic text-slate-700">"Appreciate how clean it is, not an overwhelming amount of information"</p>
              </div>
              <div className="bg-white p-6 rounded-2xl rounded-tl-none shadow-sm border border-purple-100 hover:-translate-y-1 transition-transform ml-8">
                <p className="text-lg italic text-slate-700">"...feels organized and not overwhelming"</p>
              </div>
              <div className="bg-white p-6 rounded-2xl rounded-tl-none shadow-sm border border-purple-100 hover:-translate-y-1 transition-transform ml-16">
                <p className="text-lg italic text-slate-700">"Explore your bill insights probably covers the changes [to my bill]"</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Slide 6 - Open Webpage */}
        <section className="bg-white py-24 md:py-32 border-l border-slate-300">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-16 items-center">
              
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <MousePointerClick className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-slate-900">Open Webpage</h2>
                </div>
                
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-12 shadow-sm">
                  <h3 className="text-sm font-bold text-blue-600 mb-3 tracking-widest uppercase">TASK</h3>
                  <p className="text-2xl font-medium text-slate-800">
                    If you haven't yet, click the link under "Explore Your Bill Insights" that reads: "View Details"
                  </p>
                </div>

                <div className="hidden md:flex justify-end pr-12 animate-pulse">
                  <svg viewBox="0 0 100 50" className="w-32 h-16 drop-shadow-md">
                    <path d="M0,15 L60,15 L60,0 L100,25 L60,50 L60,35 L0,35 Z" fill="#cf9aff" stroke="#000" strokeWidth="0.5" />
                  </svg>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-lg">
                <p className="text-xl md:text-2xl font-semibold mb-10 text-slate-900">
                  What did you expect to see after clicking 'View Details'?
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-xl border-l-4 border-green-500 shadow-sm">
                    <p className="text-lg italic font-medium text-green-700">"A comparison of the prior month to the current month showing the difference,"</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border-l-4 border-purple-500 shadow-sm ml-4">
                    <p className="text-lg italic font-medium text-purple-700">"I expected to be shown the reasons for the change"</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border-l-4 border-yellow-500 shadow-sm ml-8">
                    <p className="text-lg italic font-medium text-yellow-700">"I expected to see a comparison for usage or a change in cost"</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border-l-4 border-red-500 shadow-sm ml-12">
                    <p className="text-lg italic font-medium text-red-700">"I thought I'd see like a general, this is what people use"</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Slide 7 - First Impressions */}
        <section className="flex flex-col lg:flex-row min-h-[80vh] border-l border-slate-300 bg-slate-900 text-white">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-slate-800 w-full lg:w-1/3 p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-700">
            
            <h2 className="text-4xl italic mb-12 font-serif text-yellow-200">First Impressions</h2>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-sm font-bold text-slate-400 mb-4 tracking-widest uppercase">TASK</h3>
              <p className="text-2xl leading-relaxed font-light">
                You've arrived at the Bill Insights page. Take a moment to look around and try to understand your charges.
              </p>
            </div>
          </motion.div>

          <div className="w-full lg:w-2/3 p-8 md:p-16 flex flex-col relative justify-center bg-gradient-to-br from-slate-900 to-slate-800">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="bg-blue-600 text-white p-8 md:p-10 rounded-3xl shadow-2xl max-w-xl mx-auto md:ml-12 mb-16 relative transform -rotate-2 hover:rotate-0 transition-transform duration-500 cursor-pointer">
              
              <span className="text-7xl text-blue-300 absolute -top-6 -left-4 font-serif leading-none opacity-50">"</span>
              <p className="text-2xl font-bold text-center leading-relaxed relative z-10">
                This feels like everything I would want to know if I was going to call [my utility company]
              </p>
              <span className="text-7xl text-blue-300 absolute -bottom-12 -right-4 font-serif leading-none opacity-50">"</span>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white text-slate-900 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="w-48 h-48 shrink-0 relative hover:scale-105 transition-transform duration-500 cursor-pointer">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 drop-shadow-md">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="20" />
                    <motion.circle
                      cx="50" cy="50" r="40" fill="transparent" stroke="#4f46e5" strokeWidth="20"
                      strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 60 }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }} />
                    
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white/80 rounded-full m-8 shadow-inner">
                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">Total Amount<br />Due</span>
                  </div>
                  <div className="absolute top-4 -left-8 bg-white px-2 py-1 rounded-md shadow-md text-[10px] flex items-center gap-1 font-medium"><PieChart className="w-3 h-3 text-pink-500" /> Taxes & Fees</div>
                  <div className="absolute bottom-4 -left-4 bg-white px-2 py-1 rounded-md shadow-md text-[10px] flex items-center gap-1 font-medium"><Monitor className="w-3 h-3 text-blue-500" /> Delivery</div>
                  <div className="absolute top-1/2 -right-12 -translate-y-1/2 bg-white px-2 py-1 rounded-md shadow-md text-[10px] flex items-center gap-1 font-medium"><Lightbulb className="w-3 h-3 text-yellow-500" /> Supply</div>
                </div>
                
                <div>
                  <h4 className="text-2xl font-semibold mb-6 border-b border-slate-100 pb-4">Whats Included in My Monthly Bill?</h4>
                  <p className="mb-6 text-slate-500 font-medium">Your total bill consists primarily of:</p>
                  <div className="space-y-6 text-sm">
                    <div className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 shrink-0"></div>
                      <div>
                        <p className="font-bold text-base">Supply</p>
                        <p className="text-slate-600 mt-1">The cost of generating electricity.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                      <div>
                        <p className="font-bold text-base">Distribution and Delivery</p>
                        <p className="text-slate-600 mt-1">The expense of transporting electricity across long distances.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-pink-500 mt-1.5 shrink-0"></div>
                      <div>
                        <p className="font-bold text-base">Taxes & Fees</p>
                        <p className="text-slate-600 mt-1">State and local taxes, fees, and surcharges.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                <p className="text-lg italic font-medium text-slate-700">"I love an infographic, I love how easy it is to absorb."</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Slide 8 - Questionnaire Understanding */}
        <section className="flex flex-col md:flex-row min-h-[60vh] border-l border-slate-300">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#f0e6ff] w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-300">
            
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-slate-900">Understanding</h2>
            </div>
            <p className="text-2xl font-medium text-slate-800 leading-relaxed bg-white/50 p-8 rounded-2xl border border-purple-100 shadow-sm">
              What do you understand about your bill from this page?
            </p>
          </motion.div>
          <div className="bg-[#fbfae1] w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-l-purple-400">
              
              <p className="text-lg italic text-slate-700">
                "I understand that my bill is higher than this month, mainly due to increased energy costs, a longer billing period and more usage likely caused by the weather conditions, and also the 10% increase."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-l-red-400 ml-8">
              
              <p className="text-lg italic text-slate-700 mb-6 pb-6 border-b border-slate-100">
                "I can see what part of my home I'm using the most electricity like the electronics"
              </p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">
                Is anything confusing or unclear?
              </p>
              <div className="space-y-4">
                <p className="text-lg italic text-blue-700 bg-blue-50 p-4 rounded-xl">
                  "No, everything seems very clear. The layout is easy to follow, and the explanation is simple."
                </p>
                <p className="text-lg italic text-blue-700 bg-blue-50 p-4 rounded-xl">
                  "there was nothing confusing or unclear at all in my opinion"
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Slide 9 - Bill Increase */}
        <section className="bg-white py-24 md:py-32 border-l border-slate-300">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}>
              
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Investigating Increases</motion.h2>
              
              <motion.div variants={fadeUp} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-16 shadow-inner">
                <h3 className="text-sm font-bold text-slate-500 mb-4 tracking-widest uppercase">TASK</h3>
                <p className="text-2xl font-medium text-slate-800 mb-8">
                  Based on the information available, what do you think could explain the increase in your bill this month?
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <span className="text-green-700 font-bold">6/8</span>
                    </div>
                    <p className="text-slate-700 font-medium pt-1">Participants cited the rate increase mentioned in the editable module</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <span className="text-blue-700 font-bold">8/8</span>
                    </div>
                    <p className="text-slate-700 font-medium pt-1">Used the monthly comparison widget to understand higher cost</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-[#fbfae1] p-10 md:p-14 rounded-3xl border border-yellow-200 shadow-lg">
                <p className="font-bold text-2xl text-slate-900 mb-10 pb-6 border-b border-yellow-300">Likely reasons your electricity charges are about $28 more</p>
                
                <div className="space-y-8">
                  <div className="bg-white/60 p-6 rounded-2xl border border-yellow-100 hover:bg-white transition-colors cursor-default">
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div>
                        <p className="uppercase tracking-widest text-sm font-bold text-slate-500 mb-2">Weather Conditions or Daylight Hours</p>
                        <p className="text-lg text-slate-800">You used more electricity due to changes in weather.</p>
                      </div>
                      <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-bold text-lg whitespace-nowrap">
                        + $9.73
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/60 p-6 rounded-2xl border border-yellow-100 hover:bg-white transition-colors cursor-default">
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div>
                        <p className="uppercase tracking-widest text-sm font-bold text-slate-500 mb-2 flex items-center gap-2">
                          Bill Period <span className="bg-slate-200 text-slate-700 text-xs px-2 py-0.5 rounded-md font-mono">÷ $6.85</span>
                        </p>
                        <p className="text-lg text-slate-800">You used more electricity because this bill period was 1 day(s) longer.</p>
                      </div>
                      <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-bold text-lg whitespace-nowrap">
                        + $11.42
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 p-6 rounded-2xl border border-yellow-100 hover:bg-white transition-colors cursor-default">
                    <p className="uppercase tracking-widest text-sm font-bold text-slate-500 mb-2">Energy Cost / Energy Use</p>
                    <p className="text-lg text-slate-800 leading-relaxed">Your bill may have changed due to differences in your energy consumption or adjustments in energy prices. To get a breakdown of your energy use, update the information about your home.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Slide 10 & 11 combined visually - Finding Explanations */}
        <section className="bg-slate-900 py-24 md:py-32 border-l border-slate-800 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#4220c5] opacity-20 pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12">
                
                <div>
                  <h3 className="text-sm font-bold text-purple-400 mb-4 tracking-widest uppercase">QUESTIONNAIRE</h3>
                  <p className="text-3xl font-medium mb-8 leading-tight">
                    How easy or difficult was it to find an explanation for the increase in your bill?
                  </p>
                  <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 inline-block mb-12">
                    <p className="text-2xl font-bold text-green-400 flex items-center gap-3">
                      <CheckCircle2 className="w-8 h-8" />
                      Six of eight answered "very easy"
                    </p>
                  </div>
                </div>

                <div className="bg-purple-900/40 p-8 rounded-3xl border border-purple-500/30">
                  <p className="text-lg text-purple-200 mb-6 font-medium">
                    • One participant thought a granular breakdown of usage over time (minutes, hours) would be most helpful:
                  </p>
                  <p className="text-xl italic text-purple-100 leading-relaxed border-l-4 border-purple-500 pl-6">
                    "Perhaps a chart that shows you the time breakdown of your usage, so you could narrow down what is causing the increase, whether it's your air conditioning or the usage of electronics."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12">
                
                <h3 className="text-4xl md:text-5xl font-bold text-yellow-300">Where did you look first?</h3>
                
                <div className="space-y-6">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-xl italic text-slate-300">"Well, right at the top... it answered the question immediately."</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-xl italic text-slate-300">"where I looked first: I, I loved the breakdown... The first point is the energy costs rose, and then I looked at the breakdown of the weather and the extra day....."</p>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-white/10">
                  <div className="flex flex-wrap items-end justify-between gap-8">
                    <div>
                      <p className="text-slate-400 font-medium uppercase tracking-widest text-sm mb-4">First click distribution</p>
                      <div className="flex items-center gap-6">
                        <div>
                          <p className="text-xl font-bold text-white mb-2">Electronics Module</p>
                          <span className="text-5xl font-bold text-purple-400">27%</span>
                        </div>
                        <div className="w-px h-16 bg-white/20 mx-2"></div>
                        <div>
                          <p className="text-xl font-bold text-white mb-2">Top Breakdown</p>
                          <span className="text-6xl font-bold text-yellow-300">73%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* The illustration from slide 11 */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mt-20 max-w-4xl mx-auto w-full aspect-[21/9] bg-[#4220c5] rounded-3xl relative flex items-end justify-center overflow-hidden border border-white/10 shadow-2xl">
              
               <div className="absolute top-6 left-6 bg-white text-slate-900 px-4 py-2 font-mono rounded-lg shadow-lg text-sm font-bold animate-pulse">
                  See a Personalized Tip
                  <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
               </div>
               
               <div className="w-[80%] h-[70%] bg-[#b7adff] rounded-t-xl border-t-4 border-l-4 border-r-4 border-slate-900 relative flex justify-center shadow-inner">
                  <div className="w-[90%] h-10 bg-[#d8d3ff] border-b-4 border-slate-900 absolute top-4 rounded flex items-center gap-4 px-4">
                     <div className="w-4 h-1.5 bg-slate-900 rounded-full"></div>
                     <div className="w-24 h-1.5 bg-slate-900 rounded-full"></div>
                  </div>
                  {/* Computer monitor */}
                  <div className="absolute bottom-[100%] right-12 md:right-24 hover:-translate-y-2 transition-transform cursor-pointer">
                     <div className="w-16 h-32 bg-[#a496ff] border-4 border-slate-900 flex flex-col items-center justify-evenly py-4 rounded-sm">
                        <div className="w-8 h-1.5 bg-slate-900 rounded-full"></div>
                        <div className="w-8 h-1.5 bg-slate-900 rounded-full"></div>
                        <div className="w-8 h-1.5 bg-slate-900 rounded-full"></div>
                     </div>
                  </div>
                  <div className="absolute bottom-[100%] right-36 md:right-48 flex flex-col items-center hover:-translate-y-2 transition-transform cursor-pointer">
                     <div className="w-40 h-28 bg-[#a496ff] border-4 border-slate-900 mb-2 rounded-sm shadow-inner"></div>
                     <div className="w-10 h-6 bg-[#8b79ff] border-x-4 border-slate-900"></div>
                     <div className="w-24 h-3 bg-slate-900 rounded-t-sm"></div>
                  </div>
                  {/* Plant */}
                  <div className="absolute bottom-[100%] left-12 md:left-24 hover:-translate-y-2 transition-transform cursor-pointer">
                     <div className="w-24 h-28 bg-transparent flex flex-wrap gap-1 justify-center items-end pb-4 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-[#8fe1f9] border-2 border-slate-900 absolute top-0 left-0"></div>
                        <div className="w-10 h-10 rounded-full bg-[#8fe1f9] border-2 border-slate-900 absolute top-4 right-0"></div>
                        <div className="w-12 h-12 rounded-full bg-[#8fe1f9] border-2 border-slate-900 absolute top-8 left-2"></div>
                     </div>
                     <div className="w-12 h-10 mx-auto bg-[#c5f0fd] border-4 border-slate-900 rounded-b-lg relative z-20"></div>
                  </div>
               </div>
            </motion.div>

          </div>
        </section>

        {/* Slide 12 - More Info */}
        <section className="bg-white py-24 md:py-32 border-l border-slate-300">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              
              <h2 className="text-3xl font-bold mb-6 text-slate-900">More Information</h2>
              <div className="bg-orange-50 p-6 md:p-8 rounded-2xl border border-orange-100 mb-10">
                <h3 className="text-sm font-bold text-orange-600 mb-4 tracking-widest uppercase">TASK</h3>
                <p className="text-2xl font-medium text-slate-800 leading-relaxed">
                  You are still looking for support on your high bill and want to find more answers to bill-related questions. Where would you go to find more information?
                </p>
              </div>
              
              <div className="space-y-6 text-lg text-slate-700">
                <p className="font-semibold text-xl border-l-4 border-slate-900 pl-4">
                  Seven of eight participants pointed to the FAQs to find more information on bill-related questions.
                </p>
                <div className="pl-5 space-y-4">
                  <p className="flex gap-3"><span className="text-orange-500 mt-1">•</span> One participant thought FAQs were generally unhelpful because they didn't address his uncommon questions.</p>
                  <p className="flex gap-3"><span className="text-orange-500 mt-1">•</span> Opportunity to explore pathways to more support options in this real estate.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl mt-8 italic text-slate-600 border border-slate-100">
                  "I hate [FAQs] because I must not have frequently asked questions... I must have isolated individual questions."
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-100 p-8 md:p-12 rounded-3xl border border-slate-200">
              
              <h3 className="text-2xl font-bold mb-10 text-slate-900 pb-4 border-b border-slate-300">QUESTIONNAIRE Results</h3>
              <div className="space-y-12">
                <div>
                  <p className="text-xl font-medium text-slate-800 mb-4">Were you able to find information on ways to reduce your energy bill?</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl font-bold text-green-600">6/8</div>
                    <div className="text-lg font-bold text-slate-700 uppercase tracking-wide">Answered 'Yes'</div>
                  </div>
                  <p className="italic text-slate-600 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    "The whole lower half of this page has things that can help me"
                  </p>
                </div>
                
                <div>
                  <p className="text-xl font-medium text-slate-800 mb-4">How easy or difficult was it to find ways to reduce your energy bill?</p>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-green-600">7/8</div>
                    <div className="text-lg font-bold text-slate-700 uppercase tracking-wide">Answered 'Very Easy'</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Slide 13 & 14 - Follow up & Opportunities */}
        <section className="bg-[#fbfae1] py-24 md:py-32 border-l border-slate-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}>
              
              <motion.div variants={fadeUp} className="mb-24">
                <h2 className="text-4xl font-bold mb-8 text-slate-900">Follow Up Questionnaire</h2>
                <p className="text-2xl font-light text-slate-700 mb-10 border-l-4 border-slate-900 pl-6">
                  Users were asked how they would describe the overall experience, if anything surprised or confused them and if there is anything they would improve.
                </p>
                
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-yellow-200 mb-12">
                  <div className="flex gap-4 items-start mb-6">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl text-slate-800 font-medium">Participants mentioned how <strong className="text-green-700">easy, smooth and straightforward</strong> the experience was overall.</p>
                    </div>
                  </div>
                  <div className="ml-14">
                    <p className="text-xl text-slate-600 bg-slate-50 p-6 rounded-xl">
                      The amount of information or specificity of information (such as the energy use breakdown) was surprising to some participants.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Ideas for improvement included:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-lg font-medium text-slate-800">Phone number or chat to contact support</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-lg font-medium text-slate-800">More granular usage chart (daily or hourly)</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-lg font-medium text-slate-800">Make the breakdown more interactive to explain categories</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-slate-900 text-white p-10 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-yellow-300">Opportunities Summary</h2>
                
                <div className="space-y-6 text-xl text-slate-200 font-light">
                  <div className="flex gap-6 items-start p-6 hover:bg-white/5 rounded-2xl transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <span className="font-bold text-yellow-300">1</span>
                    </div>
                    <p className="pt-2">Because users first clicked 'View Bill' when prompted to find more information on their charges, <strong className="text-white font-medium">consider positioning link to 'My Bill Insights' page on bill itself</strong>.</p>
                  </div>
                  
                  <div className="flex gap-6 items-start p-6 hover:bg-white/5 rounded-2xl transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <span className="font-bold text-yellow-300">2</span>
                    </div>
                    <p className="pt-2">Consider including more <strong className="text-white font-medium">support pathways on the bottom of the page</strong> (ie. Chat or other unassisted support options).</p>
                  </div>

                  <div className="flex gap-6 items-start p-6 hover:bg-white/5 rounded-2xl transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <span className="font-bold text-yellow-300">3</span>
                    </div>
                    <p className="pt-2">Explore feasibility of <strong className="text-white font-medium">more granular usage chart</strong> for customers interested in seeing peak usage times on a daily or hourly basis.</p>
                  </div>

                  <div className="flex gap-6 items-start p-6 hover:bg-white/5 rounded-2xl transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <span className="font-bold text-yellow-300">4</span>
                    </div>
                    <p className="pt-2">Because so few customers discovered the personalized tips from Home Energy Analysis breakdown, <strong className="text-white font-medium">make them more discoverable</strong> either in UI design or break them out into a separate widget (OPower).</p>
                  </div>

                  <div className="flex gap-6 items-start p-6 hover:bg-white/5 rounded-2xl transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <span className="font-bold text-yellow-300">5</span>
                    </div>
                    <p className="pt-2">Consider how to <strong className="text-white font-medium">make the Home Energy Analysis breakdown more interactive</strong> to allow users to click into categories for more information.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>);

}