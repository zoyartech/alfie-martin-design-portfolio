import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import MobileNav from "@/components/MobileNav";
import FilterableGallery from "@/components/design/FilterableGallery";
import DesignTestimonials from "@/components/design/DesignTestimonials";
import ConsultationForm from "@/components/design/ConsultationForm";

export default function Design() {


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
              <Link to={createPageUrl("About")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                ABOUT
              </Link>
              <Link to={createPageUrl("Design")} className="text-xs tracking-[0.2em] text-black border-b border-black pb-1">
                DESIGN
              </Link>
              


              <Link to={createPageUrl("Contact")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                CONTACT
              </Link>
            </div>
            <MobileNav activePage="Design" />
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>

            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">DESIGN WORK</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6">Design Projects</h1>
            <p className="text-gray-500 max-w-2xl">AI Related Design and building + my favorite examples of my work that show my growth and evolution as a designer


            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      

































      <FilterableGallery />

      <DesignTestimonials />

      <ConsultationForm />

      {/* Process Section */}
      <section className="py-16 md:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-12">DESIGN PROCESS</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
            {
              step: "01",
              title: "Discovery",
              description: "Understanding business goals, user needs, and market landscape"
            },
            {
              step: "02",
              title: "Strategy",
              description: "Defining design principles, positioning, and visual direction"
            },
            {
              step: "03",
              title: "Execution",
              description: "Creating comprehensive design systems and assets"
            },
            {
              step: "04",
              title: "Refinement",
              description: "Testing, iterating, and optimizing based on feedback"
            }].
            map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-gray-300 pt-6">

                <span className="text-xs text-gray-400 tracking-wider">{item.step}</span>
                <h3 className="text-xl font-medium mt-4 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )}
          </div>
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
    </div>);

}