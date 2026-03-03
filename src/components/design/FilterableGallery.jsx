import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "The User Experience of AI Products", category: "AI Design", industry: "Technology", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80", year: "2024", link: "DesignStrategyAI" },
  { title: "TCS NYC Marathon App", category: "Product Design", industry: "Sports & Events", image: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=800&q=80", year: "2023", link: "TCSMarathon" },
  { title: "Grammarly AI Writing Feedback", category: "UX Strategy", industry: "Technology", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80", year: "2023" },
  { title: "Microsoft Fluent Design System", category: "Design Systems", industry: "Enterprise", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80", year: "2023" },
  { title: "Polaroid Digital Brand Identity", category: "Brand Identity", industry: "Consumer", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80", year: "2023" },
  { title: "Workflow Optimization", category: "Product Design", industry: "Enterprise", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80", year: "2022", link: "WorkflowOptimizationHVAC" },
];

const filters = ["All", "AI Design", "Product Design", "Brand Identity", "Design Systems", "UX Strategy"];

export default function FilterableGallery() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-3">CASE STUDIES</p>
            <h2 className="text-3xl md:text-4xl font-light">Selected Work</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-xs tracking-[0.15em] px-4 py-2 border transition-all duration-200 ${
                  active === f ? "bg-black text-white border-black" : "border-gray-300 text-gray-600 hover:border-black hover:text-black"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group"
              >
                {project.link ? (
                  <Link to={createPageUrl(project.link)}>
                    <ProjectCard project={project} />
                  </Link>
                ) : (
                  <ProjectCard project={project} />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
      <div className="pt-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs tracking-[0.15em] text-gray-400">{project.category}</span>
          <span className="text-xs text-gray-400">{project.year}</span>
        </div>
        <h3 className="text-base font-medium group-hover:text-gray-600 transition-colors">{project.title}</h3>
      </div>
    </div>
  );
}