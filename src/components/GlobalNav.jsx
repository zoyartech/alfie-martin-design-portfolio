import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import MobileNav from "@/components/MobileNav";

export default function GlobalNav() {
  const location = useLocation();
  const path = location.pathname.split("/")[1] || "Home";

  return (
    <nav className="bg-slate-50 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-slate-50 text-slate-950 flex items-center justify-between h-20">
          <Link
            to={createPageUrl("Home")} className="text-slate-950 text-2xl font-black tracking-[0.3em] transition-colors duration-300 hover:text-white/80">
            
            ALFIE MARTIN
          </Link>
          <div className="text-slate-950 hidden md:flex items-center gap-10">
            <Link
              to={createPageUrl("Home")} className="text-slate-950 text-xs font-medium tracking-[0.15em] relative transition-colors group">
              
              HOME
              <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${path === 'Home' ? 'bg-white w-full' : 'bg-black w-full'}`}></span>
            </Link>
            <Link
              to={createPageUrl("About")} className="text-slate-950 text-xs font-medium tracking-[0.15em] relative transition-colors group hover:text-white/80">
              
              ABOUT
              <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${path === 'Home' ? 'bg-white w-0 group-hover:w-full' : path === 'About' ? 'bg-black w-full' : 'bg-black w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link
              to={createPageUrl("CaseStudies")} className="text-slate-950 text-xs font-medium tracking-[0.15em] relative transition-colors group hover:text-white/80">
              
              CASE STUDIES
              <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${path === 'Home' ? 'bg-white w-0 group-hover:w-full' : path === 'CaseStudies' ? 'bg-black w-full' : 'bg-black w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link
              to={createPageUrl("SideQuests")} className="text-slate-950 text-xs font-medium tracking-[0.15em] relative transition-colors group hover:text-white/80">
              
              SIDE QUESTS
              <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${path === 'Home' ? 'bg-white w-0 group-hover:w-full' : path === 'SideQuests' ? 'bg-black w-full' : 'bg-black w-0 group-hover:w-full'}`}></span>
            </Link>
            <a
              href="mailto:alfie@alfiealfie.com" className="bg-slate-300 text-slate-950 px-6 py-2 text-xs font-medium tracking-[0.15em] relative border transition-all duration-300 border-white hover:bg-white hover:text-black">EMAIL ME


            </a>
          </div>
          <MobileNav activePage={path} isTransparent={path === 'Home'} />
        </div>
      </div>
    </nav>);

}