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
    <nav className="bg-background/90 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex items-center justify-between h-20">
          <Link
            to={createPageUrl("Home")} className="text-foreground text-2xl font-black tracking-[0.3em] transition-colors duration-300 hover:text-slate-500">
            ALFIE MARTIN
          </Link>
          <div className="text-foreground hidden md:flex items-center gap-10">
            <Link
              to={createPageUrl("Home")} className="text-foreground text-xs font-bold tracking-[0.15em] relative transition-colors group hover:text-slate-500">
              HOME
              <span className={`absolute -bottom-2 left-0 h-[2px] transition-all duration-300 bg-foreground ${path === 'Home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link
              to={createPageUrl("About")} className="text-foreground text-xs font-bold tracking-[0.15em] relative transition-colors group hover:text-slate-500">
              ABOUT
              <span className={`absolute -bottom-2 left-0 h-[2px] transition-all duration-300 bg-foreground ${path === 'About' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link
              to={createPageUrl("CaseStudies")} className="text-foreground text-xs font-bold tracking-[0.15em] relative transition-colors group hover:text-slate-500">
              CASE STUDIES
              <span className={`absolute -bottom-2 left-0 h-[2px] transition-all duration-300 bg-foreground ${path === 'CaseStudies' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link
              to={createPageUrl("Contact")} className="text-foreground text-xs font-bold tracking-[0.15em] relative transition-colors group hover:text-slate-500">
              CONTACT
              <span className={`absolute -bottom-2 left-0 h-[2px] transition-all duration-300 bg-foreground ${path === 'Contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link
              to={createPageUrl("Blog")} className="text-foreground text-xs font-bold tracking-[0.15em] relative transition-colors group hover:text-slate-500">
              BLOG
              <span className={`absolute -bottom-2 left-0 h-[2px] transition-all duration-300 bg-foreground ${path === 'Blog' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <MobileNav activePage={path} />
          </div>
        </div>
      </div>
    </nav>
  );
}