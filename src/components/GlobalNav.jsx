import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import MobileNav from "@/components/MobileNav";

export default function GlobalNav() {
  const location = useLocation();
  const path = location.pathname.split("/")[1] || "Home";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${path === 'Home' ? 'bg-transparent border-b border-white/10' : 'bg-white/95 backdrop-blur-md border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex items-center justify-between h-20">
          <Link
            to={createPageUrl("Home")}
            className={`text-sm tracking-[0.3em] font-semibold transition-colors duration-300 ${path === 'Home' ? 'text-white hover:text-white/80' : 'text-black hover:text-[#8B7355]'}`}>
            ALFIE MARTIN
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link
              to={createPageUrl("Home")}
              className={`relative text-xs tracking-[0.15em] font-medium transition-colors group ${path === 'Home' ? 'text-white' : 'text-black'}`}>
              HOME
              <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${path === 'Home' ? 'bg-white w-full' : 'bg-black w-full'}`}></span>
            </Link>
            <Link
              to={createPageUrl("About")}
              className={`relative text-xs tracking-[0.15em] font-medium transition-colors group ${path === 'Home' ? 'text-white hover:text-white/80' : (path === 'About' ? 'text-black' : 'text-gray-600 hover:text-black')}`}>
              ABOUT
              <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${path === 'Home' ? 'bg-white w-0 group-hover:w-full' : (path === 'About' ? 'bg-black w-full' : 'bg-black w-0 group-hover:w-full')}`}></span>
            </Link>
            <Link
              to={createPageUrl("CaseStudies")}
              className={`relative text-xs tracking-[0.15em] font-medium transition-colors group ${path === 'Home' ? 'text-white hover:text-white/80' : (path === 'CaseStudies' ? 'text-black' : 'text-gray-600 hover:text-black')}`}>
              CASE STUDIES
              <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${path === 'Home' ? 'bg-white w-0 group-hover:w-full' : (path === 'CaseStudies' ? 'bg-black w-full' : 'bg-black w-0 group-hover:w-full')}`}></span>
            </Link>
            <Link
              to={createPageUrl("Blog")}
              className={`relative text-xs tracking-[0.15em] font-medium transition-colors group ${path === 'Home' ? 'text-white hover:text-white/80' : (path === 'Blog' ? 'text-black' : 'text-gray-600 hover:text-black')}`}>
              BLOG
              <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${path === 'Home' ? 'bg-white w-0 group-hover:w-full' : (path === 'Blog' ? 'bg-black w-full' : 'bg-black w-0 group-hover:w-full')}`}></span>
            </Link>
            <Link
              to={createPageUrl("Contact")}
              className={`relative text-xs tracking-[0.15em] font-medium px-6 py-2 border transition-all duration-300 ${path === 'Home' ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}>
              CONTACT
            </Link>
          </div>
          <MobileNav activePage={path} isTransparent={path === 'Home'} />
        </div>
      </div>
    </nav>
  );
}