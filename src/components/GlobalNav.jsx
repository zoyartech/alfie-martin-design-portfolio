import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import MobileNav from "@/components/MobileNav";

export default function GlobalNav() {
  const location = useLocation();
  const path = location.pathname.split("/")[1] || "Home";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link
            to={createPageUrl("Home")}
            className="text-sm tracking-[0.3em] font-semibold hover:text-[#8B7355] transition-colors duration-300">
            ALFIE MARTIN
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link
              to={createPageUrl("Home")}
              className={`relative text-xs tracking-[0.15em] font-medium transition-colors group ${path === 'Home' ? 'text-black' : 'text-gray-600 hover:text-black'}`}>
              HOME
              <span className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ${path === 'Home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link
              to={createPageUrl("About")}
              className={`relative text-xs tracking-[0.15em] font-medium transition-colors group ${path === 'About' ? 'text-black' : 'text-gray-600 hover:text-black'}`}>
              ABOUT
              <span className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ${path === 'About' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link
              to={createPageUrl("CaseStudies")}
              className={`relative text-xs tracking-[0.15em] font-medium transition-colors group ${path === 'CaseStudies' ? 'text-black' : 'text-gray-600 hover:text-black'}`}>
              CASE STUDIES
              <span className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ${path === 'CaseStudies' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link
              to={createPageUrl("Blog")}
              className={`relative text-xs tracking-[0.15em] font-medium transition-colors group ${path === 'Blog' ? 'text-black' : 'text-gray-600 hover:text-black'}`}>
              BLOG
              <span className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ${path === 'Blog' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link
              to={createPageUrl("Contact")}
              className="relative text-xs tracking-[0.15em] font-medium px-6 py-2 border border-black hover:bg-black hover:text-white transition-all duration-300 text-black">
              CONTACT
            </Link>
          </div>
          <MobileNav activePage={path} />
        </div>
      </div>
    </nav>
  );
}