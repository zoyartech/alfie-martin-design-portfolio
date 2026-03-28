import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft } from 'lucide-react';

export default function PrincipalFinancial() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-slate-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <Link to={createPageUrl("CaseStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors uppercase font-bold mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4 uppercase">CASE STUDY</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-slate-900">
              Designing Business Tools for Principal Financial
            </h1>
            <p className="text-gray-500 max-w-3xl text-lg leading-relaxed">
              Streamlining internal processes and enhancing productivity through intuitive business tool design.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
            <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">ROLE</p><p className="text-gray-700">Product Designer</p></div>
            <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">FOCUS</p><p className="text-gray-700">UX/UI, Enterprise Tools</p></div>
            <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">CLIENT</p><p className="text-gray-700">Principal Financial</p></div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Principal: Client Overview Dashboard & SBO Advisory Suite
</h2>
            <p className="text-slate-600 leading-relaxed text-lg">I was lead product designer on Principal's SBO Advisory platform, a suite of web and mobile tools helping financial advisors guide small business owners through retirement, succession planning, and business sales. The flagship piece was the Client Overview dashboard, supported by a mobile companion app for advisors and a client-facing web portal for business owners tracking their own readiness.

            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">The Solution</h2>
            <p className="text-slate-600 leading-relaxed text-lg">The core problem was that advisors had no single view of the full client picture. Business valuation, personal wealth, insurance gaps, compliance flags, succession status, tax strategy, cash runway. All of it lived in different systems. The platform needed to surface the right signal at the right moment so advisors could have better conversations with clients, making the biggest financial decision of their lives.
The biggest design challenge was density. Advisors wanted everything visible at once but the data model per client was enormous. I landed on the card-based layout with a persistent detail nav as a compromise. Top row gives a fast situational read, chart row shows trend and performance, bottom row surfaces risk and holdings. The left nav lets advisors drill into any domain without leaving the page.
</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            
            








            
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>);
}