import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import MobileNav from "@/components/MobileNav";
import FilterableGallery from "@/components/design/FilterableGallery";
import DesignTestimonials from "@/components/design/DesignTestimonials";
import ConsultationForm from "@/components/design/ConsultationForm";

export default function Writing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">CONTENT</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6">Writing</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="pt-10">
        <FilterableGallery />
        <DesignTestimonials />
        <ConsultationForm />
      </motion.div>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}