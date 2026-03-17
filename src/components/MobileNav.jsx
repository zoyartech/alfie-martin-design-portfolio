import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav({ activePage = "" }) {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "HOME", page: "Home" },
    { label: "ABOUT", page: "About" },
    { label: "CASE STUDIES", page: "CaseStudies" },
    { label: "CONTACT", page: "Contact" },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="p-2 text-gray-700 hover:text-black transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100">
              <Link
                to={createPageUrl("Home")}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.3em] font-semibold"
              >
                ALFIE MARTIN
              </Link>
              <button onClick={() => setOpen(false)} className="p-2 text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col px-6 pt-10 gap-8">
              {links.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  onClick={() => setOpen(false)}
                  className={`text-lg tracking-[0.2em] font-light transition-colors ${
                    activePage === link.page ? "text-black border-b border-black pb-1 w-fit" : "text-gray-500 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}