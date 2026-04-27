import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { createPageUrl } from "@/utils";
import { base44 } from "@/api/base44Client";

export default function UXResearchStudies() {
  useEffect(() => {
    base44.analytics.track({
      eventName: "viewed_ux_research_studies",
      properties: { page: "UXResearchStudies" }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Header */}
      <section className="pt-32 pb-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4 uppercase">Portfolio</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6 font-serif text-slate-900">UX Research Studies</h1>
            <p className="text-slate-500 max-w-3xl text-lg leading-relaxed">
              A collection of foundational research, usability testing, and strategic user insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 lg:px-12 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <Link to={createPageUrl("ExelonUXR")} className="group block">
            <div className="aspect-[4/3] bg-[#003B5C] rounded-xl border border-gray-100 overflow-hidden mb-6 flex items-center justify-center p-8 transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-200">
                <div className="text-white font-serif text-3xl font-bold text-center leading-tight">
                    Buy Now, Pay Later<br/><span className="text-blue-200">for Energy Bills</span>
                </div>
            </div>
            <div>
                <div className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">Exelon Corporation</div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#003B5C] transition-colors">BNPL Feasibility Study</h3>
                <p className="text-slate-600 font-sans">Customer Attitudes Toward Flexible Payment Options Among Accounts with 3+ Late or Missed Payments.</p>
            </div>
          </Link>

          <Link to={createPageUrl("RCMUXR")} className="group block">
            <div className="aspect-[4/3] bg-[#faf9f6] rounded-xl border border-gray-200 overflow-hidden mb-6 flex items-center justify-center p-8 transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-300">
                <div className="text-slate-900 font-serif text-3xl font-bold text-center leading-tight">
                    Ethnographic<br/><span className="text-[#bba986]">Interview Findings</span>
                </div>
            </div>
            <div>
                <div className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">Rockefeller Capital Management</div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#bba986] transition-colors">Member Mobile Experience</h3>
                <p className="text-slate-600 font-sans">Redesigning the Member-Facing Mobile App through proxy-facilitated ethnographic interviews.</p>
            </div>
          </Link>

          <Link to={createPageUrl("BillingUsabilityStudy")} className="group block">
            <div className="aspect-[4/3] bg-white rounded-xl border border-gray-200 overflow-hidden mb-6 flex items-center justify-center p-0 transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-300">
                <img src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=1200" alt="Exelon Usability Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div>
                <div className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">Exelon Corporation</div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Billing & Payments Usability Study</h3>
                <p className="text-slate-600 font-sans">Evaluate the usability of the updated 'Bill is Ready' email and the clarity of 'My Bill Insights' page.</p>
            </div>
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}