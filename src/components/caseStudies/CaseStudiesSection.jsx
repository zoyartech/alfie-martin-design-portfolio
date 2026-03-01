import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "./caseStudiesData";

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">CASE STUDIES</p>
          <h2 className="text-3xl md:text-4xl font-light">Selected Work</h2>
        </motion.div>

        <div className="space-y-0">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to={createPageUrl(`CaseStudyDetail?id=${study.id}`)}
                className="group flex flex-col md:flex-row items-start gap-8 py-12 border-t border-gray-100 hover:bg-gray-50 transition-colors duration-300 -mx-6 lg:-mx-12 px-6 lg:px-12"
              >
                {/* Client Logo */}
                <div className="flex-shrink-0 w-24 h-16 flex items-center justify-start">
                  <img
                    src={study.logo}
                    alt={study.client}
                    className="max-h-10 max-w-[80px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.tags.map((tag) => (
                      <span key={tag} className="text-xs tracking-[0.15em] text-gray-400">
                        {tag}{" "}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-light mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                    {study.description}
                  </p>
                </div>

                {/* Year + Arrow */}
                <div className="flex-shrink-0 flex flex-col items-end gap-4 self-center">
                  <span className="text-xs text-gray-400">{study.year}</span>
                  <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
          <div className="border-t border-gray-100" />
        </div>
      </div>
    </section>
  );
}