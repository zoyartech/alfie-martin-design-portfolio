import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";
import MobileNav from "@/components/MobileNav";

export default function CaseStudyDetail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  return (
    <div className="min-h-screen bg-white">


      <div className="pt-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <Link to={createPageUrl("CaseStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" /> BACK TO CASE STUDIES
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">CASE STUDY</p>
              <h2 className="text-4xl md:text-5xl font-light mb-6 max-w-4xl">Project Details</h2>
              <p className="text-gray-500 max-w-3xl text-lg leading-relaxed">
                Detailed insights into the design process, challenges, and outcomes for this initiative. {id && `(Project ID: ${id})`}
              </p>
            </motion.div>
        </div>
      </div>
    </div>
  );
}