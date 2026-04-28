import React, { useState } from "react";
import { motion } from "framer-motion";

const EMAIL = "alfie@alfiealfie.com";

function WobblyEmail() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="mailto:alfie@alfiealfie.com"
      className="inline-flex flex-wrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ fontFamily: "'PT Serif', Georgia, serif", fontSize: "clamp(2.5rem, 8vw, 6rem)", lineHeight: 1, color: "inherit", textDecoration: "none" }}
    >
      {EMAIL.split("").map((char, i) => (
        <motion.span
          key={i}
          animate={hovered ? { y: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 4 + 1) } : { y: 0 }}
          transition={hovered
            ? { duration: 0.25, delay: i * 0.015, ease: "easeInOut" }
            : { duration: 0.4, ease: "easeOut" }
          }
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </a>
  );
}

export default function GlobalFooter() {
  return (
    <footer className="bg-white border-t border-gray-100 py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">Get in touch</p>
        <div className="mb-16">
          <WobblyEmail />
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-gray-100 pt-8">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Alfie Martin. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}