import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Linkedin, Instagram, Mail } from "lucide-react";

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
    <footer className="bg-white border-t border-gray-100 py-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
          <p className="text-xs text-gray-400 shrink-0">© {new Date().getFullYear()} Alfie Martin. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs font-bold tracking-[0.15em] text-slate-400 uppercase">
            <Link to={createPageUrl("Home")} className="hover:text-slate-900 transition-colors">Home</Link>
            <Link to={createPageUrl("About")} className="hover:text-slate-900 transition-colors">About</Link>
            <Link to={createPageUrl("CaseStudies")} className="hover:text-slate-900 transition-colors">Case Studies</Link>
            <Link to={createPageUrl("MultiMedia")} className="hover:text-slate-900 transition-colors">Multimedia</Link>
            <Link to={createPageUrl("Contact")} className="hover:text-slate-900 transition-colors">Contact</Link>
            <a href="https://medium.com/@alfieaiproductdesign" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Blog</a>
            
            <div className="flex items-center gap-4 ml-0 md:ml-2">
              <a href="https://www.linkedin.com/in/alfieisbored/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/wexleyhouse" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:alfie@alfiealfie.com" className="hover:text-slate-900 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}