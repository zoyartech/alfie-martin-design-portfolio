import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";
import MobileNav from "@/components/MobileNav";

const carouselImages = [
  "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/1bcfe2c17_alsharedasketchwithyou14.png",
  "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/e19e1242e_aaaaa.png",
  "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/774fe444f_event-poster-design-template-66e0f3800fa4ecb1a1e657ce-2x.png",
  "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/47f6fd98a_IMG_0491.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/66b2b5477_50x70cm-indoor-poster-frame-mockup-template-69b69d83064993c800576d31-2x.png",
  "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/0fa026090_IMG_34452.jpg"
];

export default function WorkflowOptimizationHVAC() {
  return (
    <div className="min-h-screen bg-white">


      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
            <Link to={createPageUrl("CaseStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                <ArrowLeft className="w-4 h-4" /> BACK TO CASE STUDIES
            </Link>
        </div>

        <section className="pb-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">ENTERPRISE UX</p>
              <h2 className="text-4xl md:text-5xl font-light mb-6 max-w-4xl">Creative Direction and Visual Design</h2>
              

              
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">ROLE</p><p className="text-gray-700">Creative Direction, Brand, Visuals</p></div>
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">INDUSTRY</p><p className="text-gray-700">Various</p></div>
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">YEAR</p><p className="text-gray-700">2012-</p></div>
            </div>
          </div>
        </section>

        <section className="py-8 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/229315afd_2-ratio-1-outdoor-billboard-mockup-template-69bbedce2b60532d8c62109f-2x.png" alt="Dashboard Design" className="w-full h-auto object-contain rounded-lg" />
            </div>
        </section>

        <section className="py-16 bg-gray-50 overflow-hidden relative">
          <style>
            {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-carousel {
              animation: scroll 40s linear infinite;
              display: flex;
              width: fit-content;
            }
            `}
          </style>
          <div className="animate-carousel hover:[animation-play-state:paused]">
            <div className="flex items-center gap-8 pr-8">
              {carouselImages.map((src, index) => (
                <div key={index} className="w-[85vw] md:w-[65vw] flex-shrink-0">
                  <img src={src} alt="Gallery" className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-8 pr-8">
              {carouselImages.map((src, index) => (
                <div key={`dup-${index}`} className="w-[85vw] md:w-[65vw] flex-shrink-0">
                  <img src={src} alt="Gallery" className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </section>

        
















        
      </div>

      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>);

}