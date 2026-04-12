import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import MobileNav from "@/components/MobileNav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
            <DropdownMenu>
              <DropdownMenuTrigger className="text-slate-950 text-xs font-medium tracking-[0.15em] relative transition-colors group hover:text-white/80 outline-none flex items-center">
                CASE STUDIES
                <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${path === 'Home' ? 'bg-white w-0 group-hover:w-full' : (['CaseStudies', 'UXResearchStudies', 'SideQuests', 'Writing'].includes(path) ? 'bg-black w-full' : 'bg-black w-0 group-hover:w-full')}`}></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-gray-100 shadow-sm mt-4 rounded-none">
                <DropdownMenuItem asChild className="cursor-pointer focus:bg-gray-50 focus:text-black rounded-none">
                  <Link to={createPageUrl("CaseStudies")} className="text-xs font-medium tracking-[0.1em] w-full block uppercase">Design</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer focus:bg-gray-50 focus:text-black rounded-none">
                  <Link to={createPageUrl("UXResearchStudies")} className="text-xs font-medium tracking-[0.1em] w-full block uppercase">UX Research</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer focus:bg-gray-50 focus:text-black rounded-none">
                  <Link to={createPageUrl("SideQuests")} className="text-xs font-medium tracking-[0.1em] w-full block uppercase">Products I've Built</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer focus:bg-gray-50 focus:text-black rounded-none">
                  <Link to={createPageUrl("Writing")} className="text-xs font-medium tracking-[0.1em] w-full block uppercase">Content Strategy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href="mailto:alfie@alfiealfie.com" className="bg-slate-300 text-slate-950 px-6 py-2 text-xs font-medium tracking-[0.15em] relative border transition-all duration-300 border-white hover:bg-white hover:text-black">EMAIL ME


            </a>
          </div>
          <MobileNav activePage={path} isTransparent={path === 'Home'} />
        </div>
      </div>
    </nav>);

}