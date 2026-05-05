import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Linkedin, Instagram, Mail } from "lucide-react";

export default function GlobalFooter() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-gray-400 shrink-0">© {new Date().getFullYear()} Alfie Martin. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            <div className="flex items-center gap-6 text-xs font-bold tracking-[0.15em] text-gray-400 uppercase">
              <Link to={createPageUrl("Home")} className="hover:text-slate-900 transition-colors">HOME</Link>
              <Link to={createPageUrl("About")} className="hover:text-slate-900 transition-colors">ABOUT</Link>
              <Link to={createPageUrl("CaseStudies")} className="hover:text-slate-900 transition-colors">CASE STUDIES</Link>
              <Link to={createPageUrl("MultiMedia")} className="hover:text-slate-900 transition-colors">MULTIMEDIA</Link>
              <Link to={createPageUrl("Contact")} className="hover:text-slate-900 transition-colors">CONTACT</Link>
              <a href="https://medium.com/@alfieaiproductdesign" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">BLOG</a>
            </div>
            
            <div className="flex items-center gap-4 text-gray-400">
              <a href="https://www.linkedin.com/in/alfieisbored/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/wexleyhouse" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:alfie@alfiealfie.com" className="hover:text-slate-900 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}