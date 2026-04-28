import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav({ activePage = "", isTransparent = false }) {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "HOME", page: "Home" },
    { label: "ABOUT", page: "About" },
    { label: "CASE STUDIES", page: "CaseStudies" },
    { label: "CONTACT", page: "Contact" },
    { label: "BLOG", page: "Blog" }
  ];


  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className={`p-2 rounded-md transition-colors ${isTransparent ? 'text-white bg-transparent hover:text-white/80' : 'bg-white text-gray-700 hover:text-black'}`}
        aria-label="Open menu">
        
        <Menu className="text-slate-950 lucide lucide-menu w-5 h-5" />
      </button>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] bg-white flex flex-col">
          
            <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100">
              <Link
              to={createPageUrl("Home")}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.3em] font-semibold">
              
                ALFIE MARTIN
              </Link>
              <button onClick={() => setOpen(false)} className="p-2 text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="bg-slate-50 pt-10 px-6 flex flex-col gap-8">
              {links.map((link) => {
                if (link.type === "dropdown") {
                  return (
                    <div key={link.label} className="flex flex-col gap-5">
                      <div className="text-lg tracking-[0.2em] font-light text-black">
                        {link.label}
                      </div>
                      <div className="flex flex-col gap-5 pl-4 border-l border-gray-200">
                        {link.items.map((item) => (
                          <Link
                            key={item.page}
                            to={createPageUrl(item.page)}
                            onClick={() => setOpen(false)}
                            className={`text-[15px] tracking-[0.2em] font-light transition-colors ${
                            activePage === item.page ? "text-black border-b border-black pb-1 w-fit" : "text-gray-500 hover:text-black"}`
                            }>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    onClick={() => setOpen(false)}
                    className={`text-lg tracking-[0.2em] font-light transition-colors ${
                    activePage === link.page ? "text-black border-b border-black pb-1 w-fit" : "text-gray-500 hover:text-black"}`
                    }>
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}