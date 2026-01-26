import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export default function Home() {
  const scrollToSection = () => {
    document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' });
  };

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
              <Link to={createPageUrl("Home")} className="text-xs tracking-[0.2em] text-black border-b border-black pb-1">
                HOME
              </Link>
              <Link to={createPageUrl("Gallery")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                VISUAL EYE
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] text-gray-400 mb-8"
          >
            CREATIVE DESIGNER
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight max-w-4xl"
          >
            Building at the
            <br />
            intersection of business,
            <br />
            <span className="text-[#C4B5A0]">design & vision.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 mt-12 max-w-md text-sm leading-relaxed"
          >
            Multi-disciplinary designer working across branding, digital experiences, 
            and visual storytelling. Based in New York City. Focused on creating things that matter.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={scrollToSection}
            className="absolute bottom-12 right-12 hidden lg:flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors"
          >
            EXPLORE <ArrowDownRight className="w-4 h-4" />
          </motion.button>
        </div>
      </section>

      {/* Domains Section */}
      <section id="domains" className="py-32 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">DOMAINS OF WORK</p>
          <h2 className="text-3xl md:text-4xl font-light mb-20">Three pillars of creation</h2>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                num: "01",
                title: "Brand & Identity",
                desc: "Visual identity systems, logo design, brand strategy and guidelines"
              },
              {
                num: "02", 
                title: "Digital Design",
                desc: "Web experiences, UI/UX design, interactive prototypes"
              },
              {
                num: "03",
                title: "Art Direction",
                desc: "Creative direction, photography styling, visual storytelling"
              }
            ].map((domain, i) => (
              <motion.div
                key={domain.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="border-t border-gray-200 pt-8">
                  <span className="text-xs text-gray-400 tracking-wider">{domain.num}</span>
                  <h3 className="text-xl font-medium mt-4 mb-3 group-hover:text-[#8B7355] transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {domain.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-left">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800"
          >
            "We need to stop worrying about proving the value of design & just focus on outcomes that provide value." – Denis Weil
          </motion.blockquote>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">VISUAL EYE</p>
              <h2 className="text-3xl md:text-4xl font-light">Selected Works</h2>
            </div>
            <Link 
              to={createPageUrl("Gallery")} 
              className="hidden md:flex items-center gap-2 text-sm hover:text-[#8B7355] transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6974e154f708f4918a2b8d02/4f158f252_msft.png",
              "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
              "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=600&q=80",
              "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-square overflow-hidden"
              >
                <img 
                  src={img} 
                  alt={`Work ${i + 1}`}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>

          <Link 
            to={createPageUrl("Gallery")} 
            className="md:hidden flex items-center justify-center gap-2 text-sm mt-8 hover:text-[#8B7355] transition-colors"
          >
            View All Works <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">READY TO CONNECT?</p>
          <h2 className="text-4xl md:text-5xl font-light mb-12">Let's create something.</h2>
          <a 
            href="mailto:hello@alfiemartin.com"
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
          >
            GET IN TOUCH <ArrowRight className="w-4 h-4" />
          </a>
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