import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const EMAIL = "alfie@alfiealfie.com";

function WobblyEmail() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="mailto:alfie@alfiealfie.com"
      className="inline-flex flex-wrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ fontFamily: "'PT Serif', Georgia, serif", fontSize: "clamp(2.5rem, 8vw, 6rem)", lineHeight: 1, color: "inherit", textDecoration: "none" }}>
      
      {EMAIL.split("").map((char, i) =>
      <motion.span
        key={i}
        animate={hovered ? { y: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 4 + 1) } : { y: 0 }}
        transition={hovered ?
        { duration: 0.25, delay: i * 0.015, ease: "easeInOut" } :
        { duration: 0.4, ease: "easeOut" }
        }
        className="inline-block"
        style={{ whiteSpace: char === " " ? "pre" : "normal" }}>
        
          {char === " " ? "\u00A0" : char}
        </motion.span>
      )}
    </a>);

}

export default function GlobalFooter() {
  return (
    <footer className="bg-white border-t border-gray-100 py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">Get in touch</p>
        <div className="mb-16">
          <WobblyEmail />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-gray-100">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-gray-900 uppercase">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link to={createPageUrl("Home")} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Home</Link>
              <Link to={createPageUrl("About")} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About</Link>
              <Link to={createPageUrl("CaseStudies")} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Case Studies</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-gray-900 uppercase">Practice Areas</h4>
            <div className="flex flex-col gap-3">
              <Link to={createPageUrl("SideQuests")} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Product Design</Link>
              <Link to={createPageUrl("Writing")} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Content Strategy</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <div className="flex items-center gap-5">
              <a href="mailto:alfie@alfiealfie.com" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/alfieisbored/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/wexleyhouse" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} Alfie Martin. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>);

}